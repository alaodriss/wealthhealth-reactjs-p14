import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import states from "./States";
import Datepiker from "./Datepiker";

import styled from "styled-components";
import Modal from "./Modal";

const FM = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .name_input {
    position: absolute;
  }
  input {
    padding: 5px;
    border: 2px solid #000;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    margin: 20px;
  }

  label {
    font-family: monospace;
    margin-right: 5px;
    margin-left: 23px;
    font-weight: 900;
    font-size: 16px;
  }
 
.labelSelect {
  margin: 11px 0 10px 21px;
}
  select {
    padding: 5px;
    border: 2px solid #000;
    border-radius: 4px;
    color: #333;
    width: 177px;
    margin: 0 20px;
  }

  .step_1, .step_3  {
    display: flex;
    margin: 20px  auto;

  }
.step_2{
    display: flex;
    margin: 0 auto;
}
  }
  .step_1_1, .step_2_2{
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .step_3_3 {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .message {
    position: absolute;
    top: 88%;
    left: 11%;
    color: red;
  }
  .button-59 {
    align-items: center;
    background-color: #fff;
    border: 2px solid #000;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    fill: #000;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    justify-content: center;
    letter-spacing: -0.8px;
    line-height: 24px;
    min-width: 140px;
    outline: 0;
    padding: 0 17px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-59:focus {
    color: #171e29;
  }

  .button-59:hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  .button-59:active {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  @media (min-width: 768px) {
    .button-59 {
      min-width: 170px;
    }
  }
`;

const Cemployee = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [data, setData] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data) => {
    setOpenModal(true);
    setData(JSON.stringify(data));
  };

  const handleChange = (event) => {
    setData({ data: event.target.value });
    console.log(event);
  };

  return (
    <FM>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="step_1">
            <div className="step_1_1">
              <label>First Name </label>
              <input
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <span className="message">First name is required</span>
              )}
            </div>

            <div className="step_1_1">
              <label>Last Name </label>
              <input
                {...register("lastName", { required: true })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName?.type === "required" && (
                <span className="message">Last name is required</span>
              )}
            </div>
          </div>

          <Datepiker dataio={data} />

          <div className="container_address">
            <fieldset>
              <legend>Address</legend>
              <div className="step_2">
                <div className="step_2_2">
                  <label>Street </label>
                  <input
                    {...register("Street", { required: true })}
                    aria-invalid={errors.Street ? "true" : "false"}
                  />
                  {errors.Street?.type === "required" && (
                    <span className="message">Street is required</span>
                  )}
                </div>
                <div className="step_2_2">
                  <label>City </label>
                  <input
                    {...register("city", { required: true })}
                    aria-invalid={errors.city ? "true" : "false"}
                  />
                  {errors.city?.type === "required" && (
                    <span className="message">City is required</span>
                  )}
                </div>
              </div>
              <div className="step_3">
                <div className="step_3_3">
                  <label className="labelSelect">State</label>
                  <select
                    {...register("State", { required: true })}
                    onChange={(e) => handleChange}
                  >
                    {states.map((state) => (
                      <option key={Math.random()}>{state.name}</option>
                    ))}
                  </select>
                </div>
                <div className="step_3_3">
                  <label>Zip Code </label>
                  <input
                    {...register("zip", { required: true })}
                    aria-invalid={errors.zip ? "true" : "false"}
                  />
                  {errors.zip?.type === "required" && (
                    <span className="message">Zip Code is required</span>
                  )}
                </div>
              </div>
            </fieldset>
          </div>

          <label className="labelSelect">Department</label>
          <select {...register("Department", { required: true })}>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Rh">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
          <p>{data}</p>
          <input className="button-59" type="submit" value="Save" />
          {openModal && (
            <Modal>
              <div className="body">
                <button
                  className="btn-close"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </button>
                <p className="popupTitle">
                  Merci pour vous réponses. <br /> Vous pouvez continuer vers
                  l'offre qui vous correspond au mieux.
                </p>
              </div>
            </Modal>
          )}
        </form>
      </div>
    </FM>
  );
};

export default Cemployee;
