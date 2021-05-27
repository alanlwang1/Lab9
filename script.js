// Custom error class 
class ArithmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = "Arithmetic";
  }
}

let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', () => {
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  try {
    // Throw custom error if divide by zero
    if (operator == "/" && secondNum == "0") {
      throw new ArithmeticError("divide by zero");
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    if (err instanceof ArithmeticError) {
      console.error("ArithmeticError: " + err.message);
    } else { // For other cases of invalid input 
      console.error("Invalid data");
    }
  } finally {
    document.querySelector('#first-num').value = null;
    document.querySelector('#second-num').value = null;
    document.querySelector('#operator').value = null;
  }

});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
// TODO - Make buttons functional

// Console Log button 
const logBtn = errorBtns[0];
logBtn.addEventListener("click", () => {
  console.log("Console Log Demo");
});

// Console Error button 
const errorBtn = errorBtns[1];
errorBtn.addEventListener("click", () => {
  console.error("Console Error Demo");
});

// Console Dir button 
const dirBtn = errorBtns[2];
dirBtn.addEventListener("click", () => {
  console.dir(dirBtn);
});

// Console Dirxml button 
const dirXmlBtn = errorBtns[3];
dirXmlBtn.addEventListener("click", () => {
  console.dirxml(document);
});

// Console Group Start button 
const grpStartBtn = errorBtns[4];
const grpLabel = "A group of console messages";
grpStartBtn.addEventListener("click", () => {
  console.group(grpLabel);
});

// Console Group End button 
const grpEndBtn = errorBtns[5];
grpEndBtn.addEventListener("click", () => {
  console.groupEnd(grpLabel);
});

// Console Table button 
const tableBtn = errorBtns[6];
tableBtn.addEventListener("click", () => {
  console.table([{ name: "Mike Wazowski", id: "123" }, { name: "Shrek", id: "456" }]);
});

// Console Timer Start button 
const timerStartBtn = errorBtns[7];
timerStartBtn.addEventListener("click", () => {
  console.time();
});

// Console Timer End button 
const timerEndBtn = errorBtns[8];
timerEndBtn.addEventListener("click", () => {
  console.timeEnd();
});

// Console Trace button
const traceBtn = errorBtns[9];
const eeny = () => { meeny() };
const meeny = () => { miny() };
const miny = () => { moe() };
const moe = () => { console.trace() };
traceBtn.addEventListener("click", () => {
  eeny();
});

// Global error handler 
window.onerror = (function (msg, url, lineNo, columnNo, error) {
  console.log("An global error has occurred.");
});

// Console Global Error button
const globalErrBtn = errorBtns[10];
globalErrBtn.addEventListener('click', () => {
  imbroken();
});
