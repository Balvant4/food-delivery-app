import React from "react";
import { assets } from "../assets/assets";

function FoodItem({ id, name, price, image, description }) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
