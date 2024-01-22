// Khởi tạo mảng điểm
let scores = [5, 6, 4, 7, 9, 8, 10];

//1. Tìm điểm số cao nhất
let maxScore = scores[0]; // Khởi tạo maxScore bằng điểm đầu tiên
for(let i = 1; i < scores.length; i++) { // Lặp qua từng điểm trong mảng
    if(scores[i] > maxScore) { // Nếu điểm hiện tại lớn hơn maxScore
        maxScore = scores[i]; // Cập nhật maxScore
    }
}
console.log("Điểm số cao nhất: " + maxScore);

//2. Tìm điểm số thấp nhất
let minScore = scores[0]; // Khởi tạo minScore bằng điểm đầu tiên
for(let i = 1; i < scores.length; i++) { // Lặp qua từng điểm trong mảng
    if(scores[i] < minScore) { // Nếu điểm hiện tại nhỏ hơn minScore
        minScore = scores[i]; // Cập nhật minScore
    }
}
console.log("Điểm số thấp nhất: " + minScore);

//3. Tính trung bình cộng điểm lẻ
let sumOddScores = 0; // Tổng điểm lẻ
let countOddScores = 0; // Số lượng điểm lẻ
for(let i = 0; i < scores.length; i++) { // Lặp qua từng điểm trong mảng
    if(scores[i] % 2 !== 0) { // Nếu điểm hiện tại là số lẻ
        sumOddScores += scores[i]; // Cộng điểm hiện tại vào tổng
        countOddScores++; // Tăng số lượng điểm lẻ
    }
}
let avgOddScores = sumOddScores / countOddScores; // Tính trung bình cộng
console.log("Trung bình cộng điểm lẻ: " + avgOddScores);

//4. Tính trung bình cộng điểm chẵn
let sumEvenScores = 0; // Tổng điểm chẵn
let countEvenScores = 0; // Số lượng điểm chẵn
for(let i = 0; i < scores.length; i++) { // Lặp qua từng điểm trong mảng
    if(scores[i] % 2 === 0) { // Nếu điểm hiện tại là số chẵn
        sumEvenScores += scores[i]; // Cộng điểm hiện tại vào tổng
        countEvenScores++; // Tăng số lượng điểm chẵn
    }
}
let avgEvenScores = sumEvenScores / countEvenScores; // Tính trung bình cộng
console.log("Trung bình cộng điểm chẵn: " + avgEvenScores);

//5. Tính trung bình cộng điểm thấp nhất và cao nhất
let avgMinMax = (minScore + maxScore) / 2; // Cộng điểm thấp nhất và cao nhất, sau đó chia cho 2
console.log("Trung bình cộng điểm thấp nhất và điểm cao nhất: " + avgMinMax);

//6. Sắp xếp điểm từ lớn đến bé
let scoresDesc = [...scores]; // Tạo một bản sao của mảng điểm
for(let i = 0; i < scoresDesc.length; i++) { // Lặp qua từng điểm trong mảng
    for(let j = i + 1; j < scoresDesc.length; j++) { // Lặp qua từng điểm còn lại trong mảng
        if(scoresDesc[i] < scoresDesc[j]) { // Nếu điểm đầu nhỏ hơn điểm sau
            let temp = scoresDesc[i]; // Hoán đổi điểm đầu và điểm sau
            scoresDesc[i] = scoresDesc[j];
            scoresDesc[j] = temp;
        }
    }
}
console.log("Điểm từ lớn đến bé: " + scoresDesc);

//7. Sắp xếp điểm từ bé đến lớn
let scoresAsc = [...scores]; // Tạo một bản sao của mảng điểm
for(let i = 0; i < scoresAsc.length; i++) { // Lặp qua từng điểm trong mảng
    for(let j = i + 1; j < scoresAsc.length; j++) { // Lặp qua từng điểm còn lại trong mảng
        if(scoresAsc[i] > scoresAsc[j]) { // Nếu điểm đầu lớn hơn điểm sau
            let temp = scoresAsc[i]; // Hoán đổi điểm đầu và điểm sau
            scoresAsc[i] = scoresAsc[j];
            scoresAsc[j] = temp;
        }
    }
}
console.log("Điểm từ bé đến lớn: " + scoresAsc);

//8. Tổng số lớn nhất và số nhỏ nhất
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Khởi tạo mảng
let maxNum = arr[0]; // Khởi tạo maxNum bằng số đầu tiên
let minNum = arr[0]; // Khởi tạo minNum bằng số đầu tiên
for(let i = 1; i < arr.length; i++) { // Lặp qua từng số trong mảng
    if(arr[i] > maxNum) { // Nếu số hiện tại lớn hơn maxNum
        maxNum = arr[i]; // Cập nhật maxNum
    }
    if(arr[i] < minNum) { // Nếu số hiện tại nhỏ hơn minNum
        minNum = arr[i]; // Cập nhật minNum
    }
}
let sumMaxMin = maxNum + minNum; // Cộng số lớn nhất và số nhỏ nhất
console.log("Tổng số lớn nhất và số nhỏ nhất: " + sumMaxMin);

//9. Tổng số lớn nhất và số lớn thứ 2
let arrN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Khởi tạo mảng
let maxNum1 = arrN[0]; // Khởi tạo maxNum1 bằng số đầu tiên
let maxNum2 = arrN[0]; // Khởi tạo maxNum2 bằng số đầu tiên
for(let i = 1; i < arrN.length; i++) { // Lặp qua từng số trong mảng
    if(arrN[i] > maxNum1) { // Nếu số hiện tại lớn hơn maxNum1
        maxNum2 = maxNum1; // Cập nhật maxNum2 bằng maxNum1
        maxNum1 = arrN[i]; // Cập nhật maxNum1 bằng số hiện tại
    } else if(arrN[i] > maxNum2) { // Nếu số hiện tại lớn hơn maxNum2 nhưng nhỏ hơn maxNum1
        maxNum2 = arrN[i]; // Cập nhật maxNum2
    }
}
let sumMax1Max2 = maxNum1 + maxNum2; // Cộng số lớn nhất và số lớn thứ 2
console.log("Tổng số lớn nhất và số lớn thứ 2: " + sumMax1Max2);
