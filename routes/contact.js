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

document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "join.html"; 
});

document.getElementById("navigateButton1").addEventListener("click", function() {
    window.location.href = "contact.html"; 
});

window.onload = function() {
    document.querySelector('form').reset(); 
};

