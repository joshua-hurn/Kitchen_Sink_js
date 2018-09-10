let firstName = 'Josh';

const numberOfStates = 50;

let result = 5 + 4;
console.log(result);

let firstCharAscii = firstName.charCodeAt(0);

// Set first character and send alert at result.
if (firstCharAscii >= 76 && firstCharAscii <= 90) {
    alert ('Back of the line!');
} else {
    alert ('Next!');
}

function sayHello() {
    alert ("Hello World!")
}

sayHello();

function checkAge(name, age) {
    if (age <= 21) {
        alert("Sorry" + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John',17);

// for (let i = 0; i <= 4; i++) {
//     checkAge([i]);
// }

let favoriteVeg = ['broccoli', 'squash', 'kale']

for (let i = 0; i < favoriteVeg.length; i++) {
    console.log(favoriteVeg[i]);
}

let ageGate = [
    {name: "George", age: 19},
    {name: "Josh", age: 22},
    {name: "Ian", age: 30},
    {name: "Yoni", age: 32},
    {name: "Brian", age: 12},
]

for (let i = 0; i < ageGate.length; i++) {
    checkAge(ageGate[i].name, ageGate[i].age);
}

function getLength(string) {
    return getLength.length;
}

lengthofString = getLength('Hello World');

if (lengthofString % 2 === 0)
    console.log("The world is nice and even!");
    else
    console.log("The world is an odd place!");