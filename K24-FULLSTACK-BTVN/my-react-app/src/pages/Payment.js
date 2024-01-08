import React from 'react';
import PropTypes from 'prop-types';

Payment.propTypes = {

};

function Payment(props) {
    return (
        <div className='section_payment'>
            <div className="row">
                <div className="col-8">
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-6">
                                    <h3>Thông tin nhận hàng</h3>
                                    <label htmlFor="fname">
                                        <i className="fa fa-user" /> Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="firstname"
                                        placeholder="Họ và tên"
                                    />
                                    <label htmlFor="email">
                                        <i className="fa fa-envelope" /> Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="adr">
                                        <i className="fa fa-address-card-o" /> Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        id="adr"
                                        name="address"
                                        placeholder="Địa chỉ"
                                    />
                                    <label htmlFor="city">
                                        <i className="fa fa-institution" /> Thành phố
                                    </label>
                                    <input type="text" id="city" name="city" placeholder="Thành phố" />
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="state">Quận/Huyện</label>
                                            <input type="text" id="state" name="state" placeholder="Quận/Huyện" />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="zip">Mã bưu điện</label>
                                            <input type="text" id="zip" name="zip" placeholder={10001} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h3>Thanh toán</h3>
                                    <label htmlFor="fname">Thẻ thanh toán</label>
                                    <div className="icon-container">
                                        <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                                        <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                                        <i className="fa fa-cc-mastercard" style={{ color: "red" }} />
                                        <i className="fa fa-cc-discover" style={{ color: "orange" }} />
                                    </div>
                                    <label htmlFor="cname">Tên trên thẻ</label>
                                    <input
                                        type="text"
                                        id="cname"
                                        name="cardname"
                                        placeholder="Họ và tên"
                                    />
                                    <label htmlFor="ccnum">Số thẻ</label>
                                    <input
                                        type="text"
                                        id="ccnum"
                                        name="cardnumber"
                                        placeholder="1111-2222-3333-4444"
                                    />
                                    <label htmlFor="expmonth">Tháng hết hạn</label>
                                    <input
                                        type="text"
                                        id="expmonth"
                                        name="expmonth"
                                        placeholder="Tháng 9"
                                    />
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Năm hết hạn</label>
                                            <input
                                                type="text"
                                                id="expyear"
                                                name="expyear"
                                                placeholder={2029}
                                            />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">Mã số CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder={352} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>
                                <input type="checkbox" defaultChecked="checked" name="sameadr" />{" "}
                                Thông tin nhận hàng giống với thông tin thanh toán
                            </label>
                            <input
                                type="Xác nhận"
                                defaultValue="Xác nhận"
                                className="btn"
                            />
                        </form>
                    </div>
                </div>
                <div className="col-4">
                    <div className="container">
                        <h4>
                             Giỏ hàng
                            <span className="price" style={{ color: "black" }}>
                                <i className="fa fa-shopping-cart" />
                                <b>1</b>
                            </span>
                        </h4>
                        <p>
                            <a href="#">Tổ yến tinh chế loại 2</a> <span className="price">2.150.000₫</span>
                        </p>
                        <hr />
                        <p>
                            Tổng tiền{" "}
                            <span className="price" style={{ color: "black" }}>
                                <b>2.150.000₫</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Payment;