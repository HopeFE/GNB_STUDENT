import Vue from 'vue'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
import {
  sync
} from 'vuex-router-sync'
import App from './app'
import store from './store'
import * as _ from './config/whole.js'
//登陆、注册
import Login from './login/pages/login'
import register from './login/pages/register'
import setPassword from './login/pages/setPassword'
import setInfo from './login/pages/setInfo'
import forget from './login/pages/forget'
import resetPassword from './login/pages/resetPassword'
//首页
import Main from './main/common/main'
import Index from './main/pages/index'
import User from './main/pages/user'


import Photo from './main/pages/photo.vue'
//题目评注、纠错
import correct from './common/pages/correct'
import comment from './common/pages/comment'
//拍错题
import camera from './camera/pages/index'
import cameraHistory from './camera/pages/history'
import cameraExample from './camera/pages/example'
import cameraResult from './camera/pages/result'
import cameraPhoto from './camera/pages/photo'
import cameraSuccess from './camera/pages/success'
//归纳本
import error from './error/pages/index'
import errorList from './error/pages/list'
import errorDetail from './error/pages/detail'
import errorMore from './error/pages/more'
import errorRecommend from './error/pages/recommend'

//互动
import interact from './interact/index'
import interactClass from './interact/pages/class'
import interactCorrect from './interact/pages/correct'
import interactSystem from './interact/pages/system'
//题型汇总
import brush from './brush/pages/index'
import brushExample from './brush/pages/example'
import brushList from './brush/pages/list'
import brushTypeList from './brush/pages/typeList'

//记错题
import remember from './remember/pages/index'
import rememberWorkbook from './remember/pages/workbook'
import rememberExercise from './remember/pages/exercise'
import rememberExample from './remember/pages/example'
import rememberAdd from './remember/pages/add'
import rememberTextBookAdd from './bag/textbook/pages/fromWorkbookAdd'
//个人中心
import userInfo from './user/pages/info'
//个人中心-设置
import userSettingsIndex from './user/pages/settings/index'
import userSettingsResetPwd from './user/pages/settings/resetPwd'
import userSettingsAdvice from './user/pages/settings/advice'
import userSettingsAdviceHistory from './user/pages/settings/adviceHistory'
//个人中心-邀请好友
import userInviteIndex from './user/pages/invite/index'
import userInviteFriend from './user/pages/invite/friend'
import userCodeInput from './user/pages/invite/input'
//我的会员
import userMemberIndex from './user/pages/member/index'
import userMemberPoints from './user/pages/member/points'
import userMemberRule from './user/pages/member/rule'
import userMemberRecharge from './user/pages/member/recharge'
import userMemberMyBill from './user/pages/member/myBill'
//我的班级
import userClassIndex from './user/pages/class/index'
import userClassmate from './user/pages/class/classmate'
import userClassAdd from './user/pages/class/add'
/**
 * 书包
 */
import Bag from './bag/bag'
//书包-我的习题册
import bagWorkbook from './bag/workbook/pages/index'
import bagWorkbookAdd from './bag/workbook/pages/add'
//书包-知识图谱
import bagReport from './bag/report/pages/index'
import bagReportDetail from './bag/report/pages/detail'
//书包-我的教材
import bagTextbook from './bag/textbook/pages/index'
import bagTextbookAdd from './bag/textbook/pages/add'
//书包-收藏本
import bagCollectExample from './bag/collect/pages/example'
import bagCollectExampleDetail from './bag/collect/pages/exampleDetail'
/**
 * 拍错题收藏
 * import collectCamera from './collect/pages/camera'
 * import collectCameraDetail from './collect/pages/cameraRecord'
 */


//插件
import moment from 'moment'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import '../node_modules/cropperjs/dist/cropper.min.css'

Vue.use(Router)
Vue.use(VueTouch)

Vue.config.devtools = true
FastClick.attach(document.body)

//图片异步加载
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'http://www.chinasanbao.com/new/upload/headimg/headimg.png',
  loading: 'http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg'
})

//格式化时间
Vue.filter('ymd', function (value) {
  return moment.unix(value).format('YYYY-MM-DD');
});

//请求超时
Vue.http.interceptors.push((request, next) => {
  var timeout;
  if (request._timeout) {
    timeout = setTimeout(() => {
      if (request.onTimeout) request.onTimeout(request)
      request.abort()
    }, request._timeout);
  }
  next((response) => {
    clearTimeout(timeout);
  });
})

//判断系统
var ua = navigator.userAgent.toLowerCase();
const commit = store.commit || store.dispatch
if (/iphone|ipad|ipod/.test(ua)) {
  commit('SET_SYSTEM', 'IOS')
} else if (/android/.test(ua)) {
  commit('SET_SYSTEM', 'Android')
}


const router = new Router()
router.map({
  '/login': {
    component: Login
  },
  //注册账户
  'register': {
    component: register
  },
  'register/password': {
    component: setPassword
  },
  'register/info': {
    component: setInfo
  },
  //忘记密码
  'forget': {
    component: forget
  },
  'forget/password': {
    component: resetPassword
  },
  //纠错
  'correct/:subjectId/:id': {
    component: correct
  },
  //评注
  'comment/:subjectId/:id': {
    component: comment
  },
  //主页
  '/': {
    component: Main,
    subRoutes: {
      'user/': {
        component: User
      },
      'interact/': {
        component: interact
      },
      'index/': {
        component: Index
      },
      'bag/': {
        component: Bag
      }
    }
  },
  'main/user/photo': {
    component: Photo
  },
  //拍错题
  'camera': {
    component: camera
  },
  'camera/history': {
    component: cameraHistory
  },
  'camera/photo': {
    component: cameraPhoto
  },
  'camera/example/:cameraId/:exampleId': {
    component: cameraExample
  },
  'camera/result/:id': {
    component: cameraResult
  },
  'camera/success': {
    component: cameraSuccess
  },
  //归纳本
  'error': {
    component: error
  },
  'error/detail/:id': {
    component: errorDetail
  },
  'error/list/:knowledgeId': {
    component: errorList
  },
  'error/more/:knowledgeId/:id': {
    component: errorMore
  },
  'error/recommend/:knowledgeId': {
    component: errorRecommend
  },
  //消息
  'interact/class': {
    component: interactClass
  },
  'interact/system': {
    component: interactSystem
  },
  'interact/correct': {
    component: interactCorrect
  },

  //记错题
  'remember': {
    component: remember
  },
  'remember/add': {
    component: rememberAdd
  },
  'remember/example/:id': {
    component: rememberExample
  },
  'remember/workbook/:bookId': {
    component: rememberWorkbook
  },
  'remember/workbook/exercise/:chapterId': {
    component: rememberExercise
  },
  'remember/textbook/add/:subjectId': {
    component: rememberTextBookAdd
  },
  //题型汇总
  'brush': {
    component: brush
  },
  'brush/example/:id': {
    component: brushExample
  },
  'brush/list/:chapterId': {
    component: brushList
  },
  'brush/typeList/:chapterId': {
    component: brushTypeList
  },
  //个人中心
  'user/info': {
    component: userInfo
  },
  //设置
  'user/settings': {
    component: userSettingsIndex
  },
  'user/settings/resetPwd': {
    component: userSettingsResetPwd
  },
  'user/settings/advice': {
    component: userSettingsAdvice
  },
  'user/settings/advice/history': {
    component: userSettingsAdviceHistory
  },
  //邀请好友
  'user/invite': {
    component: userInviteIndex
  },
  'user/invite/friend': {
    component: userInviteFriend
  },
  'user/invite/input': {
    component: userCodeInput
  },
  //我的会员
  'user/member': {
    component: userMemberIndex
  },
  'user/member/points': {
    component: userMemberPoints
  }, //我的积分
  'user/member/recharge': {
    component: userMemberRecharge
  }, //充值
  'user/member/myBill': {
    component: userMemberMyBill
  }, //我的账单
  'user/member/rule': {
    component: userMemberRule
  }, //积分规则
  //我的班级
  'user/class': {
    component: userClassIndex
  },
  'user/class/detail/:id': {
    component: userClassmate
  },
  'user/class/add': {
    component: userClassAdd
  },

  /**
   * 书包模块
   */
  //知识图谱
  'bag/report': {
    component: bagReport
  },
  'bag/report/detail/:chapterId': {
    component: bagReportDetail
  },
  //我的教材
  'bag/textbook': {
    component: bagTextbook
  },
  'bag/textbook/add': {
    component: bagTextbookAdd
  },
  //我的习题册
  'bag/workbook': {
    component: bagWorkbook
  },
  'bag/workbook/add':{
    component:bagWorkbookAdd
  },
  //收藏本
  'bag/collect/example': {
    component: bagCollectExample
  },
  'bag/collect/example/detail/:id': {
    component: bagCollectExampleDetail
  },
  // 'collect/camera': {
  //   component: collectCamera
  // },
  // 'collect/camera/detail/:id/:cameraId': {
  //   component: collectCameraDetail
  // }


})

router.redirect({
  // '/':'/main',
  'camera/correct/:subjectId/:id': '/correct/:subjectId/:id',
  'remember/correct/:subjectId/:id': '/correct/:subjectId/:id',
  'error/correct/:subjectId/:id': '/correct/:subjectId/:id',
  'brush/correct/:subjectId/:id': '/correct/:subjectId/:id',
  'camera/comment/:subjectId/:id': '/comment/:subjectId/:id',
  'collect/comment/:subjectId/:id': '/comment/:subjectId/:id',
  'error/comment/:subjectId/:id': '/comment/:subjectId/:id'
});

sync(store, router)

router.beforeEach(function (transition) {
  if (transition.to.path == '/') {
    if (localStorage.token) {
      router.replace('/index');
    } else {
      router.replace('/login');
    }
  }
  transition.next();
})






function plusReady() {
  let first = null;
  plus.key.addEventListener("backbutton", function () {
    //主界面上不返回上一级
    if (store.state.route.path == '/main/index' || store.state.route.path == '/main/interact' || store.state.route.path == '/main/user') {
      if (!first) {
        first = new Date().getTime();
        _.toast('再按一次退出')
        setTimeout(function () {
          first = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first < 1000) {
          plus.runtime.quit();
        }
      }
    }
    //模块首页的返回键进入主页
    else if (store.state.route.path == '/camera' || store.state.route.path == '/error' || store.state.route.path == '/report' ||
      store.state.route.path == '/brush' || store.state.route.path == '/collect/example' || store.state.route.path == '/remember') {
      router.go('/main/index');
    }
    //正在加载不返回上一级
    else if (store.state.Global.isLoading) {
      _.leave();
      return;
    }
    //返回上一个访问页面
    else {
      window.history.back();
    }
  });
}

if (window.plus) {
  plusReady();
} else {
  document.addEventListener("plusready", plusReady, false);
}

router.start(App, '#App')
