// // scope execution ontext and closures 


// // scope - me ek function ya varibale ko kha ta access kar sakata hu wo uska scop hota h 

// // three types of scope - functional scope  , global scope , block scope 

// // functional scope -> function ke andar hi use/acess ho sakta h 

// // global scope -> pure file me khi bhi access ya use ho sakata h 

// // block scope -> block{} me khi bhi use/ acess kar sakte h 

// // var se bne hue varibales floow functional scoped 
// // var do not respect block scoped 
// if(true)
// {
//     // var follows only functional scoped so it becomes a global variable
//     var a = 78;
// }

// // able to access a outside block scope
// console.log(a);

// function abcd()
// {
//     var b = 12;
//     console.log(b);
// }

// console.log(b);
// // cannot access as b is functional scoped and b is inside function




// execution context 

// js jaise hi aapka function dekhta h sabse phele wo banata h execution  context , ye ek process h jo ki do differnt phases me chalta h
// 1st is memory phase and second is execution phase 

// memory phase -> saare variables ko memory milti h 
// execution phase -> execution phase me code execute hota h 




// scoping 
// there are two types of scoping lexical scoping and dynamic scoping

// in js we use lexical scoping 
// lexical scoping -> aap jha avaialable ho ab bas wha ki hi chizo ko access kar poge baaki ko nhi 

// for eg 

function defg()
{
    let a = 68;
    // yha a pure defg function ke andar access kar skate h hum 

    console.log(a);

    function pqrs()
    {
        console.log(a);
    }

    pqrs();
}

defg();


// dynamic scoping 
// kha se call kar rhe ho  uspe depend karega ki kya value milegi 

// js me dynamic scoping nhi hoti 

let g = 9;

function dyh()
{
    console.log(g);
}

function qwe()
{
    let g  = 89;
    dyh();
}

qwe();
// qwe ke andar se call kia jha g = 89 h 
// agar dynamic scoped hota toh 89 print hota 


// in short 
// lexical -> function kha likha gya h usse uska scope decide hoga 
// dynamic -> function kha se call hua h usse uska scope decide hoga



// closures -> jab ek parent function apne anadr se ek function return karta h aur returning function (child function) apne parent ke execute hone apr bhi uske varibales ko access kar paata hai toh usse closures bolte h

// ye sach h ki function ke khatam hone par variables aur uske andar ke functions khtam ho jate h  , lekin closures ke case me 
// functions aur unke variables ka backlink bnaya jata h jisse hum kehte h  [[environment]]




// making counter using closures 

function counter()
{
    let cnt = 0;

    return function()
    {
        cnt++;
        console.log(cnt);
    }
}

let fnc1 = counter();
fnc1();
fnc1();
fnc1();


let fnc2 = counter();
// jiase hi parent function call hota h ek naya cnt banta h 
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();



// click limitor functionality 

function clicklimitor()
{
    let click = 0;
    return function()
    {
        if(click < 5)
        {
            click++;
            console.log(`clicked ${click} times`);
        }
        else{
            console.error("CLICK LIMIT EXCEDDED , TRY AGAIN AFTER SOME TIME");
        }
    }
}

let click = clicklimitor();
click();
click();
click();
click();
click();
click();