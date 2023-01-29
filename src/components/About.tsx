import { FunctionComponent } from "react";
import "../css/about.css";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-1 text-center">ABOUT US</h1>

        <div
          className="card shadow-lg rounded my-3"
          style={{ maxWidth: "80rem" }}
        >
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title text-center fw-bold">WHO WE ARE?</h5>
                <p className="card-text text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur non asperiores labore doloribus maxime sint quia
                  aspernatur eligendi quod eveniet libero doloremque, nemo natus
                  deserunt placeat blanditiis iusto officia! Obcaecati impedit
                  ipsum, harum odio dolorum molestias hic odit expedita delectus
                  provident magni, id quae quisquam consectetur neque cumque.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="/images/bcards-computer.png"
                className=" w-100 h-100 img-fluid rounded-start"
                alt="A man typing"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
