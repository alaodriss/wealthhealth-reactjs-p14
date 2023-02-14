import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import states from "./States";
import Datepiker from "./Datepiker";

import "./Form.css";

const Cemployee = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  // const [startDate, setStartDate] = useState(new Date());

  const Input = ({ label, register, required }) => (
    <>
      <label className="name_input">{label}</label>
      <input {...register(label, { required })} />
    </>
  );

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
  };

  const handleChange = (event) => {
    setData({ data: event.target.value });
    console.log(event);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="step_1">
          <Input
            label="First Name"
            register={register}
            placeholder="First name"
          />
          <Input
            label="Last Name"
            register={register}
            placeholder="Last name"
          />
        </div>

        <Datepiker dataio={data} />

        <div className="container_address">
          <fieldset> 
          <legend>Address</legend>
          <div className="step_2">
            <Input label="Street" register={register} placeholder="Street" />

            <Input label="City" register={register} placeholder="City" />
          </div>
          <div className="step_3">
            <label className="lable_state">State</label>
            <select
              {...register("State", { required: true })}
              onChange={(e) => handleChange}
            >
              {states.map((state) => (
                <option key={Math.random()}>{state.name}</option>
              ))}
            </select>

            <Input
              label="Zip Code"
              register={register}
              placeholder="Zip Code"
            />
          </div>
          </fieldset>
        </div>

        <label>Department</label>

        <select {...register("Department", { required: true })}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Rh">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        <p>{data}</p>
        <input className="button-59" type="submit" value="Save" />
      </form>
    </>
  );
};

export default Cemployee;
