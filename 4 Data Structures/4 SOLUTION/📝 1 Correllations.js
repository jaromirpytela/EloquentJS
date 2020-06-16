var JOURNAL = [
    {"events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false},
    {"events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": true},
    {"events": ["cauliflower", "brushed teeth", "work"], "squirrel": false},
    {"events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false},
    {"events": ["pizza", "ice cream", "computer", "work"], "squirrel": false},
    {"events": ["pizza", "beer", "work", "dentist"], "squirrel": false},
    {"events": ["pizza", "work"], "squirrel": false},
    {"events": ["pizza", "cycling", "weekend"], "squirrel": true},
    {"events": ["carrot", "brushed teeth", "weekend"], "squirrel": false},
    {"events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false},
    {"events": ["pizza", "peanuts", "candy", "work"], "squirrel": true},
    {"events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false},
    {"events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false},
    {"events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false},
    {"events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false},
    {"events": ["pizza", "brushed teeth", "work"], "squirrel": true},
    {"events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false},
];
// 1) Start up a journal. Instead of declaring properties like events: events, just give a property name. This is a short-hand that means the same thing—if a property name in curly brace notation isn’t followed by a value, its value is taken from the binding with the same name.

function addEntry(events, squirrel) {
    JOURNAL.push({events, squirrel});
    return JOURNAL;
}

addEntry(["work", "touched tree", "pizza", "running","television"], false);
console.log(JOURNAL);
console.log("**************************************");

// 2) Extract a two-by-two table for a specific event from the journal, loop over all the entries and tally how many times the event occurs in relation to squirrel transformations. Arrays have an includes method that checks whether a given value exists in the array.

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i];
        let position = 0;
        if (entry.events.includes(event)) position += 1;
        if (entry.squirrel) position += 2;
        table[position]+=1;
    }
    return table;
};

console.log(tableFor("pizza", JOURNAL));
console.log("**************************************");

// 3) Compute and show correlation (function phi) for every type of event that occurs in the data set. To do that, create function journalEvents to find every type of event by going over all the events, and adding those that aren’t already in there to the events array.

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) *
            (table[1] + table[3]) * (table[0] + table[2]));
}

function journalEvents(journal) {
    let events=[];
    for(let entry of journal){
        for (let event of entry.events){
            if (!events.includes(event)) events.push(event);
        }
    }
    return events;
}

for (let event of journalEvents(JOURNAL)){
    console.log(event + ":", phi(tableFor("pizza", JOURNAL)));
}
