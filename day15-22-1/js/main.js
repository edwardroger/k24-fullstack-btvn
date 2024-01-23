
function sumMax1Max2(arr){
    var n = arr.length ;
    var tg;
    if (n<2) {
        console.log('Mảng gồm ít nhất 2 phần tử')
        return
    }
    for (let i = 0; i < n-1; i++){
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                tg = arr[i]
                arr[i] = arr[j]
                arr[j] = tg
            }
        }
    }
        var max = arr[0];
        var max2 = arr[1];
        var sumMaxMax2 = max + max2;
        console.log("Tổng số lớn nhất và số lớn thứ 2 là: " + sumMaxMax2);
}
var n = parseInt(prompt("Nhập số phần tử của mảng:"));
var inputArray = [];

for (let i = 0; i < n; i++) {
        const number = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
        inputArray.push(number);
    }
    sumMax1Max2(inputArray)