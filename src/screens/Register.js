import React from 'react';
import axios from 'axios'

export default class Register extends React.Component{
    constructor( props ){
        super( props )
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    changeHandler = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = event =>{
        event.preventDefault()
        axios.post("/", this.state)
    }

    render(){

        // const { username, email, password } = this.state

        return(
            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="container">
                        <div className="logo-container"></div>
                        <div id="form-header"><span>Register</span></div>
                    </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form">
                    <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="username" className="float-left">Username</label>
                        <input type="text"
                         name="username"
                         placeholder="username"
                         className="form-control"
                         onChange = {this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="float-left">Email</label>
                        <input type="email"
                         name="email"
                          placeholder="email"
                           className="form-control"
                           onChange = {this.changeHandler}
                           />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="float-left">Password</label>
                        <input type="password"
                         name="password"
                          placeholder="password"
                           className="form-control"
                           onChange = {this.changeHandler}
                           />
                    </div>
                   <div className="form-group">
                            <button className="btn btn-lg btn-success" type="submit">
                                Register
                            </button>
                        <h6 className="mt-2"data-toggle="modal" data-target="#loginModal"data-dismiss="modal" id="modalToggle">
                            Already have an account ?</h6>
                   </div>
                   </form>
            </div>
      </div>
    </div>
  </div>
</div>
    )
}
}