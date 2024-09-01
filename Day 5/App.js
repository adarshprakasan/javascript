//^ ==========Scope==========
// var a = 100;
// let b = 200;
// const c = 300;
// {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   var d = 400;
//   let e = 500;
//   const f = 600;
// }
// console.log(d); //& it prints because var is global scope
// console.log(e); //& wont print output because let is block scope
// console.log(f); //& wont print output because const is block scope

//^ ==========Function==========

var a = 100;
let b = 200;
const c = 300;
function demo() {
  console.log(a);
  console.log(b);
  console.log(c);
  var d = 400;
  let e = 500;
  const f = 600;
}
demo();
console.log(d); //& wont print output because it is defined inside a function
console.log(e); //& wont print output because it is defined inside a function
console.log(f); //& wont print output because it is defined inside a function
