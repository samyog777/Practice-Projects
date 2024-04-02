import React from "react";
import image from "../../../assets/image.png";
function Samyog() {
  return (
    <div>
      <img
        className="m-10"
        src={image}
        alt="My Image"
        height={"200px"}
        width={"200px"}
      />
      <h1 className=" text-center bg-slate-200 font-bold text-4xl">
        Your Name is Samyog
      </h1>
    </div>
  );
}

export default Samyog;
