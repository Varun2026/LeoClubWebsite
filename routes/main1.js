var tablinks=document.getElementsByClassName("tab-links");

function navigateTo(url) {
    window.location.href = url;
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    event.currentTarget.classList.add("active-link");
}

// function toggleMenu() {
//     var menu = document.getElementById("menu");
//     menu.classList.toggle("active");
// }

// function navigateTo(url) {
//     window.location.href = url;
// }

var sidemenu = document.getElementById("sidemenu");

function openmenu(menuname){
    sidemenu.style.left="0";
}

function closemenu(menuname){
    sidemenu.style.left="-200px";
}

document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "join.html"; 
});

document.getElementById("navigateButton1").addEventListener("click", function() {
    window.location.href = "contact.html"; 
});