var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");
var plyrA = document.getElementById("playerA");
var plyrB = document.getElementById("playerB");

const Allsquares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];

var turn = "A";
plyrA.style.backgroundColor = "grey";

Allsquares.forEach(element => {
    element.onclick = function () {
        if (turn == "A") {
            if (element.innerHTML == "") {
                plyrA.style.backgroundColor = "rgb(46, 46, 59)";
                element.innerHTML = "X";
                console.log(element)
                turn = "B";
                plyrB.style.backgroundColor = "grey";
            }
        } else if (turn == "B") {
            if (element.innerHTML == "") {
                plyrB.style.backgroundColor = "rgb(46, 46, 59)";
                element.innerHTML = "O";
                turn = "A";
                plyrA.style.backgroundColor = "grey";
            }
        }

    }
});

