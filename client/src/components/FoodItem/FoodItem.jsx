import React, { useContext } from "react";
import "./FoodItem.scss";
import { StoreContext } from "../../context/StoreContex";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="foodItem">
      <div className="food-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src="./images/add_icon_white.png"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src="./images/remove_icon_red.png"
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src="./images/add_icon_green.png"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="rating">
          <p>{name}</p>
          <img src="./images/rating_starts.png" alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
