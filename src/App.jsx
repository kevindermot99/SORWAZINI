import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Elab from "./Pages/Elab";
import "./index.css"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elab" element={<Elab />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
