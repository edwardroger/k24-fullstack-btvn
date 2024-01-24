// 9. Khai báo một mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số thứ hai. Sử dụng arrow function

const arr = [];

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Nhập số thứ ${i + 1}`));
  while (isNaN(num)) {
    num = parseInt(
      prompt(
        `Giá trị bạn nhập không phải là số. Vui lòng nhập lại số thứ ${i + 1}: `
      )
    );
    arr.push(num);
  }
}

const sumOfNumLargest = (arr) => {
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
};

const result = sumOfNumLargest(arr);
console.log(`Tổng của hai số lớn nhất là: ${result}`);
