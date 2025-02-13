let cart = [];

function addToCart(choice, isSecret = false) {
    if (!cart.includes(choice)) {
        cart.push(choice);
        updateCartDisplay();
        if (isSecret) {
            document.getElementById("secretMessage").style.display = "block";
        }
    }
}

function updateCartDisplay() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    cart.forEach(item => {
        let newItem = document.createElement("p");
        newItem.className = "cart-item";
        newItem.textContent = item;
        cartDiv.appendChild(newItem);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Please select at least one date option.");
        return;
    }

    let specialRequest = document.getElementById("specialRequest").value;
    let receiptContent = "Your Valentine's Date Plan:\n";
    cart.forEach(item => {
        receiptContent += `- ${item}\n`;
    });
    if (specialRequest) {
        receiptContent += `\nSpecial Request: ${specialRequest}`;
    }

    let blob = new Blob([receiptContent], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Receipt.txt";
    link.click();
}
