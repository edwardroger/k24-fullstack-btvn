const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultOutput = document.getElementById("result");


const subtractBtn = () =>{
    let value = document.getElementById("subtract");
    let  num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    resultOutput.textContent = 'Kết quả trừ: ' + result;
};

const multiplyBtn = () =>{
    let value = document.getElementById("multiply");
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    resultOutput.textContent = 'Kết quả nhân: '+ result;
};

const divideBtn = () =>{
    let value = document.getElementById("divide");
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    const result = num1 / num2;
    resultOutput.textContent = 'Kết quả chia: '+ result;
};
