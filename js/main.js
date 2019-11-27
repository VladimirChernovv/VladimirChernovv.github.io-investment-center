$(function(){

	$('.header__slider').slick ({
		dots: true,
		infinite: true,
		fade: true,
		// prevArrow: false,
		// nextArrow: false,
		arrows: false,
	});

  
});

// document.getElementById('nav').onmouseover = function (event) {
// 	var target = event.target;
// 	if (target.className == 'header__sup-item') {
// 		var s = target.getElementsByClassName('submenu');
// 		closeMenu();
// 		s[0].style.display = 'block';
// 	}
// }

// document.onmouseover = function (event) {
// 	var target = event.target;
// 	console.log(event.target);
// 	if (target.className != 'menu-item' && target.className != 'submenu') {
// 		closeMenu();
// 	}
// }

// function closeMenu() {
// 	var menu = document.getElementById('nav');
// 	var subm = document.getElementsByClassName('submenu');
// 	for (var i = 0; i < subm.length; i++) {
// 		subm[i].style.display = "none";
// 	}
// }

// var el = document.getElementsByClassName('submenu__list-item');
// for (var i = 0; i < el.length; i++) {
// 	el[i].addEventListener('mouseenter', showSub, false);
// 	el[i].addEventListener('mouseleave', hideSub, false);
// }

// function showSub() {
// 	if (this.children.length > 1) {
// 		this.children[1].style.height = "auto";
// 		this.children[1].style.opacity = "1";
// 		this.children[1].style.overflow = "visible";
// 	} else {
// 		return false;
// 	}
// }

// function hideSub() {
// 	if (this.children.length > 1) {
// 		this.children[1].style.height = "0";
// 		this.children[1].style.opacity = "0";
// 		this.children[1].style.overflow = "hidden";
// 	} else {
// 		return false;
// 	}
// }