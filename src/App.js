import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import { AddEmp } from "./components/addemployee/AddEmp";
import Contact from "./components/contact/Contact";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import EmpList from "./components/employeeslist/EmpList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/list" element={<EmpList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
