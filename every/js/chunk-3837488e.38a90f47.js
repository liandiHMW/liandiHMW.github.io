(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3837488e"],{"07a6":function(t,a,e){t.exports=e.p+"img/login.a4c656a9.png"},"4b41":function(t,a,e){"use strict";var s=e("779a"),n=e.n(s);n.a},"779a":function(t,a,e){},"89d2":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sy_dv"},[t._m(0),e("div",{staticClass:"sy_input"},[e("van-form",[e("van-field",{class:1==t.show?"van-field":"shi",attrs:{name:"手机号",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号"}]},on:{click:function(a){return t.gao(1)}},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("van-field",{class:2==t.show?"van-field":"shi",attrs:{type:"password",name:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},on:{click:function(a){return t.gao(2)}},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",{staticClass:"sy_zhao"},[e("span",{on:{click:t.zhao}},[t._v("找回密码")]),e("span",{on:{click:t.zhuce}},[t._v("注册/验证码登录")])]),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"","native-type":"submit"},on:{click:t.onLogin}},[t._v(" 登录 ")])],1)],1)],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sy_img"},[s("img",{attrs:{src:e("07a6"),alt:""}})])}],o={data:function(){return{username:"",password:"",type:1,num:0,show:0}},methods:{onLogin:function(){var t=this;this.$Net.login({mobile:this.username,password:this.password,type:this.type}).then((function(a){var e=a.data.data.remember_token,s=a.data.data.mobile,n=a.data.data.sex,o=a.data.data.id;localStorage.setItem("id",o),localStorage.setItem("token",e),localStorage.setItem("mobile",s),localStorage.setItem("sex",n),console.log(o),t.$router.push({path:"/mime"})})).catch((function(t){console.log(t),alert("登录失败")}))},gao:function(t){this.show=t},zhao:function(){this.$router.push({path:"/mima"})},zhuce:function(){this.$router.push({path:"/zhu"})}},mounted:function(){}},i=o,r=(e("4b41"),e("2877")),c=Object(r["a"])(i,s,n,!1,null,"436123ac",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3837488e.38a90f47.js.map