webpackJsonp([55,61],{248:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(4),o=a(i),s=r(3),n=r(6);t.default={components:{XHeader:s.XHeader,ViewBox:s.ViewBox,Tab:s.Tab,TabItem:s.TabItem},methods:{_into:function(e){"1"==e?this.$router.replace("../../../main/"+this.Params.chapterId+"/"+this.Params.name+"/"):"2"==e?this.$router.replace("../../../answer/"+this.Params.chapterId+"/"+this.Params.name+"/"):this.$router.replace("../../../error/"+this.Params.chapterId+"/"+this.Params.name+"/")}},computed:(0,o.default)({},(0,n.mapGetters)(["path","Params"]),{isChapter:function(){return this.path.indexOf("exercise")!=-1},isAnswer:function(){return this.path.indexOf("answer")!=-1},isError:function(){return this.path.indexOf("error")!=-1}})}},388:function(e,t){e.exports=' <view-box class=workbookStuSelect> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}"> {{Params.name}} <a slot=right @click=_changeSub()>练习册</a> </x-header> <tab active-color=#4bb7aa> <tab-item :selected=isExercise @click=_into(1)>记错题</tab-item> <tab-item :selected=isAnswer @click=_into(2)>查答案</tab-item> <tab-item :selected=isError @click=_into(3)>错题本</tab-item> </tab> </div> <div style=padding-top:90px> <router-view keep-alive></router-view> </div> </view-box> '},453:function(e,t,r){var a,i,o={};a=r(248),i=r(388),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(o).forEach(function(e){var t=o[e];s.computed[e]=function(){return t}})}});