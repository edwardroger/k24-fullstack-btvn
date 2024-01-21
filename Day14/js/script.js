// Mảng trong JS
// [], [1], [2], [1, 23, 4, 5];
// var array = [7, 3, 4, 5, 2, 1, 6]; // index: hay còn gọi là key, vị trí (chỉ mục) của phần tử

// console.log(array);
// console.log(array[4]);
// console.log(array.length);
// for (var i = 0; i < array.length; i++) {
//   console.log("Phần tử thứ " + i + " của mảng là: " + array[i]);
// }

// Array.length: Tính độ dài của mảng
// Array.toString: Chuyển mảng về dạng String
// Array.pop(): Lấy phần tử cuối cùng ra khỏi mảng
// Array.push(): Thêm phần tử vào cuối mảng
// Array.shift: :Lấy ra phần tử đầu mảng
// Array.unshift: Thêm 1 phần tử vào cuối mảng

// Bài tập
// 1 . cho mảng sau: [5,6,4,7,9,8,10];
// Đây là mảng điểm của 1 lớp
// - Tìm ra điểm số cao nhất
// - Tìm ra điểm số thấp nhất

// Mảng điểm của lớp
console.log("=============== Bài 1 ================");
var diem = [5, 6, 4, 7, 9, 8, 10];

var diem_cao_nhat = diem[0];
var diem_thap_nhat = diem[0];

for (let i = 1; i < diem.length; i++) {
  diem_cao_nhat = Math.max(diem_cao_nhat, diem[i]);
  diem_thap_nhat = Math.min(diem_thap_nhat, diem[i]);
}

console.log(`Điểm cao nhất là: ${diem_cao_nhat}`);
console.log("=============== Bài 2 ================");

console.log(`Điểm thấp nhất là: ${diem_thap_nhat}`);

// 3. Tính trung bình cộng của các điểm lẻ
console.log("=============== Bài 3 ================");

var diemLe = diem.filter((x) => x % 2 !== 0);
var tbcDiemLe = diemLe.reduce((acc, cur) => acc + cur, 0) / diemLe.length;

console.log(`Trung bình cộng của các điểm lẻ là: ${tbcDiemLe}`);
// 4. Tính trung bình cộng của các điểm chắn
console.log("=============== Bài 4 ================");

var diemChan = diem.filter((x) => x % 2 === 0);
var tbcDiemChan = diemChan.reduce((acc, cur) => acc + cur) / diemChan.length;

console.log(`Trung bình cộng của các điểm chẵn là: ${tbcDiemChan}`);

// 5. Tính trung bình cộng của điểm thấp nhất và điểm cao nhất
console.log("=============== Bài 5 ================");

var diem_cao_nhat = Math.max(...diem);
var diem_thap_nhat = Math.min(...diem);
var tbcDiemMinMax = (diem_thap_nhat + diem_cao_nhat) / 2;

console.log(
  `Điểm trung bình cộng của điểm thấp nhất và điểm cao nhất: ${tbcDiemMinMax}`
);

// 6. Sắp xếp điểm từ lớn đến bé
console.log("=============== Bài 6 ================");

var highToLow = diem.slice().sort((a, b) => b - a);
console.log(`Sắp xếp điểm từ lớn đến bé: ${highToLow}`);

// 7. Sắp xép điểm từ bé đến lớn
console.log("=============== Bài 7 ================");

var LowToHigh = diem.slice().sort((a, b) => a - b);
console.log(`Sắp xếp điểm từ bé đến lớn: ${LowToHigh}`);

// 8. Khai báo một mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số nhỏ nhất.
console.log("=============== Bài 8 ================");

var intNumber = [8, 3, 10, 6, 7, 1, 9, 5, 4, 2];
var numMin = Math.min(...intNumber);
var numMax = Math.max(...intNumber);
var sumMinMax = (numMin + numMax) / 2;

console.log(`Tổng của số lớn nhất và nhỏ nhất là: ${sumMinMax}`);

// 9. Khai báo một mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số thứ hai
console.log("=============== Bài 9 ================");

intNumber.splice(intNumber.indexOf(numMax), 1);
var numSecondMax = Math.max(...intNumber);
var sumMaxAndSecondMax = (numMax + numSecondMax) / 2;

console.log(`Tổng của số lớn nhất và số thứ hai là: ${sumMaxAndSecondMax}`);
