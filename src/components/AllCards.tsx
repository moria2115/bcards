import { FunctionComponent, useContext, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import { getAllCards } from "../services/cardsService";
import { successMsg } from "../services/feebacks";
import { addCardToFavorites } from "../services/usersService";
import "../css/cards.css";
import { UserContext } from "../App";
import User from "../interfaces/User";

interface AllCardsProps {}

const AllCards: FunctionComponent<AllCardsProps> = () => {
  let [cards, setCards] = useState<Card[]>([]);
  let UserCtx = useContext(UserContext);

  useEffect(() => {
    getAllCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="display-1 text-center my-3">
        <i className="fa-solid fa-address-card"></i> BUSINESS CARDS
      </h1>
      {cards.length ? (
        <div className="container mx-auto">
          <div className="row ">
            {cards.map((card: Card) => (
              <div
                className="card border col-md-3  m-2"
                style={{ width: "18rem" }}
                key={card.id}
              >
                <div className="cardImg">
                  <img
                    src={card.image}
                    className="card-img-top p-2 mt-3 mx-auto"
                    alt={card.name}
                    style={{ width: "8rem" }}
                  />
                </div>
                <div className="card-body align-middle">
                  <h5 className="card-title text-center">{card.name}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
                <div className="container mb-2">
                  <span>
                    <i className="fa-solid fa-phone"></i> {card.phone}
                  </span>
                  <hr />
                  <span>
                    <i className="fa-solid fa-location-pin"></i> {card.address}
                  </span>
                  <hr />
                  <span>
                    <i className="fa-solid fa-globe"></i> {card.website}
                  </span>
                </div>
                {!UserCtx.userctx.isBusiness && (
                  <>
                    <button
                      className="btn my-2 border-0"
                      // className={`btn my-2 w-100 ${
                      //   UserCtx.userctx.favoriteCards?.includes(card.id as number)
                      //     ? "btn-warning"
                      //     : "btn-outline-warning"
                      // } `}
                      onClick={() => {
                        addCardToFavorites(
                          card.id as number,
                          UserCtx.userctx as User
                        )
                          .then((res) => {
                            if (res) {
                              UserCtx.changeUser({
                                ...UserCtx.userctx,
                                ...res.data,
                              });
                              successMsg(
                                `Card ${card.name} added to favorites`
                              );
                            }
                          })
                          .catch((err) => console.log(err));
                      }}
                      disabled={UserCtx.userctx.favoriteCards?.includes(
                        card.id as number
                      )}
                    >
                      {UserCtx.userctx.favoriteCards?.includes(
                        card.id as number
                      ) ? (
                        <i className="fa-solid fa-heart text-warning"></i>
                      ) : (
                        <i className="fa-regular fa-heart text-warning"></i>
                      )}
                    </button>
                  </>
                )}
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
