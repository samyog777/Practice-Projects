import { useState, useEffect } from "react";
import Wellcome from "./Wellcome";

function App() {
  let content;
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windoWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handelWindowChange = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("Returned from data featching");
    };
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener("resize", handelWindowChange);

    return () => {
      window.removeEventListener("resize", handelWindowChange);
    };
  }, []);

  if (isLogedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return (
    <>
      {content}
      <div>
        <div>{windowHeight}</div>
        <div>{windoWidth}</div>
        <button
          className="bg-blue-300 text-2xl p-3 m-8"
          onClick={() => setResourceType("posts")}>
          Post
        </button>
        <button
          className="bg-blue-300 text-2xl p-3 m-8"
          onClick={() => setResourceType("users")}>
          Users
        </button>
        <button
          className="bg-blue-300 text-2xl p-3 m-8"
          onClick={() => setResourceType("comments")}>
          Comments
        </button>
      </div>
      <h1 className="font-bold text-9xl text-center">{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
      <Wellcome setIsLogedIn={setIsLogedIn} isLogedIn={isLogedIn} />
    </>
  );
}

function AdminPanel() {
  return (
    <>
      <h1>This is Admin Pannel</h1>
    </>
  );
}

function LoginForm() {
  return (
    <>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
    </>
  );
}

export default App;
