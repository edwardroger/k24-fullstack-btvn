//1. Mảng trong JS
//[], [1], [1, 2, 3, ,4 ,5 ,6 ,7];
// var array = [7, 5, 3, 4, 1, 2, 7];
// console.log(array);
// console.log(array[2]);
// console.log(array.length);

// for (let index = 0; index < array.length; index++) {
//     console.log('phần tử thứ '+ index + 'của mảng là: ' + array[index]);
    
// }

//Bài Tập
// 1.
// var array = [5, 6, 4, 7, 9, 8, 10];

// var MIN = array[0];
// for (let index = 1; index < array.length; index++) {
//     if(array[index] < MIN){
//         MIN = array[index]
//     }
// }
// console.log(MIN);


//3.
// var array = [5, 6, 4, 7, 9, 8, 10];
// let sumsole= 0;
// let demsole = 0;
// let sumsochan= 0;
// let demsochan = 0;
// for (let i=0 ; i<array.length; i++){
//     if(array[i] % 2 !== 0){
//         sumsole +=array[i];
//         demsole++;
//     }else{
//         sumsochan +=array[i];
//         demsochan++;
//     }
// }
// const tbcsole= sumsole/demsole;
// const tbsochan= sumsochan/demsochan;
// console.log(tbcsole);
// console.log(tbsochan);

// 5.
// var array = [5, 6, 4, 7, 9, 8, 10];
// var MIN = array[0];
// var MAX = array[0];
// for (let i=1 ; i<array.length; i++){
//     if(MIN > array[i]){
//         MIN = array[i];
//     }
//     if(MAX < array[i]){
//         MAX = array[i]
//     }
// }
// console.log('điểm cao nhất là: ' + MAX);
// console.log('Điểm thấp nhất là: ' + MIN);
// const tbcdiemthapvacao = (MAX + MIN)/2;
// console.log('Trung bình cộng của 2 điểm là: ' + tbcdiemthapvacao);

// 6.
// var array = [5, 6, 4, 7, 9, 8, 10];
// function sapXep(array){
// var trungGian;
// var n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++){
//             if(array[j] > array[i]){
//                 trungGian = array[i];
//                 array[i] = array[j];
//                 array[j] = trungGian;
//             }
//         }
//     }
// }
// sapXep(array)
// console.log('sắp xếp theo thứ tự từ lớn đến bé là: ' + array);

// 7.
// var array = [5, 6, 4, 7, 9, 8, 10];
// function sapXep(array){
// var trungGian;
// var n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++){
//             if(array[j] < array[i]){
//                 trungGian = array[i];
//                 array[i] = array[j];
//                 array[j] = trungGian;
//             }
//         }
//     }
// }
// sapXep(array)
// console.log('sắp xếp theo thứ tự từ bé đến lớn là: ' + array);

// 8.
// var array = [2, 1, 3, 5, 6, 4, 7, 9, 8, 10];
// console.log('Dãy số bạn nhập là' + array);
// function tongSoBeVaSoLon(array) {
//     var trungGian;
//     var n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i+1; j < n; j++) {
//             if(array[j] < array[i]){
//                 trungGian = array[i];
//                 array[i] = array[j];
//                 array[j] = trungGian;
//             }
//         }
//     }
// }
// tongSoBeVaSoLon(array)
// const lastNumber = array.pop();
// const firstNumber = array.shift();

// const sum = firstNumber + lastNumber;

// console.log("Số đầu: " + firstNumber);
// console.log("Số cuối: " + lastNumber);
// console.log("Tổng: " + sum);




var array = [2, 1, 3, 5, 6, 4, 7, 9, 8, 10];
function sumMax1VaMax2(array){
    var trungGian;
    var n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] < array[j]){
                trungGian = array[i]
                array[i] = array[j]
                array[j] = trungGian
            }
        }
    }
}
sumMax1VaMax2(array);
console.log(array);
const max1 = array.shift();
const max2 = array.shift();

const sum = max1 + max2;
console.log(sum);





