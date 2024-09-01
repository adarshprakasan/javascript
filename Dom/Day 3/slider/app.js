let imageArray = [
  "./intro-1674486308.jpg",
  "./images.jpeg",
  "./l-intro-1664219638.jpg",
  "./PROD_Banner_1663162846668.jpg",
  "./what-is-the-meaning-of-continental-food-1707445151.jpg",
  "./shutterstock_1435374326.0.jpg",
  "./0_jQUSom5SYW4yiDgH.jpg",
];

let img2 = document.getElementById("img2");
let i = 0;

function rightSwap() {
  if (i >= imageArray.length - 1) {
    i = -1;
  }
  i++;
  img2.src = imageArray[i];
  console.log(i);
  console.log(imageArray[i]);
}

function leftSwap() {
  if (i <= 0) {
    i = imageArray.length;
  }
  i--;
  img2.src = imageArray[i];
  console.log(i);
  console.log(imageArray[i]);
}
