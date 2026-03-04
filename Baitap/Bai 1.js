
const products = [
{ id: 1, name: "Bánh Chưng", price: 150000 },
{ id: 2, name: "Giò Lụa", price: 180000 },
{ id: 3, name: "Cành Đào", price: 500000 },
{ id: 4, name: "Mứt Tết", price: 120000 },
{ id: 5, name: "Bao Lì Xì", price: 25000 },
{ id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="product">
                <strong>${product.name}</strong> - 
                ${product.price.toLocaleString()} VND
            </div>
        `;

        productList.appendChild(li);
    });
}
productForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);
    if (name === "" || price <= 0) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return;
    }
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);

    renderProducts();

    productForm.reset();
});
renderProducts();