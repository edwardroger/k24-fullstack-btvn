// 1. Vòng lặp
// - Vòng lặp for (*)
// - Vòng lặp while
// - Vòng lặp Do while
// - Vòng lặp map (*)
// - Vòng lặp filter
// - ...

// Example
// for: Khai báo vòng lặp for
// let i = 0; Khởi tạo biến lặp
// i < 10: điều kiện lặp
// i++ : bước lặp

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Bài tập ví dụ
// In ra màn hình các số chẵn bé hơn hoặc bằng 20
// for (let index = 0; index <= 20; index++) {
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }

// Bài tập

// 1. Tính tổng các số bé hơn hoặc bằng 20
let sum = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(`Tổng các số chẵn bé hơn hoặc bàng 20 là: ${sum}`);

// 2. In ra màn hình các số chia hết cho 5 ( <= 1000)
for (i = 0; i <= 1000; i++) {
  if (i % 5 == 0) {
    console.log(`Các số chia hết cho 5 là: ${i}`);
  }
}

// 3. Tính tiền gửi ngân hàng sau n tháng
// - Số tiền nhập vào từ bàn phím
// - Số tháng nhập vào từ bàn phím
// - Phần trăm lãi hàng tháng: 5%
// - In ra số tiền lãi được sau n tháng

console.log("============== Bài 3 ==============");
// let soTienBanDau;
// let soThang;

// // Nhập số tiền gốc và kiểm tra
// while (true) {
//   let userInput = prompt("Nhập số tiền gửi ban đầu:");
//   soTienBanDau = parseFloat(userInput);
//   if (!isNaN(soTienBanDau) && soTienBanDau >= 100000) {
//     break;
//   }
//   alert("Vui lòng nhập số tiền lớn hơn 100.000 VNĐ, xin mời nhập lại.");
// }

// // Nhập số tháng và kiểm tra
// while (true) {
//   let userInput = prompt("Nhập số tháng gửi:");
//   soThang = parseInt(userInput);
//   if (!isNaN(soThang) && soThang >= 1) {
//     break;
//   }
//   alert("Số tháng tối thiếu là 1 tháng, vui lòng nhập lại.");
// }

// const phanTramLaiHangThang = 5;
// let soTien = soTienBanDau;

// // Tính tiền lãi sau n tháng
// for (let thang = 0; thang < soThang; thang++) {
//   let tienLaiHangThang = (soTien * phanTramLaiHangThang) / 100;
//   soTien += tienLaiHangThang;
// }

// // In ra số tiền cuối cùng và số tiền lãi
// console.log(
//   `Số tiền cuối cùng sau ${soThang} tháng là: ${soTien.toFixed(0)} VND`
// );
// console.log(
//   `Số tiền lãi được sau ${soThang} tháng là: ${(soTien - soTienBanDau).toFixed(
//     0
//   )} VND`
// );

// 4. Tính giai thừa của số n nhập vào từ bàn phím
console.log("============== Bài 4 ==============");

// let n;

// do {
//   n = parseInt(prompt("Nhập số n (n >= 0):"));

//   if (isNaN(n) || n < 0) {
//     alert("Vui lòng nhập một số nguyên không âm. Vui lòng nhập lại.");
//   }
// } while (isNaN(n) || n < 0);

// let giaiThua = 1;

// for (let i = 1; i <= n; i++) {
//   giaiThua *= i;
// }

// console.log(`Giai thừa của ${n} là: ${giaiThua}`);

// 5. Nhập vào số n. In ra các số nguyên tố nhỏ hơn n
console.log("============== Bài 5 ==============");

let n;
do {
  n = parseInt(prompt("Nhập số n (n > 1): "));

  if (!isNaN(n) && parseInt(n) > 1) {
    break;
  }

  alert("Vui lòng nhập một số nguyên dương lớn hơn 1. Vui lòng nhập lại.");
} while (true);

n = parseInt(n);

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let index = 2; index * index <= num; index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(`Các số nguyên tố nhỏ hơn ${n}:`);

for (let index = 2; index < n; index++) {
  if (isPrime(index)) {
    console.log(index);
  }
}
