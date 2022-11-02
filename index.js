//carousel js
let ul = document.querySelector('#slider');
for (var i = ul.children.length; i >= 0; i--) {
ul.appendChild(ul.children[Math.random() * i | 0])}
//this code is to randomize the slides

$(".carousel").owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		navText: ["<i style='font-size: 170%; font-weight: bolder;'><</i>","<i style='font-size: 170%; font-weight: bolder;'>></i>"],
		responsive: {
			0:{
				items:1,
				nav: true
			},
			600:{
				items:2,
				nav: true
			},
			900:{
				items:3,
				nav: true
			},
			1200:{
				items:4,
				nav: true
			},
			1500:{
				items:6,
				nav: true
			},
		}
});