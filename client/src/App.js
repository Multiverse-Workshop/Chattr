import Layout from "./views/Layout";
import Login from "./views/Login";
import { useState } from "react";
import io from "socket.io-client";
//import BrowserRouter from "./components/BrowserRouter";

function App() {
  const [loggedin, setLoggedIn] = useState(true);

  let socket;

  if (loggedin) {
    socket = io.connect("http://localhost:8080");
  }

  return (
    <>
    {!loggedin ? <Login /> : <Layout socket={socket} loggedin={loggedin}/>}
    </>
  );
}

export default App;
