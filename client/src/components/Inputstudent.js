import React, { Component } from "react";

class Inputstudent extends React.Component{
     state = {
          firstName : "",
          lastName : "",
          place : ""
     }
     handleChange = (e) => {
          // console.log(e.target.name);
          // console.log(e.target.value);
          this.setState({[e.target.name]:e.target.value});
     }
     render(){
          return (
               <div className="row text-center">
                    <div className="col-md-4">
                         <form>
                              <input onChange={(e) => this.handleChange(e)} name='firstName' value={this.state.firstName} style={{marginLeft: '50px', marginTop: '20px', fontSize: '14px', fontFamily: 'cursive, sans-serif, gugi', borderRadius: '10px'}} placeholder="First Name" className="form-control"/>
                              <input onChange={(e) => this.handleChange(e)} name='lastName'  value={this.state.lastName} style={{marginLeft: '50px', marginTop: '20px', fontSize: '14px', fontFamily: 'cursive, sans-serif, gugi', borderRadius: '10px'}} placeholder="Second Name" className="form-control"/>
                              <input onChange={(e) => this.handleChange(e)} name='place' value={this.state.place} style={{marginLeft: '50px', marginTop: '20px', fontSize: '14px', fontFamily: 'cursive, sans-serif, gugi', borderRadius: '10px'}} placeholder="Place" className="form-control"/>
                              <button style={{marginLeft: '50px',marginTop: '20px',width: '430px', backgroundColor:'#4D10BE', color: 'white', fontSize: '18px', fontFamily: 'cursive, sans-serif, gugi', outline: 'none', borderRadius: '10px'}} className="btn">CREATE</button>
                         </form>
                    </div>
                    <div>

                    </div>
               </div>
          );
     }
}

export default Inputstudent;