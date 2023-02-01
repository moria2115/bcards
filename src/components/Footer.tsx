import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <footer className="footer text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">
            <Link
              className="btn btn-link btn-floating btn-lg m-1"
              to={"https://www.facebook.com/moria.dery"}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg m-1"
              to={"https://twitter.com/MoriaDery"}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg m-1"
              to={"https://www.instagram.com/moriamiazrahi/"}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              className="btn btn-link btn-floating btn-lg m-1"
              to={"https://www.linkedin.com/in/moria-mizrachi/"}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            {/* <!-- Github --> */}
            <Link
              className="btn btn-link btn-floating btn-lg m-1"
              to={"https://github.com/moria2115"}
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>

        <div className="text-center text-dark p-3">
          © 2023 BCARDS website was developed and desogned by Moria Mizrachi
        </div>
      </footer>
    </>
  );
};

export default Footer;
