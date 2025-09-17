function repeatStringNumTimes(str, num) {
let result = "";
for (let counter = 0; counter < num; counter++) {
  result += str;
} 
return result
}

console.log(repeatStringNumTimes("abc", 4))
