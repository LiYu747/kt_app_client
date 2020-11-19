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
		// 登录验证码
		sms : {
			userLoginCode : host + 'services/sms/loginCode',
		},
		// 注册验证码
		regsms : {
			userRegCode : host + 'services/sms/regCode'
		}
	},
	
	user : {
		// 登录
		auth : {
			login : apiPath + 'user/user/login'
		},
		// 注册
		register:{
			regis : apiPath + 'user/user'
		},
		// 个人信息
		userdeta:{
			userdetails : apiPath + 'user/user/profile'
		},
		// 修改个人信息
		userupdate: {
			update : apiPath + 'user/user/update'
		}
	},
	
	home : {
		// 轮播图
		adPos : {
			rotationChart : apiPath + 'ad/adPos/show'
		},
		// 社区资讯
		infortion: {
			infor : apiPath + 'village/news'
		},
		
		// 周边
		news : { 
			peripheralNews : apiPath  + 'article/news'
		},
	},
	
	// 小区
	village : {
		// 小区列表
		vagelist : {
			list : apiPath + 'village/village',
			selectLists : apiPath + 'village/village/selectLists',
		},
		// 获取某小区内的住址信息
		vageshow : {
			show : apiPath + 'village/village/show'
		}
	}
}