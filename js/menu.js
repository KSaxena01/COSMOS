function slide(){
	const burger = document.getElementsByClassName('burger');
	const nav = document.getElementsByClassName('nav-links');
	nav[0].classList.toggle('nav-active');
	burger[0].classList.toggle('toggle');
}