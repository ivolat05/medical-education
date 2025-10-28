function closeHeaderMenu(menu, html) {
	if (!menu) return;
	menu.classList.remove("-is-active");
	html.classList.remove("-fixed-menu");
}
function openHeaderMenu(menu, html) {
	if (!menu) return;
	menu.classList.add("-is-active");
	html.classList.add("-fixed-menu");
}
function headerMenu() {
	const menu = document.querySelector(".header__wrapp-list");
	const html = document.querySelector("html");
	const btnMenu = document.querySelector(".header__burger");
	if (!btnMenu) return;
	btnMenu.addEventListener("click", () => {
		btnMenu.classList.toggle("-is-active");
		if (btnMenu.classList.contains("-is-active")) {
			openHeaderMenu(menu, html);
			return;
		}
		closeHeaderMenu(menu, html);
	});
}

headerMenu();
