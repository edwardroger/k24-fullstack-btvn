const handleSubmitFormRegister= () => {
    let error = confirmRegisterForm();
    if (error) {
        console.log('loi');
    }

    //Xu ly dang nhap
    //So sanh gia tri email va password voi user trong data.js
}

const confirmRegisterForm = () =>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value; 
    let confirmPassword = document.getElementById( 'confirm-password' ).value;
    if (email.trim() === '' || password.trim() === '') {
        alert("Vui lòng nhập địa chỉ email và mật khẩu");
        return false;
    }

    const validTlds = ["com", "net", "org", "edu"];
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const domain = email.split("@")[1];
    const tld = domain.split(".").pop(); 
    if (!String(email).toLowerCase().match(regexEmail) || !validTlds.includes(tld)) {
    emailError = true;
    document.querySelector('.email-error').innerHTML = 'Vui lòng nhập địa chỉ email hợp lệ!';
    document.getElementById("email").focus();
  } else {
    document.querySelector('.email-error').innerHTML = '';
    emailError = false;
  }

const regexPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@\W_]).{6,}$/;

if (!password.match(regexPassword)) {
    passwordError = true;
    document.querySelector('.password-error').innerHTML = 'Vui lòng nhập mật khẩu hợp lệ!';
    document.getElementById("password").focus();
} else {
    document.querySelector('.password-error').innerHTML = '';
    passwordError = false;
}

if(password !== confirmPassword){
    document.querySelector(".confirm-pass-error").innerHTML='Mật khẩu không trùng khớp'
}
}