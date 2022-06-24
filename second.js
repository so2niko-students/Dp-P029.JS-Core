//!Expression and operators

let a = "3";
//унарні оператори
+a; //3
-a; //-3
!a; //ні - неявне переведення до boolean протилежного

//? to boolean
const obj = {}; // TRUE
const str = "Hello"; // TRUE
const strEmpty = ""; // FALSE
const str0 = "0"; //
const num1 = 2022; // TRUE
const num2 = -0.432; //TRUE
const num3 = 0; // FALSE
const numNaN = 3 * "cloud"; // FALSE
const null1 = null; // FALSE;
const und = undefined; //FALSE
const b22 = 22n; //TRUE
const b0 = 0n; //FALSE

if (b0) {
  console.log("true");
} else {
  console.log("false");
}

~a; //двійковий ні
a++; // a = a + 1;
++a; // a = a + 1;
a--; // a = a - 1;
--a; // a = a - 1;

typeof a;

//бінарні

a * 4;
a + "3";
a ** 3;
a % 3;
a == "3"; //true
a === "3"; //false
a != 22;
a !== "3";

//тернарні
if (a) console.log("a is true");
a ? console.log('it is true') : console.log('it is false');
(a) ? console.log('it is true') : console.log('it is false');