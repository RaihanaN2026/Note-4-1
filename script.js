/* This is a MULTI-LINE comment in JS 
Below is an example of a JS STATEMENT (instruction/command)
Statements end with a SEMICOLON (;)
*/
console.log("Hey!");


//This is a SINGLE-LINE comment
// console. Log is a FUNCTION to display information
console.log("this is the console/output");

//DECLEAR a VARIABLE to hold data
//Use the let keyword to create the variable
let pokemon;

//ASSIGN a value to that variable 
//like packing an item into a box
pokemon = "Pikachu";


//Can DECLEAR and ASSOIN in one statement 
let name = "Rai";

// DECLEAR a new variable (buying a box)
let luckynumber;

// ASSIGN a value to that variable 
// (putting an item in a box)
luckynumber= 7;

//DECLEAD and ASSIGN in one statement
let worstnumber= 22;

// You can "PASS IN" a VARIABLE into a FUNCTION
console.log(luckynumber);

console.log(worstnumber);

// Can CHANGE the value stored in a variable 
let mood = "happy";
console.log(mood);
mood = "sad";
console.log(mood);

// Can COPY the value from one variable into another
let isHappy = true;
let isThrilled;
isThrilled = isHappy;
console.log(isThrilled);


// MATH OPERATIONS 
let score = 1;
score = score + 6;
console.log(score);
score = score - 10;
console.log(score)
score = score * (-3);
console.log(score)
score = score / 3;
console.log(score);

//STAING CONCATEANATION ( merging/combing)
//QUOTES indicate STARING LITEARLS
let greeting = "hello " + "friend";
console.log(greeting);

//Can combin string VARIABLES with staring LITEALS
let username = "penguins_rock212";
greeding = "welcome" + "username" + "!!!";
console.log(greeting);

//watch out for STRING CONSERVATIONS
console.log( 4 + 5); //9 (adds the numbers)
console.log("4" + 5); // 45 (concatenate, not add)
console.log( 4 + '5'); // 45 (same as above!)




/* FUNCTION:
Reusable sets of code statements that perform a specific task or process
 */


// Example of CALLING (using) a funcion
console.log("hello")

// Example of DECLARING (creating) a function
function skincare() {
    //3 statements (steps/instructions)
    console.log("1. Double cleanse");
    console.log("2. Apply toner");
    console.log("3. Moisturize");
}
// To CALL (run) our function, say its name
skincare();
skincare(); //repeated the routine again!


/* FUNCTION are like RECIPES:
Reliably perform the same set of actions for a consistent result.
PARAMETERS (input) are like ingredients.
RETURN values (output)-the completed meal 
 */

//Sandwich-making example of a function 
// that requires PARAMETER and RETURNS data
//( takes input provides output)
function makeSandwich(bread, filling, sauce) {
    //function BODY (procedure/recipe steps)
    let sandwich = filling + " sandwich with " + sauce + " on " + bread;
        return sandwich;
}
//Call a function that RETURN data
//Store the output in a variable!
let burger = makeSandwich("bun", "patty", "ketchup");
console.log(burger);

// TRY the function with different ARGUMENT ( input data)
let caprese = makeSandwich("ciabatta", "mozz", "pesto");
console.log(caprese);

//*** selection (CONDITIONALs)***
//A conditional expression is like a QUESTION
// where a Boolean (true/false) is the ANSWER

// conditions that include operations
//get evaluated and result in true/false
console.log( 2 > 1);//true
console.log( 2 == 1); //false   == means they are equal
console.log( 2 != 1 ); // != means it's not equal
console.log( (1 + 2) == (2 + 2) );
console.log(2 >= 3);

// ASSGIN a comparison result to a variable
let result = (5 > 4); 
console.log(result);

//Comparing strings (text) uses dictionary order
// TRUE if letter is later in order
console.log('Z' < 'A');
console.log('Aaniyah' == 'Ethan');

// IF STATEMENTS evaluate a condition
// then execute a block of code if TRUE
let age = 17;
// "Is your age equal to 16?"
if (age == 16) {
    console.log("Happy sweet sixteen");
}
else {
    console.log("you can't have a sweet sixteen party");
}

// To test multiple conditions, use else-if statements
let year = 2025;
if (age == 18) {
    console.log("Congrats on your first time voting");
}
else if (age > 18) {
    console.log("Go voting!!!");
}
else {
    console.log("you're too young to vote...");
}