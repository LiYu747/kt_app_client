import cache from '../cache/cache.js';
import routes from '../request/routes.js';
import utils from '../common/utils.js';
import str from '../common/str.js';

class Clients{
	
	//此客户端唯一标识
	clientId = '';
	secret = '';
	
	clientType = 0;
	
	clientInfo = null;
	
	cacheKey = 'clientInfo';
	
	version = '1.0.1';
	
	//与后端的客户端类型对应
	CLIENT_TYPE_UNKNOWN = 0;
	CLIENT_TYPE_ANDROID = 1;
	CLIENT_TYPE_IOS = 2;
	CLIENT_TYPE_H5 = 3;
	
	constructor() {
	    this.fixCurrClientType();
		
		this.createOrUpdate();
		
		//是否需要更新客户端
		this.askUpdateClient();
	}
	
	//判断当前的客户端类型
	fixCurrClientType(){
		let t = uni.getSystemInfoSync().platform;
		
		switch(t){
			case 'android':
				this.clientType = this.CLIENT_TYPE_ANDROID;
				break;
			case 'ios':
				this.clientType = this.CLIENT_TYPE_IOS;
				break;
			case 'other':
				this.clientType = this.CLIENT_TYPE_UNKNOWN;
				break;
			default : 
				this.clientType = this.CLIENT_TYPE_UNKNOWN;
				break;
		}
	}
	
	loadFromCache(){
		let info = cache.get(this.cacheKey);
		
		if( !info ) return null;
		
		this.clientInfo = info;
		this.clientId = info.client_id;
		this.secret = info.secret;
		
		return this.clientInfo;
		// this.clientId = 
	}
	
	createOrUpdate (){
		let info = this.loadFromCache();
		if( this.clientInfo ) this.update();
		else this.create();
	}
	
	create(){
		let that = this;
		uni.request({
			url: routes.client.reg,
			method: 'POST',
			header:{
				'client-type' : that.clientType,
				'client-version' : that.version,
			},
			data: {
				sys_info : uni.getSystemInfoSync()
			},
			fail : ()=>{
				uni.showModal({
					content:'网络异常，请检查网络',
					showCancel: false
				})
			},
			success : (res)=>{
				if( res.statusCode != 200 ){
					uni.showModal({
						content:'初始化出错，请重启',
						showCancel:false
					});
					return;
				}
				
				if(res.data.code != 200){
					uni.showModal({
						content:'初始化出错,errMsg:'+ res.data.msg,
						showCancel:false
					});
					return;
				}
				
				let data = res.data.data;
				that.clientInfo = data;
				that.clientId = data.client_id;
				that.secret = data.secret;
				cache.set(that.cacheKey,data);
			}
		})
	}
	
	update(){
		
		let that = this;
		uni.request({
			url: routes.client.reg,
			method: 'POST',
			header:{
				'client-type' : that.clientType,
				'client-version' : that.version,
				'client-id' : that.clientId,
				'client-secret' : that.secret,
			},
			data: {
				_method : 'patch',
				sys_info : uni.getSystemInfoSync()
			},
			fail : ()=>{
				uni.showModal({
					content:'网络异常，请检查网络',
					showCancel: false
				})
			},
			success : (res)=>{
				if( res.statusCode != 200 ){
					
					return;
				}
				
				if(res.data.code != 200){
					
					return;
				}
				
				// let data = res.data.data;
				// that.clientInfo = data;
				// that.clientId = data.client_id;
				// that.secret = data.secret;
				// cache.set(that.cacheKey,data);
			}
		})
	}
	
	getClientId(){
		return this.clientId;
	}
	
	getClientType(){
		return this.clientType;
	}
	
	//从服务端获取最新的版本信息
	getLatestVersion(params){
		params.url = routes.client.version.latest;
		
		if( params.header === undefined ) params.header = {};
		
		params.header['client-id'] = this.getClientId();
		params.header['client-version'] = this.version;
		params.header['client-type'] = this.getClientType();
		
		uni.request(params);
	}
	
	askUpdateClient(){
		this.getLatestVersion({
			success : (res)=>{
				// console.log(res);
				let androidVersion = res.data.data.app_android_latest_version;
				
				let d = str.diffVersion( this.version,androidVersion);
				
				if( d == -1 ){
					uni.showModal({
						content:'有版本更新',
						confirmText:'更新',
						success(res2) {
							if( res2.confirm == true ){
								console.log('do update action');
							}
						}
					})
				}
			}
		})
	}
	
}

module.exports = new Clients;
