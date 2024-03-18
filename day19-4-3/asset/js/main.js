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
                                id="product_${products[key].id}"
                                step="1" value="${products[key].quantity}" onchange="handleQuantityChange(${ products[key].id }, this.value)" />
                        </div>
                        <div class="remove">
                            <span class="close" onclick="handleRemoveItem(${ products[key].id })">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div class="total-price" id="price">
                        ${formatCurrency(products[key].totalPrice || products[key].price * products[key].quantity)}
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
const handleQuantityChange = (id, value) => {
    for (const key in products) {
        if (products[key].id === id) {
            products[key].quantity = value;
            break;
        }
    }
    render();
}
const handleVoucher = () =>{
    let valueCode = document.getElementById('promo-code').value;
    for(const key in voucher){
        if(voucher[key].codeVoucher == valueCode && voucher[key].id == products[key].id){
            let discountApplied = products[key].price * products[key].quantity * voucher[key].discount;
            products[key].totalPrice = discountApplied;
            break;
        }
    }
    render();
}

const total = () =>{
    let totalBefore = 0;
    let totalAfter = 0;
    for(const key  in products){
        totalBefore += products[key].price * products[key].quantity;
    }
    render();
    let totalAmountHtml = document.getElementById('cart-total');
    totalAmountHtml.innerHTML = formatCurrency(totalBefore);
}
total();

const initScreen = () => {
    render();
}
initScreen();



