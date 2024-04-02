import React from "react";
import { Outlet, Link } from "react-router-dom";

function BookOutLet() {
  return (
    <ul>
      <li>
        <Link to={"/aboutus/1"}> Book 1</Link>
        <Link to={"/aboutus/2"}> Book 2</Link>
        <Link to={"/aboutus/random"}> New Book</Link>
        <Outlet />
      </li>
    </ul>
  );
}

export default BookOutLet;
