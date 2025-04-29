//Spread operator - ... - Unpack
//Rest operator - ... - Pack

// clone / copy
// const myArray = [12, 34, 5, 6, 4];

// const newArray = [...myArray];

// console.log(myArray);
// console.log(newArray);

// merge

// const one = [3, 3, 4, 5];
// const two = [3, 45, 89];

// const three = [...one, ...two];

// console.log(three);

// clone / copy

// const myObj = {
//   userName: "Dev",
//   password: "12345",
// };

// myObj.userName = "Aman";
// console.log(myObj);

// const mySecondObj = {
//   ...myObj,
// };

// mySecondObj.userName = "Manny";
// console.log(mySecondObj);

// merge

// const oneObj = {
//   user: "Dev",
// };

// const twoObj = {
//   pass: "1234",
// };

// const threeObj = {
//   ...oneObj,
//   ...twoObj,
// };

// console.log(threeObj);

// const str = "Devanshu";

// const myArray = [...str];

// console.log(myArray);

// const myArray = [45, 78];
// const newArray = myArray;

// myArray[0] = 13;

// console.log(myArray);
// console.log(newArray);

// const myArray = [45, 78];

// const newArray = [...myArray];

// myArray[0] = 56;
// console.log(myArray);
// console.log(newArray);

// rest - ... - pack

function sum(...numbers) {
  console.log(numbers);
  let result = 0;

  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log(sum(2, 2, 2, 2, 3, 2));
