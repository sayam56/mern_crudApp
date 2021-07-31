import axios from "axios";
import React, { Component } from "react";

class ListStudent extends React.Component{
     state={
          students : [],
          ufirstname : '',
          ulastname : '',
          uplace : '',
          uid : ''
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

     handleDelete = (id) => {
     axios
          .delete(`http://localhost:2000/students/${id}`)
          .then(res => {
          console.log(res);
          window.location = '/';
          })
          .catch(err => console.error(err));
     }

     handleUpdate = (e) => {
          this.setState({[e.target.name]:e.target.value});
     }
     handleUpdateGetData = (student) => {
          this.setState(
               {
                    ufirstname: student.firstName,
                    ulastname : student.lastName,
                    uplace : student.place,
                    uid : student._id
               }
               );
     }
     handleModalUpdate = (studentData) => {
          axios
          .put(
               `http://localhost:2000/students/${this.state.uid}`,
               {
                    firstName : this.state.ufirstname,
                    lastName : this.state.ulastname,
                    place: this.state.uplace
               }
               )
          .then( res => {
               console.log(res);
               this.setState({
                    ufirstname : '',
                    ulastname : '',
                    uplace : '',
                    uid : ''
               });
               window.location = '/';
          })
     }

     handleModalClose = () =>{
          this.setState({
               ufirstname : '',
               ulastname : '',
               uplace : '',
               uid : ''
          });
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
                                        
                                        <button onClick={() => this.handleUpdateGetData(student)} type="button" class="btn btn-warning" style={{borderRadius:'5px', color:'whitesmoke', fontSize:'18px', padding: '5px', margin: '5px'}} data-toggle="modal" data-target="#exampleModalCenter">Update</button>
                                        <button onClick={() => this.handleDelete(student._id)} className="btn btn-danger" style={{borderRadius:'5px', color:'whitesmoke', fontSize:'18px', padding: '5px', margin: '5px'}}>Delete</button>

                                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                             <div class="modal-header">
                                             <h5 class="modal-title" id="exampleModalLongTitle">Update</h5>
                                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                             </button>      
                                             </div>
                                             <div class="modal-body">
                                                  <input onChange={(e) => this.handleUpdate(e)} value={this.state.ufirstname} name='ufirstname' style={{marginTop: '20px', fontSize: '14px', fontFamily: 'cursive, sans-serif, gugi', borderRadius: '10px'}} placeholder="First Name" className="form-control"/>
                                                  <input onChange={(e) => this.handleUpdate(e)} value={this.state.ulastname} name='ulastname' style={{marginTop: '20px', fontSize: '14px', fontFamily: 'cursive, sans-serif, gugi', borderRadius: '10px'}} placeholder="Last Name" className="form-control"/>
                                                  <input onChange={(e) => this.handleUpdate(e)} value={this.state.uplace} name='uplace' style={{marginTop: '20px', fontSize: '14px', fontFamily: 'cursive, sans-serif, gugi', borderRadius: '10px'}} placeholder="Place" className="form-control"/>
                                             </div>
                                             <div class="modal-footer">
                                             <button onClick={() => this.handleModalClose()} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                             <button onClick={(studentData) => this.handleModalUpdate(studentData)} type="button" class="btn btn-primary">Save changes</button>
                                             </div>
                                        </div>
                                        </div>
                                        </div>

                                        
                                   </div>
                              </div>
                         ))
                    }
               </div>
          );
     }
}
export default ListStudent;