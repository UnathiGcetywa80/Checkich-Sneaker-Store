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