import React from "react";
import AddToCartButton from "./AddToCartButton";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DishCategory = ({ category, restaurant, onModalShow }) => {
  return (
    <div>
      <h2 className="mt-4">{category}</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {restaurant.dishes
          .filter((dish) => dish.category === category)
          .map((dish) => (
            <Col key={dish._id}>
              <Card
                className="btn box h-100 p-0 shadow-sm text-start"
                onClick={() => onModalShow(dish)}
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
                    <Col className="cm-6 col-auto">
                      <AddToCartButton dish={dish} restaurant={restaurant} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default DishCategory;
