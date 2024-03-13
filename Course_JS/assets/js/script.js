// const render = () => {
//   let productsHtml = document.getElementById("products");
//   let html = "";
//   if (products.length === 0) {
//     productsHtml.innerHTML = "Empty";

//     return;
//   }
//   for (const key in products) {
//     html += `<li class="row">
//                       <div class="col left">
//                           <div class="thumbnail">
//                               <a href="#">
//                                   <img src="${products[key].image}" alt="" />
//                               </a>
//                           </div>
//                           <div class="detail">
//                               <div class="name"><a href="#">${
//                                 products[key].name
//                               }</a></div>
//                               <div class="description">
//                                   ${products[key].description}
//                               </div>
//                               <div class="price">Price</div>
//                               <div class="total-price" id="price_">
//                                   ${formatCurrency(products[key].price)}
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col right">
//                           <div class="quantity">
//                               <input type="number"
//                                   class="product-quantity"
//                                   id="product_"
//                                   step="1" value="1" />
//                           </div>
//                           <div class="remove">
//                               <span class="close" onclick="handleRemoveItem(${
//                                 products[key].id
//                               })">
//                                   <i class="fa fa-times" aria-hidden="true"></i>
//                               </span>
//                           </div>
//                       </div>
//                   </li>
//                   `;
//   }
//   productsHtml.innerHTML = html;
// };

// const handleRemoveItem = (id) => {
//   //Cách 1: Dùng filter để lọc ra các sản phẩm ko trùng id
//   // products = products.filter(item => item.id !== id);

//   //Cách 2: Dùng vòng lặp for và splice để loại bỏ phần tử khỏi mảng products
//   for (const key in products) {
//     if (products[key].id === id) {
//       products.splice(key, 1);
//       break;
//     }
//   }

//   //Cách 3: Dùng find để tìm ra phần tử products. Và dùng splice để xoá
//   // let product = products.find(item => item.id === id);
//   // products.splice(product, 1)

//   render();
// };

// // const initScreen = () => {
// //   render();
// // };

// // initScreen();

// // =======

// const handleQuantityChange = () => {
//   let productQuantities = document.querySelectorAll(".product-quantity");
//   let subtotal = 0;

//   productQuantities.forEach((input, index) => {
//     let quantity = parseInt(input.value);
//     let price = products[index].price;
//     subtotal += quantity * price;
//   });

//   // Tính VAT
//   let vat = subtotal * 0.1; // Giả sử VAT là 10% của subtotal

//   // Tính tổng cộng
//   let total = subtotal + vat;

//   // Hiển thị các giá trị lên giao diện
//   document.querySelector(".subtotal .total").textContent =
//     formatCurrency(subtotal);
//   document.querySelector(".vat span").textContent = formatCurrency(vat);
//   document.querySelector(".cart-total").textContent = formatCurrency(total);
// };

// const initScreen = () => {
//   render();

//   // Thêm sự kiện onchange cho tất cả các ô input
//   document.querySelectorAll(".product-quantity").forEach((input) => {
//     input.addEventListener("change", handleQuantityChange);
//   });
// };

// initScreen();
const render = () => {
  let productsHtml = document.getElementById("products");
  let html = "";
  if (products.length === 0) {
    productsHtml.innerHTML = "Empty";
    return;
  }
  for (const key in products) {
    html += `<li class="row">
                      <div class="col left">
                          <div class="thumbnail">
                              <a href="#">
                                  <img src="${products[key].image}" alt="" />
                              </a>
                          </div>
                          <div class="detail">
                              <div class="name"><a href="#">${
                                products[key].name
                              }</a></div>
                              <div class="description">
                                  ${products[key].description}
                              </div>
                              <div class="price">Price: ${formatCurrency(
                                products[key].price
                              )}</div>
                              <div class="quantity">
                                  <button class="minus-btn" type="button" onclick="decreaseQuantity(${
                                    products[key].id
                                  })">-</button>
                                  <input type="number" class="product-quantity" id="product_${
                                    products[key].id
                                  }" step="1" value="1" />
                                  <button class="plus-btn" type="button" onclick="increaseQuantity(${
                                    products[key].id
                                  })">+</button>
                              </div>
                          </div>
                      </div>
                      <div class="col right">
                          <div class="remove">
                              <span class="close" onclick="handleRemoveItem(${
                                products[key].id
                              })">
                                  <i class="fa fa-times" aria-hidden="true"></i>
                              </span>
                          </div>
                      </div>
                  </li>
                  `;
  }
  productsHtml.innerHTML = html;
};
const handleRemoveItem = (id) => {
  for (const key in products) {
    if (products[key].id === id) {
      products.splice(key, 1);
      break;
    }
  }
  render();
};


const increaseQuantity = (id) => {
  let inputElement = document.getElementById(`product_${id}`);
  let currentValue = parseInt(inputElement.value);
  inputElement.value = currentValue + 1;
  calculateProductPrice(id);
};

const decreaseQuantity = (id) => {
  let inputElement = document.getElementById(`product_${id}`);
  let currentValue = parseInt(inputElement.value);
  if (currentValue > 1) {
    inputElement.value = currentValue - 1;
    calculateProductPrice(id);
  }
};

const calculateProductPrice = (id) => {
  let inputElement = document.getElementById(`product_${id}`);
  let quantity = parseInt(inputElement.value);
  let price = products.find((product) => product.id === id).price;
  let totalPriceElement = document.getElementById(`total_price_${id}`);
  let totalPrice = quantity * price;
  totalPriceElement.textContent = formatCurrency(totalPrice);
};

const calculateSubtotal = () => {
  let subtotal = 0;
  let productQuantities = document.querySelectorAll(".product-quantity");
  productQuantities.forEach((input) => {  // Duyệt qua từng phần tử của input
    let id = parseInt(input.id.split("_")[1]); // Tách phần tử 'id' được sử dụng và lấy phần tử thứ 2
    let quantity = parseInt(input.value);
    let price = products.find((product) => product.id === id).price;
    subtotal += quantity * price;
  });
  return subtotal;
};

const calculateVAT = (subtotal) => {
  return subtotal * 0.1; // Giả sử VAT là 10% của subtotal
};

const calculateTotal = (subtotal, vat) => {
  return subtotal + vat;
};

const updateSummary = () => {
  let subtotal = calculateSubtotal();
  let vat = calculateVAT(subtotal);
  let total = calculateTotal(subtotal, vat);

  document.querySelector(".subtotal .total").textContent =
    formatCurrency(subtotal);
  document.querySelector(".vat span").textContent = formatCurrency(vat);
  document.querySelector(".cart-total").textContent = formatCurrency(total);
};

const initScreen = () => {
  render();
};

const handleBuy = () => {
  updateSummary();
};

initScreen();
