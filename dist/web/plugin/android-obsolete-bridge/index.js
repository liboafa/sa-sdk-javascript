(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).AndroidObsoleteBridge=function(){"use strict";function e(e){return y&&y.call(b,JSON.stringify(e))}function n(e){return v.call(b)&&m&&m.call(b,JSON.stringify(e))}function r(e,n){return n&&"function"==typeof n[e.callType]&&n[e.callType]()}function i(e,n,r){if(n&&(e.plugin_name=n),r&&e.init){var i=e.init;e.init=function(t,s){function o(){i.call(e,t,s)}return a(t,e,n),t.readyState&&t.readyState.state>=3||!t.on?o():void t.on(r,o)}}return e}function a(e,n,r){function i(n,i){e.logger?e.logger.msg.apply(e.logger,i).module(r+""||"").level(n).log():e.log&&e.log.apply(e,i)}n.log=function(){i("log",arguments)},n.warn=function(){i("warn",arguments)},n.error=function(){i("error",arguments)}}function t(e,n,r){return i(e,n,r),e.plugin_version=O,e}function s(){if(f("ObsoleteBridge---test---init---"),d=window.SensorsData_APP_JS_Bridge,c=d&&d.sensorsdata_track,u=d&&d.sensorsdata_verify,g=d&&d.sensorsdata_visual_verify,f("ObsoleteBridge-",_.bridge.activeBridge,u,c,g),_&&!_.bridge.activeBridge&&(u||c||g)){_.bridge.activeBridge=B;var e=u||c;if(g&&(e=!!g.call(d,JSON.stringify({server_url:_.para.server_url})),f("ObsoleteBridge---called-return",e)),_.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:e?"success":"fail"},!_.para.app_js_bridge)return void f("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");_.registerInterceptor("sendDataStage",{send:{priority:80,entry:o}}),f("Android obsolete bridge inits succeed.")}}function o(e,n){if(f("ObsoleteBridge---senddata"),_.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;if(u){var i=u&&u.call(d,JSON.stringify(p.extend({server_url:_.para.server_url},e.data)));return f("ObsoleteBridge---anVerify-success",i),i?(p.isFunction(r)&&r(),n.cancellationToken.cancel(),e):_.para.app_js_bridge.is_send?(_.debug.apph5({data:e.data,step:"3.1",output:"all"}),e):(p.isFunction(r)&&r(),n.cancellationToken.cancel(),e)}return f("ObsoleteBridge---is-send-old-way",_.para.app_js_bridge.is_send),c&&c.call(d,JSON.stringify(p.extend({server_url:_.para.server_url},e.data))),p.isFunction(r)&&r(),n.cancellationToken.cancel(),e}function l(e){f("ObsoleteBridge---handleCommadn");var n=e.callType;return n in S.commands?(f("ObsoleteBridge---",n,S.commands),S.commands[n](e,d)):d&&p.isFunction(d.sensorsdata_js_call_app)?(f("ObsoleteBridge---handleCommadn-abridge"),d.sensorsdata_js_call_app(JSON.stringify(e))):void 0}var d,c,u,g,_,p,f,b=window.SensorsData_App_Visual_Bridge,v=b&&b.sensorsdata_visualized_mode,y=b&&b.sensorsdata_visualized_alert_info,m=b&&b.sensorsdata_hover_web_nodes,S={isVerify:function(){return v&&(v===!0||v.call(b))},commands:{app_alert:e,visualized_track:n,page_info:n,sensorsdata_get_app_visual_config:r}},O="1.26.14",B={init:function(e){_=e,p=_&&_._,f=_&&_.log||console&&console.log||function(){},s()},handleCommand:l},w=t(B,"AndroidObsoleteBridge","sdkAfterInitPara");return w}();