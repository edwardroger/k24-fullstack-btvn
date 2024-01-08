import React from 'react';
import PropTypes from 'prop-types';
import banner_top_image_tl from '../images/banner_top_image_tl.webp';
import image_service1 from '../images/image_service1.webp';
import image_service2 from '../images/image_service2.webp';
import image_service3 from '../images/image_service3.webp';
import image_service4 from '../images/image_service4.webp';
import logo from '../images/logo.webp';
import section_flash_sale_1 from '../images/section_flash_sale_1.webp';
import section_flash_sale_2 from '../images/section_flash_sale_2.webp';
import section_flash_sale_4 from '../images/section_flash_sale_4.webp';
import section_product_1 from '../images/section_product_1.webp';
import section_product_2 from '../images/section_product_2.webp';
import section_product_3 from '../images/section_product_3.webp';
import section_product_4 from '../images/section_product_4.webp';
import section_mission_image from '../images/section_mission_image.webp'
import { useNavigate } from 'react-router-dom';


Home.propTypes = {

};

function Home(props) {
    const navigate = useNavigate()

    return (
        <div>
            <section className="section_banner_top">
                <div className="banner-cover">
                    <picture>
                        <source
                            media={"(min-width: 1200px)"}
                            srcSet="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/banner_top_image.jpg?1702544196530"
                        />
                        <source
                            media={"(min-width: 992px)"}
                            srcSet="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/banner_top_image_tl.jpg?1702544196530"
                        />
                        <source
                            media={"(min-width: 569px)"}
                            srcSet="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/banner_top_image_tl.jpg?1702544196530"
                        />
                        <source
                            media={"(max-width: 567px)"}
                            srcSet="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/banner_top_image_mb.jpg?1702544196530"
                        />
                        <img
                            width={1920}
                            height={500}
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                            data-src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/banner_top_image.jpg?1702544196530"
                            alt=""
                            className="img-fluid"
                        />
                    </picture>                 
                </div>                        
                <div className="banner-text">
                    <div className="container">
                        <div className="banner-content">
                            <h3 className="title">"Yến sào"</h3>
                            <p className="sub_title">
                                Giá trị dinh dưỡng cao, nguồn cung cấp năng lượng tự nhiên
                            </p>
                            <p className="desc">
                                Hãy khám phá sự tinh túy của Yến Sào - một món quà quý giá mà thiên
                                nhiên ban tặng. Với chất lượng đẳng cấp và giá trị dinh dưỡng cao,
                                Yến Sào đã trở thành biểu tượng của sự sang trọng và sức khỏe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_service">
                <div className="container">
                    <div className='col-lg-3 col-md-6 service-1'>
                        <div className="item">
                            <div>
                                <img                                   
                                    className="img-fluid"
                                    src={image_service1}
                                    alt="Cảm kết chất lượng"
                                    data-was-processed="true"
                                />
                            </div>
                            <div className="text">
                                <h3>Cảm kết chất lượng</h3>
                                <p>
                                    Bồi hoàn gấp 10 lần giá trị sản phẩm nếu phát hiện hàng giả.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 service-2'>
                        <div className="item">
                            <img
                                className="img-fluid"
                                src={image_service2}
                                alt="Đảm bảo vệ sinh ATTP"
                                data-was-processed="true"
                            />
                            <div className="text">
                                <h3>Đảm bảo vệ sinh ATTP</h3>
                                <p>
                                    Quy trình sản xuất khép kín, theo tiêu chuẩn về VSATTP của bộ
                                    y tế.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 service-3'>
                        <div className="item">
                            <div>
                                <img                                   
                                    className="img-fluid"
                                    src={image_service3}
                                    alt="Đổi trả sản phẩm"
                                    data-was-processed="true"
                                />
                            </div>
                            <div className="text">
                                <h3>Đổi trả sản phẩm</h3>
                                <p>Đổi trả sản phẩm trong vòng 24h kể từ thời điểm nhận hàng</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 service-4'>
                        <div className="item">
                            <div>
                                <img                                
                                    className="img-fluid"
                                    src={image_service4}
                                    alt="Giao hàng"
                                    data-was-processed="true"
                                />
                            </div>
                            <div className="text">
                                <h3>Giao hàng</h3>
                                <p>
                                    Giao hàng toàn quốc, thanh toán COD ngay tại nơi nhận hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section_flash_sale">
                <div className="container">
                    <div className="block-wraper">
                        <div className="block-title">
                            <h2>
                                <a href="#">
                                    <img
                                        className="img-fluid"
                                        width={47}
                                        height={51}
                                        src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/flash-left.png?1702544196530"
                                        alt="Giảm giá sốc"
                                    />
                                    Giảm giá sốc
                                    <img
                                        className="img-fluid"
                                        width={63}
                                        height={44}
                                        src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/flash-right.png?1702544196530"
                                        alt="Giảm giá sốc"
                                    />
                                </a>
                            </h2>
                        </div>
                        <div className="block-content">
                            <div className="row">
                                <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                    <div className='item'>
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/products"
                                                title="Tổ yến tinh chế loại 2"
                                                style={{ height: 191 }}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    width={480}
                                                    height={480}
                                                    src={section_flash_sale_1}
                                                    alt="Tổ yến tinh chế loại 2"
                                                    data-was-processed="true"
                                                />
                                            </a>
                                            <span className="discount">- 9%</span>

                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a
                                                    href="/to-yen-tinh-che-loai-2"
                                                    title="Tổ yến tinh chế loại 2"
                                                >
                                                    Tổ yến tinh chế loại 2
                                                </a>
                                            </h3>
                                            <div className="price-box">
                                                <span className="price">2.150.000₫</span>
                                                <span className="compare-price">2.350.000₫</span>
                                            </div>
                                        </div>
                                        <div className="product-btn d-none d-xl-block">
                                            <div className="btn">
                                                <button
                                                    className="btn-cart"
                                                    title="Thêm vào giỏ hàng"
                                                    type="button"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                    <div className='item'>
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/products"
                                                title="Tổ yến tinh chế loại 1"
                                                style={{ height: 191 }}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    width={480}
                                                    height={480}
                                                    src={section_flash_sale_2}
                                                    alt="Tổ yến tinh chế loại 1"
                                                    data-was-processed="true"
                                                />
                                            </a>
                                            <span className="discount">- 9%</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a
                                                    href="/to-yen-tinh-che-loai-1"
                                                    title="Tổ yến tinh chế loại 1"
                                                >
                                                    Tổ yến tinh chế loại 1
                                                </a>
                                            </h3>
                                            <div className="price-box">
                                                <span className="price">2.150.000₫</span>
                                                <span className="compare-price">2.350.000₫</span>
                                            </div>
                                        </div>
                                        <div className="product-btn d-none d-xl-block">
                                            <div className="btn">
                                                <button
                                                    className="btn-cart"
                                                    title="Thêm vào giỏ hàng"
                                                    type="button"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                    <div className='item'>
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/products"
                                                title="Tổ yến rút lông xuất khẩu"
                                                style={{ height: 191 }}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    width={480}
                                                    height={480}
                                                    src={section_flash_sale_4}     
                                                    alt="Tổ yến rút lông xuất khẩu"
                                                    data-was-processed="true"
                                                />
                                            </a>
                                            <span className="discount">- 5%</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a
                                                    href="/products"
                                                    title="Tổ yến rút lông xuất khẩu"
                                                >
                                                    Tổ yến rút lông xuất khẩu
                                                </a>
                                            </h3>
                                            <div className="price-box">
                                                <span className="price">5.300.000₫</span>
                                                <span className="compare-price">5.600.000₫</span>
                                            </div>
                                        </div>
                                        <div className="product-btn d-none d-xl-block">
                                            <div className="btn">                         
                                                <button
                                                    className="btn-cart add_to_cart "
                                                    title="Thêm vào giỏ hàng"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                    <div className='item'>
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/products"
                                                title="Tổ yến rút lông thường"
                                                style={{ height: 191 }}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    width={480}
                                                    height={480}
                                                    src={section_flash_sale_1}
                                                    alt="Tổ yến rút lông thường"
                                                    data-was-processed="true"
                                                />
                                            </a>
                                            <span className="discount">- 5%</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a
                                                    href="/products"
                                                    title="Tổ yến rút lông thường"
                                                >
                                                    Tổ yến rút lông thường
                                                </a>
                                            </h3>
                                            <div className="price-box">
                                                <span className="price">5.200.000₫</span>
                                                <span className="compare-price">5.500.000₫</span>
                                            </div>
                                        </div>
                                        <div className="product-btn d-none d-xl-block">
                                            <div className="btn">
                                                <button
                                                    className="btn-cart add_to_cart "
                                                    title="Thêm vào giỏ hàng"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                    <div className='item'>
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/products"
                                                title="Nước Yến sào Sanest lọ 70ml, Hộp 8 lọ"
                                                style={{ height: 191 }}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    width={480}
                                                    height={480}
                                                    src={section_flash_sale_4}
                                                    alt="Nước Yến sào Sanest lọ 70ml, Hộp 8 lọ"
                                                    data-was-processed="true"
                                                />
                                            </a>
                                            <span className="discount">- 11%</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a
                                                    href="/products"
                                                    title="Nước Yến sào Sanest lọ 70ml, Hộp 8 lọ"
                                                >
                                                    Nước Yến sào Sanest lọ 70ml, Hộp 8 lọ
                                                </a>
                                            </h3>
                                            <div className="price-box">
                                                <span className="price">295.000₫</span>
                                                <span className="compare-price">330.000₫</span>
                                            </div>
                                        </div>
                                        <div className="product-btn d-none d-xl-block">
                                            <div className="btn">
                                                <button
                                                    className="btn-cart add_to_cart "
                                                    title="Thêm vào giỏ hàng"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                    <div className='item'>
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/products"
                                                title="Nước Yến sào Sanest lọ 70ml, Hộp 6 lọ"
                                                style={{ height: 191 }}
                                            >
                                                <img
                                                    className="img-fluid"
                                                    width={480}
                                                    height={480}
                                                    src={section_flash_sale_4}
                                                    alt="Nước Yến sào Sanest lọ 70ml, Hộp 6 lọ"
                                                />
                                            </a>
                                            <span className="discount">- 16%</span>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a
                                                    href="/products"
                                                    title="Nước Yến sào Sanest lọ 70ml, Hộp 6 lọ"
                                                >
                                                    Nước Yến sào Sanest lọ 70ml, Hộp 6 lọ
                                                </a>
                                            </h3>
                                            <div className="price-box">
                                                <span className="price">223.000₫</span>
                                                <span className="compare-price">265.000₫</span>
                                            </div>
                                        </div>
                                        <div className="product-btn d-none d-xl-block">
                                            <div className="btn">                   
                                                <button
                                                    className="btn-cart add_to_cart "
                                                    title="Thêm vào giỏ hàng"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section_mission">
                <div className="container">
                    <div className="block-title">
                        <h2>Sứ mệnh</h2>
                    </div>
                    <div className="block-content">
                        <div className="mission-desc">
                            <p>
                                Yến ra đời với sứ mệnh trở thành người đồng hành uy tín của người
                                Việt Nam trên hành trình nâng cao sức khoẻ. Là người tiên phong
                                trong ngành yến chúng tôi lao động với tất cả cái tâm, cái đức hun
                                đúc từ muôn đời xưa!
                            </p>
                            <p>
                                Những người đi trước, những người kế thừa, hai thế hệ giữa dòng chảy
                                của cuộc sống từ 10 năm trước hay hôm nay, trên hành trình tìm ra
                                lời giải cho yến Việt chung mục tiêu: Vì khách hàng Cam kết chất
                                lượng – Không ngừng học hỏi, Chuyên nghiệp – Chính trực – Hài hòa
                                lợi ích
                            </p>
                            <p>
                                DrVitamin ra đời với sứ mệnh trở thành người đồng hành uy tín của
                                người Việt Nam trên hành trình nâng cao sức khoẻ.
                            </p>
                        </div>
                        <div className="mission-image">
                            <img
                                className="img-fluid"
                                width={1170}
                                height={515}
                                src={section_mission_image}
                                alt="Lofi Nest"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_product_new section_product">
                <div className="container">
                    <div className="block-title">
                        <h2>
                            <a href="#"
                                title="Tổ yến chưng sẵn"
                            >
                                Tổ yến chưng sẵn
                            </a>
                        </h2>
                    </div>

                    <div className="block-product">
                        <div className='row'>
                            <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                <div className='item'>
                                    <div className="product-thumbnail">
                                        <a
                                            className="image_thumb scale_hover"
                                            href="/products"
                                            title="Yến chưng bách niên 2"
                                            style={{ height: 262 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                width={480}
                                                height={480}
                                                src={section_product_3}
                                                alt="Yến chưng bách niên 2"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a
                                                href="/products"
                                                title="Yến chưng bách niên 2"
                                            >
                                                Yến chưng bách niên 2
                                            </a>
                                        </h3>
                                        <div className="price-box">255.000₫ </div>
                                    </div>
                                    <div className="product-btn d-none d-xl-block">
                                        <div className="btn">
                                            <button
                                                className="btn-cart add_to_cart "
                                                title="Thêm vào giỏ hàng"
                                                onClick={() => navigate("/products")}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                <div className='item'>
                                    <div className="product-thumbnail">
                                        <a
                                            className="image_thumb scale_hover"
                                            href="/products"
                                            title="Yến chưng bách niên 1"
                                            style={{ height: 262 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                width={480}
                                                height={480}
                                                src={section_product_4}
                                                alt="Yến chưng bách niên 1"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a
                                                href="/products"
                                                title="Yến chưng bách niên 1"
                                            >
                                                Yến chưng bách niên 1
                                            </a>
                                        </h3>
                                        <div className="price-box">225.000₫ </div>
                                    </div>
                                    <div className="product-btn d-none d-xl-block">
                                        <div className="btn">
                                            <button
                                                className="btn-cart"
                                                title="Thêm vào giỏ hàng"
                                                type="button"
                                                onClick={() => navigate("/products")}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                <div className='item'>
                                    <div className="product-thumbnail">
                                        <a
                                            className="image_thumb scale_hover"
                                            href="/products"
                                            title="Yến chưng ngọc nữ"
                                            style={{ height: 262 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                width={480}
                                                height={480}
                                                src={section_product_1}
                                                alt="Yến chưng ngọc nữ"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a
                                                href="/products"
                                                title="Yến chưng ngọc nữ"
                                            >
                                                Yến chưng ngọc nữ
                                            </a>
                                        </h3>
                                        <div className="price-box">250.000₫ </div>
                                    </div>
                                    <div className="product-btn d-none d-xl-block">
                                        <div className="btn">
                                            <button
                                                className="btn-cart"
                                                title="Thêm vào giỏ hàng"
                                                type="button"
                                                onClick={() => navigate("/products")}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                <div className='item'>
                                    <div className="product-thumbnail">
                                        <a
                                            className="image_thumb scale_hover"
                                            href="/products"
                                            title="Yến chưng vương dược"
                                            style={{ height: 262 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                width={480}
                                                height={480}
                                                src={section_product_2}
                                                alt="Yến chưng vương dược"
                                            />
                                        </a>
                                        <span className="discount">- 27%</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a
                                                href="/products"
                                                title="Yến chưng vương dược"
                                            >
                                                Yến chưng vương dược
                                            </a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="price">255.000₫</span>
                                            <span className="compare-price">350.000₫</span>
                                        </div>
                                    </div>
                                    <div className="product-btn d-none d-xl-block">
                                        <div className="btn">
                                            <button
                                                className="btn-cart"
                                                title="Thêm vào giỏ hàng"
                                                type="button"
                                                onClick={() => navigate("/products")}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                <div className='item'>
                                    <div className="product-thumbnail">
                                        <a
                                            className="image_thumb scale_hover"
                                            href="/products"
                                            title="Yến chưng long thai"
                                            style={{ height: 262 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                width={480}
                                                height={480}
                                                src={section_product_3}
                                                alt="Yến chưng long thai"
                                            />
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a
                                                href="/products"
                                                title="Yến chưng long thai"
                                            >
                                                Yến chưng long thai
                                            </a>
                                        </h3>
                                        <div className="price-box">460.000₫ </div>
                                    </div>
                                    <div className="product-btn d-none d-xl-block">
                                        <div className="btn">
                                            <button
                                                className="btn-cart add_to_cart "
                                                title="Thêm vào giỏ hàng"
                                                onClick={() => navigate("/products")}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-sm-6 item_product_main">
                                <div className='item'>
                                    <div className="product-thumbnail">
                                        <a
                                            className="image_thumb scale_hover"
                                            href="/products"
                                            title="Yến chưng Minh Nhãn Yến"
                                            style={{ height: 262 }}
                                        >
                                            <img
                                                className="img-fluid"
                                                width={480}
                                                height={480}
                                                src={section_product_4}
                                                alt="Yến chưng Minh Nhãn Yến"
                                            />
                                        </a>
                                        <span className="discount">- 29%</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a
                                                href="/products"
                                                title="Yến chưng Minh Nhãn Yến"
                                            >
                                                Yến chưng Minh Nhãn Yến
                                            </a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="price">250.000₫</span>
                                            <span className="compare-price">350.000₫</span>
                                        </div>
                                    </div>
                                    <div className="product-btn d-none d-xl-block">
                                        <div className="actions-primary btn-views">
                                            <button
                                                className="btn-cart"
                                                title="Thêm vào giỏ hàng"
                                                type="button"
                                                onClick={() => navigate("/products")}
                                            >
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_mailchimp">
                <div className="container">
                    <div className="mailchimp">
                        <div className="text-email">
                            <h4 className="title-menu">
                                Mong rằng Quý khách hàng sẽ có trải nghiệm tuyệt vời nhất khi sử
                                dụng sản phẩm của chúng tôi!
                            </h4>
                            <p className="desc">
                                Đăng ký tư vấn sản phẩm phù hợp &amp; chương trình ưu đãi đặc biệt
                                dành riêng cho bạn!
                            </p>
                        </div>
                        <div className="email">
                                <input
                                    aria-label="Địa chỉ Email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Nhập email của bạn"
                                    name="EMAIL"
                                    required=""
                                    autoComplete="off"                                 
                                />
                                <button
                                    className="btn btn-default"
                                    type="submit"
                                    aria-label="Đăng ký nhận tin"
                                    name="subscribe"                                  
                                >
                                    Gửi
                                </button>                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;