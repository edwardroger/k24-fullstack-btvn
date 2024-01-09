// Bài tập:
// 1. Khai báo 1 điểm số:
// Nếu điểm đó dưới 4 thì in ra màn hình: Đúp,
// Điểm dưới 6 in ra màn hình : học lực trung bình,
// Điểm dưới 8 in ra màn hình : học lực khá,
// Điểm dưới 10 in ra màn hình : học lực giỏi,
// Trường hợp nhập sai in ra màn hình : Điểm sai.

// var diem = prompt('Nhập');

// if (diem >= 0 && diem < 4) {
//   console.log("Đúp");
// } else if (diem < 6) {
//   console.log("Học lực trung bình");
// } else if (diem < 8) {
//   console.log("Học lực khá");
// } else if (diem <= 10) {
//   console.log("Học lực giỏi");
// } else {
//   console.log("Điểm sai");
// }


// 2. Nhập vào 3 số a, b, c;
// Cho biết a, b, c có phải là độ dài của 3 cạnh tam giác không?
// Nếu là tam giác thì đó là tam giác gì ?

// var a = prompt('Nhập a');
// var b = prompt('Nhập b');
// var c = prompt('Nhập c');

// a = Number(a);
// b = Number(b);
// c = Number(c);

// if (a + b > c && a + c > b && b + c > a) {
//   if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
//     console.log("Đây là tam giác vuông");
//   } else if (a == b && b == c) {
//     console.log("Đây là tam giác đều");
//   } else if (a == b || a == c || b == c) {
//     console.log("Đây là tam giác cân");
//   } else {
//     console.log("Đây là tam giác thường");
//   }
// } else {
//   console.log("a, b, c không tạo thành tam giác");
// }


// BTVN: nhập vào 3 số a, b, c
// Giải phương trình bậc 2: a.x^2 + b.x + c = 0
// Gợi ý:  Math.sqrt (tính căn bậc 2)
// Các trường hợp xảy ra : delta < 0, delta > 0, delta = 0

var a = prompt('Nhập a');
var b = prompt('Nhập b');
var c = prompt('Nhập c');

a = Number(a);
b = Number(b);
c = Number(c);

var delta = b * b - 4 * a * c;

if (delta < 0) {
  console.log("Phương trình vô nghiệm");
} else if (delta === 0) {
  var x = -b / (2 * a);
  console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
} else {
  var x1 = (-b - Math.sqrt(delta)) / (2 * a);
  var x2 = (-b + Math.sqrt(delta)) / (2 * a);
  console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
}