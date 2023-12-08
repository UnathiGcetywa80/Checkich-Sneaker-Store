let checkout = JSON.parse(localStorage.getItem("cart")) ;
let checkoutContainer = document.getElementById("checkoutTableBody");
function displayCheckoutItems() {
    checkoutContainer.innerHTML = "";
    let data = Object.groupBy(checkout, item => item.name)
    for(let key in data) {
        checkoutContainer.innerHTML +=`
        <tr>
        <td>${data[key][0].name}</td>
        <td>R${data[key][0].price}</td>
        <td>${data[key].length}</td>
        <td>R${eval(`${data[key][0].price} * ${data[key].length}`)}</td>
        </tr>`
    }
}
displayCheckoutItems()
let clearButton = document.getElementById('clearButton');
let buyNowButton = document.getElementById('buyNowButton');
let notificationBanner = document.getElementById('notificationBanner');
let notificationMessage = document.getElementById('notificationMessage');

function displayNotification(message) {
    notificationMessage.textContent = message;
    notificationBanner.style.display = 'block';
    setTimeout(function() {
        notificationBanner.style.display = 'none';
    }, 3000); 
}

clearButton.addEventListener('click', function() {
    displayCheckoutItems();
    displayNotification('checkout items cleared.')
});

buyNowButton.addEventListener('click', function() {
    displayNotification('Thank you for shopping with us!');
});
