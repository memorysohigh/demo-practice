(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5838318"],{"0e8d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{"before-close":e.closeDialog,visible:e.dialogFormVisible,title:"工作计划"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,size:"medium","label-width":"100px","label-position":"top"}},[n("el-form-item",{attrs:{label:"工作内容",prop:"neirong"}},[n("el-input",{style:{width:"100%"},attrs:{type:"textarea",placeholder:"请输入工作内容",autosize:{minRows:4,maxRows:4}},model:{value:e.formData.neirong,callback:function(t){e.$set(e.formData,"neirong",t)},expression:"formData.neirong"}})],1),n("el-form-item",{attrs:{label:"计划完成时间",prop:"jihuawanchengshijian"}},[n("el-date-picker",{style:{width:"100%"},attrs:{type:"date","value-format":"timestamp",placeholder:"请输入计划完成时间",editable:!1,clearable:""},model:{value:e.formData.jihuawanchengshijian,callback:function(t){e.$set(e.formData,"jihuawanchengshijian",t)},expression:"formData.jihuawanchengshijian"}})],1),n("el-form-item",{attrs:{label:"备注",prop:"beizhu"}},[n("el-input",{style:{width:"100%"},attrs:{type:"textarea",placeholder:"请输入备注",autosize:{minRows:4,maxRows:4}},model:{value:e.formData.beizhu,callback:function(t){e.$set(e.formData,"beizhu",t)},expression:"formData.beizhu"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.closeDialog}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handelConfirm}},[e._v("确定")])],1)],1)],1)},a=[],r=n("1da1"),o=(n("96cf"),n("2273")),s=n("a4a2"),c={mixins:[s["default"]],components:{},props:[],data:function(){return{type:"",dialogFormVisible:!1,formData:{},lihuigongzuojihuazhuangtaiOptions:[],rules:{neirong:[{required:!0,message:"请输入工作内容",trigger:"blur"}],jihuawanchengshijian:[{required:!0,message:"请输入计划完成时间",trigger:"change"}],beizhu:[{required:!1,message:"请输入备注",trigger:"blur"}]}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{createDialog:function(){this.type="create",this.formData=this.defaultFormData(),this.dialogFormVisible=!0},lookDialog:function(e){this.type="look",this.formData=e,this.dialogFormVisible=!0},closeDialog:function(){this.dialogFormVisible=!1,this.$refs["elForm"].resetFields()},handelConfirm:function(){var e=this;this.$refs["elForm"].validate((function(t){t&&e.$confirm("确定".concat("create"===e.type?"提交":"修改","工作计划吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(t,n){console.log(t),"confirm"===t&&e.enterDialog()}})}))},enterDialog:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=JSON.parse(JSON.stringify(e.formData)),i="create"===e.type?o["createLihuijihua"]:o["updateLihuijihua"],t.next=4,i(n);case 4:a=t.sent,0===a.code&&(e.$message({type:"success",message:"创建/更改成功"}),e.$emit("getTableData"),e.closeDialog());case 6:case"end":return t.stop()}}),t)})))()},defaultFormData:function(){return{neirong:void 0,jihuawanchengshijian:null,wanchengzhuangtai:"",shijiwanchengshijian:null,beizhu:void 0}}}},u=c,l=n("2877"),h=Object(l["a"])(u,i,a,!1,null,null,null);t["default"]=h.exports},"4d2c":function(e,t,n){},e122:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"content-bg"},[n("div",{staticClass:"left-content"},[n("div",{staticClass:"mokuai-title"},[n("span",{staticStyle:{"font-weight":"550"}},[e._v("本期工作汇报")]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"text",icon:"el-icon-refresh"},on:{click:e.onSubmit}},[e._v("刷新")]),n("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:e.xinzenghuibao}},[e._v("新增工作汇报")])],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.gongzuowanchengData,border:"",stripe:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),n("el-table-column",{attrs:{label:"工作内容",prop:"neirong",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.row.neirong))])]}}])}),n("el-table-column",{attrs:{label:"完成情况",prop:"wanchengqingkuang",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.row.wanchengqingkuang))])]}}])}),n("el-table-column",{attrs:{label:"完成状态",prop:"wanchengzhuangtai",width:"120"}}),n("el-table-column",{attrs:{label:"完成时间",prop:"wanchengshijian",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.shenbaoniandu))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"table-button",attrs:{size:"small",type:"primary",icon:"el-icon-view"},on:{click:function(n){return e.lookGongzuowancheng(t.row)}}},[e._v("查看")]),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(n){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),n("div",{staticClass:"gongzuopishi-bg"},[n("div",{staticClass:"pishi-title"},[e._v("工作批示")]),n("div",{staticClass:"pishi-list"},e._l([1,2,3,4],(function(t,i){return n("div",{key:"pishi-content"+i,staticClass:"pishi-cell"},[n("div",{staticClass:"pishi-content-title"},[e._v("------蔡克海（2021/07/01 09:23)------")]),n("div",{staticClass:"pishi-content-zhengwen"},[e._v("您好，请按照系统要求将部门年度工作计划在系统中完善，谢谢您好，请按照系统要求将部门年度工作计划在系统中完善，谢谢您好，请按照系统要求将部门年度工作计划在系统中完善，谢谢")])])})),0)]),n("div",{staticClass:"mokuai-title",staticStyle:{"margin-top":"50px"}},[n("span",{staticStyle:{"font-weight":"550"}},[e._v("下期工作计划")]),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-refresh",type:"text"},on:{click:e.onSubmit}},[e._v("刷新")]),n("el-button",{attrs:{icon:"el-icon-plus",type:"text"},on:{click:e.xinzengjihua}},[e._v("新增计划")])],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.gongzuojihuaData,border:"",stripe:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"50"}}),n("el-table-column",{attrs:{label:"工作内容",prop:"neirong",width:"420"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.row.neirong))])]}}])}),n("el-table-column",{attrs:{label:"计划完成时间",prop:"jihuawanchengshijian",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.jihuawanchengshijian))+" ")]}}])}),n("el-table-column",{attrs:{label:"备注",prop:"beizhu",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(t.row.beizhu))])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"table-button",attrs:{size:"small",type:"primary",icon:"el-icon-view"},on:{click:function(n){return e.lookGongzuojihua(t.row)}}},[e._v("查看")]),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(n){return e.deleteRow2(t.row)}}},[e._v("删除")])]}}])})],1),n("div",{staticClass:"gongzuopishi-bg"},[n("div",{staticClass:"pishi-title"},[e._v("工作批示")]),n("div",{staticClass:"pishi-list"},e._l([1,2,3,4],(function(t,i){return n("div",{key:"pishi-content"+i,staticClass:"pishi-cell"},[n("div",{staticClass:"pishi-content-title"},[e._v("------蔡克海（2021/07/01 09:23)------")]),n("div",{staticClass:"pishi-content-zhengwen"},[e._v("您好，请按照系统要求将部门年度工作计划在系统中完善，谢谢您好，请按照系统要求将部门年度工作计划在系统中完善，谢谢您好，请按照系统要求将部门年度工作计划在系统中完善，谢谢")])])})),0)])],1),n("div",{staticClass:"right-content"},[e._l(e.lihuizhouqis,(function(t,i){return n("div",{key:"zhouqi"+i,staticClass:"zhouqi-item"},[e._v(" "+e._s(t.name)+e._s(t.zhouqi)+" ")])})),e._m(0),n("div",{staticClass:"page-jump-bg"},[n("el-input",{staticClass:"page-input"}),n("div",{staticClass:"go"},[e._v("Go")]),n("div",{staticClass:"total-page"},[e._v("当前1/20页")])],1)],2)]),n("gongzuowanchengForm",{ref:"dialogForm",on:{getTableData:e.getLihuiwanchengList}}),n("gongzuojihuaForm",{ref:"gongzuojihuaForm",on:{getTableData:e.getLihuijihuaList}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-control-bg"},[n("div",{staticClass:"page",staticStyle:{"justify-content":"flex-end"}},[e._v("上一页")]),n("div",{staticClass:"middle-line"}),n("div",{staticClass:"page"},[e._v("下一页")])])}],r=n("1da1"),o=n("5530"),s=(n("d81d"),n("96cf"),n("2273")),c=n("c466"),u=n("a4a2"),l=n("5880"),h=n("a16c"),g=n("0e8d"),f={name:"gongzuohuibao",mixins:[u["default"]],components:{gongzuowanchengForm:h["default"],gongzuojihuaForm:g["default"]},computed:Object(o["a"])({},Object(l["mapGetters"])("user",["userInfo","token"])),data:function(){return{gongzuowanchengData:[],gongzuojihuaData:[],deleteVisible:!1,multipleSelection:[],nodeEnv:"production",page:1,pageSize:100,lihuizhouqis:[{name:"张华",zhouqi:"2021/05/15"},{name:"张华",zhouqi:"2021/05/30"},{name:"张华",zhouqi:"2021/06/15"},{name:"张华",zhouqi:"2021/06/30"},{name:"张华",zhouqi:"2021/07/15"}]}},filters:{formatDate:function(e){if(null!=e&&""!=e){var t=new Date(e);return Object(c["formatTimeToStr"])(t,"yyyy-MM-dd")}return""},formatBoolean:function(e){return null!=e?e?"是":"否":""}},methods:{onSubmit:function(){this.getLihuiwanchengList()},xinzenghuibao:function(){var e=this;this.$nextTick((function(){e.$refs.dialogForm.createDialog()}))},xinzengjihua:function(){var e=this;this.$nextTick((function(){e.$refs.gongzuojihuaForm.createDialog()}))},handleSelectionChange:function(e){this.multipleSelection=e},deleteRow:function(e){var t=this;this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteLihuiwancheng(e)}))},deleteRow2:function(e){var t=this;this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteLihuijihua(e)}))},getLihuiwanchengList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["getLihuiwanchengList"])();case 2:n=t.sent,0===n.code&&(e.gongzuowanchengData=n.data.list);case 4:case"end":return t.stop()}}),t)})))()},getLihuijihuaList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["getLihuijihuaList"])();case 2:n=t.sent,0===n.code&&(e.gongzuojihuaData=n.data.list);case 4:case"end":return t.stop()}}),t)})))()},onDelete:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[],0!=e.multipleSelection.length){t.next=4;break}return e.$message({type:"warning",message:"请选择要删除的数据"}),t.abrupt("return");case 4:return e.multipleSelection&&e.multipleSelection.map((function(e){n.push(e.ID)})),t.next=7,Object(s["deleteLihuiwanchengByIds"])({ids:n});case 7:i=t.sent,0==i.code&&(e.$message({type:"success",message:"删除成功"}),e.tableData.length==n.length&&e.page--,e.deleteVisible=!1,e.getTableData());case 9:case"end":return t.stop()}}),t)})))()},openDialog:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dialogFormVisible=!0,e.$nextTick((function(){e.$refs.dialogForm.createDialog()}));case 2:case"end":return t.stop()}}),t)})))()},updateZhijishenbao:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["findLihuiwancheng"])({ID:e.ID});case 2:i=n.sent,0===i.code&&(t.dialogFormVisible=!0,t.$nextTick((function(){t.$refs.dialogForm.updateDialog(i.data.rezhijishenbao)})));case 4:case"end":return n.stop()}}),n)})))()},lookGongzuowancheng:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["findLihuiwancheng"])({ID:e.ID});case 2:i=n.sent,0===i.code&&t.$nextTick((function(){t.$refs.dialogForm.lookDialog(i.data.relihuijihua)}));case 4:case"end":return n.stop()}}),n)})))()},lookGongzuojihua:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["findLihuijihua"])({ID:e.ID});case 2:i=n.sent,0===i.code&&t.$nextTick((function(){t.$refs.gongzuojihuaForm.lookDialog(i.data.relihuijihua)}));case 4:case"end":return n.stop()}}),n)})))()},deleteLihuiwancheng:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["deleteLihuiwancheng"])({ID:e.ID});case 2:i=n.sent,0===i.code&&(t.$message({type:"success",message:"删除成功"}),t.getLihuiwanchengList());case 4:case"end":return n.stop()}}),n)})))()},deleteLihuijihua:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["deleteLihuijihua"])({ID:e.ID});case 2:i=n.sent,0===i.code&&(t.$message({type:"success",message:"删除成功"}),t.getLihuijihuaList());case 4:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getLihuiwanchengList();case 2:return t.next=4,e.getLihuijihuaList();case 4:case"end":return t.stop()}}),t)})))()}},d=f,p=(n("f268"),n("2877")),m=Object(p["a"])(d,i,a,!1,null,null,null);t["default"]=m.exports},f268:function(e,t,n){"use strict";n("4d2c")}}]);