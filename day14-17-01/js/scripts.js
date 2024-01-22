// 1. Cho mảng sau: [5, 6, 4, 7, 9, 8, 10];
let scores = [5, 6, 4, 7, 9, 8, 10];

// Điểm số cao nhất
let maxScore = Math.max(...scores);
console.log("Điểm số cao nhất: " + maxScore);

// 2. Điểm số thấp nhất
let minScore = Math.min(...scores);
console.log("Điểm số thấp nhất: " + minScore);

// 3. Tính trung bình cộng của các điểm lẻ
let oddScores = scores.filter(score => score % 2 !== 0);
let avgOddScores = oddScores.reduce((a, b) => a + b, 0) / oddScores.length;
console.log("Trung bình cộng điểm lẻ: " + avgOddScores);

// 4. Tính trung bình cộng các điểm chẵn
let evenScores = scores.filter(score => score % 2 === 0);
let avgEvenScores = evenScores.reduce((a, b) => a + b, 0) / evenScores.length;
console.log("Trung bình cộng điểm chẵn: " + avgEvenScores);

// 5. Tính trung bình cộng của điểm thấp nhất và điểm cao nhất
let avgMinMax = (minScore + maxScore) / 2;
console.log("Trung bình cộng điểm thấp nhất và cao nhất: " + avgMinMax);

// 6. Sắp xếp điểm từ lớn -> bé
let scoresDesc = [...scores].sort((a, b) => b - a);
console.log("Điểm từ lớn đến bé: " + scoresDesc);

// 7. Sắp xếp điểm từ bé -> lớn
let scoresAsc = [...scores].sort((a, b) => a - b);
console.log("Điểm từ bé đến lớn: " + scoresAsc);

// 8. Khai báo 1 mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số nhỏ nhất.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNum = Math.max(...array);
let minNum = Math.min(...array);
let sumMaxMin = maxNum + minNum;
console.log("Tổng số lớn nhất và nhỏ nhất: " + sumMaxMin);

// 9. Khai báo 1 mảng gồm n số nguyên. Tính tổng số lớn nhất và số lớn thứ 2.
let nArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
nArray.sort((a, b) => b - a);
let sumMaxSecondMax = nArray[0] + nArray[1];
console.log("Tổng số lớn nhất và số lớn thứ 2: " + sumMaxSecondMax);
