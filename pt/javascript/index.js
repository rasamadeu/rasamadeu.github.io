const top_nav_bar = document.querySelector(".top-navigation-bar");
const profile_picture = document.querySelector(".profile-picture");

// Set header title
const title = document.querySelectorAll(".title");
if (title[0].textContent.trim() === "Hello!")
{
	title[2].textContent = "I'm Ricardo Amadeu."
}
else
{
	title[2].textContent = "Sou o Ricardo Amadeu."
}

// Set configuration at breakpoints
function setLandscape(){

	// Change html structure
	document.querySelector("body").appendChild(profile_picture);
	const side_div = document.createElement("div");
	side_div.classList.add("side-div");
	const scroll_div = document.createElement("div");
	scroll_div.classList.add("scroll-div");
	scroll_div.appendChild(document.querySelector("main"));
	scroll_div.appendChild(document.querySelector("footer"));
	side_div.appendChild(document.querySelector("header"));
	side_div.appendChild(scroll_div);
	document.querySelector("body").appendChild(side_div);

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
	document.querySelector("body").appendChild(document.querySelector("header"));
	document.querySelector("body").appendChild(document.querySelector("main"));
	document.querySelector("body").appendChild(document.querySelector("footer"));
	document.querySelector("main").appendChild(profile_picture);
	document.querySelector(".side-div").remove();

	top_nav_bar.classList.remove("notransition");
}

let landscape = window.matchMedia("(orientation: landscape)");

if (landscape.matches)
{
	setLandscape();
}

landscape.addEventListener("change", () => {

	if (landscape.matches)
	{
		setLandscape();
	}
	else
	{
		setPortrait();
	}
})

