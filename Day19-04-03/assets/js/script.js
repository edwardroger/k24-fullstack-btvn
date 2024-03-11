const render = () => {
  let productsHtml = document.getElementById("products");
  let html = "";
  let totalPrice = 0;

  if (products.length === 0) {
    productsHtml.innerHTML = "Empty";
    return;
  }

  for (const product of products) {
    if (!product.removed) {
      const formattedPrice = formatCurrency(product.price);
      const totalFormattedPrice = formatCurrency(
        product.price * product.quantity
      );
      totalPrice += product.price * product.quantity;

      html += `<li class="row">
                  <div class="col left">
                      <div class="thumbnail">
                          <a href="#">
                              <img src="${product.image}" alt="" />
                          </a>
                      </div>
                      <div class="detail">
                          <div class="name"><a href="#">${product.name}</a></div>
                          <div class="description">${product.description}</div>
                          <div class="price">${formattedPrice}</div>
                          <div class="total-price">${totalFormattedPrice}</div>
                      </div>
                  </div>
                  <div class="col right">
                      <div class="quantity">
                          <input type="number"
                              class="product-quantity"
                              id="product_${product.id}"
                              step="1" value="${product.quantity}" onchange="updateQuantity(${product.id}, this.value)" />
                      </div>
                      <div class="remove">
                          <span class="close" onclick="handleRemoveItem(${product.id})">
                              <i class="fa fa-times" aria-hidden="true"></i>
                          </span>
                      </div>
                  </div>
              </li>`;
    }
  }

  productsHtml.innerHTML = html;

  // Update total price
  document.querySelector(".subtotal .total").textContent =
    formatCurrency(totalPrice);
};

const handleRemoveItem = (id) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex].removed = true;
  }

  render();
};

const updateQuantity = (id, quantity) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex].quantity = parseInt(quantity);
  }

  render();
};

const applyDiscount = () => {
  const discountCode = document.getElementById("promo-code").value;
  let discountAmount = 0;

  // Apply discount logic based on the discount code
  // For demonstration purposes, let's assume a fixed discount of $5 for any code
  if (discountCode === "DISCOUNT5") {
    discountAmount = 5;
  } else if (discountCode === "DISCOUNT10") {
    discountAmount = 10;
  }

  const discountedTotalPrice = getTotalPrice() - discountAmount;
  const formattedDiscountAmount = formatCurrency(discountAmount);
  const formattedDiscountedTotalPrice = formatCurrency(discountedTotalPrice);

  // Update the discount display
  document.querySelector(".discount .discount-amount").textContent =
    formattedDiscountAmount;

  // Update the total price after discount
  document.querySelector(".sub-total .cart-total").textContent =
    formattedDiscountedTotalPrice;
};

const getTotalPrice = () => {
  let totalPrice = 0;
  for (const product of products) {
    if (!product.removed) {
      totalPrice += product.price * product.quantity;
    }
  }
  return totalPrice;
};

const initScreen = () => {
  render();
};

initScreen();
