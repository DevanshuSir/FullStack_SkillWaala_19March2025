import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formData } from "../features/user/userSlice";

const Form = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.User.value);

  function handleForm(e) {
    e.preventDefault();
    const formValue = { UserName: user, Password: pass };
    dispatch(formData(formValue));
  }

  return (
    <div>
      <h1>Form 😍</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="user">Name</label>
        <input
          type="text"
          name=""
          id="user"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name=""
          id="pass"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>

      <table border={"1"}>
        <tr>
          <thead>
            <th>userName</th>
            <th>userPassword</th>
          </thead>
        </tr>
        <tr>
          {userData.map((value) => (
            <tbody>
              <td>{value.UserName}</td>
              <td>{value.Password}</td>
            </tbody>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Form;
