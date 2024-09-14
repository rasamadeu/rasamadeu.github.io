const div_set = document.querySelectorAll(".text");

for (const div of div_set)
{
	const children = div.children;
	let i = 0;
	for (const child of children)
	{
		if (child.nodeName !== "FIGURE")
		{
			child.style.order = i;
		}
		i++;
	}
}

