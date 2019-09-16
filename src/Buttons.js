import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
    return(
        <div className="mt-3">

            {/* <button className="btn btn-danger mr-4"data-toggle="modal" data-target="#adminLoginModal">Admin Login</button> */}
            
            <Link to="/">
                <button className="btn btn-primary mr-4">Home</button>
            </Link>
            <Link to="/find/doctor">
            <button className="btn btn-secondary mr-4">
                Find Doctors
            </button>
            </Link>
            <Link to="/find/test">
            <button className="btn btn-success">
                Find Tests
            </button>
            </Link>
        </div>     
    )
}