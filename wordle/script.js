var cells = document.getElementsByClassName("cell");
var j = 0;

var word = [];
var wordString = "";

var randWordKey = Math.floor(Math.random() * fiveLetterWords.length);
var randWordLower = fiveLetterWords[randWordKey]
var randWordUpper = randWordLower.toLocaleUpperCase();
var answer = randWordUpper.split("");
console.log(answer);

//lock de line als die vol zit
// (j -1) % 5? 

document.getElementById("reload").style.backgroundColor = "rgba(117, 160, 68, 0.3)";
document.getElementById("reload").onclick = function () {
    document.querySelector("h3").textContent = "Woord nog niet geraden";
}

function allBoxes(d) {
    let key;
    let keynum;

    if (window.event) { // IE                  
        keynum = d.keyCode;
    } else if (d.which) { // Netscape/Firefox/Opera                 
        keynum = d.which;
    }
    key = (String.fromCharCode(keynum));

    cells[j].textContent = myKeyPress(event);

    j++;

    // backspace 
    if (keynum == 8) {
        j--;
        cells[j - 1].textContent = "";
        word = word.slice(0, -1);
        j = j - 1;
        wordString = wordString.slice(0, -1);
    } else {
        word.push(myKeyPress(event));
        wordString += key;
    }


    // check enough keys are pressed then evaluate the word
    if (j % 5 == 0) {

        console.log(wordString)
        console.log(word);
        if (fiveLetterWords.includes(wordString.toLocaleLowerCase())) {
            if (word[0] == answer[0]) {
                cells[j - 5].classList.add("Correct");
            } else if (answer.includes(word[0])) {
                cells[j - 5].classList.add("Contains");
            }
            else {
                cells[j - 5].classList.add("Incorrect");
            }

            if (word[1] == answer[1]) {
                cells[j - 4].classList.add("Correct");
            } else if (answer.includes(word[1])) {
                cells[j - 4].classList.add("Contains");
            }
            else {
                cells[j - 4].classList.add("Incorrect");
            }

            if (word[2] == answer[2]) {
                cells[j - 3].classList.add("Correct");
            } else if (answer.includes(word[2])) {
                cells[j - 3].classList.add("Contains");
            }
            else {
                cells[j - 3].classList.add("Incorrect");
            }

            if (word[3] == answer[3]) {
                cells[j - 2].classList.add("Correct");
            } else if (answer.includes(word[3])) {
                cells[j - 2].classList.add("Contains");
            }
            else {
                cells[j - 2].classList.add("Incorrect");
            }

            if (word[4] == answer[4]) {
                cells[j - 1].classList.add("Correct");
            } else if (answer.includes(word[4])) {
                cells[j - 1].classList.add("Contains");
            }
            else {
                cells[j - 1].classList.add("Incorrect");
            }
            word = [];
            wordString = "";


        } else {
            word = [];
            wordString = "";
            alert("Not a word");
        }


        // check if they all share the 'correct' class 
        if (cells[j - 5].className == cells[j - 4].className && cells[j - 4].className == cells[j - 3].className
            && cells[j - 3].className == cells[j - 2].className && cells[j - 2].className == cells[j - 1].className && cells[j - 1].className == "cell Correct") {

            document.getElementById("reload").style.backgroundColor = "rgb(0, 255, 64)";
            document.querySelector("h3").textContent = "";
            document.getElementById("reload").onclick = function () {
                location.reload();
            }
        }
    }
}

// RETURNS pressed key
function myKeyPress(e) {
    let keynum;
    let key;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }
    key = (String.fromCharCode(keynum));
    console.log(key);
    console.log(keynum);


    if (bannedKeys.includes(keynum)) {
        try {
            key = null;
        } catch {

        }
    }


    return key.toLocaleUpperCase();
}
