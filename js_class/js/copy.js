//Shallow copy and deep copy

// const myObj = {
//   ProductName: "I-Phone",
//   ProductPrice: "$56",
// };

// // const mySecondObj = { ...myObj }; // shallow copy

// const mySecondObj = Object.assign({}, myObj); // shallow copy

// mySecondObj.ProductName = "Samsung";

// console.log(myObj);

// console.log(mySecondObj);

// Deep copy

const myObj = {
  ProductName: "I-Phone",
  ProductPrice: "$56",
  Address: {
    City: "Jaipur",
    PinCode: 6789,
  },
};

// console.log(JSON.stringify(myObj));

const mySecondObj = JSON.parse(JSON.stringify(myObj)); // Deep copy

mySecondObj.Address.City = "Ajmer";

console.log(myObj);
console.log(mySecondObj);

// const mySecondObj = { ...myObj };

// mySecondObj.ProductName = "Samsung";
// mySecondObj.Address.City = "Ajmer";

// console.log(myObj);
// console.log(mySecondObj);
