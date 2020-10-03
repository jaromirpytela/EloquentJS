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
        return this.members.includes(value);
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

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.counter = 0;
    }

    next() {
        if (this.counter >= this.group.members.length) return {done: true};
        else {
            let result = {value: this.group.members[this.counter], done: false};
            this.counter++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

