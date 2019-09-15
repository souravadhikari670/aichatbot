import React from 'react';

export default class AddDepartment extends React.Component{

    constructor( props ){
        super( props )
        this.state = {
            departmentName: "",
            testName: "",
            testCost: ""
        }
    }

    changeHandler = event =>{
            this.setState({ [event.target.name]: event.target.value })
    }

    addHandle = () =>{
        console.log( this.state)
    }

    render(){
        return(
            <div className="container mt-4 w-50" id="addDoctorCon">
                <div className="row">
                    <div className="col mb-3 mt-3">
                        <h5 className="display-5">
                        Add Tests
                        </h5>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="departmentName" className="float-left">Department Name</label>
                    <input 
                        type="text" 
                        name="departmentName" 
                        placeholder="Department name" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="testName" className="float-left">Test Name</label>
                    <input 
                        type="text" 
                        name="testName" 
                        placeholder="Test Name" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="departmentPic" className="float-left">Test Cost</label>
                    <input 
                        type="text" 
                        name="testCost" 
                        placeholder="Test Cost" 
                        className="form-control"
                        onChange = {this.changeHandler}
                    />
                </div>
                <div className="form-group mt-4">
                    <button className="btn btn-large btn-primary mb-4"
                        onClick = {this.addHandle}
                    >Add Test</button>
                </div>
            </div>
        )
    }
}