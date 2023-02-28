import React from "react";
import styled from "styled-components";

const BarFooter = styled.div`

* {-moz-box-sizing: border-box; box-sizing: border-box;}

.bar-footer{
    position: absolute;
    bottom: 0;
    background-color: antiquewhite;
    width: 98%;
    border-radius: 4px;
}
.text-footer{
    margin: 0.3em 0;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    text-indent: 0.3em;
    color: #066416;    
    text-align: center;
}

`;
const Footer = () => {
  return (
    <BarFooter>
      <div className="bar-footer">
        <p className="text-footer"> WEALTH HEALTH </p>
      </div>
    </BarFooter>
  );
};

export default Footer;
