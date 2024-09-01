// let res = document.getElementById("themeButton");

// function theme() {
//   if (res.innerText === "Dark") {
//     res.innerText = "Light";
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     res.innerText = "Dark";
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

//^============================================================

// let res = document.getElementById("button");
// let but = document.getElementById("lb");

// function themeChange() {
//   if (res.className === "buttonLight") {
//     res.className = "buttonDark";
//     but.className = "togglerDark";
//     document.body.style.backgroundColor = "black";
//   } else {
//     res.className = "buttonLight";
//     but.className = "togglerLight";
//     document.body.style.backgroundColor = "White";
//   }
// }

//&============================================================

function lightAndDark() {
  let toggle = document.getElementById("toggle");
  let btn = document.getElementById("btn");

  toggle.classList.toggle("dark");
  document.body.classList.toggle("bg-dark");
  btn.classList.toggle("btn-dark");
}
