const formatCurrency = (price) => { //Function common
    return new Intl.NumberFormat(
        'vi-VN',
        { style: 'currency', currency: 'VND' }
        ).format(price)
}

const calculateSubtotal = () => {
    let subtotal = 0;
    for (const product of products) {
        subtotal += product.price * product.quantity;
    }
    return subtotal;
}

const calculateVAT = (subtotal) => {
    return subtotal * 0.1;
}

const calculateTotal = (subtotal, vat, discount) => {
    return subtotal + vat - discount;
}

const applyVoucher = () => {
    const voucherCode = document.getElementById('promo-code').value.toLowerCase();
    if (voucherCode === 'giamgia') {
        for (const product of products) {
            product.price *= 0.9;
        }
        render();
        alert('Discount applied successfully!');
    } else {
        alert('Invalid voucher code');
    }
}