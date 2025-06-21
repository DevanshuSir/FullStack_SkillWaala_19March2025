import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState([]);

  function handleForm(e) {
    e.preventDefault();
    const formData = { UserName: name };

    fetch("/api/userdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setName("");
  }

  useEffect(() => {
    fetch("/api/data")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        setUserData(result.data);
      });
  }, [userData]);

  async function handleDelete(id) {
    await fetch(`/api/userdatadelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div>
      <h1>UserData Form 😍</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>

      {userData.map((value, index) => (
        <ul key={index}>
          <li>
            {value.UserName}{" "}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
            <Link to={`/update/${index}`}>
              <button>Update</button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Form;
