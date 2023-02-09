import React from "react";
import "./App.css";
import Button from "./components/Navbar/Button";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <section
      className="h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center
    "
    >
      <Navbar/>
      <div className="flex flex-col justify-center text-center items-center h-full bottom-0 bg-slate-800">
      <h2 className="text-black text-2xl font-medium">Fashion Tips</h2>
      <h1 className="md:text-5xl text-3xl text-black font-semibold py-5">
        Items every woman should have
      </h1>
      <div className="text-x1">
        <Button/>
      </div>
      </div>
    </section>
  );
}

export default App;
