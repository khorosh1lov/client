import React from "react";
import Button from "react-bootstrap/Button";
import { useCart } from "../withCart";

const AddToCartButton = ({ dish, restaurant }) => {
  const { addToCart } = useCart();

  const handleAddClick = (event, curDish, curRestaurant, dishQuantity = 1) => {
    addToCart({
      dish: curDish,
      quantity: dishQuantity,
      restaurant: curRestaurant,
    });
    event.stopPropagation();
  };
  return (
    <Button
      className="text-uppercase"
      onClick={(event) => handleAddClick(event, dish, restaurant)}
      variant="warning"
    >
      +Add
    </Button>
  );
};

export default AddToCartButton;
