import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(`/api/updateuserdata/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setUser(result.data[0].UserName);
      });
  }, [id]);

  function handleForm(e) {
    e.preventDefault();
    const formData = { UserName: user };
    fetch(`/api/updateuser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        if (result.message === "Successfully Update") {
          navigate("/");
        }
      });
  }

  return (
    <div>
      <h1>Update User ☺️</h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name=""
          id=""
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;
