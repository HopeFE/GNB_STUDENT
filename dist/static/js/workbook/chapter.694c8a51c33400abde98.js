webpackJsonp([45],{pC4q:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Dd8w"),n=o.n(r),i=o("D8a4"),a=o("ABCa"),s=o("1sNz"),l=o("rHil"),c=o("1DHf"),u=o("jOlP"),k=o("NYxO"),d={name:"chapter",components:{Badge:i.a,XHeader:a.a,ViewBox:s.a,Group:l.a,Cell:c.a,Spinner:u.a},data:function(){return{loading:!0}},methods:n()({},Object(k.mapActions)(["getWorkbookChapter","setWorkbookChapterScroll","workbookChapterClear"]),{_getData:function(){var t=this;this.loading=!0,this.getWorkbookChapter().then(function(){t.loading=!1})},_getColor:function(t){return"true"===t.isUsed.toString()?"color:#FEAA85":"false"===t.isLink.toString()?"color:#4cc0be":void 0}}),activated:function(){var t=this;this.workbookChapter.isReset?(this.loading=!0,this.getWorkbookChapter().then(function(){t.loading=!1}).then(function(){t.$nextTick(function(){t.$refs.viewBoxBody.scrollTo(t.workbookChapter.scroll)})})):this.$refs.viewBoxBody.scrollTo(this.workbookChapter.scroll)},beforeRouteEnter:function(t,e,o){"workbook_math"===e.name||"workbook_physics"===e.name||"workbook_chemistry"===e.name?o(function(t){t.workbookChapterClear(),t._getData()}):o()},beforeRouteLeave:function(t,e,o){this.setWorkbookChapterScroll(this.$refs.viewBoxBody.getScrollTop()),o()},computed:n()({},Object(k.mapGetters)(["workbookChapter","Route"]),{chapter:function(){return this.workbookChapter.list[0]}})},p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{ref:"viewBoxBody",attrs:{"body-padding-top":"46px"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:t.Route.params.name}},slot:"header"}),t._v(" "),t.loading?t._e():o("div",[t._l(t.chapter,function(e){return t._l(e,function(e,r){return o("group",{key:r,staticStyle:{"margin-bottom":".5rem"},attrs:{gutter:"0"}},[o("cell",{style:t._getColor(e),attrs:{title:e.name},nativeOn:{click:function(o){"true"===e.isLink.toString()&&t.$router.push({name:"workbook_exercise_result",params:{id:e.id,name:e.name}})}}}),t._v(" "),t._l(e.b,function(e){return[o("cell",{key:e.id,style:t._getColor(e),attrs:{title:e.name},nativeOn:{click:function(o){"true"===e.isLink.toString()&&t.$router.push({name:"workbook_exercise_result",params:{id:e.id,name:e.name}})}}},[o("div",{staticStyle:{display:"inline-block!important"}},[e.isChecked?o("badge",{attrs:{text:"已批阅"}}):t._e()],1)])]})],2)})})],2),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[t.loading?o("spinner",{attrs:{type:"dots"}}):t._e()],1)],1)},h=[],b={render:p,staticRenderFns:h},f=b,m=o("VU/8"),g=m(d,f,!1,null,null,null);e.default=g.exports}});