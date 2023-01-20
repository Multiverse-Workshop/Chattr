import Login from "./views/Login";
import { connect } from "./features/socketSlice";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "./utils/socketConnection";
import { useEffect } from "react";
import BrowserRouter from "./components/BrowserRouter";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      dispatch(
        connect({
          socketId: socket.id,
        })
      );
    });
  }, []);

  const users = useSelector((store) => store.user);
  let loggedin = users.user.loggedin;

  if (!loggedin) {
    return (
      <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Login />;
        </ErrorBoundary>
      </>
    );
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter socket={socket} />
      </ErrorBoundary>
    </>
  );
}

export default App;
