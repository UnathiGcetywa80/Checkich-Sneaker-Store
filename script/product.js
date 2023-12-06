document.querySelector("#currYear").textContent = new Date().getFullYear()
let products = [
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
function displayProducts(productsArray) {
    let cardContainer = document.querySelector(".row-cols-1")
    cardContainer.innerHTML = "";

    productsArray.forEach((product, index) => {
        console.log(product)
        let card = document.createElement("div");
        card.classList.add("col")
        card.innerHTML = `
          <div class="card w-50">
          <div class="card-body">
            <img src="${product.image}"class="card-img-top" alt="...">
               <h5 class="card-title">"${product.name}"</h5>
               <p>${product.price}</p>
            </div>
          </div>
        `;
        cardContainer.appendChild(card);
    });
}
displayProducts(products);

const addBtn = document.getElementById('addProducts');
  const sortBtn = document.getElementById('sortProducts');
  const inputField = document.querySelector('input[data-search="products"]');
  function addProduct() {
    const product = inputField.value;
    console.log('Product added:', product);
    inputField.value = '';
  }
  function sortProducts() {
    console.log('Sorting products...');
  }
  addBtn.addEventListener('click', addProduct);
  sortBtn.addEventListener('click', sortProducts);