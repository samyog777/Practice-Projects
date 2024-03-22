// import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/samyog777")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div>
      <h1 className="m-4 p-6 bg-gray-600 text-center text-4xl text-white">
        Github Name: {data.login}
      </h1>
      <div className="flex ">
        <img className=" w-96" src={data.avatar_url} alt="Git pic" />
        <h1 className=" float-right w-80 m-4 p-6 bg-gray-600 text-center text-4xl text-white">
          Github Followers: {data.followers}
        </h1>
        <h1 className=" float-center w-80 m-4 p-6 bg-gray-600 text-center text-4xl text-white">
          Github Following: {data.following}
        </h1>
      </div>
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/samyog777");
  return response.json();
};
