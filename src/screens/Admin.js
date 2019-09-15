import React from 'react'
import './Style.css'

export default class Admin extends React.Component{

    constructor( props ){
        super( props )
        this.state = {
            doctorName: "",
            designation: "",
            category: "",
            deptName: ""
        }
    }

    changeHandler = event =>{
        this.setState({[event.target.name]:event.target.value})
    }

    formSubmitHandler = () =>{
        console.log(this.state)
    }

    render(){
        return(
            <div className="container mt-4 w-50" id="addDoctorCon">
                <div className="row">
                    <div className="col mb-3 mt-3">
                        <h5 className="display-5">
                        Add Doctors
                        </h5>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorName" className="float-left">Doctor Name</label>
                    <input 
                        type="text" 
                        name="doctorName" 
                        placeholder="doctor name" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="designation" className="float-left">Designation</label>
                    <input 
                        type="text" 
                        name="designation" 
                        placeholder="Designation" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category" className="float-left">Category</label>
                    <input 
                        type="text" 
                        name="category" 
                        placeholder="Category" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="deptName" className="float-left">Department Name</label>
                    <input 
                        type="text" 
                        name="deptName" 
                        placeholder="Department name" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group mb-4">
                    <button className="btn btn-lg btn-success mb-4"
                        onClick = {this.formSubmitHandler}
                    >
                       Add Doctor
                    </button>
                </div>
            </div>
        )
    }
}