import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import NavbarMenu from "./components/Navbar";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <NavbarMenu />
      <div className="relative top-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
        </div>
    </Router>
  );
};

export default App;
