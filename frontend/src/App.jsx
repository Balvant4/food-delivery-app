import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { StoreContextProvider } from "../src/index.js";

function App() {
  return (
    <>
      <StoreContextProvider>
        <div className="w-11/12 m-auto">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </StoreContextProvider>
    </>
  );
}

export default App;
