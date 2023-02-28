import MTable from "../components/MTable";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const ViewEmpls = styled.div`
  h2 {
    margin: 4em;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    text-indent: 0.3em;
    color: #066416;
    text-align: center;
  }
`;

const ViewEmployees = () => {
  return (
    <>
      <ViewEmpls>
        <div>
          <div className="block_header">
            <h2>Current Employees </h2>
          </div>
          <MTable />
        </div>
      </ViewEmpls>
      <Footer />
    </>
  );
};

export default ViewEmployees;
