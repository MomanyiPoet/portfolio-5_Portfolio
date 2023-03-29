// Hide Header on Scroll Down Show on Scroll Up
let lastScrollTop = 0;
navbar = document.getElementById("navbar")
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.doctype.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-4rem";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
