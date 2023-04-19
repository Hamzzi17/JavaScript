// const a = 5;
// const b = 2;

// let myName = "heesun";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "hamster";

// console.log("your name is " + myName);

// const amIFat = null;
// let something;
// console.log(something, amIFat); // undefined null

// const daysOfWeek = [mon, tue, wed, thu, fri, sat];

// const nonsense = [1, 2, "hello", false, null, true, undefined, "heesun"];

// // Get Item from Array
// console.log(daysOfWeek);
// console.log(daysOfWeek[4]); // fri

// // Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");
// console.log(tobuy[2]); // pizza
// console.log(tobuy[58585858]); // undefined

// const playerName = "heesun";
// const playerPoints = 121212;
// const playerHandsone = true;
// const playerFat = "little bit";

// const player = ["heesun", 121212, true, "little bit"];

// const player = {
//     name: "heesun",
//     points: 10,
//     fat: false,
// };
// console.log(player);
// player.fat = true; // We can't modify a constant, but I have no problem if I want update something(object) 'inside' of constant.
// player.lastName = "potato";
// player.points = player.points + 15; // 25
// console.log(player.points);

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("heesun", 25);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// // "Hello my name is " + myName;

// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b) {
//     console.log(a / b);
// }
// plus(60, 8);
// divide(98, 20);

// player.sayHello()

// function sayHello(){

// }

// const player = {
//     name: "heesun",
//     sayHello: function(otherPersonsName) {
//     console.log("hello " + otherPersonsName + " nice to meet you!");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("heesun");

// 계산기 만들기
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    powerOf: function (a, b) {
        console.log(a ** b);
    }
};

calculator.add(5, 1);
calculator.minus(7, 2);
calculator.divide(21, 3);
calculator.powerOf(3, 2);
// 1+1, 1-1, a+b, a-b, a/b, a**b 구현
// calculator.add(1, 2)
// calculator.minus(1, 2)
// calculator.divide(1, 2)
// calculator.powerOf(1, 2)
