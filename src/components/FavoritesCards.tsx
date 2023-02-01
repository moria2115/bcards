import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import DeleteCardModal from "./DeleteCardModal";

interface FavoritesCardsProps {}

const FavoritesCards: FunctionComponent<FavoritesCardsProps> = () => {
  let [favoriteCards, setFavoriteCards] = useState<Card[]>([]);
  let [cardId, setCardId] = useState<number>(0);
  let [cardsChange, setCardsChange] = useState<boolean>(false);
  let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    getFavoriteCards();
  }, [cardsChange]);

  let refresh = () => {
    setCardsChange(!cardsChange);
  };

  let getFavoriteCards = async () => {
    try {
      let userId: number = JSON.parse(
        sessionStorage.getItem("userData") as string
      ).userId;

      let cardsRes = await axios.get(
        `${process.env.REACT_APP_API}/users?userId=${userId}`
      );
      console.log(cardsRes);

      let cardsArr: any = cardsRes.data;

      setFavoriteCards(cardsArr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {favoriteCards.length ? (
        <div className="container">
          <div className="row">
            {favoriteCards.map((card: Card) => (
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
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      setOpenDeleteModal(true);
                      setCardId(card.id as number);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
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
    </>
  );
};

export default FavoritesCards;
