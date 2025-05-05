// function test(x, y, callBack) {
//   console.log(x + y);
//   console.log("Hello Guys 🥰");
//   callBack();
// }

// function myCall() {
//   console.log("Hello I am a callBack Function 😉");
// }

// test(3, 6, myCall);

function test(x, y, callBack) {
  console.log(x + y);
  console.log("Hello Guys 🥰");
  callBack();
  //   myCall();
  //myCallsecond();
}

function myCall() {
  console.log("Hello I am a callBack Function 😉");
}

function myCallsecond() {
  console.log("Hello I am a second callBack Function 🫤");
}

test(3, 6, myCall);

test(5, 6, myCallsecond);
