// API:
// new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
// plus(...str)             // takes infinite number of strings and concat with stored string;
// minus(n)                 // cut last n chars from stored string;
// multiply(int)            // repeat stored strings n times; Prohibited to use String.prototype.repeat();
// divide(n)                // leaves first k chars of stored string, where k = Math.floor(str.length / n);
// remove(str)              // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
// sub(from, n)             // leaves substring starting from and with length n;
// get()                    // returns stored value;

// EXAMPLE:
// const strBuilder = new StringBuilder('Hello'); // 'Hello';
// strBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(1,1).get(); 
//   .plus(' all', '!')                         // 'Hello all!'
//   .minus(4)                                  // 'Hello '
//   .multiply(3)                               // 'Hello Hello Hello '
//   .divide(4)                                 // 'Hell';
//   .remove('l')                               // 'He';
//   .sub(1,1)                                  // 'e';
//   .get();                                    // -> 'e';

function BuilderES5 (str) {
    this.str = str;
}

function StringBuilder (x) {
    BuilderES5.call(this, x);
}

Object.setPrototypeOf(
    StringBuilder.prototype,
    BuilderES5.prototype,
);
    
StringBuilder.prototype.plus = function (...str) {
    this.str = [this.str, ...str].join('');
    return this;
}

StringBuilder.prototype.minus = function (n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        this.str = this.str.slice(0, -n);
        return this;
    }
}

StringBuilder.prototype.multiply = function (n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        let subStr = '';
        for (let i = 0; i < n; i++) {
            subStr += this.str;
        }
        this.str = subStr;
        return this;
    }
}

StringBuilder.prototype.divide = function (n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        const k = Math.floor(this.str.length / n);
        let subStr = this.str.slice(0, k);
        this.str = subStr;
        return this;
    }
}

StringBuilder.prototype.remove = function (str) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        this.str = this.str.split(str).join('');
        return this;
    }
}

StringBuilder.prototype.sub = function (from, n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        const subStr = this.str.substring(from, n+1);
        return subStr;
    }
}

StringBuilder.prototype.get = function () {
    return this.str;
}

StringBuilder.prototype.reverse = function () {
    this.str = this.str.split('').reverse().join('');
    return this;
}

// let strBuilder = new StringBuilder('Hello');
// strBuilder.plus(' all', '!');
// strBuilder.minus(4);
// strBuilder.multiply(3);
// strBuilder.divide(4);
// strBuilder.remove('l');
// strBuilder.sub(1,1);
// strBuilder.get();
// strBuilder.reverse();