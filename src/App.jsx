import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContext } from "./context/userContext";
import { useContext } from "react";

const App = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/register"}>register</Link>
          </li>
           <li>
            <Link to={"/no-route"}>nowhere</Link>
          </li>
        </ul>
      </>
<h1><A>
  Ariel <Ohana></Ohana>
  </A></h1>
      {users.map((user) => (
        <p key={user.username}>{user.username}</p>
      ))}
    </>
  );
};

export default App;
