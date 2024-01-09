/* nhập vào 3 số a,b,c
giải phương trình bậc 2: a.x^2 + b.x + c = 0
Gợi ý: Math.sqrt(tính căn bậc 2)
các trường hợp xảy ra: delta < 0, delta > 0, delta = 0 */

var a = prompt('Nhập a: ');
var b = prompt('Nhập b: ');
var c = prompt('Nhập c: ');

var delta = (b * b) - (4 * a *c);

if (delta < 0) {
    console.log('Phương trình vô nghiệm');
} else if (delta > 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm phân biệt: ");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
}else {
    var x = (-b/(2 * a));
    console.log("Phương trình có nghiệm kép: ");
    console.log("x = " + x);

}

