// making multiple notification toster 

function create_toaster(config)
{
    return function(notification)
    {
        let div = document.createElement("div");

        div.textContent = notification;

        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

        document.querySelector(".parent").appendChild(div);

        let parent = document.querySelector(".parent");
        parent.classList.add(
            config.positionX === "right" ? "right-5" : "left-5",
            config.positionY === "top" ? "top-5" : "bottom-5"
        );

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        },config.duration* 1000)
    }
}


let toaster = create_toaster({
    positionX : "right",
    positionY : "bottom",
    theme : "dark",
    duration : 3,

})

toaster("Download Done!");

// second toaster 
setTimeout(() => {
toaster("Dipin accepted your request");
},2000);