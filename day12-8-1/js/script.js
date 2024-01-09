//1.Khai báo biến(variables)
// var, let, const
// var number = 5;//var khai báo, number: tên biến, = :phép gán
//let number = 10;//tương tự
//const number = 15; //tương tự
// let string ='hello world 2'

//2.các kiểu dữ liệu trong js
//JS: number, string, boolean, null, undefined, array, obje
//khai báo 1 number: var number = 20;
//khai báo 1 string : var string = 'this is string'
//khai báo 1 boolean: var bool = true;(0 hoặc 1)

// console.log('Hello world');
// console.log(number);
// console.log(string);

//3. Các toán tử trong JS:
//3.1 Toán tử gán:(=)
//Ex: var a=5;
//3.2 Toán tử logic:(&&, ||, !)
//3.3 Toán tử cộng chuỗi: (+)
//3.4 Toán tử số học: (+, -, *, /, %, ++, --, **)
    // var a=5;
    // var b=6;
    // var c= a+b;
    // console.log(c);

//3.5 Toán tử so sánh: (>, <, >=; <=; ==, ===, !=)
//3.6 Toán tử 3 ngôi: (?:, ??)

// Baif Tập:
// 1. Khai báo 1 điểm sô:
// nếu điểm đó dưới 4 thì in ra màn hình: đúp
// nếu điểm đó dưới 6 thì in ra màn hình: Học lực trung bình
// nếu dưới 8 in ra học lực khá
// dưới 10 in ra học lục giỏi;
// trường họp sai in ra điểm sai 

// var diem=4;
// if(diem >=0 && diem < 4){
//     console.log("Đúp");
// }else if(diem >=4 && diem < 6){
//     console.log("Học lực trung bình");
// }else if(diem >=6 && diem < 8){
//     console.log("Học lực khá");
// }else if(diem >=8 && diem =< 10 ){
//     console.log("Học lực giỏi");
// } else {
//     console.log("Điểm sai")
// }

var a = prompt('nhap a');
var b = prompt('Nhap b');
var c = prompt('nhap c');

if(a==0){
    if(b!=0){
        x=-c/b;
        console.log('Phương trình có nghiệm duy nhất x:');
        console.log(x)
    }else{
        if(c==0){
            console.log('Phương trình vô số nghiệm');
        }else{
            console.log('Phương trình vô nghiệm');
        }
    }
}else{
    var dental=b*b-4*a*c;
    var x1;
    var x2;
    if(delta>0){
        x1=(-b+Math.sqrt(dental))/(2*a);
        x2=(-b-Math.sqrt(dental))/(2*a);
        console.log('Phương trình có 2 nghiệm phân biệt');
        console.log('x1 có giá trị: ');
        console.log(x1);
        console.log('x2 có giá trị: ');
        console.log(x2);
    }else if(dental==0){
        x1=-b / 2 * a;
        console.log('Phương trình có nghiệm kép');
        console.log('x1 = x2 = ');
        console.log(x1);
    }else{
        console.log('phương trình vô nghiệm');
    }
}