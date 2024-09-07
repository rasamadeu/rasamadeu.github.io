const main = document.querySelector("main");
const options = main.querySelector("ul").querySelectorAll("li");

const dic = {
	"Thesis": 0,
	"Personal Webpage": 1,
	"Simulation": 2,
	"MuonGUI": 3,
	"Tese": 0,
	"Webpage pessoal": 1,
	"Simulação": 2
};

for (const i of options)
{
	i.addEventListener("click", () => {
		const main = document.querySelector("main");
		main.querySelector("li.active").classList.remove("active");
		main.querySelector(".text.active").classList.remove("active");
		const texts = document.querySelectorAll(".text");
		i.classList.add("active");
		texts[dic[i.textContent.trim()]].classList.add("active");
	});
}
