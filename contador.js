var pr1 = 0;
var pr2 = 0;

function incrementClick1() {
    updatePlacar1(++pr1);
}
function incrementClick2() {
    updatePlacar2(++pr2);
}
function resetCounter() {
    pr1 = 0;
    pr2 = 0;
    updatePlacar1(pr1);
    updatePlacar2(pr2);
}

function updatePlacar1(val) {
    document.getElementById("pr1").innerHTML = val;
}
function updatePlacar2(val) {
    document.getElementById("pr2").innerHTML = val;
}
