import React, { useState } from "react";
import { ExploreMenu, FoodDisplay, Hero } from "../index.js";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
