import React from "react";
import { useHistory } from "react-router-dom";
import useLogRender from "../../utils/useLogPath";
import { Navbar, Button } from "react-bootstrap";
import "./style.css";
import logo from "./Snip.png";
import { Link } from "react-router-dom";
import userAPI from "../../utils/userAPI";


function Nav({ userState, logout }) {
  useLogRender();
  const user = userState;
  const history = useHistory();

  function logout() {
    // console.log(user);
    userAPI.logoutUser()
    .then(location.reload())
  }

  console.log(logout);
  return (
    //jsx
    <Navbar bg="light">
      <Link to="/">
        <img src={logo} id="logo" />
      </Link>
      <Button href="/login">Login</Button>
      {userState.email ? (
        <Button onClick={logout}>Logout of {userState.username}</Button>
      ) : (
        <div>No User logged in</div>
      )}
      {userState.email ? (
        // <a href="/dashboard">Dashboard</a>
        <Link to="/dashboard">
          <Button> Dashboard </Button>
        </Link>
      ) : (
        <h3>Login to see your Dashboard!</h3>
      )}
    </Navbar>
  );
}

export default Nav;