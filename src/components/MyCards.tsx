import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import DeleteCardModal from "./DeleteCardModal";
import UpdateCardModal from "./UpdateCardModal";

interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
  let [myCards, setMyCards] = useState<Card[]>([]);
  let [cardId, setCardId] = useState<number>(0);
  let [cardsChange, setCardsChange] = useState<boolean>(false);
  let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  useEffect(() => {
    getMyCards();
  }, [cardsChange]);

  let refresh = () => {
    setCardsChange(!cardsChange);
  };

  let getMyCards = async () => {
    try {
      let userId: number = JSON.parse(
        sessionStorage.getItem("userData") as string
      ).userId;

      let cardsRes = await axios.get(
        `${process.env.REACT_APP_API}/cards?userId=${userId}`
      );

      let cardsArr: any = cardsRes.data;

      //   for (let item of cardsArr) {
      //     let cardRes = await axios.get(`http://localhost:8000/cards/${item.id}`);
      //     myCards.push(cardRes.data);
      //   }
      setMyCards(cardsArr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {myCards.length ? (
        <div className="container">
          <div className="row">
            {myCards.map((card: Card) => (
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
                    className="btn btn-warning"
                    onClick={() => {
                      setOpenUpdateModal(true);
                      setCardId(card.id as number);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      setOpenDeleteModal(true);
                      setCardId(card.id as number);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
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
    </>
  );
};

export default MyCards;
