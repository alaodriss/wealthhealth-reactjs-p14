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

  .navbar__link--active {
    border-bottom: 3px solid #29b6f6;
    transition: border-bottom 0.5s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <div>
        <nav className="navbar">
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/createemployee"
          >
            Create Employee
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
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
