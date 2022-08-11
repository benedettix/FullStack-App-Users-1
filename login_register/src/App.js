import React from "react";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Navbar from "./components/navbar/Navbar";
import { store } from "./store";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
