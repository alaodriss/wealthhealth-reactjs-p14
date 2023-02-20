import React from "react";
import Cemploye from "../components/Form";
import styled from "styled-components";
import logo from '../assets/images/logo.jpg'

const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    color:  #066416;
  }
  a {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
  h2 {
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    text-indent: 0.3em;
    color:  #066416;
    text-align: center;
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
    background: url(${logo}) no-repeat center center;
    position: absolute;
    opacity: 0.3;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
`;

const CreateEmployee = () => {
  return (
    <HomeStyle>
      <div className="home_create_employee">
        <h1 className="logo">HRnet</h1>
        <h2>Create Employee</h2>
        <Cemploye />
      </div>
    </HomeStyle>
  );
};

export default CreateEmployee;
