// this keyword 

// this keyword ek aisa special keyword jiski value change hoti rhti h depending on aap usey kha use kar rhe ho 

// this in global scope 

console.log(this);

// this ki value global scope me window hoti h 



// function ke andar 

function abcd()
{
    console.log(this);
}

abcd();

// function ke andar bhi this ki value window hoti h 

// this in method 

// method is function decalred inside function

// here this refers to object 

let user = {
    name : "Dipin Grover" , 
    age : 22,
    gender : "Male",
    saydetails : function()
    {
        console.log(this);
    }
}

user.saydetails();


// this on event handler 

let h1  = document.querySelector("h1").addEventListener("click" , function()
{
    console.log(this);
})


// event listner me this whi hoga jispe evenet laga hua hoga 



// oops wali classes me this ki value hamesha blank object hoti h 



// agar hum object ke andar arrow function bnaye aur uske andar se console.log(this) kare toh this ki value window hogi 

let user2 = {
    name : "Dipin Grover" , 
    age : 22,
    gender : "Male",
    saydetails : () => 
    {
        console.log(this);
    }
}

user2.saydetails();
// yha this ki value window hogi as object ke andar humne ek arrow function se this ko aces karn ki koshish ki h 



// agar maine method ke andar ek function bana dia 

let user3 = {
    name : "Dipin Grover" , 
    age : 22,
    gender : "Male",
    saydetails : function()
    {
        function pqrs()
        {
            console.log(this);
        }
        pqrs();
    }
}

user3.saydetails();

let user4 = {
    name : "Dipin Grover" , 
    age : 22,
    gender : "Male",
    saydetails : function()
    {
        let pqrs = () => {
            console.log(this);
        }

        pqrs();
        
    }
}

user4.saydetails();

// agar maine method ke andar function banaya using function word then this ki value hogi window 

// agar maine method ke andar function bnaya using () => then this hoga pura object 

// summary of this keyword usage 

// global space -> window 
// inside es5 function -> window  (es5 function are declared using function keyword)
// method with es5 function -> object 
// method with es6 arrow function -> window
// es5 function inside es5 method -> window
// arrow function inside es5 method -> object
// event handler-> on the elemnt jispe event laga hua ho 
// class -> blank object 

