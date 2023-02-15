import axios from "axios";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
// import { UserContext } from "../App";
import Card from "../interfaces/Card";
// import { getCardsById } from "../services/cardsService";
import DeleteCardModal from "./DeleteCardModal";
import "../css/cards.css";

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
      console.log(UserCtx.userctx);

      let cardsRes = await axios.get(
        `${process.env.REACT_APP_API}/cards?cardId=${cardsIds}`
      );
      console.log(cardsRes.data);

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
      <h1>FAVORITE CARDS</h1>
      {favoriteCards?.length ? (
        <div className="container">
          <div className="row">
            {favoriteCards?.map((card: Card) => (
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
                    className="btn btn-danger mx-2 w-100"
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
