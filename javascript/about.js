const header = document.querySelector("header");
const top_nav_bar = document.querySelector(".top-navigation-bar");
const ul = top_nav_bar.querySelector("ul");
const nav_item_active = document.querySelector("header").firstElementChild;
const menu_button = document.querySelector("#menu-toggle");

// Define constants for breakpoints
const PORTRAIT = 0;
const MEDIUM = 1;
const LARGE = 2;
let breakpoint = PORTRAIT;

// Dictionary for header indices
let pagename = nav_item_active.children[0].textContent;

const dic_index = {
	"Homepage": 0,
	"About": 1,
	"Projects": 2,
	"Contacts": 3,
	"Página Inicial": 0,
	"Sobre": 1,
	"Projectos": 2,
	"Contactos": 3
};

// Set configuration at breakpoints
function setMediumWidth(){

	// Change html structure
	nav_item_active.remove();
	const new_li = document.createElement("li");
	const new_h2 = document.createElement("h2");
	new_h2.textContent = pagename;
	new_li.appendChild(new_h2);
	new_li.classList.add("navigation-item");
	new_li.classList.add("active");
	if (pagename === "Contacts" || pagename === "Contactos")
	{
		ul.append(new_li);
	}
	else
	{
		ul.insertBefore(new_li, ul.children[dic_index[pagename]]);
	}
	const div = document.createElement("div");
	div.id = "header-div";
	div.appendChild(ul);
	div.appendChild(menu_button);
	header.insertBefore(div, header.children[0]);

}

function removeMediumWidth(){

	// Change navbar without transition
	top_nav_bar.classList.add("notransition");
	top_nav_bar.classList.add("hidden");
	ul.children[dic_index[pagename]].remove();
	document.querySelector("#header-div").remove();
	top_nav_bar.insertBefore(ul, top_nav_bar.children[0]);
	header.insertBefore(nav_item_active, top_nav_bar);

	getComputedStyle(top_nav_bar).opacity;

	// Add menu button
	document.querySelector(".navigation-item.active").appendChild(menu_button);
	menu_button.children[0].classList.add("fa-bars");
	menu_button.children[0].classList.remove("fa-xmark");

	top_nav_bar.classList.remove("notransition");
}

function setMediumToLargeWidth(){

	menu_button.remove();
	const button_div = document.createElement("div");
	button_div.id = "button-div";
	button_div.appendChild(document.querySelector("#theme-button-wrapper"));
	button_div.appendChild(document.querySelector("#language-button-wrapper"));
	document.querySelector("#header-div").appendChild(button_div);
	top_nav_bar.remove()
}

function setLargeToMediumWidth(){

	document.querySelector("#button-div").remove;
	top_nav_bar.appendChild(document.querySelector("#theme-button-wrapper"));
	top_nav_bar.appendChild(document.querySelector("#language-button-wrapper"));
	document.querySelector("#header-div").appendChild(menu_button);
	document.querySelector("header").appendChild(top_nav_bar);


}

let portrait_width = window.matchMedia("(max-width: 700px)");
let medium_width = window.matchMedia("(min-width: 700px) and (max-width: 1050px)");
let large_width = window.matchMedia("(min-width: 1050px)");

if (medium_width.matches)
{
	setMediumWidth();
	breakpoint = MEDIUM;
}
else if (large_width.matches)
{
	setMediumWidth();
	setMediumToLargeWidth();
	breakpoint = LARGE;
}

portrait_width.addEventListener("change", () => {

	if (portrait_width.matches)
	{
		if (breakpoint === LARGE)
		{
			setLargeToMediumWidth();
		}
		removeMediumWidth();
		breakpoint = PORTRAIT;
	}
})

medium_width.addEventListener("change", () => {

	if (medium_width.matches)
	{
		if (breakpoint === LARGE)
		{
			setLargeToMediumWidth();
		}
		else
		{
			setMediumWidth();
		}
		breakpoint = MEDIUM;
	}
})

large_width.addEventListener("change", () => {

	if (large_width.matches)
	{
		if (breakpoint === PORTRAIT)
		{
			setMediumWidth();
		}
		setMediumToLargeWidth();
		breakpoint = LARGE;
	}
})

