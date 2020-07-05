function countChar(word, letter){
    let counter =0;
    for(let i=0; i<(word.length-1); i++){
        if(word[i]===letter) counter ++;
    }
    return counter;
}

console.log(countChar("BBC", "B"));
