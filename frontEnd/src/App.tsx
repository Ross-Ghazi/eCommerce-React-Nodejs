import React from "react";
import "./App.css";
import { AuthService } from "./helper/AuthService";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <div className="App">Hello Word</div>
      <Login />
    </div>
  );
}

export default App;
