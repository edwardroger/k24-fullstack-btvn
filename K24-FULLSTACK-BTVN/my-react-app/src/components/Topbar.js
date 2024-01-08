import React from 'react';
import PropTypes from 'prop-types';

Topbar.propTypes = {
    
};

function Topbar(props) {
    return (
        <div>
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-sx-6 col-lg-4 top-bar-left">
                            Shop Yến Sào
                        </div>                       
                        <div class="d-sm-none d-md-block col-sx-6 col-lg-8 top-bar-right">
                            <ul>
                                <li><a href="/login" title="Đăng nhập">Đăng nhập</a></li>
                                <li><a href="/register" title="Đăng ký">Đăng ký</a></li>
                                <li><a href="#" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a></li>
                                <li><a href="#" title="Sản phẩm yêu thích">Sản phẩm yêu thích</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;