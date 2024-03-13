const render = () => {
    let productsHtml = document.getElementById('products');
    let html = '';
    if (productsHtml.length === 0) {
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
                                id="product_${ products[key].id }"
                                onchange="handleSubtotal(${ products[key].id })"
                                step="1" value="1" />
                        </div>
                        <div class="remove">
                            <span class="close" onload=" onclick="handleRemoveItem(${ products[key].id })">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
                `;
    }
    productsHtml.innerHTML = html;
    handleSubtotal();
}

const handleRemoveItem = (id) => {
    //Cach 1: Dung filter de loc ra cac san pham khong trung Id
    // products = products.filter(item => item.id != id);

    //Cach 2: Dung vong lap for va splice de loai bo phan tu ra khoi mang products
    for (const key in products) {
        if (products[key].id === id) {
            products.splice(key, 1);
            document.getElementById("count").innerHTML = products.length + " items in the bag";
            handleSubtotal(id);
            break;
        }
    }

    //Cach 3: dung find de tim ra 
    // let product = products.find(item => item.id === id);
    // products.splice(product, 1);

    render();
}

const handleVoucher = () => {
    let a = document.getElementsByClassName("hide")[0];
    let b = document.getElementById('promo-code').value;
    console.log(b);
    if (b == "1") {
        a.style.display = "block";
    }
}

const handleSubtotal = (id) => {
    let subtotal = document.getElementById("subTotal");
    let a = 0;
    for (const key in products) {
        let number = document.getElementById(`product_${ products[key].id }`);
        a += parseInt(number.value) * products[key].price;
    }
    subtotal.innerHTML = formatCurrency(a);
    let total = document.getElementsByClassName("cart-total")[0];
    let t = 0;
    t = a * 1.1;
    total.innerHTML = formatCurrency(t);
}

const initScreen = () => {
    render();
}

initScreen();