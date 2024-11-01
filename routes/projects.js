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

// Project data
const projects = [
    {
        name: "Shreshtha 2.0",
        image: "/public/images/bgleof.jpg",
        description: "This is the description for Shreshtha 2.0.",
        galleryLink: "gallery1.html"
    },
    {
        name: "InnovateX",
        image: "/public/images/bgleomedia.jpg",
        description: "InnovateX is a project aimed at fostering creativity in technology.",
        galleryLink: "gallery2.html"
    },
    {
        name: "TechVision",
        image: "/public/images/WhatsApp Image 2023-12-24 at 11.18.46 PM.jpeg",
        description: "TechVision helps visualize future technologies through immersive experiences.",
        galleryLink: "gallery3.html"
    }
];

let currentProject = 0;

// Function to update project content
function updateProject(index) {
    const projectName = document.getElementById('project-name');
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const galleryLink = document.getElementById('gallery-link');

    projectName.innerText = projects[index].name;
    projectImage.src = projects[index].image;
    projectDescription.innerText = projects[index].description;
    galleryLink.href = projects[index].galleryLink;
}

// Move to the next project
function nextProject() {
    currentProject = (currentProject + 1) % projects.length;  // Loop back to first project
    updateProject(currentProject);
}

// Move to the previous project
function prevProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;  // Loop back to last project
    updateProject(currentProject);
}

// Initialize with the first project
updateProject(currentProject);
