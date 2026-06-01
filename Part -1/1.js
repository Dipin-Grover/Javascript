// // words vs keywords 

// // javascript me aise words jinka kuch specific meaning hota h wo reserved words hote h 
// // aur inhe  keywords bolte h 
// // eg for ,  let  , else ,  function ye sab 


// // jabki aise words jinka koi specifically koi meaning nhi hota h javascript me inhe normal words kehte h 
// // eg lolo dipin , nipun etc




// // topic -1 var let and const decalrations 

// var a; // decalration  ,  yha a ko bas bnaya h 
// var a = 12; // decalration + initialization  ,  yha a ko bnaya bhi aur decalre bhi kiya 

// // same with let 

// // let b; // decalration 
// // let b =  13; // decalration + initialization 


// // problems with var 
// // 1. window me add hota h 
// // 2. function scoped hota h 
// // 3. hum same name se 2 varibales decalres kar sakte h error nhi aayega 


// //eg 
// var a = 12;
// var a = 145;

// // no error 

// // but in case of let 

// // let c = 13;
// // let c = 15;
// // // we will get error 



// var x = 34;
// let y = 12;


// function abcd()
// {
//     if(12 < 15){
//         var a = 56;

//     }

//     // maine a ko decalre kia inisde if statement but me if ke bhar bhi access kar paa rha hu usse that is problem

//     console.log(a);
// }


// abcd(); // abcd call 



// // global scoped  , functional scoped  , bloack scoped 



// // global scoped matlab hum varibale ko khi se bhi access kar sakte h 
// let p = 67;
// // ye jo p h isse hum khi se bhi access kar sakte h ab after decalration 


// function pqrs()
// {
//     let q = 90; // ye q varibale ko hum pqrs ke andar se hi access kar sakte h so functional scoped 

//     if(12 <  78)
//     {
//         var u = 16; // ye var u ko humne if statemnt ke anadar decalre kiya h but hum isse bhar se bhi access kar sakte h 
//         //because var is functional scoped respect only functions

//     }

//     console.log(u);
//     console.log(q);



// }

// pqrs();



// // block scoped 

// if(12 < 78)
// {
//     let f = 23;

//     console.log(f);
//     // this is bloack scoped 
// }


// // reasssignment and redecalration 

// var t = 78;

// t = 39; // this is reassignment

// let h = 34;

// h = 56; // this is reassignment


// var t = 87; // this is recdecalration which is allowed using var but not using let 











// temporaral dead zone 
// tdz wo area hota h jisme js ko pta toh h ki variable aage exist karta h but wo aapko value laake nhi de sakta h 

// for eg 


console.log(g); // ye error dega cannot access before initialiazation 



let g = 123; // maine  yha bnaya but me access kar rha hu line 128 pe line 128 me yeh tdz me h 





// so baasiclly tdz wo area hota h jha hum let aur const se bane hue variables ko aces nhi kar paate before they are defined 











// hoisting impact per type 

// hoisting -> jab bhi hum js me ek variable ko bnate h toh wo do hisso me tut jata h 
// 1st  part decalration jo upar chala jaata h 
// 2nd aprt initialization part jo niche rh jaata h 

// for eg 

var p = 45;

// ye aise tut jata h 

var p = undefined ; // ye top pe jaake baith jata h 
p = 45; // ye whi rhta h 

// ye aise break hota h 




// hoisting summary 

// var -> hoist hota h -> undefined value set hoti h 
// let -> hoist hota h -> no value set 
// const -> hoist hota h -> no value set 


// let aur const me temporal dead zone aata h matlab hum isko initiaze se phle acces karne ki koshish  karenge toh refernce error aayega 


