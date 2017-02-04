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

/*

1.  On line 174, we have a variable named calculatorOn set to false. Our program starts with the calculator in the off position.

2.  On line 176, there's a function named pressPowerButton. Functions follow this syntax:

        • They begin with the JavaScript keyword >>function<<.

        • After function comes the name of the function. pressPowerButton is the name of the function. 
        Notice there are no spaces in the name and each new word is capitalized. This is a convention in the JavaScript community called >>camelCase<<.

        • After the function's name, comes parentheses () with parameters inside.

        • Finally, the function has a block of code it executes between the curly braces {}.
            
3.  Inside the function is an if/else statement.

4.  On the last few lines, we make the function run by writing pressPowerButton(). This term for this is calling the function. We call it with pressPowerButton(), and it runs all the code in the block of the function.
We executed the code in the block of the function twice without having to write it twice. Functions can make code reusable!
*/



//  AD. 2 

function multiplyByThirteen(inputNumber) {  // inputNumber is a PARAMETER for function multiplyByThirteen
    console.log(inputNumber * 13);  // to print the inputNumber multiplied by thirteen
}

multiplyByThirteen(9); // inputNumber is a PARAMETER, but 9 is an ARGUMENT. Arguments are provided when you call a function, and parameters receive arguments as their value.
//Output: 117, because 9*13===117

// Parameters let us write logic inside functions that can be modified based on when we call the function, which will help make our functions more flexible.

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



// When functions return their value, we can use them together and inside one another:

function multiplyByNineFifths(celsius) {
  return celsius * (9/5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F

/* Inside of function getFahrenheit block, we called multiplyByNineFifths and passed it the degrees in celsius. The multiplyByNineFifths function multiplied the celsius by (9/5).
Then it returned its value so the getFahrenheit function could continue on to add 32 to it.

Finally, on the last line, we interpolated the function call within a console.log statement. This works because getFahrenheit returns it's value.

We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing functions can help take large and difficult problems and break them into small and manageable problems.

*/

var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
 return getSubTotal(orderCount) + getTax(); 
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal(orderCount));
console.log(getTotal());



/* 

FUNCTIONS REVIEW:

1.  Functions are written to perform a task.
2.  Functions take data or variables, perform a set of tasks on them, and then return the result.
3.  We can define parameters when calling the function.
4.  When calling a function, we can pass in arguments, which will set the function's parameters.
5.  We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.

*/





// SCOPE


/* 

Scope refers to where in a program a variable can be accessed. 
The idea is that some variables are unable to be accessed everywhere within a program.

Scope - The current context of execution. The context in which values and expressions are "visible," or can be referenced.
If a variable or other expression is not "in the current scope," then it is unavailable for use.
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.


GLOBAL SCOPE - In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes.
In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.


*/

var laundryRoom = 'Basement'; // global scope
var mailRoom = 'Room 1A';   // global scope

var myApartment = function() {
  var mailBoxNumber = 'Box 3'; // functional scope
  var laundryRoom = 'In-unit'; // functional scope
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
};

/*

SCOPE REVIEW

Scope is the idea in programming that some variables are acessible/inaccessible from other parts of the program.
Global Scope refers to variables that are accessible to every part of the program.
Functional Scope refers to variables created inside functions, which are not accessible outside of its block.

*/





















