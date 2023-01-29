import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CreateNewCard from "./components/CreateNewCard";
import MyCards from "./components/MyCards";
import AllCards from "./components/AllCards";
import Profile from "./components/Profile";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/signin"
            element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/newCard" element={<CreateNewCard />}></Route>
          <Route path="/myCards" element={<MyCards />}></Route>
          <Route path="/cards" element={<AllCards />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
