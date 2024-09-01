// let colors = ["red", "green", "blue", "pink", "blue", "orange", "blue"];
// let i = 0,
//   count = 0,
//   count1 = 0;
// for (i = 0; i <= colors.length - 1; i++) {
//   if (colors[i] === "orange") {
//     count++;
//   }
// }
// if (count >= 1) {
//   console.log("Yes Color is available");
// } else {
//   console.log("No, Color is not available");
// }

let colors = ["red", "green", "blue", "pink", "blue", "orange", "blue"];
let i = 0,
  a = 0;
for (i = 0; i <= colors.length - 1; i++) {
  if (colors[i] === "blue") {
    console.log(i);
    a = 1;
  }
}
if (a < 1) {
  colors[colors.length] = "blue";
  console.log(colors);
}
