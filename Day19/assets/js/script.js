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
                                id="${ products[key].id }"
                                step="1" value="1" oninput="updatePrice()"/>
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

let subTotal = 0;

const updatePrice = () => {
    subTotal = 0;
    let total = 0;

    for (const key in products) {
        let newQuantity = parseInt(document.getElementById(products[key].id).value);
        let newPrices = newQuantity * products[key].price;
        subTotal += newPrices;       
    }   
    total = subTotal;
    
    document.getElementById('total').innerHTML = `Total: ${formatCurrency(total)}`;
    document.getElementById('subtotal').innerHTML = `Subtotal: ${formatCurrency(subTotal)}`;   
}

const handleVoucher = () => {
    let inputValue = document.getElementById('promo-code').value;
    let total = 0;

    if (typeof inputValue === 'string' || inputValue instanceof String) {
        inputValue = inputValue.trim();
    }

    if (inputValue.trim() !== '') {
        document.getElementById('discount').classList.remove('hide');
        total = subTotal * 95 /100;
    } else {
        alert("Vui lòng nhập mã khuyến mãi");
        total = subTotal;
    }

    document.getElementById('total').innerHTML = `Total: ${formatCurrency(total)}`;
}

const initScreen = () => {
    render();
}

initScreen();
