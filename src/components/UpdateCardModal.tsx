import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import UpdateCard from "./UpdateCard";

interface UpdateCardModalProps {
  refresh: Function;
  show: boolean;
  onHide: Function;
  cardId: number;
}

const UpdateModal: FunctionComponent<UpdateCardModalProps> = ({
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <UpdateCard
            onHide={() => onHide()}
            cardId={cardId}
            refresh={refresh}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateModal;
