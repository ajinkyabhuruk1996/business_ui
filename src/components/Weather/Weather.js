import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Weather.css'


const API_Key = "00bce90a48a0cd424056d674e124ad0f"
const latitude = "18.2769"
const longitude = "73.6219"

export default class Weather extends Component{
    constructor(props){
        super(props);
        this.state={
            icon: undefined,
            temp_celsius: undefined,
            maxTemp: undefined,
            minTemp:undefined,
            description: "",
            sunrise: undefined,
            sunset: undefined,
        };

        this.getWeather();

        this.weatherIcon={
            Thunderstorm:"wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Clear: "wi-day-sunny",
            Clouds: "wi-cloudy",
            Default: "wi-thermometer",
        }
    }

    calculateCelsius(temp){
        return Math.floor(temp - 273.15);
    }

    calculateTime(timestamp){
        var calcDate = new Date(timestamp * 1000)
        var calcHours = calcDate.getHours()
        var calcMinutes = "0" + calcDate.getMinutes()
        var calcSeconds = "0" + calcDate.getSeconds();
        return calcHours + ":" + calcMinutes.substr(-2) + ":" + calcSeconds.substr(-2);
    }

    getWeatherIcons(icon, rangeID){
        switch(true){
            case rangeID>=200 && rangeID<=232: //thunderstorm
                this.setState({icon: this.weatherIcon.Thunderstorm});
            break;
            case rangeID>=300 && rangeID<=321: //drizzle
                this.setState({icon: this.weatherIcon.Drizzle});
            break;
            case rangeID>=500 && rangeID<=531: //rain
                this.setState({icon: this.weatherIcon.Rain});
            break;
            case rangeID===800: //clear
                this.setState({icon: this.weatherIcon.Clear});
            break;
            case rangeID>=801 && rangeID<=804: //clouds
                this.setState({icon: this.weatherIcon.Clouds});
            break;
            default:
                this.setState({icon:this.weatherIcon.Default});
        }
    }

    getWeather = async()=>{ 
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}`);
        const response = await api_call.json();

        this.setState({
            temp_celsius: this.calculateCelsius(response.main.temp),
            maxTemp: this.calculateCelsius(response.main.temp_max),
            minTemp: this.calculateCelsius(response.main.temp_min),
            description: response.weather[0].description,
            sunrise: this.calculateTime(response.sys.sunrise),
            sunset: this.calculateTime(response.sys.sunset),
        })

        //setting icons
        this.getWeatherIcons(this.weatherIcon, response.weather[0].id)
    }

    render(){
        return(
            <div>
                <Card className="weatherCard">
                    <Card.Header 
                        style={{"fontSize": "1.1rem"}}
                    >
                        Weather at Velhe, Pune, Maharashtra <br/>
                        as of {new Date().toLocaleTimeString()}
                    </Card.Header>
                    <Card.Body>
                        <h5>
                            <i style={{"color": "gray", "marginTop" : "3%", "marginBottom" : "3%"}} className={`wi ${this.state.icon} display-1`}/>
                        </h5>
                        <p className="py2 boldText">{this.state.temp_celsius}&deg;C</p>
                        <p style={{"marginTop" : "1%"}}>
                            <span className="px-4 boldText">{this.state.minTemp}&deg;C</span>
                            <span className="px-4 boldText">{this.state.maxTemp}&deg;C</span> 
                        </p>
                        <div>
                            <span className="px-4">Min</span>
                            <span className="px-4">Max</span>
                        </div>
                        <p style={{"marginTop" : "5%"}} className="boldText">{this.state.description.charAt(0).toLocaleUpperCase()}{this.state.description.substr(1)}</p>
                        <hr/>
                        <div>
                            <span className="px-4"> Sunrise: {this.state.sunrise}</span>
                            <span className="px-4"> Sunset: {this.state.sunset}</span>
                        </div>
                        <hr/>
                        <h6>
                            For future forecast&nbsp;
                            <a rel="noopener noreferrer" target="_blank" href="https://weather.com/weather/today/l/9c3d9dbc261b101507398dff47e63bb9830c2ba9c13282c8333bef782b6e3216">click here⇗</a>
                        </h6>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}