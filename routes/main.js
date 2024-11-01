var tablinks=document.getElementsByClassName("tab-links");

function navigateTo(url) {
    window.location.href = url;
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.add("active-link");
    }

    event.currentTarget.classList.remove("active-link");
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

function toggleDropdown() {
    var teamMenu = document.querySelector('#sidemenu li:nth-child(2)');
    teamMenu.classList.toggle('dropdown-open');
}

function closemenu(menuname){
    sidemenu.style.left="-200px";
}

// document.addEventListener("DOMContentLoaded", function() {
//     const joinButton = doucument.getElementById("jn");
//     joinButton.addEventListener("click", function() {
//         fetch('/join')
//             .then(response =>{
//                 if(!response.ok) {
//                     throw new Error ('Network error');
//                 }
//             })
//             .catch(error=>{
//                 console.error("prblm fetch operation:", error);
//             });
//     });
// });

document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "join.html"; 
});

document.getElementById("navigateButton1").addEventListener("click", function() {
    window.location.href = "contact.html"; 
});

document.getElementById("navigateButton2").addEventListener("click", function() {
    window.location.href = "impact.html"; 
});

document.querySelectorAll("#navigateButton3").forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "projects.html"; 
    });
});
