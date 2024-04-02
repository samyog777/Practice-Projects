import "./App.css";
import AboutUs from "./Components/AboutUs/aboutUs.jsx";
import AboutYou from "./Components/AboutUs/aboutyou.jsx";
import Random from "./Components/AboutUs/random.jsx";
import Home from "./Components/Home/home.jsx";
import NotFound from "./Components/notFound.jsx";
import BookOutLet from "./Components/BookOutLet.jsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/aboutus"}>AboutUs </Link>
        </li>
      </ul>
      <h1 className=" bg-[#aaa] text-orange-700 font-sans text-6xl font-black ">
        HELLO
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<BookOutLet />}>
          <Route index element={<AboutUs />} /> //! For the default link
          <Route path="/aboutus/:id" element={<AboutYou />} />
          <Route path="/aboutus/random" element={<Random />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
