var placa1 = 0;
var placa2 = 0;

function incrementClick1() {
    updatePlacar1(++placa1);
}
function incrementClick2() {
    updatePlacar2(++placa2);
}
function resetCounter() {
    placa1 = 0;
    placa2 = 0;
    updatePlacar1(placa1);
    updatePlacar2(placa2);
}

function updatePlacar1(val) {
    document.getElementById("placar1").innerHTML = val;
}
function updatePlacar2(val) {
    document.getElementById("placar2").innerHTML = val;
}
