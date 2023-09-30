import React from "react";

const Navbar = () => {
  return (


    // <nav class="navbar navbar-default navbar-fixed-top">
    //   <div class="container">
    //     <p className="text-black font-bold text-center">Employee Management System</p>
    //   </div>
    // </nav>


    // <div class="navbar bg-primary">
    //   <div className="h-16 px-8 flex items-center">
    //     <p className="text-black font-bold">Employee Management System</p>
    //   </div>
    // </div>


    // <div className="navbar navbar-default navbar-fixed-top bg-blue-800 flex items-center">
    <div className="App-header">
    <div className="flex items-center">
      <p className="text-white font-medium ">
        <p className="head">Employee Management System</p>
      <br></br>
      <p className="disp">Employee CRUD Operations: Provide functionality to create, read, update, and delete employee records. 
      Users should be able to add new employees, view employee details, update employee information, and remove employees from the system.
      </p>
      </p>
    </div>
  </div>
  );
};

export default Navbar;