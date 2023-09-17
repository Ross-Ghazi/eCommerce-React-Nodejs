import React from "react";
import "./App.css";
import { HomeScreen } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
