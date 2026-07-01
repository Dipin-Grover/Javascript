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


// let sel = document.querySelector("select");


// let h2 = document.querySelector("h2");

// sel.addEventListener("change" , function(details){

//     h2.textContent = `${details.target.value} device selected`;
// })







// // task -  jo bhi hum screen pe dabaaye wo charcter aa jae 



// // hume pure screen pe karna h koi input pe nhi 

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown" , function(details) {
//     if(details.key === " ")
//     {
//         // for space key 
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = details.key;
//     }

    
// })







// //task  - create a ustome made button of upload file and then diplay file name that is selected on that button 


// // me chahta hu ki jaise hi custom button upload file pe click karu toh select file wal option aaye mere paas 


// let btn = document.querySelector("#btn");

// let file_inp = document.querySelector("#file_inp");


// btn.addEventListener("click" , function()
// {
//     file_inp.click();
// })


// file_inp.addEventListener("change" , function(details){
//     if(details.target.files[0])
//     {
//         // name h file ka 
//         btn.textContent = details.target?.files[0]?.name
//     }
//     else{
//         btn.textContent = "Upload files";
//     }

    
    
// })







// // submit event listener 

// // phle form ko rokna hoga details submit karne se 

// let form = document.querySelector("form");

// let cards_container = document.querySelector(".cards_container");

// let inputs = document.querySelectorAll("input");


// form.addEventListener("submit" , function(details)
// {
//     // form ki details ko prevent karo reload hone se phle toh 
//     details.preventDefault();

    
    


//     // value h details -> target[0].value yha 


//     // creating all elemnts

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let photo_sec = document.createElement("div");
//     photo_sec.classList.add("photo_sec");

//     let photo = document.createElement("div");
//     photo.classList.add("photo");

//     let info = document.createElement("div");
//     info.classList.add("info");

//     let img = document.createElement("img");
//     img.setAttribute("src" ,details.target[3].value );


//     let h3 = document.createElement("h3");
//     h3.textContent = details.target[0].value;


//     let h4 = document.createElement("h4");
//     h4.textContent = details.target[1].value;

//     let p = document.createElement("p");
//     p.textContent = details.target[2].value;


//     // ab sabko ek ke anadar ek daaldo (rearrangement)



//     card.appendChild(photo_sec);

//     photo_sec.appendChild(photo);

//     photo.appendChild(img);

//     card.appendChild(info);

//     info.appendChild(h3);

//     info.appendChild(h4);

//     info.appendChild(p);

//     cards_container.appendChild(card);

//     // end me input khali bhi karne h 

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit")
//         {
//             inp.value = "";
//         }
//     })


// })






// // mouseover and mouse out event listners 


// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover" , function()
// {
//     abcd.style.backgroundColor = "yellow";
// })


// abcd.addEventListener("mouseout" , function()
// {
//     abcd.style.backgroundColor = "red";
// })




// // mouse move 

// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove" , function(details)
// {
//     // clientX aur client Y pe aayega 

//     abcd.style.top = details.clientY + "px";
//     abcd.style.left = details.clientX + "px";
// })




// event bubbling 

// agar ek element pe evenet listner nhi laa hua h toh wo apne parent pe dekhaga agar wha hua toh usse execute kar dega 
// agar uspe bhi nhi hua toh apne parent ka dekhega aur agar wha laga hua toh usse execute kar dega 
// aisa kar kar ke upar jata h aur isey bolte h event bubbling 



// let nav = document.querySelector(".nav");



// nav.addEventListener("click" , function(){
//     alert("clicked nav");
// })





// yha button pe koi event listner nhi h isliye parent nav pe jaayega agar uspe bhi nhi hota toh main div pe jata 

// agar nav aur main dono ka likha hua hoga toh phle clciked nav aayega -> clicked main aayega 




// let ul = document.querySelector("ul");

// ul.addEventListener("click" , function(details)
// {
//     details.target.classList.toggle("line_through");
// })





// event capturing 
// 1st phase capturing phase hota h jisme outer parent se se uss child tak jaata h jispe event laga hua ho 
// 2nd phase hota h bubbling phase jisme uss elemnts jispe event laga hua hota h wha se bhar parent ki taraf jaata h 


let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn =document.querySelector("button");


// // working of event bubbling phase 

// btn.addEventListener("click" , function()
// {
//     console.log("button clicked");
// });

// c.addEventListener("click" , function()
// {
//     console.log("c clicked");
// })

// b.addEventListener("click" , function()
// {
//     console.log("b clicked");
// })

// a.addEventListener("click" , function()
// {
//     console.log("a clicked");
// })



// abhi toh yha bas phase 2 lag rha h thta is event bubbling phase 

// lets see working of phase 1 that is event capturing phase 


// working of event capturing + evet bubbling phase


// jha true h wo honge in event capturing phase me -> bhar se andar chalega ye phase me 




// btn.addEventListener("click" , function()
// {
//     console.log("button clicked");
// });

// c.addEventListener("click" , function()
// {
//     console.log("c clicked");
// } , true)

// b.addEventListener("click" , function()
// {
//     console.log("b clicked");
// })

// a.addEventListener("click" , function()
// {
//     console.log("a clicked");
// } , true)



let span = document.querySelector("span");

let input = document.querySelector("input");


// input.addEventListener("input" , function(details)
// {
//     span.textContent = input.value.length;
// })


// see how many charcters left 


input.addEventListener("input" , function()
{
    let left = 20 - input.value.length;
    span.textContent = left;
    if(left >= 0)
    {
        span.style.color = "white";

    }
    else{
        span.style.color = "red";
    }
})
