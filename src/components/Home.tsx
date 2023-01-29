import { FunctionComponent } from "react";
import "../css/home.css";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="container">
        <h1 className=" text-center display-1">WELCOME TO BCARDS</h1>
      </div>
    </>
  );
};

export default Home;
