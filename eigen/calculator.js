var output = document.getElementById("output");
var clear = document.getElementById("Clear");
var plus = document.getElementById("plus");
var minus = document.getElementById("min");
var times = document.getElementById("keer");
var divide = document.getElementById("gedeeld");
var dot = document.getElementById("dot");
var Answer = document.getElementById("Ans")
var zero = document.getElementById("0");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var equals = document.getElementById("is");
var answervield = document.getElementById("answerVield");
var number = 0;
var oldNumber = 0;
var opperator = "";
output.value = "";
var comma = false;
var cleared = false;
var prevAns = null;

plus.onclick = function () {
    output.value += " + ";
    opperator = "+";
    oldNumber = number;
    number = 0;
}

minus.onclick = function () {
    output.value += " - ";
    opperator = "-";
    oldNumber = number;
    number = 0;
}

times.onclick = function () {
    output.value += " x ";
    opperator = "*";
    oldNumber = number;
    number = 0;
}

divide.onclick = function () {
    output.value += " ÷ ";
    opperator = "/";
    oldNumber = number;
    number = 0;
}

dot.onclick = function () {
    output.value += ".";
    comma = true;
    preComma = number;
    number = 0;
}



zero.onclick = function () {
    output.value += "0";
    number += "0";

}

one.onclick = function () {
    output.value += "1";
    number += "1";
}

two.onclick = function () {
    output.value += "2";
    number += "2";
}

three.onclick = function () {
    output.value += "3";
    number += "3";
}

four.onclick = function () {
    output.value += "4";
    number += "4";
}

five.onclick = function () {
    output.value += "5";
    number += "5";
}

six.onclick = function () {
    output.value += "6";
    number += "6";
}

seven.onclick = function () {
    output.value += "7";
    number += "7";
}

eight.onclick = function () {
    output.value += "8";
    number += "8";
}

nine.onclick = function () {
    output.value += "9";
    number += "9";
}

equals.onclick = function () {
    // type casting the numbers from string to int
    oldNumberInt = parseInt(oldNumber);
    numberInt = parseInt(number);

    if (numberInt == undefined || null) {
        if (!prevAnsInt == undefined || null) {
            numberInt = prevAnsInt;
        }
    }

    if (oldNumberInt == undefined || null) {
        if (!prevAnsInt == undefined || null) {
            oldNumberInt = prevAnsInt;
        }
    }

    //opperator handeling
    if (opperator === "+") {
        ans = oldNumberInt + numberInt;
    } else if (opperator === "-") {
        ans = oldNumberInt - numberInt;
    } else if (opperator === "/") {
        ans = oldNumberInt / numberInt;
    } else if (opperator === "*") {
        ans = oldNumberInt * numberInt;
    } else {
        ans = number;
    }


    //answer and logs
    function isRound() {
        return !!(ans % 1);
    }

    if (isRound(ans)) {
        var fixed = ans.toFixed(2);
        answervield.innerText = fixed;
        console.log("niet gerond");
    } else if (!isRound(ans)) {
        console.log("heel getal");
        ans -= 0;
        answervield.innerText = ans;
    }



}

clear.onclick = function () {
    prevAns = answervield.innerText;
    answervield.innerText = ""
    output.value = "";
    number = 0;
    cleared = true;
}

Answer.onclick = function () {
    prevAnsInt = parseInt(prevAns);

    if (cleared == true) {
        output.value = prevAnsInt;

    }
}