"use strict";
const menuBtn = document.querySelector(".menuButton");
const navMenu = document.querySelector(".menuNav");

menuBtn.addEventListener("click", function () {
	if (navMenu.classList.contains("menuNav")) {
		navMenu.classList.replace("menuNav", "displayMenu");
		console.log(navMenu);
	} else {
		navMenu.classList.replace("displayMenu", "menuNav");
		console.log(navMenu);
	}
});
