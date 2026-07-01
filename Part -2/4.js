// set time out and set intervals 

// setTimeout -> ek hi baar chalta h 

// in this we provide function and time in milliseconds 

// setTimeout(function(){
//     // abe console pe print hoga after 2 seconds
//     console.log("hello");
// } , 5000);


// setInterval -> baar baar chalta h yeh 

// setInterval(function(){
//     // this will run after every 3 sec 
//     console.log("Namaste");
// } , 3000)





// // clear Timeout and clear interval

// let tm1 = setTimeout(function(){
//     console.log("hello");
// } , 3000);


// clearTimeout(tm1);


// let tm2 = setInterval(function(){
//     console.log("Namaste");
// } , 3000);

// clearInterval(tm2)






// making a counter 

// let count = 10;


// let interval = setInterval(function() {
//     if(count >= 0)
//     {
//         console.log(count);
//         count--;
//     }
//     else{
//         clearInterval(interval);
//     }
// } , 1000)







// download progress bar 

let count = 0;

let interval = setInterval(function(){
    if(count <= 99)
    {
        count++;
        // adjust width acdording to count 
        document.querySelector(".progress").style.width = `${count}%`;
        document.querySelector("p").textContent = `${count}% downloaded`;
    }
    else{
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(interval);
    }

} , 5000 / 100)




// make auto hide alert banner after 3 seconds