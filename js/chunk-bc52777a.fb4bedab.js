(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc52777a"],{"19b9":function(t,s,a){"use strict";a("ee9b")},dca0:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"password"},[a("div",{staticClass:"passTop"},[a("a",{staticClass:"passback",on:{click:function(s){return t.goback()}}},[t._m(0)]),a("span",[t._v("密码找回")]),a("div",{staticClass:"spaceBox"})]),a("div",{staticClass:"passNav"},[a("span",{class:{passwdActive:1===t.show},attrs:{to:"/PassWord"},on:{click:function(s){return t.checkHandler(1)}}},[t._v("手机验证")]),a("span",{class:{passwdActive:2===t.show},attrs:{to:"/"},on:{click:function(s){return t.checkHandler(2)}}},[t._v("邮箱验证")])]),a("div",{staticClass:"passContent"},[t._m(1),1===t.show?a("div",{staticClass:"passItem"},[t._m(2)]):a("div",{staticClass:"passItem"},[t._m(3)]),a("div",{staticClass:"linkBtn"},[a("router-link",{attrs:{to:"/Login"}},[t._v("下一步")])],1)])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"backbox"},[a("div",{staticClass:"back"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"passItem"},[a("div",{staticClass:"itembottom"},[a("p",[t._v("用户名")]),a("input",{attrs:{type:"text",placeholder:"请输入用户名"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"itembottom"},[a("p",[t._v("手机号码")]),a("input",{attrs:{type:"text",placeholder:"请输入手机号"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"itembottom"},[a("p",[t._v("电子邮箱")]),a("input",{attrs:{type:"text",placeholder:"请输入邮箱地址"}})])}],i={data:function(){return{show:1}},methods:{goback:function(){this.$router.back(-1)},checkHandler:function(t){this.show=t}}},n=i,o=(a("19b9"),a("2877")),r=Object(o["a"])(n,e,c,!1,null,"0b5748a6",null);s["default"]=r.exports},ee9b:function(t,s,a){}}]);