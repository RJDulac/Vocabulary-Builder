import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div style={{ textAlign: "center" }}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/random">Random Words</Link>
    </li>
    <li>
      <Link to="/search">Search Words</Link>
    </li>
  </div>
);

export default NavBar;
