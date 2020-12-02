import React, { useEffect, useState } from "react";
import Content from "../styled_components/Content";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import cookie from "react-cookie";

export default function LoginPage(props) {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const [authorization, setAuthorization] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    axios
      .post("http://localhost:8080/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        // if (res.data === "Login successful!") {
        //   setLoggedIn(true);
        // }
        // console.log(res.data);
        setAuthorization(res.data)
        console.log(res.data.status);
      });
  };

  useEffect(() => {
    props.setTitle("Login");
  }, [props]);

  // if (isLoggedIn) {
  if (authorization.status === "Login successful!") {
    console.log("Muhaha... we have token: " + authorization.token);
    document.cookie = `token=${authorization.token}`;
    // console.log(document.cookie);
    // const token = document.cookie.split("=")[1];
    // console.log("token from cookie: " + token); 
    return <Redirect to="/" />;
  } else {
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
            <button type="submit">Login</button>
          </div>
        </form>
      </Content>
    );
  }
}
