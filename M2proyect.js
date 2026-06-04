"use strict"

const x = 5
const y = 2
console.log("adiition", x + y);
console.log("subtraction", x - y);
console.log("multiplication", x * y );
console.log("division", x / y);
console.log("div.remainder", x % y);
console.log("exponentacion", x ** y);

let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
console.log(`${str} : ${typeof str}`);
console.log(`${n1} : ${typeof n1}`);
console.log(`${n2} : ${typeof n2}`);
console.log(`${n3} : ${typeof n3}`);
console.log(`${n4} : ${typeof n4}`);

let N1 = 10;
let N2 = 10;
console.log(N1);
console.log(N1++);
console.log(N1);
console.log(N2);
console.log(++N2);
console.log(N2)
let N3 = 20;
let N4 = 20;
console.log(N3);
console.log(N3--);
console.log(N3);
console.log(N4);
console.log(--N4);
console.log(N4);

let X = 10;
X += 2;
console.log(X);
X -= 4;
console.log(X);
X *= 3;
console.log(X);
X /= 6;
console.log(X);
X **=3;
console.log(X);
X %= 10;
console.log(X);

let nr = 0;
let year = 1970;
let Name = "Alicia";
let empty = "";
console.log(!nr);
console.log(!year);
console.log(!Name);
console.log(!empty);
console.log(!!nr);
console.log(!!Name);
console.log(true && 1991);
console.log(false && 1991);
console.log("Alice"&&"Bob");
console.log(true || 1991);
console.log(false || 1991);
console.log(2||5);
console.log(0||5);
console.log("Alice"||"Bob");
console.log(""||"Bob");