// const product_one = {
//   productName: "Iphone",
//   productPrice: "$56",
//   address: {
//     city: "Jaipur",
//     pincode: 12345,
//   },

//   allDetails: function () {
//     console.log(
//       `ProductName:- ${this.productName} ProductPrice:- ${this.productPrice}`
//     );
//     // console.log(product_one.productName);
//   },
// };

// product_one.allDetails();

//call apply bind

// const product_one = {
//   productName: "Iphone",
//   productPrice: "$56",
//   address: {
//     city: "Jaipur",
//     pincode: 12345,
//   },
//   allDetails: function () {
//     console.log(
//       `Productname :- ${this.productName} Productprice :- ${this.productPrice}`
//     );
//   },
// };

// product_one.allDetails();

// const product_two = {
//   productName: "Samsung",
//   productPrice: "$40",
//   address: {
//     city: "Jaipur",
//     pincode: 12345,
//   },
// };

// product_one.allDetails.call(product_two);

const product_one = {
  productName: "Iphone",
  productPrice: "$56",
};

const product_two = {
  productName: "Samsung",
  productPrice: "$51",
};

const product_three = {
  productName: "Nokia",
  productPrice: "$23",
};

function valueAccess(city, pincode) {
  console.log(
    `Product Name :- ${this.productName} ProductPrice:- ${this.productPrice} City :- ${city} Pincode :- ${pincode}`
  );
}

// valueAccess.call(product_one, "jaipur", 4567);
// valueAccess.call(product_two, "Ajmer", 6789);
// valueAccess.call(product_three, "Delhi", 6789);

// valueAccess.apply(product_one, ["jaipur", 678]);

const objValue = valueAccess.bind(product_one, "jaipur", 6789);
// console.log(objValue);
objValue();
