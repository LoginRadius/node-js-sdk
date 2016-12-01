module.exports = {
	partner_key : "",
	partner_secret : "",
	setAuth : function(partnerKey,partnerSecret){
		partner_key = partnerKey;
		partner_secret = partnerSecret;
	},
	getAuthQueryString : function(){
		return "?partnerKey=" + partner_key + "&partnerSecret=" + partner_secret;
	},
    getAuthQueryStringWithTakeAndSkip : function(take,skip){
        return "?partnerKey=" + partner_key + "&partnerSecret=" + partner_secret+"&take="+take+"&skip="+skip;
    }
};