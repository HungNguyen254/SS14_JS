li.innerHTML = `
    <span class="product-info">
        <strong>${name}</strong> - 
        <span class="price">${Number(price).toLocaleString()} VND</span>
    </span>
    <div>
        <button class="edit-price-btn">Sửa giá</button>
        <button class="delete-btn">Xóa</button>
    </div>
`;
productList.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-price-btn")) {

        const li = event.target.closest("li");
        const priceElement = li.querySelector(".price");

        const newPrice = prompt("Nhập giá mới (VND):");

        if (newPrice !== null && !isNaN(newPrice) && Number(newPrice) > 0) {
            priceElement.textContent =
                Number(newPrice).toLocaleString() + " VND";
        } else if (newPrice !== null) {
            alert("Giá không hợp lệ!");
        }
    }
});