/*
The Temperature class allows you to read and write the temperature in either degrees Celsius or degrees Fahrenheit, but internally only stores Celsius, and automatically converts to Celsius in the fahrenheit getter and setter. Convert fahrenheit to celsius and vice versa using 1) getter/setter and 2) fromFahrenheit method.
*/

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius*1.8+32;
    }

    set fahrenheit(value){
        this.celsius=(this.celsius-32)/1.8;
    }

    static fromFahrenheit(value){
        return new Temperature(value-32/1.8);
    }
}


let temp1=new Temperature(15);
console.log(temp1.fahrenheit);
let temp2=new Temperature(165);
console.log(temp2.fahrenheit);
temp2.fahrenheit=165;
console.log(temp2.fahrenheit);
console.log(Temperature.fromFahrenheit(89));