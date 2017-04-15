import axios from '@/components/axios/'
import * as types from './mutationTypes'

/** 获取收藏例题ID */
export const getCollect = ({rootState, commit, state}, params) => {
  let subjectId = (rootState.route.name.includes('math') ? 2 : 7)
  let subject = (rootState.route.name.includes('math') ? 'math' : 'physics')
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'collect/example',
      params: {
        token: rootState.common.user.token,
        subject_id: subjectId,
        offset: state[subject].offset
      }
    })
    .then((response) => {
      commit(types.COLLECT_LIST, {'subject': subject, 'data': response.data.data})
      resolve(response)
    })
  })
}

/** 高度保存 */
export const setCollectScroll = ({rootState, commit}, height) => {
  let subject = (rootState.route.name.includes('math') ? 'math' : 'physics')
  commit(types.COLLECT_SCROLL, {'subject': subject, 'height': height})
}

/** 清空收藏本 */
export const clearCollect = ({rootState, commit}) => {
  let subject = (rootState.route.name.includes('math') ? 'math' : 'physics')
  commit(types.COLLECT_RELOAD, {'subject': subject})
}
