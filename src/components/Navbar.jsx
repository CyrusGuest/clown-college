import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex p-8 font-light">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="flex gap-20 mx-auto">
        <li className="my-auto">
          <Link to="/">home</Link>
        </li>
        <li className="my-auto">
          <Link to="/videos">videos</Link>
        </li>
        <li className="my-auto">
          <Link to="/history">history</Link>
        </li>
        <li className="my-auto">
          <Link to="/roster">2024-2025 roster</Link>
        </li>
        <li className="my-auto">
          <Link to="/contact">contact</Link>
        </li>
        <li className="my-auto">
          <Link to="/board">meet the board</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
