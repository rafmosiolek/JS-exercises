// SYNTAX EXERCISES

var stopLight = "green"; /* variable; variables allows to assign data to a word value.
 If the value will change, we can change the variable's value insted of rewriting the whole program. */

if (stopLight === "red") { // condition
    console.log("Stop!");
}
else if (stopLight === "yellow") {  // condition
    console.log("Slow down");
}
else if (stopLight === "green") {  // condition met the variable, it will run
    console.log("Go!");
}
else {
    console.log("Caution, unknown!") // "default condition", will run when non of the above is true
}

/*

if (stopLight === "red") { 
    console.log("Stop!");
}

THIS IS A CODE BLOCK 

A block statement (or compound statement in other languages, or code block) is used to group zero or more statements.
The block is delimited by a pair of curly brackets and may optionally be labelled.

*/




/*
COMPARISON OPERATORS

=== equal to;
!== not equal to;
> greater than;
< less than;
<= less than or equal to;
>= greater than or equal to;
*/

var myName = "Raf";
if (myName.length <= 3) {
    console.log("You have a short funny name, bud!"); // it will run, because name Raf is less or equal to number 3
}

if (10*224/16+158===1) {
    console.log("The condition is true");
} else {
    console.log("The condition is false"); // the condition is obviously false, so the second code block will run
}

/*
LOGICAL OPERATORS

&& both must be true;
|| either can be true;
! opposite to what it really is

*/

var coffee = true
var milk = "steamed microfoam"
if (coffee && milk === "steamed microfoam") {
    console.log("Delicious flat white!") // Flat white is prepared by pouring steamed milk in consistency of microfoam over a double shot of epsresso
}


/* SWITCH STATEMENTS

The switch statement is used to perform different actions based on different conditions.

*/




// Switch statements syntax:

switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}


switch (new Date() .getDay()) { // The getDay() method returns the weekday as a number between 0 and 6, where Sunday = 0).
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
}

/*

The break Keyword

When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution of more code and case testing inside the block.

When a match is found, and the job is done, it's time for a break. There is no need for more testing.

A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

*/


/*

CONTROL FLOW REVIEW

if/else statements make binary decisions and execute separate code based on a condition.

We can add extra conditions with to if/else statements with else if conditions.

Switch statements make complicated if/else statements easier to read, however they achieve the same result as if/else statements.

Comparison operators, like <, >, <=, and >= can compare two variables. After they compare, they always return either true or false.

Logical Operators, like &&, ||, !==, and !, can compare two variables to see if a certain condition exists:
&& checks if both sides are true.
|| checks if either side is true.
!== checks if both sides are not equal.
! changes a variable that is true to false, and vice versa.


*/


/* FUNCTIONS

A JavaScript function is a block of code designed to perform a particular task.


SYNTAX:

function name(parameter1, parameter2, parameter3) {
    code to be executed
}


*/


var calculatorOn = false;

function pressPowerButton() {
    if(calculatorOn) {
        console.log("Calculator turning off.");
        calculatorOn = false;
    } else {
        console.log("Calculator turning on.");
        calculatorOn = true

    }
}

pressPowerButton(); //Output:Calculator turning off.

pressPowerButton(); //Output:Calculator turning on.

// This code turns the calculator on if it is currently off, and turns it off if the calculator is currently on.



function multiplyByThirteen(inputNumber) {  // inputNumber is a PARAMETER for function multiplyByThirteen
    console.log(inputNumber * 13);  // to print the inputNumber multiplied by thirteen
}

multiplyByThirteen(9); // inputNumber is a PARAMETER, but 9 is an ARGUMENT. Arguments are provided when you call a function, and parameters receive arguments as their value.
//Output: 117, because 9*13===117


/* Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked) */



/* When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller". */

var x = myFunction(4,3);    // Function is called, return value will end up 
in x

function myFunction (a,b) {
    return a * b        // Function returns the product of a and b
}

// The result in x will be 12.




