import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const dyanmicValue = useParams();
  const { id } = dyanmicValue;

  const [singleProduct, setSingle] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSingle(data);
      });
  });

  return (
    <div>
      <h1>
        Contact Page {id}
        Title :- {singleProduct.title}
      </h1>
    </div>
  );
};

export default Contact;
