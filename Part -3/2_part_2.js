// call apply bind 

// function ko  call karte time  aap set kar skate ho ki this ki value kya hogi 

let obj = {
    name : "Dipin Grover" , 
    age  : 22 , 
    gender : "Male"
}


function abcd()
{
    console.log(this);
}

function efgh(a,b,c,d)
{
    console.log(this,a,b,c,d);
}

// // abhi this ki value window hogi 
// abcd();


abcd.call(obj);

// ab humne abcd function ko call kia using .call operator aur pass kia obj toh ab this ki value object ho gyi 


// what if i pass paramters to call function 


efgh.call(obj ,1,2,3,4);


// use of apply 
// it is similar to call but isme hum parameters ko pass karenge as an array 

efgh.apply(obj , [1,2,3,4]);

// yha this -> obj , a-> 1 , b-> 2 , c-> 3 , d-> 4