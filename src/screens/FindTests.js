import React from 'react';

export default class FindTests extends React.Component{
    render(){
        return(
            <div className="container wt-50 mt-5 p-3 border">
                <div className="form">
                    <div className="row">
                        <div className="col-5">
                        <select className="custom-select custom-select-lg mb-3"
                            onChange = {this.changeHandle}
                        >
                            <option defaultChecked>Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Orthopaedics">Orthopaedics</option>
                            <option value="Physiology">Physiology</option>
                        </select>
                        </div>
                        <div className="col-5">
                        <select className="custom-select custom-select-lg mb-3"
                            onChange = {this.changeHandle}
                        >
                            <option defaultChecked>Select Tests</option>
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