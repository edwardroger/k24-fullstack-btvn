// // 1. Khai báo biến
// // var, let, const

// // var number = 5; // var: khai báo tên biến, number; tên biến, = : phép gán, 5: giá trị.
// // let a = 1;
// let string = "Hello World 2";

// // const number = 15;

// // Các kiểu dữ liệu trong js

// // String, number, null, undefined, Object, array, Boolean

// // Khai báo 1 number: var number = 20:
// // Khai báo 1 string: var string = "Hello World";
// // Khai báo 1 biến boolean: var bool = true;
// // Khai báo 1 biến null: var check = null;

// console.log("HelloWorld");
// console.log(number);
// console.log(string);

// // 3. Các toán tử trong Js
// // 3.1 Toán tử gán "="
// // var a = 5;
// // a = 10;

// // 3.2 Toán tử logic (&&, ||, !)
// // &&: toán tử AND
// // ||: Toán tử OR
// // !: Toán tử NOT

// // ex: var a = 5;
// // var b = -1;
// // if (a > 0 && b > 0) {
// // }

// // 3,3 toán tử cơ bản: (+, - , *, /, ++, --, **)
// // var a = 5;
// // var b = 6;
// // var c = a + b;
// // console.log(c);

// // var number1 = 20;
// // var number2 = 7;
// // console.log(number1 % number2);
// // console.log(number1++);
// // console.log(number1**number2); // luỹ thừa **
// // 3.4 Toán tử so sánh (>, <, >=, <=, ==, ===, !===)
// // 3.4 Toán tử số học: +, -, *, :;

// // 3.6 Toán tử 3 ngôi: (?:, ??)

// // 4. Câu điều kiện:
// // var a = 5;
// // var b = 10;
// // var c = "c";
// // var d = 0;
// // if (a == b) {
// //   console.log("Số a lớn hơn b");
// // } else {
// //   console.log("Biểu thức sai");
// // }

// // if (a > b) {
// //   console.log("Số a lớn hơn b");
// // } else if (a < b) {
// //   console.log("Số a bé hơn b");
// // } else {
// //   console.log("a bằng b");
// // }

// // if (a < b) {
// //   d = b - a;
// // }

// // if (a > b) {
// //   d = a - b;
// // } else {
// //   d = a + b;
// // }

// // console.log(d);

// // Bài tập:
// // 1. Khai báo 1 điểm số:
// // Nếu điểm đó bé hơn dưới 4 thì in ra màn hình: Đúp,
// // Dưới 6:

// // var studentScore = prompt("Enter your score: ");
// // console.log(studentScore);

// // if (studentScore >= 0 && studentScore < 4) {
// //   console.log("Đúp");
// // } else if (studentScore >= 4 && studentScore < 6) {
// //   console.log("Học lực trung bình");
// // } else if (studentScore >= 6 && studentScore < 8) {
// //   console.log("Học lực khá");
// // } else if (studentScore >= 8 && studentScore <= 10) {
// //   console.log("Học lực giỏi");
// // } else {
// //   console.log("Nhập sai");
// // }

// // Bài tập 2: Nhập vào 3 số a, b, c; Cho biết a, b, c có phải là độ dài của 3 cạnh tam giác không ? Nếu là tam gian thì đó là tam giác gì?

// // var a = prompt("Nhập a: ");
// // var b = prompt("Nhập b: ");
// // var c = prompt("Nhập c: ");

// // // Xét điều kiện xem đây có phải tạo thành hình tam giác hay không
// // if (a > 0 && b > 0 && c > 0) {
// //   // Loại tam giác
// //   if (a === b && b === c) {
// //     console.log("Đây là tam giác đều");
// //   } else if (a === b || b === c || c === a) {
// //     console.log("Đây là tam giác cân");
// //   } else if (
// //     a * a + b * b === c * c ||
// //     a * a + c * c === b * b ||
// //     b * b + c * c === a * a
// //   ) {
// //     console.log("Đây là tam giác vuông");
// //   } else {
// //     console.log("Đây là tam giác thường");
// //   }
// // } else {
// //   console.log("Ba cạnh không tạo thành một tam giác");
// // }

/* Nhập vào 3 số a, b, c. 
Giải phương trình bậc 2: a.x^2 + b.x + c = 0;
(Gợi ý tính căn bậc 2) Math.sqrt
Các trường hợp xảy ra: delta < 0, delta > 0, delta = 0 */

function nhapSo(message) {
  let input;
  do {
    input = prompt(message);
    if (input === null || input === "") {
      alert("Bạn phải nhập một số, vui lòng nhập lại.");
    } else if (isNaN(input)) {
      alert("Giá trị bạn nhập không phải là số, vui lòng nhập lại.");
    }
  } while (isNaN(input) || input === null || input === "");

  return parseFloat(input);
}

// Nhập vào 3 số a, b, c và kiểm tra
let a = nhapSo("Nhập vào số a:");
b = nhapSo("Nhập vào số b:");
c = nhapSo("Nhập vào số c:");

// Tính delta
let delta = b * b - 4 * a * c;

// Kiểm tra các trường hợp
if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`Phương trình có hai nghiệm phân biệt: x1 = ${x1} và x2 = ${x2}`);
} else if (delta == 0) {
  let x = -b / (2 * a);
  console.log(`Phương trình có nghiệm kép: x = ${x}`);
} else {
  console.log("Phương trình không có nghiệm thực");
}
