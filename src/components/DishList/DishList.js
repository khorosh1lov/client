import React from "react";

const DishList = ({ dishes }) => {
  return (
    <div className="container">
      <h2 className="mt-4">Dishes</h2>
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish._id} className="col-md-4 d-flex align-items-stretch">
            <div className="card mt-3">
              <img src={dish.image} alt={dish.name} className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">{dish.name}</h4>
                <p className="card-text">{dish.description}</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <h4 className="card-title">${dish.price}</h4>
                <button className="btn btn-outline-warning">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishList;
