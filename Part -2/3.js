// forms and form validations 

// let form = document.querySelector("form");
// let name = document.querySelector("#name");

// form.addEventListener("submit" , function(details)
// {
//     // prevent form from submisiion 
//     details.preventDefault();


//     if(name.value.length <=2)
//     {
//         // display error 
//         document.querySelector(".name").style.display = "initial";
//     }
//     else{
//         document.querySelector(".name").style.display = "none";
//     }
// })



// regex teting

// let form = document.querySelector("form");

// form.addEventListener("submit" , function(details){
//     // prevent form from submission 
//     details.preventDefault();

//     let email_regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//     let ans = email_regex.test("a@a.a");

//     console.log(ans);
// })




// email password validator task 
let form = document.querySelector("form");
let email_inp = document.querySelector("#email_inp");
let password_inp = document.querySelector("#password_inp");



form.addEventListener("submit" , function(details)
{
    details.preventDefault();
    // ab form submit nhi hoga 

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

   

    // test hoga emial inp pe yani email_inp.value
    if(emailRegex.test(email_inp.value))
    {
        document.querySelector(".email_error").textContent = "Email address is correct";
        document.querySelector(".email_error").style.color = "green";
    }
    else{
        document.querySelector(".email_error").textContent = "Email address is incorrect";
        document.querySelector(".email_error").style.color = "red";
    }


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // test hoga password 
    if(passwordRegex.test(password_inp.value))
    {
        document.querySelector(".password_error").textContent = "Password is correct";
        document.querySelector(".password_error").style.color = "green";

    }
    else{
        document.querySelector(".password_error").textContent = "Password is incorrect";
        document.querySelector(".password_error").style.color = "red";
    }



    if(emailRegex.test(email_inp.value) && passwordRegex.test(password_inp.value))
    {
        document.querySelector(".message").textContent = "Email and password both are correct";
        document.querySelector(".message").style.color = "green";
    }
    else{
        document.querySelector(".message").textContent = "Invalid credentials";
        document.querySelector(".message").style.color = "red";
    }
    
})

