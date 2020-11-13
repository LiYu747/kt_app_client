import utils from '../common/utils.js';
import arr from '../common/arr.js';

class Cache{
	
	cachePrefix = 'cache:';
	
	set(key,value,exp){
		if( exp === undefined ) exp = null;
		
		uni.setStorageSync(this.cachePrefix+key ,{
			exp : null,
			value : value,
		});
	}
	
	get(key,dft){
		let data = uni.getStorageSync(this.cachePrefix + key);
		if(dft === undefined) dft = null;
		
		if( !data ) return dft;
		
		if( !utils.isObj(data) ) return dft;
		
		let exp = arr.get(data,'exp');
		
		if( exp === null ) return data.value;
		
		if( exp < dater.now().getCurrMSeconds() ) return dft;
		
		return arr.get(data,'value',dft);
	}
	
	/**
	 * @param {string} key 
	 * @return {object} 
	 */
	getWithExp(key){
		
		let k = this.cachePrefix + key;
		
		let data = uni.getStorageSync(k);
		
		if(!data) return null;
		
		let exp = arr.get(data,'exp');
		
		if ( exp === null || exp > dater.now().getCurrMSeconds() ) return data;
		
		return null;
	}
}

module.exports = new Cache;