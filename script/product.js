document.querySelector("#currYear").textContent = new Date().getFullYear()
let products = [
    {name: "CH253 CBT Mirror Non Men Sneaker White", price: 3000, image:"https://i.postimg.cc/rmwnXJJx/0007253-ch253-cbt-mirror-non-erkek-ayakkabi-beyaz.webp" },
    {name: "CH169 CBT Thorn Men Sneaker White", price: 3999, image:"https://i.postimg.cc/y8xTvdLY/0005324-chekich-ch169-bt-erkek-ayakkabi-beyaz.webp" },
    {name: "Sneaker White", price: 2599, image:"https://i.postimg.cc/9Fnmw8Sg/0004387-chekich-ch033-bt-erkek-ayakkabi-beyaz.webp" },
    {name: "CH169 CBT Thorn Men Sneaker White", price: 3999 , image:"https://i.postimg.cc/y8xTvdLY/0005324-chekich-ch169-bt-erkek-ayakkabi-beyaz.webp" },
];
localStorage.setItem("products",JSON.stringify(products));
function displayProducts(productsArray) {
    let cardContainer = document.querySelector(".row-cols-1")
    cardContainer.innerHTML = "";

    productsArray.forEach((product, index) => {
        console.log(product)
        let card = document.createElement("div");
        card.classList.add("col")
        card.innerHTML = `
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="${product image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">"${product name}"</h5>
              <p>${product price}</p>
              <button onclick="">Add to cart</button>
            </div>
          </div>
        </div>
        `

    })
}
