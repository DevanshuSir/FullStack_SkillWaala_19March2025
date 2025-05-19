//sets - unique value store

const unqiueValue = new Set(["a", "b", "b", "id", "id"]);

unqiueValue.add("Devanshu");

unqiueValue.delete("a");
unqiueValue.delete("b");

let hasValue = unqiueValue.has("a");

console.log(hasValue);
console.log(unqiueValue.size);
console.log(unqiueValue);

// new Date().getMonth(); // 4
