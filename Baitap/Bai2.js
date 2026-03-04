
const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = productNameInput.value.trim();
    const price = productPriceInput.value.trim();
    if (name === "" || price === "" || Number(price) <= 0) {
        alert("Vui lòng nhập đầy đủ và hợp lệ!");
        return;
    }
    const newProduct = {
        name: name,
        price: Number(price)
    };
    const li = document.createElement("li");
    li.classList.add("product-item");

    li.innerHTML = `
        <strong>${newProduct.name}</strong> - 
        ${newProduct.price.toLocaleString()} VND
    `;
    productList.appendChild(li);
    productNameInput.value = "";
    productPriceInput.value = "";
});