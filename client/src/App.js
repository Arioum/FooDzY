import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Filter from "./pages/FilterPage/Filter";
import Details from "./pages/DetailsPage/Details";
import MenuPage from "./pages/MenuPage/MenuPage";

const App = () => {
  // const category = "breakfast";
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Filter />} />
        {/* <Route
          path={`/search&:${category}`}
          element={<Filter category={category} />}
        /> */}
        <Route path="/details" element={<Details />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App;
