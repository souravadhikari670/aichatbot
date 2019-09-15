import React from 'react'
import  axios from 'axios'

export default class Cardiology extends React.Component{

  constructor( props ){
    super( props )
    this.state = {
      gitList: ""
    }
  }
  componentDidMount(){
    this.getData()
  }

   getData = () =>{
    axios.get('https://pgibotapi.herokuapp.com/getAllDepartments')
    .then(response =>{
      console.log(response.data);
    })
    .catch(error =>{
      console.log(error);
    });
    // axios({
    //   method: "GET",
    //   url: "https://pgibotapi.herokuapp.com/getDepartmentDoctors",
    //    headers: {
    //         "Content-Type": "application/json"
    //    },
    //    data: {
    //     departmentName : "Cardiology"
    //    }
    // }).then( response =>{
    //   console.log( response.data)
    // })
  }
    render(){
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}}