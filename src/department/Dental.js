import React from 'react'

export default class Dental extends React.Component{

  constructor( props ){
    super( props )
    this.state = {
      isLoaded: false,
      doctorList: [],
    }
  }
  componentDidMount(){
    this.getData()
  }

   getData = () =>{

    fetch('https://pgibotapi.herokuapp.com/getDepartmentDoctors?departmentName=Oral Health Sciences(Dental)')
    .then(result => result.json())
    .then(mainDoctorList =>{
      this.setState({
        isLoaded: true,
        doctorList: mainDoctorList
      })
    })
  }
render(){
      const { isLoaded, doctorList } = this.state
      if( !isLoaded )
      {
        return(
          <h1>Data is Loading....</h1>
        )
      }
return(
<div className="container mt-5">
  <h5 className="display-5 mb-3">You are looking for Dental..</h5>
<table className="table table-striped">
  <thead className="bg-dark text-light"> 
    <tr>
    <th scope="col">Name</th>
    <th scope="col">Designation</th>
    <th scope="col">Contact</th>
    <th scope="col">Location</th>
    </tr>
  </thead>

  <tbody>
    {
     doctorList.doctors.map( (doctor)=>{
        return(
        <tr key={doctor._id}>
          <td>{doctor.name}</td>
          <td>{doctor.designation}</td>
          <td>{doctor.contact}</td>
          <td>{doctor.location}</td>
        </tr>
        )
     })
    }
  </tbody>
</table>
</div>
  )
}}