// loops 


// for loops hum tab use karte h jab 
// hume pta ho kha se jana h -> kaise jana h -> kha tak jana h 

// while loops hum tab use karte h jab 
// hume ye toh pta ho ki kha se jana h aur kaise jana h but yeh na pta ho ki rukna kab h tab hum while loop use karte h 


// eg -> 1- 20 tak jao ek ek karke -> for loop 
// eg -> 20 -28 tak chalo 2 -2 increment karke 
// eg rukna tab h jab "hello" word mile -> while loop (pta thodi h hello kab mile)
// eg tab rukna jab tumhe gf mil jaye -> pta thodi h (while loop)



// usage of for loops 

// for(start ; ending ; updater)
// {

// }


// 1- 100 tak print karo 
for(let i = 1  ; i <= 100 ; i++)
{
    console.log(i);
}



// while loop 

let i = 1;
while( i < 32)
{
    console.log(i);

    i++;
}




// do while 
// yeh loop kam se kam ek baar toh jarur chalega 


let g = 3;
do{
    console.log(g);
    g++;
}
while(g < 20);



// break -> bich me loop rokne ke lie use hota h 
// continue -> iteration skip karne ke lie use hota h 

// 1- 30 tak jaa rha tha 18 loop ko rok dia 
for(let i = 1 ; i <= 30 ; i++)
{
    if(i === 18)
    {
        // jaise hi 18 ho jae exit kar jao loop ko 
        break;
    }
    console.log(i);
}


// 1 -16 tak jaa rha tha 13 ko skip karwa dia 
for(let i = 1 ; i< 17 ; i++)
{
    if(i === 13)
    {
        // skip 13 
        continue;
    }
    console.log(i);
}




// loops practice 

// Q1 print number 1- 10 using for loop 

for(let i = 1 ; i<=10 ; i++)
{
console.log(i)
}



// Q2 print number 10 to 1 using while loop 

let k = 10;
while(k>0)
{
    console.log(k);
    k--;
}


// Q3 print even num from 1- 20 using for loop 
for(let i = 1 ; i<=20 ; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }
}

// Q4 print odd numbers from 1-15 using while loop 

let q = 1;

while(q <= 15)
{
    if(q % 2 == 1)
    {
        console.log(q);
    }
    q++;

}


// Q5 print multiplication table of 5 

for(let i = 1 ; i<=10 ; i++)
{
    console.log(`5 * ${i} = ${5*i}`);
}


// Q6 -> sum of numbers from 1- 100 using loop 
let sum_val = 0
for(let i =1 ; i<= 100 ; i++)
{
    sum_val += i;

}

console.log(sum_val);



// Q7 print all numbers from 1- 50 that are divisible by 3 

for(let i = 1 ; i<= 50 ; i++)
{
    if(i % 3 === 0)
    {
        console.log(i);
    }
}



// Q8 ask user for a number and print whether from 1 to that number is odd or even 
// eg -> 1 is odd , 2 is even , 3 is odd , 4 is even so on 


// let val = prompt("Enter a number");


// for(let i = 1 ; i<= val ; i++)
// {
//     if(i%2 == 0)
//     {
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }



// Q9 count how many numbers between 1-100 are divisible by both 3 and 5 


let cnt = 0;

for(let i = 1 ; i <= 100 ; i++)
{
    if(i%3 === 0 && i%5 === 0)
    {
        console.log(i);
        cnt++;
    }
}

console.log(`${cnt} numbers are there .`);



// Q10 write a program that run from 1- 100 and sto at first multiple of 7 


for(let i = 1 ; i<=100 ; i++)
{
    if(i%7 === 0)
    {
        break;
    }
    console.log(i);
}


// Q11 print numbers from 1- 20 and skip multiples of 3 

for(let i = 1 ; i<=20 ; i++)
{
    if(i%3 === 0)
    {
        continue; // skip this 
    }
    else{
        console.log(i);
    }
}


// Q12 run loop from 1-100 and print first five odd numbers only 

let cnt_1 = 0;

for(let i = 1 ; i<=100 ; i++)
{
    if(cnt_1 == 5)
    {
        break;
    }
    else if(i%2 == 1 )
    {
        console.log(i);
        cnt_1++;
    }
}