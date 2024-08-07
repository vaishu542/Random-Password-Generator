const submit = document.getElementById('submit');
const length = document.getElementById('length');
const passwordGenerated = document.getElementById('passwordGenerated');

let passwordLength;
let  includeNumbers;
let  includeUpperCase;
let  includeLowerCase; 
let  includeSymbols;

function generatePasswords(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    let generatedPassword = "";
    let possibleCharacters = "";
    
    if(includeNumbers){
        possibleCharacters += "0123456789";
    }
    if(includeLowerCase){
        possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
    if(includeUpperCase){
        possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(includeSymbols){
        possibleCharacters += "!@#$%^&*";
    }
    for(let i=0;i<length;i++){
        let randomPossibility = Math.floor(Math.random()*possibleCharacters.length);
        generatedPassword += possibleCharacters[randomPossibility];
    }
    return generatedPassword;
   
}

function updateValue(){
    const range = document.getElementById('range');
    length.textContent = range.value;
    passwordLength = range.value;
    console.log(passwordLength);
}
updateValue();

function checkNumbers(){
    const numbers = document.getElementById('cbx1');
        includeNumbers = numbers.addEventListener('change', function() {
            includeNumbers = this.checked ? true : false;
            console.log(includeNumbers);
        });
}
checkNumbers();
function checkCapitals(){
    const capitals = document.getElementById('cbx2');
        includeUpperCase = capitals.addEventListener('change', function() {
            includeUpperCase = this.checked ? true : false;
            console.log(includeUpperCase);
        });
}
checkCapitals();
function checkSmalls(){
    const smalls = document.getElementById('cbx3');
        includeLowerCase = smalls.addEventListener('change', function() {
            includeLowerCase = this.checked ? true : false;
            console.log(includeLowerCase);
        });
}
checkSmalls();
function checkSpecial(){
    const specialChar = document.getElementById('cbx4');
        includeSymbols = specialChar.addEventListener('change', function() {
            includeSymbols = this.checked ? true : false;
            console.log(includeSymbols);
        });
}
checkSpecial();

submit.addEventListener('click', () => {
    passwordGenerated.textContent = "";

    if (!includeNumbers && !includeUpperCase && !includeLowerCase && !includeSymbols) {
        document.getElementById("error").textContent = "Please select at least one type!!";
    } else {
        const password = generatePasswords(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
        passwordGenerated.innerHTML = password;
        console.log(`Password generated is: ${password}`);
        document.getElementById("error").textContent = "";
        copyText(password);
        passwordStrengthCheck();
    }
});

//for copy Button
function copyText(password){
    const copyButton = document.querySelector('#copyBtn')
    const text = password;

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(text)
    .then(() => {
        console.log(`"${text}" was copied to your clipboard.`)
    })
    .catch(err => {
        console.error(`Error copying text to clipboard: ${err}`)
    })
    })
}

function passwordStrengthCheck(){
    const passwordStrength = document.getElementById('passwordStrength');
    document.querySelector(".passwordStrengthCheck").style.display = "block";
    if(passwordLength>=6 && passwordLength<=9){
        passwordStrength.style.color = "#a4161a"
        passwordStrength.textContent = "Weak Password!!!";
    }else if (passwordLength>=10 && passwordLength<=14){
        passwordStrength.style.color = "#ba181b"
        passwordStrength.textContent = "Medium Password!!";
    }else if (passwordLength>=15 && passwordLength<=20){
        passwordStrength.style.color = "#e5383b"
        passwordStrength.textContent = "Strong Password!";
    }
}


// for the pop
function openPopup() {
    const content = document.querySelector(".content");
    content.classList.add("contentVisible");
}

function closePopup() {
    const content = document.querySelector(".content");
    content.classList.remove("contentVisible");
}




