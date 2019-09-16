import React from 'react';
import { Redirect } from 'react-router-dom';

export default class FindDoctor extends React.Component{

    constructor( props ){
        super( props )
        this.state = {
            department: "",
            isLoaded: false,
            event: false,
            departmentList: []
        }
    }

    componentDidMount(){
        this.getData()
      }
       getData = () =>{
        fetch('https://pgibotapi.herokuapp.com/getAllDepartments')
        .then(result => result.json())
        .then(mainDepartmentList =>{
          this.setState({
            isLoaded: true,
            departmentList: mainDepartmentList
          })
        })
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

        const { isLoaded, departmentList } = this.state

        if( !isLoaded )
        {
          return(
            <h1>Data is Loading....</h1>
          )
        }

        // console.log( departmentList.departments.length)
        const { department, event } = this.state
        if( event === true ){
            if( department === 'Cardiology' ){
                return <Redirect to='/Cardiology' />
            }
            if( department === 'Orthopaedics' ){
                return <Redirect to='/Orthopaedics' />
            }
            if( department === 'Psychiatry' ){
                return <Redirect to='/Psychiatry' />
            }
            if( department === 'Neurology' ){
                return <Redirect to='/Neurology' />
            }
            if( department === 'Oral Health Sciences(Dental)' ){
                return <Redirect to='/Dental' />
            }
            if( department === 'Gastroenterology' ){
                return <Redirect to='/Gastroenterology' />
            }
            if( department === 'Surgery' ){
                return <Redirect to='/Surgery' />
            }
            if( department === 'Opthalmology' ){
                return <Redirect to='/Opthalmology' />
            }
            if( department === 'Otolaryngology (ENT)' ){
                return <Redirect to='/Otolaryngology' />
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
                           {
                               departmentList.departments.map( (dept)=>{
                                   return(
                                    <option key={dept} value={dept}>{dept}</option> 
                                   )
                               } )
                           }
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