import React from "react";
import { Button } from "flowbite-react";

function Hero() {
  return (
    <div className="bg-hero bg-no-repeat bg-cover  bg-center h-[35rem] rounded-xl">
      <div className=" text-white pl-28 pt-44">
        <h1 className=" text-7xl">
          Order your
          <br /> favourite food here
        </h1>
        <p className="text-lg leading-5 w-1/2 pb-5 pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatem est doloribus eligendi nostrum qui, vero itaque inventore
          placeat adipisci illum suscipit accusantium, voluptates, reprehenderit
          praesentium soluta! Culpa soluta magni, eos temporibus enim pariatur
          impedit!
        </p>
        <Button color="warning">View Menu</Button>
      </div>
    </div>
  );
}

export default Hero;
