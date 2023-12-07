//edit your admin javascript on this file
document.querySelector("#currYear").textContent = new Date().getFullYear()
let tableContent = doc.querySelector('[table-product]')
function adminContent() {
    try{
        let products = JSON.parse(localStorage.getItem('products')
        )productsforEach((product, i) =>{
            tableContent.innerHTML += `
            <tr>
            <td>${product.make}</td>
            <td>${product.amount}</td>
            <div></div>
            <button class=btn btn-success>Edit</button>
            <button class=btn btn-success>Delete</button>
            <button class = btn btn-success data-bs-toggler = "modal" data-bs-target = "#updateProduct"></button>
            <div class = "modal-body">form</div>
            </tr>`
        })
    }
}
function deleteProduct(item){
    try{
        let index = products.findIndex(a => {
        });
        products.splice(index.i)
        localStorage.setItem('products')
    }
}
deleteProduct(item)
