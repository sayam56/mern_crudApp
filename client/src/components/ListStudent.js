import axios from "axios";
import React, { Component } from "react";

class ListStudent extends React.Component{
     state={
          students : [],
     }
     getStudents = () =>{
          axios
          .get("http://localhost:2000/")
          .then(res => {
               // console.log(res.data.result);
               this.setState({students:res.data.result});

          })
          .catch(err => console.error(err));
     }

     componentDidMount = () =>{
          this.getStudents();
     }
     render(){
          return(
               <div style={{color: 'black'}}>
                    {
                         this.state.students.map(student=>(
                              <div key={student._id} className="card" style={{marginTop: "15px", marginLeft: "15px", display: 'inline-block', backgroundColor: 'whitesmoke', padding:'15px', borderRadius:'15px'}}>
                                   <div className="card-body">
                                        <h2>First Name : {student.firstName}</h2>
                                        <h2>Last Name : {student.lastName}</h2>
                                        <h2>Place Name : {student.place}</h2>
                                        <button className="btn btn-warning" style={{borderRadius:'5px', color:'whitesmoke', fontSize:'18px', padding: '5px', margin: '5px'}}>Update</button>
                                        <button className="btn btn-danger" style={{borderRadius:'5px', color:'whitesmoke', fontSize:'18px', padding: '5px', margin: '5px'}}>Delete</button>
                                   </div>
                              </div>
                         ))
                    }
               </div>
          );
     }
}
export default ListStudent;