const handleRemoveItem = (id) => {
    for (const key in products) {
        if (products[key].id === id) {
            products.splice(key, 1);
            break;
        }
    }
    render();
    const subtotal = calculateSubtotal();
    const vat = calculateVAT(subtotal);
    const discount = 0; // No discount after removing an item
    document.querySelector('.total').textContent = formatCurrency(subtotal);
    document.querySelector('.vat span').textContent = formatCurrency(vat);
    document.querySelector('.cart-total').textContent = formatCurrency(calculateTotal(subtotal, vat, discount));
}

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
                            <div class="total-price" id="price_${ products[key].id }">
                                ${ formatCurrency(products[key].price) }
                            </div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity">
                            <input type="number"
                                class="product-quantity"
                                id="product_${ products[key].id }"
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

    // Recalculate subtotal, VAT, and total
    const subtotal = calculateSubtotal();
    const vat = calculateVAT(subtotal);
    const discount = 0; // No discount after applying voucher
    document.querySelector('.total').textContent = formatCurrency(subtotal);
    document.querySelector('.vat span').textContent = formatCurrency(vat);
    document.querySelector('.cart-total').textContent = formatCurrency(calculateTotal(subtotal, vat, discount));
}

const initScreen = () => {
    render();
}

initScreen();