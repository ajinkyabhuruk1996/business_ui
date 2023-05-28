import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Recommendations from '../Recommendations/Recommendations.js'
import Details from '../Details/Details.js'
import Hiking from '../Hiking/Hiking.js'
import PlanAhead from '../PlanAhead/PlanAhead.js'

const Planning = () => {
    return (
        <div className="container">
            <Tabs defaultActiveKey="plan" id="uncontrolled-tab-example">
                <Tab eventKey="plan" title="Plan ahead">
                    <PlanAhead/>
                </Tab>
                <Tab eventKey="details" title="Campsite details">
                    <Details/>
                </Tab>
                <Tab eventKey="planning" title="Places to visit">
                    <Recommendations/>
                </Tab>
                <Tab eventKey="hiking" title="Hiking">
                    <Hiking/>
                </Tab>  
            </Tabs>
        </div>
    )
}

export default Planning
