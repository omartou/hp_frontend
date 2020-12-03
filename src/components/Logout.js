import React from "react";
import { Redirect } from "react-router-dom";

export default function Logout() {
  if (document.cookie !== "") {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
  return <Redirect to="/login" />;
}
