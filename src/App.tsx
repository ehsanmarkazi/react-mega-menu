import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <section
      className="h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center
    "
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-full bottom-0 bg-slate-800"></div>
    </section>
  );
}

export default App;
