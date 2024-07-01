import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Elab from "./Pages/Elab";
import "./index.css"
import Gallery from "./Pages/Gallery";
import Product from "./Pages/Product";

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elab" element={<Elab />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
