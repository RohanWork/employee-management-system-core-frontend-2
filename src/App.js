/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar2 from "./components/Navbar2";
import UpdateEmployee from "./components/UpdateEmployee";
// import Footer from "./components/Footer";
import Login from "./components/Login";
// import ContactForm from "./components/ContactForm";
import { Footer2 } from "./components/Footer2";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar2 />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />

          {/* Enable the below route if you are not using the login element in case */}
          {/* <Route path="/"                 element={<EmployeeList />} /> */}

          <Route path="/employeeList"     element={<EmployeeList />} />
          <Route path="/addEmployee"      element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />

          {/* Still in implementing phase */}
          {/* <Route path="/contactForm"  element={<ContactForm/>} /> */}

        </Routes>
      </BrowserRouter>
      <Footer2/>

      {/* Still in implementing phase */}
      {/* <ContactForm/> */}
    </>
  );
}