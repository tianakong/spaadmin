webpackJsonp([9],{WlRf:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"tables",mounted:function(){layui.use("table",function(){layui.table.render({elem:"#demo",cellMinWidth:80,url:"/data/user.json",page:!0,cols:[[{field:"id",title:"ID",sort:!0,fixed:"left"},{field:"username",title:"用户名"},{field:"sex",title:"性别",sort:!0},{field:"city",title:"城市"},{field:"sign",title:"签名"},{field:"experience",title:"积分",sort:!0},{field:"score",title:"评分",sort:!0},{field:"classify",title:"职业"},{field:"wealth",title:"财富",sort:!0}]]})})}},s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("table",{attrs:{id:"demo","lay-filter":"test"}})])}]},n=l("Mw9A")(i,s,!1,null,null,null);t.default=n.exports}});