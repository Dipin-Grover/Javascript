// object 


let obj = {
    name : "Dipin Grover",
    age : 22 , 
    gender : "Male" , 

};


// access

console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);


// another method to access using square bracket and single quote 
console.log(obj['name']);
console.log(obj['age']);
console.log(obj['gender']);


// nested object 
let user = {
    name  :  "Dipin grover", 
    address : {
        city : "gurugram" , 
        pin : 122001,
        location : {
            lat : 34.8,
            long : 23.9
        }
    }
};


console.log(user.address.location.long);



// destructuring in object 

// agar mujhe lat , long access karna h 
// same varibale use karne honge lat and long and also wha tak pahunchana hoga jha se acess ho paaaye ye variaales 
let {lat , long} = user.address.location;

console.log(lat);
console.log(long);




//for in loop for iterating over objects


let obj_1 = {
    name : "Dipin Grover",
    age : 22,
    gender : "Male"
}


for(let key in obj_1)
{
    // key ek varibale h obj_1 ki keys dega 
    console.log(key , obj_1[key]);
    // key access normal variable se hoga  , value acces hoga obj[key] aise
}



// keys 
// array deta h keys ka 
// ek array dega keys ka 
console.log(Object.keys(obj_1));


// entries 
// array of array deta h key value ka 
console.log(Object.entries(obj_1));
// 0: (2) ['name', 'Dipin Grover']
// 1: (2) ['age', 22]
// 2: (2) ['gender', 'Male']
// like this 







// copying objects 

// using spread operator 
let obj_2 = {...obj_1};
console.log(obj_1);
console.log(obj_2);


// another method using object.assign 
// extra property bhi add ho sakti h like humne is_married : false daali 
let obj_3 = Object.assign({is_married : false} , obj_1);

// ismarried-wali property extra aayegi 
console.log(obj_3);






// nested object me clone aise nhi hoga 
// usme deep clone karna hoga

// eg

// stringify phle usse string me convert karega then parse use object bnayega 
let user_2 = JSON.parse(JSON.stringify(user));

user_2.address.city = "Shimla";




// optional chaining 

// kai baar nested object me koi galti se agar key ka name change karde phir hum values ko acces nhi kar paayenge 
// iss chiz se bachne ke lie h optional chanining

// eg 
let user_3 = {
    name : "Dipin grover" , 
    email : "dipin@gmail.com",
    addresses : {
        city : "gurugram",
        state : "haryana",
    }
}

// ab kisi ne addresses kardia aage jake toh me access nhi kar paunga 

// console.log(user_3.address.city);

// error dega as object me addresses h key 
// isko avaoid karne ke lie h optinal chanining



console.log(user_3?.address?.city); 
// undefined dega yeh error nhi 

console.log(user_3?.addresses?.city); // gurugram

let role = "admin";
let user_4 = {
    name : "Dipin grover" , 
    email : "dipin@gmail.com",
    addresses : {
        city : "gurugram",
        state : "haryana",
    },
    [role] : "Dipin Grover",
}

console.log(user_4);




// destructure object with a differnt name


let user_5 = {
    "first-name" : "Dipin grover",
};

// yha destructure kia h object ko humne first-name wale ko as firstname rakha h 
// hum bol rhe ki "first-name" ko variable firstname ki tarah treat aur access karna 

let {"first-name" : firstname} = user_5;





// Q print  object like key  : value using object.entries 

let course = {
    title : "javascript",
    duration : "4 weeks",
}

Object.entries(course).forEach(function(val){
    console.log(`${val[0]} : ${val[1]}`);
})