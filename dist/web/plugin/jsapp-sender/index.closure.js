!function(){"use strict";function n(n,a,t){if(a&&(n.plugin_name=a),t&&n.init){var e=n.init;n.init=function(a,i){function r(){e.call(n,a,i)}return a.readyState&&a.readyState.state>=3||!a.on?r():void a.on(t,r)}}return n}function a(a,t,e){return n(a,t,e),a.plugin_version=s,a}function t(n,a){if(p.isObject(r.para.jsapp)&&!r.para.jsapp.isOnline&&"function"==typeof r.para.jsapp.setData){var t=n;delete t.callback,t=JSON.stringify(t),r.para.jsapp.setData(t),a.cancellationToken.stop()}return n}function e(){r.on("sdkAfterInitAPI",function(){p.isObject(r.commonWays)&&(r.commonWays.setOnlineState=i),r.registerInterceptor("sendDataStage",{send:{priority:40,entry:t}})})}function i(n){if(n===!0&&p.isObject(r.para.jsapp)&&"function"==typeof r.para.jsapp.getData){r.para.jsapp.isOnline=!0;var a=r.para.jsapp.getData();p.isArray(a)&&a.length>0&&p.each(a,function(n){p.isJSONString(n)&&r.kit.sendData(JSON.parse(n))})}else r.para.jsapp.isOnline=!1}var r,p,s="1.24.12",o={plugin_name:"JsappSender",init:function(n){r=n,p=r._,e()}},c=a(o);return c}();