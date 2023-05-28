import React, { Component } from 'react'
import './styles.css'

export default class Policies extends Component{
    render(){
        return(
            <div className="container policiesContainer">
                <h4>Policies</h4>
                <ul>
                    <li>
                        <h5> 
                            Age
                            <span role="img" aria-label="age"> 🧑 </span> 
                        </h5>
                        <p>You must be 18 years of age or older to rent a campsite. You must also carry valid a photo ID </p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Campfire  
                            <span role="img" aria-label="campfire"> 🔥 </span> 
                        </h5>
                        <p>Fires may only be built in the fire rings that are provided. <br/>
                        Put the fire out properly every time. When you are done with your campfire make sure it is extinguished properly. 
                        Dump water on the fire, stir the ashes with a shovel, then dump more water on the fire. The campfire should be cold before you leave it unattended.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Valuables
                            <span role="img" aria-label="valuables"> 💰 </span> 
                        </h5> 
                        <p>We are not responsible for valuables kept in tent. It's individuals duty to keep valuables safe.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Smoking
                            <span role="img" aria-label="smoking"> 🚬 </span> 
                        </h5>
                        <p>Smoking is not allowed in any indoor facilities (tents, restrooms, shelters, etc).</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Alcohol
                            <span role="img" aria-label="alcohol"> 🍻 </span> 
                        </h5>
                        <p>Alcohol is strictly prohibited. If found drunk, services will be closed without any refund!<br/>
                        Local organizations from the village do not take such incidences lightly and are out of control of ElectroShop management.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Cleanliness
                            <span role="img" aria-label="cleanliness"> ♻️ </span> 
                        </h5>
                        <p>Please do not litter or vandalize anywhere near or outside the campsite. <br/>
                        Always put your trash in the recycle bin. Trash left outside on the property may attract wild animals from nearby jungle, putting everyone's life at risk. <br/>
                        Additionally, we all must do our part to keep the surrounding clean and leave it in better shape for future visitors!</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Respecting nature
                            <span role="img" aria-label="respecting_nature"> 🌄 </span> 
                        </h5>
                        <p>Don't be loud during your stay! Respect your neighbors! <br/>
                        Nature can be best heard in peace. With unnecessary noise you will attract nearby wild animals.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Quite hours
                            <span role="img" aria-label="quite_hours"> 🕰 </span> 
                        </h5>
                        <p>10 PM to 8 AM are strict quite hours. No loud music of any sort or singing is permitted. We host hikers who start early in the morning. 
                        They need good night's sleep to take up the difficult hike next day. Your co-operation is expected. <br/> 
                        Additionally, because of no barriers, noise from mountain top is easily heard in villages at the base of fort. 
                        Villagers will not take this lightly and Torna Campsite management is not responsible for consequences of your rogue actions.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Couples
                            <span role="img" aria-label="couples"> 👫 </span> 
                        </h5>
                        <p>We accept bookings for 18+ only with valid government ID proofs.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Bookings
                            <span role="img" aria-label="bookings"> 🧾 </span> 
                        </h5>
                        <p>We suggest to confirm bookings before two days of travel.</p>
                    </li>
                    <hr/>
                    <li>
                        <h5> 
                            Fine 
                            <span role="img" aria-label="fine "> 💸 </span> 
                        </h5>
                        <p>One will get charged 1000 Rs on breaking of policies. Mutual respect and trust is seen abundantly on site, but should not be misunderstood as leniency.</p>
                    </li>
                </ul>
            </div>
        );
    }
}