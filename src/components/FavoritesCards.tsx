import "../css/myCards.css";
import axios from "axios";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Card from "../interfaces/Card";
import DeleteCardModal from "./DeleteCardModal";

interface FavoritesCardsProps {}

const FavoritesCards: FunctionComponent<FavoritesCardsProps> = () => {
  let [favoriteCards, setFavoriteCards] = useState<Card[]>([]);
  let [cardId, setCardId] = useState<number>(0);
  let [cardsChange, setCardsChange] = useState<boolean>(false);
  let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  let UserCtx = useContext(UserContext);

  useEffect(() => {
    getFavoriteCards();
  }, [cardsChange]);

  let refresh = () => {
    setCardsChange(!cardsChange);
  };

  let getFavoriteCards = async () => {
    try {
      let cardsIds = UserCtx.userctx.favoriteCards;

      let cardsRes = await axios.get(
        `${process.env.REACT_APP_API}/cards?cardId=${cardsIds}`
      );

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
                      setOpenDeleteModal(true);
                      setCardId(card.id as number);
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

        <DeleteCardModal
          refresh={refresh}
          show={openDeleteModal}
          onHide={() => setOpenDeleteModal(false)}
          cardId={cardId}
        />
      </div>
    </>
  );
};

export default FavoritesCards;
