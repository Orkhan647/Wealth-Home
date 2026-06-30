"use strict";

/**
 * navbar toggle in mobile
 */

const /**{NoodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /**{NoodeElement} */ $navToggler =
    document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


/**
 * Navbar scroll state
 */

const /**{NoodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e =>{
 $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
 
});



