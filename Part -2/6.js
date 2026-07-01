// bonus practice projects 

let users = [
    {
        name: "Aanya",
        profile_picture: "https://i.pinimg.com/1200x/a8/45/10/a8451035b345521b622b43e1a68e0487.jpg",
        bio: "Loves photography and exploring new places."
    },
    {
        name: "Kiara",
        profile_picture: "https://i.pinimg.com/736x/11/2f/6c/112f6cdf4d2005dbd7423f6070a2ff58.jpg",
        bio: "Coffee enthusiast and aspiring writer."
    },
    {
        name: "Anaya",
        profile_picture: "https://i.pinimg.com/736x/5b/a8/9b/5ba89b1cdf7159a04751559f0f777109.jpg",
        bio: "Passionate about fitness and healthy living."
    },
    {
        name: "Myra",
        profile_picture: "https://i.pinimg.com/736x/29/1e/47/291e47d5bf3191f88c1b3a7109af8f46.jpg",
        bio: "Tech geek who enjoys building side projects."
    },
    {
        name: "Diya",
        profile_picture: "https://i.pinimg.com/736x/77/21/6f/77216ffebdfb11735b4361ef122d76d9.jpg",
        bio: "Music lover and weekend guitarist."
    },
    {
        name: "Riya",
        profile_picture: "https://i.pinimg.com/736x/3a/f6/42/3af64246333775aeaf44f3e08f2542cf.jpg",
        bio: "Avid reader with a passion for history."
    },
    {
        name: "Sara",
        profile_picture: "https://i.pinimg.com/736x/7e/f4/c9/7ef4c9ee883eaf8fd954a3d6eb634fc6.jpg",
        bio: "Nature enthusiast and travel blogger."
    },
    {
        name: "Divya",
        profile_picture: "https://i.pinimg.com/736x/a0/1b/74/a01b74cee5fe686194640d9fe56e3764.jpg",
        bio: "Movie buff and amateur chef."
    }
];




// now i have to show these 8 cards 
let card_container = document.querySelector(".card_container")

function show_users(arr){

    arr.forEach(function(user){

    

    // sabse phle card banana hoga aur usee card container me append karna hoga 

    // creating elemnts
    // card div 
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${user.profile_picture})`

    // info div
    let info = document.createElement("div");
    info.classList.add("info");

    let h2 = document.createElement("h2");
    h2.textContent = `${user.name}`

    let p = document.createElement("p");
    p.textContent = `${user.bio}`


    // ek ke andar ek 
    info.appendChild(h2);
    info.appendChild(p);

    card.appendChild(info);

    card_container.appendChild(card);

    })



}

show_users(users);



//input me jaise hi kuch dalu me bas whi cards show ho 

let inp = document.querySelector("input");

inp.addEventListener("input" , function(){
    
    let new_users = users.filter( (user) => {
       return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    }

    )

    card_container.innerHTML = "";

    //but yeh toh aur cards ko append akr dega users me 

    show_users(new_users);
});
