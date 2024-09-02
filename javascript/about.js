const header = document.querySelector("header");
const top_nav_bar = document.querySelector(".top-navigation-bar");
const menu_button = document.querySelector("#menu-toggle");

// Set configuration at breakpoints
function setheaderWidth(){

	// Change html structure
	header.appendChild(top_nav_bar.firstElementChild);
	header.appendChild(document.querySelector("#theme-button-wrapper"));
	header.appendChild(document.querySelector("#language-button-wrapper"));
	header.firstElementChild.classList.remove("active");
	header.querySelector("ul").children[0].classList.add("active");
	top_nav_bar.remove();
	menu_button.remove();

}

function setPortrait(){

	// Change navbar without transition
	top_nav_bar.classList.add("notransition");
	top_nav_bar.classList.add("hidden");
	getComputedStyle(top_nav_bar).opacity;

	// Add menu button
	document.querySelector(".navigation-item.active").appendChild(menu_button);
	menu_button.children[0].classList.add("fa-bars");
	menu_button.children[0].classList.remove("fa-xmark");

	// Change html structure
	top_nav_bar.appendChild(document.querySelector("header > ul"));
	top_nav_bar.querySelector("body").appendChild(document.querySelector("#theme-button-wrapper"));
	top_nav_bar.querySelector("body").appendChild(document.querySelector("#language-button-wrapper"));
	document.querySelector(".main-button-wrapper").remove();

	top_nav_bar.classList.remove("notransition");
}

let header_width = window.matchMedia("(min-width: 900px)");

if (header_width.matches)
{
	setheaderWidth();
}

header_width.addEventListener("change", () => {

	if (header_width.matches)
	{
		setheaderWidth();
	}
	else
	{
		setPortrait();
	}
})

