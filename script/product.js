document.querySelector("#currYear").textContent = new Date().getFullYear()
// let shoe = document.getElementById("#prod")
let products = JSON.parse(localStorage.getItem('products')) || [
  {
    name: "CH253 CBT Mirror Non Men Sneaker White",
    price: 3000,
    image: "https://i.postimg.cc/rmwnXJJx/0007253-ch253-cbt-mirror-non-erkek-ayakkabi-beyaz.webp"
  },
  {
    name: "CH169 CBT Thorn Men Sneaker White",
    price: 3999,
    image: "https://i.postimg.cc/y8xTvdLY/0005324-chekich-ch169-bt-erkek-ayakkabi-beyaz.webp"
  },
  {
    name: "Sneaker White",
    price: 2599,
    image: "https://i.postimg.cc/9Fnmw8Sg/0004387-chekich-ch033-bt-erkek-ayakkabi-beyaz.webp"
  },
  {
    name: "CH149 CBT Changer Over Men Sneaker Tan",
    price: 2999,
    image: "https://i.postimg.cc/W3QFg4xf/sneaker-1.webp"
  },
  {
    name: "Chekich All White Honcho",
    price: 1999,
    image: "https://i.postimg.cc/L8HvZptK/edf35b-efb17f86696d4430932d0d619fed26d6-mv2.webp"
  },
  {
    name: "CH253 Black S.T Men's Shoes",
    price: 2350,
    image: "https://i.postimg.cc/rFJnFmB2/0004027-chekich-ch253-bt-erkek-ayakkabi-siyah-1200x1800-1200x1800.jpg"
  },
];
localStorage.setItem("products", JSON.stringify(products));
let cardContainer = document.querySelector("#prod")
let cart = JSON.parse(localStorage.getItem('cart')) || []
function displayProducts(products) {
  cardContainer.innerHTML = "";
  if (products) {
    products.forEach((product, index) => {
      cardContainer.innerHTML += `
          <div class="card">
            <div class="card-body">
              <img src="${product.image}"class="card-img-top" alt="...">
                <h5 class="card-title">"${product.name}"</h5>
                <p>R${product.price}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
            </div>
          </div>
        `;
    });
  }
}
displayProducts(products);



// function displayProducts(productList) {
//   console.log("Products:");
//   console.table(productList);
// }
function addToCart(item) {
  if(item) {
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}
