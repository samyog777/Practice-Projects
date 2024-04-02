import React from "react";
import { useParams } from "react-router-dom";

function aboutYou() {
  const { id } = useParams();
    return (
    <div>
      <h1>Your Url is: {id}</h1>
    </div>
  );
}

export default aboutYou;
