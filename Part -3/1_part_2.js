// creating toasater using closures

function create_toaster(configurations) {
  return function (notification) {
    // this will create a toaster
    let div = document.createElement("div");

    div.className = `fixed ${configurations.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${configurations.positionX === "right" ? "right-10" : "left-10"} ${configurations.positionY === "top" ? "top-10" : "bottom-10"}`;

    div.textContent = notification;

    document.body.appendChild(div);

    setTimeout(() => {
        document.body.removeChild(div)
    }, configurations.duration *1000);
  };
}

let toaster = create_toaster({
  // these configurations for creating toaster
  positionX: "top",
  positionY: "bottom",
  theme: "dark",
  duration: 4,
});

toaster("this is the toaster notification.");
