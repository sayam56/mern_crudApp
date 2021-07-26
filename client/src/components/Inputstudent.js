import React, { Component } from "react";

class Inputstudent extends React.Component{
     state = {
          firstName : "",
          lastName : "",
          place : ""
     }
     render(){
          return (
               <div className="row text-center">
                    <div className="col-md-4">
                         <form>
                              <input placeholder="First Name" className="form-control"/>
                              <input placeholder="Second Name" className="form-control"/>
                              <input placeholder="Place" className="form-control"/>
                              <button className="btn btn-primary">Create</button>
                         </form>
                    </div>
                    <div>

                    </div>
               </div>
          );
     }
}

export default Inputstudent;