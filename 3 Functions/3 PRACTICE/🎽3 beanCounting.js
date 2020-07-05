/*
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
1) Write a function countBs that takes a string and the character that is to be counted as arguments. Indicate how many characters there are in the string.

Your code here. */

function countChar(word, letter){
    let counter =0;
    for(let i=0; i<(word.length-1); i++){
        if(word[i]===letter) counter ++;
    }
    return counter;
}

console.log(countChar("BBC", "B"));
