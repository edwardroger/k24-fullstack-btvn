// 1. Vòng lặp
// for(*)
// do while 
// while 
// map (*)
// filter 

//Example:
// i (index): chỉ mục của vòng lặp
// for: khai báo vòng lặp for
// let i = 0: khởi tạo biến lặp
// i<10 : điều kiện lặp(nếu điều kiện lặp true => thực hiện đoạn code trong for)
// i++ : bước lặp

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

//Bài tập ví dụ
//In màn hình ra các số chẵn bé hơn hoặc bằng 20
// for (let index = 0; index <= 20; index++) {
//     if (index % 2 === 0) {
//         console.log(index);
//     }
    
// }

// let sum = 0;

// for (let i = 0; i <= 20; i += 2) {
//   sum += i;
// }

// console.log(sum);


// for (let i = 1; i <= 1000; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }

// Tính tiền gửi ngân hàng sau n tháng 
// 1. Số tiền nhập từ bàn phím
// 2.Số tháng nhập từ bàn phím
// 3.Phần trăn lãi hàng tháng: 5%
// In ra số tiền nhận được sau n tháng

// let soTien = prompt("Nhập số tiền: ");
// let soThang = prompt("Nhập số tháng: ");
// let laiSuat = 0.05; // 5%

// soTien = parseFloat(soTien);
// soThang = parseInt(soThang);

// let soTienNhanDuoc = soTien * Math.pow((1 + laiSuat), soThang);

// console.log("Số tiền nhận được sau " + soThang + " tháng là: " + soTienNhanDuoc);

// Tính số giai thừa của số n nhập từ bàn phím 

// let n = prompt("Nhập số n: ");
// n = parseInt(n);

// let giaiThua = 1;

// for (let i = 1; i <= n; i++) {
//     giaiThua *= i;
// }

// console.log("Giai thừa của " + n + " là: " + giaiThua);

// Nhập vào số n. In ra các số nguyên tố nhỏ hơn số n 

// function laSoNguyenTo(num) {
//     for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
//         if (num % i === 0) return false; 
//     return num > 1;
// }

// let n = prompt("Nhập số n: ");
// n = parseInt(n);

// console.log("Các số nguyên tố nhỏ hơn " + n + " là: ");
// for(let i = 2; i < n; i++) {
//     if(laSoNguyenTo(i)) {
//         console.log(i);
//     }
// }