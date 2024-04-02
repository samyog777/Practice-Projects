import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Error Not Found" });
    }, 1000);
  });
  return (
    // todo:
    // <div>
    //   <h1 className=" text-center underline text-4xl bg-slate-200 font-black">
    //     404 Not Found
    //   </h1>
    // </div>
    // <Navigate to={"/"} state={"Error: Not Foud!"} /> // ! TO Navigate in home if the url is unmatched
    <h1>Not Found</h1>
  );
}

export default NotFound;
