import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h1>this is header.</h1>
      <nav className="space-x-8 py-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"mobiles"}>Mobiles</NavLink>
        <NavLink to={"laptops"}>Laptops</NavLink>
        <NavLink to={"/app"}>React</NavLink>
      </nav>
    </div>
  );
};

export default Header;
