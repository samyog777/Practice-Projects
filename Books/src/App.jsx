import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";
import BooksId from "./Components/Books/BooksId";
import Navigation from "./Components/Navigation/Navigation";
import NotFound from "./Components/NotFound/NotFound";
import Samyog from "./Components/Books/Samyog/Samyog";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={"/books"}>
        {/* <Routes> */}
        <Route path="/books" element={<h1>Hard Coding!</h1>} />{" "}
        {/* For Transforming the data from router to router */}
      </Routes>
      <h1 className="bg-red-400">Hello and Wellcome to my React Router Dom</h1>
      <ul className="m-3">
        <li className="m-10">
          <Link to={"/"} className="bg-slate-600 text-orange-200 p-3">
            Home
          </Link>
        </li>
        <li className="m-10">
          <Link to={"/books"} className="bg-slate-600 text-orange-200 p-3">
            Books
          </Link>
        </li>
      </ul>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Navigation />}>
          <Route index element={<Books />} />
          <Route path="/books/:id" element={<BooksId />}></Route>
          <Route path="/books/samyog" element={<Samyog />} />
        </Route>
        {/* <Route path="/books/*" element={<FileNameOfRoute />} />*/}{" "}
        {/* For the Next page Routing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
