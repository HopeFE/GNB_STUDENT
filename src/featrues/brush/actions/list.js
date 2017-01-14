import Api from '../../../config/httpdispatch'
import * as _ from '../../../config/whole'
import * as types from '../mutationTypes'

/**清空列表 */
export const brushListClear = ({ dispatch }) => {
  dispatch(types.BRUSH_LIST_CLEAR);
}

/**设置高度 */
export const setScoll = ({ dispatch },height) => {
  dispatch(types.BRUSH_LIST_SCOLLER,height);
}


/**刷题或者斩题 
 * @parm index 对应刷题的索引
*/
export const brushAction = ({ dispatch }, params, index,success) => {
  Api.brushAction({
    data: params,
    ok: response => {
      dispatch(types.BRUSH_ACTION,index);
      success&&success(response);
    },
    wrong: response => {
      _.toast(response.data.msg);
    }
  })
}

/**获取刷题列表 */
export const getBrushList = ({ dispatch }, params, success) => {
  Api.brushList({
    data: params,
    ok: response => {
      dispatch(types.BRUSH_LIST, response.data);
      success&&success(response);
    },
    wrong: response => {
      _.toast(response.data.msg);
    }
  })
}


