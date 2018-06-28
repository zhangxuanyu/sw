import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        page:1,
        allpage:1,
		gamenum:1,
		// 游戏数组
		glist:[],
		//刷新数据flag
		newflag:false
    },
    mutations:{
        runpages(state,payload) {
			//页码小于等于1
			if (payload <= 1) {
			   state.page = 1
			}
			//页码大于总页数
			else if (payload >= state.allpage) {
			  state.page = state.allpage;
			}else{
				//页码赋给当前页
				state.page = payload
			}
			console.log(state.page)
        },
        changegame(state,payload) {
			state.gamenum = payload
		},
		getglist(state,payload){
			state.glist = payload
		},
		getallpage(state,payload){
			state.allpage = payload
		},
		changenew(state){
			state.newflag = !state.newflag
		}
    }
})
