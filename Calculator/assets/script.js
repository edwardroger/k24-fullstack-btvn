let display = document.getElementById("inputext");

let calculate = (number) => {
  display.value += number;
};

let result = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    alert("Enter the valid input!");
  }
};

function clr() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}
