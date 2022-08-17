import React from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {
  Navbar,
  Badge,
  Button,
  Form,
  NavDropdown,
  Dropdown,
  NavItem,
  NavLink,
  FormControl,
  Nav,
  Container,
} from "react-bootstrap";
import Cart from "./MiniCart";
import { CartState } from "../context/Context";
function Header() {
const {state:{cart},dispatch}=CartState()
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 60} } className="container-x">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>
        <Nav>
        <Dropdown alignright="true" >
      <Dropdown.Toggle variant="success">
        <FaShoppingCart color="white" fontSize="25px" />
        <Badge bg='none'>{cart.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{maxWidth:370}}>
        
        {cart.length >0 ?<Cart/>
        :<span style={{padding:10}}>Cart isEmpty</span> 
        }
         <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
        {/* <Dropdown.Item>Hello there!</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
