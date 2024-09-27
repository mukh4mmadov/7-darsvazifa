import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-6 shadow-lg">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">My Website</div>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-white hover:text-indigo-500 px-3 py-2 rounded-md transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:bg-white hover:text-indigo-500 px-3 py-2 rounded-md transition duration-300"
            >
              Gallery
            </Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}
export default App;
