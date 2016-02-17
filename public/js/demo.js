(function() {
	document.addEventListener('DOMContentLoaded', function(){ 
		var navBtn = document.getElementsByClassName('nav-link');

		for (var i = 0; i < navBtn.length; i++) {
			navBtn[i].addEventListener("click", function() {
				window.location.href = this.dataset.url
			});
		};
		
	}, false);
}());