import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import Vue from 'vue'
Vue.use(Vuex)
const store =new Vuex.Store({
    state:{
        userId:'asdss',
        talkerName:'',
        talkerList:[]
    },
    mutations,
    actions,
    getters:{
        getMyId:state=>{
            return state.userId
        },
        getTalkerName:state=>{
            return state.talkerName
        },
        getTalkerList:state=>{
            return state.talkerList
        }
    }
})

export default store;