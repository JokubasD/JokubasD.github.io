'use strict';
console.log('main.js');
//ALL HTML ELEMENTS
const htmlEls = {
    billInput: document.getElementById('inputBill'),
    customInput: document.getElementById('inputCustomPercent'),
    peopleInput: document.getElementById('inputPeople'),
    tipAmount: document.getElementById('tipAmount'),
    totalAmount: document.getElementById('totalAmount'),
    errorText1: document.getElementById('errorText1'),
    errorText2: document.getElementById('errorText2'),
}
// ALL EVENT LISTENERS
htmlEls.billInput.addEventListener('input', () => {
    let billValue = htmlEls.billInput.value
    let errorText = htmlEls.errorText1
    if (noError(billValue, errorText, 100000)){
        removeClass(htmlEls.billInput, 'errorOutline')
        renderPayment()
    } else{
        addClass(htmlEls.billInput, 'errorOutline')
        renderPayment()
    }
})
htmlEls.customInput.addEventListener('input', () => {
    renderPayment()
    let percentValue = htmlEls.customInput.value
    if (customNoError(percentValue, 101)){
        removeClass(htmlEls.customInput, 'errorOutline')
        renderPayment()
    } else{
        addClass(htmlEls.customInput, 'errorOutline')
        renderPayment()
    }
})
htmlEls.peopleInput.addEventListener('input', () => {
    renderPayment()
    let peopleValue = htmlEls.peopleInput.value
    let errorText = htmlEls.errorText2
    if (noError(peopleValue, errorText, 101)){
        removeClass(htmlEls.peopleInput, 'errorOutline')
        renderPayment()
        
    } else{
        addClass(htmlEls.peopleInput, 'errorOutline')
        renderPayment()
    }
})


//All functions
function calcTip(){
    const tip = (((htmlEls.billInput.value * (htmlEls.customInput.value * 0.01 + 1)) - htmlEls.billInput.value)/ htmlEls.peopleInput.value).toFixed(2)
    !isNaN(parseInt(tip)) ? htmlEls.tipAmount.textContent = `$${tip}` :  '';
}
function calcTotal(){
    const total = ((htmlEls.billInput.value*(htmlEls.customInput.value * 0.01 + 1)) / htmlEls.peopleInput.value).toFixed(2)
    !isNaN(parseInt(total)) ? htmlEls.totalAmount.textContent = `$${total}` :  '';
}

function addTextContent(dest, text) {
    dest.textContent = text
}
function noError(value, dest, maxNum){
    if (isNaN(value)) {
        addTextContent(dest, 'Value needs to be a number')
        return false
    } else if (value >= maxNum) {
        addTextContent(dest, 'Value too large')
        return false
    } else if (value < 0){
        addTextContent(dest, 'Enter positive value')
        return false
    } else if (value == 0) {
        addTextContent(dest, "Can't be zero")
        return false
    } else {
        addTextContent(dest, '')
        return true
    }
}
function customNoError(value, maxNum){
    if (isNaN(value) || value >= maxNum || value < 0) {
        return false
    } else {
        return true
    }
}
function addClass(dest, className){
    dest.classList.add(className)
}
function removeClass(dest, className) {
    dest.classList.remove(className)
}
function renderPayment(){
    if (htmlEls.errorText1.textContent === '' && htmlEls.errorText2.textContent === '' && customNoError(htmlEls.customInput.value, 100)){
        calcTip()
        calcTotal()
    } else{
        htmlEls.tipAmount.textContent = 'error'
        htmlEls.totalAmount.textContent = 'error'
    }
}
function resetFields(){
    htmlEls.billInput.textContent = 0;
    htmlEls.customInput.textContent = 0;
    htmlEls.peopleInput.textContent = 0;
}