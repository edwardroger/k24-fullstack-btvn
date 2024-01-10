/* Giữ lại thanh header khi cuộn xuống */
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScroll > lastScrollTop) {
            // Scroll down
            header.classList.add('header-scrolled');
        } else {
            // Scroll up
            header.classList.remove('header-scrolled');
        }
    
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

/* Chuyển trang */
function chuyenTrang() {
    document.body.classList.add('fade'); // Thêm class 'fade' để tạo hiệu ứng fade out

    setTimeout(function() {
      window.location.href = './assets/html/login.html'; // Thay đổi URL tới trang mới ở đây
    }, 500); // Timeout 500ms để chờ cho hiệu ứng fade out trước khi chuyển trang
}
       
/* function tăng giảm số lượng */
function decreaseQuantity() {
    var quantityInput = document.getElementById("quantity");
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }

  function increaseQuantity() {
    var quantityInput = document.getElementById("quantity");
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
  }
    