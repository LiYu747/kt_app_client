//本地开发域名
let host = 'http://local.kt.cn/';
let apiPath = host + 'api/';
module.exports = {
	
	host : host,
	
	client : {
		reg : apiPath + 'app/client',
		
		version : {
			latest : apiPath + 'app/version/latest',
		}
	},
	
	services : {
		sms : {
			userLoginCode : host + 'services/sms/loginCode',
		}
	},
	
	user : {
		auth : {
			login : apiPath + 'user/user/login'
		}
	}
}