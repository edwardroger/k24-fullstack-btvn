//Bài 1,2
var diem = [5, 6, 4, 7, 9, 8, 10];

var min = diem[0];
var max = diem[0];
for (var i = 1; i < diem.length; i++) {
  if (diem[i] < min) {
    min = diem[i];
  }

  if (diem[i] > max) {
    max = diem[i];
  }
}

console.log("Điểm số thấp nhất là:", min);
console.log("Điểm số cao nhất là:", max);
// Bài 3,4

var diem = [5, 6, 4, 7, 9, 8, 10];

var tongDiemLe = 0;

var soLuongDiemLe = 0;

var tongDiemChan = 0;

var soLuongDiemChan = 0;

for (var i = 0; i < diem.length; i++) {
  if (diem[i] % 2 !== 0) {
    tongDiemLe += diem[i];
    soLuongDiemLe++;
  } else {
    tongDiemChan += diem[i];
    soLuongDiemChan++;
  }
}

var trungBinhCongDiemLe = soLuongDiemLe > 0 ? tongDiemLe / soLuongDiemLe : 0;
var trungBinhCongDiemChan =
  soLuongDiemChan > 0 ? tongDiemChan / soLuongDiemChan : 0;

console.log("Trung bình cộng điểm lẻ là: " + trungBinhCongDiemLe);
console.log("Trung bình cộng điểm chẵn là: " + trungBinhCongDiemChan);
//Bài 5

var mangDiem = [5, 6, 4, 7, 9, 8, 10];

var diemThapNhat = Math.min.apply(null, mangDiem);
var diemCaoNhat = Math.max.apply(null, mangDiem);

var trungBinhCong = (diemThapNhat + diemCaoNhat) / 2;

console.log("Điểm thấp nhất: " + diemThapNhat);
console.log("Điểm cao nhất: " + diemCaoNhat);
console.log(
  "Trung bình cộng của điểm thấp nhất và điểm cao nhất là: " + trungBinhCong
);
// Bài 6,7

var mangDiem = [5, 6, 4, 7, 9, 8, 10];

var diemLonNhatDenBe = mangDiem.slice().sort(function (a, b) {
  return b - a;
});

// 7. Sắp xếp điểm từ bé đến lớn
var diemBeNhatDenLon = mangDiem.slice().sort(function (a, b) {
  return a - b;
});

console.log("Sắp xếp điểm từ lớn đến bé: " + diemLonNhatDenBe);
console.log("Sắp xếp điểm từ bé đến lớn: " + diemBeNhatDenLon);
// Bài 8

var mangSoNguyen = [5, 12, 8, 3, 17, 6, 10, 9, 15, 4];

var tongSoLonNhat = Math.max.apply(null, mangSoNguyen);
var tongSoNhoNhat = Math.min.apply(null, mangSoNguyen);

console.log("Tổng số lớn nhất: " + tongSoLonNhat);
console.log("Tổng số nhỏ nhất: " + tongSoNhoNhat);
// Bài 9
// Khai báo mảng gồm n số nguyên (n = 20)
var n = 20;
var mangSoNguyen = [
  15, 8, 23, 10, 7, 18, 14, 25, 20, 12, 30, 27, 35, 16, 22, 28, 32, 19, 26, 21,
];

var mangDaSapXep = mangSoNguyen.slice().sort(function (a, b) {
  return b - a;
});

var tongSoLonNhat = mangDaSapXep[0];
var tongSoLonThuHai = mangDaSapXep[1];

console.log("Tổng số lớn nhất: " + tongSoLonNhat);
console.log("Tổng số lớn thứ hai: " + tongSoLonThuHai);
