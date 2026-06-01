// operators 

// arithmatic operators 

// +  , - ,  *  ,  /  ,  **  ,  %  -> arithmatic operators 


let a = 12;
let b = 23;

console.log(a + b); // normal addition as both are numbers

// + also do concationation 
console.log("ha" + "rsh"); // here concatination hua h 


// - 
console.log(a - b);

// * 
console.log(a * b);

// /
console.log(a / b);

// **
console.log(2 ** 3); // 2 ki power 3 


// %
console.log(23 % 3); // gives remainder 


// assignment operator

let q = 89;// yha humne 89 assign kia h q ko 


// comparison operators 

// == not strict comparison 

console.log(12 == 12); // dono number h aur same h 

console.log(12 == "12"); // yha lhs wala ek number h aur rhs wala ek string h 

console.log(12 == 13); // false

console.log(12 == "13");// false


// === strict comparison operators 

console.log(12 === 12);

console.log(12 === "12") // false as ek number h aur ek string h yeh data type bhi check karta h 

// == yeh typecast kar sakata h  12 == "12" aayega 
// === yeh typecast nhi karega  strict h 



// != 

console.log(12 != 12); // false
console.log(12 != 13); // true


// !== (strict)

console.log(12 !== "12") ; // true
console.log(12 !== 12); // false



// >
console.log(12 > 6);
console.log(12 > 17);
console.log(12 > 12);


// < 
console.log(12 < 6);
console.log(12 < 17);
console.log(12 < 12);

// >=
console.log(12 >= 6);
console.log(12 >= 17);
console.log(12 >= 12);

// <=
console.log(12 <= 6);
console.log(12 <= 17);
console.log(12 <= 12);


// assignment 

let g = 14;

g += 3; // g = g+3 , g = 17
g -= 2; // g = g-2 , g = 15
g *= 3; // g = g*3 , g = 45
g /= 3; // g = g/3 , g  = 15
g %= 2; // g = g%2 , g = 1
g **= 3; // g = g**3 , g = 1



// logical operators 

// && -> logical and 

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


// || -> logical or 

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ! -> logical not 

console.log(! true); // false
console.log(! false); // true



// uniary operators 

// + 
// agar maine ek string jo number me convert ho sakti h uske aage + lagaya toh wo number me convert ho jaayega 

// eg +"123" -> 123

// eg +"Dipin" -> NaN


// - ->  bas number ko negative bna deta h 

// ! -> logical not 

console.log(!true) ; // false
console.log(!false) ; // true


// type of 

console.log(typeof "Dipin");
console.log(typeof 15.78);


// ++ 

let u = 5;
console.log(u++); //phle u print hoga then u++
console.log(++u); // phle u increment hoga then print 

// -- 
let r = 4;
console.log(u--); // phle u print hoga then decrease
console.log(--u); // phle u decrease hoga then print 


// ternary operator 

12 > 13 ? console.log(true) : console.log(false);
// agar condition true hui toh phli condition execute hogi 
// agar condition false hui toh dusri condition ececute hogi 





// instance of 

let arr = [1,2,3];

console.log(arr instanceof Array); // arr instance h array ka -> true 


let obj_1 = {
    name : "Dipin" ,
    age : 22
}

console.log(obj_1 instanceof Object); // obj_1 instance h object ka -> true
