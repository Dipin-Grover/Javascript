
// data types + type system 


// two types ke data types h primitives and refernces 

// primitive data types wo h jinko copy karne par hume ek real copy mil jaaye 
// eg number  ,  string  , boolean  , undefined ,  null , symbol , bigint

// refernce data types wo h jinko copy karn par hume real copy na mile but aapko refercne milega parent ka 
// eg arrays ,  functions ,  object 



// string -> string ko hum ''-> single quote  , "" -> double quotes  , ``-> backtick 
// aise represent karte h 
// for eg 
let name_1 = 'Dipin'; 
let name_2 = "Harsh";
let name_3 = `Vijay`;


// number 
let num_1 = 12;
let num_2 = 12.688;
// dono number h 


// boolean 
let bool_1 = true;
let bool_2 = false;

//null 
let selected_student = null;

// iska matlab h ki humne abhi koi student select nhi kia hua h isliye null h 
// ho sakata h aage jake hum koi student select kare aur null se hat paaye 

// null hum tab use karte h jab hume pta nhi hota uski value kya h but aage jaake uski value mil jaaye 


// undefined -> humne ek variable bnaya aur usse koi value nhi di toh jo by default value mili usse wo hoti h undefined 


let new_var;


// jab bhi hum ek variable bnate h aur usse koi value nhi dete toh jo by default value milti h wo hoti h undefined 



// big int 
let big_num = 136987972093809990n; // last me n laga do 


big_num = big_num + 8n; // 8 jod do 



// refernce data types 

let arr = [1,2,3,4];

let brr = arr;

brr.pop();
// maine brr me change kia arr me nhi hona chaiye but arr me bhi ho rha h changes 


let obj_1 = {
    name : "Dipin" , 
    age : 22,
    gender : "male"
}

let obj_2 = obj_1;

obj_2.name = "Samay";

// obj_1 -> {name: 'Samay', age: 22, gender: 'male'}
// obj_2-> {name: 'Samay', age: 22, gender: 'male'}

// dono me same aa gya h 


// javascript me dynamic typing hoti h 

let var_a = 12;
var_a = "Galgotia" ; 
var_a = true;
var_a = [1,2,3,4,5];
var_a = undefined;
// var_a me hi sab aa sakta h 




// type of quirks in javascript 

// we can check data type using typeof operator 

// 1. typeof null -> object deta h 

// 2. NaN === NaN -> false deta h 

// 3. 1(number) + '1'(string) = '11'(string)

// 4. 1(number) - '1'(string) = 0(number)





// type coercison 
// ye ek data type ko dusre data type me convet kar deta h 


// eg '5'(string) + 4(number)   = '54' (string) ,  yha concationation hua h 

// eg `5`(string) - 4(number)  = 1(number) ,  yha normal subtraction hua h 




// truthy and falsy values 

// "" , undefined ,  null , false , document.all , NaN , 0 , 0n (used for big int)

// baaki sab truthy values h js me 
