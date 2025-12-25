import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Service from "./Components/pages/Service";
import Contact from "./Components/pages/Contact";
import UserList from "./Users/User_List";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container text-center mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
