import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/SignUp";
import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CreateNewCard from "./components/CreateNewCard";
import MyCards from "./components/MyCards";
import AllCards from "./components/AllCards";
import Profile from "./components/Profile";
import User from "./interfaces/User";
import { getUserById } from "./services/usersService";
import PageNotFound from "./components/PageNotFound";
import FavoritesCards from "./components/FavoritesCards";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

// let userContext: User = {
//   name: "",
//   email: "",
//   password: "",
//   isBusiness: false,
// };
// export let userDetails = createContext(userContext);

export function App() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );

  // let [user, setUser] = useState<User>(userContext);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       let userId: number = await JSON.parse(
  //         sessionStorage.getItem("userData") as string
  //       ).userId;
  //       getUserById(userId)
  //         .then((res) => {
  //           setUser(res.data);
  //           console.log(res.data);
  //         })

  //         .catch((err) => console.log(err));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUser();
  // }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        {/* <userDetails.Provider value={user}> */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {/* </userDetails.Provider> */}
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
          <Route path="/favoriteCards" element={<FavoritesCards />}></Route>
          <Route path="/cards" element={<AllCards />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
