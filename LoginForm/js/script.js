document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    'input[name="email"], input[name="password"], input[name="confirmPassword"]'
  );

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const value = input.value.trim();
      const errorMessage = input.parentNode.querySelector(".error-message");
      const inputField = input.parentNode;
      let isValid = true;

      if (value === "") {
        errorMessage.textContent = `Don't pass empty ${input.name} !!!`;
        isValid = false;
      } else if (
        input.type === "text" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        errorMessage.textContent = "Invalid email format !!!";
        isValid = false;
      } else if (input.type === "password" && value.length < 8) {
        errorMessage.textContent =
          "Password must be at least 8 characters long !!!";
        isValid = false;
      }

      if (!isValid) {
        inputField.classList.add("input-field_errors");
      } else {
        errorMessage.textContent = "";
        inputField.classList.remove("input-field_errors");
      }
    });
  });
});
