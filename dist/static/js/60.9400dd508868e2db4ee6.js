webpackJsonp([60],{520:function(e,t,i){var n=i(57)(i(821),i(947),null,null);e.exports=n.exports},561:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(193),r=i.n(n);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},562:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},563:function(e,t,i){var n=i(562);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("bb31c83a",n,!0)},564:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},565:function(e,t,i){i(563);var n=i(57)(i(561),i(564),null,null);e.exports=n.exports},566:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},567:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-flex;display:-webkit-box;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},568:function(e,t,i){var n=i(567);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("3fed9b4a",n,!0)},569:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},570:function(e,t,i){i(568);var n=i(57)(i(566),i(569),null,null);e.exports=n.exports},587:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(589),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];t.default={name:"spinner",mounted:function(){var e=this;this.$nextTick(function(){i.i(n.a)(e.$el,e.type,e.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var e={},t=0;t<r.length;t++)e["vux-spinner-"+r[t]]=this.type===r[t];return e}}}},588:function(e,t){for(var i=0,n=["webkit","moz"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),a=window.setTimeout(function(){e(n+r)},r);return i=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},589:function(e,t,i){"use strict";function n(e,t,i,a,o){var s,c,u,f=document.createElement(l[e]||e);for(s in t)if("[object Array]"===Object.prototype.toString.call(t[s]))for(c=0;c<t[s].length;c++)if(t[s][c].fn)for(u=0;u<t[s][c].t;u++)n(s,t[s][c].fn(u,a),f,a);else n(s,t[s][c],f,a);else r(f,s,t[s]);o&&"28px"!==o&&r(f,"style","width: "+o+"; height: "+o),i.appendChild(f)}function r(e,t,i){e.setAttribute(l[t]||t,i)}function a(e,t){var i=e.split(";"),n=i.slice(t),r=i.slice(0,i.length-n.length);return i=n.concat(r).reverse(),i.join(";")+";"+i[0]}function o(e,t){return(e/=t/2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}var s=i(588),l=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(e,t){return{y1:"ios"===t?17:12,y2:"ios"===t?29:20,t:"translate(32,32) rotate("+(30*e+(e<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:"indefinite"}},t:1}]}},t:12}]},f={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:a("1;2;3;4;5;6;7;8",e),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".3;.3;.3;.4;.7;.85;.9;1",e),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".5;.6;.8;1;.8;.6;.5",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:a("4;5;6;5;4;3;3",e),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:"750ms",v:a("16;18;28;18;16",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:a("48;44;36;46;48",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("1;.8;.5;.4;1",e),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},d={android:function(e){function t(){if(!i.stop){var e=o(Date.now()-n,650),u=1,f=0,d=188-58*e,p=182-182*e;a%2&&(u=-1,f=-64,d=128- -58*e,p=182*e);var h=[0,-101,-90,-11,-180,79,-270,-191][a];r(c,"da",Math.max(Math.min(d,188),128)),r(c,"os",Math.max(Math.min(p,182),0)),r(c,"t","scale("+u+",1) translate("+f+",0) rotate("+h+",32,32)"),s+=4.1,s>359&&(s=0),r(l,"t","rotate("+s+",32,32)"),e>=1&&(a++,a>7&&(a=0),n=Date.now()),window.requestAnimationFrame(t)}}var i=this;this.stop=!1;var n,a=0,s=0,l=e.querySelector("g"),c=e.querySelector("circle");return function(){return n=Date.now(),t(),i}}};t.a=function(e,t,i){var r,a;r=t;var o=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[f[r]]},o,r,i),e.innerHTML=o.innerHTML,function(){d[r]&&(a=d[r](e)())}(),e}},590:function(e,t,i){t=e.exports=i(486)(!1),t.push([e.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},591:function(e,t,i){var n=i(590);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(487)("e662429e",n,!0)},592:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-spinner",class:e.className,style:e.styles})},staticRenderFns:[]}},593:function(e,t,i){i(591);var n=i(57)(i(587),i(592),null,null);e.exports=n.exports},821:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(192),r=i.n(n),a=i(565),o=i.n(a),s=i(570),l=i.n(s),c=i(593),u=i.n(c),f=i(194);t.default={name:"class",components:{XHeader:o.a,ViewBox:l.a,Spinner:u.a},computed:r()({},i.i(f.a)(["messageClassList"])),data:function(){return{loading:!0}},methods:r()({},i.i(f.b)(["getMessageClass","clearMessage"])),beforeRouteEnter:function(e,t,i){i(function(e){e.getMessageClass().then(function(){e.loading=!1})})},beforeRouteLeave:function(e,t,i){this.clearMessage(),this.loading=!0,i()}}},947:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view-box",{ref:"messageClass",attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{"left-options":{backText:"班级通知"}},slot:"header"}),e._v(" "),e.loading?e._e():i("div",{staticClass:"messageSection"},e._l(e.messageClassList,function(t){return i("section",[i("h3",[e._v(e._s(e._f("ymd")(t.time)))]),e._v(" "),i("article",[e._v(e._s(t.content))])])})),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[e.loading?i("spinner",{attrs:{type:"dots"}}):0==e.messageClassList.length?i("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4cc0be"}},[e._v("暂无纠错消息~")]):e._e()],1)],1)},staticRenderFns:[]}}});