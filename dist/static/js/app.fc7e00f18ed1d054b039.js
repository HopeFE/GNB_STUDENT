webpackJsonp([47],{100:function(t,n,e){"use strict";var o=e(78),i=e.n(o),u=e(47),r=e(99),a={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",user:{headImg:"",name:"",school:"",sex:"",mobile:"",grade:"",subjectType:[],textbook:[],subject:[],version:"",token:"a2015acf8d8fcb01ef08ced2e0ffd583"}},c={Path:function(t,n,e){return e.route.path},Query:function(t,n,e){return e.route.query},Params:function(t,n,e){return e.route.params},Route:function(t,n,e){return e.route},User:function(t,n,e){return e.user},System:function(t,n,e){return e.common.system}},s=i()({},u.a,function(t,n){t.user.textbook=n.data.textbook[0],t.user.headImg=n.data.headImg,t.user.name=n.data.name,t.user.mobile=n.data.mobile,t.user.school=n.data.school,t.user.sex=n.data.sex,t.user.grade=n.data.grade,t.user.version=n.data.version,t.user.subject=n.data.subject,t.user.subjectType=n.data.subjectType});n.a={state:a,getters:c,mutations:s,actions:r}},101:function(t,n,e){"use strict";n.a={path:"/correct/:subjectId/:id",name:"correct",component:function(t){return e.e(11).then(function(){return t(e(186))}.bind(null,e)).catch(e.oe)}}},102:function(t,n,e){"use strict";n.a={path:"/example/:subjectId/:id",name:"example",component:function(t){return e.e(19).then(function(){return t(e(187))}.bind(null,e)).catch(e.oe)}}},103:function(t,n,e){"use strict";n.a={path:"/induce",component:function(t){return e.e(22).then(function(){return t(e(189))}.bind(null,e)).catch(e.oe)},redirect:"/induce/math",children:[{path:"physics",name:"Indece_Physics",component:function(t){return e.e(40).then(function(){return t(e(191))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"Indece_Math",component:function(t){return e.e(26).then(function(){return t(e(190))}.bind(null,e)).catch(e.oe)}},{path:"exercise/:subject/:chapterId",component:function(t){return e.e(23).then(function(){return t(e(188))}.bind(null,e)).catch(e.oe)},children:[]}]}},104:function(t,n,e){"use strict";n.a={path:"/login",component:function(t){return e.e(34).then(function(){return t(e(194))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(17).then(function(){return t(e(195))}.bind(null,e)).catch(e.oe)}},{path:"/forget",component:function(t){return e.e(7).then(function(){return t(e(192))}.bind(null,e)).catch(e.oe)}},{path:"/register",component:function(t){return e.e(6).then(function(){return t(e(196))}.bind(null,e)).catch(e.oe)}},{path:"/info",component:function(t){return e.e(8).then(function(){return t(e(193))}.bind(null,e)).catch(e.oe)}},{path:"/resetPassword",component:function(t){return e.e(5).then(function(){return t(e(197))}.bind(null,e)).catch(e.oe)}},{path:"/setPassword",component:function(t){return e.e(4).then(function(){return t(e(198))}.bind(null,e)).catch(e.oe)}}]}},105:function(t,n,e){"use strict";n.a={path:"/message",component:function(t){return e.e(37).then(function(){return t(e(202))}.bind(null,e)).catch(e.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return e.e(31).then(function(){return t(e(201))}.bind(null,e)).catch(e.oe)}},{path:"correct",component:function(t){return e.e(42).then(function(){return t(e(200))}.bind(null,e)).catch(e.oe)}},{path:"system",component:function(t){return e.e(41).then(function(){return t(e(203))}.bind(null,e)).catch(e.oe)}},{path:"class",component:function(t){return e.e(43).then(function(){return t(e(199))}.bind(null,e)).catch(e.oe)}}]}},106:function(t,n,e){"use strict";n.a={path:"/class",component:function(t){return e.e(33).then(function(){return t(e(207))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(24).then(function(){return t(e(206))}.bind(null,e)).catch(e.oe)}},{path:"add",component:function(t){return e.e(18).then(function(){return t(e(204))}.bind(null,e)).catch(e.oe)}},{path:"message",redirect:"/message/class"},{path:"detail/:code",component:function(t){return e.e(16).then(function(){return t(e(205))}.bind(null,e)).catch(e.oe)}}]}},107:function(t,n,e){"use strict";n.a={path:"/report",component:function(t){return e.e(10).then(function(){return t(e(208))}.bind(null,e)).catch(e.oe)},redirect:"/report/math",children:[{path:"physics",name:"physics",component:function(t){return e.e(2).then(function(){return t(e(210))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"math",component:function(t){return e.e(3).then(function(){return t(e(209))}.bind(null,e)).catch(e.oe)}}]}},108:function(t,n,e){"use strict";n.a={path:"/settings",component:function(t){return e.e(45).then(function(){return t(e(213))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(30).then(function(){return t(e(211))}.bind(null,e)).catch(e.oe)}},{path:"info",component:function(t){return e.e(29).then(function(){return t(e(212))}.bind(null,e)).catch(e.oe)}},{path:"update",component:function(t){return e.e(0).then(function(){return t(e(216))}.bind(null,e)).catch(e.oe)}},{path:"photo",component:function(t){return e.e(39).then(function(){return t(e(214))}.bind(null,e)).catch(e.oe)}},{path:"resetPwd",component:function(t){return e.e(14).then(function(){return t(e(215))}.bind(null,e)).catch(e.oe)}}]}},109:function(t,n,e){"use strict";n.a=[{path:"/workbook",component:function(t){return e.e(9).then(function(){return t(e(218))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/math",children:[{path:"physics",component:function(t){return e.e(1).then(function(){return t(e(220))}.bind(null,e)).catch(e.oe)}},{path:"math",component:function(t){return e.e(44).then(function(){return t(e(219))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/add",component:function(t){return e.e(15).then(function(){return t(e(217))}.bind(null,e)).catch(e.oe)}}]},110:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(14),i=e(26),u=e(69),r=e.n(u),a=e(70),c=e.n(a),s=e(64),l=e(67),h=e(66),d=e(65),f=e(68),p=e.n(f);o.a.use(l.a),o.a.use(h.a),o.a.use(d.a),r.a.attach(document.body),o.a.config.productionTip=!1,o.a.filter("ymd",function(t){return p()(new Date(Number(t+"000")),"YYYY-MM-DD")});var m=new o.a({router:s.a,store:i.a,render:function(t){return t(c.a)}}).$mount("#app-box");n.default=m},111:function(t,n,e){"use strict";n.a={path:"/",component:function(t){return e.e(27).then(function(){return t(e(223))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(32).then(function(){return t(e(222))}.bind(null,e)).catch(e.oe)}},{path:"bag",component:function(t){return e.e(28).then(function(){return t(e(221))}.bind(null,e)).catch(e.oe)}},{path:"user",component:function(t){return e.e(21).then(function(){return t(e(224))}.bind(null,e)).catch(e.oe)}}]}},112:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(176),i=e.n(o);n.default={components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},content:String},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}},data:function(){return{showValue:!1}},methods:{_onConfirm:function(){this.showValue=!1,this.$emit("on-confirm")},_onCancel:function(){this.showValue=!1,this.$emit("on-cancel")}}}},113:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},114:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(117);n.default={mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},115:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},created:function(){void 0!==this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},116:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},161:function(t,n){},162:function(t,n){},163:function(t,n){},164:function(t,n){},165:function(t,n){},166:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}},167:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"vux-mask"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},168:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur},on:{"on-hide":function(n){t.$emit("on-hide")},"on-show":function(n){t.$emit("on-show")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},169:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},170:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(n){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog"},[t._t("default")],2)])],1)},staticRenderFns:[]}},174:function(t,n,e){e(162);var o=e(11)(e(113),e(167),null,null);t.exports=o.exports},175:function(t,n,e){e(164);var o=e(11)(e(114),e(169),null,null);t.exports=o.exports},176:function(t,n,e){e(165);var o=e(11)(e(115),e(170),null,null);t.exports=o.exports},26:function(t,n,e){"use strict";var o=e(14),i=e(73),u=e(100);o.a.use(i.a),n.a=new i.a.Store({modules:{common:u.a}})},47:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o="USERINFO"},64:function(t,n,e){"use strict";var o=e(123),i=e.n(o),u=e(14),r=e(171),a=e(173),c=(e.n(a),e(26)),s=e(111),l=e(104),h=e(97),d=e(98),f=e(101),p=e(102),m=e(105),v=e(106),w=e(103),b=e(107),_=e(108),x=e(109);u.a.use(r.a);var g=new r.a({mode:"hash",routes:[h.a,d.a,f.a,p.a,l.a,s.a,w.a,m.a,v.a,b.a,_.a].concat(i()(x.a))});e.i(a.sync)(c.a,g),n.a=g},70:function(t,n,e){e(161);var o=e(11)(e(116),e(166),null,null);t.exports=o.exports},79:function(t,n,e){e(163);var o=e(11)(e(112),e(168),null,null);t.exports=o.exports},97:function(t,n,e){"use strict";n.a={path:"/about",component:function(t){return e.e(38).then(function(){return t(e(182))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(20).then(function(){return t(e(181))}.bind(null,e)).catch(e.oe)}},{path:"advice",component:function(t){return e.e(12).then(function(){return t(e(179))}.bind(null,e)).catch(e.oe)}},{path:"adviceHistory",component:function(t){return e.e(13).then(function(){return t(e(180))}.bind(null,e)).catch(e.oe)}}]}},98:function(t,n,e){"use strict";n.a={path:"/collect",component:function(t){return e.e(25).then(function(){return t(e(183))}.bind(null,e)).catch(e.oe)},redirect:"/collect/math",children:[{path:"physics",name:"physics",component:function(t){return e.e(35).then(function(){return t(e(185))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"math",component:function(t){return e.e(36).then(function(){return t(e(184))}.bind(null,e)).catch(e.oe)}}]}},99:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(71),i=e.n(o),u=e(75),r=e.n(u),a=e(14),c=e(76),s=e.n(c),l=e(47);e.d(n,"getUserInfo",function(){return h}),e.d(n,"setUserInfo",function(){return d});var h=function(t){var n=t.rootState,e=t.commit;return a.a.$vux.loading.show({text:"请稍候"}),new r.a(function(t,o){s()({method:"get",url:"user/getUserInfo",params:{token:n.common.user.token}}).then(function(n){e(l.a,n.data),t(n),a.a.$vux.loading.hide()}).catch(function(){a.a.$vux.loading.hide()})})},d=function(t,n){var e=t.rootState;t.commit;return new r.a(function(t,o){s()({method:"post",url:"user/updateUserInfo",data:i()({},n,{token:e.common.user.token})}).then(function(n){t(n)})})}}},[110]);