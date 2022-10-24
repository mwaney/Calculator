const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let modeText = document.querySelector(".modeText");

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

const modeToggleBtn = document.querySelector(".slider");
const calculator = document.querySelector(".calculator");
let isDark = true;
modeText.innerText = "Dark Mode";
modeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  modeText.classList.toggle("dark");
  modeToggleBtn.classList.toggle("active");
  isDark
    ? (modeText.innerText = "Light Mode")
    : (modeText.innerText = "Dark Mode");
  isDark = !isDark;
};
