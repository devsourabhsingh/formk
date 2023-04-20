import React, { useState } from "react";
import handleError from "./HandleError";
import "./Form4.css";
const Form4 = () => {
  const [read, setRead] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const inputEvent = (event) => {
    console.log(read);
    setRead({ ...read, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(handleError(read));
    if (errors !== null) {
      alert("error occur");
    } else {
      alert("read");
    }
  };

  return (
    <div className="container">
      <h1 className="form-heading">Sample Draft</h1>
      <form onSubmit={onSubmit} action="">
        <div className="form">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={read.name}
            onChange={inputEvent}
          />
        </div>
        <div className="error-center">
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className="form">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="enter your e-mail-address"
            name="email"
            value={read.email}
            onChange={inputEvent}
          />
        </div>
        <div className="error-center">
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        <div className="form">
          <label htmlFor="">Phone</label>
          <input
            type="number"
            placeholder="enter your phone number"
            name="phone"
            value={read.phone}
            onChange={inputEvent}
          />
        </div>
        <div className="error-center">
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
        <div className="form">
          <label htmlFor="">D.O.B</label>
          <input
            type="date"
            placeholder="enter your date-o-birth"
            name="dob"
            value={read.dob}
            onChange={inputEvent}
          />
        </div>
        <div className="error-center">
          {errors.dob && <p className="form-error">{errors.dob}</p>}
        </div>
        <div className="form1">
          <label htmlFor="">Gender</label>
          <label htmlFor="" className="form-radio-m">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={inputEvent}
          />
          <label htmlFor="" className="form-radio-f">
            Female
          </label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            onChange={inputEvent}
          />
        </div>
        <div className="error-center">
          {errors.gender && <p className="form-error">{errors.gender}</p>}
        </div>
        <div className="btn-wrapper">
          <button className="form-btn" type="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form4;
