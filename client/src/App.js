import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";
import Filter from "./pages/FilterPage/Filter";
import Details from "./pages/DetailsPage/Details";

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
