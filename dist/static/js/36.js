webpackJsonp([36,62],{472:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.postCorrect=void 0;var n=r(72),i=c(n),u=r(74),a=c(u),s=r(9),l=o(s);t.postCorrect=function(e,t){var r=e.rootState;e.commit;return new i.default(function(e,o){(0,a.default)({method:"post",url:"correct",data:{token:r.login.token,id:r.route.params.id,content:t.content,type:t.type}}).then(function(t){l.toast("纠错成功"),e(t)})})}},473:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var c=r(472),n=o(c);t.default={actions:n}},532:function(e,t,r){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=c(n),u=r(4),a=r(7),s=r(9),l=o(s),d=r(71),p=c(d),f=r(473),h=c(f);p.default.registerModule("correct",(0,i.default)({},h.default)),t.default={components:{XHeader:u.XHeader,XButton:u.XButton,Checker:u.Checker,CheckerItem:u.CheckerItem,XTextarea:u.XTextarea,Group:u.Group},methods:(0,i.default)({},(0,a.mapActions)(["postCorrect"]),{_commit:function(){var e=this;if(!this.type[0]&&"0"!=this.type[0])return void l.toast("请选择纠错类型");if(this.type.indexOf(4)>=0&&""==this.content)return void l.toast("请填写纠错内容");var t={content:this.content,type:this.type};this.postCorrect(t).then(function(){e.content="",e.type=[],history.back()})}}),data:function(){return{type:[],content:""}},computed:{id:function(){return this.$store.state.route.params.id},subejectId:function(){return this.$store.state.route.params.subjectId}}}},671:function(e,t){e.exports=' <div class="correctDetail vux-scroller-header-box"> <div style=height:46px> <x-header :left-options="{showBack: true}" style=position:fixed;left:0;top:0;width:100% class=vux-scroller-header>我要纠错 <a slot=right @click=_commit>提交</a> </x-header> </div> <div> <group title=纠错类型> <checker style="padding:.25rem .75rem 1rem" :value.sync=type :max=4 type=checkbox default-item-class=select-item selected-item-class=select-item-selected> <checker-item :value=0>答案错误</checker-item> <checker-item :value=1>解析不全</checker-item> <checker-item :value=2>题目超纲</checker-item> <checker-item :value=3>题型太老</checker-item> <checker-item :value=4>其他</checker-item> </checker> </group> <group title=纠错内容> <x-textarea :max=200 :rows=6 :value.sync=content placeholder=请简单描述纠错内容></x-textarea> </group> </div> </div> '},736:function(e,t,r){var o,c,n={};o=r(532),c=r(671),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;c&&(i.template=c),i.computed||(i.computed={}),Object.keys(n).forEach(function(e){var t=n[e];i.computed[e]=function(){return t}})}});