//Bài 3
// Nhập số tiền và số tháng từ bàn phím
var soTien = parseFloat(prompt("Nhập số tiền gửi vào ngân hàng:"));
var soThang = parseInt(prompt("Nhập số tháng gửi tiền:"));

// Phần trăm lãi suất là 5%
var laiSuat = 0.05;

// Tính số tiền nhận được sau n tháng
for (var i = 1; i <= soThang; i++) {
  soTien += soTien * laiSuat;
}

// Hiển thị kết quả
console.log(
  "Số tiền nhận được sau " + soThang + " tháng là: " + soTien.toFixed(2)
);

// bài 4
let a = prompt("nhập số ");
if (n < 0) {
  console.log("error");
} else {
  let giaiThua = 1;
  for (let i = 1; i <= a; i++) {
    giaiThua *= i;
  }
  console.log("Giai thừa của " + a + " là: " + giaiThua);
}

// bài 5
// Nhập số n từ bàn phím
let n = prompt("Nhập một số n:");
// In ra các số nhỏ hơn n

for (let i = 1; i < n; i++) {
  console.log(i);
}
console.log("Các số nhỏ hơn " + n + " là:");
