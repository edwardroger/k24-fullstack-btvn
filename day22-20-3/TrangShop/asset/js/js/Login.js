const handleSubmitFormLogin = () => {
    let error = confirmLoginForm();
    if (error) {
        console.log('loi');
    }

    //Xu ly dang nhap
    //So sanh gia tri email va password voi user trong data.js
}

const confirmLoginForm = () =>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value; 
    if (email.trim() === '' || password.trim() === '') {
        alert("Vui lòng nhập địa chỉ email và mật khẩu");
        return false;
    }
    let isEmailValid = true;
    let isPasswordValid = true;
for (const key in user) {
    if (user[key].email === email && user[key].password === password) {
        document.querySelector('.email-error').innerHTML = '';
        document.querySelector('.password-error').innerHTML = '';
    } else {
        if (user[key].email !== email) {
            document.querySelector('.email-error').innerHTML = 'Email không hợp lệ!';
            isEmailValid = false;
        } else {
            document.querySelector('.email-error').innerHTML = '';
            isEmailValid = true;
        }

        if (user[key].password !== password) {
            document.querySelector('.password-error').innerHTML = 'Mật khẩu không hợp lệ';
            isPasswordValid = false;
        } else {
            document.querySelector('.password-error').innerHTML = '';
            isPasswordValid = true;
        }
    }
    if (!isEmailValid || !isPasswordValid) {
        break;
    }
}
}
