import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SpecialOffers = ({ specialOfferDishes, onModalShow }) => {
  const titleStyle = { backgroundColor: "#272727" }; //temporary hardcode
  return (
    <div>
      <h2 className="mt-4">Special Offers</h2>
      <Row xs={2} md={3} lg={4} className="g-2">
        {specialOfferDishes.map((dish) => (
          <Col key={dish._id}>
            <Card
              className="btn p-0 bg-dark text-white"
              onClick={() => onModalShow(dish)}
            >
              <Card.Img src={dish.image} alt={dish.name} />
              <Card.ImgOverlay>
                <Card.Title style={titleStyle} className="gray-500">
                  {dish.name}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpecialOffers;
