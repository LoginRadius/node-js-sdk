var request = require('request');

exports.loginradiusauth = function(token,secret,handle){
	var url = 'https://hub.loginradius.com/userprofile.ashx?token=' + token + '&apisecrete='+secret;
	request(url, function (error, res, body) {
	  if (!error && res.statusCode == 200) {
		handle(true,body); // Print the google web page.
	  }
	  else{
		handle(false,body);
	  }
	});
}