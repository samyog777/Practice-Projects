import React, { useState } from "react";
import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import "./active.css";

function Navigation() {
  const [searchParams, setSeachParams] = useSearchParams();
  //   const [number, setNumber] = useState(3);
  const number = searchParams.get("n");
  return (
    // end (in NavLink) => TO make sure isActive only works when parent Route is active
    <>
      <ul>
        <li>
          <NavLink to={"/books/Samyog"}>Samyog</NavLink>
        </li>
        <li>
          <NavLink to={"/books/Saitama"}>Saitama</NavLink>
        </li>
        <li>
          <NavLink to={"/books/Shadow"}>Shadow</NavLink>
        </li>
        <li>
          <NavLink to={`/books/${number}`}>Number: {number}</NavLink>
        </li>
      </ul>
      <Outlet context={{ hello: "Nepal" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSeachParams({ n: e.target.value })}
      />
    </>
  );
}

export default Navigation;
