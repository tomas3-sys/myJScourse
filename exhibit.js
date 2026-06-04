const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose - unit price:", "rosePrice", "quantitiy", "numberOfRoses", "values:", rosesValue);
console.log("Lily - unit price:", "lilyPrice", "quantitiy", "numberOfLilies", "values:", liliesValue);
console.log("Tulip - unit price:", "tulipPrice", "quantitiy", "numberOftulips", "values:", tulipsValue);
console.log("Total value of flowers:", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose - unit price:", "rosePrice", "quantitiy", "nmberOfRoses", "values:", rosesValue);
console.log("Lily - unit price:", "lilyPrice", "quantitiy", "numberOfLilies", "values:", liliesValue);
console.log("Tulip - unit price:", "tulipPrice", "quantitiy", "numberOftulips", "values:", tulipsValue);
console.log("Toal:", total);

let name1 = "Maxwell Wright";
let name2 = "Raja Vilareal";
let name3 = "HelenRichards";

let phone1 = "(0191) 719 6495"
let phone2 = "0866 398 2895"
let phone3 = "0800 1111"

let email1 = "curabiturs.egestas@nonummyac.co.uk"
let email2 = "posuere.vulputate@sed.com"
let email3 = "libero@convallis.edu"

console.log("Name:", name1,"Phone:", phone1, "E-mail:", email1)
console.log("Name:", name2,"Phone:", phone2, "E-mail:", email2)
console.log("Name:", name3,"Phone:", phone3, "E-mail:", email3)

let  year  =  1990;
console.log(typeof year);
console.log(typeof 1991);

let Name = "Alice";
console.log(typeof Name);
console.log(typeof "Bob");

let typeofYear = typeof year;
console.log(typeofYear);
console.log(typeof typeofYear);

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = true;
continuelopp = true;

console.log(false);
console.log(typeof false);
console.log(isDataValid)
console.log(typeof isDataValid);

const Year = 1990;
let delayInseconda = 0.00016;
let area = (16*3.14);
let halfArea = area / 2;

console.log(Year);
console.log(typeof Year);

let a = 10;
let b = 0x10
let c = 0o10;
let d = 0b10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let x = 9e3;
let y = 123e-5;

console.log(x);
console.log(y);

let e = 1 / 0;
let f = -Infinity;

console.log(e);
console.log(f);
console.group(typeof e);
console.group(typeof f);

let s = "It's definetly of a number"
let n1 = s * 10;
console.log(n1);
console.log(typeof n1);

let big = 123456789000000000000n;
let big2 = 1n;

console.log(big);
console.log(typeof big);

console.log(big2);
console.log(7n / 4n);

let country = "Malawi";
let continet = "Africa";
let sentence = `${country} is located in ${continet}.`;
console.log(sentence);
console.log(country);
console.log(typeof country);
console.log(continet);
console.log(typeof continet);

let message1 = "The vessel 'Mars' called at the port";
let message2 = 'Cyclone"Cilida" to pass close to Mauritus.';
console.log(message1);
console.log(message2);

let path = "C:\\Windows";
console.log(path);
let path2 = "C:\\Windows"-"Windows";
console.log(path2);
let path3 = "C:\\Windows" + "Windows";
console.log(path3);
let test1 = "100" + "10";
console.log(test1);
console.log(typeof test1);
let test2 = "100" - "10";
console.log(test2);
console.log(typeof test2);

console.time();
console.log("This is a test message.");
console.timeEnd();
let river = "Mekong";
let character = river.charAt(2);
console.log(character);

let str = "java script language";
console.log(str.lenght);
console.log("test".length);
console.log(str.charAt(0));
console.log("abc".charAt(1));
console.log(str. slice (0, 4));
console.log(str.split(" "));
console.log("192.168.1.1".split("."));

let declaredVar;
console.log(typeof declaredVar);
declaredVar = 5;
console.log(typeof declaredVar);
declaredVar = undefined;
console.log(typeof declaredVar);

let someResource;
console.log(someResource);
someResource = null;
console.log(someResource);
console.log(typeof someResource);

const num1 = 42;
const strFromNum1 = String(num1);
const strFromNum2 = String(8);
const strFromBool1 = String(true);
const numFormStr = Number("312");
const boolFromNumber = Boolean(0);

let STR = "text";
let strStr = String(STR);
console.log(`${typeof STR} : ${STR}`);
console.log(`${typeof srtsStr} : ${strStr}`);
let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} : ${nr}`) ;
console.log(`${typeof strNr} : ${strNr}`);
let bl = true;
let strBl = String(bl)
console.log(`${typeof bl} : ${bl}`)
console.log(`${typeof strBl} : ${strBl}`)
let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`)
console.log(`${typeof strBl} : ${strBl}`)
let un = undefined;
let strUn = String(un);
console.log(`${typeof un} : ${un}`)
console.log(`${typeof strUn} : ${strUn}`)
let n = null 
let strN = String(n)
console.log(`${typeof n} : ${n}`)
console.log(`${typeof strN} : ${strN}`)

console.log(Number(42));
console.log(Number("11"));
console.log(Number("0x11"));
console.log(Number("0o11"));
console.log(Number("0b11"));
console.log(Number("12e3"));
console.log(Number("infinity"));
console.log(Number("text"));
console.log(Number(14n));
console.log(Number(123456789123456789123n)); 456800000
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

console.log(Boolean(true));
console.log(Boolean(42));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean("text"));
console.log(Boolean(""));
console.log(Boolean("undefined"));
console.log(Boolean("false"));

console.log(BigInt(11));
console.log(BigInt(0x11));
console.log(BigInt(11e2));
console.log(BigInt(true));
console.log(BigInt("11"));
console.log(BigInt("0x11"));

const str1 = 42 + "1";
console.log(str1);
console.log(typeof str1);
const str2 = 42 - "1";
console.log(str2);
console.log(typeof str2);

let bool = true;
let bool2 = Boolean(true);
let numb = 38;
let numb2 = Number(49);
let bigI = 1834600n;
let bigI2 = BigInt(79134);
let StR = "Sentinel";
let StR2 = String("Sentinel");
let nul = undefined; 

console.log(`${typeof bool} : ${bool}`)
console.log(`${typeof bool2} : ${bool2}`)
console.log(`${typeof numb} : ${numb}`)
console.log(`${typeof numb2} : ${numb2}`)
console.log(`${typeof bigI} : ${bigI}`)
console.log(`${typeof bigI} : ${bigI}`)
console.log(`${typeof StR} : ${StR}`)
console.log(`${typeof StR2} : ${StR2}`)
console.log(`${typeof undefined} : ${undefined}`)
let g = Boolean(BigInt(Number("1234")))
console.log(`${b} [${typeof b}]`)

let B = true + false;
let M = 100 + 200;
let bi = 100n + 200n;
let S = "He" + "llo";
let u = undefined + undefined;
console.log(`${B} [${typeof B}]`); // !!! number 
console.log(`${M} [${typeof M}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${S} [${typeof S}]`);
console.log(`${u} [${typeof u}]`); // !!! number

let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;
console.log(`${b1} [${typeof b1}]`);    // -> 101 [number];
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]

let testObj = {
    nr: 600,
    str: "text"
};
console.log(testObj.nr);
console.log(testObj.str);

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age : 66,
    email: "CalvinHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
}
console.log(user1.name);
console.log(user2.name);
user1.age = 68;
console.log(user1.age);
console.log(user2.phone);
user2.phone = "904-399-7575";
delete user2.phone;
console.log(user2.phone);

let days = ["sun", "mon","tue","wed", "thu", "fri", "sat"];
console.log(days[0]);
console.log(days[1]);
console.log(days[2]);
days[0] = "Sunday";
console.log(days[0]);
let emptyArray = [];
console.log(emptyArray[0]);

let animals = [];
console.log(animals[0]);
animals[0] = "dog";
animals[1] = "cat";

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

let names = [["Olivia","Emma","Mateo","Sofia"],["William","James","Daniel"]];
console.log(names[0][0]);
console.log(names[0][1]);
console.log(names[0][2]);

let femalenames = names[0];
console.log(femalenames[0]);
console.log(femalenames[2]);

let othernames = ["Olivia","Emma","Mateo","Samuel"]
console.log(othernames.lenght);
othernames[5] = "Amelia";
console.log(othernames.lenght);
console.log(othernames[3]);
console.log(othernames[4]);
console.log(othernames[5]);
console.log(othernames.indexOf("Mateo"));
console.log(othernames.indexOf("Victor"));
names.push("Amelia");
console.log(othernames.length);
console.log(othernames); 
let othername = othernames.pop();
console.log(othernames,length);
console.log(othername);
console.log(othernames);
othernames.reverse();
console.log(othernames);

let anothernames = ["Olivia","Emma","Mateo","Samuel",];
let N1 = anothernames.slice(2);
let N2 = anothernames.slice(1,3);
let N3 = anothernames.slice(0, -1);
let N4 = anothernames.slice(-1);
console.log(othernames);
let coolnames = ["Olivia","Emma","Mateo","Samuel",];
let othercoolnames = ["William", "James",]
let allcoolmnames = coolnames.concat(othercoolnames);
console.log(coolnames);
console.log(othercoolnames);
console.log(allcoolmnames);

let books = [{
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliot",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];