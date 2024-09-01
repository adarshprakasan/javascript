console.log("DOM DAY 1");

// let dh = document.head;
// console.log(dh);
// let db = document.body;
// console.log(db);
// let dt = document.title;
// console.log(dt); //! DOM
// let ds = document.scripts;
// console.log(ds); //! HTMLCollection [script]
// document.title = "Javascript"; //! Changes document title

//^======================== Elements ========================

// let res = document.getElementById("id");
// console.log(res);
//! <h1 id="id">id Hello</h1>

// let res2 = document.getElementsByClassName("className");
// console.log(res2);
//! HTMLCollection [h1.className]

// let res3 = document.getElementsByTagName("h1");
// console.log(res3);
//! HTMLCollection(3) [h1, h1#id, h1.className, id: h1#id]

// let res4 = document.querySelector("#id");
// console.log(res4);
//! h1#id

// let res5 = document.querySelector(".className");
// console.log(res5);
//! h1.className

// let res6 = document.querySelectorAll("h1");
// console.log(res6);
//! NodeList(3) [h1, h1#id, h1.className]

//^======================== Image ========================

// let img = document.getElementById("myImage");
// console.log(myImage); //! <img src="./IMG_4760.PNG" id="myImage" class="dummy" alt="no Image">
// console.log(myImage.src); //! http://127.0.0.1:5501/Dom/Day%201/IMG_4760.PNG
// console.log(myImage.height); //! 1152
// console.log(myImage.width); //! 1152
// img.title = "My Image";
// img.width = 200;

//^======================== CSS ========================
//?----------- 1st way of adding css -----------

// let img = document.getElementById("myImage");

// img.style.width = "200px";
// img.style.height = "200px";
// img.style.border = "5px solid black";
// img.style.borderRadius = "100%";

//&----------------------

// myImage.style.cssText =
//   "border : 5px solid black; height : 100px; width : 100px; border-radius : 100%";

//?----------- 1st way of adding class-----------

// let img = document.getElementById("myImage");

// img.className = "all";

//*------Another Way------
// myImage.className = "all";

//&----------------------

// let img = document.getElementById("myImage");

// img.className = "demo ";
// img.className += "test";

//*------Another Way------
// myImage.className = "demo ";
// myImage.className += "test";

//&----------------------

// let img = document.getElementById("myImage");

// img.classList.add("demo");
// img.classList.add("test");

//*------Another Way------
// myImage.classList.add("demo");
// myImage.classList.add("test");

// myImage.classList.remove("dummy");

// myImage.classList.toggle("test");
