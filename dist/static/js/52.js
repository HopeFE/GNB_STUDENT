webpackJsonp([52,61],{268:function(e,t,o){"use strict";function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(4),p=r(n),a=o(3),s=o(7),u=d(s),i=o(6);t.default={components:{XHeader:a.XHeader,XInput:a.XInput,Group:a.Group,XButton:a.XButton},data:function(){return{oldPwd:"",newPwd:"",repeatPwd:""}},methods:(0,p.default)({},(0,i.mapActions)(["updatePwd"]),{_complete:function(){var e=this;this.oldPwd==this.newPwd?u.toast("不可与旧密码一致"):this.newPwd==this.repeatPwd?this.updatePwd({oldPwd:this.oldPwd,pwd:this.newPwd}).then(function(){u.toast("修改成功"),setTimeout(function(){try{plus.runtime.restart()}catch(t){e.$router.go("/login")}},500)}):u.toast("两次密码输入不一致")}}),computed:{disable:function(){return!(this.$refs.oldpwd.valid&&this.$refs.newpwd.valid&&this.$refs.repeatpwd.valid)}}}},406:function(e,t){e.exports=' <div class=resetPwd> <x-header :left-options="{showBack: true}">修改密码 <a slot=right @click=_complete v-show="newPwd && repeatPwd && oldPwd">完成</a> </x-header> <group> <x-input type=password name=oldPwd placeholder=请输入旧密码 keyboard=text :value.sync=oldPwd v-ref:oldpwd :min=6 :max=18></x-input> <x-input type=password name=newPwd placeholder=新密码6位字母或符号组合 keyboard=text :value.sync=newPwd v-ref:newpwd :min=6 :max=18></x-input> <x-input type=password name=repeatPwd placeholder=请再次输入新密码 keyboard=text :value.sync=repeatPwd v-ref:repeatpwd :equal-with=newPwd></x-input> </group> </div> '},471:function(e,t,o){var d,r,n={};d=o(268),r=o(406),e.exports=d||{},e.exports.__esModule&&(e.exports=e.exports.default);var p="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(p.template=r),p.computed||(p.computed={}),Object.keys(n).forEach(function(e){var t=n[e];p.computed[e]=function(){return t}})}});