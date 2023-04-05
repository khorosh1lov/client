import React, { useReducer, useState } from "react";
// import { Button, Modal } from "bootstrap";
// import DishCard from "./DishCard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DishCard from "./DishCard";

const DishList = ({ dishes }) => {
  // const modalRef = useRef()
  const [show, setShow] = useState(false);
  const [modalDish, setModalDish] = useState({});
  // const showModal = () => {
  //     const modalEl = modalRef.current
  //     const bsModal = new Modal(modalEl)
  //     bsModal.show()
  // }

  // const hideModal = () => {
  //     const modalEl = modalRef.current
  //     const bsModal= Modal.getInstance(modalEl)
  //     bsModal.hide()
  // }
  const handleOpenModal = (dish) => {
    setShow(true);
    setModalDish(dish);
    console.log(dish);
  };

  const handleCloseModal = () => setShow(false);

  const handleAddClick = (event) => {
    console.log("button click");
    event.stopPropagation();
  };

  const specialOfferDishes = dishes.filter((dish) => dish.specialOffer === 5);

  return (
    <div className="container">
      <h2 className="mt-4">Dishes</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {/* <CardGroup> */}
        {dishes.map((dish) => (
          <Col>
            <Card
              onClick={() => handleOpenModal(dish)}
              as="Button"
              key={dish._id}
              className="box h-100"
            >
              <Card.Img variant="top" src={dish.image} alt={dish.name} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Row>
                  <Col className="cm-6">
                    <h4 className="text-start align-middle font-weight-bold">
                      $ {dish.price}
                    </h4>
                  </Col>
                  <Col className="cm-6">
                    <Button
                      onClick={(event) => handleAddClick(event)}
                      variant="warning"
                      className=""
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <DishCard show={show} onHide={handleCloseModal} dish={modalDish} />
    </div>
  );
};

export default DishList;
