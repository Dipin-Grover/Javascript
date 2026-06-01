// arrays


let marks = [10,20,25,35,40,50]; // this is an array 


// index based access hota h from starting from 0th index 

// if i try to acces marks[2] i get 25 starting from 0 index and if i try to access marks[20] we will get undefined 

// if i try to acees eleemnt jo h hi nhi toh undefined milega 


// modify array 
marks[3] = 23;

console.log(marks);


// array methods 

// push

marks.push(90); // 90 insert ho jaaeyga array me 
console.log(marks);


// pop
marks.pop();
console.log(marks);

// shift -> shuruwat se element ko hta dega
marks.shift();
console.log(marks);


// unshift -> shuruwat me value add karta h 
marks.unshift(12);
console.log(marks);


// splice -> array ke bich ke elemnts htane ke lie hota h 
// ye original array ko chnage kar deta h 

marks.splice(2,3); // two argueemnt leta h 1. -> kis index se elements htnae h 2. kitne eleemnts htnae h 
// 2nd index se 3 eleemnts remove honge 
console.log(marks);




// slice -> ye original array ko change nhi karta h ek copy deta h 

let new_marks = marks.slice(0,2); // extract karega from [0,2) endpoint not included  , 2nd index not included only 0,1

console.log(new_marks);
console.log(marks); 



// reverse

let arr = [12,34,56,89,3,18];

arr.reverse();

console.log(arr)


// sort 
// sort hamesha ek function accept karta h aur 2 paramters 
// for ascending a-b
arr.sort(function(a,  b){
    return a - b;
})

console.log(arr);


// for descending b-a
arr.sort(function(a,  b){
    return b - a;
})

console.log(arr);

// sort , forEach , map , filter , reduce sab ek function accept karte h 

// for each 

let arr_2 = [17,23,56,78,91,2];

arr_2.forEach(function(val)
{
    // ye function  har ek array ki value ke lie chalega 
    // har ek array ke element pe gya aur +3 kar dia har element pe 
    console.log(val + 3);
})


// map 
// map hum tab use karte h jab hume ek new array banana ho previous array ke data ke basis pe 
// map dekhte hi sath aap ek blank array bna lia karo 
// yeh for each ki traarh hi hota h har ek elemnt pe jake kuch na kuch return karega 

// eg 
let arr_3 = arr_2.map(function(val){
    if(val > 35)
    {
        return val;
    }
    // har val ke lie kuch na kuch return krega 
})


console.log(arr_3);




// fliter 
// filter ki help se hum new array bnate h but uss array me kuch hi elements hote h jo bas return true ki condition ko staisfy kare
// filter as name suggest bas whi elemnts aaayneg new array me jo return true kare

let arr_4 = arr_2.filter(function(val){
    if(val % 2 == 0) return true;
})

console.log(arr_4);



// reduce 
// agar hume sare array ke elements ko ek single value me convert karna h toh hum reduce ka use karenge 
let arr_5 = [1,2,3,4,5,6,7,8,9];
let ans = arr_5.reduce(function(accumulator , val){
    return accumulator + val;
},0);

console.log(ans);



// find -> array me phli value return karega jo condition satisfy karwayegi 


let ans_1 = arr_2.find(function(val){
    // phla even number return karega 
    return val%2 === 0;
});

console.log(ans_1);// phla even number 56 h 


let obj = [
    {id : 1 , key : 1},
    {id : 2 , key : 2},
    {id : 3 , key : 1}
];

let ans_2 = obj.find(function(val){
    return val.key === 1;
});
console.log(ans_2);// phla object return krega jo condition ko satisfy karta ho 



// some -> ye btayega ki kuch element h jo condition ko staisfy kar rhe h aur ye answer dega true / false

let arr_6 = [12 , 34 , 78 , 56 , 62];

// koi bhi element h jo 50 se upar ho array me true / false
let ans_3 = arr_6.some(function(val){
    return val > 50;
})

console.log(ans_3);


// every -> ye btayega ki sab elements array ke condition ko satisfy kar rhe h true/ false

// sab eleemnts 30 se abde h ?
let ans_4 = arr_6.every(function(val){
    return val > 30;
});

console.log(ans_4);




// destructuring in array

let [a , b ,  , d ] = arr_6;
console.log(a);
console.log(b);
console.log(d);



// spread operator 

let arr1 = [1,2,3,4,5,6,7,8,9];
// i want to create copy of this array 

let arr2 = [...arr1];// spread operator

// arr1 and arr2 are both differnt arrays seperate copies 


// Q1 create an array with 3 fruits and print 2nd fruit 

let fruit = ["apple" , "cherry" , "banana"];
console.log(fruit[1]);


// Q2 add "mango" at end and "pineapple" at begining

fruit.push("mango");
fruit.unshift("pineapple");

console.log(fruit);



// another use of splice 
// Q3 add red and blue at index 1 in colors = ["yellow" , "green"];

colors = ["yellow" , "green"];
colors.splice(1, 0 , "red" , "blue");
// 1 index se 0 element remove kia aur add kia "red" , "blue";

console.log(colors);


// Q4 use .map to square each number 

let num = [1,2,3,4];

let new_num = num.map(function(val){
    return val*val;
})


// Q5 use .filter to keep numbers  > 10 in array 

let array_new = [12,4,78,34,1,9,23];

let ans_5 = array_new.filter(function(val){
    return val > 10
})

console.log(ans_5);



// Q6 Use .reduce to find sum of array elemnts [10,20,30,40]


let arr_7 = [10,20,30,40];

let ans_6 = arr_7.reduce(function(accumulator , val){
    return accumulator + val;
},0);

console.log(ans_6);




// Q7 destructure firstname , lastname from array

let name = ["Dipin" , "Grover"];

let [firstname , lastname] = name;

console.log(firstname);
console.log(lastname);