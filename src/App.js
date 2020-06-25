import React from "react";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/home/HomePage";
import "./App.css";
const App = () => (
  <div className="App">
    <Navbar />
    <HomePage />
    <footer className="footer-content"></footer>
  </div>
);
export default App;
