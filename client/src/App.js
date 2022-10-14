import Layout from "./views/Layout";
import Login from "./views/Login";
import { connect } from './features/socketSlice';
import { useDispatch, useSelector } from 'react-redux';
import {socket} from './utils/socketConnection';
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    socket.on('connect', () => {
      dispatch(connect({
        socketId: socket.id
      }))
  });
  },[])

  const users = useSelector((store) => store.user);
  console.log(users)
  let loggedin = users.user.loggedin;

  if(!loggedin){
    return <Login />
  }


  // NEED TO FIX STRUCTURE OF ROUTES!!
  return (
    <>
    <Layout socket={socket} />
    <Routes>
        <Route path='/main' element={<Layout socket={socket} />} />
        <Route path='/' element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
