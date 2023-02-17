import axios from "axios";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import DeleteCardModal from "./DeleteCardModal";
import UpdateCardModal from "./UpdateCardModal";
import Card from "../interfaces/Card";
import "../css/cards.css";
import { UserContext } from "../App";

interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
  let [myCards, setMyCards] = useState<Card[]>([]);
  let [cardId, setCardId] = useState<number>(0);
  let [cardsChange, setCardsChange] = useState<boolean>(false);
  let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  let UserCtx = useContext(UserContext);
  useEffect(() => {
    getMyCards();
  }, [cardsChange]);

  let refresh = () => {
    setCardsChange(!cardsChange);
  };

  let getMyCards = async () => {
    try {
      if (!UserCtx.userctx.id) return;
      let userId: number = UserCtx.userctx.id;
      let cardsRes = await axios.get(
        `${process.env.REACT_APP_API}/cards?userId=${userId}`
      );
      let cardsArr: any = cardsRes.data;
      setMyCards(cardsArr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="display-1 text-center">MY CARDS</h1>
        {myCards.length ? (
          <div className="container">
            <div className="row">
              {myCards.map((card: Card) => (
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
                    className="btn btn-warning m-2"
                    onClick={() => {
                      setOpenUpdateModal(true);
                      setCardId(card.id as number);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      setOpenDeleteModal(true);
                      setCardId(card.id as number);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i> Delete
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
        <UpdateCardModal
          refresh={refresh}
          show={openUpdateModal}
          onHide={() => setOpenUpdateModal(false)}
          cardId={cardId}
        />
      </div>
    </>
  );
};

export default MyCards;
