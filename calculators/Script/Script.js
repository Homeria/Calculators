let horizontalValue = document.getElementById("horizontal");
let verticalValue = document.getElementById("vertical");

let slider = document.getElementById("ratioController");
let button = document.getElementById("controllerReset");

let ratioValue = document.getElementById("ratioValue")
let ratioResult = document.getElementById("ratioResult");
let ratio = document.getElementById("ratio");

ratioValue.value = slider.value;
ratioResult.innerHTML = calculate();

slider.oninput = function() {
    ratioValue.value = this.value;
    
    ratioResult.innerHTML = calculate();
}

horizontalValue.onchange = function() {
    ratioResult.innerHTML = calculate();
    ratio.innerHTML = calculateRatio();
}

verticalValue.onchange = function() {
    ratioResult.innerHTML = calculate();
    ratio.innerHTML = calculateRatio();
}

ratioValue.onchange = function() {
    slider.value = this.value;
    ratioResult.innerHTML = calculate();
}

button.onclick = function() {
    ratioValue.value = 1;
    slider.value = 1;

    ratioResult.innerHTML = calculate();

}

function calculate() {

    let horizontalResult = Math.floor(horizontalValue.value * slider.value); 
    let verticalResult = Math.floor(verticalValue.value * slider.value);
    
    return (String(horizontalResult) + " x " + String(verticalResult));
    
}

function calculateRatio() {

    let hor = parseInt(horizontalValue.value);
    let ver = parseInt(verticalValue.value);

    let v = gcd(hor, ver);
    console.log(v);
    console.log(hor/v);
    return (String(hor / v) + " : " + String(ver / v));

}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

