function closeMenu(menu, html) {
	if (!menu) return;
	menu.classList.remove("-is-active");
	html.classList.remove("-fixed-menu");
}
function openMenu(menu, html) {
	if (!menu) return;
	menu.classList.add("-is-active");
	html.classList.add("-fixed-menu");
}
function menu() {
	const menu = document.querySelector(".main__nav");
	const html = document.querySelector("html");
	const btnsMenu = document.querySelectorAll(".main__nav-button");
	if (!btnsMenu) return;
	btnsMenu.forEach((btnMenu) => {
		btnMenu.addEventListener("click", () => {
			btnMenu.classList.toggle("-is-active");
			if (btnMenu.classList.contains("main__nav-open")) {
				openMenu(menu, html);
				return;
			}
			closeMenu(menu, html);
		});
	});
}

menu();
