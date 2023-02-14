import React from "react";
import { Link } from "react-router-dom";
import Cemploye from "../components/Form";
import styled from "styled-components";
import image from '../assets/images/bg.jpg'
const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-family: monospace;
    font-size: 30px;
  }
  a {
    font-family: monospace;
    font-size: 14px;
  }
  h2 {
    text-align: center;
    font-family: monospace;
    font-size: 20px;
  }

  #link-container {
    text-align: center;
}
#link {
    background: black;
    color: white;
    display: inline-block;
    padding: 10px;
}
.home_create_employee::before{
    content: '';
    background: url(${image}) no-repeat center center/cover;
    position: absolute;
    opacity: 0.3;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
`;

const Home = () => {
  return (
    <HomeStyle>
      <div className="home_create_employee">
        <h1 className="logo">HRnet</h1>
        <div id="link-container">
          <Link  id="link" to="/">
            View Current Employees
          </Link>
        </div>
        <h2>Create Employee</h2>
        <Cemploye />
      </div>
    </HomeStyle>
  );
};

export default Home;
