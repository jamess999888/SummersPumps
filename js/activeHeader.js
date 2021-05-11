$(document).ready(function() {
    var root = document.querySelector("#root");
    var page = root.children[0].id

    var headerLink = document.querySelector("a#" + page)
    console.log(headerLink);

    var currentActive = document.querySelector("a.active")
    if (currentActive) {
        currentActive.classList.toggle("active");
    }

    headerLink.classList.toggle("active");
});