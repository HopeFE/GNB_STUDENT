webpackJsonp([67],{"7kOl":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),o=n.n(s),a=n("ABCa"),r=n("1sNz"),i=n("jOlP"),c=n("NYxO"),l={name:"correct",components:{XHeader:a.a,ViewBox:r.a,Spinner:i.a},computed:o()({},Object(c.mapGetters)(["messageCorrectList"])),data:function(){return{loading:!0}},methods:o()({},Object(c.mapActions)(["getMessageCorrect","clearMessage"])),beforeRouteEnter:function(e,t,n){n(function(e){e.getMessageCorrect().then(function(){e.loading=!1})})},beforeRouteLeave:function(e,t,n){this.clearMessage(),this.loading=!0,n()}},d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view-box",{ref:"messageCorrect",attrs:{"body-padding-top":"46px"}},[n("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"纠错通知"}},slot:"header"}),e._v(" "),e.loading?e._e():n("div",{staticClass:"messageSection"},e._l(e.messageCorrectList,function(t,s){return n("section",{key:s},[n("h3",[e._v(e._s(e._f("ymd")(t.time)))]),e._v(" "),n("article",[e._v(e._s(t.content))])])})),e._v(" "),n("div",{staticStyle:{"text-align":"center"}},[e.loading?n("spinner",{attrs:{type:"dots"}}):0==e.messageCorrectList.length?n("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4cc0be"}},[e._v("暂无纠错消息~")]):e._e()],1)],1)},u=[],p={render:d,staticRenderFns:u},g=p,f=n("VU/8"),_=f(l,g,!1,null,null,null);t.default=_.exports}});