(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acf61998"],{3415:function(t,e,r){},aa01:function(t,e,r){"use strict";r("3415")},e49c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-layout-wrapper",attrs:{id:"userLayout"}},[r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"main"},[r("el-form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.rules},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm.apply(null,arguments)}}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[r("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"suffix"},slot:"suffix"})])],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"lock"===t.lock?"password":"text",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}},[r("i",{class:"el-input__icon el-icon-"+t.lock,attrs:{slot:"suffix"},on:{click:t.changeLock},slot:"suffix"})])],1),r("el-form-item",{staticStyle:{position:"relative"}},[r("el-input",{staticStyle:{width:"60%"},attrs:{name:"logVerify",placeholder:"请输入验证码"},model:{value:t.loginForm.captcha,callback:function(e){t.$set(t.loginForm,"captcha",e)},expression:"loginForm.captcha"}}),r("div",{staticClass:"vPic"},[t.picPath?r("img",{attrs:{src:t.picPath,width:"100%",height:"100%",alt:"请输入验证码"},on:{click:function(e){return t.loginVefify()}}}):t._e()])],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("登 录 ")])],1)],1)],1),r("div",{staticClass:"footer"},[r("div",{staticClass:"copyright"},[t._v("Copyright © "+t._s(t.curYear)+" Laibo Biotechnology Co.,Ltd")])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top"},[r("div",{staticClass:"desc"}),r("div",{staticClass:"header"},[r("a",{attrs:{href:"/"}},[r("span",{staticClass:"title"},[t._v("莱博云办公系统")])])])])}],i=r("1da1"),o=r("5530"),s=(r("96cf"),r("5880")),c=r("c24f"),l={name:"Login",data:function(){var t=function(t,e,r){if(e.length<1)return r(new Error("请输入用户名"));r()},e=function(t,e,r){if(e.length<1)return r(new Error("请输入密码"));r()};return{curYear:0,lock:"lock",loginForm:{username:"",password:"",captcha:"",captchaId:""},rules:{username:[{validator:t,trigger:"blur"}],password:[{validator:e,trigger:"blur"}]},logVerify:"",picPath:""}},created:function(){this.loginVefify(),this.curYear=(new Date).getFullYear()},methods:Object(o["a"])(Object(o["a"])({},Object(s["mapActions"])("user",["LoginIn"])),{},{login:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.LoginIn(t.loginForm);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},submitForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.loginForm.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,t.login();case 3:n=e.sent,n||t.loginVefify(),e.next=10;break;case 7:return t.$message({type:"error",message:"请正确填写登录信息",showClose:!0}),t.loginVefify(),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},changeLock:function(){"lock"===this.lock?this.lock="unlock":this.lock="lock"},loginVefify:function(){var t=this;Object(c["captcha"])({}).then((function(e){t.picPath=e.data.picPath,t.loginForm.captchaId=e.data.captchaId}))}})},u=l,p=(r("aa01"),r("2877")),f=Object(p["a"])(u,n,a,!1,null,"63b9b346",null);e["default"]=f.exports}}]);