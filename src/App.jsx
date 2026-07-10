import React from "react";
import HomePage from "./page/HomePage";
// import signupComp from "./components/signupComp";
import LoginPage from "./components/LoginPage";
import SignupComp from "./components/signupComp"
import Navbar from "./components/Navbar";
// import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupComp />} />
           
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}
export default App;
