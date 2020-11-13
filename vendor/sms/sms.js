import routes from '../request/routes.js';
import req from '../request/req.js';

class Sms{
	userLoginCode (params){
		params.url = routes.services.sms.userLoginCode;
		req.post(params);
	}
}

module.exports = new Sms;