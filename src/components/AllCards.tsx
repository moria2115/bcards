import { FunctionComponent, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import { getAllCards } from "../services/cardsService";

interface AllCardsProps {}

const AllCards: FunctionComponent<AllCardsProps> = () => {
  let [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    getAllCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {cards.length ? (
        <div className="container">
          <div className="row">
            {cards.map((card: Card) => (
              <div
                key={card.id}
                className="card ms-1"
                style={{ width: "18rem" }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.name}
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">{card.description}</p>
                  <p className="text-success">{card.phone}</p>
                  <p className="text-success">{card.address}</p>
                  <p className="text-success">{card.website}</p>

                  <button
                    className="btn btn-outline-warning  w-100 "
                    onClick={() => {
                      // addProductToCart(product.id as number)
                      //     .then(() =>
                      //         successMsg(`Product ${product.name} added to cart`)
                      //     )
                      //     .catch((err) => console.log(err));
                    }}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>

                  {/* {isAdmin && <>
                                    <button className="btn btn-warning mx-1" onClick={() => {
                                        setOpenUpdateModal(true);
                                        setProductId(product.id as number);
                                    }}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-danger mx-1" onClick={() => {
                                        setOpenDeleteModal(true);
                                        setProductId(product.id as number);
                                    }}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </>} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No Cards</p>
      )}
    </>
  );
};

export default AllCards;
