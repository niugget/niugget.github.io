var image = $('img.home-img'),
	sideNav = $('.side-nav');

function resizeDiv(){
	sideNav.height(image.height());
}

resizeDiv();

$(window).resize(function(){
	resizeDiv();
});