import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userAllData, setUserAllData] = useState([]);

  function handleForm(e) {
    e.preventDefault();
    const formdata = { UserName: username, UserPassword: password };

    fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      });
  }

  useEffect(() => {
    fetch("/api/useralldata")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setUserAllData(result.Data);
      });
  }, []);

  function handleDelete(id) {
    fetch(`/api/userdatadelete/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div>
      <h1>Form</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name=""
          id=""
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="">password</label>
        <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
      {userAllData.map((items) => (
        <ul key={items._id}>
          <span>{items.user}</span>
          <button
            onClick={() => {
              handleDelete(items._id);
            }}
          >
            Delete
          </button>
          <Link to={`/update/${items._id}`}>
            <button>Update</button>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Form;
