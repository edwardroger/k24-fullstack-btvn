// 3. Tính tiền gửi ngân hàng sau n tháng
// - Số tiền nhập vào từ bàn phím
// - Số tháng nhập vào từ bàn phím
// - Phần trăm lãi hàng tháng: 5%
// In ra số tiền nhận được sau n tháng

// 4. Tính giai thừa của số n nhập vào từ bàn phím
// 5. Nhập vào số n. In ra các số nguyên tố nhỏ hơn n

// let sotien = parseFloat(prompt("Nhập số tiền:")); // parsefloat bien string thanh so
// let sothang = parseInt(prompt("Nhập số tháng:"));
// let laisuat = 5;
// let laisuatthapphan = laisuat / 100;
// for (let i = 0; i < sothang; i++) {
//   sotien += sotien * laisuatthapphan;
// }
// console.log("Số tiền gửi sau " + sothang + " tháng là: " + sotien.toFixed(2)); // lam tron sau 2 so thap phan

// let n = parseInt(prompt("nhap n"));
// let giaithua = 1;
// if (n >= 0) {
//   for (let i = 1; i <= n; i++) {
//     giaithua *= i;
//   }
// }
// console.log(giaithua);

let n = parseInt(prompt("Nhập số n: "));
// Lặp từ 2 đến n
for (let i = 2; i <= n; i++) {
  // Kiểm tra xem i có phải là số nguyên tố hay không
  let isSoNguyenTo = true;
  // Lặp từ 2 đến i - 1
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isSoNguyenTo = false;
      break;
    }
  }
  // Nếu i là số nguyên tố thì in ra
  if (isSoNguyenTo) {
    console.log(i);
  }
}