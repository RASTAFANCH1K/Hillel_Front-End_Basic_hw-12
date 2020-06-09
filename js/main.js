$(document).ready(function() {
	$('.nav-opener').on('click', function(e) { // Наша бургер кнопка на которую мы будем нажимать
		e.preventDefault();
		$('.header').toggleClass('nav-active') // .header это селектор на который будет довешиваться класс nav-active при нажатии на бургер кнопку
	})
})