import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Elab from "./Pages/Elab";
import "./index.css"
import Gallery from "./Pages/Gallery";
import Product from "./Pages/Product";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elab" element={<Elab />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
