webpackJsonp([23],{"4Gpc":function(e,t,i){"use strict";function s(e){i("jE09")}Object.defineProperty(t,"__esModule",{value:!0});var o=i("Dd8w"),r=i.n(o),n=i("UIMx"),a=i("dgEa"),c=i("rHil"),l=i("1DHf"),d=i("2sLL"),u=i("63CM"),p=i.n(u),f=i("NYxO"),b={name:"answer",components:{Tabbar:n.a,TabbarItem:a.a,Group:c.a,Cell:l.a,XButton:d.a},directives:{TransferDom:p.a},computed:r()({},Object(f.mapGetters)(["workbookExercise","Route"]),{exercise:function(){return this.workbookExercise.list.a},isUsed:function(){return this.workbookExercise.list.isUsed}}),data:function(){return{answerListId:[],answerListAnswer:[],workbookType:""}},methods:r()({},Object(f.mapActions)(["getWorkbookExercise","workbookExerciseClear","WorkbookExercisePost","setWorkbookExersciseScroll","workbookExAnswerChange"]),{_changeAnswer:function(e,t,i){this.isUsed||(this.workbookType=i,this.workbookExAnswerChange({pid:e,id:t,type:i}))},_getAnswerList:function(){if(this.answerListId=[],this.answerListAnswer=[],this.exercise)if("1"===this.workbookType)for(var e=this.exercise[0].b,t=0;t<e.length;t++)for(var i=0;i<e[t].c.length;i++)this.answerListId.push(e[t].c[i].id),this.answerListAnswer.push(e[t].c[i].answer);else for(var s=this.exercise,o=0;o<s.length;o++)for(var r=0;r<s[o].b.length;r++)this.answerListId.push(s[o].b[r].id),this.answerListAnswer.push(s[o].b[r].answer)},_post:function(){var e=this;this.$vux.confirm.show({title:"是否提交练习结果",dialogTransition:"vux-fade",onConfirm:function(){e._getAnswerList(),e.WorkbookExercisePost({answerId:e.answerListId,answer:e.answerListAnswer})}})}}),activated:function(){this.$parent.$refs.viewBoxBody.scrollTop=this.workbookExercise.scroll},beforeRouteLeave:function(e,t,i){this.setWorkbookExersciseScroll(this.$parent.$refs.viewBoxBody.scrollTop),i()}},w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"wapper"},[e._l(e.exercise,function(t,s){return i("div",{key:s},["1"==t.b[0].type?e._l(t.b,function(t,o){return i("group",{key:t.id,attrs:{title:t.name}},e._l(t.c,function(t,o){return i("cell",{key:t.id,attrs:{title:t.name}},[i("p",{attrs:{slot:"default"},slot:"default"},[i("section",{staticStyle:{display:"inline-block"},on:{click:function(t){e._changeAnswer(s,o,1)}}},[t.isUpload||t.answer||!e.isUsed?e._e():i("i",{staticClass:"icon iconfont icon-camera",on:{click:function(i){e.$router.push({name:"workbook_exercise_error_upload",params:{eid:t.eid,wbeid:t.id,chapterId:e.Route.params.id}})}}}),e._v(" "),t.answer?i("i",{staticClass:"icon iconfont icon-correct",staticStyle:{color:"#4cc0be"}}):i("i",{staticClass:"icon iconfont icon-error",staticStyle:{color:"#4cc0be"}})])])])}))}):"2"==t.b[0].type?[i("group",{attrs:{title:t.name}},e._l(t.b,function(t,o){return i("cell",{key:t.id,attrs:{title:t.name}},[i("div",{attrs:{slot:"default"},slot:"default"},[i("section",{staticStyle:{display:"inline-block"}},[t.isUpload||t.answer||!e.isUsed?e._e():i("i",{staticClass:"icon iconfont icon-camera",on:{click:function(i){e.$router.push({name:"workbook_exercise_error_upload",params:{eid:t.eid,wbeid:t.id,chapterId:e.Route.params.id}})}}}),e._v(" "),t.answer?i("i",{staticClass:"icon iconfont exampleIcon icon-correct",staticStyle:{color:"#4cc0be"},on:{click:function(t){e._changeAnswer(s,o,2)}}}):i("i",{staticClass:"icon iconfont icon-error exampleIcon",staticStyle:{color:"#FF7043"},on:{click:function(t){e._changeAnswer(s,o,2)}}})])])])}))]:e._e()],2)}),e._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("tabbar",["workbook_exercise_answer"===e.$route.name?i("tabbar-item",{staticStyle:{"line-height":"42px",height:"42px"}},[i("div",{staticStyle:{"line-height":"42px",height:"42px"},attrs:{slot:"label"},slot:"label"},[e.isUsed?i("x-button",{staticStyle:{"border-radius":"0"},attrs:{type:"primary",disabled:""}},[e._v("已提交")]):i("x-button",{staticStyle:{"border-radius":"0"},attrs:{type:"primary"},nativeOn:{click:function(t){e._post(t)}}},[e._v("提交结果")])],1)]):e._e()],1)],1)],2)},h=[],k={render:w,staticRenderFns:h},x=k,m=i("VU/8"),_=s,v=m(b,x,!1,_,"data-v-33711ff4",null);t.default=v.exports},"AL/b":function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"\n.icon-camera[data-v-33711ff4]{\n  color:#4cc0be;padding-right:10px;position:relative;top:5px;\n}\n",""])},jE09:function(e,t,i){var s=i("AL/b");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("e7a4f48e",s,!0)}});