import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h1>this is header.</h1>
      <nav className="space-x-8 py-4">
        <NavLink style={({isActive, isPending}) => {
          return {
            fontWeight: isActive? "bold" : "",
            color: isPending? "red": "green"
          }
        }} to={"/"}>Home</NavLink>
        <NavLink to={"/mobiles"}>Mobiles</NavLink>
        <NavLink to={"/laptops"}>Laptops</NavLink>
        <NavLink to={"/app"}>React</NavLink>
        <NavLink to={"/users"}>{({isNavigating}) =>(
          <span>Users {isNavigating && <p>Loading...</p>}</span>
        )}</NavLink>
        <NavLink to={"/users2"}>Users2</NavLink>
        <NavLink to={"/users3"}>Users3</NavLink>
      </nav>
    </div>
  );
};

export default Header;
