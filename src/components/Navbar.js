import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: antiquewhite;
  }

  .navbar__link {
    margin: 1em;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 0.3em;
    text-indent: 0.3em;
    color:  #066416;
    border-bottom: 3px solid transparent;
  }

  .navbar__link:hover {
    transform: translateY(-2px);
  }

  .isActive {
    transition: border-bottom 0.5s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <div>
        <nav className="navbar">
          <NavLink
            className="navbar__link isActive"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="navbar__link isActive"
            to="/createemployee"
          >
            Create Employee
          </NavLink>
          <NavLink
            className="navbar__link isActive"
            to="/viewemployees"
          >
            View Current Employees
          </NavLink>
        </nav>
      </div>
    </NavBar>
  );
};

export default Navbar;
