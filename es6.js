// API:
// new IntBuilder(int) // constructor takes starting integer, if not passed starts with 0;
// intBuilder.plus(...n)         // take infinite number of integers and sum all with stored value;
// intBuilder.minus(...n)        // take infinite number of integers and subtract from stored value; 
// intBuilder.multiply(n)        // multiply param n on stored value;
// intBuilder.divide(n)          // leaves integer part of division stored value on n; 
// intBuilder.mod(n)             // leaves remainder of the division stored value with on n;
// intBuilder.get()              // returns stored value;
// random(from, to)   // static method; from, to: integer; values limits the range of random values; 

// EXAMPLE:
// IntBuilder.random(10, 100);          // 42;
// const intBuilder = new IntBuilder(10); // 10;
// intBuilder
//   intBuilder.plus(2, 3, 2)                     // 17;
//   intBuilder.minus(1, 2)                       // 14;
//   intBuilder.multiply(2)                       // 28;
//   intBuilder.divide(4)                         // 7;
//   intBuilder.mod(3)                            // 1;
//   intBuilder.get();                            // -> 1;

class BuilderES6 {
    constructor(integer = 0) {
        this.integer = integer;
    }
}

class IntBuilder extends BuilderES6 {
    plus(...n) { 
        this.integer = [...arguments, this.integer].reduce((accum, curr) => accum + curr, 0);
        
        return this;
    }

    minus(...n) {
        this.integer = [...arguments].reduce((accum, curr) => accum - curr, this.integer);

        return this;
    }

    multiply(n) {
        this.integer *= n;

        return this;
    }

    divide(n) {
        if (!n) {
            throw Error;
        } else {
            this.integer = Math.floor(this.integer / n);
        }

        return this;
    }

    mod(n) {
        if (!n) {
            return Error;
        } else {
            this.integer = this.integer % n;
        }

        return this;
    }

    get() {
        return this.integer;
    }

    pow(exponent) {
        this.integer = Math.pow(this.integer, exponent);

        return this;
    }

    static random(from, to) {
        return Math.round((Math.random() * (to - from) + from));
    }
}

// let intBuilder = new IntBuilder(10);
// intBuilder.plus(2, 3, 2);
// intBuilder.minus(1, 2);
// intBuilder.multiply(2);
// intBuilder.divide(4);
// intBuilder.mod(3);
// intBuilder.get(); 
// IntBuilder.random(10, 100);