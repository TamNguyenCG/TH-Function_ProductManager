let product = ['CrossFire', 'ArenaOfValor', 'CallOfDuty', 'DevilMayCry', 'SilkRoad', 'PubgMobile', 'FreeFire']

function showProduct() {
    let count = 0;
    for(let i =0;i<product.length;i++){
        count++
    }
    document.getElementById('numberOfProduct').innerHTML = `Product Name : ${count} products`;
}
showProduct();

function displayProduct() {
    let str = '';
    for (let i = 0; i < product.length; i++) {
        str += "<tr>";
        str += '<td id="' + i + '">' + product[i] + "</td>"
        str += '<td style="text-align: center"><button type="button" onclick="editProduct(' + i + ')">Edit</button></td>'
        str += "<td style='text-align: center'>";
        str += "<button onclick='deleteProduct(" + i + ")'>Delete</button>";
        str += "</td>";
        str += "</tr>";
    }
    document.getElementById('product').innerHTML = str;
}

displayProduct();

function addProduct() {
    let add = document.getElementById('newProduct').value;
    product.push(add);
    displayProduct();
    showProduct();
}

function editProduct(i) {
    product[i] = prompt('');
    displayProduct(i);
}

function deleteProduct(i) {
    let question = confirm('Bạn chắc chắn muốn xóa');
    if (question === true) {
        product.splice(i,1)
        displayProduct(i);
        showProduct();
    }
}
