(function() {

	document.addEventListener('DOMContentLoaded', function() {

		var token = sessionStorage.getItem('LRTokenKey');
	
		var loginBtn = document.getElementsByClassName('nav-link login');
		var logoutBtn = document.getElementsByClassName('nav-link logout');
		
		if(token) {
			var form = document.createElement('form');
			form.method = 'POST';
			form.action = '/userreg/profile';
			var tokenInput = document.createElement('input');
			tokenInput.name = 'token';
			tokenInput.value = token;
			form.appendChild(tokenInput);
			localStorage.removeItem('LRTokenKey');
			sessionStorage.removeItem('LRTokenKey');
			form.submit();
		}

		var navBtn = document.getElementsByClassName('nav-link');
		for (var i = 0; i < navBtn.length; i++) {
			navBtn[i].addEventListener("click", function() {
				if( this.dataset.url == 'logout' ) {
					sessionStorage.removeItem('LRTokenKey');
					window.location.href = '/userreg/registration';
				} else {
					window.location.href = this.dataset.url;
				}
			});
		};
		
	}, false);
}());