webpackJsonp([68],{1108:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.list.length?i("aside",{staticStyle:{padding:"0 .5rem","font-size":".7rem","line-height":"1.5rem","margin-bottom":"-10px"}},[i("p",[t._v("本节共有"),i("b",{staticStyle:{color:"#F8BF4D"}},[t._v(t._s(t.totalCount))]),t._v("个题型，未处理"),i("b",{staticStyle:{color:"#F8BF4D"}},[t._v(t._s(t.recordSize))]),t._v("题")])]):t._e(),t._v(" "),t._l(t.list,function(e,n){return i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",slot:"header"},[i("flexbox",[i("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:10}},[t._v(t._s(e.chapter_name))]),t._v(" "),i("flexbox-item",{attrs:{span:2}},[t._v("难度: "+t._s(e.degree))])],1)],1),t._v(" "),i("div",{on:{click:function(i){t.$router.push({name:"example",params:{subjectId:-1!==t.Route.params.subject.indexOf("math")?2:7,id:e.exercises_id}})}},slot:"content"},[i("div",{domProps:{innerHTML:t._s(e.stem)}}),t._v(" "),e.opt_jo.hasOwnProperty("A")?i("div",[t._l(e.opt_jo,function(e,n){return[i("div",{key:n,staticStyle:{"padding-top":"5px"}},[t._v(t._s(n)+"： "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(e)}})])]})],2):t._e()]),t._v(" "),i("div",{slot:"footer"},[i("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"0"}},[i("div",{staticClass:"weui-cell__bd"},[i("flexbox",{staticStyle:{"text-align":"center"},attrs:{gutter:0}},[i("flexbox-item",{attrs:{span:3}}),t._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){t._operate("practice",e,n)}}},[i("i",{staticClass:"icon iconfont icon-jinrulianxi",staticStyle:{"font-size":"17px"}}),t._v("练习\n            ")]),t._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){t._operate("break",e,n)}}},[i("i",{staticClass:"icon iconfont icon-brush",staticStyle:{"font-size":"17px"}}),t._v("斩题\n            ")]),t._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){t._operate("pass",e,n)}}},[i("i",{staticClass:"icon iconfont icon-lajitong16",staticStyle:{"font-size":"17px"}}),t._v("弃题\n            ")])],1)],1)])])])}),t._v(" "),i("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?i("spinner",{attrs:{type:"lines"}}):t._e(),t._v(" "),i("div",[t.loadingNoData?i("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("已经加载全部题型~")]):t._e(),t._v(" "),t.loadingNoData||t.loading?t._e():i("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:t._getData}},[t._v("点我加载更多")])])],1)],2)},staticRenderFns:[]}},542:function(t,e,i){var n=i(50)(i(882),i(1108),null,null);t.exports=n.exports},601:function(t,e,i){"use strict";function n(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":r()(t))||e&&"string"==typeof t&&!/http/.test(t)?"object"===(void 0===t?"undefined":r()(t))&&!0===t.replace?e.replace(t):"BACK"===t?e.go(-1):e.push(t):window.location.href=t}}e.a=n;var o=i(68),r=i.n(o)},623:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(626),o=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];e.default={name:"spinner",mounted:function(){var t=this;this.$nextTick(function(){i.i(n.a)(t.$el,t.type,t.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var t={},e=0;e<o.length;e++)t["vux-spinner-"+o[e]]=this.type===o[e];return t}}}},625:function(t,e){for(var i=0,n=["webkit","moz"],o=0;o<n.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[n[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[o]+"CancelAnimationFrame"]||window[n[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),o=Math.max(0,16-(n-i)),r=window.setTimeout(function(){t(n+o)},o);return i=n+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},626:function(t,e,i){"use strict";function n(t,e,i,r,a){var s,c,d,u=document.createElement(l[t]||t);for(s in e)if("[object Array]"===Object.prototype.toString.call(e[s]))for(c=0;c<e[s].length;c++)if(e[s][c].fn)for(d=0;d<e[s][c].t;d++)n(s,e[s][c].fn(d,r),u,r);else n(s,e[s][c],u,r);else o(u,s,e[s]);a&&"28px"!==a&&o(u,"style","width: "+a+"; height: "+a),i.appendChild(u)}function o(t,e,i){t.setAttribute(l[e]||e,i)}function r(t,e){var i=t.split(";"),n=i.slice(e),o=i.slice(0,i.length-n.length);return i=n.concat(o).reverse(),i.join(";")+";"+i[0]}function a(t,e){return(t/=e/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}var s=i(625),l=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},d={sw:4,lc:"round",line:[{fn:function(t,e){return{y1:"ios"===e?17:12,y2:"ios"===e?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},u={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:d,"ios-small":d,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:r("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:r("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:r("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:r("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},f={android:function(t){function e(){if(!i.stop){var t=a(Date.now()-n,650),d=1,u=0,f=188-58*t,p=182-182*t;r%2&&(d=-1,u=-64,f=128- -58*t,p=182*t);var x=[0,-101,-90,-11,-180,79,-270,-191][r];o(c,"da",Math.max(Math.min(f,188),128)),o(c,"os",Math.max(Math.min(p,182),0)),o(c,"t","scale("+d+",1) translate("+u+",0) rotate("+x+",32,32)"),s+=4.1,s>359&&(s=0),o(l,"t","rotate("+s+",32,32)"),t>=1&&(r++,r>7&&(r=0),n=Date.now()),window.requestAnimationFrame(e)}}var i=this;this.stop=!1;var n,r=0,s=0,l=t.querySelector("g"),c=t.querySelector("circle");return function(){return n=Date.now(),e(),i}}};e.a=function(t,e,i){var o,r;o=e;var a=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[u[o]]},a,o,i),t.innerHTML=a.innerHTML,function(){f[o]&&(r=f[o](t)())}(),t}},628:function(t,e,i){e=t.exports=i(501)(!1),e.push([t.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},630:function(t,e,i){var n=i(628);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(502)("e662429e",n,!0)},632:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-spinner",class:t.className,style:t.styles})},staticRenderFns:[]}},634:function(t,e,i){i(630);var n=i(50)(i(623),i(632),null,null);t.exports=n.exports},635:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<n.length;i++)t[n[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},636:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},637:function(t,e,i){e=t.exports=i(501)(!1),e.push([t.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col .vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.vux-flex-col{box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}",""])},638:function(t,e,i){var n=i(637);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(502)("e72d70cc",n,!0)},639:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},640:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},staticRenderFns:[]}},641:function(t,e,i){var n=i(50)(i(635),i(640),null,null);t.exports=n.exports},642:function(t,e,i){i(638);var n=i(50)(i(636),i(639),null,null);t.exports=n.exports},650:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(601);e.default={name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&i.i(n.a)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},651:function(t,e,i){e=t.exports=i(501)(!1),e.push([t.i,'.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-flex;display:-webkit-box;display:flex;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-panel .weui-cell:first-child:before{display:block}',""])},652:function(t,e,i){var n=i(651);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(502)("01f4b4ce",n,!0)},653:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header&&t.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header.title)},on:{click:function(e){t.$emit("on-click-header")}}}):t._e(),t._v(" "),t._t("header"),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[t._t("content")],2)]),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:t.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()]),t._v(" "),t._t("footer")],2)},staticRenderFns:[]}},654:function(t,e,i){i(652);var n=i(50)(i(650),i(653),null,null);t.exports=n.exports},671:function(t,e,i){"use strict";function n(t){return void 0===t?document.body:"string"==typeof t&&0===t.indexOf("?")?document.body:("string"==typeof t&&t.indexOf("?")>0&&(t=t.split("?")[0]),"body"===t||!0===t?document.body:t instanceof window.Node?t:document.querySelector(t))}function o(t){if(!t)return!1;if("string"==typeof t&&t.indexOf("?")>0)try{return JSON.parse(t.split("?")[1]).autoUpdate||!1}catch(t){return!1}return!1}var r=i(195),a=i.n(r),s={inserted:function(t,e,i){var o=e.value;t.className=t.className?t.className+" v-transfer-dom":"v-transfer-dom";var r=t.parentNode,a=document.createComment(""),s=!1;!1!==o&&(r.replaceChild(a,t),n(o).appendChild(t),s=!0),t.__transferDomData||(t.__transferDomData={parentNode:r,home:a,target:n(o),hasMovedOut:s})},componentUpdated:function(t,e){var i=e.value;if(o(i)){var r=t.__transferDomData,s=r.parentNode,l=r.home,c=r.hasMovedOut;!c&&i?(s.replaceChild(l,t),n(i).appendChild(t),t.__transferDomData=a()({},t.__transferDomData,{hasMovedOut:!0,target:n(i)})):c&&!1===i?(s.replaceChild(t,l),t.__transferDomData=a()({},t.__transferDomData,{hasMovedOut:!1,target:n(i)})):i&&n(i).appendChild(t)}},unbind:function(t,e){t.className=t.className.replace("v-transfer-dom",""),!0===t.__transferDomData.hasMovedOut&&t.__transferDomData.parentNode&&t.__transferDomData.parentNode.appendChild(t),t.__transferDomData=null}};e.a=s},882:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(129),o=i.n(n),r=i(654),a=i.n(r),s=i(634),l=i.n(s),c=i(642),d=i.n(c),u=i(641),f=i.n(u),p=i(671),x=i(196);e.default={name:"total",components:{Card:a.a,Spinner:l.a,Flexbox:d.a,FlexboxItem:f.a},computed:o()({},i.i(x.a)(["Route","induceTotal"]),{list:function(){return this.induceTotal.list},recordSize:function(){return this.induceTotal.recordSize},totalCount:function(){return this.induceTotal.totalCount}}),directives:{TransferDom:p.a},data:function(){return{loading:!0,loadingNoData:!1}},methods:o()({},i.i(x.b)(["getInduceList","setInduceListScroll","induceListClear","induceTotalAction"]),{_operate:function(t,e,i){var n=this,o=void 0;o="practice"===t?"已放入练习本":"break"===t?"已放入斩题本":"已放入弃题本",this.induceTotalAction({index:i,type:t,id:e.exercises_id,chapter_id:e.chapter_id}).then(function(){n.$vux.toast.show({text:o,type:"text",time:1500,position:"bottom"})})},_getData:function(){var t=this;this.loading=!0,this.getInduceList({type:"total"}).then(function(e){e.data.data.list.length<10&&(t.loadingNoData=!0),t.loading=!1}).catch(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,i){i(function(t){"example"!==e.name&&(t.loadingNoData=!1,t.induceListClear({type:"total"})),t.induceTotal.isReset&&t._getData(),t.$parent.$refs.viewBoxBody.scrollTop=t.induceTotal.scroll})},beforeRouteLeave:function(t,e,i){this.setInduceListScroll({type:"total",height:this.$parent.$refs.viewBoxBody.scrollTop}),i()}}}});