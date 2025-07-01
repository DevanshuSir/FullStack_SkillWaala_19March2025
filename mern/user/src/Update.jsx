import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [update, setUpdate] = useState(null);

  useEffect(() => {
    fetch(`/api/updatevalue/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setUpdate(result.data.user);
      });
  }, [id]);

  function handleForm(e) {
    e.preventDefault();
    const fromdata = { update };

    fetch(`/api/newupdate/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fromdata),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message === "Successfully Update") {
          navigate("/");
        }
      });
  }

  return (
    <div>
      <h1>Update Value </h1>
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">Update UserName</label>
        <input
          type="text"
          name=""
          id=""
          value={update}
          onChange={(e) => {
            setUpdate(e.target.value);
          }}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
