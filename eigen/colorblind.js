var shape1 = document.getElementById("shape1");
var shape2 = document.getElementById("shape2");
var shape3 = document.getElementById("shape3");
var shape4 = document.getElementById("shape4");
var shape5 = document.getElementById("shape5");
var shape6 = document.getElementById("shape6");
var shape7 = document.getElementById("shape7");
var shape8 = document.getElementById("shape8");
var shape9 = document.getElementById("shape9");
var allshapes = document.getElementsByClassName("shape");
var correct = 0;
const shapeArray = [shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9];

function randColor() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);


    if (r < 100 && g < 100 && b < 100) {
        randColor();
    };
    color = 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
}

// picks a random color out of an array and applies
function colorHandeler() {
    randColor();

    shapeArray.forEach(j => {
        j.style.backgroundColor = color;
    });
    oddColor();
}

function oddColor() {
    key = Math.floor(Math.random() * 9);

    var a = Math.floor(Math.random() * 3);
    a = a / 10;
    a += 0.7;
    oddColorPicker = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    shapeArray[key].style.backgroundColor = oddColorPicker;
    console.log(a);
}



shapeArray.forEach(i => {
    i.onclick = function () {
        if (i == shapeArray[key]) {
            colorHandeler();
            correct++
            document.querySelector("h3").innerHTML = "Correct : " + correct;
        } else if (i != shapeArray[key]) {

        }
    }
})  
