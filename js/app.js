var pages = document.getElementById("pages");
var links = pages.getElementsByClassName("link");
let clicked = false;


for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var clicked = document.getElementsByClassName("active");
        clicked[0].className = clicked[0].className.replace(" active", "");
        this.className += " active";
        if (window.screen.width < 901) {
            document.getElementById("menu").style.display = "none";
            clicked = false;
        } else {
            document.getElementById("menu").style.display = "flex";
        }

    });
}

var aboutPage = document.getElementById("aboutPage");
var contactPage = document.getElementById("contactPage");
var portfolioPage = document.getElementById("portfolioPage");
var aboutSection = document.getElementById("about");
var projectsSection = document.getElementById("projects");
var contactSection = document.getElementById("contact");

aboutPage.addEventListener("click", function () {
    aboutSection.classList.remove("remove");
    projectsSection.classList.add("remove");
    contactSection.classList.add("remove");
})

portfolioPage.addEventListener("click", function () {
    aboutSection.classList.add("remove");
    projectsSection.classList.remove("remove");
    contactSection.classList.add("remove");
})

contactPage.addEventListener("click", function () {
    aboutSection.classList.add("remove");
    projectsSection.classList.add("remove");
    contactSection.classList.remove("remove");
})



document.getElementById("hamburger").addEventListener("click", function () {
    if (clicked == false) {
        document.getElementById("menu").style.display = "flex";
        clicked = true;
    } else {
        document.getElementById("menu").style.display = "none";
        clicked = false;
    }
})

function modal(project) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-heading").innerHTML = project.getAttribute('data-title');
    document.getElementById("modal-text").innerHTML = project.getAttribute('data-description');
    document.getElementById("modal-image").src = project.getAttribute('data-image');
    document.getElementById("link1").href = project.getAttribute('data-link');
    document.getElementById("link2").href = project.getAttribute('data-link2');


    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("modal").style.display = "none";
    })
}