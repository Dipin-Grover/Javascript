// i want to add card using 'this' concept
let username = document.querySelector("#person_name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo_url = document.querySelector("#photo_url");

// form pe phle event lagao

let card_container = document.querySelector(".cards_conatiner");



let manage_users = {
  // iss array me saare users aaynge
  users: [],
  // isse hum users ko add karenge array me jo bhi form ki dteils bhari hui hongi
  add_user: function () {
    console.log(this);
    // hum ek object bnaynge usme sari details store karenge
    let temp_obj = {
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo_url: photo_url.value,
    };

    // ab iss object ko me array me daal deta hu
    // yha this ki value h pura object manage_users
    // ab mujhe users me daalna h  object
    console.log(this.users);
    this.users.push(temp_obj);
  },
  // isse hum card ko show akrenge jitne bhi h array me
  showcard: function () {
    card_container.innerHTML = "";

    // using for each loop
    this.users.forEach(function (user) {
      // card conatiner me card ko daalo aap
      // this.users pe for each lagega

      // creating elements

      // div bnaya aur class attach kia
      let div = document.createElement("div");
      div.classList.add("card");

      let photo = document.createElement("div");
      photo.classList.add("photo");

      let image_container = document.createElement("div");
      image_container.classList.add("image_container");

      let img = document.createElement("img");
      img.src = user.photo_url;

      let info_div = document.createElement("div");
      info_div.classList.add("info")

      let user_name = document.createElement("h2");

      user_name.textContent = user.username;

      let role = document.createElement("p");

      role.textContent = user.role;

      let bio = document.createElement("p");

      bio.textContent = user.bio;

      // ab sabko info ke andar daal do

      info_div.appendChild(user_name);
      info_div.appendChild(role);
      info_div.appendChild(bio);

      image_container.appendChild(img);
      photo.appendChild(image_container);

      div.appendChild(photo);
      div.appendChild(info_div);

      card_container.appendChild(div);
    });
  },
};



let form = document.querySelector("form");
form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  // jaise hi submit pe click kiya add hoga user
  manage_users.add_user();
  manage_users.showcard();
});
