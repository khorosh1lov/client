import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

const DishCard = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.dish.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.dish.image} alt={props.dish.name} />
        <p>{props.dish.description}</p>
        <ListGroup horizontal>
            <h5>Ingredients</h5>

            {props.dish.ingredients.map((ingredient) => (

          <ListGroup.Item>{ingredient}</ListGroup.Item>
            ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DishCard;
