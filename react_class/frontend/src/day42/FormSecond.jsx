import React, { useState } from "react";
import FormCss from "./form.module.css";

const FormSecond = () => {
  const [formData, setFormData] = useState({ name: "dev", pass: "123" });

  function handleForm(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={FormCss.form}>
      <div className={FormCss.main}>
        <h1 className="text-center">Form</h1>
        <form action="" onSubmit={handleForm}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="name"
            id=""
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="pass"
            id=""
            className="form-control"
            value={formData.pass}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Submit"
            className="form-control btn btn-success mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default FormSecond;
