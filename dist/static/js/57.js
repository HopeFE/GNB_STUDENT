webpackJsonp([57,61],{252:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),a=o(r),s=i(3),n=i(6);t.default={components:{XHeader:s.XHeader,ViewBox:s.ViewBox,Tab:s.Tab,TabItem:s.TabItem},methods:{_changeSub:function(){history.go(-2)},_into:function(e){"1"==e?this.$router.replace("../../../main/"+this.Params.chapterId+"/"+this.Params.name+"/"):"2"==e?this.$router.replace("../../../answer/"+this.Params.chapterId+"/"+this.Params.name+"/"):this.$router.go("../../../../upload/"+this.Params.chapterId+"/")}},computed:(0,a.default)({},(0,n.mapGetters)(["path","Params"]),{isExercise:function(){return this.path.includes("exercise/main")},isAnswer:function(){return this.path.includes("exercise/answer")},isError:function(){return this.path.includes("exercise/error")}})}},392:function(e,t){e.exports=' <view-box class=workbookStuSelect> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}"> {{Params.name}} <a slot=right @click=_changeSub()><i class="icon iconfont icon-bianji" style=font-size:22px></i></a> </x-header> <tab active-color=#4bb7aa> <tab-item :selected=isExercise @click=_into(1)>记错题</tab-item> <tab-item :selected=isAnswer @click=_into(2)>查答案</tab-item> <tab-item :selected=isError @click=_into(3)>错题本</tab-item> </tab> </div> <div style=padding-top:90px> <router-view keep-alive></router-view> </div> </view-box> '},457:function(e,t,i){var o,r,a={};o=i(252),r=i(392),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(s.template=r),s.computed||(s.computed={}),Object.keys(a).forEach(function(e){var t=a[e];s.computed[e]=function(){return t}})}});