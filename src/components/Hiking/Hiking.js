import React from 'react'
import './Hiking.css'

const Hiking = () => {
    return (
        <div className="hikingContainer">
            <h5>Torna Fort Trek</h5>
            <hr/>
            <p><u>Elevation</u>: 4,603 ft </p>
            <p><u>Distance from campsite</u>: 1 hr</p>
            <p><u>History</u>: The historic fort of Torna (also known as Prachandgad) was the first fort conquered by King Shivaji Maharaj at the age of 16.
                Because of its enormous height it is usually covered in the clouds and provides breathtaking views of the Sahyadri Mountain ranges.</p>
            <p><u>Things to carry</u>: First-aid kit, food, torch, ID card, water, energy bars</p>
            <p><u>Your responsibility</u>: We ask that you follow the Leave No Trace outdoor ethics while visiting our beautiful and historic Torna Fort.</p>
            <p>To read in-depth details about the hike <a rel="noopener noreferrer" target="_blank" href="https://indiahikes.com/documented-trek/torna-fort-tek/#what-to-watch-out-for">click here</a></p>
        </div>
    )
}

export default Hiking
