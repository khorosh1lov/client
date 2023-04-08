import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddToCartButton from "./AddToCartButton";

const DishModalCard = ({ show, onHide, dish, restaurant }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title
          as="h1"
          className="text-capitalize"
          id="contained-modal-title-vcenter"
        >
          {dish.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-2 fs-4 lh-1">{dish.description}</p>
        <Image
          className="w-100"
          fluid
          rounded
          src={dish.image}
          alt={dish.name}
        />
        {dish.ingredients.length > 0 && (
          <p className="mt-2 lh-1 fst-italic text-lowercase">
            <span className="fst-normal fw-bold text-capitalize">
              Ingredients:{" "}
            </span>
            {dish.ingredients.join(", ")}
          </p>
        )}
        {dish.allergens.length > 0 && (
          <p className="mt-2 lh-1 fst-italic text-lowercase">
            <span className="fst-normal fw-bold text-capitalize">
              Allergens:{" "}
            </span>
            {dish.allergens.join(", ")}
          </p>
        )}
        <hr />
        <Row>
          <Col className="cm-6">
            <h4 className="text-start align-middle font-weight-bold">
              $ {dish.price}
            </h4>
          </Col>
          <Col className="cm-6 col-auto">
            <AddToCartButton dish={dish} restaurant={restaurant} />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default DishModalCard;
