import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.empId}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.department}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.salary}</div>
      </td>
      <td className="text-left px-4 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.location}</div>
      </td>
      <td className="text-center px-4 py-4 whitespace-nowrap text-sm">
        <button
          onClick={(e) => editEmployee(e, employee.id)}
          className="text-indigo-600 font-bold hover:text-indigo-800 px-4 hover:cursor-pointer">
          Update
        </button>
        <button
          onClick={(e) => deleteEmployee(e, employee.id)}
          className="text-red-600 font-bold hover:text-red-800 hover:cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;