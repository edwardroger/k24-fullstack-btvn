
// var sotien = parseFloat(prompt("Nhập số tiền ban đầu: "));
// var sothang = parseInt(prompt("Nhập số tháng: "));
// var laisuat = 0.05;
//     for (let i = 0; i < sothang; i++) {
//       sotien += sotien * laisuat;
//     }
//   console.log(`Số tiền nhận được sau ${sothang} tháng là: ${sotien}`);

// var n = prompt('nhập n giai thừa: ');
// var giaithua;
// for (let index = 1; index <= n; index++) {
//     giaithua = index * ( index - 1 );
// } 
// console.log(giaithua);


var n = prompt(' nhap so n')
function songuyento(num) {
    if(num < 1){
        return false;
    }
      
  for ( let index = 2; index* index <= num; index++) {
    if (num % index == 0) {
        return false
    }
  }
    return true;
}
for (let index = 2; index < n; index++) {
    if (songuyento(index)) {
        console.log(index);
    }
  }