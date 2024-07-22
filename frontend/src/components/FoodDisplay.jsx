import React, { useContext } from "react";
import { StoreContext, FoodItem } from "../index.js";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className=" mt-8" id="food-display">
      <h2 className=" text-2xl font-bold">Top dishes near you</h2>
      <div className="flex flex-wrap  ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
