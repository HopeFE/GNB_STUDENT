webpackJsonp([52],{545:function(e,t,i){var r=i(57)(i(824),i(927),null,null);e.exports=r.exports},557:function(e,t,i){"use strict";function r(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":n()(e))||t&&"string"==typeof e&&!/http/.test(e)?"BACK"===e?t.go(-1):t.push(e):window.location.href=e}}t.a=r;var a=i(83),n=i.n(a)},558:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(193),a=i.n(r);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},559:function(e,t,i){t=e.exports=i(485)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4bb7aa}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},560:function(e,t,i){var r=i(559);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(486)("3367b363",r,!0)},561:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},562:function(e,t,i){i(560);var r=i(57)(i(558),i(561),null,null);e.exports=r.exports},563:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},564:function(e,t,i){t=e.exports=i(485)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},565:function(e,t,i){var r=i(564);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(486)("7109c9db",r,!0)},566:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},567:function(e,t,i){i(565);var r=i(57)(i(563),i(566),null,null);e.exports=r.exports},605:function(e,t,i){"use strict";i.d(t,"b",function(){return a}),i.d(t,"a",function(){return n});var r=i(557),a={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].currentIndex=t,e[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(e,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!0),this.$emit("input",e)},index:function(e){this.currentIndex=e},value:function(e){this.index=e}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},n={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(e){var t=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),!0===e&&i.i(r.a)(this.link,this.$router)}},watch:{currentSelected:function(e){e&&(this.$parent.index=this.currentIndex)},selected:function(e){this.currentSelected=e}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},619:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(605);t.default={name:"tab-item",mixins:[r.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},620:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(605);t.default={name:"tab",mixins:[r.b],mounted:function(){var e=this;this.$nextTick(function(){setTimeout(function(){e.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var e={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?e.backgroundColor="transparent":e.backgroundColor=this.barActiveColor||this.activeColor,e},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(e,t){this.direction=e>t?"forward":"backward",this.$emit("on-index-change",e,t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},623:function(e,t,i){t=e.exports=i(485)(!1),t.push([e.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#4bb7aa;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#4bb7aa;border-bottom:3px solid #4bb7aa}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#4bb7aa;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}.vux-tab-item-badge{position:absolute;top:0;bottom:0;box-sizing:border-box;display:inline-block;height:18px;min-width:18px;padding:0 4px;border-radius:30px;margin:auto 0 auto 4px;line-height:18px;font-size:11px;background-clip:padding-box;vertical-align:middle}",""])},626:function(e,t,i){var r=i(623);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i(486)("2e1d7289",r,!0)},634:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!e.animate}},[e._t("default"),e._v(" "),e.animate?i("div",{staticClass:"vux-tab-ink-bar",class:e.barClass,style:e.barStyle},[e.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:e.innerBarStyle}):e._e()]):e._e()],2)},staticRenderFns:[]}},635:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-tab-item",class:[e.currentSelected?e.activeClass:"",{"vux-tab-selected":e.currentSelected,"vux-tab-disabled":e.disabled}],style:e.style,on:{click:e.onItemClick}},[e._t("default"),e._v(" "),void 0!==e.badgeLabel&&""!==e.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:e.badgeBackground,color:e.badgeColor}},[e._v(e._s(e.badgeLabel))]):e._e()],2)},staticRenderFns:[]}},639:function(e,t,i){var r=i(57)(i(619),i(635),null,null);e.exports=r.exports},640:function(e,t,i){i(626);var r=i(57)(i(620),i(634),null,null);e.exports=r.exports},824:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(192),a=i.n(r),n=i(562),o=i.n(n),s=i(567),c=i.n(s),l=i(640),u=i.n(l),d=i(639),b=i.n(d),h=i(194);t.default={name:"exercise",components:{XHeader:o.a,ViewBox:c.a,Tab:u.a,TabItem:b.a},computed:a()({},i.i(h.a)(["Route","workbookExercise"])),methods:a()({},i.i(h.b)(["getWorkbookExercise","workbookExerciseClear"])),beforeRouteEnter:function(e,t,i){var r=this;i(function(e){("workbook_chapter"===t.name||e.workbookExercise.isReset)&&(e.workbookExerciseClear(),e.getWorkbookExercise().then(function(){i()}).catch(function(){r.$router.go(-1)}))})}}},927:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view-box",{ref:"workbook",attrs:{"body-padding-top":"90px"}},[i("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},slot:"header"},[i("x-header",{attrs:{"left-options":{backText:e.Route.params.name}}},[i("i",{staticClass:"icon iconfont icon-home",on:{click:function(t){e.$router.go(-2)}},slot:"right"})]),e._v(" "),i("tab",{staticStyle:{position:"fixed",top:"46px",width:"100%","z-index":"1"}},[i("tab-item",{attrs:{selected:"workbook_exercise_result"===e.Route.name},nativeOn:{click:function(t){e.$router.replace({name:"workbook_exercise_result"})}}},[e._v("\n        查答案\n      ")]),e._v(" "),i("tab-item",{attrs:{selected:"workbook_exercise_answer"===e.Route.name},nativeOn:{click:function(t){e.$router.replace({name:"workbook_exercise_answer"})}}},[e._v("\n        记错题\n      ")]),e._v(" "),i("tab-item",{attrs:{selected:"workbook_exercise_error"===e.Route.name},nativeOn:{click:function(t){e.$router.replace({name:"workbook_exercise_error"})}}},[e._v("\n        错题本\n      ")])],1)],1),e._v(" "),i("div",[i("keep-alive",[i("router-view")],1)],1)])},staticRenderFns:[]}}});