import React from "react"
import { Link } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link to="/pets">
        <Menu.Item>Pets</Menu.Item>
      </Link>
    </Menu>
  );
};

export default Navbar