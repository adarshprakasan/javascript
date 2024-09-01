// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr.filter((ind) => {
//   return ind % 2 !== 0;
// });
// console.log(res);

//&------------------------------------

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

//^=======================================================

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr.reduce((a, b) => {
//   return a + b;
// });
// console.log(res);

//&------------------------------------

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// var res = 0;
// for (let i = 0; i < arr.length; i++) {
//   res += arr[i];
// }
// console.log(res);

//^=======================================================

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr.map((ele) => {
//   return ele + 2;
// });
// console.log(res);
// let res2 = res.filter((ind) => {
//   return ind % 2 === 0;
// });
// console.log(res2);
// let res3 = res2.reduce((a, b) => {
//   return a + b;
// });
// console.log(res3);

//&------------------------------------

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr
//   .map((ele) => ele + 2)
//   .filter((ele) => ele % 2 == 0)
//   .reduce((a, b) => {
//     return a + b;
//   });
// console.log(res);

//&------------------------------------

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = 0;
// for (i = 0; i < arr.length; i++) {
//   arr[i] += 2;
//   if (arr[i] % 2 == 0) {
//     res += arr[i];
//   }
// }
// console.log(res);

//^=======================================================

// let obj = [
//   {
//     name: "xyz",
//     salary: 10,
//   },
//   {
//     name: "abc",
//     salary: 100,
//   },
//   {
//     name: "mno",
//     salary: 1000,
//   },
// ];

// let res = obj.reduce((a, b) => {
//   return a + b.salary;
// }, 0);
// console.log(res);

//^=======================================================

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr.map((ele) => {
//   if (ele % 2 == 0) {
//     x = "even";
//   } else {
//     x = "odd";
//   }
//   return x;
// });
// console.log(res);

// let res = arr.map((ele) => {
//   if (ele % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });
// console.log(res);

//&------------------------------------

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((ele, ind, arr) => {
//   if (ele % 2 == 0) {
//     arr[ind] = "even";
//   } else {
//     arr[ind] = "odd";
//   }
// });

// console.log(arr);

//^=======================================================

// let a = 10;
// let b = 20;
// let c;
// c = b;
// b = a;
// a = c;
// console.log(a, b);

//&------------------------------------

// let a = 10;
// let b = 20;
// let res = [a, b];
// console.log(res.reverse());

// let a = 10;
// let b = 20;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

//^=======================================================

// function palindrome(s) {
//   let rs = Array.from(s.toLowerCase()).reverse().join("");
//   if (s.toLowerCase() === rs) {
//     return "Palindrome";
//   } else {
//     return "Not palindrome";
//   }
// }

// console.log(palindrome("Mom"));

//^=======================================================

// let student = [
//   {
//     name: "Adarsh",
//     dept: { dept1: "CSE", dept2: "ISE" },
//     address: "Banglore",
//     age: 22,
//   },
//   {
//     name: "Om",
//     dept: { dept1: "CSE", dept2: "ISE" },
//     address: "Banglore",
//     age: 22,
//   },
// ];

// student[1].dept.dept1 = "Mech";
// console.log(student);

// let res = JSON.stringify(student);
// console.log(res);
// console.log(typeof res)

//   {
//     name: "OM",
//     age: 22,
//     dept: {
//       dept1: "ISE",
//       dept2: "Mech",
//     },
//   },

// let empl = JSON.parse(JSON.stringify(student));

// student[1].dept.dept1 = "IOT";
// console.log(student);
// console.log(empl);

// let students = {
//   name: "OM",
//   age: 22,
//   dept: {
//     dept1: "ISE",
//     dept2: "Mech",
//   },
// };

// console.log(Object.keys(students));
// console.log(Object.values(students));
// console.log(Object.entries(students));

// console.log("")

// console.log(Object.freeze(student)) // Updation deletion and insertion not possible
// console.log(Object.isFrozen(student))

// console.log("")

// console.log(Object.seal(student)) //updation is possible
// console.log(Object.isSealed(student))

// for (let student of Object.values(students)) {
//   console.log(student);
// }

// let a = {
//     name :"OM",
//     age : 23
// }

// let {age,name,dept} = a;
// console.log(name,age,dept);
