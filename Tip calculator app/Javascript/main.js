"use strict";
console.log("main.js");
//ALL HTML ELEMENTS
const htmlEls = {
  billInput: document.getElementById("inputBill"),
  customInput: document.getElementById("inputCustomPercent"),
  peopleInput: document.getElementById("inputPeople"),
  tipAmount: document.getElementById("tipAmount"),
  totalAmount: document.getElementById("totalAmount"),
  errorText1: document.getElementById("errorText1"),
  errorText2: document.getElementById("errorText2"),
  allPercentBtns: document.querySelectorAll(".btnPercent"),
  resetBtn: document.getElementById("resetBtn"),
};

// ALL EVENT LISTENERS
htmlEls.billInput.addEventListener("input", () => {
  let billValue = htmlEls.billInput.value;
  let errorText = htmlEls.errorText1;
  checkIfAnyInput();
  if (noError(billValue, errorText, 100000)) {
    removeClass(htmlEls.billInput, "errorOutline");
    renderPayment();
  } else {
    addClass(htmlEls.billInput, "errorOutline");
    renderPayment();
  }
});
htmlEls.customInput.addEventListener("input", () => {
  checkIfAnyInput();
  let percentValue = htmlEls.customInput.value;
  if (percentValue)
    if (customNoError(percentValue, 101)) {
      removeActiveBtn();
      removeClass(htmlEls.customInput, "errorOutline");
      renderPayment();
    } else {
      addClass(htmlEls.customInput, "errorOutline");
      renderPayment();
    }
});
htmlEls.peopleInput.addEventListener("input", () => {
  checkIfAnyInput();
  let peopleValue = htmlEls.peopleInput.value;
  let errorText = htmlEls.errorText2;
  if (noError(peopleValue, errorText, 101)) {
    removeClass(htmlEls.peopleInput, "errorOutline");
    renderPayment();
  } else {
    addClass(htmlEls.peopleInput, "errorOutline");
    renderPayment();
  }
});
htmlEls.allPercentBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    htmlEls.customInput.value = "";
    const currentValue = event.target.value;
    if (findActiveBtn() === "none") {
      event.target.classList.add("activePercentBtn");
      console.log("currentValue ===", currentValue);
    } else {
      removeActiveBtn();
      event.target.classList.add("activePercentBtn");
    }
    checkIfAnyInput();
    renderPayment();
  });
});
htmlEls.resetBtn.addEventListener("click", () => {
  resetAll();
  checkIfAnyInput();
});
//All functions
function calcTip() {
  const percentTip = calcPercentTip();
  const tip = (
    (htmlEls.billInput.value * (percentTip * 0.01 + 1) -
      htmlEls.billInput.value) /
    htmlEls.peopleInput.value
  ).toFixed(2);
  !isNaN(parseInt(tip)) ? (htmlEls.tipAmount.textContent = `$${tip}`) : "";
}
function calcTotal() {
  const percentTip = calcPercentTip();
  const total = (
    (htmlEls.billInput.value * (percentTip * 0.01 + 1)) /
    htmlEls.peopleInput.value
  ).toFixed(2);
  !isNaN(parseInt(total))
    ? (htmlEls.totalAmount.textContent = `$${total}`)
    : "";
}
function calcPercentTip() {
  let percentTip;
  if (findActiveBtn() === "none") {
    if (htmlEls.customInput.value) {
      percentTip = htmlEls.customInput.value;
    } else {
      return;
    }
  } else {
    percentTip = htmlEls.allPercentBtns[findActiveBtn()].value;
  }
  return percentTip;
}
function addTextContent(dest, text) {
  dest.textContent = text;
}
function noError(value, dest, maxNum) {
  if (isNaN(value)) {
    addTextContent(dest, "Value not a number");
    return false;
  } else if (value >= maxNum) {
    addTextContent(dest, "Value too large");
    return false;
  } else if (value < 0) {
    addTextContent(dest, "Enter positive value");
    return false;
  } else if (value == 0) {
    addTextContent(dest, "Can't be zero");
    return false;
  } else {
    addTextContent(dest, "");
    return true;
  }
}
function customNoError(value, maxNum) {
  if (isNaN(value) || value >= maxNum || value < 0) {
    return false;
  } else {
    return true;
  }
}
function addClass(dest, className) {
  dest.classList.add(className);
}
function removeClass(dest, className) {
  dest.classList.remove(className);
}
function renderPayment() {
  if (
    htmlEls.errorText1.textContent === "" &&
    htmlEls.errorText2.textContent === "" &&
    customNoError(htmlEls.customInput.value, 101)
  ) {
    calcTip();
    calcTotal();
  } else {
    htmlEls.tipAmount.textContent = "error";
    htmlEls.totalAmount.textContent = "error";
  }
}
function resetPercentBtns() {
  htmlEls.allPercentBtns.forEach((btn) =>
    btn.classList.remove("activePercentBtn")
  );
}
function resetAll() {
  htmlEls.billInput.value = "";
  htmlEls.customInput.value = "";
  htmlEls.peopleInput.value = "";
  resetPercentBtns();
  htmlEls.tipAmount.textContent = "$0.00";
  htmlEls.totalAmount.textContent = "$0.00";
}
function findActiveBtn() {
  let returnEl = "none";
  htmlEls.allPercentBtns.forEach((btn, index) => {
    if (btn.classList.contains("activePercentBtn")) {
      returnEl = index;
    }
  });
  return returnEl;
}

function removeActiveBtn() {
  if (findActiveBtn() !== "none") {
    htmlEls.allPercentBtns[findActiveBtn()].classList.remove(
      "activePercentBtn"
    );
  } else {
    console.log("no active btn");
  }
}
function checkIfAnyInput() {
  if (
    htmlEls.billInput.value !== "" ||
    htmlEls.customInput.value !== "" ||
    htmlEls.peopleInput.value !== "" ||
    findActiveBtn() !== "none"
  ) {
    htmlEls.resetBtn.disabled = false;
    htmlEls.resetBtn.classList.remove("resetBtnDisabled");
    htmlEls.resetBtn.classList.add("resetBtnActive");
  } else {
    htmlEls.resetBtn.disabled = true;
    htmlEls.resetBtn.classList.add("resetBtnDisabled");
    htmlEls.resetBtn.classList.remove("resetBtnActive");
  }
}