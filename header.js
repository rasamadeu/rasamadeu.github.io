//  DOM objects
const html = document.querySelector("html");
const top_nav_bar = document.querySelector(".top-navigation-bar");
const theme_buttons = document.querySelectorAll(".theme-button");
const language_buttons = document.querySelectorAll(".language-button");
const menu_button = document.querySelector("#menu-toggle");

// Set visible theme-button
const mode = document.querySelector("html").className;
document.querySelector("#theme-button-" + mode).classList.remove("hidden");

// Set configuration at breakpoints
function setLandscape(){
	top_nav_bar.classList.remove("hidden");
	menu_button.remove();
}

function setPortrait(){
	top_nav_bar.classList.add("hidden");
	document.querySelector(".navigation-item.active").appendChild(menu_button);
	menu_button.children[0].classList.add("fa-bars");
	menu_button.children[0].classList.remove("fa-xmark");
       
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

// Controls the OS theme button colors (light or dark mode)
const media_query_os_theme = window.matchMedia("(prefers-color-scheme: dark)");

function osThemeChanged(media_query) {
	if (media_query.matches)
	{
		theme_buttons[0].classList.add("dark");
		theme_buttons[0].classList.remove("light");
	}
	else
	{
		theme_buttons[0].classList.add("light");
		theme_buttons[0].classList.remove("dark");
	}
}

// Run at least once
osThemeChanged(media_query_os_theme);

// Listen for changes of theme
media_query_os_theme.addListener(osThemeChanged);

// Displays the theme menu
for (let i = 0; i < 3; i++){
	theme_buttons[i].addEventListener("click", () => {
		for (let j = 0; j < 3; j++)
		{
			if (i !== j)
			{
				theme_buttons[j].classList.toggle("hidden");
			}
		}

		const mode = event.target.id.split("-").at(-1);
		document.querySelector("html").className = mode;
		localStorage.setItem("mode", mode);
	});
}

// Hides menus if mouse clicks outside buttons
document.addEventListener("click", () => {

	if (!landscape.matches)
	{
		if (!event.target.closest(".theme-button"))
		{
			const mode = document.querySelector("html").className;
			if (mode) {
				for (let i = 0; i < 3; i++)
				{
				if (mode !== theme_buttons[i].id.split("-").at(-1))
					{
						theme_buttons[i].classList.add("hidden");
					}
				}
			}
		}

		if (!event.target.closest(".language-button"))
		{
			language_buttons[1].classList.add("hidden");
		}

		if (!event.target.closest("header"))
		{
			top_nav_bar.classList.add("hidden");
			const elem = menu_button.firstElementChild;
			if (elem.classList.contains("fa-xmark"))
			{
				elem.classList.toggle("fa-bars");
				elem.classList.toggle("fa-xmark");
			}
		}
	}
})

// Display the language menu
for (let i = 0; i < 2; i++){
	language_buttons[i].addEventListener("click", () => {
		language_buttons[1].classList.toggle("hidden");
	});
}

// Toggle button to open/close nav on mobile devices
menu_button.addEventListener("click", () => {

	const menu = document.querySelector(".top-navigation-bar");
	menu.classList.toggle("hidden");
	const elem = menu_button.firstElementChild;
	elem.classList.toggle("fa-bars");
	elem.classList.toggle("fa-xmark");
})

