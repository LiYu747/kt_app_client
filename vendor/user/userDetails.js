import routes from '../request/routes.js';
import req from '../request/req.js';

class userd{
	// 个人信息
	userDeta(params){
		params.url = routes.user.userdeta.userdetails;
		req.get(params)
	}

	//修改个人信息
	userupdate(params){
		params.url = routes.user.userupdate.update
		req.patch(params)
	}
	
	////修改证件照
	updataphoto(params){
		params.url = routes.user.userupdate.updataphoto
		req.patch(params)
	}
}
module.exports = new userd;