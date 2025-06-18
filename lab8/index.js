const form = document.querySelector('form');


//Zad 2
const nameSpan = document.getElementById('nameSpan');
const nameInput = form.querySelector('input[name=name]');

nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value;
    nameSpan.textContent = nameValue;
});

// nameInput.addEventListener('keypress', (event) =>{
//     console.log(event);
//     if(event.keyCode === 116)
//     {
//         event.preventDefault();
//     }
// });

//Zad 3
const passwordInput = form.querySelector('#password');
const showHidePasswordInput = form.querySelector('#showHidePassword');
const showHidePasswordLabel = form.querySelector('label[for=showHidePassword]');

showHidePasswordInput.addEventListener('change', function() {
    if(showHidePasswordInput.checked){
        passwordInput.type = 'text';
        showHidePasswordLabel.textContent = 'Ukryj hasło';
    }
    else {
        passwordInput.type = 'password';
        showHidePasswordLabel.textContent = 'Pokaż hasło';
    }
});

//Zad 4
const list = document.querySelector('ul');


function displayList() {
    list.replaceChildren();
    const checkedHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    checkedHobbies.forEach(hobby => {
        const item = document.createElement('li');
        item.textContent = hobby.value;
        list.appendChild(item);
    });
}

//zad 5
const phoneContainer = form.querySelector('#phone-container');
const showHidePhoneInput = form.querySelector('#showHidePhone');
showHidePhoneInput.addEventListener('change', function() {
    phoneContainer.hidden = showHidePhoneInput.checked;
});

//Zad 6
const countryInput = form.querySelector('#country');
const newOption1 = new Option('Wielka brytania', 'GB');
countryInput.add(newOption1); 
const newOption2 = new Option('Włochy', 'IT');
countryInput.add(newOption2);

const surnameInput = form.querySelector('#surname');
const surnameError = form.querySelector('#surnameError');

surnameInput.addEventListener('blur', () => {
    checkMinLength(surnameInput, surnameError);
});


const emailInput = form.querySelector('#email');
const emailError = form.querySelector('#emailError');

emailInput.addEventListener('blur', function() {
    checkEmail(emailInput, emailError);
});
    

const passwordError = form.querySelector('#passwordError');

passwordInput.addEventListener('input', function() {
    checkPassword(passwordInput.value, passwordError);
});


function formIsValid() {
    let isValid = true;

    isValid = checkMinLength(surnameInput, surnameError) && isValid;
    isValid = checkEmail(emailInput, emailError) && isValid;
    isValid = checkPassword(passwordInput.value, passwordError) && isValid;

    return isValid;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //displayList();
    if(formIsValid())
    {
        alert('Formularz poprawny');
    }
    else {
        console.log('Formularz zawiera błedy');
    }
});

const phoneInput = form.querySelector('#phone');

phoneInput.addEventListener('keypress', function(event) {
    if(event.key >= '0' && event.key <= '9') {
        return;
    }

    event.preventDefault();
});