
const validateForm = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordError = false;
    let emailError = false;
    if (email.trim() === '' || password.trim() === '') {
        alert("Vui lòng nhập địa chỉ email và mật khẩu");
        return false;
    }
    if (password.length < 6) {
        passwordError = true;
        document.querySelector('.password-error').innerHTML = 'Password must be at least 6 characters'
    }else {
        document.querySelector('.password-error').innerHTML = '';
        passwordError = false;
    }
    if (password.length > 20) {
        passwordError = true;
        document.querySelector('.password-error').innerHTML = 'Password must not exceed 20 characters'
    }
    c
  const togglePasswordVisibility = () => {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
    
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
  togglePasswordVisibility()
    
    if (passwordError) {
        document.getElementById('password').classList.add('input-error');
    }else{
        document.getElementById('password').classList.remove('input-error');
    }

    if (emailError) {
        document.getElementById('email').classList.add('input-error');
    }else{
        document.getElementById('email').classList.remove('input-error');
    }

    if (emailError || passwordError) {
        return true;
    }

    return false;
}