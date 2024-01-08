import React from 'react';
import PropTypes from 'prop-types';

Register.propTypes = {

};

function Register(props) {
    return (
        <div class="bg-home">
            <section class="bread-crumb">
                <div class="container">
                    <div class="title-breadcrumb">
                        Đăng ký tài khoản
                    </div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <strong>
                                Đăng ký tài khoản
                            </strong>
                        </li>
                    </ol>
                </div>
            </section>

            <section class="section">
                <div class="container ">
                    <div class="wrap_background_aside  page_login">
                        <div class="wrap_background_aside">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3">
                                    <div class="row">
                                        <div class="page-login pagecustome clearfix">
                                            <div class="wpx">
                                                <h1 class="title_heads a-center"><span>Đăng ký</span></h1>
                                                <span class="block a-center dkm margin-top-10">Đã có tài khoản, đăng nhập <a href="/account/login" class="btn-link-style btn-register">tại đây</a></span>
                                                <div id="login" class="section">
                                                    <div class="form-signup ">
                                                    </div>
                                                    <div class="form-signup clearfix">
                                                        <div class="row">
                                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                <fieldset class="form-group">
                                                                    <input type="text" class="form-control form-control-lg" value="" name="lastName" id="lastName" placeholder="Họ" required="" />
                                                                </fieldset>
                                                            </div>
                                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                <fieldset class="form-group">
                                                                    <input type="text" class="form-control form-control-lg" value="" name="firstName" id="firstName" placeholder="Tên" required=""/>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                <fieldset class="form-group">
                                                                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" class="form-control form-control-lg" value="" name="email" id="email" placeholder="Email" required=""/>
                                                                </fieldset>
                                                            </div>
                                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                <fieldset class="form-group">
                                                                    <input placeholder="Số điện thoại" type="text" pattern="\d+" class="form-control form-control-comment form-control-lg" name="Phone" required=""/>
                                                                </fieldset>
                                                            </div>
                                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                <fieldset class="form-group">
                                                                    <input type="password" class="form-control form-control-lg" value="" name="password" id="password" placeholder="Mật khẩu" required=""/>
                                                                </fieldset>
                                                            </div>
                                                        </div>

                                                        <div class="section">
                                                            <button type="submit" value="Đăng ký" class="btn  btn-style btn_50">Đăng ký</button>
                                                        </div>
                                                    </div>
                                                    <div class="block social-login--facebooks margin-top-15">
                                                        <p class="a-center">
                                                            Hoặc đăng nhập bằng
                                                        </p>

                                                        <a href="javascript:void(0)" class="social-login--facebook" onclick="loginFacebook()"><img width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"/></a>
                                                        <a href="javascript:void(0)" class="social-login--google" onclick="loginGoogle()"><img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"/></a>
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
    );
}

export default Register;