// создаем переменную, в которую кладем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаем переменную, в которую кладем само меню
let menu = document.querySelector('.side-bar');

// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
	// отменяем стандартное поведение ссылки, т.е она нас никуда не ведет больше
	event.preventDefault();

	// вешаем класс на меню, когда кликнули по кнопке меню
	menu.classList.toggle('visible');
});
