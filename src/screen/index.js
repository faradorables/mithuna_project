import React, { Component } from 'react'
import { 
    Navbar, 
    Nav, 
    NavDropdown, 
    Container, 
    Image,
} from 'react-bootstrap'
import { Logo } from '../configs/Png'
import { TropicalOasisPashmina } from '../configs/Model'
import './styles.css';

export default class Home extends Component {
  render() {
    return (
    <>
        <Navbar fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Shop</Nav.Link>
                <NavDropdown title="Catalog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        <Container>
            <Image src={TropicalOasisPashmina}/>
        </Container>

    </>
    )
  }
}