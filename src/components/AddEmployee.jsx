/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService, { createEmployee } from "../services/EmployeeService";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";

const AddEmployee = () => {
  window.scrollTo(0, 0);

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    department: "",
    salary: "",
    location: "",
    empId:"",
  });

  // const redirect = () => {
  //   const destination = 'src/components/EmployeeList.js';
  //   const destinationURL = 'F:/built/employee-management-system-core-frontend-2/src/components/EmployeeList.js';
  //   window.location.href = destination;
  // }

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
  //calling the post method (createEmployees() method) from EmployeeService file
    console.log("calling the post method (createEmployees() method) from EmployeeService file");
    createEmployee(employee).then((response) => {
        console.log(response);
        alert("Employee registered successfully with id "+ employee.empId);
        navigate("/employeeList");
      }).catch((error) => {
          console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      empId: "",
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      department: "",
      salary: "",
      location: "",
    });
  };

  return (

    <>
    {/* <Navbar/> */}
    <br/>
    <br/>
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl">
          <h1>Register New Employee</h1>
          <br></br>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's first name"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's last name"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Employee ID
          </label>
          <input
            type="number"
            name="empId"
            value={employee.empId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's Id"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's mail Id"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Password"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's department"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Salary
          </label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's salary"
            required/>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={employee.location}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter employee's work location"
            required/>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-600 hover:bg-green-500 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-yellow-600 hover:bg-yellow-500 py-2 px-6">
            Clear
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            // onClick={redirect}
           className="rounded text-white font-semibold bg-red-600 hover:bg-red-500 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddEmployee;
