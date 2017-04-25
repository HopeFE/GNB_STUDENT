import Vue from 'vue'
import axios from '@/components/axios'
import * as types from './mutationTypes'

/** 获取短信验证码(注册账号) */
export const getRegisterCode = ({commit}, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'register/code',
      params: {
        'mobile': params.mobile,
        'cover': params.cover
      }
    })
    // .then((response) => {
    //   commit(types.REGISTER_MESSAGE, response.data)
    //   Vue.$vux.toast.show({text: response.data.msg, type: 'text', time: 1000, position: 'bottom'})
    //   resolve(response)
    // })
  })
}

/** 设置登陆密码(注册账号) */
export const addPwd = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'pwd/add',
      data: {
        ...params
      }
    })
    .then((response) => {
      commit('USER_TOKEN', response.data.data)
      resolve(response)
    })
  })
}

/** 用户登陆 */
export const login = ({ commit }, params) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'user/token',
      params: {
        ...params
      }
    })
    .then((response) => {
      commit('USER_TOKEN', response.data.data)
      Vue.$vux.loading.hide()
      resolve(response)
    })
    .catch((error) => {
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}

/** 获取短信验证码(忘记密码) */
export const getForgetCode = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'pwd/code',
      params: {
        mobile: params.mobile
      }
    })
    .then((response) => {
      commit(types.FORGET_MESSAGE, response.data)
      Vue.$vux.toast.show({text: response.data.msg, type: 'text', time: 1000, position: 'bottom'})
      resolve(response)
    })
  })
}

/** 新建用户信息 */
export const setNewUserInfo = ({rootState, commit}, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'user/addUserInfo',
      data: {
        ...params
      }
    })
    .then((response) => {
      resolve(response)
    })
  })
}

/** 重置登陆密码 */
export const resetPwd = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'pwd/resetByMobile',
      data: {
        ...params
      }
    })
    .then((response) => {
      Vue.$vux.toast.show({text: response.data.msg, type: 'text', time: 1000, position: 'bottom'})
      resolve(response)
    })
  })
}
