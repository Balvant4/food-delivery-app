import React, { useContext } from "react";
import { StoreContext, FoodItem } from "../index.js";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="" id="food-display">
      <h2>Top dishes near you</h2>
      <div>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
