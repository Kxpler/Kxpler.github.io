var output = document.getElementById("output")
const pik = document.getElementById("pik");
const kont = document.getElementById("kont");
var rand = Math.floor(Math.random() * 2);

pik.onclick = function() {
    if (rand == 0) {
        output.textContent = "Juistem tis pik"
    } else {
        output.textContent = "Oei niet best, twas kont"
    }
}

kont.onclick = function() {
    if (rand == 1) {
        output.textContent = "Juistem tis kont"
    } else {
        output.textContent = "Oei niet best, twas pik"
    }
}