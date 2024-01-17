//Bài tập
// 1. Tính tổng các số chẵn <= 20
// 2. In ra các số chia hết cho 5, < 1000
// 3. Tính tiền nhập vào từ ngân hàng sau n tháng
// - Số tiền, số tháng nhập từ bàn phím
// - Lãi suất: 5%/tháng
// - In ra
// 4. Tính giai thừa của số n nhập vào từ bàn phím
// 5. Nhập vào n, in ra các số nguyên tố < n

// 1. 
// var a = 0;
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         a += i;
//     }
// }
// console.log(a);

// 2.
// for (let i = 0; i <= 1000; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }

// 3. 
// var x = prompt('Số tiền gửi vào: ')
// var y = prompt('Thời gian gửi: (tháng) ')

// for (let i = 1; i <= y; i++) {
//     x = x * (1 + 0.05);
// } 
// console.log('Số tiền nhận được sau' + y + 'tháng là: ' + x);

// 4. 
// var z = prompt('Nhập vào số bất kỳ để tính giai thừa: ')
// for (let i = z - 1; i > 0; i--) {
//     z = z * i;
// }
// document.write('Giai thừa của số đó là: ' + z);

//5. 
var m = prompt('Nhập vào một số tự nhiên bất kỳ lớn hơn 4: ');
if (m >= 4) {
    console.log('Các số nguyên tố nhỏ hơn ' + m + ' là:');
    console.log(2);
    console.log(3);
    for (let i = 5; i < m; i += 2) {
        var n = true;
        for (let j = 2; j < i / 2; j++) {
            if (i % j == 0) {
                n = false;
                break;
            }
        }
        if (n == true) {
            console.log(i);
        }
    }    
} else {
    console.log('Đọc lại đề bài nhóe');
}