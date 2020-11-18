import React from "react";
import Content from "../styled_components/Content";
import { Link } from "react-router-dom";

function Registration() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Content>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Registration</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" name="username" id="username" />
            <br />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" name="password" id="password" />
            <br />
          </div>
          <Link to="/">
            <input type="submit" value="Register" />
          </Link>
        </div>
      </form>
    </Content>
  );
}

export default Registration;
