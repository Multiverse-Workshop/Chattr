import Login from "./views/Login";
import { connect } from './features/socketSlice';
import { useDispatch, useSelector } from 'react-redux';
import {socket} from './utils/socketConnection';
import { useEffect } from "react";
import BrowserRouter from "./components/BrowserRouter";

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
  let loggedin = users.user.loggedin;

  if(!loggedin){
    return <Login />
  }

  return (
    <>
    <BrowserRouter socket={socket} />
    </>
  );
}

export default App;
