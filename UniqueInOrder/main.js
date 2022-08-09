const UniqueInOrder = (text) => {
  let arr = Array.isArray(text) ? text : text.split("");
  let unique = arr.filter((letter, i) => {
    return arr[i] != arr[i + 1];
  });

  return unique;
};
console.log(UniqueInOrder("ABBCcADD"));
console.log(UniqueInOrder([1, 2, 2, 3, 3, 3]));
