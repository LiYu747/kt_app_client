import Vue  from 'vue'
import Vuex from  "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		testArr:[
			{id:1,name:"纪念日"}
		],
		
		city:"四川省",
		isDel:'',
		isComment:'',
	},
	// 同步更改值
	mutations:{
		changeValue(state,info){
		  	console.log(info)
			},
		// 判断用户是否触发删除事件
		isDel(state,info){
			this.state.isDel = info
			},
		//判断用户是否触发评论事件		
		isComment(state,info){
			this.state.isComment = info
			}
	},
	//异步
	actions:{
		getCity(){
			console.log()
		}
	}
	
})