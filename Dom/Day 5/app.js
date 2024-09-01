let students = [
  {
    name: "John",
    age: 20,
    dept: "CSE",
    imgurl: "./pic06.jpg",
  },
  {
    name: "Miller",
    age: 21,
    dept: "CSE",
    imgurl: "./pic07.jpg",
  },
  {
    name: "Smith",
    age: 23,
    dept: "ISE",
    imgurl: "./pic08.jpg",
  },
  {
    name: "Kevin",
    age: 22,
    dept: "CSE",
    imgurl: "./pic06.jpg",
  },
];

let table = document.createElement("table");

let thead = document.createElement("thead");
let headtr = document.createElement("tr");
let slth = document.createElement("th");
slth.innerText = "SL NO.";
let nameth = document.createElement("th");
nameth.innerText = "NAME";
let imgth = document.createElement("th");
imgth.innerText = "IMAGE";

headtr.append(slth, nameth, imgth);

let tbody = document.createElement("tbody");

document.body.prepend(table);
table.append(thead);
thead.append(headtr);
table.append(tbody);

students.map(({ name, imgurl }, slno) => {
  let bodytr = document.createElement("tr");
  let sltd = document.createElement("td");
  let nametd = document.createElement("td");
  let imgtd = document.createElement("td");
  let img = document.createElement("img");
  img.src = imgurl;

  sltd.innerText = slno + 1;
  nametd.innerText = name;
  imgtd.append(img);

  bodytr.append(sltd, nametd, imgtd);
  tbody.append(bodytr);
});
