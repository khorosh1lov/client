import React, { useState } from "react";
import DishModalCard from "./DishModalCard";
import SpecialOffers from "./SpecialOffers";
import DishCategory from "./DishCategory";

const DishList = ({ restaurant }) => {
  const [show, setShow] = useState(false);
  const [modalDish, setModalDish] = useState({});

  const handleModal = () => setShow(!show);

  const handleOpenModal = (dish) => {
    handleModal();
    setModalDish(dish);
  };

  const specialOfferDishes = restaurant.dishes
    .filter((dish) => dish.specialOffer === "none") //Add special offers in bd and change === to !==
    .slice(0, 3);
  //Creating list of unique categories
  const uniqueCategory = restaurant.dishes
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div className="container">
      <SpecialOffers
        specialOfferDishes={specialOfferDishes}
        onModalShow={handleOpenModal}
      />
      {uniqueCategory.map((category, index) => (
        <DishCategory
          key={index}
          category={category}
          restaurant={restaurant}
          onModalShow={handleOpenModal}
        />
      ))}
      {show && (
        <DishModalCard
          show={show}
          onHide={handleModal}
          dish={modalDish}
          restaurant={restaurant}
        />
      )}
    </div>
  );
};

export default DishList;
