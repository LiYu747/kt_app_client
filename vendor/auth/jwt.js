import dater from '../date/dater.js';
import cache from '../cache/cache.js';

class JWT{
	
	token = '';
	tokenExp = 0;
	
	cacheTokenKey = 'jwt';
	
	constructor(){
		this.reload();
	}
	
	//从本地获取token
	reload(){
		let tokenInfo = cache.getWithExp(this.cacheTokenKey);
		
		console.log('jwt reload:tokenInfo:',tokenInfo)
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
	setToken(token,exp){
		this.token = token;
		this.tokenExp = exp;
		cache.set(this.cacheTokenKey,token,exp);
	}
}

module.exports = new JWT;