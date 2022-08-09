function scramble(str1, str2) {
  if (str1.length >= str2.length) {
    let counter=0;
    let arr1=str1.split("")
    let arr2=str2.split("")
    arr2.map(item =>{
        if (arr1.indexOf(item)!= -1) {
            counter++;
            arr1.splice(arr1.indexOf(item),1)
        }
    })
    if(arr2.length==counter){
        return true
      }
      
  }
  return false
  
}

console.log(scramble("scriptjava", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("salamkhubi", "javascript"));
console.log(scramble("scriptsjava", "javascript"));
