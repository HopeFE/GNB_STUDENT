webpackJsonp([73],{137:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"d",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"b",function(){return u}),e.d(n,"e",function(){return a}),e.d(n,"g",function(){return c}),e.d(n,"f",function(){return s});var o="USERINFO",i="USER_TOKEN",r="USERPHOTO_SET",u="USERPHOTO_POST",a="USER_NEW_MESSAGE",c="TEXTBOOK_VERSION",s="SWIPER_INFO"},184:function(t,n,e){"use strict";var o=e(139),i=e.n(o),r=e(51),u=e(480),a=e(482),c=(e.n(a),e(84)),s=e(236),l=e(226),h=e(217),d=e(218),f=e(221),p=e(222),m=e(223),w=e(227),b=e(224),v=e(229),g=e(228),_=e(225),x=e(230),k=e(234);r.default.use(u.a);var y=new u.a({mode:"hash",routes:[h.a,d.a].concat(i()(p.a),[f.a,m.a,l.a],i()(s.a),i()(_.a),[w.a,v.a,b.a,x.a],i()(g.a),i()(k.a))});e.i(a.sync)(c.a,y),n.a=y},192:function(t,n,e){e(464);var o=e(57)(e(241),e(475),null,null);t.exports=o.exports},195:function(t,n,e){"use strict";var o=e(129),i=e.n(o),r=e(128),u=e.n(r),a=e(51),c=e(199),s=e.n(c),l=e(471),h=e.n(l);s.a.defaults.timeout=1e4,s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",s.a.defaults.baseURL="https://www.guinaben.com/student/",s.a.interceptors.request.use(function(t){return t.params=u()({},t.params,{VERSION:"3.3.0"}),"post"===t.method&&(t.data=h.a.stringify(t.data,{arrayFormat:"brackets"})),t},function(t){return a.default.$vux.toast.show({text:"非法输入",type:"text",time:1500,position:"bottom"}),i.a.reject(t)}),s.a.interceptors.response.use(function(t){if(401===t.data.code)return localStorage.removeItem("token"),a.default.$vux.toast.show({text:t.data.msg,type:"warn",time:1500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(t){window.location.href="/login"}},500),i.a.reject(t);if(403===t.data.code)a.default.$vux.alert.show({title:"更新",content:"据说新增功能666",onHide:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/gui-na-ben-xue-sheng-duan/id1184077595?l=en&mt=8"):window.location.href="market://details?id=com.sanbao.guinaben.student"}});else if(200!==t.data.code)return a.default.$vux.toast.show({text:t.data.msg,type:"text",time:1500,position:"bottom"}),i.a.reject(t);return t},function(t){return a.default.$vux.toast.show({text:"网络异常",type:"text",time:1500,position:"bottom"}),i.a.reject(t)}),n.a=s.a},198:function(t,n,e){e(466);var o=e(57)(e(237),e(477),null,null);t.exports=o.exports},217:function(t,n,e){"use strict";n.a={path:"/about",component:function(t){return e.e(69).then(function(){return t(e(491))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(23).then(function(){return t(e(490))}.bind(null,e)).catch(e.oe)}},{path:"my",component:function(t){return e.e(56).then(function(){return t(e(492))}.bind(null,e)).catch(e.oe)}},{path:"advice",component:function(t){return e.e(13).then(function(){return t(e(488))}.bind(null,e)).catch(e.oe)}},{path:"adviceHistory",component:function(t){return e.e(61).then(function(){return t(e(489))}.bind(null,e)).catch(e.oe)}}]}},218:function(t,n,e){"use strict";n.a={path:"/collect",component:function(t){return e.e(49).then(function(){return t(e(493))}.bind(null,e)).catch(e.oe)},redirect:"/collect/math",children:[{path:"physics",name:"collect_physics",component:function(t){return e.e(37).then(function(){return t(e(495))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"collect_math",component:function(t){return e.e(38).then(function(){return t(e(494))}.bind(null,e)).catch(e.oe)}}]}},219:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"getUserInfo",function(){return l}),e.d(n,"setUserInfo",function(){return h}),e.d(n,"getToken",function(){return d}),e.d(n,"getTextbookVersion",function(){return f}),e.d(n,"getUserNews",function(){return p}),e.d(n,"setHeadImg",function(){return m}),e.d(n,"uploadHeadImg",function(){return w}),e.d(n,"getSwiperInfo",function(){return b}),e.d(n,"swiperInfoClear",function(){return v});var o=e(128),i=e.n(o),r=e(129),u=e.n(r),a=e(51),c=e(195),s=e(137),l=function(t){var n=t.rootState,o=t.commit;return a.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,i){e.i(c.a)({method:"get",url:"user",params:{token:n.common.user.token}}).then(function(n){o(s.a,n.data.data),t(n),a.default.$vux.loading.hide()}).catch(function(){a.default.$vux.loading.hide()})})},h=function(t,n){var o=t.rootState;t.commit,t.dispatch;return a.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,r){e.i(c.a)({method:"post",url:"user/update",data:i()({},n,{token:o.common.user.token})}).then(function(n){a.default.$vux.loading.hide(),t(n)}).catch(function(){a.default.$vux.loading.hide()})})},d=function(t,n){var o=t.commit;return a.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,r){e.i(c.a)({method:"get",url:"user/token",params:i()({},n)}).then(function(n){o("USER_TOKEN",n.data.token),a.default.$vux.loading.hide(),t(n)}).catch(function(t){a.default.$vux.loading.hide(),r(t)})})},f=function(t,n){var o=t.commit;return a.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,i){e.i(c.a)({method:"get",url:"textbookVersion",params:{grade:n.grade}}).then(function(n){a.default.$vux.loading.hide(),o(s.g,n.data.data),t(n)}).catch(function(t){a.default.$vux.loading.hide(),i(t)})})},p=function(t){var n=t.rootState,o=t.commit;return new u.a(function(t,i){e.i(c.a)({method:"get",url:"message/new",params:{token:n.common.user.token}}).then(function(n){o(s.e,n.data.data),t(n)})})},m=function(t,n){(0,t.commit)(s.c,n)},w=function(t,n){var o=t.rootState,i=t.commit,r=t.dispatch;return a.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,u){e.i(c.a)({method:"post",url:"user/headImg",data:{img:n.img,token:o.common.user.token}}).then(function(n){i(s.b,n.data.data),r("getUserInfo"),a.default.$vux.loading.hide(),t(n)}).catch(function(t){a.default.$vux.loading.hide(),u(t)})})},b=function(t){var n=t.rootState,o=t.commit;return new u.a(function(t,i){e.i(c.a)({method:"get",url:"swiper",params:{id:n.route.params.id}}).then(function(n){o(s.f,n.data.data),t(n)})})},v=function(t){(0,t.commit)(s.f,{title:"",article:""})}},220:function(t,n,e){"use strict";var o,i=e(196),r=e.n(i),u=e(137),a=e(219),c={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{headImg:"",bufferImg:"",name:"",school:"",sex:"",mobile:"",grade:"",textbook:[],subjectType:[],textbookAll:{math:[],physics:[],subjectType:[]},subject:[],version:"",swiper:[{}],token:localStorage.getItem("token")}},s={Path:function(t,n,e){return e.route.path},Query:function(t,n,e){return e.route.query},Params:function(t,n,e){return e.route.params},Route:function(t,n,e){return e.route},User:function(t){return t.user},News:function(t){return t.news},SwiperInfo:function(t){return t.article},System:function(t){return t.system}},l=(o={},r()(o,u.a,function(t,n){t.user.textbook=n.textbook[0],t.user.headImg=n.headImg,t.user.name=n.name,t.user.mobile=n.mobile,t.user.school=n.school,t.user.sex=n.sex,t.user.grade=n.grade,t.user.version=n.version,t.user.subject=n.subject,t.user.subjectType=n.subjectType,t.user.swiper=n.swiper}),r()(o,u.b,function(t,n){t.user.headImg=n.headImg}),r()(o,u.c,function(t,n){t.user.bufferImg=n}),r()(o,u.d,function(t,n){t.user.token=n,localStorage.setItem("token",n)}),r()(o,u.e,function(t,n){t.news.classes=n.classes,t.news.correct=n.correct,t.news.system=n.system}),r()(o,u.f,function(t,n){t.article.title=n.title,t.article.content=n.content}),r()(o,u.g,function(t,n){t.user.textbookAll.math=n.subjectOptions.math,t.user.textbookAll.subjectType=n.subjectType,n.subjectOptions.physics?t.user.textbookAll.physics=n.subjectOptions.physics:t.user.textbookAll.physics=[]}),o);n.a={state:c,getters:s,mutations:l,actions:a}},221:function(t,n,e){"use strict";n.a={path:"/correct/:subjectId/:id",name:"correct",component:function(t){return e.e(15).then(function(){return t(e(496))}.bind(null,e)).catch(e.oe)}}},222:function(t,n,e){"use strict";n.a=[{path:"/error",component:function(t){return e.e(48).then(function(){return t(e(499))}.bind(null,e)).catch(e.oe)},name:"error",redirect:"/error/math",children:[{path:"physics",name:"error_physics",component:function(t){return e.e(0).then(function(){return t(e(501))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"error_math",component:function(t){return e.e(1).then(function(){return t(e(500))}.bind(null,e)).catch(e.oe)}},{path:"detail/:chapterId/:eid/:id",name:"error_detail",component:function(t){return e.e(30).then(function(){return t(e(498))}.bind(null,e)).catch(e.oe)}}]},{path:"/error/comment/:wbeid",name:"error_comment",component:function(t){return e.e(32).then(function(){return t(e(497))}.bind(null,e)).catch(e.oe)}}]},223:function(t,n,e){"use strict";n.a={path:"/example/:subjectId/:id",name:"example",component:function(t){return e.e(24).then(function(){return t(e(502))}.bind(null,e)).catch(e.oe)}}},224:function(t,n,e){"use strict";n.a={path:"/homework",component:function(t){return e.e(68).then(function(){return t(e(504))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"homework",component:function(t){return e.e(2).then(function(){return t(e(503))}.bind(null,e)).catch(e.oe)}}]}},225:function(t,n,e){"use strict";n.a=[{path:"/induce",component:function(t){return e.e(42).then(function(){return t(e(510))}.bind(null,e)).catch(e.oe)},name:"induce",redirect:"/induce/math",children:[{path:"physics",name:"induce_physics",component:function(t){return e.e(16).then(function(){return t(e(512))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"induce_math",component:function(t){return e.e(17).then(function(){return t(e(511))}.bind(null,e)).catch(e.oe)}}]},{path:"/induce/exercise/:subject/:chapterId/:chapterName",name:"induce_exercise",component:function(t){return e.e(55).then(function(){return t(e(506))}.bind(null,e)).catch(e.oe)},redirect:"/induce/exercise/:subject/:chapterId/:chapterName/total",children:[{path:"total",name:"induce_exercise_total",component:function(t){return e.e(50).then(function(){return t(e(509))}.bind(null,e)).catch(e.oe)}},{path:"pass",name:"induce_exercise_pass",component:function(t){return e.e(52).then(function(){return t(e(507))}.bind(null,e)).catch(e.oe)}},{path:"break",name:"induce_exercise_break",component:function(t){return e.e(53).then(function(){return t(e(505))}.bind(null,e)).catch(e.oe)}},{path:"practice",name:"induce_exercise_practice",component:function(t){return e.e(51).then(function(){return t(e(508))}.bind(null,e)).catch(e.oe)}}]}]},226:function(t,n,e){"use strict";n.a={path:"/login",component:function(t){return e.e(67).then(function(){return t(e(515))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(20).then(function(){return t(e(516))}.bind(null,e)).catch(e.oe)}},{path:"/forget",component:function(t){return e.e(7).then(function(){return t(e(513))}.bind(null,e)).catch(e.oe)}},{path:"/register",component:function(t){return e.e(6).then(function(){return t(e(517))}.bind(null,e)).catch(e.oe)}},{path:"/info",component:function(t){return e.e(8).then(function(){return t(e(514))}.bind(null,e)).catch(e.oe)}},{path:"/resetPassword",component:function(t){return e.e(5).then(function(){return t(e(518))}.bind(null,e)).catch(e.oe)}},{path:"/setPassword",component:function(t){return e.e(4).then(function(){return t(e(519))}.bind(null,e)).catch(e.oe)}}]}},227:function(t,n,e){"use strict";n.a={path:"/message",component:function(t){return e.e(66).then(function(){return t(e(523))}.bind(null,e)).catch(e.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return e.e(29).then(function(){return t(e(522))}.bind(null,e)).catch(e.oe)}},{path:"correct",component:function(t){return e.e(59).then(function(){return t(e(521))}.bind(null,e)).catch(e.oe)}},{path:"system",component:function(t){return e.e(58).then(function(){return t(e(524))}.bind(null,e)).catch(e.oe)}},{path:"class",component:function(t){return e.e(60).then(function(){return t(e(520))}.bind(null,e)).catch(e.oe)}}]}},228:function(t,n,e){"use strict";n.a=[{path:"/myBook",component:function(t){return e.e(41).then(function(){return t(e(526))}.bind(null,e)).catch(e.oe)},redirect:"/myBook/math",children:[{path:"physics",name:"myBook_physics",component:function(t){return e.e(46).then(function(){return t(e(528))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"myBook_math",component:function(t){return e.e(47).then(function(){return t(e(527))}.bind(null,e)).catch(e.oe)}}]},{path:"/myBook/:subject/add",name:"myBook_add",component:function(t){return e.e(10).then(function(){return t(e(525))}.bind(null,e)).catch(e.oe)}},{path:"/myBook/:subject/search",name:"myBook_search",component:function(t){return e.e(12).then(function(){return t(e(529))}.bind(null,e)).catch(e.oe)}}]},229:function(t,n,e){"use strict";n.a={path:"/class",component:function(t){return e.e(65).then(function(){return t(e(533))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"class",component:function(t){return e.e(26).then(function(){return t(e(532))}.bind(null,e)).catch(e.oe)}},{path:"add",name:"class_add",component:function(t){return e.e(18).then(function(){return t(e(530))}.bind(null,e)).catch(e.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(t){return e.e(27).then(function(){return t(e(531))}.bind(null,e)).catch(e.oe)}}]}},230:function(t,n,e){"use strict";n.a={path:"/settings",component:function(t){return e.e(70).then(function(){return t(e(536))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"settings",component:function(t){return e.e(36).then(function(){return t(e(534))}.bind(null,e)).catch(e.oe)}},{path:"info",name:"settings_info",component:function(t){return e.e(35).then(function(){return t(e(535))}.bind(null,e)).catch(e.oe)}},{path:"update",name:"settings_update",component:function(t){return e.e(3).then(function(){return t(e(539))}.bind(null,e)).catch(e.oe)}},{path:"photo",name:"settings_photo",component:function(t){return e.e(64).then(function(){return t(e(537))}.bind(null,e)).catch(e.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(t){return e.e(14).then(function(){return t(e(538))}.bind(null,e)).catch(e.oe)}}]}},231:function(t,n,e){"use strict";n.a=[{path:"/workbook",component:function(t){return e.e(40).then(function(){return t(e(541))}.bind(null,e)).catch(e.oe)},name:"workbook",redirect:"/workbook/math",children:[{path:"physics",name:"workbook_physics",component:function(t){return e.e(44).then(function(){return t(e(543))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"workbook_math",component:function(t){return e.e(45).then(function(){return t(e(542))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/:subject/add",name:"workbook_add",component:function(t){return e.e(9).then(function(){return t(e(540))}.bind(null,e)).catch(e.oe)}},{path:"/workbook/:subject/search",name:"workbook_search",component:function(t){return e.e(11).then(function(){return t(e(544))}.bind(null,e)).catch(e.oe)}}]},232:function(t,n,e){"use strict";n.a=[{path:"/workbook/exercise",component:function(t){return e.e(54).then(function(){return t(e(548))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/exercise/result",children:[{path:"answer/:name/:id",name:"workbook_exercise_answer",component:function(t){return e.e(43).then(function(){return t(e(545))}.bind(null,e)).catch(e.oe)}},{path:"result/:name/:id",name:"workbook_exercise_result",component:function(t){return e.e(34).then(function(){return t(e(550))}.bind(null,e)).catch(e.oe)}},{path:"error/:name/:id",name:"workbook_exercise_error",component:function(t){return e.e(31).then(function(){return t(e(547))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/exercise/photo",name:"workbook_exercise_error_photo",component:function(t){return e.e(63).then(function(){return t(e(549))}.bind(null,e)).catch(e.oe)}},{path:"/workbook/exercise/upload/:chapterId/:wbeid/:eid",name:"workbook_exercise_error_upload",component:function(t){return e.e(21).then(function(){return t(e(551))}.bind(null,e)).catch(e.oe)}},{path:"/workbook/chapter/:name/:id",name:"workbook_chapter",component:function(t){return e.e(25).then(function(){return t(e(546))}.bind(null,e)).catch(e.oe)}}]},233:function(t,n,e){"use strict";n.a={path:"/workbook/uploader",component:function(t){return e.e(71).then(function(){return t(e(552))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/uploader/:name/:id",children:[{path:"index/:id",name:"workbook_uploader",component:function(t){return e.e(39).then(function(){return t(e(554))}.bind(null,e)).catch(e.oe)}},{path:"photo/:id",name:"workbook_uploader_photo",component:function(t){return e.e(62).then(function(){return t(e(553))}.bind(null,e)).catch(e.oe)}}]}},234:function(t,n,e){"use strict";var o=e(139),i=e.n(o),r=e(232),u=e(233),a=e(231);n.a=[].concat(i()(a.a),i()(r.a),[u.a])},235:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(51),i=e(189),r=(e.n(i),e(84)),u=e(190),a=e.n(u),c=e(184),s=e(191),l=e.n(s),h=e(187),d=e(186),f=e(185),p=e(188),m=e.n(p),w=e(192),b=e.n(w);o.default.use(h.a),o.default.use(l.a,{attempt:3}),o.default.use(d.a),o.default.use(f.a),a.a.attach(document.body),o.default.config.productionTip=!1,o.default.filter("ymd",function(t){return m()(new Date(Number(t+"000")),"YYYY-MM-DD")}),o.default.filter("ymdhms",function(t){return m()(new Date(Number(t+"000")),"YYYY-MM-DD HH:mm:ss")}),o.default.filter("errorType",function(t){switch(t){case-1:return"错误类型";case 1:return"审题不清";case 2:return"概念模糊";case 3:return"思路不清";case 4:return"运算错误";case 5:return"粗心大意";case 6:return"方法不对";case 7:return"时间不够";case 0:return"我不知道"}}),document.addEventListener("plusready",function(){var t=null;plus.navigator.setStatusBarBackground("#4cc0be"),setTimeout(function(){var t=plus.audio.createPlayer("233.mp3");t.setRoute(plus.audio.ROUTE_SPEAKER),t.play(function(){},function(t){})},500),plus.key.addEventListener("backbutton",function(){"/index"===r.a.state.route.path||"/bag"===r.a.state.route.path||"/login"===r.a.state.route.path||"/user"===r.a.state.route.path?t?(new Date).getTime()-t<1e3&&plus.runtime.quit():(t=(new Date).getTime(),o.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1500,position:"bottom"}),setTimeout(function(){t=null},1e3)):history.back()},!1)});var v=new o.default({router:c.a,store:r.a,render:function(t){return t(b.a)}}).$mount("#app-box");n.default=v},236:function(t,n,e){"use strict";n.a=[{path:"/",component:function(t){return e.e(33).then(function(){return t(e(558))}.bind(null,e)).catch(e.oe)},redirect:function(t){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(t){return e.e(22).then(function(){return t(e(557))}.bind(null,e)).catch(e.oe)}},{path:"bag",name:"bag",component:function(t){return e.e(19).then(function(){return t(e(556))}.bind(null,e)).catch(e.oe)}},{path:"user",name:"user",component:function(t){return e.e(28).then(function(){return t(e(559))}.bind(null,e)).catch(e.oe)}}]},{path:"/article/:id",component:function(t){return e.e(57).then(function(){return t(e(555))}.bind(null,e)).catch(e.oe)}}]},237:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(485),i=e.n(o);n.default={name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var n=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){n.$refs.input&&n.$refs.input.focus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},_onConfirm:function(){this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg)},_onCancel:function(){this.showValue=!1,this.$emit("on-cancel")}}}},238:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},239:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(242);n.default={name:"toast",mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},240:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide")}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},241:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},464:function(t,n){},465:function(t,n){},466:function(t,n){},467:function(t,n){},468:function(t,n){},475:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}},476:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},477:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("x-dialog",{attrs:{dialogClass:"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur},on:{"on-hide":function(n){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[t.title?e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showInput?e("div",{staticClass:"vux-prompt"},[e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder},domProps:{value:t.msg},on:{input:function(n){n.target.composing||(t.msg=n.target.value)}}},"input",t.inputAttrs))]):e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},478:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},479:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",on:{click:t.hide}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},483:function(t,n,e){e(465);var o=e(57)(e(238),e(476),null,null);t.exports=o.exports},484:function(t,n,e){e(467);var o=e(57)(e(239),e(478),null,null);t.exports=o.exports},485:function(t,n,e){e(468);var o=e(57)(e(240),e(479),null,null);t.exports=o.exports},84:function(t,n,e){"use strict";var o=e(51),i=e(194),r=e(220);o.default.use(i.c),n.a=new i.c.Store({modules:{common:r.a}})}},[235]);