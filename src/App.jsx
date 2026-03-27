import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Content from "./components/Content";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skill />
              <Content />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;