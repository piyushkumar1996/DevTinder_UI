import React from "react";
import NavBar from "../designSystem/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../designSystem/Footer";

const Body = () => {
  return (
    <div class="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow"><Outlet /></div>
      <Footer />
    </div>
  );
};

export default Body;
