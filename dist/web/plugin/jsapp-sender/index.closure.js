!function(){"use strict";function n(n,a,e){if(a&&(n.plugin_name=a),e&&n.init){var i=n.init;n.init=function(r,o){function p(){i.call(n,r,o)}return t(r,n,a),r.readyState&&r.readyState.state>=3||!r.on?p():void r.on(e,p)}}return n}function t(n,t,a){function e(t,e){n.logger?n.logger.msg.apply(n.logger,e).module(a+""||"").level(t).log():n.log&&n.log.apply(n,e)}t.log=function(){e("log",arguments)},t.warn=function(){e("warn",arguments)},t.error=function(){e("error",arguments)}}function a(t,a,e){return n(t,a,e),t.plugin_version=s,t}function e(n,t){if(p.isObject(o.para.jsapp)&&!o.para.jsapp.isOnline&&"function"==typeof o.para.jsapp.setData){var a=n;delete a.callback,a=JSON.stringify(a),o.para.jsapp.setData(a),t.cancellationToken.stop()}return n}function i(){o.on("sdkAfterInitAPI",function(){p.isObject(o.commonWays)&&(o.commonWays.setOnlineState=r),o.registerInterceptor("sendDataStage",{send:{priority:40,entry:e}})})}function r(n){if(n===!0&&p.isObject(o.para.jsapp)&&"function"==typeof o.para.jsapp.getData){o.para.jsapp.isOnline=!0;var t=o.para.jsapp.getData();p.isArray(t)&&t.length>0&&p.each(t,function(n){p.isJSONString(n)&&o.kit.sendData(JSON.parse(n))})}else o.para.jsapp.isOnline=!1}var o,p,s="1.25.22",c={plugin_name:"JsappSender",init:function(n){o=n,p=o._,i()}},l=a(c);return l}();