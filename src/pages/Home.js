import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logo.jpg";
import Footer from "../components/Footer";

const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    margin: 4em;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    text-indent: 0.3em;
    color: #181818;

    span {
      color: #066416;
    }
  }
  .title_1 {
    font-size: 0.8rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    text-indent: 0.3em;
    color: #181818;
  }
  .home_create_employee::before {
    content: "";
    background: url(${Logo}) no-repeat center center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
  .block {
    position: relative;
    bottom: 30px;
  }
  .block_2 {
    margin: -2rem 13rem;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: absolute;
    top: 383px;
  }
  li {
    list-style-type: none;
    margin: 30px 0;
    border-radius: 50px 50px;
    background: antiquewhite;
    padding: 1rem 2rem;
  }
  a {
    text-decoration: none;
    font-size: 0.8rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    color: #066416
  }
`;

const Home = () => {
  return (
    <> 
    <HomeStyle>
      <div className="home_create_employee">
      <div className="block">
        <div className="block_1">
          <p className="title">
            HRNet the app that manage <span> your employees </span>{" "}
          </p>
        </div>
        <div className="block_2">
          <p className="title_1">Join us in creating your employee list ...</p>
          <ul>
            <li>
              <NavLink to="/createemployee"> Create </NavLink>
            </li>
            <li>
              <NavLink to="/viewemployees"> View </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </HomeStyle>
    <Footer />
    </>
  );
};

export default Home;
