import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const employeeCredentials = {
      email: "employee@admin.com",
      password: "1234567"
    };

    if (
      credentials.email === employeeCredentials.email &&
      credentials.password === employeeCredentials.password
    ) {
      navigate("/employeeList");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col my-4">
            <label className="block text-gray-600 text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="block text-gray-600 text-sm font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-center my-4">
            <button type="submit" className="rounded text-white font-semibold bg-blue-600 hover:bg-blue-500 py-2 px-6">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
