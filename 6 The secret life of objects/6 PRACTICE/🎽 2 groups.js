/*
The Set holds a collection of values. Unlike Map, it does not associate other values with those - it just tracks which values are part of the set. A value can only be part of a set once - adding it again doesn’t have any effect. Write such a Set class called Group. Like Set, it has add, delete, and has methods. Add from method to prototype and also make the Group class iterable.
*/

class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return (this.members.includes(value));
    }

    static from(structure) {
        let group = new Group;
        for (let value of structure) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.counter = 0;
    }

    next() {
        if (this.counter >= this.group.members.length) return {done: true};
        let result = {value: this.group.members[this.counter], done: false};
        this.counter++;
        return result;
    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}


