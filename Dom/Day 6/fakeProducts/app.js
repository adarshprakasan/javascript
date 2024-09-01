async function fakePdts() {
  try {
    let pdts = await fetch("https://fakestoreapi.com/products");
    pdts = await pdts.json();

    console.log(pdts);
    if (pdts) {
      pdts.map(({ image, title, price, rating: { rate, count } }) => {
        let productList = document.getElementById("productList");

        let product = document.createElement("div");
        product.className = "product";
        let imgDiv = document.createElement("div");
        imgDiv.className = "img";
        let productDetails = document.createElement("div");
        productDetails.className = "productDetails";
        let productTitle = document.createElement("div");
        productTitle.className = "productTitle";
        let productSection = document.createElement("div");
        productSection.className = "productSection";
        let productInfo = document.createElement("div");
        productInfo.className = "productInfo";
        let buyProduct = document.createElement("div");
        buyProduct.className = "buyProduct";
        let productRating = document.createElement("div");
        productRating.className = "productRating";
        let productPrice = document.createElement("div");
        productPrice.className = "productPrice";

        let img = document.createElement("img");
        img.src = image;

        if (title.split(" ").length < 8) {
          titleStripped = title.split(" ").slice(0, 8).join(" ");
        } else {
          titleStripped = title.split(" ").slice(0, 8).join(" ") + "...";
        }

        productTitle.innerHTML = `<h3>${titleStripped}</h3>`;
        productRating.innerHTML = `<p>${rate} <i class="fa-solid fa-star"></i> | (${count})</p>`;
        productPrice.innerHTML = `<h4>$${price}</h4>`;

        imgDiv.append(img);
        productInfo.append(productRating, productPrice);
        productSection.append(productInfo, buyProduct);
        productDetails.append(productTitle, productSection);
        product.append(imgDiv, productDetails);

        productList.prepend(product);
      });
    }
  } catch (err) {
    console.log(err.message);
  }
}

fakePdts();
