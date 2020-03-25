'use strict';
/*Overview 
Write a program that prints the numbers from 1 to 100. But for multiples of three
print "Fizz" instead of the number and for the multiples of five print "Buzz." 
For numbers which are multiples of both three and five print "FizzBuzz."

Complete the following in all three types of Loops (While, do...While, For):

For numbers 1 thru 100 print out the following given the condition
If the number is divisible by 3, print 'Fizz'
If the number is divisible by 5, print 'Buzz'
If the number is divisible by both 3 and 5, print 'FizzBuzz' */


//While Loop
let i = 0;
let statement = "";
console.log("While Loop results:")
while(i < 100){
    i++;
    if( i % 3 == 0 && i % 5 == 0){
        statement += "FizzBuzz ";
    }else if(i % 3 == 0){
        statement += "Fizz ";
    }else if(i % 5 == 0){
        statement += "Buzz ";
    }else{
    statement = statement + i + " "; 
    }
}
console.log(statement);

//Do...While Loop
let j = 0;
let doStatement = "";
console.log("Do..While Loops results:");
do{
    j++;
    if (j % 3 == 0 && j % 5 == 0){
        doStatement += "FizzBuzz ";
    }else if(j % 3 == 0){
        doStatement += "Fizz ";
    }else if (j % 5 == 0){
        doStatement += "Buzz ";
    }else{
        doStatement = doStatement + j + " ";
    }
} while(j < 100);
console.log(doStatement);

//For Loop
let forStatement = "";
console.log("For Loop results:");
for(let k = 1; k < 101; k++){
    if(k % 3 == 0 && k % 5 == 0){
        forStatement += "FizzBuzz ";
    }else if(k % 3 == 0){
        forStatement += "Fizz ";
    }else if(k % 5 == 0){
        forStatement += "Buzz ";
    }else{
        forStatement = forStatement + k + " ";
    }
}
console.log(forStatement);
