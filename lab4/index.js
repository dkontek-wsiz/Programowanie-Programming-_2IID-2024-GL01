// getSum(4, 3);

// function getSum(a, b) {
//     let ada = 'test';
  
//     if(a < 0)
//         return;
//     if(a > 5)
//     {
//         return b + a;
//     }

//     return a + b; 
// }

// const get = function () {
//     return 'test';
// }

// let get2 = (a, b) => {
//     if(a > b)
//         return a;
//     else
//         return b;
// }

// get2 = (a, b = 2) => a > b? a: b;

// console.log(get2(7, 2, 3, 5, 6, 7, 8, 10));


// const da = {
//     name: "Test",
//     age: 10,
//     sayHello: function() {
//         console.log('Cześć ' + this.name);
//     }
// }

// da.sayHello();
// console.log(da);


// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.surname = lastName;
//     this.age = age;
//     this.test = 'test';
//     this.sayHello = function() {
//         console.log('Cześć ' + this.firstName);
//     }
// }

// const person1 = new Person('test1', 'nazwisko', 10);
// person1.sayHello();
// console.log(person1);

// const person2 = new Person('test1', 'nazwisko', 10);

// person2.pelnoletni = true;
// console.log(person2.pelnoletni);

// console.log(person2['firstName']);


// class Person2 {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.surname = lastName;
//         this.age = age;
//     }

//     fullName() {
//         return this.firstName + ' ' + this.surname;
//     }
// }


// const person3 = new Person2('test1', 'nazwisko', 10);


// console.log(Object.keys(person3));

//Zad 1
const book = {
    title: 'Ksiazka',
    author: 'Test Test', 
    publishYear: 1988
};

function displayInfo(book) {
    return `${book.title} - ${book.author} (${book.publishYear})`;
}

console.log(displayInfo(book));

//Zad 2
function Student(name, surname, grades) {
    this.name = name;
    this.surname = surname;
    this.grades = grades;

    this.calcAverage = () => {
        //return (this.grades.math + this.grades.it + this.grades.pe) / 3;
        const length = Object.keys(this.grades).length;
        return Object.values(this.grades).reduce((a, b) => a + b, 0) / length;
    }
}

const student = new Student('jan', 'kowalski', {math: 5, it: 4, pe: 2, test: 5});

console.log(student.calcAverage());

//zad 3 
class Car {
    constructor(mark, model, productionYear, color, speed) {
        this.mark = mark;
        this.model = model;
        this.productionYear = productionYear;
        this.color = color;
        this.speed = speed;
    }

    increaceSpeed(value) {
        this.speed += value;
    }

    decreaceSpeed(value) {

    }

    getInfo() {
        return `${this.mark} ${this.model} Prętkość: ${this.speed}`;
    }

    //Zad 4
    getAge() {
        const today = new Date();
        return today.getFullYear() - this.productionYear;
    }
}

const car = new Car('Opel', 'astra', 2010, 'red', 0);
console.log(car.getAge());

//Zad 5

class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calcArea = () => {
        return this.a * this.b;
    }

    calcPerimeter = function ()
    {
        return this.a * 2 + this.b *2;
    }

    isSquare() {
        return this.a === this.b;
    }
}


const aField = document.getElementById('a');
const bField = document.getElementById('b');
const info = document.getElementById('info');

function create() {
    const a = Number(aField.value);
    const b = Number(bField.value);

    const rec = new Rectangle(a, b);

    info.innerHTML = `${rec.isSquare()? 'Kwadrat': 'Prostokąt'} o polu ${rec.calcArea()} i obwodzie ${rec.calcPerimeter()}`;
}
