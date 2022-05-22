/**
 * @author Alan Huang
 * @date   May 08, 2022
 * @version 0.1
 * @description To run this program in typescript, type in the command line: npx ts-node script.ts
 *                                  in vanilla javascript, type in the command line: node script.js
 */

let author : string = "Alan Huang";
let date : unknown = new Date();


console.log("Author: " + author + ", Date: " + date + ", Status: Active");

/** foundation fundamentals part 1 practice */

/* 
    1. Add 2 numbers together! (just type console.log(23 + 97) into your html file) 
*/   

console.log("Part 1: " + (23 + 97));

/** 
    2. Add a sequence of 6 different numbers together. 
*/    
function addRandom(nums:number, min:number, max:number) : void {
    let sum: number = 0;
    for(let i = 0; i < nums; i++){
        sum += Math.floor((Math.random() * (max - min)) + min);
    }
    console.log("Part 2: " + sum);
}
addRandom(10, 1, 100);

/** 
    3. Print the solution to the following equation: (4 + 6 + 9) / 77
        a. Answer should be approximately 0.24675 
*/ 

console.log("Part 3 : " + (4 + 6 + 9) / 77);

/** 
    4. Let’s use variables!
        a. Type the following at the top of the script tag: let a = 10
        b. In the console console.log(a) should print 10
        c. Try the following: 9 * aN
        d. and this: let b = 7 * a (returns undefined *) and then console.log(b) 
*/ 
let a: number = 10;
let b: number = 7 * a
console.log("Part 4 : " + a + ",  " + 9 * a + ",  " +  b);

/** 
    5. You should be getting the hang of this by now… try this sequence:
        a. Declare a constant variable max with the value 57
        b. Set another variable actual to max - 13
        c. Set another variable percentage to actual / max  
        d. If you type percentage in the console and press enter you should see a value like 0.7719 
*/
const max: number = 47;
let actual: number = max - 13;
let percentage: number = actual / max;
console.log("Part 5 : " + percentage);

/** 
    6. Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so    make sure you’re comfortable with it before moving on.
        * As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that a declaration with an assignment (such as let b = 7 * a) returns undefined and so you cannot declare and assign a value to a variable and read its value in the same line 
*/
