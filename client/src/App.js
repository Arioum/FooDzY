import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Filter from "./pages/Filter";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;