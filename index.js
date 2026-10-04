let characters = [];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15;

const generateButton = document.getElementById("generateBtn");
const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");

const passwordLenEL = document.getElementById("passwordLength");

const numbersCheckbox = document.getElementById("typeNumbers");
const symbolsCheckbox = document.getElementById("typeSymbols");

const copyAlertEl = document.getElementById("copyAlert");
const lenWarning = document.getElementById("warning");

function generatePasswords() {
    characters.push(...letters);
    let newPasswordOne = "";
    let newPasswordTwo = "";
    passwordLength = passwordLenEL.value;

    if(numbersCheckbox.checked) {
        characters.push(...numbers);
    }
    if(symbolsCheckbox.checked) {
        characters.push(...symbols);
    }

    if(passwordLength >= 8 && passwordLength <= 128) {
        for(let i = 0; i < passwordLength; i++) {
            newPasswordOne += randomCharacter();
            newPasswordTwo += randomCharacter();
        }

        passwordOne.textContent = newPasswordOne;
        passwordTwo.textContent = newPasswordTwo;
        lenWarning.textContent = "";
    } else {
        lenWarning.textContent = "Password length incorrect.";
    }
    characters.length = 0;
    characters.push(...letters);
}

function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function copyToClipboard(elementId) {
    let copiedText = document.getElementById(elementId);

    copiedText.select();
    copiedText.setSelectionRange(0, 99999); // mobile devices

    navigator.clipboard.writeText(copiedText.value); // doesn't work on localhost :(
    copyAlertEl.textContent = "Password copied!"
}