import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import { deleteCard } from "../services/cardsService";
import { successMsg } from "../services/feebacks";

interface DeleteCardModalProps {
  refresh: Function;
  show: boolean;
  onHide: Function;
  cardId: number;
}

const DeleteCardModal: FunctionComponent<DeleteCardModalProps> = ({
  refresh,
  show,
  onHide,
  cardId,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide()}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>DELETE CARD</Modal.Header>
        <Modal.Body>
          <div>Are you sure?</div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteCard(cardId)
                .then(() => {
                  onHide();
                  successMsg("Card deleted successfully!");
                  refresh();
                })
                .catch((err) => console.log(err));
            }}
          >
            Yes
          </button>
          <button className="btn btn-primary" onClick={() => onHide()}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCardModal;
