import React from "react";
import StoreContext from "./CreateStoreContext";
import { food_list } from "../assets/assets";

function StoreContextProvider(props) {
  const contextvalue = { food_list };
  return (
    <div>
      <StoreContext.Provider value={contextvalue}>
        {props.children}
      </StoreContext.Provider>
    </div>
  );
}

export default StoreContextProvider;
