webpackJsonp([50,61],{5:function(e,t,p){!function(t,p){e.exports=p()}(this,function(){return function(e){function t(i){if(p[i])return p[i].exports;var o=p[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var p={};return t.m=e,t.c=p,t.p="/",t(0)}([function(e,t,p){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=p(5),n=i(o);t.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",n.default)},function(e,t){"use strict";function p(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:p(e.parentNode)}function i(e){var t=getComputedStyle(e===window?document.body:e),p=e===window?window.innerHeight:parseInt(t.height,10),i=e===window?document.body.scrollHeight:e.scrollHeight,o=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop,n=parseInt(t.paddingTop,10),a=parseInt(t.paddingBottom,10);return i-p-o-n-a}Object.defineProperty(t,"__esModule",{value:!0});var o={bubbles:"loading-bubbles",circles:"loading-circles",default:"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};t.default={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return o[this.spinner]||o.default}},props:{distance:{type:Number,default:100},onInfinite:{type:Function,required:!0},spinner:String},ready:function(){this.scrollParent=p(this.$el),this.scrollHandler=function(){var e=i(this.scrollParent);!this.isLoading&&e<=this.distance&&(this.isLoading=!0,this.onInfinite.call())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isLoading=!1,this.isFirstLoad=!1},"$InfiniteLoading:complete":function(){this.isLoading=!1,this.isComplete=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isComplete=!1,this.isFirstLoad=!0,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,p){t=e.exports=p(3)(),t.push([e.id,".loading-wave-dots[_v-34e13b62]{position:relative}.loading-wave-dots[_v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[_v-34e13b62]{position:relative}.loading-bubbles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[_v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var p=this[t];p[2]?e.push("@media "+p[2]+"{"+p[1]+"}"):e.push(p[1])}return e.join("")},e.i=function(t,p){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(i[n]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(p&&!a[2]?a[2]=p:p&&(a[2]="("+a[2]+") and ("+p+")"),e.push(a))}},e}},function(e,t){e.exports=' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> '},function(e,t,p){var i,o,n={};p(7),i=p(1),o=p(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,p){function i(e,t){for(var p=0;p<e.length;p++){var i=e[p],o=l[i.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](i.parts[n]);for(;n<i.parts.length;n++)o.parts.push(x(i.parts[n],t))}else{for(var a=[],n=0;n<i.parts.length;n++)a.push(x(i.parts[n],t));l[i.id]={id:i.id,refs:1,parts:a}}}}function o(e){for(var t=[],p={},i=0;i<e.length;i++){var o=e[i],n=o[0],a=o[1],s=o[2],x=o[3],r={css:a,media:s,sourceMap:x};p[n]?p[n].parts.push(r):t.push(p[n]={id:n,parts:[r]})}return t}function n(e,t){var p=u(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?p.insertBefore(t,i.nextSibling):p.appendChild(t):p.insertBefore(t,p.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");p.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function x(e,t){var p,i,o;if(t.singleton){var n=h++;p=f||(f=s(t)),i=r.bind(null,p,n,!1),o=r.bind(null,p,n,!0)}else p=s(t),i=d.bind(null,p),o=function(){a(p)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function r(e,t,p,i){var o=p?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var n=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function d(e,t){var p=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(p+="\n/*# sourceURL="+o.sources[0]+" */",p+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=p;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(p))}}var l={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},c=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=b(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,h=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=c()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var p=o(e);return i(p,t),function(e){for(var n=[],a=0;a<p.length;a++){var s=p[a],x=l[s.id];x.refs--,n.push(x)}if(e){var r=o(e);i(r,t)}for(var a=0;a<n.length;a++){var x=n[a];if(0===x.refs){for(var d=0;d<x.parts.length;d++)x.parts[d]();delete l[x.id]}}}};var v=function(){var e=[];return function(t,p){return e[t]=p,e.filter(Boolean).join("\n")}}()},function(e,t,p){var i=p(2);"string"==typeof i&&(i=[[e.id,i,""]]),p(6)(i,{}),i.locals&&(e.exports=i.locals)}])})},226:function(e,t,p){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=p(4),n=i(o),a=p(3),s=p(5),x=i(s),r=p(6);t.default={components:{XHeader:a.XHeader,XButton:a.XButton,InfiniteLoading:x.default,Panel:a.Panel,Flexbox:a.Flexbox,FlexboxItem:a.FlexboxItem,ViewBox:a.ViewBox,ButtonTab:a.ButtonTab,ButtonTabItem:a.ButtonTabItem},route:{data:function(e){var t=this;this.breakListIsReset?this.$nextTick(function(){t.$broadcast("$InfiniteLoading:reset")}):this.$nextTick(function(){document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop=t.breakListScroll})}},methods:(0,n.default)({},(0,r.mapActions)(["getBreakList","setBreakListScroll","breakAction"]),{_abandon:function(e,t){this.breakAction({id:e,index:t})},_intoDetail:function(e){this.setBreakListScroll(document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop),this.$router.go("/example/"+this.breakSubjectId+"/"+e)},_onInfinite:function(){var e=this;this.getBreakList().then(function(t){e.$broadcast("$InfiniteLoading:loaded");var p=Number(t.data.data.list.length);if(p<5)return void e.$broadcast("$InfiniteLoading:complete")})}}),computed:(0,n.default)({},(0,r.mapGetters)(["breakList","breakListIsReset","breakSubjectId","breakListScroll"]))}},367:function(e,t){e.exports=' <view-box class=breakList> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}">斩题列表 </x-header> <header v-if=breakList class=sectionHeader> <p class=ellipsis>{{breakList.chapterName}}</p> <font class=ellipsis>共<b>{{breakList.count}}</b>个题型</font> </header> </div> <div style=padding-top:80px> <template v-if=breakList> <div class="weui_panel weui_panel_access exerciseExampleList" v-for="item in breakList.list"> <div class=weui_panel_hd> {{{item.chapter_name}}} </div> <div @click=_intoDetail(item.excercise_id)> <div class=weui_panel_bd> <div class="weui_media_box weui_media_appmsg"> <div class=weui_media_bd> <p class=example_title>参考例题<b>难度：{{item.degree}}</b></p> <p class=weui_media_desc> {{{item.stem}}} </p> </div> </div> </div> <div v-if=" item.opt_jo.hasOwnProperty(\'A\') " class="weui_media_bd weui_media_box options"> <p class=weui_media_desc v-for="value in item.opt_jo"> {{ $key }} : {{{ value }}} </p> </div> </div> <div class=abandon> <span @click=_abandon(item.loose_win_excercise_id,$index)>撤回</span> </div> </div> </template> <infinite-loading :on-infinite=_onInfinite spinner=waveDots style=height:60px> <span slot=no-results style=color:#4bb7aa> <i class="icon iconfont icon-comiiszanwushuju" style=font-size:1.5rem;margin-right:.2rem></i> <p style=font-size:1rem;display:inline-block>还未刷题~</p> </span> <span slot=no-more style=color:#4bb7aa;font-size:.8rem>已加载全部</span> </infinite-loading> </div> </view-box> '},431:function(e,t,p){var i,o,n={};i=p(226),o=p(367),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(a.template=o),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})}});