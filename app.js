const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
// console.log(buttons);

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let displayString = display.innerText.toString();
      display.innerText = displayString.slice(0, -1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 1000);
    } else {
      display.innerText += item.id;
    }
  };
});

const modeToggleBtn = document.querySelector(".mode-toggle");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggle-icon");
let isDark = true;
modeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  modeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
