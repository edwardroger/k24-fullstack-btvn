import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {

};

function Login(props) {
    return (
        <div>
            <div className="bg-home">
                <section class="bread-crumb">
                    <div class="container">
                        <div class="title-breadcrumb">
                            Đăng nhập
                        </div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <strong>
                                    Đăng nhập
                                </strong>
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="wrap_background_aside page_login">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4 offset-0 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 col-12">
                                    <div className="row">
                                        <div className="page-login pagecustome clearfix">
                                            <div className="wpx">
                                                <h1 className="title_heads a-center">
                                                    <span>Đăng nhập</span>
                                                </h1>
                                                <span className="block a-center dkm margin-top-10">
                                                    Nếu bạn chưa có tài khoản,{" "}
                                                    <a
                                                        href="/account/register"
                                                        className="btn-link-style btn-register"
                                                    >
                                                        đăng ký tại đây
                                                    </a>
                                                </span>
                                                <div id="login" className="section">
                                                    <form
                                                        method="post"
                                                        action="/account/login"
                                                        id="customer_login"
                                                        acceptCharset="UTF-8"
                                                    >
                                                        <input
                                                            name="FormType"
                                                            type="hidden"
                                                            defaultValue="customer_login"
                                                        />
                                                        <input name="utf8" type="hidden" defaultValue="true" />
                                                        <span
                                                            className="form-signup"
                                                            style={{ color: "red" }}
                                                        ></span>
                                                        <div className="form-signup clearfix">
                                                            <fieldset className="form-group">
                                                                <input
                                                                    type="email"
                                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                                    className="form-control form-control-lg"
                                                                    defaultValue=""
                                                                    name="email"
                                                                    id="customer_email"
                                                                    placeholder="Email"
                                                                    required=""
                                                                    fdprocessedid="v49itm"
                                                                />
                                                            </fieldset>
                                                            <fieldset className="form-group">
                                                                <input
                                                                    type="password"
                                                                    className="form-control form-control-lg"
                                                                    defaultValue=""
                                                                    name="password"
                                                                    id="customer_password"
                                                                    placeholder="Mật khẩu"
                                                                    required=""
                                                                    fdprocessedid="bir8l"
                                                                />
                                                            </fieldset>
                                                            <div className="pull-xs-left">
                                                                <input
                                                                    className="btn btn-style btn_50"
                                                                    type="Đăng nhập"
                                                                    defaultValue="Đăng nhập"
                                                                    fdprocessedid="ust8dj"
                                                                />
                                                                <span className="block a-center quenmk">
                                                                    Quên mật khẩu
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="block social-login--facebooks">
                                                    <p className="a-center">Hoặc đăng nhập bằng</p>
                                                    <a
                                                        href="#"
                                                        className="social-login--facebook"
                                                        onclick="loginFacebook()"
                                                    >
                                                        <img
                                                            width="129px"
                                                            height="37px"
                                                            alt="facebook-login-button"
                                                            src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="social-login--google"
                                                        onclick="loginGoogle()"
                                                    >
                                                        <img
                                                            width="129px"
                                                            height="37px"
                                                            alt="google-login-button"
                                                            src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                                                        />
                                                    </a>
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

export default Login;