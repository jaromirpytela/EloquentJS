/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. Print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

Your code here. */

let value ="";
for(let i=0; i<100; i++){
    if(i%3===0){
        value = "Fizz"
    }
    if (i%5===0){
        value += "Buzz"
    }
    console.log(value || i);
}

