function appendToDisplay(value) {
    var displayContent = document.querySelector('.display-content');
    displayContent.textContent += value;
  }

  function calculateResult() {
    var displayContent = document.querySelector('.display-content');
    var result = displayContent.textContent;

    // Đánh giá thứ tự ưu tiên của phép tính sử dụng hàm eval()
    try {
      var output = eval(result);
      displayContent.textContent = output;
    } catch (error) {
      displayContent.textContent = 'Lỗi';
    }
  }

  function clearDisplay() {
    var displayContent = document.querySelector('.display-content');
    displayContent.textContent = '';
}

