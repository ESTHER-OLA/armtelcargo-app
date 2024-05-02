// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Deliveries from "./Deliveries";
import Dashboard from "./Dashboard";
import ListStop from "./ListStop";
import Navigator from "./Navigator";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/deliveries" element={<Deliveries></Deliveries>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/liststop" element={<ListStop></ListStop>}></Route>
        <Route path="/navigator" element={<Navigator></Navigator>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
