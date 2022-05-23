"use strict";
/**
 * @author Alan Huang
 * @date   May 08, 2022
 * @version 0.1
 * @description To run this program in typescript, type in the command line: npx ts-node script.ts
 *                                  in vanilla javascript, type in the command line: node script.js
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
let author = "Alan Huang";
let date = new Date();
console.log(chalk_1.default.grey("Author: ") +
    chalk_1.default.blue(author) +
    ", " +
    chalk_1.default.grey("Date: ") +
    chalk_1.default.yellow(date) +
    ", " +
    chalk_1.default.blackBright("Status: ") +
    chalk_1.default.green("Active"));
/** foundation fundamentals part 1 practice */
console.log(chalk_1.default.grey("-------------------------------------------"));
/**
 * 1. Add 2 numbers together! (just type console.log(23 + 97) into your html file)
 */
console.log(chalk_1.default.magenta("Part 1: ") + (23 + 97));
/**
 * 2. Add a sequence of 6 different numbers together.
 */
function addRandom(nums, min, max) {
    let sum = 0;
    for (let i = 0; i < nums; i++) {
        sum += Math.floor(Math.random() * (max - min) + min);
    }
    console.log(chalk_1.default.magenta("Part 2: ") + sum);
}
addRandom(10, 1, 100);
/**
 * 3. Print the solution to the following equation: (4 + 6 + 9) / 77
 *    a. Answer should be approximately 0.24675
 */
console.log(chalk_1.default.magenta("Part 3: ") + (4 + 6 + 9) / 77);
/**
 * 4. Let’s use variables!
 *    a. Type the following at the top of the script tag: let a = 10
 *    b. b. In the console console.log(a) should print 10
 *    c. Try the following: 9 * a
 *    d. and this: let b = 7 * a (returns undefined *) and then console.log(b)
 */
let a = 10;
let b = 7 * a;
console.log(chalk_1.default.magenta("Part 4: ") + a + ",  " + 9 * a + ",  " + b);
/**
 * 5. You should be getting the hang of this by now… try this sequence:
 *    a. Declare a constant variable max with the value 57
 *    b. Set another variable actual to max - 13
 *    c. Set another variable percentage to actual / max
 *    d. If you type percentage in the console and press enter you should see a value like 0.7719
 */
const max = 47;
let actual = max - 13;
let percentage = actual / max;
console.log(chalk_1.default.magenta("Part 5: ") + percentage);
/**
 * 6. Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so    make sure you’re comfortable with it before moving on.
 * As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that a declaration with an assignment (such as let b = 7 * a) returns undefined and so you cannot declare and assign a value to a variable and read its value in the same line
 */
/** foundation fundamentals part 2 practice */
console.log(chalk_1.default.grey("-------------------------------------------"));
/**
 *  1. Exercise 1:
 *    a.In this exercise, you will be working out of the file called troubleshooting.js
 *      https://replit.com/@I3uckwheat/troubleshooting#troubleshooting.js
 */
function troubleshooting() {
    const a = 1;
    const b = 1;
    return a + b;
}
console.log(chalk_1.default.magenta("Part 1: ") + troubleshooting());
/**
 * 2. Exercise 2:
 *    a.You will be working out of script.js
 *      https://replit.com/@I3uckwheat/enter-a-number#script.js
 */
function numberChecker(number) {
    return number >= 10;
}
console.log(chalk_1.default.magenta("Part 2: ") + numberChecker(10) + ", " + numberChecker(9));
/**
 * 3. Exercise 3:
 *   a.You will be working out of math.js
 *     https://replit.com/@I3uckwheat/lets-do-some-math#math.js
 */
const aa = 1 + 8;
const bb = 22 * 3;
const cc = 5 % 4;
const dd = aa - 17;
const ee = aa + bb + cc + dd;
console.log(chalk_1.default.magenta("Part 3: ") +
    aa +
    ", " +
    bb +
    ", " +
    cc +
    ", " +
    dd +
    ", " +
    ee);
/**
 * 4. Exercise 4:
 *   a.You will be working out of follow.js
 *     https://replit.com/@I3uckwheat/direction-follow#follow.js
 */
let firstName = "Alan";
let lastName = "Huang";
let fullName = firstName + " " + lastName;
let currentYear = 2022;
let birthYear = 2002;
let currAge = currentYear - birthYear;
let greeting = "Hello, my name is " + fullName + " and I am " + currAge + " years old.";
console.log(chalk_1.default.magenta("Part 4: ") + greeting);
/** foundation fundamentals part 3 practice */
console.log(chalk_1.default.grey("-------------------------------------------"));
/**
 * 1. Write a function called add7 that takes one number and returns that number + 7
 * @param x
 * @returns
 */
let add7 = (x) => x + 7;
console.log(chalk_1.default.magenta("Part 1: ") + add7(0));
/**
 * 2. Write a function called multiply that takes 2 numbers and returns their product.
 * @param x
 * @param y
 * @returns
 */
let multiply = (x, y) => x * y;
console.log(chalk_1.default.magenta("Part 2: ") + multiply(2, 3));
/**
 * 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
 * @param x
 * @returns
 */
let capitalize = (x) => x.toUpperCase();
console.log(chalk_1.default.magenta("Part 3: ") + capitalize("hello world!"));
/**
 * 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
 *    a. lastLetter("abcd") should return "d"
 * @param x
 * @returns
 */
let lastLetter = (x) => x.slice(x.length - 1);
console.log(chalk_1.default.magenta("Part 4: ") + lastLetter("abcd"));
console.log(chalk_1.default.grey("-------------------------------------------"));
/**
 * Problem Solving
 */
let fizzBuzz = (x) => {
    let result = "";
    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz ";
        }
        else if (i % 3 === 0) {
            result += "Fizz ";
        }
        else if (i % 5 === 0) {
            result += "Buzz ";
        }
        else {
            result += i + " ";
        }
    }
    return result;
};
console.log(chalk_1.default.magenta("Problem Solving: ") + fizzBuzz(15));
