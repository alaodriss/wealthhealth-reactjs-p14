import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DatePikerStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row;
  .react-datepicker-wrapper {
    display: block;
    width: none;
  }

  font-family: monospace;
`;

const Datepiker = ({ dataio }) => {
  const [startDate, setStartDate] = useState(new Date());


  const newData = dataio + startDate.toLocaleDateString();

  console.log(newData);

  return (
    <DatePikerStyle>
      <div>
        <label>Date of Birth</label>
        <DatePicker
          label="Event date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={15}
          scrollableYearDropdown
        />
      </div>
      <div>
        <label>Start Date</label>
        <DatePicker
          label="Event date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={15}
          scrollableYearDropdown
        />
      </div>
    </DatePikerStyle>
  );
};

export default Datepiker;
