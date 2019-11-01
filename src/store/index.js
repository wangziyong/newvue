import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goods:[],
	  flag:false,
	  statlog:false,
	  
  },
getters:{
	geystate(state){
		// state:true
		return state.statlog || Cookie.get("statlog")
	},
},
  mutations: {
	  setelog(state,log){
		  state.statlog=log
		  if(log)
		  {
			  Cookie.set("statlog",true)
		  }
		  else
		  {
			  Cookie.remove("statlog")
		  }
	  },
	  add(state,item){
		// $store.commit()
		
		state.goods.push(item)
	  }
  },
  actions: {
  },
  modules: {
  }
})
