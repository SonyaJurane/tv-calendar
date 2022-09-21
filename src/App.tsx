import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, About, Landing } from "./pages";

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
};

export default App;
