// control flow statements 

// if else if else 

let is_admin = false;
let is_logged_in = false;


if(is_admin && is_logged_in)
{
    // do this 

    console.log("Welcome admin");
}
else if(is_logged_in)
{
    // do this 
    console.log("Welcome to dashboard");
}
else{
    // do this 
    console.log("you are not logged in .");

    
}

// this is how if else if else stateemtn work 


// early return stateemnt


function get_grade(marks)
{
    if(marks < 33) return "Fail";
    else if(marks >= 33 && marks < 50) return "E";
    else if(marks >= 50 && marks < 60) return "D";
    else if(marks >= 60 && marks < 70) return "C";
    else if(marks >= 70 && marks < 80) return "B";
    else if(marks >= 80  && marks < 90) return "A";
    else return "A+";
}

console.log(get_grade(56));




// switch statement 

switch(3)
{
    case 1 : 
    console.log("This is case 1");

    break;

    case 2 : 
    console.log("This is case 2");

    break;


    case 3 : 
    console.log("This is case 3");

    break;


    case 4 : 
    console.log("This is case 4");

    break;


    default:
    
    console.log("this is default case");


}


// task 

function get_Grade(score)
{
    if(score <=100 && score > 90) return "A+";
    else if(score >= 80 && score <= 89) return "A";
    else if(score > 70 && score <= 79) return "B";
    else if(score > 60 && score <= 69) return "C";
    else if(score >= 33 && score <= 59) return "D";
    else if(score < 33 && score >= 0) return "Fail";
    else return "Invald marks";

}

console.log(get_Grade(85));






// rock paper scissor logic 

function rock_paper_scissor(user , computer)
{
    if(user === computer)
    {
        return "Draw";
    }

    if(user === "rock" && computer === "scissor") return "user wins.";
    if(user === "paper" && computer === "rock") return "user wins.";
    if(user === "scissor" && computer === "paper") return "user wins.";

    return "computer wins."
}

console.log(rock_paper_scissor("rock" , "paper"));





