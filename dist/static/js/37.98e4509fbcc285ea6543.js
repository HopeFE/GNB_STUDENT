webpackJsonp([37],{202:function(t,e,i){var n=i(12)(i(503),i(638),null,null,null);t.exports=n.exports},236:function(t,e,i){"use strict";function n(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":r()(t))||e&&"string"==typeof t&&!/http/.test(t)?e.push(t):window.location.href=t}}e.a=n;var o=i(24),r=i.n(o)},237:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(72),o=i.n(n);e.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return o()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},238:function(t,e,i){e=t.exports=i(165)(!1),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4bb7aa}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},239:function(t,e,i){var n=i(238);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(166)("55022d35",n,!0)},240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},241:function(t,e,i){function n(t){i(239)}var o=i(12)(i(237),i(240),n,null,null);t.exports=o.exports},242:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},243:function(t,e,i){e=t.exports=i(165)(!1),e.push([t.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},244:function(t,e,i){var n=i(243);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(166)("9b0ef4a6",n,!0)},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},246:function(t,e,i){function n(t){i(244)}var o=i(12)(i(242),i(245),n,null,null);t.exports=o.exports},284:function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return r});var n=i(236),o={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].currentIndex=e,t[e].currentSelected&&(this.index=e)}}},props:{value:Number},watch:{currentIndex:function(t,e){e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!1),t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!0),this.$emit("input",t)},index:function(t){this.currentIndex=t},value:function(t){this.index=t}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},r={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(t){var e=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){e.$emit("on-item-click",e.currentIndex)})),!0===t&&i.i(n.a)(this.link,this.$router)}},watch:{currentSelected:function(t){t&&(this.$parent.index=this.currentIndex)},selected:function(t){this.currentSelected=t}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},299:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(284);e.default={mixins:[n.a],props:{activeClass:String,disabled:Boolean},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},300:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(284);e.default={mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},303:function(t,e,i){e=t.exports=i(165)(!1),e.push([t.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#4bb7aa;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#4bb7aa;border-bottom:3px solid #4bb7aa}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#4bb7aa;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}",""])},306:function(t,e,i){var n=i(303);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(166)("33080a9b",n,!0)},314:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)},staticRenderFns:[]}},315:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default")],2)},staticRenderFns:[]}},319:function(t,e,i){var n=i(12)(i(299),i(315),null,null,null);t.exports=n.exports},320:function(t,e,i){function n(t){i(306)}var o=i(12)(i(300),i(314),n,null,null);t.exports=o.exports},423:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"h",function(){return o}),i.d(e,"i",function(){return r}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"d",function(){return u}),i.d(e,"e",function(){return c}),i.d(e,"f",function(){return d}),i.d(e,"g",function(){return l});var n="MYBOOK",o="MYBOOK_ADD",r="MYBOOK_DEL",a="MYBOOK_CLEAR",s="MYBOOK_SCROLL",u="MYBOOK_LIST",c="MYBOOK_LIST_CLEAR",d="MYBOOK_SEARCH",l="MYBOOK_SEARCH_CLEAR"},451:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"getMyBook",function(){return u}),i.d(e,"getMyBookAdd",function(){return c}),i.d(e,"myBookAdd",function(){return d}),i.d(e,"myBookDel",function(){return l}),i.d(e,"getMyBookSearch",function(){return h}),i.d(e,"myBookAddClear",function(){return f}),i.d(e,"myBookSearchClear",function(){return b}),i.d(e,"myBookClear",function(){return p}),i.d(e,"setMyBookScroll",function(){return x});var n=i(41),o=i.n(n),r=i(11),a=i(74),s=i(423),u=function(t,e){var n=(t.state,t.rootState),r=t.commit,u=-1!==n.route.name.indexOf("math")?2:7,c=-1!==n.route.name.indexOf("math")?"math":"physics";return new o.a(function(t,e){i.i(a.a)({method:"get",url:"workbook",params:{token:n.common.user.token,subjectId:u}}).then(function(e){r(s.a,{subject:c,data:e.data.data}),t(e)})})},c=function(t,e){var n=t.rootState,r=t.commit,u=(t.state,-1!==n.route.params.subject.indexOf("math")?2:7);return new o.a(function(t,e){i.i(a.a)({method:"get",url:"workbook/list",params:{token:n.common.user.token,subjectId:u,textbookId:n.route.query.id}}).then(function(e){r(s.d,{data:e.data.data}),t(e)})})},d=function(t,e){var n=t.rootState,u=t.commit;t.state;return new o.a(function(t,o){i.i(a.a)({method:"post",url:"workbook/update",data:{token:n.common.user.token,type:"add",workbookId:e.workbookId}}).then(function(i){u(s.h,{type:e.type,pindex:e.pindex,index:e.index}),r.a.$vux.toast.show({text:"增加习题册成功",type:"success",isShowMask:!0,time:1e3}),t(i)})})},l=function(t,e){var n=t.rootState,u=t.commit;t.state;return new o.a(function(t,o){i.i(a.a)({method:"post",url:"workbook/update",data:{token:n.common.user.token,type:"del",workbookId:e.workbookId}}).then(function(i){u(s.i,{type:e.type,pindex:e.pindex,index:e.index}),r.a.$vux.toast.show({text:"删除习题册成功",type:"success",isShowMask:!0,time:1e3}),t(i)})})},h=function(t,e){var n=t.rootState,r=t.commit,u=(t.state,-1!==n.route.params.subject.indexOf("math")?2:7);return new o.a(function(t,o){i.i(a.a)({method:"get",url:"workbook/list",params:{token:n.common.user.token,subjectId:u,myBookName:e.myBookName}}).then(function(e){r(s.f,{data:e.data.data}),t(e)})})},f=function(t){(0,t.commit)(s.e)},b=function(t){(0,t.commit)(s.g)},p=function(t){var e=t.rootState,i=t.commit,n=-1!==e.route.name.indexOf("math")?"math":"physics";i(s.b,{subject:n})},x=function(t,e){var i=t.rootState,n=t.commit,o=-1!==i.route.name.indexOf("math")?"math":"physics";n(s.c,{subject:o,height:e})}},452:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"myBookMath",function(){return n}),i.d(e,"myBookPhysics",function(){return o}),i.d(e,"myBookAddList",function(){return r}),i.d(e,"myBookSearchList",function(){return a});var n=function(t){return t.myBook.math},o=function(t){return t.myBook.physics},r=function(t){return t.myBook.add},a=function(t){return t.myBook.search}},453:function(t,e,i){"use strict";var n={myBook:{math:{scroll:0,list:[]},physics:{scroll:0,list:[]},add:[],search:[]}};e.a=n},454:function(t,e,i){"use strict";var n,o=i(75),r=i.n(o),a=i(423),s=i(451),u=i(452),c=i(453),d=(n={},r()(n,a.a,function(t,e){t.myBook[e.subject].list=e.data}),r()(n,a.b,function(t,e){t.myBook[e.subject].list=[],t.myBook[e.subject].scroll=0}),r()(n,a.c,function(t,e){t.myBook[e.subject].scroll=e.height}),r()(n,a.d,function(t,e){t.myBook.add=e.data.textbook}),r()(n,a.e,function(t){t.myBook.add=[]}),r()(n,a.f,function(t,e){t.myBook.search=e.data.textbook}),r()(n,a.g,function(t){t.myBook.search=[]}),r()(n,a.h,function(t,e){t.myBook[e.type][e.pindex].list[e.index].status=!0}),r()(n,a.i,function(t,e){t.myBook[e.type][e.pindex].list[e.index].status=!1}),n);e.a={state:c.a,mutations:d,actions:s,getters:u}},503:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(71),o=i.n(n),r=i(241),a=i.n(r),s=i(246),u=i.n(s),c=i(320),d=i.n(c),l=i(319),h=i.n(l),f=i(73),b=i(454);i(25).a.registerModule("myBook",o()({},b.a)),e.default={name:"myBook",components:{XHeader:a.a,ViewBox:u.a,Tab:d.a,TabItem:h.a},computed:o()({},i.i(f.mapGetters)(["Route","User"])),methods:{_add:function(){if("myBook_math"===this.Route.name){var t=this.User.textbook.math[0].id;this.$router.push({name:"myBook_add",params:{subject:"math"},query:{id:t}})}else{var e=this.User.textbook.physics[0].id;this.$router.push({name:"myBook_add",params:{subject:"physics"},query:{id:e}})}}}}},638:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{attrs:{"body-padding-top":"46px"}},[i("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},slot:"header"},[i("x-header",{attrs:{"left-options":{backText:"我的习题册"}}},[i("div",{on:{click:t._add},slot:"right"},[i("i",{staticClass:"icon iconfont icon-book",staticStyle:{padding:"10px",margin:"0 -10px 0 0"}})])]),t._v(" "),i("tab",[i("tab-item",{attrs:{selected:"myBook_math"===t.Route.name},nativeOn:{click:function(e){t.$router.replace("math")}}},[t._v("数学")]),t._v(" "),t.User.subjectType.length>1?[i("tab-item",{attrs:{selected:"myBook_physics"===t.Route.name},nativeOn:{click:function(e){t.$router.replace("physics")}}},[t._v("物理")])]:t._e()],2)],1),t._v(" "),i("div",{staticStyle:{"padding-top":"46px"}},[i("keep-alive",[i("router-view")],1)],1)])},staticRenderFns:[]}}});