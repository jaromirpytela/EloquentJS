/*
Say you have a function primitiveMultiply that, in 20 percent of cases, multiplies two numbers, and in the other 80 percent, raises an exception of type MultiplicatorUnitFailure. Write a function reliableMultiply that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result. Make sure you handle only the exceptions you are trying to handle.
[The call to primitiveMultiply should definitely happen in a try block. The corresponding catch block should rethrow the exception when it is not an instance of MultiplicatorUnitFailure and ensure the call is retried when it is.
To do the retrying, you can either use a loop that stops only when a call succeeds—as in the look example earlier in this chapter—or use recursion and hope you don’t get a string of failures so long that it overflows the stack (which is a pretty safe bet).)
*/

class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(Num1, Num2) {
    if (Math.random() > 0.2) {
        return Num1 * Num2;
    } else {
        throw new MultiplicatorUnitFailure("Clunk");
    }
}

function reliableMultiply(Num1, Num2){
    for(;;){
        try{
            return primitiveMultiply(Num1, Num2);
        } catch(e){
            if(!(e instanceof MultiplicatorUnitFailure)){
                throw e;
            }
        }
    }
}

console.log(reliableMultiply(4,5,));
