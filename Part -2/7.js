// bonus project secrions 

// notes app for contact with differnt categories 


// sabse phle jaise hi + button dabau form appear ho jana chaiye 

let add_btn = document.querySelector(".add-btn");
let form = document.querySelector("form");
let form_display = document.querySelector(".form-overlay");
let controls = document.querySelector(".controls");
let card_stack = document.querySelector(".card-stack");
let priority_indicator = document.querySelector(".priority-indicator");

let form_close_btn = document.querySelector(".close-btn");


add_btn.addEventListener("click" , function()
{
    form_display.style.display = "flex";

    // baki cards wagera ko display none karna h 

    controls.style.display = "none";
    card_stack.style.display = "none";
    priority_indicator.style.display = "none";

})

// localstorage me data save bhi karna h 




// jiase hi me close button click karu iska display none form ka baaki ka initial 

form_close_btn.addEventListener("click" , function()
{
    form_display.style.display = "none";

    // baki card ko phirse lao 
    controls.style.removeProperty("display");
    card_stack.style.removeProperty("display");
    priority_indicator.style.removeProperty("display");
})

let create_note = document.querySelector(".create-btn");

create_note.addEventListener("click" , function()
{
    let image_url = document.querySelector(".image_url").value.trim();
    let full_name = document.querySelector(".full_name").value.trim();
    let home_town = document.querySelector(".home_town").value.trim();
    let purpose = document.querySelector(".purpose").value.trim();

    if(image_url === "")
    {
        alert("Enter valid image url");
        return;
    }

    if(full_name === "")
    {
        alert("Enter valid full name");
        return;
    }

    if(home_town === "")
    {
        alert("Enter valid home town");
        return;
    }

    if(purpose === "")
    {
        alert("Enter valid purpose");
        return;
    }

    // radio button bhi filled hone chaiye
    
    let radio_inputs = document.querySelectorAll('input[type="radio"]');

    let radio_selected = false;
    let priority;
    radio_inputs.forEach(function(inp){
        if(inp.checked)
        {
            radio_selected = true;
            priority = inp.value;

        }
    })

    if(radio_selected == false)
    {
        alert("please select radio button");
        return;
    }


    // now storing in localstorage
    // creating object 

    let obj = {
        image_url : image_url , 
        full_name : full_name , 
        home_town : home_town , 
        purpose  : purpose , 
        priority : priority
        
    }

    // see local storage 
    // array of object

    let objects = JSON.parse(localStorage.getItem("objects")) || []


    // push the object in array 
    objects.push(obj);


    // objects jo abhi array tha usse string me convert karo aur local storage me daaldo
    localStorage.setItem("objects" , JSON.stringify(objects));

    // immediately show new card
    render_cards();

    // hide form
    form_display.style.display = "none";

    // show UI again
    controls.style.removeProperty("display");
    card_stack.style.removeProperty("display");
    priority_indicator.style.removeProperty("display");

    form.reset();

    



})


// show only cards in local storage 

let stack_cards = document.querySelector(".card-stack");

function render_cards()
{
    stack_cards.innerHTML = "";

    let obj = JSON.parse(localStorage.getItem("objects")) || [];
// array of objects 

// har ek pe jao array ke andar object pe 
    obj.forEach(function(ob , index){

        // create card 
        let card = document.createElement("div");

        card.classList.add("call-card")

        if(index == 0)
        {
            card.classList.add("active");
        }

        else if(index == 1)
        {
            card.classList.add("second");
        }
        else if(index == 2)
        {
            card.classList.add("third");
        }
        else
        {
            card.style.display ="none";
        }


        // each card 
        card.innerHTML = `
        <div class="card-top">
        <img src="${ob.image_url}" alt="">
        <h2>${ob.full_name}</h2>
        </div>

        <div class="details">
            <div>
                <p>Home Town</p>
                <p>Purpose</p>
            </div>

            <div class="right-text">
                <p>${ob.home_town}</p>
                <p>${ob.purpose}</p>
            </div>
        </div>



        <div class="actions">
            <button class="call">
                <i class="fa-solid fa-phone"></i>
                Call
            </button>

            <button class="message">
                Message
            </button>
        </div>
        `

        // append card to stack 
        stack_cards.appendChild(card);
    })

    
}

render_cards();

form_display.style.display = "none";

controls.style.removeProperty("display");
card_stack.style.removeProperty("display");
priority_indicator.style.removeProperty("display");

form.reset();



// adding functionality of up and down buttons 


// adding functionality of previous button 
// [a,b,c,d] -> [b,c,d,a]

let prev_button = document.querySelector("#prev_btn");


prev_button.addEventListener("click" , function(){

    let objects = JSON.parse(localStorage.getItem("objects")) || [];


    if(objects.length <= 1)
    {
        // only single card
        return;
    }

    let first = objects.shift(); // remove first card
    objects.push(first);// add first card at the end


    localStorage.setItem("objects" , JSON.stringify(objects));

    render_cards();
})


// adding functionality of down button 
// [a,b,c,d] -> [d,a,b,c]
let down_btn = document.querySelector("#next_btn");


down_btn.addEventListener("click" , function(){

    let objects = JSON.parse(localStorage.getItem("objects")) || [];


    if(objects.length <=1)
    {
        // only single card
        return;
    }

    let last_card = objects.pop(); // remove last card
    objects.unshift(last_card); // add last card at top

    localStorage.setItem("objects" , JSON.stringify(objects));

    render_cards();

})

