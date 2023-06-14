!function(){"use strict";function e(e){return b&&b.call(v,JSON.stringify(e))}function n(e){return y.call(v)&&m&&m.call(v,JSON.stringify(e))}function r(e,n){return n&&"function"==typeof n[e.callType]&&n[e.callType]()}function a(e,n,r){if(n&&(e.plugin_name=n),r&&e.init){var a=e.init;e.init=function(t,o){function s(){a.call(e,t,o)}return i(t,e,n),t.readyState&&t.readyState.state>=3||!t.on?s():void t.on(r,s)}}return e}function i(e,n,r){function a(n,a){e.logger?e.logger.msg.apply(e.logger,a).module(r+""||"").level(n).log():e.log&&e.log.apply(e,a)}n.log=function(){a("log",arguments)},n.warn=function(){a("warn",arguments)},n.error=function(){a("error",arguments)}}function t(e,n,r){return a(e,n,r),e.plugin_version=w,e}function o(){if(c=window.SensorsData_APP_JS_Bridge,d=c&&c.sensorsdata_track,u=c&&c.sensorsdata_verify,_=c&&c.sensorsdata_visual_verify,p&&!p.bridge.activeBridge&&(u||d||_)){p.bridge.activeBridge=k;var e=u||d;if(_&&(e=!!_.call(c,JSON.stringify({server_url:p.para.server_url}))),p.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:e?"success":"fail"},!p.para.app_js_bridge)return void f("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");p.registerInterceptor("sendDataStage",{send:{priority:80,entry:s}}),f("Android obsolete bridge inits succeed.")}}function s(e,n){if(p.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;if(u){var a=u&&u.call(c,JSON.stringify(g.extend({server_url:p.para.server_url},e.data)));return a?(g.isFunction(r)&&r(),n.cancellationToken.cancel(),e):p.para.app_js_bridge.is_send?(p.debug.apph5({data:e.data,step:"3.1",output:"all"}),e):(g.isFunction(r)&&r(),n.cancellationToken.cancel(),e)}return d&&d.call(c,JSON.stringify(g.extend({server_url:p.para.server_url},e.data))),g.isFunction(r)&&r(),n.cancellationToken.cancel(),e}function l(e){var n=e.callType;return n in S.commands?S.commands[n](e,c):c&&g.isFunction(c.sensorsdata_js_call_app)?c.sensorsdata_js_call_app(JSON.stringify(e)):void 0}var c,d,u,_,p,g,f,v=window.SensorsData_App_Visual_Bridge,y=v&&v.sensorsdata_visualized_mode,b=v&&v.sensorsdata_visualized_alert_info,m=v&&v.sensorsdata_hover_web_nodes,S={isVerify:function(){return y&&(y===!0||y.call(v))},commands:{app_alert:e,visualized_track:n,page_info:n,sensorsdata_get_app_visual_config:r}},w="1.25.7",k={init:function(e){p=e,g=p&&p._,f=p&&p.log||console&&console.log||function(){},o()},handleCommand:l},J=t(k,"AndroidObsoleteBridge","sdkAfterInitPara");return J}();