// DOM objects
const theme_button_wrapper = document.querySelector("theme-button-wrapper");
const theme_buttons = document.querySelectorAll(".theme-button");
const language_buttons = document.querySelectorAll(".language-button");


// Function that displays the theme menu
for (let i = 0; i < 3; i++){
	theme_buttons[i].addEventListener("click", () => {
		for (let j = 0; j < 3; j++)
		{
			if (i !== j)
				theme_buttons[j].classList.toggle("hidden");
		}

		document.querySelector("body").className = event.target.textContent.trim().toLowerCase() + "-mode";
	});
}

// Function that displays the language menu
language_buttons[0].addEventListener("click", () => {

	language_buttons[1].classList.toggle("hidden");
});

language_buttons[1].addEventListener("click", () => {

	language_buttons[0].classList.toggle("hidden");
});
