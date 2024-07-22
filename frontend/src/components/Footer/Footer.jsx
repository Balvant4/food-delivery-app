import { Footer } from "flowbite-react";
import React from "react";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";

function FooterP() {
  return (
    <Footer container className="dark:bg-gray-800">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand src={assets.logo} alt="Flowbite Logo" />
          <Footer.LinkGroup className="cursor-pointer gap-5 lg:text-2xl ">
            <Link to="/placeorder">
              <Footer.Link>About</Footer.Link>
            </Link>
            <Link to="#">
              <Footer.Link>Privacy Policy</Footer.Link>
            </Link>
            <Link to="#">
              <Footer.Link>Licensing</Footer.Link>
            </Link>
            <Link to="#">
              <Footer.Link>Contact</Footer.Link>
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}

export default FooterP;
