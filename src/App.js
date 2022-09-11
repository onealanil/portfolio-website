import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Protfolio from "./pages/Protfolio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protfolio />} exact />
          <Route path="/blog" element={<Blog />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
