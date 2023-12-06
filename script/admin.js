//edit your admin javascript on this file
document.querySelector("#currYear").textContent = new Date().getFullYear()

let table = document.querySelector('table');

function displayProducts(products){
    let items = products.map(function (products, index) {
        console.log(products);
        console.log(index);
        return`
        <tr>
        <td>${products.id}</td>
        <td>${products.name}</td>
        <td>${products.description}</td>
        <td>R${products.price}</td>
        <td><img src ="${products.url}"></td>
        <td><button class='add' value='${index}'>Add to cart</button></td>
        </tr>
        `
    })

    table.innerHTML = items.join('')
}
displayProducts(products)