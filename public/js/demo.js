(function() {
	document.addEventListener('DOMContentLoaded', function(){ 
		var navBtn = document.getElementsByClassName('nav-link');

		for (var i = 0; i < navBtn.length; i++) {
			navBtn[i].addEventListener("click", function() {
				console.log('hello');
				console.log(this.dataset.url);
				window.location.href = this.dataset.url
			});
		};
		
	}, false);
}());