//catch the DOM Elements
const btn = document.querySelector(".container__btn");
const resetbtn = document.querySelector(".btn--reset");
const quitBtn = document.querySelector(".btn--quit");
const body = document.querySelector("body");
const subPragraph = document.querySelector(".container__paragraph");
const displayParagraph = document.querySelector(".container__password--showcase");
const audio = document.querySelector(".container__audio");

displayParagraph.style.visibility = "hidden";

//Globla Variables
let counter = 0;
let myPassword = [];

//Create the password
function passwordGenerator(howMuchDigitsPassword) {
    if (counter < howMuchDigitsPassword) {
        if (Math.random() > 0.5) {
            const randomNumberPicker = Math.floor(Math.random() * strings.length);
            myPassword.push(strings[randomNumberPicker]);
            counter++;
        } else {
            const number = Math.floor(Math.random() * 9);
            myPassword.push(number);
            counter++;
        }
    } else {
        return myPassword;
    }

    passwordGenerator(howMuchDigitsPassword);
}

function styleSuccesHandler() {
    audio.play();
    body.classList.add("body__background");
    displayParagraph.classList.add("success");
    quitBtn.style.visibility = "visible";
    subPragraph.style.visibility = "visible";
    displayParagraph.style.visibility = "visible";
}

function styleResetHanlder() {
    displayParagraph.textContent = "nVpX$3LC75Z0";
    displayParagraph.classList.remove("success");
    subPragraph.style.visibility = "hidden";
    displayParagraph.style.visibility = "hidden";
}

//Event Listeners
btn.addEventListener("click", () => {
    passwordGenerator(12);
    styleSuccesHandler();
    displayParagraph.textContent = myPassword.join("");
});

//Reset Values
resetbtn.addEventListener("click", () => {
    styleResetHanlder();
    counter = 0;
    myPassword = [];
});

//Quit-Reload page
quitBtn.addEventListener("click", () => {
    window.location.reload();
});

const strings = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "$",
    "%",
];
