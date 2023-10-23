/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService, { editEmployee, getEmployeeById } from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    empId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    department: "",
    salary: "",
    location: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
      //calling the get map (getEmployeeById(empid) method) from EmployeeService file
        console.log("calling the get map (getEmployeeById(empid) method) from EmployeeService file");
        const response = await getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [employee.id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
  //calling the get map (getEmployeeById(empid) method) from EmployeeService file
    console.log("calling the put map (editEmployee(employee, id) method) from EmployeeService file");
    editEmployee(employee, id).then((response) => {
        alert("Records updated successfully for ID " + id);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <br/>
    <br/>
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl">
          <h1>Update Employee Details</h1>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 my-4 space-x-4 pt-4">
          <button
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-600 hover:bg-green-500 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/EmployeeList")}
            className="rounded text-white font-semibold bg-red-600 hover:bg-red-500 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default UpdateEmployee;