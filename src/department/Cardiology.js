import React from 'react'

export default class Cardiology extends React.Component{

  constructor( props ){
    super( props )
    this.state = {
      isLoaded: false,
      doctorList: ""
    }
  }
  componentDidMount(){
    this.getData()
  }

   getData = () =>{

    fetch('https://pgibotapi.herokuapp.com/getDepartmentDoctors?departmentName=Cardiology')
    .then(result => result.json())
    .then(mainDoctorList =>{
      this.setState({
        isLoaded: true,
        doctorList: mainDoctorList
      })
    })
  }
    render(){
      var { isLoaded, doctorList } = this.state
      if( !isLoaded )
      {
        return(
          <h1>Data is Loading....</h1>
        )
      }

    return(
<div className="container mt-5">
  <h5 className="display-5 mb-3">You are looking for Cardiology..</h5>
<table className="table table-striped">
  <thead className="bg-dark text-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>

  <tbody>
    {
      // console.log(doctorList.length)
    }
  </tbody>
</table>
</div>
  )
}}