import dater from '../date/dater.js';
import cache from '../cache/cache.js';
import base64 from '../base/base64.js';
import arr from '../common/arr.js';
import utils from '../common/utils.js';

class JWT{
	
	token = '';
	tokenExp = 0;
	
	cacheTokenKey = 'jwt';
	
	loginCallbackTask = [];
	
	constructor(){
		this.reload();
	}
	
	//从本地获取token
	reload(){
		let tokenInfo = cache.getWithExp(this.cacheTokenKey);
		
		if ( tokenInfo == null ) return;
		
		this.token = tokenInfo.value;
		this.tokenExp = tokenInfo.exp;
	}
	
	getToken(){
		
		//避免极限失效时间
		if( this.tokenExp <= (dater.now().getCurrMSeconds() - 10 ) ) return '';
		return this.token;
	}
	
	/**
	 * @param {String} token 字符串
	 * @param {Number} exp 过期时间，单位毫秒
	 */
	setToken(token,exp,callback){
		
		this.token = token;
		this.tokenExp = exp;
		cache.set(this.cacheTokenKey,token,exp);
		
		utils.doIfIsFunc(callback);
	}
	
	parseToken(token){
		
		let jwt_token = token
		let jwtPre = "Bearer ";
		let str = jwt_token.slice(jwtPre.length);
		let jwtArr = str.split('.'); 
		
		let info = jwtArr.length == 3 ? jwtArr[1] : null;
		if(!info ) return null;
		return JSON.parse(base64.decode(info));
	}
	
	/**
	 * 只能在有可用token的
	 */
	getParseInfo(){
		let t = this.getToken();
		if ( !t ) return null;
		return this.parseToken(t);
	}
	
	
	isAskLogin = false;
	
	doOnlyTokenValid(params){
		
		let token = this.getToken();
		
		if( token ){
			utils.doIfIsFunc(params.success);
			return;
		}
		
		//是否需要在登录成功后继续执行success
		let keepSuccess = arr.get(params,'keepSuccess',true);
		
		if( keepSuccess == true ) this.pushTask(params.success);
		
		let showModal = arr.get(params,'showModal',false);
		
		if( showModal === false ) return;
		
		if( this.isAskLogin == true ) return;
		
		this.isAskLogin = true;
		
		let that = this;
		
		uni.showModal({
			title : arr.get(params,'modalTitle','登录提示'),
			content: arr.get(params,'modalContent','请登录后在继续操作'),
			success(res) {
				that.isAskLogin = false;
				if( res.confirm == true){
					uni.navigateTo({
						url : '/pages/auth/login/login',
					})
				}
			}
		})
	}
	
	
	pushTask(callback){
		if( utils.isFunc(callback) ) this.loginCallbackTask.push(callback);
	}
	
	execTask(){
		if( this.loginCallbackTask.length < 1 ) return;
		
		while(true){
			let c = this.loginCallbackTask.shift();
			utils.doIfIsFunc(c);
			if( this.loginCallbackTask.length < 1 ) break;
		}
	}
	
	flushAllTask(){
		this.loginCallbackTask = [];
	}
	
}

module.exports = new JWT;