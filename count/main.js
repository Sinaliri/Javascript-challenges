const count = (string) => {
  const result = {};
  const strarr=string.split("")
  strarr.map(item =>{
    result[item] = (result[item] || 0) + 1;

  })
  return result;
};
console.log(count("aba"));
console.log(count("javascript"));
