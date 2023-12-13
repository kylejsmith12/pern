// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import FoodPage from "./pages/FoodPage";

function App() {
  const isNavbarVisible = true;

  return (
    <Router>
      {isNavbarVisible && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {isNavbarVisible && (
          <>
            <Route path="/user" element={<UserPage />} />
            <Route path="/food" element={<FoodPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
