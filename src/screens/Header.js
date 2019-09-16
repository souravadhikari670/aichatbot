import React from 'react'
import './Style.css'
import Buttons from '../Buttons'
import AdminLogin from './AdminLogin'
// import Register from './Register'

export default function Header() {
 
    return(
        <div className="container-fluid p-3" id='header'>
            <div className="row">
                <div className="col-md-1">
                <div className="ml-4" id="logoCon"></div>
                </div>
                <div className="col-md-4 d-flex justify-content-start">
                    <span className="text-light" id="headerText">PgiBot</span>
                </div>
                <div className="col-md-7">
                    <Buttons />
                </div>
            </div>
            <AdminLogin />
        </div>
    )
}