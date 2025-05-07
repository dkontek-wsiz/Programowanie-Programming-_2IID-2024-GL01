
// if(true)
// {
//     var testVar = 'test';
//     let testLet = 'test';
// }

// console.log(testVar);
// const testConst = 'test';


// const array = [1, 'Jong', '2', 4, {name: 'test'}, 1];


// array.push();
// console.log(array);
// console.log(array.filter((x, index, self) => x == 1 || index === 1));

//zad1
function askAge() {
    const age = Number(prompt('Podaj swój wiek'));

    // if(age >= 18)
    //     console.log('Jeseteś pełnoletni');
    // else 
    //     console.log('Jeseteś niepełnoletni');

    console.log(age >= 18? 'Jeseteś pełnoletni': 'Jeseteś niepełnoletni');
}

//Zad2
const cel = 20;
console.log((cel * 9/5)+32);


//Zad3
const array = [1, 2, 3, 4, 5];

for(let i = 0; i < 100000; i++)
{
    array.push(Math.ceil(Math.random() * 100));
}

console.log(array);


let sum = 0;

// for(let i = 0; i < array.length; i++)
// {
//     sum += array[i];
// }

array.forEach((value) => {
    sum += value;
});

console.log(sum);

let sum2 = array.reduce((a, b) => a + b, 0);
console.log(sum2);

console.log(array.filter(even));
console.log(array.filter(value => value % 2 === 0));

function even(value) {
    return value % 2 === 0;
}

const arrayMultipleBy3 = array.map(x => x * 3);
//array.forEach(x => x * 3);

const index = array.findIndex(x => x === 2);

console.log(sum / array.length);


console.log(Math.max(...array));

let counter = 0;

array.forEach((value) => {
    if(value === 2)
        counter++;
});

const counter2 = array.filter(x => x === 2).length;

console.log(counter, counter2);


//Zad4

const fib = [0, 1];

for(let i = 2; i <= 100; i++)
{
    fib.push(fib[i - 2] + fib[i -1]);
}

console.log(fib);