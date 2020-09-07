//catch the DOM Elements

const btn = document.querySelector(".container__btn");
const resetbtn = document.querySelector(".btn--reset");
const quitBtn = document.querySelector(".btn--quit");
const body = document.querySelector("body");
const displayParagraph = document.querySelector(".container__password--showcase");
const audio = document.querySelector(".container__audio");

//Remove class from Paragraph element
displayParagraph.classList.remove("success");

//Globla Variables
let counter = 0;
let myPassword = [];

//Create the password
function passwordGenerator() {
    if (counter < 12) {
        const number = Math.floor(Math.random() * 9);
        myPassword.push(number);
        counter++;
    } else {
        return myPassword;
    }

    passwordGenerator();
}

//Event Listeners
btn.addEventListener("click", (event) => {
    audio.play();
    event.preventDefault();
    passwordGenerator();
    body.classList.add("body__background");
    displayParagraph.textContent = myPassword.join("");
    displayParagraph.classList.add("success");
    quitBtn.style.display = "block";
});

//Reset Values
resetbtn.addEventListener("click", () => {
    counter = 0;
    myPassword = [];
    displayParagraph.textContent = "";
    displayParagraph.classList.remove("success");
});

//Quit-Reload page
quitBtn.addEventListener("click", () => {
    window.location.reload();
});
