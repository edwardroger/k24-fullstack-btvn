
// 3. Tính tiền gửi ngân hàng sau n tháng:
// - số tiền nhập vào từ bàn phím
// - Số tháng nhập vào từ bàn phím
// - phần trăm lãi hàng tháng: 5%
// In ra số tiền nhận đươcj sau n tháng\

    var soTien = parseFloat(prompt("Nhập số tiền gửi:"));
    var soThang = parseInt(prompt("Nhập số tháng:"));
    var laiSuatHangThang = 0.05; // 5%
  
    for (var i = 1; i <= soThang; i++) {
      soTien += soTien * laiSuatHangThang;
    }
  
    console.log("Số tiền nhận được sau " + soThang + " tháng là: " + soTien.toFixed(2));

// 4. Tính giai thừa của số n nhập vào từ bàn phím
// Tính giai thừa của số n

    var n = parseInt(prompt("Nhập số n:"));
    var giaiThua = 1;
  
    for (var i = 2; i <= n; i++) {
      giaiThua *= i;
    }
  
    console.log("Giai thừa của " + n + " là: " + giaiThua);


// 5. Nhập vào số n. In ra các số nguyên nhỏ hơn n

    var n = parseInt(prompt("Nhập số n:"));
  
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
