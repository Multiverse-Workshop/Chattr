import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./views/Layout";
import Login from "./views/Login";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    // <BrowserRouter>
    <Provider store={store}>
  <App />
  {/* <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/login' element={<Login />} />
    </Routes> */}
  </Provider>
  // </BrowserRouter>
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
