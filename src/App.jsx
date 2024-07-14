import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Elab from "./Pages/Elab";
import "./index.css"
import Gallery from "./Pages/Gallery";
import Product from "./Pages/Product";

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elab" element={<Elab />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
