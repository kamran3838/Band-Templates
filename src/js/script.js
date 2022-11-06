let menuBtn = document.querySelector('.menu_burger');
let menuActive = document.querySelector('.menu_burger_active');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuActive.classList.toggle('active');
})