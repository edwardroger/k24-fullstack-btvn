// var a = 8;

// if (a < 4) {
//    console.log('Đúp')
// }
// else if (a < 6) {
//   console.log('Học lực trung bình')
// }
// else if (a < 8) {
//   console.log('Học lực khá')
// }
// else if (a <= 10) {
//   console.log('Học lực giỏi')
// }
// else{
//   console.log('Điểm sai')
// }

// var a = 0
// var b = 5
// var c = 5

// if (a + b > c && a == b && a == c) {
//   console.log('đều')
// }
// else if (a > 0 && b > 0 && c > 0 && a + b > c && (a == b || b == c || c == a )) {
//          console.log('cân')
//          }
// else if (a > 0 && b > 0 && c > 0 && a + b > c && (((a*a + b*b) == c*c) || (a*a == (b*b + c*c)) ||((a*a + c*c) == b*b))){
//   console.log('vuông')
// }
// else if (a > 0 && b > 0 && c > 0 && a + b > c){
//   console.log('thường')
// }
// else{
//   console.log('Không phải tam giác')
// }
  

// BTVN

var a = prompt('a=');
var b = prompt('b=');
var c = prompt('c=');
var d = b**2 - 4*a*c;

if (a !== 0 && b !== 0) {
  if (d >= 0) {
    if (d > 0) {
      console.log('Có hai nghiệm lần lượt là: x1 = ' + ((-b + Math.sqrt(d)) / (2*a)) + ' và x2 = ' + ((-b - Math.sqrt(d)) / (2*a)));
    } else {
      console.log('Có nghiệm kép: x = ' + (-b / (2*a)));
    }
  } else {
    console.log('Không có nghiệm');
  }
} else if (a == 0 && b !== 0){
  console.log('x = ' + (-c/b));
} else {
  console.log('Vô nghiệm')
}

