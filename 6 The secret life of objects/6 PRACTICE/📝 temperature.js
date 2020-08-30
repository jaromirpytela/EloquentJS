/*
The Temperature class allows you to read and write the temperature in either degrees Celsius or degrees Fahrenheit, but internally only stores Celsius, and automatically converts to Celsius in the fahrenheit getter and setter.
*/

class Temperature{
    constructor(celsius) {
        this.celsius=celsius;
    }

    get fahrenheit(){
        return this.celsius*1.8+32;
    }
    set fahrenheit(value){
        this.celsius= (value-32)/1.8;
    }
    static fromFahrenheit(value){
        return new Temperature((value-32)/1.8);
    }
}

let temp = new Temperature(22);

console.log(temp.fahrenheit);
temp.fahrenheit=80;
console.log(temp.celsius);

console.log(Temperature.fromFahrenheit(500));





