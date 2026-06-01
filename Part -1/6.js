// functions 



//1. first way 
// isey hum funcion stateemnt kehte h 

function hny()
{
    console.log("Happy new Year.");
}

// ab jab mujhe chalana hoga function tab chalaunga  aur jitni baar chalana hoga utni baar chalaunga 

hny();
hny();
hny();

// 2. second way of declaring functions using variable 
// isey hum function expression kehte h varibale se bane hue functions ko 

let func_1 = function()
{
    console.log("hehehehehehehe");
    
}
// ab function call karne ke lie variabele ko call kardo 

func_1();
func_1();


// 3. using fat arrow functions 

let func_2 = () => {
    console.log("hip hip hurray");
}

func_2();
func_2();



// passing arguements 


function dance(animal)
{
    console.log(`${animal} naach rha h .`)
}

dance("horse");
dance("more");
dance("kabootar");
dance("hiran");



// yha value_1 , value_2 paramters h 
function addition(value_1 , value_2)
{
    console.log(value_1 + value_2);
    
}

// jo actual values jati h function me wo arguement h 
addition(12 , 23);
addition(2 , 7);

// function with parameters and arguements 



// use of defualt parameters 


function temp(val_1 , val_2)
{
    console.log(val_1 + val_2);
}
temp(3); // maang rha tha 2 value bheji 1 toh val_1 toh 3 hogi and val_2 hogi undefined 

// so 3 + undefined -> NaN




// me default parameter ki value daal sakta hu 

function temp_1(val_1 = 3  , val_2 = 23)
{
    console.log(val_1 + val_2);
}

temp_1(); // koi value nhi di toh val_1 = 3 and val_2 = 23 so addition  = 26
temp_1(2); // ab val_1  = 2 h aur val_2 = 23 sum = 25
temp_1(34 , 12); // ab val_1 = 34 , val_2 = 12 sum  = 46




// rest operator 

// maine 9 arguement pass kie but me chahta hu ki 9 paramters pass na karne pade toh i will se rest operator 

function abcd(a , b , c , d , ...val)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(val); // yeh ek array hoga 
}

abcd(1,2,3,4,5,6,7,8,9);

// maine 9 arguements pass kie h but 5 hi paremeters pass kie phle 4 arguements 4 parameters me aaynge baaki sab bache hue val me 


// another example 
function defg(a , b , ...val)
{
    console.log(a , b , val);
    // yha val ek array h [3,4,5]
}

defg(1,2,3,4,5);



// return from function 


function pqrs(val)
{
    return val + 10;
}

let value = pqrs(12);
// ab value me h 12 + 10 = 22


function qw()
{
    return "hello";
}

let val_1 = qw(); // qw ki jagah aaya hoga hello 
console.log(val_1);





// first class funcions -> iska matlab h ki hum funcions ko values ki tarah treat kar skate h 


// 1. hum function ko varibale ke andar daal skate h 

let func = () => {
    console.log("hello ji namaste");
}

func(); // function ko call kia using varibele name 



// 2. passing function as arguement 

function call(func)
{
    func();
}


call(function(){
    console.log("namaste");
});
// yha humne call function ke anadar arguement ek function dala h 




// 3. returning a function 


function say_hello()
{
    return function(){
        console.log("i will return hello");
    }
}

let val_2 = say_hello();
// say_hello ek function return karta h so val_2 me ek function hoga 
val_2(); // calling val_2 as val_2 ke andar ek function h 




// higher order functions 
// aise functions jo ya toh arguements me ek functions pass kare ya phir return akre ek function 

// ya toh argurment me function pass karo ya phir return karo ek function 



// eg 

function qwer(val)
{
    val();
}

qwer(function(){
    console.log("hehehe");
})

// yha function ko as arguement pass kia hua h so yeh ek higher order function h 


function ert()
{
    return function()
    {
        console.log("Namaste");
    }
}

let value_1 = ert(); 
// yha ert return karta h ek function jo jaayega value me 
value_1();
// yha ert function return kar rha h ek function so yeh ek higher order function h 





// pure vs impure functions 

// pure functions -> aise functions jinse bhar ki value pe koi changes na ho wo hote h pure funtions 

// impure functions -> aise functions jinse bhar ki value pe change ho wo hote h impure functions 

//eg 

let val_3 = 23;
function temp_2()
{
    console.log(val_3);
}

// maine kuch value ko change nhi kia bas print kia so pure function 


function temp_3()
{
    val_3--;
    // maine bhar ki value ko change kar dia so impure function 

}



// closures in js 

// closures ek aisa function hota h jo parents ke varibeles ko yaad rakhta h aur unhe acess karne deta h even after the aprent function have finished its execution


function counter()
{
    // private variable 
    let count = 0;

    return function(){

        count++;

        return count;
    }
}

let temp_val = counter();

// function call 
console.log(temp_val());
console.log(temp_val());
console.log(temp_val());
console.log(temp_val());
console.log(temp_val());
console.log(temp_val());




// lexical scoping 


function uiop()
{
    // can access a inside whole function uiop
    let a = 10;

    function htyu()
    {
        // can access b inside whole function htyu
        let b = 20;

        function cgty()
        {
            // can access c inside whole function cgty
            let c = 30;
        }
    }
}


// this is lexical scoping ki me kha se us variabele ko access kar skata hu 




// IIFE - immedietely invoked function expression 

// ye ek aisa function hota h jiko hum immedetely call kar dete h 
(function(){
console.log("hehehehe");
})();









// hoisting differnce 

asdf(); // ye hoist hoga 





// ye hosist hoga lekin jab me function ko variabele ke anadar daal dunag toh wo hoist nhi hoga 
function asdf()
{
    console.log("hehehehe")
}




// cfgh(); // error dega as varibale ke anadar wale function hoist nhi honge 



// let cfgh = function()
// {
//     console.log("hehehehe");
// }




// Q1 convert a function  to a arrow function 

let multiply = (a , b) =>{
    return a * b;
}


console.log(multiply(12 , 4));




// Q2 use rest parameter to accept nay number of scores and return total 



function gthy(...pqr){
    let total = 0;
    
    pqr.forEach( function (val){
        total += val;
    })

    return total;
}


console.log(gthy(10,12,14,16,18,20));






// write a bmi calculator logic 

function bmi(weight , height)
{
    return weight / (height * height);
}


console.log(bmi(58,1.75).toFixed(3));





function discount_calculator(discount)
{
    return function(price){

        return price - (discount/100) * price;
    }
}


let ten = discount_calculator(10);
ten(1000); // yeh 10 % off dega 1000 rs pe 
let twenty = discount_calculator(20);
twenty(1200); // yeh 20% off dega 1200 rs pe 






function counting()
{
    let count = 0;

    return function()
    {
        count++;
        return count;
    }
}

// fresh counting for cntand it will hold 
let cnt = counting();
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());


// new counting for cnt_2 and it will hold 
let cnt_2 = counting();
console.log(cnt_2());
console.log(cnt_2());
console.log(cnt_2());
console.log(cnt_2());
console.log(cnt_2());


