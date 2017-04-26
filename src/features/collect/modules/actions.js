import axios from '@/components/axios/'
import * as types from './mutationTypes'

/** 获取收藏例题 */
export const getCollect = ({rootState, commit, state}, params) => {
  // let subjectId = (rootState.route.name.indexOf('math') !== -1 ? 2 : 7)
  // let subject = (rootState.route.name.indexOf('math') !== -1 ? 'math' : 'physics')
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'collect',
      params: {
        token: rootState.common.user.token,
        subject_id: 2,
        offset: state.math.offset
      }
    })
    .then((response) => {
      // commit(types.COLLECT_LIST, {subject: 'math', data: response.data.data})
      commit(types.COLLECT_LIST, response.data.data)
      resolve(response)
    })
  })
}

/** 高度保存 */
export const setCollectScroll = ({rootState, commit}, height) => {
  // let subject = (rootState.route.name.indexOf('math') !== -1 ? 'math' : 'physics')
  commit(types.COLLECT_SCROLL, {subject: 'math', height: height})
}

/** 清空收藏本 */
export const clearCollect = ({rootState, commit}) => {
  // let subject = (rootState.route.name.indexOf('math') !== -1 ? 'math' : 'physics')
  commit(types.COLLECT_RELOAD, {subject: 'math'})
}
