//edit your admin javascript on this file
document.querySelector("#currYear").textContent = new Date().getFullYear()

function adminContent() {
let products = JSON.parse(localStorage.getItem('products'));
let tableContent = document.querySelector('#admin');
tableContent.innerHTML = "";
products.forEach((product, i) => {
    tableContent.innerHTML = 
        `
        <td>
        <td>${product.name}</td>
        <td>${product.amount}</td>
        <td>${product.image}</td>
        <td>${product.action}</td>
        <td><img src="${product.image} style= width=300px height=300px"</td>
        <td>
        </td>
        `;
        
        // button onclick="editProducts(${index})">Edit</button>
        // <button onclick="deleteProducts(${JSON.stringify(index)})">Delete</button>
        // <button onclick="updateproducts"(${index})">Update</button>
        // <div class="modal-body">form</div>
        table-product.appendChild();
    });
}
adminContent();










        
        
