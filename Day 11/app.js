//! Array Methods

// let colors = ["red", "green", "blue", "pink", "blue", "orange", "blue"];
// console.log(colors);

//^ push()
// let newLength = colors.push("purple", "black");
// console.log(newLength); //& 9
// console.log(colors); //& ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'blue', 'purple', 'black']

//^ unshift()
// let newLength = colors.unshift("purple", "black");
// console.log(newLength); //& 9
// console.log(colors); //& ['purple', 'black', 'red', 'green', 'blue', 'pink', 'blue', 'orange', 'blue']

//^ pop()
// let newColors = colors.pop();
// console.log(newColors); //& blue
// console.log(colors); //& ['red', 'green', 'blue', 'pink', 'blue', 'orange']

//^ shift()
// let newColors = colors.shift();
// console.log(newColors); //& red
// console.log(colors); //& ['green', 'blue', 'pink', 'blue', 'orange' , 'blue']

//^ splice()
// colors.splice(2, 2, "car", "bus", "truck");
// console.log(colors); //& ['red', 'green', 'car', 'bus', 'truck', 'blue', 'orange', 'blue']
// colors.splice(2, 0, "car", "bus", "truck");
// console.log(colors); //& ['red', 'green', 'car', 'bus', 'truck', 'car', 'bus', 'truck', 'blue', 'orange', 'blue']
// colors.splice(2, "car", "bus", "truck");
// console.log(colors); //& ['red', 'green', 'bus', 'truck', 'car', 'bus', 'truck', 'car', 'bus', 'truck', 'blue', 'orange', 'blue']
// colors.splice("car", "bus", "truck");
// console.log(colors); //& ['truck', 'red', 'green', 'bus', 'truck', 'car', 'bus', 'truck', 'car', 'bus', 'truck', 'blue', 'orange', 'blue']

//^ slice()
// console.log(colors.slice(2, 5)); //& ['blue', 'pink', 'blue']
// console.log(colors.slice(2)) //& ['blue', 'pink', 'blue', 'orange', 'blue']
// console.log(colors.slice(7)); //& []

//^ includes()
// console.log(colors.includes("pink")); //& true
// console.log(colors.includes("car")); //& false

//^ indexOf()
// console.log(colors.indexOf("pink")); //& 3
// console.log(colors.indexOf("car")) //& -1

//^ lastIndexOf()
// console.log(colors.lastIndexOf("orange")); //& 5
// console.log(colors.lastIndexOf("car")) //& -1

//^ at()
// console.log(colors.at(4)); //& blue
// console.log(colors.at(7)); //& undefined

//^ concat()
// console.log(colors.concat(["yellow", "purple"])); //& ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'blue', 'yellow', 'purple']
// console.log(colors.concat(0)); //& ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'blue', 0]

//^ reverse()
// console.log(colors.reverse()); //& ['blue', 'orange', 'blue', 'pink', 'blue', 'green', 'red']

//^ join()
// console.log(colors.join()); //& red,green,blue,pink,blue,orange,blue
// console.log(colors.join("")) //& redgreenbluepinkblueorangeblue
// console.log(colors.join("-")) //& red-green-blue-pink-blue-orange-blue

//^ fill()
// console.log(colors.fill("orange")) //& ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange']
// console.log(colors.fill("orange", 4)); //&  ['red', 'green', 'blue', 'pink', 'orange', 'orange', 'orange']
// console.log(colors.fill("orange", 2,5)); //& ['red', 'green', 'orange', 'orange', 'orange', 'orange', 'blue']

//! Higher Order Methods

// let numbers = [3, 6, 1, 7, 4, 19, 2, 9];
// console.log(numbers);

//^ forEach()
// let res = numbers.forEach((ele, ind, arr) => {
//   //   console.log(ele, ind, arr);
//   newNumbers.push(ele + 3);
//   return "Hello";
// });
// console.log(newNumbers);
// console.log(res);

//^ map()
// let res = numbers.map((ele) => {
//   return ele + 3; //& [6, 9, 4, 10, 7, 22, 5, 12]
//   //   ele + 3; //& [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
//   // return ele > 4; //& [false, true, false, true, false, true, false, true]
// });
// console.log(res);

//^ filter()
// let res = numbers.filter((ele) => {
//   return ele > 4; //& [6, 7, 19, 9]
//   //   return 2 + undefined; //& []
//   //   return 2; //& [3, 6, 1, 7, 4, 19, 2, 9]
//   //   ele > 4; //& []
// });
// console.log(res);

//^ find()
// let res = numbers.find((ele) => {
//     return ele > 4; //& 6
//     // return ele > 24; //& undefined
// });
// console.log(res);

//^ findIndex()
// let res = numbers.findIndex((ele) => {
//     return ele > 4; //& 1
// //   return ele > 24; //& -1
// });
// console.log(res);

//^ some()
// let res = numbers.some((ele) => {
//     return ele > 4; //& true
// //   return ele > 20; //& false
// });
// console.log(res);

///^ every()
// let res = numbers.every((ele) => {
//   return ele > 0; //& true
//   //   return ele > 4; //& false
// });
// console.log(res);

//^ sort()
// let res = numbers.sort((a, b) => {
//   return a - b; //& [1, 2, 3, 4, 6, 7, 9, 19]
//   //   return b - a; //& [19, 9, 7, 6, 4, 3, 2, 1]
// });
// console.log(res);

//^ reduce()
// let res = numbers.reduce((a, b, c) => {
//   return a + b; //& 51
// });
// console.log(res);

// let res = numbers.reduce((a, b, c) => {
//   return a + b; //& 56
// }, 5);
// console.log(res);

//^ reduceRight()
// let res = numbers.reduceRight((a, b, c) => {
//   return a - b; //& -33
// });
// console.log(res);

// let res = numbers.reduceRight((a, b, c) => {
//   return a - b; //& -56
// }, -5);
// console.log(res);

//! Array Object Methods

// let s = "Javascript";
// console.log(s);

//^ Array.isArray
// console.log(Array.isArray(numbers)) //& true
// console.log(Array.isArray(s)); //& false

//^ Array.from()
// s = Array.from(s);
// console.log(s); //& ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

//!--------------------------------------------------------------------------

// let numbers = [3, 6, 1, 7, 4, 19, 2, 9];
// let numbers = [];

// let res = numbers.filter((ele) => {
//   return ele < 6; //& 6
//   // return ele > 24; //& undefined
// });
// console.log(res);

let numbers = [3, 6, 1, 7, 4, 19, 2, 9];
a = 0;
for (let i in numbers) {
  if (number[i] > 6) {
    return true;
    break;
  } else {
    a = 1;
  }
}
if (a === 1) {
  return false;
}
