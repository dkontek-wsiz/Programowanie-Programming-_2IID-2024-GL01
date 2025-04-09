// var var1 = 'var';
// let let1 = 'let'
// const const1 ='const';

// if(var1 == "var" && var1 === "var" || let1 === 'let') {
//     var var2 = 'var2';let let2 = 'let2';
// }

// while(var1 != 'var') {

// }

// do {

// }
// while(var1 != 'var') 

// 
// element.innerHTML = "Test";

// const nazwaZmienej = "";

// const nazwa_zmianej = "";


// let test1 = 'test';
// test1 = 5;

// console.log(Number('5') + 5);

// const testFn = (name) => {
//     console.log(name);
// }
// testFn('tt');

// const operacja = '+';
// switch(operacja) {
//     case '+':
//         {
//         //wynik = 
//         break;
//         }

//         case '0': {

//         }
// }

//zad 1
function handleClick() {
    console.log('click');
    //const v = prompt('Podaj wartosc');
    alert(`Test`); // 'Test ' + v;
   
}

//zad 2
for(let i = 0; i < 100; i+= 2)
{
    console.log(i);
}

//zad 3
const a = Number(prompt('podaj a'));
const b = +prompt('podaj b');
console.log(a + b);


//zad 4
const element = document.getElementById('clock');
function timer() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds().toString().padStart(2, '0');
    element.innerHTML = `${hour}:${minute}:${second}`;
}
setInterval(timer, 1000);
timer();

const number = Math.ceil(Math.random() * 100);
let count = 0;
const inputElm = document.getElementById('value');
function game() {
    count++;
    const value = Number(inputElm.value);

    if(value > number) {
        alert('za duża');
    }
    else if(value < number) 
    {
        alert('za mała');
    }
    else {
        alert(`Zadłeś za ${count}`);
    }
}

