document.addEventListener('DOMContentLoaded', function() {

	const title = document.querySelector("#c-page-title");
	const byline = document.querySelector("#c-byline");
	const headImage = document.querySelector("#c-head-image");
	const main = document.querySelector("#main");
	var mainBox = main.getBoundingClientRect();
	var mainTop = mainBox.top;
	//const vh = window.innerHeight / 100;

	document.addEventListener('scroll', function(){
		
		console.log(mainBox);
		if (mainTop < 300) {
			title.classList.add("faded");
		} 
	});

}, false);