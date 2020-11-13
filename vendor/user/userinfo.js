import routes from '../request/routes.js';
import req from '../request/req.js';

class UserInfo{
	
	//需登录成功后再执行的所有回调
	loginSuccessCallbackTask = [];
	
	login(params){
		params.url = routes.user.auth.login;
		req.post(params);
	}
}

module.exports = new UserInfo;