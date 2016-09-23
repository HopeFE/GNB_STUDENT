import {
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
  GET_LOGIN_FAILED,
  GET_LOGIN_CLEAR
} from '../mutationTypes'

const state = {
  userInfo:{
    headImg:'',
    mobile:'',
    name:'',
    isVip:'0',
    balance:'0',
    numerical:'0',
<<<<<<< HEAD
    token:'2923de032ab45edd4f1897b58c0f5bcf'
=======
    token:'2923de032ab45edd4f1897b58c0f5bcf',
>>>>>>> 64a252e593836e5d1e091dc54d4c3ee9be7952fe
  },
  msg:''
}

const mutations = {
  [GET_LOGIN_SUCCESS](state , data){
    state.userInfo.headImg =data.data.headImg;
    state.userInfo.mobile = data.data.mobile;
    state.userInfo.name = data.data.name;
    state.userInfo.token = data.data.token;
    state.userInfo.isVip = data.data.isVip;
    state.userInfo.balance = data.data.balance;
    state.userInfo.numerical = data.data.numerical;
    state.msg = data.msg;
  },
  [GET_LOGIN_FAILED](state , data){
    state.msg = data.msg;
  }
}

export default {
  state,
  mutations
}
