import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import 'weather-icons/css/weather-icons.css'

import Header from './components/Header/Header.js'
import PageNotFound404 from './components/PageNotFound404/PageNotFound404.js'
import Home from './components/Home/Home.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import Footer from './components/Footer/Footer.js'
import Login from './components/Forms/Login/Login.js'
import SignUp from './components/Forms/SignUp/SignUp.js'
import Policies from './components/Guidelines/Policies.js'
import Planning from './components/PlanningTrip/PlanningTrip.js'
import Weather from './components/Weather/Weather.js'
import Booking from './components/Forms/Booking/Booking.js'
import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/aboutus" element={<AboutUs/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/policies" element={<Policies/>}></Route>
              <Route path="/planning" element={<Planning/>}></Route>
              <Route path="/weather" element={<Weather/>}></Route>
              <Route path="/booking" element={<Booking/>}></Route>
              <Route path="/404" element={<PageNotFound404/>}></Route> 
              <Route path="*" element={<PageNotFound404/>}></Route>
              {/* <Navigate to="/404" /> */}
            </Routes>
          </Router>
        </div>
        <Footer/>
      </div>
    );
  }
}


// {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
// class App extends Component{
//   render(){
//     return(
//       <div className="page-container">
        // <div className="content-wrap">
        //   <Router>
        //     <Header/>
        //     <Switch>
        //       <Route exact path="/" component={Home}></Route>
        //       <Route exact path="/signup" component={SignUpForm}></Route>
        //       <Route exact path="/login" component={LoginForm}></Route>
        //       <Route exact path="/addrestaurant" component={AddRestaurantPage}></Route>
        //       <Route exact path="/aboutus" component={AboutUs}></Route>
        //       <Route exact path="/rating" component={StarRating}></Route>
        //       <Route exact path="/404" component={NotFoundPage}></Route>
        //       <Redirect to="/404" />
        //     </Switch>
        //   </Router>
        // </div>
        // <Footer/>
//       </div>
//     );
//   }
// }
// export default App;
