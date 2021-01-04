import routes from '../request/routes.js';
import req from '../request/req.js';
class Address {
	// 用户所有地址
	alladd (params) {
		params.url = routes.address.alladd.list;
		req.get(params);
	}
	
	 // 某一个住址的详细信息
	 listdetails ( params) {
		 params.url = routes.address.alladd.listdetails
		 req.get(params)
	 }
	
	//预约电梯
	bookingElevator (params) {
		params.url = routes.address.bookingElevator.booking
		req.get(params)
	}
	
	//查看住所内的所有成员
	lookMember ( params) {
			 params.url = routes.address.alladd.lookMember
			 req.get(params)
	}
	
	// 查找用户是否存在
	findUser ( params) {
			 params.url = routes.address.alladd.findUser
			 req.get(params)
	}
	
	//添加住所成员
	pushMember ( params) {
			 params.url = routes.address.alladd.pushMember
			 req.post(params)
	}
}
module.exports = new Address