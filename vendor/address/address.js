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
}
module.exports = new Address