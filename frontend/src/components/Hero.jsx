import React from "react";
import { Button } from "flowbite-react";

function Hero() {
  return (
    <div className="bg-hero bg-no-repeat bg-cover  bg-center h-[35rem] rounded-xl">
      <div className=" text-white  lg:pt-44 pt-5 pl-5">
        <h1 className=" lg:text-7xl text-4xl ">
          Order your
          <br /> favourite food here
        </h1>
        <p className="text-lg hidden lg:flex leading-5 w-1/2 pb-5 pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatem est doloribus eligendi nostrum qui, vero itaque inventore
          placeat adipisci illum suscipit accusantium, voluptates, reprehenderit
          praesentium soluta! Culpa soluta magni, eos temporibus enim pariatur
          impedit!
        </p>
        <Button className="lg:flex hidden" color="warning">
          View Menu
        </Button>
      </div>
    </div>
  );
}

export default Hero;
