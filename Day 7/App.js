//! Anonymous Function
// function() {
//     console.log("Hi")
// }

//! Named Function
// function x() {
//   console.log("Hello World");
// }
// x();

//! Function with Expression
// let demo = function () {
//   console.log("Hello World");
// };
// demo();

//! Implicit Return
// let demo = function () {
//   console.log("Hello World");
// };
// console.log(demo());

// let demo = function () {
//   console.log("Hello World");
//   return;
// };
// console.log(demo());

//! Explicit Return
// let demo = function () {
//   console.log("Hello World");
//   return "Hi";
// };
// console.log(demo());

//! HOF Function and CallBack Function
// function HOF() {
//   console.log("A");
// }
// HOF(clb()); //& HOF Function

// function clb() {
//   console.log("B");
// } //& Callback Function

//! Arrow Function
// let demo = () => {
//   console.log("Hello");
// };
// demo();

//! IIFE Function
// (function () {
//   console.log("Bye");
// })();

//! Nested Function
// var a = 100;
// let b = 200;
// const c = 300;
// function gp() {
//   console.log("Hi I am grandparent function");
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   var d = 400;
//   let e = 500;
//   const f = 600;
//   function p() {
//     console.log("Hi I am parent function");
//     console.log(d);
//     console.log(e);
//     console.log(f);
//     var g = 700;
//     let h = 800;
//     const i = 900;
//     function c() {
//       console.log("Hi I am child function");
//       console.log(g);
//       console.log(h);
//       console.log(i);
//     }
//     c();
//   }
//   p();
// }
// gp();
