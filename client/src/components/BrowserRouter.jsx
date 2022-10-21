import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Login from "../views/Login";
import Settings from "../views/Settings";
import Profile from "../views/Profile";

const BrowserRouter = ({ socket }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Layout socket={socket} />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default BrowserRouter;
