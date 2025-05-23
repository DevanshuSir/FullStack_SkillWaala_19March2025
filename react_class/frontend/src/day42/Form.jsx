import React, { useState } from "react";
import FormCss from "./form.module.css";
import { toast } from "react-hot-toast";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState("");

  function handleForm(e) {
    e.preventDefault();
    // console.log({ User: userName, Password: pass });
    setLogin(userName);
    toast.error(`Hello ${userName}`);
  }

  return (
    <div className={FormCss.form}>
      <div className={FormCss.main}>
        <h1 className="text-center">{login === "" ? "Form" : login}</h1>
        <form action="" onSubmit={handleForm}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Submit"
            className="form-control btn btn-danger mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
