webpackJsonp([25,61],{5:function(e,t,o){!function(t,o){e.exports=o()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var p=o[i]={exports:{},id:i,loaded:!1};return e[i].call(p.exports,p,p.exports,t),p.loaded=!0,p.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var p=o(5),n=i(p);t.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",n.default)},function(e,t){"use strict";function o(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:o(e.parentNode)}function i(e){var t=getComputedStyle(e===window?document.body:e),o=e===window?window.innerHeight:parseInt(t.height,10),i=e===window?document.body.scrollHeight:e.scrollHeight,p=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop,n=parseInt(t.paddingTop,10),a=parseInt(t.paddingBottom,10);return i-o-p-n-a}Object.defineProperty(t,"__esModule",{value:!0});var p={bubbles:"loading-bubbles",circles:"loading-circles",default:"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};t.default={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return p[this.spinner]||p.default}},props:{distance:{type:Number,default:100},onInfinite:{type:Function,required:!0},spinner:String},ready:function(){this.scrollParent=o(this.$el),this.scrollHandler=function(){var e=i(this.scrollParent);!this.isLoading&&e<=this.distance&&(this.isLoading=!0,this.onInfinite.call())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isLoading=!1,this.isFirstLoad=!1},"$InfiniteLoading:complete":function(){this.isLoading=!1,this.isComplete=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isComplete=!1,this.isFirstLoad=!0,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,o){t=e.exports=o(3)(),t.push([e.id,".loading-wave-dots[_v-34e13b62]{position:relative}.loading-wave-dots[_v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[_v-34e13b62]{position:relative}.loading-bubbles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[_v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},p=0;p<this.length;p++){var n=this[p][0];"number"==typeof n&&(i[n]=!0)}for(p=0;p<t.length;p++){var a=t[p];"number"==typeof a[0]&&i[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(e,t){e.exports=' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> '},function(e,t,o){var i,p,n={};o(7),i=o(1),p=o(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;p&&(a.template=p),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){function i(e,t){for(var o=0;o<e.length;o++){var i=e[o],p=d[i.id];if(p){p.refs++;for(var n=0;n<p.parts.length;n++)p.parts[n](i.parts[n]);for(;n<i.parts.length;n++)p.parts.push(s(i.parts[n],t))}else{for(var a=[],n=0;n<i.parts.length;n++)a.push(s(i.parts[n],t));d[i.id]={id:i.id,refs:1,parts:a}}}}function p(e){for(var t=[],o={},i=0;i<e.length;i++){var p=e[i],n=p[0],a=p[1],r=p[2],s=p[3],x={css:a,media:r,sourceMap:s};o[n]?o[n].parts.push(x):t.push(o[n]={id:n,parts:[x]})}return t}function n(e,t){var o=b(),i=h[h.length-1];if("top"===e.insertAt)i?i.nextSibling?o.insertBefore(t,i.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",n(e,t),t}function s(e,t){var o,i,p;if(t.singleton){var n=m++;o=f||(f=r(t)),i=x.bind(null,o,n,!1),p=x.bind(null,o,n,!0)}else o=r(t),i=l.bind(null,o),p=function(){a(o)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else p()}}function x(e,t,o,i){var p=o?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,p);else{var n=document.createTextNode(p),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function l(e,t){var o=t.css,i=t.media,p=t.sourceMap;if(i&&e.setAttribute("media",i),p&&(o+="\n/*# sourceURL="+p.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(p))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var d={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},u=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=c(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,m=0,h=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=u()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=p(e);return i(o,t),function(e){for(var n=[],a=0;a<o.length;a++){var r=o[a],s=d[r.id];s.refs--,n.push(s)}if(e){var x=p(e);i(x,t)}for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var v=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){var i=o(2);"string"==typeof i&&(i=[[e.id,i,""]]),o(6)(i,{}),i.locals&&(e.exports=i.locals)}])})},109:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EXAMPLE="EXAMPLE",t.COLLECT_ADD="COLLECT_ADD",t.COLLECT_REMOVE="COLLECT_REMOVE",t.EXAMPLE_CLEAR="EXAMPLE_CLEAR"},179:function(e,t,o){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.exampleClear=t.collectAdd=t.collectRemove=t.getExample=void 0;var n=o(63),a=p(n),r=o(64),s=p(r),x=o(109),l=i(x),d=o(7),c=i(d);t.getExample=function(e){var t=e.rootState,o=e.commit;return new a.default(function(e,i){(0,s.default)({method:"get",url:"exerciseList",params:{ids:[t.route.params.id],subject_id:t.route.params.subjectId,token:t.login.token}}).then(function(t){o(l.EXAMPLE,t.data.data),e(t)})})},t.collectRemove=function(e){var t=e.rootState,o=e.commit,i=e.dispatch;return new a.default(function(e,p){(0,s.default)({method:"post",url:"collect/remove",data:{options:{id:t.route.params.id,subject_id:t.route.params.subjectId},token:t.login.token,type:"example"}}).then(function(t){c.toast("取消收藏成功"),o(l.COLLECT_REMOVE),i("clearCollect"),e(t)})})},t.collectAdd=function(e){var t=e.rootState,o=e.commit,i=e.dispatch;return new a.default(function(e,p){(0,s.default)({method:"post",url:"collect/add",data:{options:{id:t.route.params.id,subject_id:t.route.params.subjectId},token:t.login.token,type:"example"}}).then(function(t){c.toast("收藏成功"),o(l.COLLECT_ADD),i("clearCollect"),e(t)})})},t.exampleClear=function(e){var t=e.commit;t(l.EXAMPLE_CLEAR)}},180:function(e,t,o){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,a=o(65),r=p(a),s=o(179),x=i(s),l=o(109),d=i(l),c={example:[]},u={Example:function(e,t){return e.example}},b=(n={},(0,r.default)(n,d.EXAMPLE,function(e,t){e.example=t}),(0,r.default)(n,d.EXAMPLE_CLEAR,function(e,t){e.example=[]}),(0,r.default)(n,d.COLLECT_ADD,function(e){e.example[0].collectTime="1"}),(0,r.default)(n,d.COLLECT_REMOVE,function(e){e.example[0].collectTime="0"}),n);t.default={mutations:b,getters:u,actions:x,state:c}},237:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var p=o(4),n=i(p),a=o(3),r=o(6),s=o(5),x=i(s),l=o(180),d=i(l),c=o(9),u=i(c);u.default.registerModule("example",(0,n.default)({},d.default)),t.default={components:{XHeader:a.XHeader,Flexbox:a.Flexbox,FlexboxItem:a.FlexboxItem,XButton:a.XButton,Confirm:a.Confirm,ViewBox:a.ViewBox,InfiniteLoading:x.default},route:{data:function(e){var t=this;this.exampleClear(),this.$nextTick(function(){t.$broadcast("$InfiniteLoading:reset")})}},methods:(0,n.default)({},(0,r.mapActions)(["getExample","exampleClear","collectRemove","collectAdd"]),{_onInfinite:function(){var e=this;this.getExample().then(function(){e.$broadcast("$InfiniteLoading:loaded"),e.$broadcast("$InfiniteLoading:complete")}).catch(function(t){e.$broadcast("$InfiniteLoading:complete")})},_correct:function(){this.$router.go("/correct/"+this.Params.subjectId+"/"+this.Params.id)},_collect:function(e){0!=Number(e)?this.collectRemove():this.collectAdd()}}),computed:(0,n.default)({},(0,r.mapGetters)(["Example","Params"]))}},377:function(e,t){e.exports=' <view-box class=breakExample> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options={showBack:true}>例题详情</x-header> </div> <div style=padding-top:46px> <div v-for="detail in Example"> <div class="weui_panel weui_panel_access exerciseDetail"> <div class=weui_panel_hd> <p style=width:25%;color:#4bb7aa>题干</p> <p style=width:50%;text-align:right @click=_collect(detail.collectTime)> <span style=color:#666><i class="icon iconfont icon-collect"></i>{{( detail.collectTime == 0 ? \'收藏\' : \'取消\' )}}</span> </p> <p style=width:25%;text-align:right @click=_correct> <span style=color:#666><i class="icon iconfont icon-error-login"></i>纠错</span> </p> </div> <div class=weui_panel_bd> <div class="weui_media_bd weui_media_box"> <p class=weui_media_desc> {{{ detail.content }}} </p> </div> <template v-if=" detail.type == 1 ? true:false"> <div class="weui_media_bd weui_media_box options"> <p class=weui_media_desc v-for="value in detail.tabs"> {{ $key }} : {{{ value }}} </p> </div> </template> </div> </div> <div class="weui_panel weui_panel_access exerciseDetail"> <div class=weui_panel_hd> <div style=color:#4bb7aa;width:25%>解析</div> </div> <div class=weui_panel_bd> <div class="weui_media_bd weui_media_box"> <p class=weui_media_desc> {{{ detail.answer }}} </p> </div> </div> </div> </div> <infinite-loading :on-infinite=_onInfinite spinner=default> <span slot=no-results style=color:#4bb7aa> <i class="icon iconfont icon-comiiszanwushuju" style=font-size:1.5rem;margin-right:.2rem></i> <p style=font-size:1rem;display:inline-block>服务器发生一点小问题~</p> </span> <span slot=no-more style=color:#4bb7aa;font-size:.8rem></span> </infinite-loading> </div> </view-box> '},442:function(e,t,o){var i,p,n={};i=o(237),p=o(377),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;p&&(a.template=p),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})}});