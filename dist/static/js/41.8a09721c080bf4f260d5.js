webpackJsonp([41],{1004:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{attrs:{"body-padding-top":"46px"}},[o("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},slot:"header"},[o("x-header",{attrs:{"left-options":{backText:"记录错题"}}},[o("div",{on:{click:t._add},slot:"right"},[o("i",{staticClass:"icon iconfont icon-book",staticStyle:{padding:"10px",margin:"0 -10px 0 0"}})])]),t._v(" "),o("tab",[o("tab-item",{attrs:{selected:"workbook_math"===t.Route.name},nativeOn:{click:function(e){t.$router.replace("math")}}},[t._v("数学")]),t._v(" "),t.User.subjectType.length>1?[o("tab-item",{attrs:{selected:"workbook_physics"===t.Route.name},nativeOn:{click:function(e){t.$router.replace("physics")}}},[t._v("物理")])]:t._e()],2)],1),t._v(" "),o("div",{staticStyle:{"padding-top":"46px"}},[o("keep-alive",[o("router-view")],1)],1)])},staticRenderFns:[]}},547:function(t,e,o){var n=o(50)(o(856),o(1004),null,null);t.exports=n.exports},569:function(t,e,o){"use strict";function n(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":i()(t))||e&&"string"==typeof t&&!/http/.test(t)?"object"===(void 0===t?"undefined":i()(t))&&!0===t.replace?e.replace(t):"BACK"===t?e.go(-1):e.push(t):window.location.href=t}}e.a=n;var r=o(68),i=o.n(r)},570:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(195),r=o.n(n);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},571:function(t,e,o){e=t.exports=o(492)(!1),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},572:function(t,e,o){var n=o(571);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(493)("bb31c83a",n,!0)},573:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-header"},[o("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[o("transition",{attrs:{name:t.transition}},[o("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():o("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[o("transition",{attrs:{name:t.transition}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?o("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),o("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?o("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},574:function(t,e,o){o(572);var n=o(50)(o(570),o(573),null,null);t.exports=n.exports},575:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},576:function(t,e,o){e=t.exports=o(492)(!1),e.push([t.i,'.weui-tabbar{display:-webkit-flex;display:-webkit-box;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},577:function(t,e,o){var n=o(576);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(493)("3fed9b4a",n,!0)},578:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),o("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},579:function(t,e,o){o(577);var n=o(50)(o(575),o(578),null,null);t.exports=n.exports},617:function(t,e,o){"use strict";o.d(e,"b",function(){return r}),o.d(e,"a",function(){return i});var n=o(569),r={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].currentIndex=e,t[e].currentSelected&&(this.index=e)}}},props:{value:Number},watch:{currentIndex:function(t,e){e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!1),t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!0),this.$emit("input",t),this.$emit("on-index-change",t,e)},index:function(t){this.currentIndex=t},value:function(t){this.index=t}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},i={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(t){var e=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){e.$emit("on-item-click",e.currentIndex)})),!0===t&&o.i(n.a)(this.link,this.$router)}},watch:{currentSelected:function(t){t&&(this.$parent.index=this.currentIndex)},selected:function(t){this.currentSelected=t}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},643:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(617);e.default={name:"tab-item",mixins:[n.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},644:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(617);e.default={name:"tab",mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},648:function(t,e,o){e=t.exports=o(492)(!1),e.push([t.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#4cc0be;text-align:center}.vux-tab-ink-bar-transition-forward{transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-flex;display:-webkit-box;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#4cc0be;border-bottom:3px solid #4cc0be}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#4cc0be;margin:auto;height:100%;transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}",""])},651:function(t,e,o){var n=o(648);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(493)("624609ee",n,!0)},659:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?o("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?o("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)},staticRenderFns:[]}},660:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?o("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v(t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]}},664:function(t,e,o){var n=o(50)(o(643),o(660),null,null);t.exports=n.exports},665:function(t,e,o){o(651);var n=o(50)(o(644),o(659),null,null);t.exports=n.exports},761:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"h",function(){return r}),o.d(e,"i",function(){return i}),o.d(e,"b",function(){return a}),o.d(e,"c",function(){return u}),o.d(e,"d",function(){return s}),o.d(e,"e",function(){return c}),o.d(e,"f",function(){return d}),o.d(e,"g",function(){return l}),o.d(e,"y",function(){return f}),o.d(e,"z",function(){return h}),o.d(e,"B",function(){return b}),o.d(e,"A",function(){return p}),o.d(e,"j",function(){return x}),o.d(e,"k",function(){return k}),o.d(e,"l",function(){return m}),o.d(e,"m",function(){return v}),o.d(e,"q",function(){return w}),o.d(e,"p",function(){return g}),o.d(e,"n",function(){return _}),o.d(e,"o",function(){return O}),o.d(e,"r",function(){return y}),o.d(e,"s",function(){return R}),o.d(e,"t",function(){return C}),o.d(e,"v",function(){return S}),o.d(e,"u",function(){return B}),o.d(e,"w",function(){return $}),o.d(e,"x",function(){return W});var n="WORKBOOK",r="WORKBOOK_ADD",i="WORKBOOK_DEL",a="WORKBOOK_CLEAR",u="WORKBOOK_SCROLL",s="WORKBOOK_LIST",c="WORKBOOK_LIST_CLEAR",d="WORKBOOK_SEARCH",l="WORKBOOK_SEARCH_CLEAR",f="WORKBOOK_WANT_ADD",h="WORKBOOK_WANT_DEL",b="WORKBOOK_WANT_UPLOAD",p="WORKBOOK_WANT_CAMERA",x="WORKBOOK_CHAPTER",k="WORKBOOK_CHAPTER_CLEAR",m="WORKBOOK_CHAPTER_SCROLL",v="WORKBOOK_EXERCISE",w="WORKBOOK_EXERCISE_CHANGE",g="WORKBOOK_EXERCISE_POST",_="WORKBOOK_EXERCISE_CLEAR",O="WORKBOOK_EXERCISE_SCROLL",y="WORKBOOK_EXERCISE_ERROR_ADD",R="WORKBOOK_EXERCISE_ERROR_DEL",C="WORKBOOK_EXERCISE_ERROR_UPLOAD",S="WORKBOOK_UPLOAD_ADD",B="WORKBOOK_UPLOAD_DEL",$="WORKBOOK_UPLOAD_CAMERA",W="WORKBOOK_UPLOAD"},796:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"getWorkbook",function(){return s}),o.d(e,"getWorkbookAdd",function(){return c}),o.d(e,"workbookAdd",function(){return d}),o.d(e,"workbookDel",function(){return l}),o.d(e,"getWorkbookSearch",function(){return f}),o.d(e,"setWorkbookScroll",function(){return h}),o.d(e,"workbookAddClear",function(){return b}),o.d(e,"workbookSearchClear",function(){return p}),o.d(e,"workbookClear",function(){return x}),o.d(e,"getWorkbookChapter",function(){return k}),o.d(e,"WorkbookExercisePost",function(){return m}),o.d(e,"workbookChapterClear",function(){return v}),o.d(e,"setWorkbookChapterScroll",function(){return w}),o.d(e,"getWorkbookExercise",function(){return g}),o.d(e,"workbookExerciseClear",function(){return _}),o.d(e,"workbookExAnswerChange",function(){return O}),o.d(e,"workbookExCamera",function(){return y}),o.d(e,"workbookExCameraDel",function(){return R}),o.d(e,"workbookUploadDel",function(){return C}),o.d(e,"workbookUploadAdd",function(){return S}),o.d(e,"workbookExErrorUpload",function(){return B}),o.d(e,"setWorkbookExersciseScroll",function(){return $}),o.d(e,"workbookWantDel",function(){return W}),o.d(e,"workbookWantAdd",function(){return E}),o.d(e,"workbookWantCamera",function(){return K}),o.d(e,"workbookWantUpload",function(){return I}),o.d(e,"workbookCamera",function(){return A}),o.d(e,"workbookUpload",function(){return L});var n=o(129),r=o.n(n),i=o(52),a=o(197),u=o(761),s=function(t,e){var n=(t.state,t.rootState),i=t.commit,s=-1!==n.route.name.indexOf("math")?2:7,c=-1!==n.route.name.indexOf("math")?"math":"physics";return new r.a(function(t,e){o.i(a.a)({method:"get",url:"workbook",params:{token:n.common.user.token,subjectId:s}}).then(function(e){i(u.a,{subject:c,data:e.data.data}),t(e)})})},c=function(t,e){var n=t.rootState,i=t.commit,s=(t.state,-1!==n.route.params.subject.indexOf("math")?2:7);return new r.a(function(t,e){o.i(a.a)({method:"get",url:"workbook/list",params:{token:n.common.user.token,subjectId:s,textbookId:n.route.query.id}}).then(function(e){i(u.d,{data:e.data.data}),t(e)})})},d=function(t,e){var n=t.rootState,s=t.commit;t.state;return new r.a(function(t,r){o.i(a.a)({method:"post",url:"workbook/update",data:{token:n.common.user.token,type:"add",workbookId:e.workbookId}}).then(function(o){s(u.h,{type:e.type,pindex:e.pindex,index:e.index}),i.default.$vux.toast.show({text:"增加习题册成功",type:"success",isShowMask:!0,time:1500}),t(o)})})},l=function(t,e){var n=t.rootState,s=t.commit;t.state;return new r.a(function(t,r){o.i(a.a)({method:"post",url:"workbook/update",data:{token:n.common.user.token,type:"del",workbookId:e.workbookId}}).then(function(o){s(u.i,{type:e.type,pindex:e.pindex,index:e.index}),i.default.$vux.toast.show({text:"删除习题册成功",type:"success",isShowMask:!0,time:1500}),t(o)})})},f=function(t,e){var n=t.rootState,i=t.commit,s=(t.state,-1!==n.route.params.subject.indexOf("math")?2:7);return new r.a(function(t,r){o.i(a.a)({method:"get",url:"workbook/list",params:{token:n.common.user.token,subjectId:s,workbookName:e.workbookName}}).then(function(e){i(u.f,{data:e.data.data}),t(e)})})},h=function(t,e){var o=t.rootState,n=t.commit,r=-1!==o.route.name.indexOf("math")?"math":"physics";n(u.c,{subject:r,height:e})},b=function(t){(0,t.commit)(u.e)},p=function(t){(0,t.commit)(u.g)},x=function(t){var e=t.rootState,o=t.commit,n=-1!==e.route.name.indexOf("math")?"math":"physics";o(u.b,{subject:n})},k=function(t){var e=(t.state,t.rootState),n=t.commit;return new r.a(function(t,r){o.i(a.a)({method:"get",url:"workbook/chapter",params:{token:e.common.user.token,workbookId:e.route.params.id}}).then(function(e){n(u.j,e.data.data),t(e)})})},m=function(t,e){var n=(t.state,t.rootState),s=t.commit;return i.default.$vux.loading.show({text:"请稍候"}),new r.a(function(t,r){o.i(a.a)({method:"post",url:"workbook/submit",data:{answer:e.answer,answerId:e.answerId,token:n.common.user.token,chapterId:n.route.params.id}}).then(function(e){i.default.$vux.loading.hide(),i.default.$vux.toast.show({text:"提交成功",type:"success",isShowMask:!0,time:1500}),s(u.p,e.data.data),s(u.k),t(e)}).catch(function(t){i.default.$vux.loading.hide(),r(t)})})},v=function(t){(0,t.commit)(u.k)},w=function(t,e){(0,t.commit)(u.l,e)},g=function(t,e){var n=(t.state,t.rootState),s=t.commit;return i.default.$vux.loading.show({text:"请稍候"}),new r.a(function(t,r){o.i(a.a)({method:"get",url:"workbook/exercises",params:{token:n.common.user.token,chapterId:n.route.params.id||e}}).then(function(e){i.default.$vux.loading.hide(),s(u.m,e.data.data),t(e)}).catch(function(){i.default.$vux.loading.hide()})})},_=function(t){(0,t.commit)(u.n)},O=function(t,e){(0,t.commit)(u.q,e)},y=function(t,e){(0,t.commit)(u.r,e)},R=function(t,e){(0,t.commit)(u.s,e)},C=function(t,e){(0,t.commit)(u.u,e)},S=function(t,e){(0,t.commit)(u.v,e)},B=function(t,e){var n=t.state,s=t.rootState,c=t.commit;return i.default.$vux.loading.show({text:"请稍候"}),new r.a(function(t,r){o.i(a.a)({method:"post",url:"workbook/exercise/uploader",data:{wbeid:s.route.params.wbeid,img:n.exercise.cameraList,type:e.type,chapterId:s.route.params.chapterId,token:s.common.user.token}}).then(function(e){i.default.$vux.loading.hide(),i.default.$vux.toast.show({text:"提交成功",type:"success",isShowMask:!0,time:1500}),c(u.t,e.data.data),t(e)}).catch(function(t){i.default.$vux.loading.hide(),r(t)})})},$=function(t,e){(0,t.commit)(u.o,e)},W=function(t,e){(0,t.commit)(u.z,e)},E=function(t,e){(0,t.commit)(u.y,{type:e.type,data:e.data})},K=function(t,e){(0,t.commit)(u.A,e)},I=function(t){var e=t.state,n=t.rootState,s=t.commit;return i.default.$vux.loading.show({text:"请稍候"}),new r.a(function(t,r){o.i(a.a)({method:"post",url:"workbook/want",data:{camera:e.want,token:n.common.user.token}}).then(function(e){i.default.$vux.loading.hide(),i.default.$vux.toast.show({text:"提交成功",type:"success",isShowMask:!0,time:1500}),s(u.B),t(e)}).catch(function(t){i.default.$vux.loading.hide(),r(t)})})},A=function(t,e){(0,t.commit)(u.w,e)},L=function(t){var e=t.state,n=t.rootState,s=t.commit;return i.default.$vux.loading.show({text:"请稍候"}),new r.a(function(t,r){o.i(a.a)({method:"post",url:"workbook/uploader",data:{token:n.common.user.token,cameraList:e.uploader.list,chapterId:n.route.params.id}}).then(function(e){s(u.x,e.data.data),t(e),i.default.$vux.loading.hide()}).catch(function(){i.default.$vux.loading.hide()})})}},797:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"workbookMath",function(){return n}),o.d(e,"workbookPhysics",function(){return r}),o.d(e,"workbookAddList",function(){return i}),o.d(e,"workbookSearchList",function(){return a}),o.d(e,"workbookWant",function(){return u}),o.d(e,"workbookUploader",function(){return s}),o.d(e,"workbookChapter",function(){return c}),o.d(e,"workbookExercise",function(){return d});var n=function(t){return t.workbook.math},r=function(t){return t.workbook.physics},i=function(t){return t.workbook.add},a=function(t){return t.workbook.search},u=function(t){return t.workbook.want},s=function(t){return t.uploader},c=function(t){return t.chapter},d=function(t){return t.exercise}},798:function(t,e,o){"use strict";var n={workbook:{math:{scroll:0,list:[]},physics:{scroll:0,list:[]},add:[],search:[],want:{version:"",index:"",camera:""}},chapter:{list:[],scroll:0,isReset:!1},uploader:{list:[],camera:""},exercise:{list:[],cameraList:[],camera:"",scroll:0,isReset:!1}};e.a=n},799:function(t,e,o){"use strict";var n,r=o(198),i=o.n(r),a=o(761),u=o(796),s=o(797),c=o(798),d=(n={},i()(n,a.a,function(t,e){t.workbook[e.subject].list=e.data}),i()(n,a.b,function(t,e){t.workbook[e.subject].list=[],t.workbook[e.subject].scroll=0}),i()(n,a.c,function(t,e){t.workbook[e.subject].scroll=e.height}),i()(n,a.d,function(t,e){t.workbook.add=e.data.textbook}),i()(n,a.e,function(t){t.workbook.add=[]}),i()(n,a.f,function(t,e){t.workbook.search=e.data.textbook}),i()(n,a.g,function(t){t.workbook.search=[]}),i()(n,a.h,function(t,e){t.workbook[e.type][e.pindex].list[e.index].status=!0}),i()(n,a.i,function(t,e){t.workbook[e.type][e.pindex].list[e.index].status=!1}),i()(n,a.j,function(t,e){t.chapter.list=e,t.chapter.isReset=!1}),i()(n,a.k,function(t){t.chapter.list=[],t.chapter.isReset=!0}),i()(n,a.l,function(t,e){t.chapter.scroll=e}),i()(n,a.m,function(t,e){t.exercise.list=e,t.exercise.isReset=!1,t.exercise.scroll=0}),i()(n,a.n,function(t){t.exercise.list=[],t.exercise.cameraList=[],t.exercise.isReset=!0,t.uploader.list=[],t.uploader.camera=""}),i()(n,a.o,function(t,e){t.exercise.scroll=e}),i()(n,a.p,function(t,e){t.chapter.isReset=!0,t.exercise.list=e}),i()(n,a.q,function(t,e){"1"===e.type?t.exercise.list.a[0].b[e.pid].c[e.id].answer=!t.exercise.list.a[0].b[e.pid].c[e.id].answer:t.exercise.list.a[e.pid].b[e.id].answer=!t.exercise.list.a[e.pid].b[e.id].answer}),i()(n,a.r,function(t,e){t.exercise.cameraList=[],t.exercise.cameraList.push(e)}),i()(n,a.s,function(t,e){t.exercise.cameraList.splice(e,1)}),i()(n,a.t,function(t){t.exercise.isReset=!0,t.exercise.camera="",t.exercise.cameraList=[]}),i()(n,a.u,function(t,e){t.uploader.list.splice(e,1)}),i()(n,a.v,function(t,e){t.uploader.list.push(e),t.uploader.camera=""}),i()(n,a.w,function(t,e){t.uploader.camera=e}),i()(n,a.x,function(t,e){t.uploader.list=[],t.exercise.list=e}),i()(n,a.y,function(t,e){"index"===e.type?t.workbook.want.index=e.data:t.workbook.want.version=e.data}),i()(n,a.z,function(t,e){"index"===e?t.workbook.want.index="":t.workbook.want.version=""}),i()(n,a.A,function(t,e){t.uploader.want.camera=e}),i()(n,a.B,function(t){t.workbook.want.index="",t.workbook.want.version="",t.workbook.want.camera=""}),n);e.a={state:c.a,mutations:d,actions:u,getters:s}},856:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(128),r=o.n(n),i=o(574),a=o.n(i),u=o(579),s=o.n(u),c=o(665),d=o.n(c),l=o(664),f=o.n(l),h=o(196),b=o(799),p=o(85);e.default={name:"workbook",components:{XHeader:a.a,ViewBox:s.a,Tab:d.a,TabItem:f.a},computed:r()({},o.i(h.a)(["Route","User"])),methods:{_add:function(){if("workbook_math"===this.Route.name){var t=this.User.textbook.math[0].id;this.$router.push({name:"workbook_add",params:{subject:"math"},query:{id:t}})}else{var e=this.User.textbook.physics[0].id;this.$router.push({name:"workbook_add",params:{subject:"physics"},query:{id:e}})}}},beforeCreate:function(){p.a.registerModule("workbook",r()({},b.a))}}}});