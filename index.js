

let num = 0
let length = document.getElementById("length")
let mass = document.getElementById("mass")
let volume = document.getElementById("volume")
let theInput = document.getElementById("input--box")

function conversion() {
    num = theInput.value;
    meterConvert();
    literConvert();
    kiloConvert();
}

function meterConvert(){
    let meters = (num * 0.3048).toFixed(2)
    let feet = (num * 3.2808).toFixed(2)
    length.textContent = `${num} metres = ${feet} feet | ${num} feet = ${meters} meters`
    }

function literConvert(){
    let liters = (num * 0.264172).toFixed(2);
    let gallons = (num * 3.78541).toFixed(2);
    volume.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`
}

function kiloConvert() {
    let kilos = (num * 2.20462).toFixed(2);
    let pounds = (num * 0.453592).toFixed(2);
  mass.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
}