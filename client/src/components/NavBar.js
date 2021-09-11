import React from "react"
import { Link } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";

const Navbar = () => {
  return (
  <Sticky>
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link to="/pets">
        <Menu.Item>Pets</Menu.Item>
      </Link>
    </Menu>
  </Sticky>
  );
};

export default Navbar