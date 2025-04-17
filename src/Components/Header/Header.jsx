import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <h1>this is header.</h1>
      <nav className="space-x-8 py-4">
        <Link to={"/"}>Home</Link>
        <Link to={"mobiles"}>Mobiles</Link>
        <Link to={"laptops"}>Laptops</Link>
        <Link to={"/react"}>React</Link>
      </nav>
    </div>
  );
};

export default Header;
