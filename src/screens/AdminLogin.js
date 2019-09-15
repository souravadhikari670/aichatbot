import React from 'react'
import { Redirect } from 'react-router-dom'
export default class Login extends React.Component {
    constructor( props ){
        super( props )
        this.state = {
            adminUsername: "admin",
            adminPassword: "12345",
            authenticate: false,
            username: "",
            password: ""
        }
    }

    changeHandler = event =>{
        this.setState({[event.target.name] : event.target.value })
    }

    accessHandler = () =>{
        //check admin access
        if( this.state.username === this.state.adminUsername ){
            if( this.state.password === this.state.adminPassword ){
               this.setState({authenticate: true})
            }else{
                alert('Incorrect Password')
            }
        }else{
            alert( 'Incorrect Username')
        }
    }

    render() {

        const { authenticate } = this.state
        if( authenticate === true ){
            return <Redirect to ="/admin" />
        }

        return (
            <div className="modal fade" id="adminLoginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="container">
                        <div className="logo-container"></div>
                        <div id="form-header"><span>Admin Login</span></div>
                    </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username" className="float-left">Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        placeholder="username" 
                        className="form-control"
                        autoComplete = "off"
                        value = {this.state.username}
                        onChange = {this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="float-left">Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        autoComplete = "none"
                        className="form-control"
                        value = {this.state.password}
                        onChange = {this.changeHandler}
                        />
                    </div>
                   <div className="form-group">
                        <button className="btn btn-lg btn-success" data-dismiss="modal"
                            onClick = {this.accessHandler}
                        >
                            Login
                        </button>
                   </div>
                   
            </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}