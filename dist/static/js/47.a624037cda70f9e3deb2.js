webpackJsonp([47],{210:function(e,t,i){var n=i(12)(i(523),i(649),null,null,null);e.exports=n.exports},277:function(e,t,i){"use strict";function n(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":r()(e))||t&&"string"==typeof e&&!/http/.test(e)?t.push(e):window.location.href=e}}t.a=n;var o=i(24),r=i.n(o)},305:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(307),o=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];t.default={mounted:function(){var e=this;this.$nextTick(function(){i.i(n.a)(e.$el,e.type)})},props:{type:{type:String,default:"ios"}},computed:{className:function(){for(var e={},t=0;t<o.length;t++)e["vux-spinner-"+o[t]]=this.type===o[t];return e}}}},306:function(e,t){for(var i=0,n=["webkit","moz"],o=0;o<n.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[n[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[o]+"CancelAnimationFrame"]||window[n[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-i)),r=window.setTimeout(function(){e(n+o)},o);return i=n+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},307:function(e,t,i){"use strict";function n(e,t,i,r){var a,s,c,u=document.createElement(l[e]||e);for(a in t)if("[object Array]"===Object.prototype.toString.call(t[a]))for(s=0;s<t[a].length;s++)if(t[a][s].fn)for(c=0;c<t[a][s].t;c++)n(a,t[a][s].fn(c,r),u,r);else n(a,t[a][s],u,r);else o(u,a,t[a]);i.appendChild(u)}function o(e,t,i){e.setAttribute(l[t]||t,i)}function r(e,t){var i=e.split(";"),n=i.slice(t),o=i.slice(0,i.length-n.length);return i=n.concat(o).reverse(),i.join(";")+";"+i[0]}function a(e,t){return(e/=t/2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}var s=i(306),l=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(e,t){return{y1:"ios"===t?17:12,y2:"ios"===t?29:20,t:"translate(32,32) rotate("+(30*e+(e<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:"indefinite"}},t:1}]}},t:12}]},f={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:r("1;2;3;4;5;6;7;8",e),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".3;.3;.3;.4;.7;.85;.9;1",e),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".5;.6;.8;1;.8;.6;.5",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:r("4;5;6;5;4;3;3",e),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:"750ms",v:r("16;18;28;18;16",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:r("48;44;36;46;48",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("1;.8;.5;.4;1",e),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},d={android:function(e){function t(){if(!i.stop){var e=a(Date.now()-n,650),u=1,f=0,d=188-58*e,p=182-182*e;r%2&&(u=-1,f=-64,d=128- -58*e,p=182*e);var x=[0,-101,-90,-11,-180,79,-270,-191][r];o(c,"da",Math.max(Math.min(d,188),128)),o(c,"os",Math.max(Math.min(p,182),0)),o(c,"t","scale("+u+",1) translate("+f+",0) rotate("+x+",32,32)"),s+=4.1,s>359&&(s=0),o(l,"t","rotate("+s+",32,32)"),e>=1&&(r++,r>7&&(r=0),n=Date.now()),window.requestAnimationFrame(t)}}var i=this;this.stop=!1;var n,r=0,s=0,l=e.querySelector("g"),c=e.querySelector("circle");return function(){return n=Date.now(),t(),i}}};t.a=function(e,t){var i,o;i=t;var r=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[f[i]]},r,i),e.innerHTML=r.innerHTML,function(){d[i]&&(o=d[i](e)())}(),e}},308:function(e,t,i){t=e.exports=i(195)(),t.push([e.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},309:function(e,t,i){var n=i(308);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(196)("7b4a41c6",n,!0)},310:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-spinner",class:e.className})},staticRenderFns:[]}},311:function(e,t,i){function n(e){i(309)}var o=i(12)(i(305),i(310),n,null,null);e.exports=o.exports},316:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];t.default={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={};if(e["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var t=0;t<n.length;t++)e[n[t]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},317:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},318:function(e,t,i){t=e.exports=i(195)(),t.push([e.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{-webkit-box-flex:1;flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}",""])},319:function(e,t,i){var n=i(318);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(196)("a2ce0e36",n,!0)},320:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},321:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},322:function(e,t,i){var n=i(12)(i(316),i(321),null,null,null);e.exports=n.exports},323:function(e,t,i){function n(e){i(319)}var o=i(12)(i(317),i(320),n,null,null);e.exports=o.exports},339:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(277);t.default={props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&i.i(n.a)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},347:function(e,t,i){t=e.exports=i(195)(),t.push([e.i,'.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-panel .weui-cell:first-child:before{display:block}',""])},351:function(e,t,i){var n=i(347);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(196)("fb98ae9e",n,!0)},361:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-panel weui-panel_access"},[e.header&&e.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:e._s(e.header.title)},on:{click:function(t){e.$emit("on-click-header")}}}):e._e(),e._v(" "),e._t("header"),e._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[e._t("content")],2)]),e._v(" "),i("div",{staticClass:"weui-panel__ft"},[e.footer&&e.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:e.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:e._s(e.footer.title)}})]):e._e()]),e._v(" "),e._t("footer")],2)},staticRenderFns:[]}},363:function(e,t,i){function n(e){i(351)}var o=i(12)(i(339),i(361),n,null,null);e.exports=o.exports},523:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(78),o=i.n(n),r=i(363),a=i.n(r),s=i(311),l=i.n(s),c=i(323),u=i.n(c),f=i(322),d=i.n(f),p=i(80);t.default={name:"break",components:{Card:a.a,Spinner:l.a,Flexbox:u.a,FlexboxItem:d.a},computed:o()({},i.i(p.a)(["Route","induceBreak"]),{list:function(){return this.induceBreak.list},recordSize:function(){return this.induceBreak.recordSize},totalCount:function(){return this.induceBreak.totalCount}}),data:function(){return{loading:!0,loadingNoData:!1}},methods:o()({},i.i(p.b)(["getInduceList","setInduceListScroll","induceListClear","induceBack"]),{_getData:function(){var e=this;this.loading=!0,this.getInduceList({type:"break"}).then(function(t){t.data.data.list.length<10&&(e.loadingNoData=!0),e.loading=!1}).catch(function(){e.loading=!1})},_back:function(e,t){var i=this;this.induceBack({index:t,type:"break",id:e.exercises_id,chapter_id:e.chapter_id}).then(function(){i.$vux.toast.show({text:"已撤回到题型本",type:"text",time:600,position:"bottom"})})}}),beforeRouteEnter:function(e,t,i){i(function(e){"example"!==t.name&&(e.loadingNoData=!1,e.induceListClear({type:"break"})),e.induceBreak.isReset&&e._getData(),e.$parent.$refs.viewBoxBody.scrollTop=e.induceBreak.scroll})},beforeRouteLeave:function(e,t,i){this.setInduceListScroll({type:"break",height:this.$parent.$refs.viewBoxBody.scrollTop}),i()}}},649:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.list.length?i("aside",{staticStyle:{padding:"0 .5rem","font-size":".7rem","line-height":"1.5rem","margin-bottom":"-10px"}},[i("p",[e._v("本节共有"),i("b",{staticStyle:{color:"#F8BF4D"}},[e._v(e._s(e.totalCount))]),e._v("个题型，已斩"),i("b",{staticStyle:{color:"#F8BF4D"}},[e._v(e._s(e.recordSize))]),e._v("题")])]):e._e(),e._v(" "),e._l(e.list,function(t,n){return i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",slot:"header"},[i("flexbox",[i("flexbox-item",{staticStyle:{color:"#4bb7aa"},attrs:{span:10}},[e._v(e._s(t.chapter_name))]),e._v(" "),i("flexbox-item",{attrs:{span:2}},[e._v("难度: "+e._s(t.degree))])],1)],1),e._v(" "),i("div",{on:{click:function(i){e.$router.push({name:"example",params:{subjectId:-1!==e.Route.params.subject.indexOf("math")?2:7,id:t.exercises_id}})}},slot:"content"},[i("div",{domProps:{innerHTML:e._s(t.stem)}}),e._v(" "),t.opt_jo.hasOwnProperty("A")?i("div",[e._l(t.opt_jo,function(t,n){return[i("div",{staticStyle:{"padding-top":"5px"}},[e._v(e._s(n)+"： "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(t)}})])]})],2):e._e()]),e._v(" "),i("div",{slot:"footer"},[i("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"0"}},[i("div",{staticClass:"weui-cell__bd"},[i("flexbox",{staticStyle:{"text-align":"center"},attrs:{gutter:0}},[i("flexbox-item",{attrs:{span:9}}),e._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){e._back(t,n)}}},[i("i",{staticClass:"icon iconfont icon-chexiao"}),e._v("撤回\n            ")])],1)],1)])])])}),e._v(" "),i("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e.loading?i("spinner",{attrs:{type:"lines"}}):e._e(),e._v(" "),i("div",[e.loadingNoData?i("p",{staticStyle:{"font-size":"16px",color:"#4BB7AA"}},[e._v("已经加载全部斩题~")]):e._e(),e._v(" "),e.loadingNoData||e.loading?e._e():i("p",{staticStyle:{"font-size":"16px",color:"#4BB7AA"},on:{click:e._getData}},[e._v("点我加载更多")])])],1)],2)},staticRenderFns:[]}}});