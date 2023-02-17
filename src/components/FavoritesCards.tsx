import "../css/myCards.css";
import axios from "axios";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Card from "../interfaces/Card";
import { removeFromFavorites } from "../services/usersService";

interface FavoritesCardsProps {}

const FavoritesCards: FunctionComponent<FavoritesCardsProps> = () => {
  let [favoriteCards, setFavoriteCards] = useState<Card[]>([]);
  let [cardsChange, setCardsChange] = useState<boolean>(false);
  let UserCtx = useContext(UserContext);

  useEffect(() => {
    if (!UserCtx.userctx.id) return;
    getFavoriteCards();
    // eslint-disable-next-line
  }, [cardsChange, UserCtx]);

  let refresh = () => {
    setCardsChange(!cardsChange);
  };

  let getFavoriteCards = async () => {
    try {
      let cardsIds = UserCtx.userctx.favoriteCards;
      let cardsRes = await axios.get(`${process.env.REACT_APP_API}/cards`);
      let cardsArr: any = cardsRes.data;
      let userCards = cardsArr.filter((item: any) =>
        cardsIds?.includes(item.id)
      );
      setFavoriteCards(userCards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="display-1 text-center my-3">FAVORITE CARDS</h1>
        {favoriteCards?.length ? (
          <div className="container mx-auto">
            <div className="row ">
              {favoriteCards.map((card: Card) => (
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
                  <div className="container">
                    <span>
                      <i className="fa-solid fa-phone"></i> {card.phone}
                    </span>
                    <hr />
                    <span>
                      <i className="fa-solid fa-location-pin"></i>{" "}
                      {card.address}
                    </span>
                    <hr />
                    <span>
                      <i className="fa-solid fa-globe"></i> {card.website}
                    </span>
                  </div>
                  <button
                    className="btn btn-danger my-2 w-100"
                    onClick={() => {
                      let id = card.id ? card.id : 0;
                      try {
                        removeFromFavorites(id, UserCtx.userctx).then((res) => {
                          let newArr = res.data;
                          setFavoriteCards(newArr);
                          UserCtx.changeUser({
                            ...UserCtx.userctx,
                            ...newArr,
                          });
                          refresh();
                        });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    <i className="fa-solid fa-trash"></i> Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No Cards</p>
        )}
      </div>
    </>
  );
};

export default FavoritesCards;
