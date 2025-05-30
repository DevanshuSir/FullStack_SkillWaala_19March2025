import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState("");

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data.products);
      });
  }, [show]);

  return (
    <div>
      <h1>About Page {num}</h1>
      <h1>{show}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          setShow("Data");
        }}
      >
        Show Data
      </button>

      {product.map((value, index) => (
        <div key={index}>
          <Link to={`/contact/${value.id}`}>
            <img src={value.images[0]} alt="" width={"200px"} />
          </Link>
          <h1>Title :- {value.title}</h1>
          <h2>Price :- {value.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default About;
