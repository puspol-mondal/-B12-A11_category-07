import React from "react";
import { Link } from "react-router";
const logo = "/homedecor.png";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        {" "}
        <img className=" w-[100px]" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
