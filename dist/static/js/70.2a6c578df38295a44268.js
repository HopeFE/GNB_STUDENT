webpackJsonp([70],{536:function(e,t,n){var o=n(57)(n(827),n(967),null,null);e.exports=o.exports},768:function(e,t,n){"use strict";var o=n(128),a=n.n(o),u=n(51),r=n(195),i={updatePwd:function(e,t){var o=e.rootState,i=e.commit;return u.default.$vux.loading.show({text:"请稍候"}),new a.a(function(e,a){n.i(r.a)({method:"post",url:"pwd/update",data:{oldPwd:t.oldPwd,pwd:t.pwd,token:o.common.user.token}}).then(function(t){u.default.$vux.loading.hide(),i("PWD_UPDATE"),e(t)}).catch(function(e){u.default.$vux.loading.hide(),a(e)})})}};t.a={actions:i}},827:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(192),a=n.n(o),u=n(768),r=n(84);t.default={name:"settings",beforeCreate:function(){r.a.registerModule("settings",a()({},u.a))}}},967:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("router-view")],1)},staticRenderFns:[]}}});