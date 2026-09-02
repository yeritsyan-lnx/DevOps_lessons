const productsContainer = document.getElementById("products");

async function loadProducts() {
    try {
        const response = await fetch("/api/products");

        const products = await response.json();

        productsContainer.innerHTML = "";

        products.forEach(product => {
            const div = document.createElement("div");

            div.className = "product";

            div.innerHTML = `
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <button onclick="buyProduct('${product.name}')">
                    Buy
                </button>
            `;

            productsContainer.appendChild(div);
        });

    } catch (error) {
        productsContainer.innerHTML = "Failed to load products";
        console.error(error);
    }
}

function buyProduct(name) {
    alert(`You selected: ${name}`);
}

loadProducts();