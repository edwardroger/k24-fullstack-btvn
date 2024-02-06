const appendToResult = (value)  => {
    var result = document.getElementById("result");
    result.value += value;
}
const calculateResult = () => {
    var result = document.getElementById("result");
    var expression = result.value;
    var calculatedResult = eval(expression);
    result.value = calculatedResult;
}
const clearResult = () => {
    var result = document.getElementById("result");
    result.value = "";
}