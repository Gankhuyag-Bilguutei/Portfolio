const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);

});

Let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('bx-x');

};

window.onscroll =() => {
	menu.classList.remove('bx-x');
	navbar.classList.toggle('active');

}