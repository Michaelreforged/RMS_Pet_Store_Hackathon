// import React from "react"
// import { Link } from "react-router-dom";
// import { Menu, Sticky } from "semantic-ui-react";

// const Navbar = () => {
//   return (
//   <Sticky>
//     <Menu>
//       <Link to="/">
//         <Menu.Item>Home</Menu.Item>
//       </Link>
//       <Link to="/pets">
//         <Menu.Item>Pets</Menu.Item>
//       </Link>
//     </Menu>
//   </Sticky>
//   );
// };

// export default Navbar

import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Sticky } from 'semantic-ui-react'
import Logo from './images/logo2.png'

const NavBar = () => {
  return (
    <Sticky>
      <div style={styles.NavBar}>
        <Menu inverted style={styles.Menu}>
          <Menu.Item as='a'>
            <img src={Logo} style={{ marginRight: '0.7em' }}/>
            RSM Pets Store
          </Menu.Item>
          <Link to="/">
            <Menu.Item as='a'>Home</Menu.Item>
          </Link>
          <Link to="/pets">
            <Menu.Item as='a'>Pets</Menu.Item>
          </Link>
          <Link to="/jobs">
            <Menu.Item as='a'>Jobs</Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item as='a'>About</Menu.Item>
          </Link>
          
        </Menu>
      </div>
    </Sticky>
  );
};

const styles = {
  NavBar: {
    boxShadow: "2px 2px 10px",
  },
  Menu: {
    height: "40px",
  }
};

export default NavBar;