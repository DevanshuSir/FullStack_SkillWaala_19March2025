// function test() {
//   let x = "Devanshu";
//   function displayValue() {
//     console.log(x);
//   }
//   displayValue();
// }

// test();

// lexical scop

// function init() {
//   let text = "Hello class";

//   function display() {
//     console.log(text);
//   }

//   display();
// }

// init();

// Closures
// function outer() {
//   let text = "Kal ho na ho";
//   function inner() {
//     console.log(text);
//   }
//   return inner;
// }

// let innerValue = outer();
// innerValue();

function counter() {
  let counts = 0;

  function inner() {
    counts++;
    console.log(counts);
  }

  return inner;
}

const increment = counter();
increment(); // 1
increment(); //2 
increment();
increment();

const obj = { name: "devanshu" };
const obj2 = obj;
