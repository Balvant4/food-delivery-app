import React from "react";
import { assets } from "../../assets/assets.js";
import { navItems } from "./index.js";
import { Link, NavLink } from "react-router-dom";
import { Button } from "flowbite-react";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-5">
      <img src={assets.logo} alt="" className="w-[150px]" />
      <ul className="  xl:flex list-none gap-5 text-[#49557e] text-2xl cursor-pointer ">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link to={path}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="Search Icon" />
        <div>
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div></div>
        </div>
        <Link to={"/login"}>
          <Button color="warning" className=" rounded-2xl">
            sign in
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
