import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <Navbar expand="lg" className="bg-blue-100 shadow-md fixed-top">
      <Container fluid>
        <Link to={"/"} className="no-underline">
          <Navbar.Brand>
            <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-600 bg-clip-text text-transparent">
              Radiantly
            </p>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto space-x-5 font-bold ml-3">
            <Link to="/" className="no-underline">
              <Navbar.Text>Home</Navbar.Text>
            </Link>
            <Link to="/movies" className="no-underline">
              <Navbar.Text>Movies</Navbar.Text>
            </Link>
            <Link to="/about" className="no-underline">
              <Navbar.Text>About Us</Navbar.Text>
            </Link>
            <Link to="/contact" className="no-underline">
              <Navbar.Text>Contact Us</Navbar.Text>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for movies..."
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
