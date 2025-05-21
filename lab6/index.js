// const div1 = document.querySelector('.przykladowaKlasa');

// console.log(div1);
// div1.innerHTML = '<span>Test</span>';


// function test() {
//     console.log('click');
// }

// div1.addEventListener('', () => {
//     console.log('click');
// });

// document.getElementById('inputId')
// .addEventListener('keypress', (ev) => {
//     console.log(ev);
//     if(ev.key === 'g')
//     {
//         ev.preventDefault();
//     }
// });

//zad 1
console.log(silnia(5));
function silnia(n) {
    return n <= 1? 1: n * silnia(n - 1);
}

//zad 2
const btns = document.querySelectorAll('.btn');
let selected = null;
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
        if(selected)
            selected.classList.remove('selected');
        selected = btn;
    });
});

//zad 3
const secret = document.getElementById('secret');
document.getElementById('hideBtn').addEventListener('click', () => {
    secret.style.visibility = secret.style.visibility === 'hidden'? 'visible': 'hidden';
});

//Zad 4
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');

const list = document.querySelector('ul');

const table = document.querySelector('table');

document.getElementById('save').addEventListener('click', () => {
    const name = nameInput.value;
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);

    //zad 5
    const surname = surnameInput.value;
    const newRow = table.insertRow();
    const newCell = newRow.insertCell();
    newCell.textContent = name;
    const newCell2 = newRow.insertCell();
    newCell2.textContent = surname;
});