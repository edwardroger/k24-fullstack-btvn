// 1. Cho mảng sau: [5, 6, 4, 7, 9, 8, 10];
let scores = [5, 6, 4, 7, 9, 8, 10];

// Điểm số cao nhất
let maxScore = scores[0];
for(let i = 1; i < scores.length; i++) {
    if(scores[i] > maxScore) {
        maxScore = scores[i];
    }
}
console.log("Điểm số cao nhất: " + maxScore);

// 2. Điểm số thấp nhất
let minScore = scores[0];
for(let i = 1; i < scores.length; i++) {
    if(scores[i] < minScore) {
        minScore = scores[i];
    }
}
console.log("Điểm số thấp nhất: " + minScore);

// 3. Tính trung bình cộng của các điểm lẻ
let sumOddScores = 0;
let countOddScores = 0;
for(let i = 0; i < scores.length; i++) {
    if(scores[i] % 2 !== 0) {
        sumOddScores += scores[i];
        countOddScores++;
    }
}
let avgOddScores = sumOddScores / countOddScores;
console.log("Trung bình cộng điểm lẻ: " + avgOddScores);

// 4. Tính trung bình cộng các điểm chẵn
let sumEvenScores = 0;
let countEvenScores = 0;
for(let i = 0; i < scores.length; i++) {
    if(scores[i] % 2 === 0) {
        sumEvenScores += scores[i];
        countEvenScores++;
    }
}
let avgEvenScores = sumEvenScores / countEvenScores;
console.log("Trung bình cộng điểm chẵn: " + avgEvenScores);

// 5. Tính trung bình cộng của điểm thấp nhất và điểm cao nhất
let avgMinMax = (minScore + maxScore) / 2;
console.log("Trung bình cộng điểm thấp nhất và điểm cao nhất: " + avgMinMax);

// 6. Sắp xếp điểm từ lớn -> bé
let scoresDesc = [...scores];
for(let i = 0; i < scoresDesc.length; i++) {
    for(let j = i + 1; j < scoresDesc.length; j++) {
        if(scoresDesc[i] < scoresDesc[j]) {
            let temp = scoresDesc[i];
            scoresDesc[i] = scoresDesc[j];
            scoresDesc[j] = temp;
        }
    }
}
console.log("Điểm từ lớn đến bé: " + scoresDesc);

// 7. Sắp xếp điểm từ bé -> lớn
let scoresAsc = [...scores];
for(let i = 0; i < scoresAsc.length; i++) {
    for(let j = i + 1; j < scoresAsc.length; j++) {
        if(scoresAsc[i] > scoresAsc[j]) {
            let temp = scoresAsc[i];
            scoresAsc[i] = scoresAsc[j];
            scoresAsc[j] = temp;
        }
    }
}
console.log("Điểm từ bé đến lớn: " + scoresAsc);

// 8. Khai báo 1 mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số nhỏ nhất.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNum = arr[0];
let minNum = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maxNum) {
        maxNum = arr[i];
    }
    if(arr[i] < minNum) {
        minNum = arr[i];
    }
}
let sumMaxMin = maxNum + minNum;
console.log("Tổng số lớn nhất và số nhỏ nhất: " + sumMaxMin);

// 9. Khai báo 1 mảng gồm n số nguyên. Tính tổng số lớn nhất và số lớn thứ 2.
let arrN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNum1 = arrN[0];
let maxNum2 = arrN[0];
for(let i = 1; i < arrN.length; i++) {
    if(arrN[i] > maxNum1) {
        maxNum2 = maxNum1;
        maxNum1 = arrN[i];
    } else if(arrN[i] > maxNum2) {
        maxNum2 = arrN[i];
    }
}
let sumMax1Max2 = maxNum1 + maxNum2;
console.log("Tổng số lớn nhất và số lớn thứ 2: " + sumMax1Max2);
