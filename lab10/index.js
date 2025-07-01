const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    if(isValid()) {
        //TODO 
    }
});


const nameInput = document.querySelector('input[name=name]');
const nameError = document.querySelector('#nameError');


nameInput.addEventListener('blur', () => {
    checkIsEmpty(nameInput, nameError); 
});

function isValid() {
    let valid = true;

    valid = !checkIsEmpty(nameInput, nameError) && valid; 

    return valid;
}


function checkIsEmpty(input, error) {
    if(input.value == '') {
        error.textContent = 'Pole jest wymagane';
        return true;
    }

    error.textContent = '';
    return false;
}


const car = {mark: 'opel'};


function Car(mark) {
    this.mark = mark;

    this.info = function() {
        console.log(this.mark);
    }
}

const car2 = new Car('toyota');

console.log(car2);

car2.info();


const cars = [car2, new Car('opel')];


for(let i = 0; i < cars.length; i++)
{
    cars[i].info();
}