const render = () => {
    let productsHtml = document.getElementById('products');
    let html = '';
    if (products.length === 0) {
        productsHtml.innerHTML = 'Empty';

        return;
    }
    for (const key in products) {
        html += `<li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="${ products[key].image }" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${ products[key].name }</a></div>
                            <div class="description">
                                ${ products[key].description }
                            </div>
                            <div class="price">Price</div>
                            <div class="total-price" id="price_">
                                ${ formatCurrency(products[key].price) }
                            </div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity">
                            <input type="number"
                                class="product-quantity"
                                id="product_"
                                step="1" value="1" />
                        </div>
                        <div class="remove">
                            <span class="close" onclick="handleRemoveItem(${ products[key].id })">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
                `;
    }
    productsHtml.innerHTML = html;
}

const handleRemoveItem = (id) => {
    //Cách 1: Dùng filter để lọc ra các sản phẩm ko trùng id
    // products = products.filter(item => item.id !== id);

    //Cách 2: Dùng vòng lặp for và splice để loại bỏ phần tử khỏi mảng products
    for (const key in products) {
        if (products[key].id === id) {
            products.splice(key, 1);
            break;
        }
    }

    //Cách 3: Dùng find để tìm ra phần tử products. Và dùng splice để xoá
    // let product = products.find(item => item.id === id);
    // products.splice(product, 1)

    render();
}

//const initScreen = () => {
//    render();
//}
//const hanleQuantityChange = () => {
//    let productQuantities = document.querySelectorAll(".product-quantity");
//    let price = products[index].price;
//    subtotal += quantity * price;
//    };
const handleQuantityChange = () => {
    let productQuantities = document.querySelectorAll(".product-quantity");
    let subtotal = 0;

    productQuantities.forEach((input, index) => {
    let quantity = parseInt(input.value);
    let price = products[index].price;
      subtotal += quantity * price;
    });
    // Tính VAT
    let vat = subtotal * 0.1; // Giả sử VAT là 10% của subtotal
    // Tính tổng cộng
    let total = subtotal + vat;

    // Hiển thị các giá trị lên giao diện
    document.querySelector(".subtotal .total").textContent =
      formatCurrency(subtotal);
    document.querySelector(".vat span").textContent = formatCurrency(vat);
    document.querySelector(".cart-total").textContent = formatCurrency(total);
  };
  
  const initScreen = () => {
    render();
  
    // Thêm sự kiện onchange cho tất cả các ô input
    document.querySelectorAll(".product-quantity").forEach((input) => {
      input.addEventListener("change", handleQuantityChange);
    });
  };

initScreen();