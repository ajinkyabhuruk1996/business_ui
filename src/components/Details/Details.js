import React from 'react'
import { Table } from 'react-bootstrap'
import './Details.css'
const Details = () => {
    return (
        <div className="container detailsContainer">
            <Table borderless hover>
                <tbody>
                    <tr>
                        <td>Check in time: </td>
                        <td>After 3 PM</td>
                    </tr>
                    <tr>    
                        <td>Check out time: </td>
                        <td>Before 11 AM</td>
                    </tr>
                    <tr>
                        <td>Minimum nights: </td>
                        <td>1 night</td>
                    </tr>
                    <tr>
                        <td>Accepts bookings: </td>
                        <td>Year round</td>
                    </tr>
                    <tr>
                        <td>Toilet: </td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td>Shower: </td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td>Pets: </td>
                        <td>Allowed</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Details
