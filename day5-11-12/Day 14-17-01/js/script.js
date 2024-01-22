//Mảng trong JS
// var array  = [1, 2, 3, 4, 5, 6];
// console.log(array);
// console.log(array[2]);
// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//     console.log(`Phần tử thứ ${i} của mảng là ${array[i]}`);
// }

//Bài tập
// 1. Cho mảng sau: [5, 6, 4, 7, 9, 8, 10];
// Đây là bảng điểm của một lớp
// a. Tìm ra điểm số cao nhất?
// b. Tìm ra điểm số thấp nhất?

var diem = [5, 6, 4, 7, 9, 8, 10];
// var a = diem[0];
// for (let i = 1; i <= array.length; i++) {
//     if (a < diem[i]) a = diem[i];
// }
// console.log(`Điểm cao nhất lớp là ${a}`);
// a = diem[0];
// for (let j = 1; j <= array.length; j++) {
//     if (a > diem[j]) a = diem[j];
// } 
// console.log(`Điểm thấp nhất lớp là ${a}`);

// 2. Tính trung bình cộng của các điểm lẻ
// 3. Tính trung bình cộng của các điểm chẵn
// 4. Tính trung bình cộng của các điểm thấp nhất và cao nhất
// 5. Sắp xếp điểm theo thứ tự lớn đến bé
// 7. Sắp xếp điểm từ bé đến lớn
// 8. Khai báo một mảng gồm 10 số nguyên, Tính tổng số lớn nhất và nhỏ nhất
// 9. Khai báo một mảng gồm 10 số nguyên, Tính tổng số lớn nhất và số lớn thứ 2

// 2. 3. Tính trung bình cộng của các điểm lẻ, chẵn
// var le = [];
// var chan = [];
// for (let i = 0; i < diem.length; i++) {
//     if (diem[i] % 2 == 0) le.push(diem[i]);
//     if (diem[i] % 2 != 0) chan.push(diem[i]);
// }
// var b = 0;
// var c = 0;
// for (let i = 0; i < le.length; i++) {
//     b = b + le[i]
// }
// for (let i = 0; i < chan.length; i++) {
//     c = c + chan[i]
// }
// console.log(`Average of odd score is ${b / le.length}`);
// console.log(`Average of even score is ${c / chan.length}`);

// 5. Sắp xếp theo thứ tự từ lớn đến bé
// C1
// var m = [];
// for (let j = 0; j < diem.length; j++) {
//     var n = 0;
//     var o = 0;
//     for (let i = 0; i < diem.length; i++) {
//         if (n < diem[i]) {
//             n = diem[i]
//             o = i;
//         }
//     }
//     m.push(n);
//     delete diem[o];
// }
// console.log(m);
// console.log(diem);

// 8. Khai báo một mảng gồm 10 số nguyên, tổng số lớn nhất và nhỏ nhất?
// var len = parseInt(prompt('The length of array is?'));
// var array = [];
// for (let i = 0; i < len; i++) {
//     array.push(parseInt(prompt(`array[${i}] is: `)));
// }
// console.log(array);
// var min = array[0];
// var max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) min = array[i];
//     if (max < array[i]) max = array[i];
// }
// console.log(`Tổng của hai số nhỏ nhất và lớn nhất là ${min + max}`);