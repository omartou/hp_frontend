import React from "react";
import Content from "../styled_components/Content";
import { Link } from "react-router-dom";

function Login(Login, error) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Content>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">User Name:</label>
            <br />
            <input type="text" name="username" id="username" />
            <br />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" id="password" />
            <br />
          </div>
          <Link to="/">
            <input type="submit" value="Login" />
          </Link>
        </div>
      </form>
    </Content>
  );
}

export default Login;
