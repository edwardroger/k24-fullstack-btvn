document.addEventListener("DOMContentLoaded", function () {
    var display = document.querySelector('.display input');
    var buttons = document.querySelectorAll('.btn');
    var isEqualPressed = false;

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            
            var currentInput = display.value;
            var buttonValue = button.value;

            if (buttonValue === '=') {
                try {
                    var result = math.evaluate(currentInput)
                    display.value = formatResult(result);
                    isEqualPressed = true;
                    if (buttonValue ) {
                        
                    }
                } catch (error) {
                    alert('Error');                    
                }
            } else if (buttonValue === 'AC') {
                display.value = '';
                isEqualPressed = false;
            } else {
                if (isEqualPressed) {
                    display.value = buttonValue;
                    isEqualPressed = false;
                } else {                   
                        display.value += buttonValue;
                }
            }
        });
    });
    function formatResult(result) {
        if (Number.isInteger(result)) {
            return result;
        } else {
            return result.toFixed(2);
        }
    };
});
