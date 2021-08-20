(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46667d2c","chunk-2d0be08a","chunk-2d0de3cd"],{"2f11":function(e,n,t){"use strict";t.r(n),t.d(n,"emailTest",(function(){return o}));var l=t("b775"),o=function(e){return Object(l["default"])({url:"/email/emailTest",method:"post",data:e})}},"487e":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"system"},[t("el-form",{ref:"form",staticClass:"system",attrs:{model:e.config,"label-width":"100px"}},[t("h2",[e._v("系统配置")]),t("el-form-item",{attrs:{label:"环境值"}},[t("el-input",{model:{value:e.config.system.env,callback:function(n){e.$set(e.config.system,"env",n)},expression:"config.system.env"}})],1),t("el-form-item",{attrs:{label:"端口值"}},[t("el-input",{model:{value:e.config.system.addr,callback:function(n){e.$set(e.config.system,"addr",e._n(n))},expression:"config.system.addr"}})],1),t("el-form-item",{attrs:{label:"数据库类型"}},[t("el-select",{model:{value:e.config.system.dbType,callback:function(n){e.$set(e.config.system,"dbType",n)},expression:"config.system.dbType"}},[t("el-option",{attrs:{value:"mysql"}}),t("el-option",{attrs:{value:"sqlite"}}),t("el-option",{attrs:{value:"sqlserver"}}),t("el-option",{attrs:{value:"postgresql"}})],1)],1),t("el-form-item",{attrs:{label:"Oss类型"}},[t("el-select",{model:{value:e.config.system.ossType,callback:function(n){e.$set(e.config.system,"ossType",n)},expression:"config.system.ossType"}},[t("el-option",{attrs:{value:"local"}}),t("el-option",{attrs:{value:"qiniu"}}),t("el-option",{attrs:{value:"tencent-cos"}}),t("el-option",{attrs:{value:"aliyun-oss"}})],1)],1),t("el-form-item",{attrs:{label:"配置文件环境变量名"}},[t("el-input",{model:{value:e.config.system.configEnv,callback:function(n){e.$set(e.config.system,"configEnv",e._n(n))},expression:"config.system.configEnv"}})],1),t("el-form-item",{attrs:{label:"数据初始化"}},[t("el-checkbox",{model:{value:e.config.system.needInitData,callback:function(n){e.$set(e.config.system,"needInitData",n)},expression:"config.system.needInitData"}},[e._v("开启")])],1),t("el-form-item",{attrs:{label:"多点登录拦截"}},[t("el-checkbox",{model:{value:e.config.system.useMultipoint,callback:function(n){e.$set(e.config.system,"useMultipoint",n)},expression:"config.system.useMultipoint"}},[e._v("开启")])],1),t("h2",[e._v("jwt签名")]),t("el-form-item",{attrs:{label:"jwt签名"}},[t("el-input",{model:{value:e.config.jwt.signingKey,callback:function(n){e.$set(e.config.jwt,"signingKey",n)},expression:"config.jwt.signingKey"}})],1),t("h2",[e._v("Zap日志配置")]),t("el-form-item",{attrs:{label:"级别"}},[t("el-input",{model:{value:e.config.zap.level,callback:function(n){e.$set(e.config.zap,"level",e._n(n))},expression:"config.zap.level"}})],1),t("el-form-item",{attrs:{label:"输出"}},[t("el-input",{model:{value:e.config.zap.format,callback:function(n){e.$set(e.config.zap,"format",n)},expression:"config.zap.format"}})],1),t("el-form-item",{attrs:{label:"日志前缀"}},[t("el-input",{model:{value:e.config.zap.prefix,callback:function(n){e.$set(e.config.zap,"prefix",n)},expression:"config.zap.prefix"}})],1),t("el-form-item",{attrs:{label:"日志文件夹"}},[t("el-input",{model:{value:e.config.zap.director,callback:function(n){e.$set(e.config.zap,"director",n)},expression:"config.zap.director"}})],1),t("el-form-item",{attrs:{label:"软链接名称"}},[t("el-input",{model:{value:e.config.zap.linkName,callback:function(n){e.$set(e.config.zap,"linkName",n)},expression:"config.zap.linkName"}})],1),t("el-form-item",{attrs:{label:"编码级"}},[t("el-input",{model:{value:e.config.zap.encodeLevel,callback:function(n){e.$set(e.config.zap,"encodeLevel",n)},expression:"config.zap.encodeLevel"}})],1),t("el-form-item",{attrs:{label:"栈名"}},[t("el-input",{model:{value:e.config.zap.stacktraceKey,callback:function(n){e.$set(e.config.zap,"stacktraceKey",n)},expression:"config.zap.stacktraceKey"}})],1),t("el-form-item",{attrs:{label:"显示行"}},[t("el-checkbox",{model:{value:e.config.zap.showLine,callback:function(n){e.$set(e.config.zap,"showLine",n)},expression:"config.zap.showLine"}})],1),t("el-form-item",{attrs:{label:"输出控制台"}},[t("el-checkbox",{model:{value:e.config.zap.logInConsole,callback:function(n){e.$set(e.config.zap,"logInConsole",n)},expression:"config.zap.logInConsole"}})],1),t("h2",[e._v("Redis admin数据库配置")]),t("el-form-item",{attrs:{label:"db"}},[t("el-input",{model:{value:e.config.redis.db,callback:function(n){e.$set(e.config.redis,"db",n)},expression:"config.redis.db"}})],1),t("el-form-item",{attrs:{label:"addr"}},[t("el-input",{model:{value:e.config.redis.addr,callback:function(n){e.$set(e.config.redis,"addr",n)},expression:"config.redis.addr"}})],1),t("el-form-item",{attrs:{label:"password"}},[t("el-input",{model:{value:e.config.redis.password,callback:function(n){e.$set(e.config.redis,"password",n)},expression:"config.redis.password"}})],1),t("h2",[e._v("邮箱配置")]),t("el-form-item",{attrs:{label:"接收者邮箱"}},[t("el-input",{attrs:{placeholder:"可多个，以逗号分隔"},model:{value:e.config.email.to,callback:function(n){e.$set(e.config.email,"to",n)},expression:"config.email.to"}})],1),t("el-form-item",{attrs:{label:"端口"}},[t("el-input",{model:{value:e.config.email.port,callback:function(n){e.$set(e.config.email,"port",e._n(n))},expression:"config.email.port"}})],1),t("el-form-item",{attrs:{label:"发送者邮箱"}},[t("el-input",{model:{value:e.config.email.from,callback:function(n){e.$set(e.config.email,"from",n)},expression:"config.email.from"}})],1),t("el-form-item",{attrs:{label:"host"}},[t("el-input",{model:{value:e.config.email.host,callback:function(n){e.$set(e.config.email,"host",n)},expression:"config.email.host"}})],1),t("el-form-item",{attrs:{label:"是否为ssl"}},[t("el-checkbox",{model:{value:e.config.email.isSSL,callback:function(n){e.$set(e.config.email,"isSSL",n)},expression:"config.email.isSSL"}})],1),t("el-form-item",{attrs:{label:"secret"}},[t("el-input",{model:{value:e.config.email.secret,callback:function(n){e.$set(e.config.email,"secret",n)},expression:"config.email.secret"}})],1),t("el-form-item",{attrs:{label:"测试邮件"}},[t("el-button",{on:{click:e.email}},[e._v("测试邮件")])],1),t("h2",[e._v("casbin配置")]),t("el-form-item",{attrs:{label:"模型地址"}},[t("el-input",{model:{value:e.config.casbin.modelPath,callback:function(n){e.$set(e.config.casbin,"modelPath",n)},expression:"config.casbin.modelPath"}})],1),t("h2",[e._v("验证码配置")]),t("el-form-item",{attrs:{label:"keyLong"}},[t("el-input",{model:{value:e.config.captcha.keyLong,callback:function(n){e.$set(e.config.captcha,"keyLong",e._n(n))},expression:"config.captcha.keyLong"}})],1),t("el-form-item",{attrs:{label:"imgWidth"}},[t("el-input",{model:{value:e.config.captcha.imgWidth,callback:function(n){e.$set(e.config.captcha,"imgWidth",e._n(n))},expression:"config.captcha.imgWidth"}})],1),t("el-form-item",{attrs:{label:"imgHeight"}},[t("el-input",{model:{value:e.config.captcha.imgHeight,callback:function(n){e.$set(e.config.captcha,"imgHeight",e._n(n))},expression:"config.captcha.imgHeight"}})],1),"mysql"==e.config.system.dbType?[t("h2",[e._v("mysql admin数据库配置")]),t("el-form-item",{attrs:{label:"username"}},[t("el-input",{model:{value:e.config.mysql.username,callback:function(n){e.$set(e.config.mysql,"username",n)},expression:"config.mysql.username"}})],1),t("el-form-item",{attrs:{label:"password"}},[t("el-input",{model:{value:e.config.mysql.password,callback:function(n){e.$set(e.config.mysql,"password",n)},expression:"config.mysql.password"}})],1),t("el-form-item",{attrs:{label:"path"}},[t("el-input",{model:{value:e.config.mysql.path,callback:function(n){e.$set(e.config.mysql,"path",n)},expression:"config.mysql.path"}})],1),t("el-form-item",{attrs:{label:"dbname"}},[t("el-input",{model:{value:e.config.mysql.dbname,callback:function(n){e.$set(e.config.mysql,"dbname",n)},expression:"config.mysql.dbname"}})],1),t("el-form-item",{attrs:{label:"maxIdleConns"}},[t("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(n){e.$set(e.config.mysql,"maxIdleConns",e._n(n))},expression:"config.mysql.maxIdleConns"}})],1),t("el-form-item",{attrs:{label:"maxOpenConns"}},[t("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(n){e.$set(e.config.mysql,"maxOpenConns",e._n(n))},expression:"config.mysql.maxOpenConns"}})],1),t("el-form-item",{attrs:{label:"logMode"}},[t("el-checkbox",{model:{value:e.config.mysql.logMode,callback:function(n){e.$set(e.config.mysql,"logMode",n)},expression:"config.mysql.logMode"}})],1)]:e._e(),"sqlite"==e.config.system.dbType?[t("h2",[e._v("sqlite admin数据库配置")]),t("el-form-item",{attrs:{label:"path"}},[t("el-input",{model:{value:e.config.mysql.path,callback:function(n){e.$set(e.config.mysql,"path",n)},expression:"config.mysql.path"}})],1),t("el-form-item",{attrs:{label:"maxIdleConns"}},[t("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(n){e.$set(e.config.mysql,"maxIdleConns",e._n(n))},expression:"config.mysql.maxIdleConns"}})],1),t("el-form-item",{attrs:{label:"maxOpenConns"}},[t("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(n){e.$set(e.config.mysql,"maxOpenConns",e._n(n))},expression:"config.mysql.maxOpenConns"}})],1),t("el-form-item",{attrs:{label:"logger"}},[t("el-checkbox",{model:{value:e.config.mysql.logger,callback:function(n){e.$set(e.config.mysql,"logger",n)},expression:"config.mysql.logger"}})],1)]:e._e(),"sqlserver"==e.config.system.dbType?[t("h2",[e._v("sqlserver admin数据库配置")]),t("el-form-item",{attrs:{label:"username"}},[t("el-input",{model:{value:e.config.sqlserver.username,callback:function(n){e.$set(e.config.sqlserver,"username",n)},expression:"config.sqlserver.username"}})],1),t("el-form-item",{attrs:{label:"password"}},[t("el-input",{model:{value:e.config.sqlserver.password,callback:function(n){e.$set(e.config.sqlserver,"password",n)},expression:"config.sqlserver.password"}})],1),t("el-form-item",{attrs:{label:"path"}},[t("el-input",{model:{value:e.config.sqlserver.path,callback:function(n){e.$set(e.config.sqlserver,"path",n)},expression:"config.sqlserver.path"}})],1),t("el-form-item",{attrs:{label:"dbname"}},[t("el-input",{model:{value:e.config.sqlserver.dbname,callback:function(n){e.$set(e.config.sqlserver,"dbname",n)},expression:"config.sqlserver.dbname"}})],1),t("el-form-item",{attrs:{label:"maxIdleConns"}},[t("el-input",{model:{value:e.config.sqlserver.maxIdleConns,callback:function(n){e.$set(e.config.sqlserver,"maxIdleConns",e._n(n))},expression:"config.sqlserver.maxIdleConns"}})],1),t("el-form-item",{attrs:{label:"maxOpenConns"}},[t("el-input",{model:{value:e.config.sqlserver.maxOpenConns,callback:function(n){e.$set(e.config.sqlserver,"maxOpenConns",e._n(n))},expression:"config.sqlserver.maxOpenConns"}})],1),t("el-form-item",{attrs:{label:"logger"}},[t("el-checkbox",{model:{value:e.config.sqlserver.logger,callback:function(n){e.$set(e.config.sqlserver,"logger",n)},expression:"config.sqlserver.logger"}})],1)]:e._e(),"postgresql"==e.config.system.dbType?[t("h2",[e._v("postgresql admin数据库配置")]),t("el-form-item",{attrs:{label:"username"}},[t("el-input",{model:{value:e.config.mysql.username,callback:function(n){e.$set(e.config.mysql,"username",n)},expression:"config.mysql.username"}})],1),t("el-form-item",{attrs:{label:"password"}},[t("el-input",{model:{value:e.config.mysql.password,callback:function(n){e.$set(e.config.mysql,"password",n)},expression:"config.mysql.password"}})],1),t("el-form-item",{attrs:{label:"dbName"}},[t("el-input",{model:{value:e.config.mysql.dbName,callback:function(n){e.$set(e.config.mysql,"dbName",n)},expression:"config.mysql.dbName"}})],1),t("el-form-item",{attrs:{label:"port"}},[t("el-input",{model:{value:e.config.mysql.port,callback:function(n){e.$set(e.config.mysql,"port",n)},expression:"config.mysql.port"}})],1),t("el-form-item",{attrs:{label:"config"}},[t("el-input",{model:{value:e.config.mysql.config,callback:function(n){e.$set(e.config.mysql,"config",n)},expression:"config.mysql.config"}})],1),t("el-form-item",{attrs:{label:"maxIdleConns"}},[t("el-input",{model:{value:e.config.mysql.maxIdleConns,callback:function(n){e.$set(e.config.mysql,"maxIdleConns",e._n(n))},expression:"config.mysql.maxIdleConns"}})],1),t("el-form-item",{attrs:{label:"maxOpenConns"}},[t("el-input",{model:{value:e.config.mysql.maxOpenConns,callback:function(n){e.$set(e.config.mysql,"maxOpenConns",e._n(n))},expression:"config.mysql.maxOpenConns"}})],1),t("el-form-item",{attrs:{label:"logger"}},[t("el-checkbox",{model:{value:e.config.mysql.logger,callback:function(n){e.$set(e.config.mysql,"logger",n)},expression:"config.mysql.logger"}})],1),t("el-form-item",{attrs:{label:"prefer-simple-protocol"}},[t("el-checkbox",{model:{value:e.config.mysql.preferSimpleProtocol,callback:function(n){e.$set(e.config.mysql,"preferSimpleProtocol",n)},expression:"config.mysql.preferSimpleProtocol"}})],1)]:e._e(),"local"==e.config.system.ossType?[t("h2",[e._v("本地上传配置")]),t("el-form-item",{attrs:{label:"本地文件路径"}},[t("el-input",{model:{value:e.config.local.path,callback:function(n){e.$set(e.config.local,"path",n)},expression:"config.local.path"}})],1)]:e._e(),"qiniu"==e.config.system.ossType?[t("h2",[e._v("qiniu上传配置")]),t("el-form-item",{attrs:{label:"存储区域"}},[t("el-input",{model:{value:e.config.qiniu.zone,callback:function(n){e.$set(e.config.qiniu,"zone",n)},expression:"config.qiniu.zone"}})],1),t("el-form-item",{attrs:{label:"空间名称"}},[t("el-input",{model:{value:e.config.qiniu.bucket,callback:function(n){e.$set(e.config.qiniu,"bucket",n)},expression:"config.qiniu.bucket"}})],1),t("el-form-item",{attrs:{label:"CDN加速域名"}},[t("el-input",{model:{value:e.config.qiniu.imgPath,callback:function(n){e.$set(e.config.qiniu,"imgPath",n)},expression:"config.qiniu.imgPath"}})],1),t("el-form-item",{attrs:{label:"是否使用https"}},[t("el-checkbox",{model:{value:e.config.qiniu.useHttps,callback:function(n){e.$set(e.config.qiniu,"useHttps",n)},expression:"config.qiniu.useHttps"}},[e._v("开启")])],1),t("el-form-item",{attrs:{label:"accessKey"}},[t("el-input",{model:{value:e.config.qiniu.accessKey,callback:function(n){e.$set(e.config.qiniu,"accessKey",n)},expression:"config.qiniu.accessKey"}})],1),t("el-form-item",{attrs:{label:"secretKey"}},[t("el-input",{model:{value:e.config.qiniu.secretKey,callback:function(n){e.$set(e.config.qiniu,"secretKey",n)},expression:"config.qiniu.secretKey"}})],1),t("el-form-item",{attrs:{label:"上传是否使用CDN上传加速"}},[t("el-checkbox",{model:{value:e.config.qiniu.useCdnDomains,callback:function(n){e.$set(e.config.qiniu,"useCdnDomains",n)},expression:"config.qiniu.useCdnDomains"}},[e._v("开启")])],1)]:e._e(),"tencent-cos"==e.config.system.ossType?[t("h2",[e._v("腾讯云COS上传配置")]),t("el-form-item",{attrs:{label:"bucket"}},[t("el-input",{model:{value:e.config.tencentCOS.bucket,callback:function(n){e.$set(e.config.tencentCOS,"bucket",n)},expression:"config.tencentCOS.bucket"}})],1),t("el-form-item",{attrs:{label:"region"}},[t("el-input",{model:{value:e.config.tencentCOS.region,callback:function(n){e.$set(e.config.tencentCOS,"region",n)},expression:"config.tencentCOS.region"}})],1),t("el-form-item",{attrs:{label:"secretID"}},[t("el-input",{model:{value:e.config.tencentCOS.secretID,callback:function(n){e.$set(e.config.tencentCOS,"secretID",n)},expression:"config.tencentCOS.secretID"}})],1),t("el-form-item",{attrs:{label:"secretKey"}},[t("el-input",{model:{value:e.config.tencentCOS.secretKey,callback:function(n){e.$set(e.config.tencentCOS,"secretKey",n)},expression:"config.tencentCOS.secretKey"}})],1),t("el-form-item",{attrs:{label:"pathPrefix"}},[t("el-input",{model:{value:e.config.tencentCOS.pathPrefix,callback:function(n){e.$set(e.config.tencentCOS,"pathPrefix",n)},expression:"config.tencentCOS.pathPrefix"}})],1),t("el-form-item",{attrs:{label:"baseURL"}},[t("el-input",{model:{value:e.config.tencentCOS.baseURL,callback:function(n){e.$set(e.config.tencentCOS,"baseURL",n)},expression:"config.tencentCOS.baseURL"}})],1)]:e._e(),"aliyun-oss"==e.config.system.ossType?[t("h2",[e._v("阿里云OSS上传配置")]),t("el-form-item",{attrs:{label:"endpoint"}},[t("el-input",{model:{value:e.config.aliyunOSS.endpoint,callback:function(n){e.$set(e.config.aliyunOSS,"endpoint",n)},expression:"config.aliyunOSS.endpoint"}})],1),t("el-form-item",{attrs:{label:"accessKeyId"}},[t("el-input",{model:{value:e.config.aliyunOSS.accessKeyId,callback:function(n){e.$set(e.config.aliyunOSS,"accessKeyId",n)},expression:"config.aliyunOSS.accessKeyId"}})],1),t("el-form-item",{attrs:{label:"accessKeySecret"}},[t("el-input",{model:{value:e.config.aliyunOSS.accessKeySecret,callback:function(n){e.$set(e.config.aliyunOSS,"accessKeySecret",n)},expression:"config.aliyunOSS.accessKeySecret"}})],1),t("el-form-item",{attrs:{label:"bucketName"}},[t("el-input",{model:{value:e.config.aliyunOSS.bucketName,callback:function(n){e.$set(e.config.aliyunOSS,"bucketName",n)},expression:"config.aliyunOSS.bucketName"}})],1),t("el-form-item",{attrs:{label:"bucketUrl"}},[t("el-input",{model:{value:e.config.aliyunOSS.bucketUrl,callback:function(n){e.$set(e.config.aliyunOSS,"bucketUrl",n)},expression:"config.aliyunOSS.bucketUrl"}})],1)]:e._e(),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("立即更新")]),t("el-button",{attrs:{type:"primary"},on:{click:e.reload}},[e._v("重启服务（开发中）")])],1)],2)],1)},o=[],i=t("1da1"),s=(t("96cf"),t("8593")),a=t("2f11"),c={name:"Config",data:function(){return{config:{system:{},jwt:{},casbin:{},mysql:{},sqlite:{},redis:{},qiniu:{},tencentCOS:{},aliyunOSS:{},captcha:{},zap:{},local:{},email:{}}}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.initForm();case 2:case"end":return n.stop()}}),n)})))()},methods:{initForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["getSystemConfig"])();case 2:t=n.sent,0==t.code&&(e.config=t.data.config);case 4:case"end":return n.stop()}}),n)})))()},reload:function(){},update:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["setSystemConfig"])({config:e.config});case 2:if(t=n.sent,0!=t.code){n.next=7;break}return e.$message({type:"success",message:"配置文件设置成功"}),n.next=7,e.initForm();case 7:case"end":return n.stop()}}),n)})))()},email:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(a["emailTest"])();case 2:if(t=n.sent,0!=t.code){n.next=9;break}return e.$message({type:"success",message:"邮件发送成功"}),n.next=7,e.initForm();case 7:n.next=10;break;case 9:e.$message({type:"error",message:"邮件发送失败"});case 10:case"end":return n.stop()}}),n)})))()}}},r=c,m=(t("663f"),t("2877")),f=Object(m["a"])(r,l,o,!1,null,null,null);n["default"]=f.exports},"663f":function(e,n,t){"use strict";t("6b87")},"6b87":function(e,n,t){},8593:function(e,n,t){"use strict";t.r(n),t.d(n,"getSystemConfig",(function(){return o})),t.d(n,"setSystemConfig",(function(){return i})),t.d(n,"getSystemState",(function(){return s}));var l=t("b775"),o=function(){return Object(l["default"])({url:"/system/getSystemConfig",method:"post"})},i=function(e){return Object(l["default"])({url:"/system/setSystemConfig",method:"post",data:e})},s=function(){return Object(l["default"])({url:"/system/getServerInfo",method:"post",donNotShowLoading:!0})}}}]);