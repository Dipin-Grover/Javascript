// // section -2 event and event listeners 


// // event matlab hota h koi action hua 

// // event listener ka matlab hota h koi action ka reaction diya aapne 



// // event listener example 

// let p = document.querySelector("p");


// p.addEventListener("click" , function(){
//     p.style.color = "green";
// })

// // indivisual function bna dia taki me add karte time aur remove karte time function ko passs kar pau 
// function dblclick()
// {
//     p.style.color = "yellow";
// }
// p.addEventListener("dblclick" , dblclick);



// // single click pe green aur double click pe yellow



// // removing event listener 

// // remove karte waqt bhi aapko evenet listner ka name pass karna h aur wo function jo add karte time pass kia tha 

// p.removeEventListener("dblclick" , dblclick);



// // so me ek function phle bna lunga taki add bhi kar pau aur remve bhi kar pau uss evenet listener ko 







// // click event listner 
// // already seen above 


// //one more example 


// let p = document.querySelector("p");

// p.addEventListener("click" , function(){
//     p.style.color = "red";
// })

// // same we can also use dblclick event listener 





// // input event listener


// // phle select karo input ko 

// let inp = document.querySelector("input");


// // then event listner add karo 
// inp.addEventListener("input" , function(details){

//     // backspace key ke case me null de rha h 

//     if(details.data != null)
//     {
//         console.log(details.data);
//     }
// })






// change event listener 

// change event listner tab chalta h jab input  , select ya textarea inme koi chnages ho jae 


let sel = document.querySelector("select");


let h2 = document.querySelector("h2");

sel.addEventListener("change" , function(details){

    h2.textContent = `${details.target.value} device selected`;
})






