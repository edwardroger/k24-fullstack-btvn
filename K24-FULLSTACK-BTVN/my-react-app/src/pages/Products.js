import React from 'react';
import PropTypes from 'prop-types';
import section_product_1 from '../images/section_product_1.webp';
import section_product_2 from '../images/section_product_2.webp';
import section_product_3 from '../images/section_product_3.webp';
import section_product_4 from '../images/section_product_4.webp';
import { useNavigate } from 'react-router-dom';

Products.propTypes = {
    
};

function Products(props) {
    const navigate = useNavigate()

    return (
        <div>
            <div className="bg-home">
                <section className='section_breadcrumd' aria-label="breadcrumb">
                    <div className='container'>
                        <div class="title-breadcrumb">
                            Tổ yến tinh chế loại 2
                        </div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <strong>
                                    Tổ yến tinh chế loại 2
                                </strong>
                            </li>
                        </ol>
                    </div>
                </section>
                <section
                    className="product layout-product"
                    itemScope=""
                    itemType="https://schema.org/Product"
                >
                    <div className="container">
                        <div className="details-product">
                            <div className="row margin-am-10">
                                <div className="product-detail-left product-images col-12 col-md-12 col-lg-6 col-left">
                                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                                        <div className="carousel-indicators">
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={0}
                                                className="active"
                                                aria-current="true"
                                                aria-label="Slide 1"   
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={1}
                                                aria-label="Slide 2"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={2}
                                                aria-label="Slide 3"
                                            />
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval={10000}>
                                                <img src={section_product_1} className="d-block w-100"/>
                                                <div className="carousel-caption d-none d-md-block">
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval={2000}>
                                                <img src={section_product_2} className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={section_product_3} className="d-block w-100" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5>Third slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleDark"
                                            data-bs-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleDark"
                                            data-bs-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-right">
                                    <div className="details-pro">
                                        <h1 className="title-product">Tổ yến tinh chế loại 1</h1>
                                        <div className="form-inline">
                                            <div className="price-box clearfix">
                                                <span className="special-price">
                                                    <span className="price product-price">2.150.000₫</span>
                                                </span>{" "}
                                                {/* Giá Khuyến mại */}
                                                <span
                                                    className="old-price"
                                                    itemProp="priceSpecification"
                                                    itemScope=""
                                                    itemType="http://schema.org/priceSpecification"
                                                >
                                                    <del className="price product-price-old">2.350.000₫</del>
                                                </span>{" "}
                                                {/* Giá gốc */}
                                            </div>
                                            <div className="form-product">
                                                <div className="select-swatch">
                                                    <div
                                                        id="variant-swatch-0"
                                                        className="swatch clearfix"
                                                        data-option="option1"
                                                        data-option-index={0}
                                                    >
                                                        <div className="header">Kích thước:</div>
                                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                            <div className='select-btn'>
                                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                                                <label class="btn btn-outline-primary" for="btnradio1">50 gram</label>
                                                            </div>
                                                            <div className='select-btn'>
                                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                                                <label class="btn btn-outline-primary" for="btnradio2">100 gram</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div
                                                    className="product-promotion rounded-sm"
                                                    id="lofi-salebox"
                                                >
                                                    <div className="product-promotion__heading">
                                                        <h3 className="d-inline-flex align-items-center">
                                                            <img
                                                                src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-product-promotion.png?1702544196530"
                                                                data-src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-product-promotion.png?1702544196530"
                                                                alt="Tổ yến tinh chế loại 1"
                                                                data-image="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-product-promotion.png?1702544196530"
                                                                width={22}
                                                                height={22}
                                                                className="mr-2"
                                                            />
                                                            Khuyến mãi
                                                        </h3>
                                                    </div>
                                                    <ul className="promotion-box">
                                                        <li>
                                                            Miễn phí giao hàng cho đơn hàng từ 2.000.000 VNĐ tới
                                                            mọi tỉnh thành
                                                        </li>
                                                        <li>
                                                            Miễn phí ship nội thành trong bán kính 5km với đơn
                                                            hàng từ 1.000.000 VNĐ
                                                        </li>
                                                        <li>Quà tặng hấp dẫn lên tới 1.000.000 VNĐ</li>
                                                        <li>
                                                            Tiết kiệm lên tới 50% khi mua các sản phẩm combo
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="btn-mua button_actions">
                                                    <div className="btn-group">
                                                        <div className='btn'>
                                                            <button
                                                                className="btn-cart"
                                                                title="Thêm vào giỏ hàng"
                                                                type="button"
                                                                onClick={() => navigate("/products")}
                                                            >
                                                                Thêm vào giỏ hàng
                                                            </button>
                                                        </div>            
                                                        <div className="btn">
                                                            <button
                                                                className="btn-cart"
                                                                title="Mua ngay"
                                                                type="button"
                                                                onClick={() => navigate("/payment")}
                                                            >
                                                                Mua ngay
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row margin-am-10">
                                <div className="product-detail-left col-12 col-md-12 col-lg-12">
                                    <div className="append-product-tab">
                                        <div className="product-tab e-tabs not-dqtab">
                                            <ul className="tabs tabs-title clearfix">
                                                <li className="tab-link active" data-tab="#tab-1">
                                                    <h3>Chi tiết sản phẩm</h3>
                                                </li>
                                            </ul>
                                            <div className="tab-float">
                                                <div
                                                    className="tab-1 tab-content content_extab current"
                                                >
                                                    <div className="rte product_getcontent">
                                                        <div className="ba-text-fpt has-height">
                                                            <h3>
                                                                <b>
                                                                    <b>
                                                                        <em>Tổ yến tinh chế 1</em>
                                                                    </b>
                                                                    <em>&nbsp;</em>có ưu điểm gì?
                                                                </b>
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    <b>
                                                                        <em>Tổ yến tinh chế 1&nbsp;</em>
                                                                    </b>
                                                                    được làm sạch hoàn toàn từ thiên nhiên
                                                                    dựa&nbsp;theo quy chuẩn vệ sinh an toàn thực phẩm
                                                                    có đầy đủ chứng nhận của Bộ Y tế.
                                                                </li>
                                                                <li>
                                                                    Yến trưởng thành 12 năm tuổi, được thả tự nhiên
                                                                    tại vùng đảo Nha Trang – Khánh Hòa. Sản phẩm có
                                                                    thương hiệu lớn cho chất lượng tổ yến tốt nhất cả
                                                                    nước.
                                                                </li>
                                                                <li>
                                                                    Dây chuyển&nbsp;chế hiện đại, tiệt trùng. Sản phẩm
                                                                    không có chất phụ gia bảo quản, được sấy khô hoàn
                                                                    toàn – bảo đảm đúng khối lượng và bảo quản rất
                                                                    lâu.
                                                                </li>
                                                                <li>
                                                                    <b>
                                                                        <em>Tổ yến tinh chế 1</em>
                                                                    </b>
                                                                    <em>&nbsp;</em>có thể được chia nhỏ để sử dụng,
                                                                    phần còn lại có thể bảo quản nơi khô ráo hoặc
                                                                    trong tủ lạnh. Chính vì vậy, sản phẩm tổ yến không
                                                                    còn quá “đắt đỏ” như trước đây mà phù hợp với
                                                                    nhiều điều kiện kinh tế hơn.
                                                                </li>
                                                            </ul>
                                                            <h3>
                                                                <b>
                                                                    Quy trình sản xuất&nbsp;<em>Tổ yến tinh chế 1</em>
                                                                </b>
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    Tổ yến thô được trực tiếp khai thác từ các vách đá
                                                                    và hang động ở vùng đảo Nha Trang – Khánh Hòa.
                                                                </li>
                                                                <li>
                                                                    Tổ yến thô sau khi được thu hoạch sẽ chọn lọc tổ
                                                                    to và đẹp nhất, làm sạch và sơ chế tỷ mỷ và kỹ
                                                                    lưỡng.
                                                                </li>
                                                                <li>
                                                                    Sau đó, tổ yến sẽ được trực tiếp làm sạch thủ công
                                                                    3 lần để đảm bảo sạch toàn bộ lông và tạp chất.
                                                                </li>
                                                                <li>
                                                                    Tiếp tục cho yến sào vào lò sấy khô với nhiệt độ
                                                                    thích hợp để giữ được độ tươi ngon tự nhiên nhất
                                                                    mà không mất đi một chút dưỡng chất nào.
                                                                </li>
                                                                <li>
                                                                    Bước cuối cùng là kiểm duyệt chất lượng sản phẩm.
                                                                    Công đoạn này được thực hiện bằng máy móc hiện
                                                                    đại.
                                                                </li>
                                                            </ul>
                                                            <p>
                                                                <b>
                                                                    Dinh dưỡng bên trong&nbsp;
                                                                    <em>Tổ yến tinh chế 1</em>
                                                                </b>
                                                            </p>
                                                            <p>
                                                                Tổ yến sào có&nbsp;chứa tới 18 loại Acid amin có hàm
                                                                lượng&nbsp;cao&nbsp;như Aspartic acid, Serine,
                                                                Tyrosine, Phenylalanine, Valine, Arginine, Leucine,
                                                                … Đặc biệt trong đó có một số loại acid amin cơ thể
                                                                không tự tổng hợp được có hàm lượng rất cao như:
                                                                Threonine, Phenylalanine, Leucine, Valine,
                                                                Isoleucine, Arginine, Methionine. Và&nbsp;
                                                                <b>
                                                                    <em>Tổ yến tinh chế 1</em>
                                                                </b>
                                                                <b>
                                                                    <em>&nbsp;</em>
                                                                </b>
                                                                <b>
                                                                    giữ nguyên được 100% giá trị dinh dưỡng ban đầu.
                                                                </b>
                                                            </p>
                                                            <p>
                                                                Bên cạnh đó, tổ yến sào có&nbsp;
                                                                <b>31 loại nguyên tố đa – vi lượng</b>&nbsp;cần
                                                                thiết cho cơ thể con người như Mn, Br, Cu, Zn, Cr,
                                                                Se … Cụ thể:
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <b>Canxi</b>
                                                                </li>
                                                                <li>
                                                                    <b>Sắt và Vitamin</b>
                                                                </li>
                                                                <li>
                                                                    <b>Valine, Serine</b>
                                                                </li>
                                                                <li>
                                                                    <b>Cu, Br, Zn</b>
                                                                </li>
                                                                <li>
                                                                    <b>Crom</b>
                                                                </li>
                                                                <li>
                                                                    <b>Collagen</b>
                                                                </li>
                                                            </ul>
                                                            <h3>
                                                                <b>Công dụng&nbsp;</b>
                                                                <b>
                                                                    <em>Tổ yến tinh chế 1</em>
                                                                </b>
                                                            </h3>
                                                            <ul>
                                                                <li>
                                                                    Tổ&nbsp;yến là món "bát trân trong bát
                                                                    trân"&nbsp;có nguồn gốc tự nhiên rất quý từ xưa,
                                                                    chỉ được dùng cho vua chúa. Đến nay, sản phẩm
                                                                    <em>
                                                                        &nbsp;<b>tổ yến&nbsp;</b>
                                                                    </em>
                                                                    vẫn không mất đi sự quý giá của nó và được nhiều
                                                                    khách hàng lựa chọn bởi tác dụng bồi bổ rất lớn.
                                                                </li>
                                                                <li>
                                                                    Trong tổ yến chưa 50% Protein tự nhiên, 18 loại
                                                                    Acid Amin và hơn 31 nguyên tố vi lượng. Phần lớn
                                                                    trong số này là các chất cơ thể con người không tự
                                                                    tổng hợp được, cần phải nạp từ bên ngoài. Chính vì
                                                                    vậy,&nbsp;
                                                                    <b>
                                                                        <em>tổ yến&nbsp;</em>
                                                                    </b>
                                                                    có tác dụng rất tốt với cơ thể.
                                                                </li>
                                                            </ul>
                                                        </div>                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>      
    );
}

export default Products;