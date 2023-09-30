import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
          {/* <Route path="/contactForm" element={<ContactForm/>} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <ContactForm/> */}
    </>
  );
}

export default App;