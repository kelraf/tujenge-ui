// Tabs 
let home_button = document.getElementById("home-tab");
let products_button = document.getElementById("products-tab");
let services_button = document.getElementById("services-tab");

// Active Tab and content Container
let active_tab = $(".active-tab");
let active_content_item = document.getElementsByClassName("active-content-item");

// Content Containers
let home_cont = document.getElementById("home-content");
let products_cont = document.getElementById("products-content");
let services_cont = document.getElementById("services-content");

// Function To navigate The Tabs and content Display
home_button.onclick = function() {
    console.log(active_tab);
}







let profile_dropdown = document.getElementById("profile-dropdown");
let profile = document.getElementById("profile");

profile.onclick = function() {
    if (!profile_dropdown.classList.contains("profile-show") && !profile_dropdown.classList.contains("profile-hide")) {
        profile_dropdown.classList.add("profile-show");
    } else {
        profile_dropdown.classList.add("profile-hide");

        setTimeout(function() {
            profile_dropdown.classList.remove("profile-show");
            profile_dropdown.classList.remove("profile-hide");
        }, 500);
    }
}