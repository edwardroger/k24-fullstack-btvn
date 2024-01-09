// //1. Khai báo biến (variables)
// // var, let, const
// var number = 5; // var: khai báo ,number: tên biến, = : phép gán ;
// // let number = 10;
// // const number = 10;
// let string = "hello world + " + number;

// //JS : number, string , boolean , null , undefined ,array, object ,function ,symbol
// //khai báo 1 number : var number = 20 ;
// //khai báo 1 string ="helo"
// //khai báo 1 boolean = true ;( 0 la false,1 true)
// //khai báo 1 biến null : var number = null ;
// console.log("hehe");
// console.log(number);
// console.log(string);

//3 các toán tử trong js
// 3.1 Toán tử gán (=)
// ex: var a = 5 ;
// 3.2 Toán tử logic (&&, ||,!)
// 3.3 Toán tử cộng chuỗi (+)
// 3.4 Toán tử số học (+,-,*,/,%)
// 3.5 Toán tử so sánh (>,<,)
// var number1 = 20  ;
// var number2 = 7 ;
// console.log(number1 ++)
// 4 Câu điều kiện
// var a = 5;
// var b = 10;
// var c = "5 ";

// if (a < b) {
//   console.log('số a lớn hơn số b'){

//   }
//bài tập
// 1. khai báo 1 điểm số :
// Nếu điểm đó dưới 4 in ra màn hình học lực Đúp
// nếu điểm đó dưới 6 in ra màn hình học lực trung bình
// nếu điểm đó dưới 8 in ra màn hình học lực khá
// nếu điểm đó dưới 10 in ra màn hình học lực giỏi
// trường hợp nhập sai  in ra màn hình điểm sai

// var diem = prompt("nhap");

// if (diem < 4) {
//   console.log("Đúp học lại");
// } else if (diem < 6) {
//   console.log("Học lực trung bình");
// } else if (diem < 8) {
//   console.log("Học lực trung khá");
// } else if (diem < 10) {
//   console.log("Học lực giỏi ");
// } else {
//   console.log("điểm sai");
// }
// // Bài 2  nhập vào 3 số a, b, c ;
// cho biết a,b ,c có phải là độ dài của 3 cạnh tam giác hay không ?
// nếu là tam giác thì đó là tam giác gì

// var a = prompt("nhap a");
// var b = prompt("nhap b");
// var c = prompt("nhap c");

// if (a > 0 && b > 0 && c > 0) {
//   if (a + b > c && a + c > b && b + c > a) {
//     if (a === b && c === a) {
//       console.log("đây là tam giác cân ");
//     } else if (a === c || b === a || b === c) {
//       console.log("đây là tam giác đều");
//     } else if (
//       a ** 2 + b ** 2 === c ** 2 ||
//       c ** 2 + b ** 2 === a ** 2 ||
//       c ** 2 + a ** 2 === b ** 2
//     ) {
//       console.log("tam giác vuông");
//     } else {
//       console.log("tam giác thường");
//     }
//   }
// } else {
//   console.log("đây kp tam giác ");
// }
// BTVN nhập vào 3 số a,b,c giải pt bậc 2
// ax^2 + bx +c = 0;
// gợi ý Math.sqrt căn bậc 2
// các trường hợp xảy ra khi tính delta <0 ,>0 ,=0
// Giải bài tập
// Nhập vào 3 số a, b, c từ người dùng (ví dụ: a = 1, b = -3, c = 2)
let a = "Nhập vào số a:";
let b = "Nhập vào số b:";
let c = "Nhập vào số c:";

// Tính delta
let delta = b * b - 4 * a * c;

// Kiểm tra các trường hợp
if (delta < 0) {
  console.log("Phương trình vô nghiệm");
} else if (delta === 0) {
  let x = -b / (2 * a);
  console.log("Phương trình có nghiệm kép x =", x);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log("Phương trình có hai nghiệm phân biệt:");
  console.log("x1 =", x1);
  console.log("x2 =", x2);
}
