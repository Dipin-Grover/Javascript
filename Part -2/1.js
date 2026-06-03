// // DOM and dom manipulation 
// // DOM -> Document Object model 


// // selecting element by id 

// let abcd = document.getElementById("abcd");

// console.log(abcd);



// // selecting elemnt by class name 

// // bhot saare elements ke upar same classes lag sakti h so inka collection ek array like hoga hum usse html collection bolte h 


// let abcd_1 = document.getElementsByClassName("abcd_1");
// console.log(abcd_1);

// // yeh ek html collection for karte h as multiple elements can have same classes which is a array like structure 







// // using query selector -> latest used methods 


// let head_1 = document.querySelector("h1");
// // phla h1 jo hoga document me ussse select karega yeh 

// console.log(head_1);




// // using query selector all

// let headings = document.querySelectorAll("h1");
// // saari headings ko select kar lega 

// console.log(headings);

// // multiple elemnts ho sakte h toh yeh hume eke array like structure dega called nodelist









// // dom text manipulation 

// let h1 = document.querySelector("h1");

// console.dir(h1);

// // innerhtml html change karne ke lie hota h 
// // h1.innerHTML = "<i>namaste sabko</i>";


// // innertext aur text content text change karne ke lie hote h 

// // h1.innerText = "aandhi banke aaya hu.";


// h1.textContent = "suraj hua madhyam chaand jalne laga";





// // set attribute 

// let img = document.querySelector("img");
// let a = document.querySelector("a");

// console.dir(img);

// img.setAttribute("src" , "https://i.pinimg.com/736x/8b/a9/d6/8ba9d66e1724e084e252a95c6a621803.jpg");

// img.setAttribute("height" , "400px");

// img.setAttribute("width" , "300px");

// a.setAttribute("href" , "https://www.google.com/");

// console.dir(a);



// // get attribute 

// console.log(img.getAttribute("src"));

// console.log(a.getAttribute("href"));


// // remove attribute 

// a.removeAttribute("href");







// // creating html element 


// // sabse phle html elemnt create karo 
// // then append ya phir prepend karo jha bhi element chaiye 



// let h1 = document.createElement("h1");

// h1.textContent = "teri yaadon me khoya rhta hu";


// // ab body me daalo 
// document.querySelector("body").prepend(h1);




// // example 

// let outer = document.createElement("h1");
// outer.textContent = "hey me bhar se aaya hua hu.";

// let div = document.querySelector("div");
// document.querySelector("div").prepend(outer);

// // this is how to remove a child 
// div.removeChild(outer);






// // changing css with help of JS 

// let h1 = document.querySelector("h1");

// h1.style.color = "red";

// h1.style.fontSize = "50px";

// h1.style.fontFamily = "Georgia";

// // this is how we can change styling using js first by selecting elemnt then changing 




// much better way is by using classes 

let h1 = document.querySelector("h1");


// maine sarri styling css me likh li ab me class attch karna chahta hu using js 


// aise hum ek classs ko add kar sakte h using js 
h1.classList.add("hulu");


// remove karne ke lie 
h1.classList.remove("hulu");


// toggle -> class hati hui hogi toh usse laga dega aur agar class lagi hui hogi toh usse hata dega 

h1.classList.toggle("hulu");






// innertext vs textcontent vs innerhtml 

// innerhtml toh html diplay karta h 

// innertext wale me hidden text display nhi hota h 
let inner = document.querySelector(".inner");

// text content sab display karta h chahe text visible ho ya phir hidden 
let text = document.querySelector(".text");

console.log(inner);

console.log(text);



