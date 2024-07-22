import React from "react";
import { menu_list } from "../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-5 pt-10">
      <h1 className=" text-3xl font-bold text-[#262626]">Choose Food Dish</h1>
      <p className=" xl:w-2/3 text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to stasfy your craving and elevate your dinig expreience, One
        delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-8 overflow-x-auto no-scrollbar">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="flex-shrink-0 w-48 flex flex-col items-center "
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`cursor-pointer transition-all rounded-full ${
                category === item.menu_name ? "exploremenuitemactive" : ""
              }`}
            />
            <p className="text-center mt-2 text-[#747474] text-[20px]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className=" h-2 bg-slate-200 border-none " />
    </div>
  );
}

export default ExploreMenu;
