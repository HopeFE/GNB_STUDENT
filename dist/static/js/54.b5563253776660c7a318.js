webpackJsonp([54],{226:function(t,e,n){var i=n(12)(n(539),n(680),null,null,null);t.exports=i.exports},278:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(79),r=n.n(i);e.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},279:function(t,e,n){e=t.exports=n(195)(),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4bb7aa}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},280:function(t,e,n){var i=n(279);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(196)("37d0bc88",i,!0)},281:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[n("transition",{attrs:{name:t.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),n("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("transition",{attrs:{name:t.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),n("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},282:function(t,e,n){function i(t){n(280)}var r=n(12)(n(278),n(281),i,null,null);t.exports=r.exports},284:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},285:function(t,e,n){e=t.exports=n(195)(),e.push([t.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},286:function(t,e,n){var i=n(285);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(196)("26b9de44",i,!0)},287:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),n("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},288:function(t,e,n){function i(t){n(286)}var r=n(12)(n(284),n(287),i,null,null);t.exports=r.exports},305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(307),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];e.default={mounted:function(){var t=this;this.$nextTick(function(){n.i(i.a)(t.$el,t.type)})},props:{type:{type:String,default:"ios"}},computed:{className:function(){for(var t={},e=0;e<r.length;e++)t["vux-spinner-"+r[e]]=this.type===r[e];return t}}}},306:function(t,e){for(var n=0,i=["webkit","moz"],r=0;r<i.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[i[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[r]+"CancelAnimationFrame"]||window[i[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var i=(new Date).getTime(),r=Math.max(0,16-(i-n)),a=window.setTimeout(function(){t(i+r)},r);return n=i+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},307:function(t,e,n){"use strict";function i(t,e,n,a){var o,s,l,u=document.createElement(c[t]||t);for(o in e)if("[object Array]"===Object.prototype.toString.call(e[o]))for(s=0;s<e[o].length;s++)if(e[o][s].fn)for(l=0;l<e[o][s].t;l++)i(o,e[o][s].fn(l,a),u,a);else i(o,e[o][s],u,a);else r(u,o,e[o]);n.appendChild(u)}function r(t,e,n){t.setAttribute(c[e]||e,n)}function a(t,e){var n=t.split(";"),i=n.slice(e),r=n.slice(0,n.length-i.length);return n=i.concat(r).reverse(),n.join(";")+";"+n[0]}function o(t,e){return(t/=e/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}var s=n(306),c=(n.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),l={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(t,e){return{y1:"ios"===e?17:12,y2:"ios"===e?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},f={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:a("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[l]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:a("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:a("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:a("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[l]}]}},d={android:function(t){function e(){if(!n.stop){var t=o(Date.now()-i,650),u=1,f=0,d=188-58*t,p=182-182*t;a%2&&(u=-1,f=-64,d=128- -58*t,p=182*t);var v=[0,-101,-90,-11,-180,79,-270,-191][a];r(l,"da",Math.max(Math.min(d,188),128)),r(l,"os",Math.max(Math.min(p,182),0)),r(l,"t","scale("+u+",1) translate("+f+",0) rotate("+v+",32,32)"),s+=4.1,s>359&&(s=0),r(c,"t","rotate("+s+",32,32)"),t>=1&&(a++,a>7&&(a=0),i=Date.now()),window.requestAnimationFrame(e)}}var n=this;this.stop=!1;var i,a=0,s=0,c=t.querySelector("g"),l=t.querySelector("circle");return function(){return i=Date.now(),e(),n}}};e.a=function(t,e){var n,r;n=e;var a=document.createElement("div");return i("svg",{viewBox:"0 0 64 64",g:[f[n]]},a,n),t.innerHTML=a.innerHTML,function(){d[n]&&(r=d[n](t)())}(),t}},308:function(t,e,n){e=t.exports=n(195)(),e.push([t.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},309:function(t,e,n){var i=n(308);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(196)("7b4a41c6",i,!0)},310:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-spinner",class:t.className})},staticRenderFns:[]}},311:function(t,e,n){function i(t){n(309)}var r=n(12)(n(305),n(310),i,null,null);t.exports=r.exports},539:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(78),r=n.n(i),a=n(282),o=n.n(a),s=n(288),c=n.n(s),l=n(311),u=n.n(l),f=n(80);e.default={name:"correct",components:{XHeader:o.a,ViewBox:c.a,Spinner:u.a},computed:r()({},n.i(f.a)(["messageCorrectList"])),data:function(){return{loading:!0}},methods:r()({},n.i(f.b)(["getMessageCorrect","clearMessage"])),beforeRouteEnter:function(t,e,n){n(function(t){t.getMessageCorrect().then(function(){t.loading=!1})})},beforeRouteLeave:function(t,e,n){this.clearMessage(),this.loading=!0,n()}}},680:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-box",{ref:"messageCorrect",attrs:{"body-padding-top":"46px"}},[n("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{"left-options":{backText:"纠错通知"}},slot:"header"}),t._v(" "),t.loading?t._e():n("div",{staticClass:"messageSection"},t._l(t.messageCorrectList,function(e){return n("section",[n("h3",[t._v(t._s(t._f("ymd")(e.time)))]),t._v(" "),n("article",[t._v(t._s(e.content))])])})),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t.loading?n("spinner",{attrs:{type:"dots"}}):0==t.messageCorrectList.length?n("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4BB7AA"}},[t._v("暂无纠错消息~")]):t._e()],1)],1)},staticRenderFns:[]}}});