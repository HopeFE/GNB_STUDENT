webpackJsonp([51],{260:function(t,i,e){function r(t){e(613)}var a=e(12)(e(573),e(658),r,null,null);t.exports=a.exports},278:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=e(79),a=e.n(r);i.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},279:function(t,i,e){i=t.exports=e(195)(),i.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4bb7aa}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},280:function(t,i,e){var r=e(279);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(196)("37d0bc88",r,!0)},281:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-header"},[e("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[e("transition",{attrs:{name:t.transition}},[e("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(i){if(!("button"in i)&&t._k(i.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),e("h1",{staticClass:"vux-header-title",on:{click:function(i){t.$emit("on-click-title")}}},[t._t("default",[e("transition",{attrs:{name:t.transition}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),e("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?e("a",{staticClass:"vux-header-more",on:{click:[function(i){if(!("button"in i)&&t._k(i.keyCode,"preventDefault"))return null},function(i){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},282:function(t,i,e){function r(t){e(280)}var a=e(12)(e(278),e(281),r,null,null);t.exports=a.exports},284:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},285:function(t,i,e){i=t.exports=e(195)(),i.push([t.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},286:function(t,i,e){var r=e(285);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(196)("26b9de44",r,!0)},287:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),e("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},288:function(t,i,e){function r(t){e(286)}var a=e(12)(e(284),e(287),r,null,null);t.exports=a.exports},324:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},325:function(t,i,e){i=t.exports=e(195)(),i.push([t.i,".weui-btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#fff;line-height:2.33333333;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden}.weui-btn:after{content:\" \";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.weui-btn_inline{display:inline-block}.weui-btn_default{color:#fff;background-color:#4bb7aa}.weui-btn_default:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_default:not(.weui-btn_disabled):active{color:rgba(0,0,0,.6);background-color:rgba(75,183,156,.85)}.weui-btn_primary{background-color:#4bb7aa}.weui-btn_primary:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_primary:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:rgba(75,183,156,.85)}.weui-btn_warn{background-color:#e64340}.weui-btn_warn:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_warn:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}.weui-btn_disabled{color:hsla(0,0%,100%,.6)}.weui-btn_disabled.weui-btn_default{color:rgba(0,0,0,.3);background-color:rgba(75,183,156,.85)}.weui-btn_disabled.weui-btn_primary{background-color:#9ed99d}.weui-btn_disabled.weui-btn_warn{background-color:#ec8b89}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:hsla(0,0%,100%,.6)}.weui-btn_loading.weui-btn_primary .weui-loading,.weui-btn_loading.weui-btn_warn .weui-loading{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\")}.weui-btn_loading.weui-btn_primary{background-color:rgba(75,183,156,.85)}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}.weui-btn_plain-primary{color:#1aad19;border:1px solid #1aad19}.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6);background-color:transparent}.weui-btn_plain-primary:after{border-width:0}.weui-btn_plain-default{color:#353535;border:1px solid #353535}.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6)}.weui-btn_plain-default:after{border-width:0}.weui-btn_plain-disabled{color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.2)}button.weui-btn,input.weui-btn{width:100%;border-width:0;outline:0;-webkit-appearance:none}button.weui-btn:focus,input.weui-btn:focus{outline:0}button.weui-btn_inline,button.weui-btn_mini,input.weui-btn_inline,input.weui-btn_mini{width:auto}button.weui-btn_plain-default,button.weui-btn_plain-primary,input.weui-btn_plain-default,input.weui-btn_plain-primary{border-width:1px;background-color:transparent}.weui-btn_mini{display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}.weui-btn+.weui-btn{margin-top:15px}.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline{margin-top:auto;margin-left:15px}.weui-btn-area{margin:1.25em 15px .3em}.weui-btn-area_inline{display:-webkit-box;display:-webkit-flex;display:flex}.weui-btn-area_inline .weui-btn{margin-top:auto;margin-right:15px;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-btn-area_inline .weui-btn:last-child{margin-right:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12) infinite;animation:weuiLoading 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},326:function(t,i,e){var r=e(325);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(196)("1c70ab65",r,!0)},328:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType}},[t.showLoading?e("i",{staticClass:"weui-loading"}):t._e(),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},329:function(t,i,e){function r(t){e(326)}var a=e(12)(e(324),e(328),r,null,null);t.exports=a.exports},573:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=e(78),a=e.n(r),n=e(282),o=e.n(n),l=e(288),s=e.n(l),d=e(329),b=e.n(d),u=e(80);i.default={name:"index",components:{XHeader:o.a,ViewBox:s.a,XButton:b.a},methods:a()({},e.i(u.b)(["getUserInfo"])),created:function(){this.getUserInfo()}}},596:function(t,i,e){i=t.exports=e(195)(),i.push([t.i,".weui-loading_toast .weui-mask_transparent{z-index:2!important}.mainIndex .weui-btn_primary:not(.weui-btn_disabled):active{background:none}",""])},613:function(t,i,e){var r=e(596);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(196)("2f2fd99a",r,!0)},658:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mainIndex"},[e("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{"left-options":{showBack:!1}},slot:"header"},[t._v("归纳本")]),t._v(" "),e("div",[e("router-link",{attrs:{to:{path:"induce"}}},[e("p",{staticClass:"induce"})])],1),t._v(" "),e("div",[e("div",[e("router-link",{attrs:{to:{path:"workbook"}}},[e("x-button",{staticClass:"rememberBtn",attrs:{type:"primary",mini:""}},[t._v("查答案")])],1)],1),t._v(" "),e("div",[e("router-link",{attrs:{to:{path:"error"}}},[e("x-button",{staticClass:"rememberBtn",attrs:{type:"primary",mini:""}},[t._v("我的错题")])],1)],1)])],1)},staticRenderFns:[]}}});