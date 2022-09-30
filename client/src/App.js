import Layout from "./views/Layout";
import Login from "./views/Login";
import { useState } from 'react';

function App() {
  const [loggedin, setLoggedIn] = useState(true);

  return (
    <>
    {!loggedin ? <Login /> : <Layout loggedin={loggedin}/>}
    </>
  );
}

export default App;
