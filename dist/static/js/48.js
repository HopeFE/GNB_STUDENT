webpackJsonp([48,61],{5:function(e,t,i){!function(t,i){e.exports=i()}(this,function(){return function(e){function t(p){if(i[p])return i[p].exports;var o=i[p]={exports:{},id:p,loaded:!1};return e[p].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="/",t(0)}([function(e,t,i){"use strict";function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(5),n=p(o);t.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",n.default)},function(e,t){"use strict";function i(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:i(e.parentNode)}function p(e){var t=getComputedStyle(e===window?document.body:e),i=e===window?window.innerHeight:parseInt(t.height,10),p=e===window?document.body.scrollHeight:e.scrollHeight,o=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop,n=parseInt(t.paddingTop,10),s=parseInt(t.paddingBottom,10);return p-i-o-n-s}Object.defineProperty(t,"__esModule",{value:!0});var o={bubbles:"loading-bubbles",circles:"loading-circles",default:"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};t.default={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return o[this.spinner]||o.default}},props:{distance:{type:Number,default:100},onInfinite:{type:Function,required:!0},spinner:String},ready:function(){this.scrollParent=i(this.$el),this.scrollHandler=function(){var e=p(this.scrollParent);!this.isLoading&&e<=this.distance&&(this.isLoading=!0,this.onInfinite.call())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isLoading=!1,this.isFirstLoad=!1},"$InfiniteLoading:complete":function(){this.isLoading=!1,this.isComplete=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isComplete=!1,this.isFirstLoad=!0,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,i){t=e.exports=i(3)(),t.push([e.id,".loading-wave-dots[_v-34e13b62]{position:relative}.loading-wave-dots[_v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[_v-34e13b62]{position:relative}.loading-bubbles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[_v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var p={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(p[n]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&p[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t){e.exports=' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> '},function(e,t,i){var p,o,n={};i(7),p=i(1),o=i(4),e.exports=p||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(n).forEach(function(e){var t=n[e];s.computed[e]=function(){return t}})},function(e,t,i){function p(e,t){for(var i=0;i<e.length;i++){var p=e[i],o=l[p.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](p.parts[n]);for(;n<p.parts.length;n++)o.parts.push(x(p.parts[n],t))}else{for(var s=[],n=0;n<p.parts.length;n++)s.push(x(p.parts[n],t));l[p.id]={id:p.id,refs:1,parts:s}}}}function o(e){for(var t=[],i={},p=0;p<e.length;p++){var o=e[p],n=o[0],s=o[1],a=o[2],x=o[3],r={css:s,media:a,sourceMap:x};i[n]?i[n].parts.push(r):t.push(i[n]={id:n,parts:[r]})}return t}function n(e,t){var i=u(),p=m[m.length-1];if("top"===e.insertAt)p?p.nextSibling?i.insertBefore(t,p.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function x(e,t){var i,p,o;if(t.singleton){var n=h++;i=f||(f=a(t)),p=r.bind(null,i,n,!1),o=r.bind(null,i,n,!0)}else i=a(t),p=d.bind(null,i),o=function(){s(i)};return p(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;p(e=t)}else o()}}function r(e,t,i,p){var o=i?"":p.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var n=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}function d(e,t){var i=t.css,p=t.media,o=t.sourceMap;if(p&&e.setAttribute("media",p),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},c=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=b(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,h=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=c()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return p(i,t),function(e){for(var n=[],s=0;s<i.length;s++){var a=i[s],x=l[a.id];x.refs--,n.push(x)}if(e){var r=o(e);p(r,t)}for(var s=0;s<n.length;s++){var x=n[s];if(0===x.refs){for(var d=0;d<x.parts.length;d++)x.parts[d]();delete l[x.id]}}}};var v=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var p=i(2);"string"==typeof p&&(p=[[e.id,p,""]]),i(6)(p,{}),p.locals&&(e.exports=p.locals)}])})},235:function(e,t,i){"use strict";function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(4),n=p(o),s=i(3),a=i(5),x=p(a),r=i(6);t.default={components:{XHeader:s.XHeader,XButton:s.XButton,InfiniteLoading:x.default,Panel:s.Panel,Flexbox:s.Flexbox,FlexboxItem:s.FlexboxItem,ViewBox:s.ViewBox,ButtonTab:s.ButtonTab,ButtonTabItem:s.ButtonTabItem},route:{data:function(e){var t=this;this.brushedListIsReset?this.$nextTick(function(){t.$broadcast("$InfiniteLoading:reset")}):this.$nextTick(function(){document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop=t.brushedListScroll})}},methods:(0,n.default)({},(0,r.mapActions)(["getBrushedList","setBrushedListScroll","brushedAction"]),{_abandon:function(e,t){this.brushedAction({id:e,index:t})},_intoDetail:function(e){this.setBrushedListScroll(document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop),this.$router.go("/example/"+this.brushedSubjectId+"/"+e)},_onInfinite:function(){var e=this;this.getBrushedList().then(function(t){e.$broadcast("$InfiniteLoading:loaded");var i=Number(t.data.data.list.length);if(i<5)return void e.$broadcast("$InfiniteLoading:complete")})}}),computed:(0,n.default)({},(0,r.mapGetters)(["brushedList","brushedListIsReset","brushedSubjectId","brushedListScroll"]))}},372:function(e,t){e.exports=' <view-box class=brushedList> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}">刷题列表 </x-header> <header v-if=brushedList class=sectionHeader> <p class=ellipsis>{{brushedList.chapterName}}</p> <font class=ellipsis>共<b>{{brushedList.count}}</b>个题型</font> </header> </div> <div style=padding-top:80px> <template v-if=brushedList> <div class="weui_panel weui_panel_access exerciseExampleList" v-for="item in brushedList.list"> <div class=weui_panel_hd> {{{item.chapter_name}}} </div> <div class=weui_panel_bd> <a class="weui_media_box weui_media_appmsg" @click=_intoDetail(item.excercise_id)> <div class=weui_media_bd> <p class=example_title>参考例题<b>难度：{{item.degree}}</b></p> <p class=weui_media_desc> {{{item.stem}}} </p> </div> </a> </div> <a v-if="item.opt_jo.hasOwnProperty(\'A\')" @click=_intoDetail(item.exercises_id)> <div class="weui_media_bd weui_media_box options"> <p class=weui_media_desc v-for="value in item.opt_jo"> {{ $key }} : {{{ value }}} </p> </div> </a> <div class=abandon> <span @click=_abandon(item.loose_win_excercise_id,$index)>撤回</span> </div> </div> </template> <infinite-loading :on-infinite=_onInfinite spinner=waveDots style=height:60px> <span slot=no-results style=color:#4bb7aa> <i class="icon iconfont icon-comiiszanwushuju" style=font-size:1.5rem;margin-right:.2rem></i> <p style=font-size:1rem;display:inline-block>还未刷题~</p> </span> <span slot=no-more style=color:#4bb7aa;font-size:.8rem>已加载全部</span> </infinite-loading> </div> </view-box> '},437:function(e,t,i){var p,o,n={};p=i(235),o=i(372),e.exports=p||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(n).forEach(function(e){var t=n[e];s.computed[e]=function(){return t}})}});