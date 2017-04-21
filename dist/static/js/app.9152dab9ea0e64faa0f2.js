webpackJsonp([61],{104:function(t,n,e){"use strict";n.a={path:"/about",component:function(t){return e.e(57).then(function(){return t(e(198))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(16).then(function(){return t(e(197))}.bind(null,e)).catch(e.oe)}},{path:"my",component:function(t){return e.e(40).then(function(){return t(e(199))}.bind(null,e)).catch(e.oe)}},{path:"advice",component:function(t){return e.e(7).then(function(){return t(e(195))}.bind(null,e)).catch(e.oe)}},{path:"adviceHistory",component:function(t){return e.e(6).then(function(){return t(e(196))}.bind(null,e)).catch(e.oe)}}]}},105:function(t,n,e){"use strict";n.a={path:"/collect",component:function(t){return e.e(32).then(function(){return t(e(200))}.bind(null,e)).catch(e.oe)},redirect:"/collect/math",children:[{path:"physics",name:"collect_physics",component:function(t){return e.e(41).then(function(){return t(e(202))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"collect_math",component:function(t){return e.e(42).then(function(){return t(e(201))}.bind(null,e)).catch(e.oe)}}]}},106:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(79),i=e.n(o),r=e(43),u=e.n(r),a=e(11),c=e(82),s=e(51);e.d(n,"getUserInfo",function(){return l}),e.d(n,"setUserInfo",function(){return h});var l=function(t){var n=t.rootState,o=t.commit;return a.a.$vux.loading.show({text:"请稍候"}),new u.a(function(t,i){e.i(c.a)({method:"get",url:"user/getUserInfo",params:{token:n.common.user.token}}).then(function(n){o(s.a,n.data),t(n),a.a.$vux.loading.hide()}).catch(function(){a.a.$vux.loading.hide()})})},h=function(t,n){var o=t.rootState;t.commit;return new u.a(function(t,r){e.i(c.a)({method:"post",url:"user/updateUserInfo",data:i()({},n,{token:o.common.user.token})}).then(function(n){t(n)})})}},107:function(t,n,e){"use strict";var o=e(83),i=e.n(o),r=e(51),u=e(106),a={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",user:{headImg:"",name:"",school:"",sex:"",mobile:"",grade:"",subjectType:[],textbook:[],subject:[],version:"",swiper:[{}],token:"a2015acf8d8fcb01ef08ced2e0ffd583"}},c={Path:function(t,n,e){return e.route.path},Query:function(t,n,e){return e.route.query},Params:function(t,n,e){return e.route.params},Route:function(t,n,e){return e.route},User:function(t){return t.user},System:function(t){return t.system}},s=i()({},r.a,function(t,n){t.user.textbook=n.data.textbook[0],t.user.headImg=n.data.headImg,t.user.name=n.data.name,t.user.mobile=n.data.mobile,t.user.school=n.data.school,t.user.sex=n.data.sex,t.user.grade=n.data.grade,t.user.version=n.data.version,t.user.subject=n.data.subject,t.user.subjectType=n.data.subjectType,t.user.swiper=n.data.swiper});n.a={state:a,getters:c,mutations:s,actions:u}},108:function(t,n,e){"use strict";n.a={path:"/correct/:subjectId/:id",name:"correct",component:function(t){return e.e(9).then(function(){return t(e(203))}.bind(null,e)).catch(e.oe)}}},109:function(t,n,e){"use strict";n.a={path:"/example/:subjectId/:id",name:"example",component:function(t){return e.e(17).then(function(){return t(e(204))}.bind(null,e)).catch(e.oe)}}},110:function(t,n,e){"use strict";n.a=[{path:"/induce",component:function(t){return e.e(30).then(function(){return t(e(210))}.bind(null,e)).catch(e.oe)},redirect:"/induce/math",children:[{path:"physics",name:"induce_physics",component:function(t){return e.e(13).then(function(){return t(e(212))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"induce_math",component:function(t){return e.e(14).then(function(){return t(e(211))}.bind(null,e)).catch(e.oe)}}]},{path:"/induce/exercise/:subject/:chapterId/:chapterName",name:"induce_exercise",component:function(t){return e.e(39).then(function(){return t(e(206))}.bind(null,e)).catch(e.oe)},redirect:"/induce/exercise/:subject/:chapterId/:chapterName/total",children:[{path:"total",name:"induce_exercise_total",component:function(t){return e.e(53).then(function(){return t(e(209))}.bind(null,e)).catch(e.oe)}},{path:"pass",name:"induce_exercise_pass",component:function(t){return e.e(55).then(function(){return t(e(207))}.bind(null,e)).catch(e.oe)}},{path:"break",name:"induce_exercise_break",component:function(t){return e.e(56).then(function(){return t(e(205))}.bind(null,e)).catch(e.oe)}},{path:"practice",name:"induce_exercise_practice",component:function(t){return e.e(54).then(function(){return t(e(208))}.bind(null,e)).catch(e.oe)}}]}]},111:function(t,n,e){"use strict";n.a={path:"/login",component:function(t){return e.e(52).then(function(){return t(e(215))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(12).then(function(){return t(e(216))}.bind(null,e)).catch(e.oe)}},{path:"/forget",component:function(t){return e.e(4).then(function(){return t(e(213))}.bind(null,e)).catch(e.oe)}},{path:"/register",component:function(t){return e.e(3).then(function(){return t(e(217))}.bind(null,e)).catch(e.oe)}},{path:"/info",component:function(t){return e.e(5).then(function(){return t(e(214))}.bind(null,e)).catch(e.oe)}},{path:"/resetPassword",component:function(t){return e.e(2).then(function(){return t(e(218))}.bind(null,e)).catch(e.oe)}},{path:"/setPassword",component:function(t){return e.e(1).then(function(){return t(e(219))}.bind(null,e)).catch(e.oe)}}]}},112:function(t,n,e){"use strict";n.a={path:"/message",component:function(t){return e.e(51).then(function(){return t(e(223))}.bind(null,e)).catch(e.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return e.e(27).then(function(){return t(e(222))}.bind(null,e)).catch(e.oe)}},{path:"correct",component:function(t){return e.e(44).then(function(){return t(e(221))}.bind(null,e)).catch(e.oe)}},{path:"system",component:function(t){return e.e(43).then(function(){return t(e(224))}.bind(null,e)).catch(e.oe)}},{path:"class",component:function(t){return e.e(45).then(function(){return t(e(220))}.bind(null,e)).catch(e.oe)}}]}},113:function(t,n,e){"use strict";n.a={path:"/class",component:function(t){return e.e(50).then(function(){return t(e(228))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(20).then(function(){return t(e(227))}.bind(null,e)).catch(e.oe)}},{path:"add",component:function(t){return e.e(15).then(function(){return t(e(225))}.bind(null,e)).catch(e.oe)}},{path:"message",redirect:"/message/class"},{path:"detail/:code",component:function(t){return e.e(18).then(function(){return t(e(226))}.bind(null,e)).catch(e.oe)}}]}},114:function(t,n,e){"use strict";n.a=[{path:"/report",component:function(t){return e.e(31).then(function(){return t(e(230))}.bind(null,e)).catch(e.oe)},redirect:"/report/math",children:[{path:"physics",name:"report_physics",component:function(t){return e.e(22).then(function(){return t(e(232))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"report_math",component:function(t){return e.e(23).then(function(){return t(e(231))}.bind(null,e)).catch(e.oe)}}]},{path:"/report/detail/:chapterId",name:"report_detail",component:function(t){return e.e(33).then(function(){return t(e(229))}.bind(null,e)).catch(e.oe)}}]},115:function(t,n,e){"use strict";n.a={path:"/settings",component:function(t){return e.e(59).then(function(){return t(e(235))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(26).then(function(){return t(e(233))}.bind(null,e)).catch(e.oe)}},{path:"info",component:function(t){return e.e(25).then(function(){return t(e(234))}.bind(null,e)).catch(e.oe)}},{path:"update",component:function(t){return e.e(0).then(function(){return t(e(238))}.bind(null,e)).catch(e.oe)}},{path:"photo",component:function(t){return e.e(49).then(function(){return t(e(236))}.bind(null,e)).catch(e.oe)}},{path:"resetPwd",component:function(t){return e.e(8).then(function(){return t(e(237))}.bind(null,e)).catch(e.oe)}}]}},116:function(t,n,e){"use strict";n.a=[{path:"/workbook/exercise",component:function(t){return e.e(38).then(function(){return t(e(246))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/exercise/result",children:[{path:"answer/:name/:id",name:"workbook_exercise_answer",component:function(t){return e.e(37).then(function(){return t(e(243))}.bind(null,e)).catch(e.oe)}},{path:"result/:name/:id",name:"workbook_exercise_result",component:function(t){return e.e(24).then(function(){return t(e(247))}.bind(null,e)).catch(e.oe)}},{path:"error/:name/:id",name:"workbook_exercise_error",component:function(t){return e.e(46).then(function(){return t(e(245))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/chapter/:name/:id",name:"workbook_chapter",component:function(t){return e.e(19).then(function(){return t(e(244))}.bind(null,e)).catch(e.oe)}}]},117:function(t,n,e){"use strict";n.a={path:"/workbook/uploader",component:function(t){return e.e(58).then(function(){return t(e(248))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/uploader/:name/:id",children:[{path:"index/:id",name:"workbook_uploader",component:function(t){return e.e(36).then(function(){return t(e(250))}.bind(null,e)).catch(e.oe)}},{path:"photo/:id",name:"workbook_uploader_photo",component:function(t){return e.e(48).then(function(){return t(e(249))}.bind(null,e)).catch(e.oe)}}]}},118:function(t,n,e){"use strict";var o=e(52),i=e.n(o),r=e(116),u=e(117);n.a=[{path:"/workbook",component:function(t){return e.e(29).then(function(){return t(e(240))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/math",children:[{path:"physics",name:"workbook_physics",component:function(t){return e.e(34).then(function(){return t(e(242))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"workbook_math",component:function(t){return e.e(35).then(function(){return t(e(241))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/add",name:"workbook_add",component:function(t){return e.e(11).then(function(){return t(e(239))}.bind(null,e)).catch(e.oe)}}].concat(i()(r.a),[u.a])},119:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(11),i=e(27),r=e(77),u=e.n(r),a=e(78),c=e.n(a),s=e(71),l=e(70),h=e.n(l),d=e(76),f=(e.n(d),e(74)),p=e(73),m=e(72),w=e(75),b=e.n(w);o.a.use(f.a),o.a.use(h.a),o.a.use(p.a),o.a.use(m.a),u.a.attach(document.body),o.a.config.productionTip=!1,o.a.filter("ymd",function(t){return b()(new Date(Number(t+"000")),"YYYY-MM-DD")}),document.addEventListener("plusready",function(){var t=null;plus.key.addEventListener("backbutton",function(){"/"===i.a.state.route.path||"/bag"===i.a.state.route.path||"/user"===i.a.state.route.path?t?(new Date).getTime()-t<1e3&&plus.runtime.quit():(t=(new Date).getTime(),o.a.$vux.toast.show({text:"再按一次退出",type:"text",time:1e3,position:"bottom"}),setTimeout(function(){t=null},1e3)):history.back()},!1)});var v=new o.a({router:s.a,store:i.a,render:function(t){return t(c.a)}}).$mount("#app-box");n.default=v},120:function(t,n,e){"use strict";n.a={path:"/",component:function(t){return e.e(28).then(function(){return t(e(253))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(47).then(function(){return t(e(252))}.bind(null,e)).catch(e.oe)}},{path:"bag",component:function(t){return e.e(10).then(function(){return t(e(251))}.bind(null,e)).catch(e.oe)}},{path:"user",component:function(t){return e.e(21).then(function(){return t(e(254))}.bind(null,e)).catch(e.oe)}}]}},121:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(191),i=e.n(o);n.default={components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},content:String},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}},data:function(){return{showValue:!1}},methods:{_onConfirm:function(){this.showValue=!1,this.$emit("on-confirm")},_onCancel:function(){this.showValue=!1,this.$emit("on-cancel")}}}},122:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},123:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(126);n.default={mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},124:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},created:function(){void 0!==this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},125:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},171:function(t,n){},172:function(t,n){},173:function(t,n){},174:function(t,n){},175:function(t,n){},181:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}},182:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"vux-mask"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},183:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur},on:{"on-hide":function(n){t.$emit("on-hide")},"on-show":function(n){t.$emit("on-show")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},184:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},185:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(n){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog"},[t._t("default")],2)])],1)},staticRenderFns:[]}},189:function(t,n,e){e(172);var o=e(12)(e(122),e(182),null,null);t.exports=o.exports},190:function(t,n,e){e(174);var o=e(12)(e(123),e(184),null,null);t.exports=o.exports},191:function(t,n,e){e(175);var o=e(12)(e(124),e(185),null,null);t.exports=o.exports},192:function(t,n){},27:function(t,n,e){"use strict";var o=e(11),i=e(80),r=e(107);o.a.use(i.c),n.a=new i.c.Store({modules:{common:r.a}})},51:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o="USERINFO"},71:function(t,n,e){"use strict";var o=e(52),i=e.n(o),r=e(11),u=e(186),a=e(188),c=(e.n(a),e(27)),s=e(120),l=e(111),h=e(104),d=e(105),f=e(108),p=e(109),m=e(112),w=e(113),b=e(110),v=e(114),_=e(115),x=e(118);r.a.use(u.a);var g=new u.a({mode:"hash",routes:[h.a,d.a,f.a,p.a,l.a,s.a].concat(i()(b.a),[m.a,w.a],i()(v.a),[_.a],i()(x.a))});e.i(a.sync)(c.a,g),n.a=g},78:function(t,n,e){e(171);var o=e(12)(e(125),e(181),null,null);t.exports=o.exports},82:function(t,n,e){"use strict";var o=e(43),i=e.n(o),r=e(11),u=e(86),a=e.n(u),c=e(178),s=e.n(c);a.a.defaults.timeout=8e3,a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencodedcharset=UTF-8",a.a.defaults.baseURL="http://www.guinaben.com:8070/student/",a.a.interceptors.request.use(function(t){return"post"===t.method&&(t.data=s.a.stringify(t.data,{arrayFormat:"brackets"})),t},function(t){return r.a.$vux.toast.show({text:"非法输入",type:"text",time:1e3,position:"bottom"}),i.a.reject(t)}),a.a.interceptors.response.use(function(t){return 200!==t.data.code?(r.a.$vux.toast.show({text:t.data.msg,type:"text",time:1e3,position:"bottom"}),i.a.reject(t)):t},function(t){return r.a.$vux.toast.show({text:"网络异常",type:"text",time:1e3,position:"bottom"}),i.a.reject(t)}),n.a=a.a},85:function(t,n,e){e(173);var o=e(12)(e(121),e(183),null,null);t.exports=o.exports}},[119]);