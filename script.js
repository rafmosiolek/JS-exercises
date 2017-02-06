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




//  ARRAYS

/* JavaScript arrays are used to store multiple values in a single variable.
An array is a special variable, which can hold more than one value at a time.
Arrays are JavaScript's way of making lists.
These lists can store different data types and they are >>ordered<<, meaning >>the position of each list item is numbered by JavaScript.<<
*/

var arrayName = ["item1", "item2", "item3", ... ];

var musicGenres = ["jazz", "pop", "rock"];


/* Each item in an array has a numbered position. We can access an item using its number, just like we would in an ordinary list.

JavaScript counts starting from 0, not 1, so the first item in an array will be at position 0. This is because JavaScript is zero-indexed.
*/

var arrayName = ["item1", "item2", "item3"];

var listItem = arrayName[0];
console.log(listItem); // Output: "item1";

// We can find out how many items are inside of the array by using .length property:

var arrayName = ["item1", "item2", "item3"];
console.log(arrayName.length); // output: 3.

// .push() allows to add items to the of an array:

var arrayName = ["item0", "item1", "item2"];

arrayName.push("item3", "item4");

console.log(arrayName); //Output = ["item0", "item1", "item2", "item3", "item4"];


// .pop () deletes the last item of an array:

var arrayName = ["item0", "item1", "item2"];

arrayName.pop();

console.log(arrayName); // Output = ["item0", "item1"]; item2 was deleted.

/*

ARRAYS REVIEW:

 Arrays are lists and are a way to store data in JavaScript. Each item inside of an array is at a numbered position. Arrays are created with brackets [].
We can access one item in an array using it's numbered position, with syntax like: myArray[0].
Arrays have a length property, which allows you to see how many items are in an array.
Arrays also have their own methods, including push and pop, which add and subtract items from an array, respectively.

*/



// LOOPS

/*

Loops are handy, if you want to run the same code over and over again, each time with a different value.

JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/


// "FOR" LOOPS

// Instead of writing out the same code over and over, let’s make the computer loop through our array for us, using "for" loop.

for(var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* 
1. Within the for loop's parentheses, the >>start condition<< is var i = 0, which means the loop will start counting at 0.
2. The stop condition is i < myArray.length, which means the loop will run as long as i is less than the length of the myArray. When i is greater than
my Array, the loop will stop looping.
3. The iterator is i++. That means each loop i will have added 1 to it.
4. Finally, the code block inside {...}. The block will run each loop, until the loop stops (when i is greater than myArray.)

The secret to loops is that i, the variable we created inside the for loop's parentheses, is always equal to a number.
To be more clear, the first loop, i will equal 0, the second loop, i will equal 1, and the third loop, i will equal 2.
*/

var vacationSpots = ["Barcelona", "Porto", "Hong Kong"];

for(var i = 0; i < vacationSpots.length; i++){
  console.log("I would love to visit " + vacationSpots[i]);
}

/*  Output:
I would love to visit Barcelona
I would love to visit Porto
I would love to visit Hong Kong
*/


// We can make out loop run backwards by modifying the start, stop, and iterator conditions:

var vacationSpots = ["Barcelona", "Porto", "Hong Kong"];

for(var i = vacationSpots.length-1; i >= 0; i--){
  console.log("I would love to visit: " + vacationSpots[i]);
}

/* Output:
I would love to visit: Hong Kong
I would love to visit: Porto
I would love to visit: Barcelona
*/

// "WHILE" LOOPS

while (condition) {
  // code block that loops until condition is false
  }
  /*
1. The loop begins with the keyword while
2/ Inside the parentheses, we can insert a condition. As long as the variable evaluates to true the block of code will loop.
3. Inside the code block we can write any code we'd like to loop.
*/

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');

/* The program will flip the cards until the Spade is found.

1. The first variable is naming the cards (the deck).
2. The second variable hold the name of the hard which just has been flipped. We using "heart" as a first card.
3. If the currentCard is not "Spade", console.log will print out the value of the currentCard.
4. The randomNumber variable reassign currentCard to a new card from the cards array (the deck).
5. On the last line, outside the program, console.log will print out when the "Spade" is found.

You can see the while loop guessing a card, then seeing if it is a Spade, over and over, until it finds one.
*/


/* LOOPS REVIEW 
1. for loops allow us to repeat a block of code a known amount of times.
2. We can use a for loop inside another for loop to compare two lists.
3. while loops are for looping over a code block an unknown amount of times.



// JAVASCRIPT AND THE DOM


// Linking JS to a HTML.

/* We can link a JavaScript file to HTML by including it as the src of a <script> tag inside of an HTML file, like this:

<script src='/.../file.js'></script> */


// By linking js/main.js in the index.html file, we are asking the browser to run our JavaScript code each time index.html loads.


/* 
The Document Object Model, commonly referred to as the DOM', is the term for elements in an HTML file.
Elements are any HTML code denoted by HTML tags, like <div>, <a>, or <p>.

We can select an HTML element with JavaScript by selecting its class attribute, like this:
*/

var header = document.getElementsByClassName('example-class-name');

/*
To better interact with DOM elements, we can use a library.
A library is a set of code that contains useful pre-written functions that help with certain tasks.

A great library for interacting with the DOM is jQuery.
*/


/*
In order to use jQuery, we need to:

1. Include jQuery in our project. jQuery is a library, which means it is a set of code in a file, therefore we will need to link that file in our HTML in order to access it.

2. Once we link it in our HTML file, we can use its functions and syntax in our js/main.js file.
3. Once linked, we'll need to make sure our HTML is loaded before we run our jQuery and JavaScript code.

This will prevent our jQuery and JavaScript code from running before the elements they select are rendered.
*/

/*
Since jQuery is a library of code, we need to include a link to it in our index.html file before we can use it.
Before the closing </body> tag, right above your current <script> tag, include this code:

<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>

The link to jQuery needs to be above the link to the js/main.js file, which will give main.js access to the jQuery library. */

// jQuery has a built in function to check if the page is ready before it will run our code:

$(document).ready(main);

/* Notice that we put main inside the parentheses of ready.
Main here is a callback, which means that our code will wait until the document (in other words, the DOM) is loaded, or ready.
When it is, then it will execute the main function. jQuery calls back to the main function, therefore it's a callback.

In the event that our HTML and CSS took 5 minutes to load, this code would wait until it loaded completely before running */


function main() {
  var $skillset = $('.skillset');
  alert($skillset);
}

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
   // $(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text("Projects Viewed");
  });
}

$(document).ready(main);







