// local storage  , session storage  , cookies 

// localstorage -> aapke browser ke andar ye data ko store rakhta h  , ye aisa data h jo browser ke band hone par bhi delete nhi hoga 


// sessionstorage -> ye browser ke andar data ko temporily store karta h jaise hi hum tab ko band karenge data gayab ho jaayega 

// cookies -> ye bhi data ko store karta h permanently but yeh chote data ko store kar sakata h bade data ko nhi 


// local storage 


// // storing in localStorage
// localStorage.setItem("name" , "Dipin Grover");

// // fetching fom localStorage
// let value = localStorage.getItem("name");
// console.log(value);


// // removing from localStorage
// localStorage.removeItem("name");


// // updating - using setItem
// localStorage.setItem("name" , "Shivam Kumar Kashyap");

// // clear using local storage 
// localStorage.clear();


// // session storage 


// // adding item in session storage 

// sessionStorage.setItem("name" , "shivam kashyap");


// // fetching from session staorage 
// console.log(sessionStorage.getItem("name"));



// // removing from session storage 
// sessionStorage.removeItem("name");

// // updating from session storage 
// sessionStorage.setItem("name" , "harshita kukreja");


// // clear using session storage 
// sessionStorage.clear();



// // cookie 

// document.cookie = "email=dipin@gmail.com";


// document.cookie = "age=22";


// // i deleted whole cookies and try to access document.cookie 

// console.log(document.cookie);


// // local storage me hum khali string hi bhejenge kuch aur like array  , object nhi bhej sakate h 
// // agar hume array object wagera bhejne h toh hume -> phle inhe string me convert karna hoga using "JSON.stringify"
// // then hum store kar payenge 
// // link fetch karte time hume jo array stringify karke bheja wo string ki form me milega 
// // hume usse parse karna hoga using JSON.parse



// // local storage empty kar di h 
// localStorage.setItem("frinds" , JSON.stringify(["rahul" , "keshav" , "sumit"]));


// // ab parse karke nikaal lo 
// console.log(JSON.parse(localStorage.getItem("frinds")));





// making a theme toggler 


// 1. OS ka theme dekho agar light theme h toh light theme agar dark theme h toh dark theme 


let saved_theme = localStorage.getItem("theme");

if(saved_theme == "dark")
{
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}
else if(saved_theme == "light")
{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
else{

    // agar local storage me kuch nhi h toh OS ki theme follow karo 
    set_dark_or_light();
}

function set_dark_or_light()
{
        // agar dark theme match hua toh drk theme laga do 
    if(window.matchMedia("(prefers-color-scheme: dark)").matches)
    {
        // add dark class 
        document.body.classList.add("dark");
        // remove light class if exists
        document.body.classList.remove("light");

        
    }
    else{
        // add light class 
        document.body.classList.add("light");
        // remove dark class if it exists
        document.body.classList.remove("dark");

        
    }
}





// agar me change karu dark -> light ya light -> dark toh yeh bhi change ho 
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change" , function()
{
    if(localStorage.getItem("theme") == null)
    {
        // no theme stored in local storage 
        set_dark_or_light();
    }
})


// 2. set acoording to toggle button 


let btn = document.querySelector("button");

btn.addEventListener("click" , function()
{
    if(document.body.classList.contains("dark"))
    {
        // remov dark add light 
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        // update in local storage 
        localStorage.setItem("theme" , "light");
    }
    else{
        // remove light and add dark 
        document.body.classList.remove("light");
        document.body.classList.add("dark");

        // update in local storage 
        localStorage.setItem("theme" , "dark");
    }
})




