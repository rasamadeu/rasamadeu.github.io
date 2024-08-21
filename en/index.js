//  DOM objects
const body = document.querySelector("body");
const theme_buttons = document.querySelectorAll(".theme-button");
const language_buttons = document.querySelectorAll(".language-button");

// Controls the OS theme button colors (light or dark mode)
const media_query_os_theme = window.matchMedia("(prefers-color-scheme: dark)");

function os_theme_changed(media_query) {
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
os_theme_changed(media_query_os_theme);

// Listen for changes
media_query_os_theme.addListener(os_theme_changed);

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

		document.querySelector("body").className = event.target.textContent.trim().toLowerCase();
	});
}

// Display the language menu
language_buttons[0].addEventListener("click", () => {
	language_buttons[1].classList.toggle("hidden");
});

language_buttons[1].addEventListener("click", () => {
	language_buttons[0].classList.toggle("hidden");
});

// Hides popup menus if mouse clicks outside buttons
document.addEventListener("click", () => {
})
