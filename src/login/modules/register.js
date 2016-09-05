import {
  GET_REGISTER_MESSAGE_SUCCESS,
  GET_REGISTER_MESSAGE_ERROR
} from '../mutationTypes'

const state = {
  code:'',
  mobile:''
}

const mutations = {
  [GET_REGISTER_MESSAGE_SUCCESS](state , data){
    state.code = data.code;
    state.mobile = data.mobile;
  },
  [GET_REGISTER_MESSAGE_ERROR](state, err){
    console.log(err)
  }
}

export default {
  state,
  mutations
}