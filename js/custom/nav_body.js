$(document).ready(function() {
    // Tabs 
    let home_button = $("#home-tab");
    let products_button = $("#products-tab");
    let services_button = $("#services-tab");

    // Active Tab and content Container
    let active_tab = $(".active-tab");
    let active_content_item = $(".active-content-item");

    // Nav Items Container
    let nav_items = $("#nav-items");
    // let nav_items = $("#nav-items");

    // Content Containers
    let home_cont = $("#home-content");
    let products_cont = $("#products-content");
    let services_cont = $("#services-content");

    // Function To navigate The Tabs and content Display
    home_button.click(function() {

        if (nav_items.find(".active-tab").removeClass("active-tab")) {

            $(this).addClass("active-tab");

            if ($("#content-container").find(".active-content-item").removeClass("active-content-item")) {
                home_cont.addClass("active-content-item");
            } else {
                alert("Error");
            }

        }
        

    });

    products_button.click(function() {

        if (nav_items.find(".active-tab").removeClass("active-tab")) {

            $(this).addClass("active-tab");

            if ($("#content-container").find(".active-content-item").removeClass("active-content-item")) {
                products_cont.css(display, "block");
                // products_cont.addClass("active-content-item");
            } else {
                alert("Error");
            }
        }
        
        

    });

    services_button.click(function() {

        if (nav_items.find(".active-tab").removeClass("active-tab")) {
            $(this).addClass("active-tab")
        }
        

    });

});








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