import { FunctionComponent } from "react";
import "../css/about.css";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-1 text-center">ABOUT US</h1>

        <div className="card rounded my-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title text-center fw-bold">WHO WE ARE?</h5>
                <p className="card-text text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  dolorem voluptates velit exercitationem commodi eligendi ut,
                  vitae beatae autem distinctio minus asperiores quisquam ipsum
                  quidem cupiditate, ab a! Beatae eos cumque omnis at vitae sed
                  quisquam pariatur quas autem laboriosam exercitationem quos
                  alias, voluptates numquam, deserunt est doloremque voluptate?
                  Numquam autem, ipsa quibusdam dolores libero nisi eligendi ad
                  hic soluta ab officiis, commodi ducimus nostrum ipsum aliquam
                  iusto quae dolore deserunt dolorem. Repellendus cum similique
                  voluptates qui alias saepe assumenda quo mollitia excepturi
                  quia odio, maiores, eos dolorum repellat non inventore soluta?
                  Magni incidunt quis cum reprehenderit quae ab nihil placeat
                  aut iure laudantium facere et, explicabo architecto assumenda.
                  Dolor corporis dolore eveniet autem, minima ut voluptatibus
                  ipsa at ipsum, animi, illo recusandae! Officiis reprehenderit
                  itaque inventore assumenda provident dolore ipsam nobis
                  adipisci aspernatur debitis necessitatibus unde vero tenetur
                  fugiat molestias ducimus, at, aperiam voluptate. Expedita
                  facilis reiciendis sed cum. Ipsa nisi quas fuga corrupti
                  voluptatum id, quasi quod hic neque! Deleniti, vel facilis
                  libero dolores, error illo ab possimus non veniam delectus
                  facere nobis quasi commodi hic dicta a, voluptatum pariatur
                  eaque! Recusandae obcaecati odit eos est possimus modi sed eum
                  debitis eaque voluptatem! Nostrum cum ab similique modi?
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="\images\whoweare.jpg"
                className=" w-100 h-100 img-fluid rounded-start"
                alt="A man typing"
              />
            </div>
          </div>
        </div>
        <div className="card rounded my-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="\images\bcards-computer.png"
                className=" w-100 h-100 img-fluid rounded-start"
                alt="A man typing"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title text-center fw-bold">WHAT WE DO?</h5>
                <p className="card-text text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  dolorem voluptates velit exercitationem commodi eligendi ut,
                  vitae beatae autem distinctio minus asperiores quisquam ipsum
                  quidem cupiditate, ab a! Beatae eos cumque omnis at vitae sed
                  quisquam pariatur quas autem laboriosam exercitationem quos
                  alias, voluptates numquam, deserunt est doloremque voluptate?
                  Numquam autem, ipsa quibusdam dolores libero nisi eligendi ad
                  hic soluta ab officiis, commodi ducimus nostrum ipsum aliquam
                  iusto quae dolore deserunt dolorem. Repellendus cum similique
                  voluptates qui alias saepe assumenda quo mollitia excepturi
                  quia odio, maiores, eos dolorum repellat non inventore soluta?
                  Magni incidunt quis cum reprehenderit quae ab nihil placeat
                  aut iure laudantium facere et, explicabo architecto assumenda.
                  Dolor corporis dolore eveniet autem, minima ut voluptatibus
                  ipsa at ipsum, animi, illo recusandae! Officiis reprehenderit
                  itaque inventore assumenda provident dolore ipsam nobis
                  adipisci aspernatur debitis necessitatibus unde vero tenetur
                  fugiat molestias ducimus, at, aperiam voluptate. Expedita
                  facilis reiciendis sed cum. Ipsa nisi quas fuga corrupti
                  voluptatum id, quasi quod hic neque! Deleniti, vel facilis
                  libero dolores, error illo ab possimus non veniam delectus
                  facere nobis quasi commodi hic dicta a, voluptatum pariatur
                  eaque! Recusandae obcaecati odit eos est possimus modi sed eum
                  debitis eaque voluptatem! Nostrum cum ab similique modi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
