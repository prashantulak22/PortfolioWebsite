import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "./PU.svg";
import "./Navbar.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
      return (
            <Navbar bg="light" expand="lg" >
                  <Container style={{"padding":"0px"}}>
                        <Navbar.Brand as={Link} to={"/"}><img src={logo} alt="alu" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav ">
                              <Nav className="mx-auto">
                                    <Nav.Link as={Link} to={"/"} eventKey={1} >Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/about"} eventKey={2} >About</Nav.Link>
                                    <Nav.Link as={Link} eventKey={3} to={"/experience"}>Experience</Nav.Link>
                                    <Nav.Link as={Link} eventKey={4} to={"/works"}>Works</Nav.Link>
                              </Nav>
                              <Nav>
                                    <Nav.Link className="linkedin" href="https://www.linkedin.com/in/prashant-ulak-b77b981b5/"> <BsLinkedin /></Nav.Link>
                                    <Nav.Link className="github" href="https://github.com/prashantulak22"> <BsGithub /></Nav.Link>

                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>


      )
}

export default NavbarComp
