// ======================== Product Management ========================
let products = JSON.parse(localStorage.getItem("FoodMenu")) || [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 250,
    size: "Medium",
    ingredients: ["Cheese", "Tomato", "Basil"],
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    category: "Pizza",
    stock: 10
  },
  {
    id: 2,
    name: "Veg Burger",
    price: 150,
    size: "Regular",
    ingredients: ["Bun", "Patty", "Lettuce", "Cheese"],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    category: "Burger",
    stock: 15
  }
];

// Save Products
function saveProducts() {
  localStorage.setItem("FoodMenu", JSON.stringify(products));
}

// Display Products (for manage menu page)
function viewProducts() {
  const productTable = document.getElementById("productTable");
  if (!productTable) return;

  productTable.innerHTML = "";
  products.forEach((item, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>₹${item.price}</td>
      <td>${item.size}</td>
      <td>${item.ingredients.join(", ")}</td>
      <td>${item.stock}</td>
      <td><img src="${item.image}" width="60"></td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editProduct(${item.id})">✏ Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${item.id})">🗑 Delete</button>
      </td>`;
    productTable.appendChild(row);
  });
}

// Add Product (from addProducts.html form) - manual ID version
function addProduct(e) {
  e.preventDefault();

  let id = parseInt(document.getElementById("productId").value); // take ID from form
  let name = document.getElementById("productName").value.trim();
  let price = parseInt(document.getElementById("price").value);
  let size = document.getElementById("size").value.trim();
  let category = document.getElementById("category").value;
  let ingredients = document.getElementById("ingredients").value.split(",").map(i => i.trim());
  let stock = parseInt(document.getElementById("stock").value);
  let image = document.getElementById("image").value.trim();

  // Check if all fields are filled
  if (isNaN(id) || !name || isNaN(price) || !size || !category || !ingredients.length || isNaN(stock) || !image) {
    alert("⚠️ Please fill all fields correctly!");
    return;
  }

  // Check if ID already exists
  if (products.some(p => p.id === id)) {
    alert("⚠️ This ID already exists! Please enter a unique ID.");
    return;
  }

  let product = { id, name, price, size, category, ingredients, stock, image };
  products.push(product);
  saveProducts();

  alert("✅ Product added successfully!");
  e.target.reset();

  // refresh product table and cards if available
  if (typeof viewProducts === "function") viewProducts();
  if (typeof displayCard === "function") displayCard();
}


// Delete Product
function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveProducts();
  viewProducts();
}

// Edit Product (basic prompt version)
function editProduct(id) {
  let product = products.find(p => p.id === id);
  if (!product) return;

  let newName = prompt("Enter new name:", product.name);
  if (newName) product.name = newName;

  let newPrice = prompt("Enter new price:", product.price);
  if (newPrice) product.price = parseInt(newPrice);

  saveProducts();
  viewProducts();
}

// ======================== Cart Management ========================
let cart = JSON.parse(localStorage.getItem("FoodCart")) || [];

// Save Cart
function saveCart() {
  localStorage.setItem("FoodCart", JSON.stringify(cart));
}

// Add to Cart
function addToCart(id) {
  let product = products.find(p => p.id === id);
  if (!product) return;

  let item = cart.find(c => c.id === id);
  if (item) {
    if (item.quantity < product.stock) {
      item.quantity++;
    } else {
      alert("⚠ Stock limit reached!");
    }
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  alert(`${product.name} added to cart 🛒`);
}

// View Cart
function viewCart() {
  const cartTable = document.getElementById("cartTable");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartTable) return;

  if (cart.length === 0) {
    cartTable.innerHTML = `<tr><td colspan="12">Cart is empty</td></tr>`;
    cartTotal.textContent = "0";
    return;
  }

  let total = 0;
  cartTable.innerHTML = "";

  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>₹${item.price}</td>
      <td>${item.size}</td>
      <td>
        <button class="btn btn-sm btn-dark" onclick="subtract(${item.id})">-</button>
        <span class="mx-2">${item.quantity}</span>
        <button class="btn btn-sm btn-primary" onclick="add(${item.id})">+</button>
      </td>
      <td>${item.ingredients.join(", ")}</td>
      <td>${item.stock}</td>
      <td><img src="${item.image}" width="60"></td>
      <td>₹${subtotal}</td>
      <td><button class="btn btn-danger btn-sm" onclick="removeCart(${item.id})">🗑</button></td>`;
    cartTable.appendChild(row);
  });

  cartTotal.textContent = total;
}

// Increase Quantity
function add(id) {
  let item = cart.find(c => c.id === id);
  if (item && item.quantity < item.stock) {
    item.quantity++;
    saveCart();
    viewCart();
  }
}

// Decrease Quantity
function subtract(id) {
  let item = cart.find(c => c.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
    saveCart();
    viewCart();
  }
}

// Remove Item
function removeCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  viewCart();
}

// Clear Cart
function clearCart() {
  if (cart.length === 0) {
    alert("🛒 The cart is already empty!");
    return;
  }

  if (!confirm("Are you sure you want to clear the cart?")) {
    return;
  }

  cart = [];
  saveCart();
  viewCart();
  alert("✅ Cart cleared successfully!");
}
