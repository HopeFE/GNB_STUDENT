webpackJsonp([46],{pC4q:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Dd8w"),i=o.n(r),n=o("D8a4"),a=o("ABCa"),s=o("1sNz"),l=o("rHil"),c=o("1DHf"),d=o("jOlP"),u=o("NYxO"),k={name:"chapter",components:{Badge:n.a,XHeader:a.a,ViewBox:s.a,Group:l.a,Cell:c.a,Spinner:d.a},data:function(){return{loading:!0}},methods:i()({},Object(u.mapActions)(["getWorkbookChapter","setWorkbookChapterScroll","workbookChapterClear"]),{_getData:function(){var t=this;this.loading=!0,this.getWorkbookChapter().then(function(){t.loading=!1})},_getColor:function(t){return"true"===t.isUsed.toString()?"color:#FEAA85":"false"===t.isLink.toString()?"color:#4cc0be":void 0},_intoDetail:function(t){"true"===t.isUsed.toString()?this.$router.push({name:"workbook_exercise_error",params:{id:t.id,name:t.name}}):"true"===t.isLink.toString()&&this.$router.push({name:"workbook_exercise_answer",params:{id:t.id,name:t.name}})}}),activated:function(){var t=this;this.workbookChapter.isReset?(this.loading=!0,this.getWorkbookChapter().then(function(){t.loading=!1}).then(function(){t.$nextTick(function(){t.$refs.viewBoxBody.scrollTo(t.workbookChapter.scroll)})})):this.$refs.viewBoxBody.scrollTo(this.workbookChapter.scroll)},beforeRouteEnter:function(t,e,o){"workbook_math"===e.name||"workbook_physics"===e.name||"workbook_chemistry"===e.name?o(function(t){t.workbookChapterClear(),t._getData()}):o()},beforeRouteLeave:function(t,e,o){this.setWorkbookChapterScroll(this.$refs.viewBoxBody.getScrollTop()),o()},computed:i()({},Object(u.mapGetters)(["workbookChapter","Route"]),{chapter:function(){return this.workbookChapter.list[0]}})},p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{ref:"viewBoxBody",attrs:{"body-padding-top":"46px"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:t.Route.params.name}},slot:"header"}),t._v(" "),t.loading?t._e():o("div",[t._l(t.chapter,function(e){return t._l(e,function(e,r){return o("group",{key:r,staticStyle:{"margin-bottom":".5rem"},attrs:{gutter:"0"}},[o("cell",{style:t._getColor(e),attrs:{title:e.name},nativeOn:{click:function(o){t._intoDetail(e)}}},[o("div",{staticStyle:{display:"inline-block!important"}},[e.isChecked?o("badge",{attrs:{text:"已批阅"}}):t._e()],1)]),t._v(" "),t._l(e.b,function(e){return[o("cell",{key:e.id,style:t._getColor(e),attrs:{title:e.name},nativeOn:{click:function(o){t._intoDetail(e)}}},[o("div",{staticStyle:{display:"inline-block!important"}},[e.isChecked?o("badge",{attrs:{text:"已批阅"}}):t._e()],1)])]})],2)})})],2),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[t.loading?o("spinner",{attrs:{type:"dots"}}):t._e()],1)],1)},h=[],b={render:p,staticRenderFns:h},f=b,m=o("VU/8"),_=m(k,f,!1,null,null,null);e.default=_.exports}});