(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28aee2c1","chunk-2d21843d","chunk-2d0c4854","chunk-2d22269e"],{"0b51":function(t,e,a){},"3ad4":function(t,e,a){t.exports=a.p+"static/img/flipped-aurora.a4221a78.png"},"62e1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:12}},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("gin-vue-admin")]),s("div",[s("el-row",[s("el-col",{attrs:{span:8,offset:8}},[s("a",{attrs:{href:"https://github.com/flipped-aurora/gin-vue-admin"}},[s("img",{staticClass:"org-img dom-center",attrs:{src:a("cf05"),alt:"gin-vue-admin"}})])])],1),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"https://github.com/flipped-aurora/gin-vue-admin"}},[s("img",{staticClass:"dom-center",attrs:{src:"https://img.shields.io/github/watchers/flipped-aurora/gin-vue-admin.svg?label=Watch",alt:""}})])]),s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"https://github.com/flipped-aurora/gin-vue-admin"}},[s("img",{staticClass:"dom-center",attrs:{src:"https://img.shields.io/github/stars/flipped-aurora/gin-vue-admin.svg?style=social",alt:""}})])]),s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"https://github.com/flipped-aurora/gin-vue-admin"}},[s("img",{staticClass:"dom-center",attrs:{src:"https://img.shields.io/github/forks/flipped-aurora/gin-vue-admin.svg?label=Fork",alt:""}})])])],1)],1)]),s("el-card",{staticStyle:{"margin-top":"20px"}},[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("flipped-aurora团队")]),s("div",[s("el-row",[s("el-col",{attrs:{span:8,offset:8}},[s("a",{attrs:{href:"https://github.com/flipped-aurora"}},[s("img",{staticClass:"org-img dom-center",attrs:{src:a("3ad4"),alt:"flipped-aurora"}})])])],1),s("el-row",{staticStyle:{"margin-left":"40px"},attrs:{gutter:20}},[t._l(t.members,(function(e,a){return[s("el-col",{key:a,attrs:{span:8}},[s("a",{attrs:{href:e.html_url}},[s("img",{staticClass:"avatar-img",attrs:{src:e.avatar_url}}),s("a",{staticClass:"author-name"},[t._v(t._s(e.login))])])])]}))],2)],1)])],1),s("el-col",{attrs:{span:12}},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v(" 提交记录 ")]),s("div",[s("Timeline",{attrs:{"timeline-items":t.dataTimeline,"message-when-no-items":t.messageWhenNoItems,uniqueTimeline:!0,"unique-year":!0,"show-day-and-month":!0,order:"desc",dateLocale:"zh-CN"}})],1),s("el-button",{staticClass:"load-more",attrs:{type:"text"},on:{click:t.loadMore}},[t._v("Load more ")])],1)],1)],1)],1)},r=[],i=(a("159b"),a("b0c0"),a("99af"),a("4e82"),a("c9f7")),o=a("c478"),n=a.n(o),c={name:"Test",components:{Timeline:n.a},data:function(){return{messageWhenNoItems:"There arent commits",members:[],dataTimeline:[],page:0}},created:function(){this.loadCommits(),this.loadMembers()},methods:{loadMore:function(){this.page++,this.loadCommits()},loadCommits:function(){var t=this;Object(i["Commits"])(this.page).then((function(e){var a=e.data;a.forEach((function(e){e.commit.message&&t.dataTimeline.push({from:new Date(e.commit.author.date),title:e.commit.author.name,showDayAndMonth:!0,description:'<a style="color: #26191b" href="'.concat(e.html_url,'">').concat(e.commit.message,"</a>")})}))}))},loadMembers:function(){var t=this;Object(i["Members"])().then((function(e){var a=e.data;t.members=a,t.members.sort()}))}}},l=c,m=(a("7f32"),a("2877")),u=Object(m["a"])(l,s,r,!1,null,"2306411e",null);e["default"]=u.exports},"7f32":function(t,e,a){"use strict";a("0b51")},c9f7:function(t,e,a){"use strict";a.r(e),a.d(e,"Commits",(function(){return l})),a.d(e,"Members",(function(){return m}));a("be4f"),a("450d");var s,r=a("896a"),i=a.n(r),o=a("cebe"),n=a.n(o),c=n.a.create();function l(t){return c({url:"https://api.github.com/repos/flipped-aurora/gin-vue-admin/commits?page="+t,method:"get"})}function m(){return c({url:"https://api.github.com/orgs/FLIPPED-AURORA/members",method:"get"})}c.interceptors.request.use((function(t){return s=i.a.service({fullscreen:!0}),t})),c.interceptors.response.use((function(t){return s.close(),t}),(function(t){return s.close(),t}))},cf05:function(t,e,a){t.exports=a.p+"static/img/logo.fe83e5b5.png"}}]);