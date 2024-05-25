import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  // console.warn(user);

 function handleLogout() {
   localStorage.clear();
   navigate("/register");
 }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <div className="head_nav">
         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </div>
        
        <Nav className="me-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/">Product List</Link>
              <Link to="/add">AddProduct</Link>
              <Link to="/update">UpdateProduct</Link>
              <Link to="/search">Search Product</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>
        {
          localStorage.getItem("user-info")  ?
            <Nav>
              <div className="drop_nav">
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
              </div>
             
            </Nav>  :
            null
        }
        
      </Navbar>
    </div>
  );
}

export default Header;
