import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
    return(
        <div className="mt-3">

            <button className="btn btn-danger mr-4"data-toggle="modal" data-target="#adminLoginModal">Admin Login</button>
            
            <Link to="/">
                <button className="btn btn-primary mr-4">Home</button>
            </Link>
            <Link to="/finddoctor">
            <button className="btn btn-secondary">
                Find Doctors
            </button>
            </Link>
        </div>     
    )
}