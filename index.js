const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15;

const generateButton = document.getElementById("generateBtn");
const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");

const passwordLenEL = document.getElementById("passwordLength");

function generatePasswords() {
    let newPasswordOne = "";
    let newPasswordTwo = "";
    passwordLength = passwordLenEL.value;
    
    for(let i = 0; i < passwordLength; i++) {
        newPasswordOne += randomCharacter();
        newPasswordTwo += randomCharacter();
    }

    passwordOne.textContent = newPasswordOne;
    passwordTwo.textContent = newPasswordTwo;
}

function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}