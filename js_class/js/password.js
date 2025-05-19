function password(length) {
  const str =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$&";

  let randomId = "";

  for (let i = 1; i <= length; i++) {
    const randomNum = Math.floor(Math.random() * str.length);
    randomId += str.charAt(randomNum);
  }

  return randomId;
}

console.log(password(12));
