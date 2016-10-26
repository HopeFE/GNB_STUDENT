import {
  GET_CAMERA_HISTORYIDS_SUCCESS,
  GET_CAMERA_HISTORYIDS_ERROR,

  GET_CAMERA_HISTORYLIST_SUCCESS,
  GET_CAMERA_HISTORYLIST_ERROR,

  DEL_CAMERA_HISTORYID_SUCCESS,
  DEL_CAMERA_HISTORYID_ERROR,

  GET_CAMERA_RESULTIDS_SUCCESS,
  GET_CAMERA_RESULTIDS_ERROR,

  GET_CAMERA_RESULTLIST_SUCCESS,
  GET_CAMERA_RESULTLIST_ERROR,
  //获取拍错题下例题
  GET_CAMERA_HISTORYEXAMPLEID_SUCCESS,
  GET_CAMERA_HISTORYEXAMPLEID_ERROR,

  POST_CAMERA_RESULTSEARCH_SUCCESS,
  POST_CAMERA_RESULTSEARCH_ERROR,

  POST_CAMERA_EXAMPLE_SUCCESS,
  POST_CAMERA_EXAMPLE_ERROR,
  SET_CAMERA_IMG,
  POST_CAMERA_SUCCESS,
  POST_CAMERA_ERROR,
}from '../mutationTypes'



const state = {
    cameraImg:'',
    //拍照历史
    history:{
      ids:[],
      list:[],
      totalPage:0,
      currentPage:1
    },
    //例题
    example:{
      code:'',
      list:[],
      msg:''
    },
    //移除历史
    del:{
      code:'',
      msg:''
    },
    //搜题结果
    result:{
      code:'',
      id:'',
      ids:[],
      list:[],
      msg:'',
    },
    //设置例题
    setExample:{
      code:'',
      msg:''
    },
    //提交人工搜索
    search:{
      code:'',
      msg:''
    }
}


const mutations = {
  [GET_CAMERA_HISTORYIDS_SUCCESS](state , data){
    state.history.ids = state.history.ids.concat(data.data.ids);
    state.history.totalPage = Number(data.data.totalPage);
    state.history.currentPage++;
  },
  [GET_CAMERA_HISTORYLIST_SUCCESS](state , data){
    state.history.list = state.history.list.concat(data.data);
  },
  [DEL_CAMERA_HISTORYID_SUCCESS](state , data){
    state.del.code = data.code;
    state.del.msg = data.msg;
  },
  [GET_CAMERA_RESULTIDS_SUCCESS](state , data){
    state.result.code = data.data.code;
    state.result.ids = data.data.ids;
    state.result.id = data.data.id;
    state.result.msg = data.msg;
  },
  [GET_CAMERA_RESULTLIST_SUCCESS](state , data){
    state.result.code = data.code;
    state.result.list = data.data;
    state.result.msg = data.msg;
  },
  [GET_CAMERA_HISTORYEXAMPLEID_SUCCESS](state , data){
    state.example.code = data.code;
    state.example.list = data.data;
    state.example.msg = data.msg;
  },
  [POST_CAMERA_RESULTSEARCH_SUCCESS](state , data){
    state.search.code = data.code;
    state.search.msg = data.msg;
  },
  [POST_CAMERA_EXAMPLE_SUCCESS](state , data){
    state.setExample.code = data.code;
    state.setExample.msg = data.msg;
  },
  [SET_CAMERA_IMG](state, data){
    state.cameraImg = data;
    }
}

export default {
  state,
  mutations
}
