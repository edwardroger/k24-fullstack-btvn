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
                                <img src="${products[key].image}" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${products[key].name}</a></div>
                            <div class="description">
                                ${products[key].description}
                            </div>
                            <div class="price">Price</div>
                            <div class="total-price" id="price_${products[key].id}">
                                ${formatCurrency(products[key].price)}
                            </div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity">
                            <input type="button"
                            class="product-quantity"
                            id="decrease_${products[key].id}"
                            onclick="handleQuantityChange(${products[key].id}, -1)"
                            step="-" value="-" />
                            
                            <input type="number"
                            class="product-quantity"
                            id="count_${products[key].id}"
                            onchange="handleQuantityChange(${products[key].id}, 0)"
                            step="1" value="1" />

                            <input type="button"
                            class="product-quantity"
                            id="increase_${products[key].id}"
                            onclick="handleQuantityChange(${products[key].id}, 1)"
                            step="+" value="+" />
                        </div>
                        <div class="remove">
                            <span class="close" onclick="handleRemoveItem(${products[key].id})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
                `;
    }
    productsHtml.innerHTML = html;
}

const handleQuantityChange = (id, change) => {
    const countInput = document.getElementById(`count_${id}`);
    const count = parseInt(countInput.value) + change;
    if (count < 1) {
        return; // Đảm bảo số lượng không nhỏ hơn 1
    }
    countInput.value = count;

    const priceElement = document.getElementById(`price_${id}`);
    const product = products.find(item => item.id === id);
    const totalPrice = product.price * count;
    priceElement.innerHTML = formatCurrency(totalPrice);
}



const handleRemoveItem = (id) => {
    products = products.filter(item => item.id !== id);
    render();
}

const initScreen = () => {
    render();
}

initScreen();