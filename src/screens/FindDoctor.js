import React from 'react';
import { Redirect } from 'react-router-dom';

export default class FindDoctor extends React.Component{

    constructor( props ){
        super( props )
        this.state = {
            department: "",
            event: false
        }
    }

    changeHandle = event =>{
        this.setState({department: event.target.value})
    }

    goHandle = () =>{
        if( this.state.department !== ""){
            this.setState({ event: true })
        }else{
            alert('Please select')
        }
    }
    
    render(){

        const { department, event } = this.state
        if( event === true ){
            if( department === 'Cardiology' ){
                return <Redirect to='Cardiology' />
            }
            if( department === 'Orthopaedics' ){
                return <Redirect to='Orthopaedics' />
            }
            if( department === 'Physiology' ){
                return <Redirect to='Physiology' />
            }
        }

        return(
            <div className="container wt-50 mt-5 p-3 border">
                <div className="form">
                    <div className="row">
                        <div className="col-10">
                        <select className="custom-select custom-select-lg mb-3"
                            onChange = {this.changeHandle}
                        >
                            <option defaultChecked>Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Orthopaedics">Orthopaedics</option>
                            <option value="Physiology">Physiology</option>
                        </select>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-lg btn-success"
                                onClick = {this.goHandle}
                            >Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}