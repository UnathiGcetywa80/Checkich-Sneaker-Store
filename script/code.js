let currentDate = new Date().getUTCFullYear();
document.querySelector('#currYear').textContent = currentDate;
let recentWrapper = document.querySelector('[data-recent-products')
let products = JSON.parse(localStorage.getItem('products')) 

