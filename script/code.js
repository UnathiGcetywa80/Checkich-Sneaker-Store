let currentDate = new Date().getUTCFullYear();
documwent.querySelector('#currentDate').currentDate;
let recentWrapper = document.querySelector('[data-recent-products')
let products = JSON.parse(localStorage.getItem('products')) 

function searchProducts() {
    let searchInput = document.getElementById("searchInput").value.trim();
    searchProductsByName(searchInput);
  }
  
  // Function to reset and display all products
  function resetProducts() {
    document.getElementById("searchInput").value = "";
    displayProducts(products);
  }
  
  // Function to apply sorting based on selected option
  function sortProducts() {
    let sortSelect = document.getElementById("sortSelect");
    let selectedOption = sortSelect.options[sortSelect.selectedIndex].value;
  
    if (selectedOption === "asc") {
      sortProductsByPrice('asc');
    } else if (selectedOption === "desc") {
      sortProductsByPrice('desc');
    }
  }
  
  // Display initial list of products
  displayProducts(products);
  