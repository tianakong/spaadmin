webpackJsonp([18],{o0Yu:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("3cXf"),l=a.n(s),e={name:"forms",mounted:function(){layui.use(["form","layedit","laydate"],function(){var t=layui.form,i=layui.layer,a=layui.layedit,s=layui.laydate;s.render({elem:"#date"}),s.render({elem:"#date1"});var e=a.build("LAY_demo_editor");t.verify({title:function(t){if(t.length<5)return"标题至少得5个字符啊"},pass:[/(.+){6,12}$/,"密码必须6到12位"],content:function(t){a.sync(e)}}),t.on("switch(switchTest)",function(t){i.msg("开关checked："+(this.checked?"true":"false"),{offset:"6px"}),i.tips("温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF",t.othis)}),t.on("submit(demo1)",function(t){return i.alert(l()(t.field),{title:"最终的提交信息"}),!1}),t.render()})}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("blockquote",{staticClass:"layui-elem-quote layui-text"},[this._v("\n    鉴于小伙伴的普遍反馈，先温馨提醒两个常见“问题”：1. "),i("a",{attrs:{href:"/doc/base/faq.html#form",target:"_blank"}},[this._v("为什么select/checkbox/radio没显示？")]),this._v(" 2.\n    "),i("a",{attrs:{href:"/doc/modules/form.html#render",target:"_blank"}},[this._v("动态添加的表单元素如何更新？")])]),this._v(" "),i("fieldset",{staticClass:"layui-elem-field layui-field-title",staticStyle:{"margin-top":"20px"}},[i("legend",[this._v("表单集合演示")])]),this._v(" "),i("form",{staticClass:"layui-form",attrs:{action:""}},[i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("单行输入框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"title","lay-verify":"title",autocomplete:"off",placeholder:"请输入标题"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("验证必填项")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"username","lay-verify":"required",placeholder:"请输入",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("验证手机")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"tel",name:"phone","lay-verify":"required|phone",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("验证邮箱")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"email","lay-verify":"email",autocomplete:"off"}})])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("多规则验证")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"number","lay-verify":"required|number",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("验证日期")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"date",id:"date","lay-verify":"date",placeholder:"yyyy-MM-dd",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("验证链接")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"tel",name:"url","lay-verify":"url",autocomplete:"off"}})])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("验证身份证")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"identity","lay-verify":"identity",placeholder:"",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("自定义验证")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"password",name:"password","lay-verify":"pass",placeholder:"请输入密码",autocomplete:"off"}})]),this._v(" "),i("div",{staticClass:"layui-form-mid layui-word-aux"},[this._v("请填写6到12位密码")])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("范围")]),this._v(" "),i("div",{staticClass:"layui-input-inline",staticStyle:{width:"100px"}},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"price_min",placeholder:"￥",autocomplete:"off"}})]),this._v(" "),i("div",{staticClass:"layui-form-mid"},[this._v("-")]),this._v(" "),i("div",{staticClass:"layui-input-inline",staticStyle:{width:"100px"}},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"price_max",placeholder:"￥",autocomplete:"off"}})])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("单行选择框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("select",{attrs:{name:"interest","lay-filter":"aihao"}},[i("option",{attrs:{value:""}}),this._v(" "),i("option",{attrs:{value:"0"}},[this._v("写作")]),this._v(" "),i("option",{attrs:{value:"1",selected:""}},[this._v("阅读")]),this._v(" "),i("option",{attrs:{value:"2"}},[this._v("游戏")]),this._v(" "),i("option",{attrs:{value:"3"}},[this._v("音乐")]),this._v(" "),i("option",{attrs:{value:"4"}},[this._v("旅行")])])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("分组选择框")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz"}},[i("option",{attrs:{value:""}},[this._v("请选择问题")]),this._v(" "),i("optgroup",{attrs:{label:"城市记忆"}},[i("option",{attrs:{value:"你工作的第一个城市"}},[this._v("你工作的第一个城市")])]),this._v(" "),i("optgroup",{attrs:{label:"学生时代"}},[i("option",{attrs:{value:"你的工号"}},[this._v("你的工号")]),this._v(" "),i("option",{attrs:{value:"你最喜欢的老师"}},[this._v("你最喜欢的老师")])])])])]),this._v(" "),i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("搜索选择框")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"modules","lay-verify":"required","lay-search":""}},[i("option",{attrs:{value:""}},[this._v("直接选择或搜索选择")]),this._v(" "),i("option",{attrs:{value:"1"}},[this._v("layer")]),this._v(" "),i("option",{attrs:{value:"2"}},[this._v("form")]),this._v(" "),i("option",{attrs:{value:"3"}},[this._v("layim")]),this._v(" "),i("option",{attrs:{value:"4"}},[this._v("element")]),this._v(" "),i("option",{attrs:{value:"5"}},[this._v("laytpl")]),this._v(" "),i("option",{attrs:{value:"6"}},[this._v("upload")]),this._v(" "),i("option",{attrs:{value:"7"}},[this._v("laydate")]),this._v(" "),i("option",{attrs:{value:"8"}},[this._v("laypage")]),this._v(" "),i("option",{attrs:{value:"9"}},[this._v("flow")]),this._v(" "),i("option",{attrs:{value:"10"}},[this._v("util")]),this._v(" "),i("option",{attrs:{value:"11"}},[this._v("code")]),this._v(" "),i("option",{attrs:{value:"12"}},[this._v("tree")]),this._v(" "),i("option",{attrs:{value:"13"}},[this._v("layedit")]),this._v(" "),i("option",{attrs:{value:"14"}},[this._v("nav")]),this._v(" "),i("option",{attrs:{value:"15"}},[this._v("tab")]),this._v(" "),i("option",{attrs:{value:"16"}},[this._v("table")]),this._v(" "),i("option",{attrs:{value:"17"}},[this._v("select")]),this._v(" "),i("option",{attrs:{value:"18"}},[this._v("checkbox")]),this._v(" "),i("option",{attrs:{value:"19"}},[this._v("switch")]),this._v(" "),i("option",{attrs:{value:"20"}},[this._v("radio")])])])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("联动选择框")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz1"}},[i("option",{attrs:{value:""}},[this._v("请选择省")]),this._v(" "),i("option",{attrs:{value:"浙江",selected:""}},[this._v("浙江省")]),this._v(" "),i("option",{attrs:{value:"你的工号"}},[this._v("江西省")]),this._v(" "),i("option",{attrs:{value:"你最喜欢的老师"}},[this._v("福建省")])])]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz2"}},[i("option",{attrs:{value:""}},[this._v("请选择市")]),this._v(" "),i("option",{attrs:{value:"杭州"}},[this._v("杭州")]),this._v(" "),i("option",{attrs:{value:"宁波",disabled:""}},[this._v("宁波")]),this._v(" "),i("option",{attrs:{value:"温州"}},[this._v("温州")]),this._v(" "),i("option",{attrs:{value:"温州"}},[this._v("台州")]),this._v(" "),i("option",{attrs:{value:"温州"}},[this._v("绍兴")])])]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz3"}},[i("option",{attrs:{value:""}},[this._v("请选择县/区")]),this._v(" "),i("option",{attrs:{value:"西湖区"}},[this._v("西湖区")]),this._v(" "),i("option",{attrs:{value:"余杭区"}},[this._v("余杭区")]),this._v(" "),i("option",{attrs:{value:"拱墅区"}},[this._v("临安市")])])]),this._v(" "),i("div",{staticClass:"layui-form-mid layui-word-aux"},[this._v("此处只是演示联动排版，并未做联动交互")])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("复选框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"checkbox",name:"like[write]",title:"写作"}}),this._v(" "),i("input",{attrs:{type:"checkbox",name:"like[read]",title:"阅读",checked:""}}),this._v(" "),i("input",{attrs:{type:"checkbox",name:"like[game]",title:"游戏"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item",attrs:{pane:""}},[i("label",{staticClass:"layui-form-label"},[this._v("原始复选框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"checkbox",name:"like1[write]","lay-skin":"primary",title:"写作",checked:""}}),this._v(" "),i("input",{attrs:{type:"checkbox",name:"like1[read]","lay-skin":"primary",title:"阅读"}}),this._v(" "),i("input",{attrs:{type:"checkbox",name:"like1[game]","lay-skin":"primary",title:"游戏",disabled:""}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("开关-默认关")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"checkbox",name:"close","lay-skin":"switch","lay-text":"ON|OFF"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("开关-默认开")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"checkbox",checked:"",name:"open","lay-skin":"switch","lay-filter":"switchTest","lay-text":"ON|OFF"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("单选框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"radio",name:"sex",value:"男",title:"男",checked:""}}),this._v(" "),i("input",{attrs:{type:"radio",name:"sex",value:"女",title:"女"}}),this._v(" "),i("input",{attrs:{type:"radio",name:"sex",value:"禁",title:"禁用",disabled:""}})])]),this._v(" "),i("div",{staticClass:"layui-form-item layui-form-text"},[i("label",{staticClass:"layui-form-label"},[this._v("普通文本域")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("textarea",{staticClass:"layui-textarea",attrs:{placeholder:"请输入内容"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-input-block"},[i("button",{staticClass:"layui-btn",attrs:{"lay-submit":"","lay-filter":"demo1"}},[this._v("立即提交")]),this._v(" "),i("button",{staticClass:"layui-btn layui-btn-primary",attrs:{type:"reset"}},[this._v("重置")])])])]),this._v(" "),i("fieldset",{staticClass:"layui-elem-field layui-field-title",staticStyle:{"margin-top":"50px"}},[i("legend",[this._v("方框风格的表单集合")])]),this._v(" "),i("form",{staticClass:"layui-form layui-form-pane",attrs:{action:""}},[i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("长输入框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"title",autocomplete:"off",placeholder:"请输入标题"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("短输入框")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"username","lay-verify":"required",placeholder:"请输入",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("日期选择")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"date",id:"date1",autocomplete:"off"}})])]),this._v(" "),i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("行内表单")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"number",autocomplete:"off"}})])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("密码")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("input",{staticClass:"layui-input",attrs:{type:"password",name:"password",placeholder:"请输入密码",autocomplete:"off"}})]),this._v(" "),i("div",{staticClass:"layui-form-mid layui-word-aux"},[this._v("请务必填写用户名")])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("div",{staticClass:"layui-inline"},[i("label",{staticClass:"layui-form-label"},[this._v("范围")]),this._v(" "),i("div",{staticClass:"layui-input-inline",staticStyle:{width:"100px"}},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"price_min",placeholder:"￥",autocomplete:"off"}})]),this._v(" "),i("div",{staticClass:"layui-form-mid"},[this._v("-")]),this._v(" "),i("div",{staticClass:"layui-input-inline",staticStyle:{width:"100px"}},[i("input",{staticClass:"layui-input",attrs:{type:"text",name:"price_max",placeholder:"￥",autocomplete:"off"}})])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("单行选择框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("select",{attrs:{name:"interest","lay-filter":"aihao"}},[i("option",{attrs:{value:""}}),this._v(" "),i("option",{attrs:{value:"0"}},[this._v("写作")]),this._v(" "),i("option",{attrs:{value:"1",selected:""}},[this._v("阅读")]),this._v(" "),i("option",{attrs:{value:"2"}},[this._v("游戏")]),this._v(" "),i("option",{attrs:{value:"3"}},[this._v("音乐")]),this._v(" "),i("option",{attrs:{value:"4"}},[this._v("旅行")])])])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("label",{staticClass:"layui-form-label"},[this._v("行内选择框")]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz1"}},[i("option",{attrs:{value:""}},[this._v("请选择省")]),this._v(" "),i("option",{attrs:{value:"浙江",selected:""}},[this._v("浙江省")]),this._v(" "),i("option",{attrs:{value:"你的工号"}},[this._v("江西省")]),this._v(" "),i("option",{attrs:{value:"你最喜欢的老师"}},[this._v("福建省")])])]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz2"}},[i("option",{attrs:{value:""}},[this._v("请选择市")]),this._v(" "),i("option",{attrs:{value:"杭州"}},[this._v("杭州")]),this._v(" "),i("option",{attrs:{value:"宁波",disabled:""}},[this._v("宁波")]),this._v(" "),i("option",{attrs:{value:"温州"}},[this._v("温州")]),this._v(" "),i("option",{attrs:{value:"温州"}},[this._v("台州")]),this._v(" "),i("option",{attrs:{value:"温州"}},[this._v("绍兴")])])]),this._v(" "),i("div",{staticClass:"layui-input-inline"},[i("select",{attrs:{name:"quiz3"}},[i("option",{attrs:{value:""}},[this._v("请选择县/区")]),this._v(" "),i("option",{attrs:{value:"西湖区"}},[this._v("西湖区")]),this._v(" "),i("option",{attrs:{value:"余杭区"}},[this._v("余杭区")]),this._v(" "),i("option",{attrs:{value:"拱墅区"}},[this._v("临安市")])])])]),this._v(" "),i("div",{staticClass:"layui-form-item",attrs:{pane:""}},[i("label",{staticClass:"layui-form-label"},[this._v("开关-开")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"checkbox",checked:"",name:"open","lay-skin":"switch","lay-filter":"switchTest",title:"开关"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item",attrs:{pane:""}},[i("label",{staticClass:"layui-form-label"},[this._v("单选框")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("input",{attrs:{type:"radio",name:"sex",value:"男",title:"男",checked:""}}),this._v(" "),i("input",{attrs:{type:"radio",name:"sex",value:"女",title:"女"}}),this._v(" "),i("input",{attrs:{type:"radio",name:"sex",value:"禁",title:"禁用",disabled:""}})])]),this._v(" "),i("div",{staticClass:"layui-form-item layui-form-text"},[i("label",{staticClass:"layui-form-label"},[this._v("文本域")]),this._v(" "),i("div",{staticClass:"layui-input-block"},[i("textarea",{staticClass:"layui-textarea",attrs:{placeholder:"请输入内容"}})])]),this._v(" "),i("div",{staticClass:"layui-form-item"},[i("button",{staticClass:"layui-btn",attrs:{"lay-submit":"","lay-filter":"demo2"}},[this._v("跳转式提交")])])])])}]},u=a("Mw9A")(e,v,!1,null,null,null);i.default=u.exports}});