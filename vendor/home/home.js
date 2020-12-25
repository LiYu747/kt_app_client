import routes from '../request/routes.js';
import req from '../request/req.js';
class Home {
	// 轮播图
	chart (params) {
		params.url = routes.home.adPos.rotationChart;
		req.get(params);
	}
	
	// 周边消息
	news (params) {
		params.url = routes.home.news.peripheralNews
		req.get(params)
	}
	
	//周边详情
	  surroundingDetails (params) {
		  params.url = routes.home.news.surroundingDetails
		  req.get(params)
	  }
	  
	// 社区资讯
	infortion (params) {
		params.url = routes.home.infortion.infor
		req.get(params)
	}
	 
	// 资讯详情
	infordils (params) {
		params.url = routes.home.infortion.infordils
		req.get(params)
	}
	
	// 社区新闻
	CommunityNews (params) {
		params.url = routes.home.infortion.CommunityNews
		req.get(params)
	}
	
	//新闻详情
	NewsDils (params) {
		params.url = routes.home.infortion.NewsDils
		req.get(params)
	}
	
	 //申请入驻
	 moveInApply (params) {
		 params.url = routes.home.applecheckin.apple
		 req.post(params)
	 }
	 
	 //申请入驻记录
	 applerecord (params) {
		 params.url = routes.home.applecheckin.applerecord
		 req.get(params)
	 }
	 
	 //入驻记录详情
	 recordDils (params) {
	 		 params.url = routes.home.applecheckin.recordDils
	 		 req.get(params)
	 }
	 
	 // 出行记录
	  travelRecords (params) {
	  		 params.url = routes.home.visitLog.travelRecords
	  		 req.get(params)
	  }
	 
	//申请拜访
	VisitApplication (params) {
		params.url = routes.home.visitLog.apply
		req.post(params)
	}
	
	//最新拜访
	newapply (params) {
		params.url = routes.home.visitLog.newapply
		req.get(params)
	}
	
	// 拜访记录
	gorecord (params) {
		params.url = routes.home.visitLog.apply
		req.get(params)
	}
	
	// 拜访记录详情
	goapplydeil (params) {
		params.url = routes.home.visitLog.details
		req.get(params)
	}
	
	// 来访记录
	Visitrecord (params) {
		params.url = routes.home.Visitrecord.visitors
		req.get(params)
	}
	
	// 来访详情
	comvisitdeil (params) {
		params.url = routes.home.Visitrecord.details
		req.get(params)
	}
	
	// 处理来访申请
	handlevisit (params) {
		params.url = routes.home.Visitrecord.handlevisit
		req.patch(params)
	}
	
	// 获取二维码
	obtaincode (params) {
		params.url = routes.home.qrcode.obtaincode
		req.post(params)
	}
	
	// 物业查看小区进出记录
	recordOfAccess (params) {
		params.url = routes.propertyManagement.recordOfAccess
		req.get(params)
	}
	
	//物业入住申请所有记录
	checkinRecord (params) {
		params.url = routes.propertyManagement.checkinRecord
		req.get(params)
	}
	
	//入住申请记录详情
	checkinDetails (params) {
		params.url = routes.propertyManagement.checkinDetails
		req.get(params)
	}
	
	// 审核某条记录
	auditRecord (params) {
		params.url = routes.propertyManagement.auditRecord
		req.patch(params)
	}
	
	//获取所有帖子
	allPost (params) {
		params.url = routes.propertyManagement.allPost
		req.get(params)
	}
}
module.exports = new Home