import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function BooksId() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div>
      <h1 className=" text-center text-4xl text-blue-700 bg-green-400">
        Your Id is: {id} and {obj.hello}
      </h1>
    </div>
  );
}

export default BooksId;
