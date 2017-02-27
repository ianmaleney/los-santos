document.addEventListener('DOMContentLoaded', function() {

	const title = document.querySelector("#c-page-title");
	const byline = document.querySelector("#c-byline");
	const headImage = document.querySelector("#c-head-image");
	var main = document.querySelector("#main");
	var body = document.querySelector("body");
	var hashtags = document.querySelectorAll(".u-hashtag");
	var float = document.querySelector(".floating-tag");
	
	var bodyBox = body.getBoundingClientRect();
	var bodyBottom = bodyBox.bottom;
	var blockquote = document.querySelector(".u-blockquote");

	var fn = document.querySelectorAll(".c-footnote-number");
	var fnIndex = document.querySelectorAll(".c-footnote-index");
	var fnFloat = document.querySelector(".floating-fn");
	var fnOverlay = document.querySelector(".overlay");
	var fnShow = document.querySelector(".c-see-more");
	
	var div = Math.floor( bodyBottom / hashtags.length );

	var i = 1;

	document.addEventListener('scroll', function(){
		var mainBox = main.getBoundingClientRect();
		var mainTop = mainBox.top;
		var scrolled = Math.floor( window.pageYOffset );
		var floatBox = float.getBoundingClientRect();
		var blockBox = blockquote.getBoundingClientRect();

		if (mainTop < 300) {
			title.classList.add("faded");
			byline.classList.add("faded");
		} else {
			title.classList.remove("faded");
			byline.classList.remove("faded");
		}

		if (blockBox.top < floatBox.bottom && blockBox.bottom > floatBox.top){
			float.classList.add("faded");
		} else {
			float.classList.remove("faded");
		}

		if (floatBox.top < mainTop ) {
			float.style.display = "none";
		} else {
			float.style.display = "flex";
		}

		if (scrolled > div * i) {
				var floatSpan = document.createElement("a");
				var textNode = document.createTextNode( hashtags[i - 1].innerHTML );
				var text = hashtags[i - 1].innerHTML;
				var clean = text.replace(/[|&;$%@#"<>()+,]/g, "");
				floatSpan.target = "_blank";
				floatSpan.href = "https://www.instagram.com/explore/tags/"+ clean + "/";
				floatSpan.appendChild(textNode);
				float.appendChild(floatSpan);
				i++;
		}
	});

	fn.forEach(function(element, index) {
		element.addEventListener("click", function(){
    	fnFloat.innerHTML = fnIndex[index].innerHTML;
			fnFloat.classList.toggle("visible");
			fnOverlay.classList.toggle("visible");
		});
	});

	fnOverlay.addEventListener("click", function(){
		fnFloat.classList.toggle("visible");
		fnOverlay.classList.toggle("visible");
	});

	fnFloat.addEventListener("click", function(){
		fnFloat.classList.toggle("visible");
		fnOverlay.classList.toggle("visible");
	});

	fnShow.addEventListener("click", function(){
		fnIndex.forEach(function(element, index){
			element.classList.toggle("visible");
		});
	});

  var el = document.getElementById('c-page-title');
  var elHeight = el.offsetHeight;

	if (elHeight > 162){
		el.classList.add('roboto');
	}

}, false);