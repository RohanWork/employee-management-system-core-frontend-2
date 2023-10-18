import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
      e.preventDefault();
      EmployeeService.deleteEmployee(id).then((res) => {
          if(employees) {
              setEmployees((prevElement) => {
                  return prevElement.filter((employee) => employee.id !== id);
              });
              alert("Employee with " + id + " id deleted successfully");
          }
      });
  }

  return (
    // flex justify-center
    <div className="container my-8 App-Item">
      <div className="container mt-10 h-full">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-yellow-400 text-white px-6 py-2 font-semibold ">
          Register New Employee
        </button>
      </div>

      {/* <div className="flex shadow border-b"> */}
      {/* <div className="overflow-x-auto"> */}
        <table className="min-w-full table-auto mt-8">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-3">
                Last Name
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-3">
                Emp ID
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-2 px-4">
                Email ID
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-2 px-2">
                Department
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-2 px-4">
                Salary
              </th>
              <th className="text-left font-bold text-black-500 tracking-wider py-3 px-6">
                Location
              </th>
              <th className="text-center font-bold text-black-500 tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
              <tbody>
                  {employees.map((employee) => (
                      <Employee 
                      employee={employee}
                      deleteEmployee={deleteEmployee} 
                      key={employee.id}></Employee>
                  ))}
              </tbody>
          )}
        </table>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default EmployeeList;