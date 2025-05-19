// Promise // fetch

// 3 stage =
// pending
// fullfill
// reject

// fetch("http://jsondata").then().catch()

//  promise

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Compeletd ✔️");
//     reject();
//   }, 2000);
// });

// myPromise.then((res) => {
//   console.log("Then block work");
// });

// myPromise.catch((error) => {
//   console.log("Catch block work");
// });

// block then - resolve - response
// block catch - reject - error

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Compeletd ✔️");

//     let task = false;

//     if (task) {
//       resolve({ UserName: "Devanshu", Password: "12345" });
//     } else {
//       reject({ Error: "Internal server Error" });
//     }
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fatchKey = fetch("http://example.json");
// console.log(fatchKey);

// fetch("https://dummyjson.com/products/", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "Hello",
//   }),
// }) // data get
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// json - javascript object notation

// const obj = {
//   "name": "Devanshu",
//   "age": 45,
// };

// fetch("https://dummyjson.com/products");

async function data() {}

console.log(data());
