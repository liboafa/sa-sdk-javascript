!function(){"use strict";function e(e){return y&&y.call(f,JSON.stringify(e))}function a(e){return v.call(f)&&b&&b.call(f,JSON.stringify(e))}function r(e,a){return a&&"function"==typeof a[e.callType]&&a[e.callType]()}function i(e,a,r){if(a&&(e.plugin_name=a),r&&e.init){var i=e.init;e.init=function(t,s){function o(){i.call(e,t,s)}return n(t,e,a),t.readyState&&t.readyState.state>=3||!t.on?o():void t.on(r,o)}}return e}function n(e,a,r){function i(a,i){e.logger?e.logger.msg.apply(e.logger,i).module(r+""||"").level(a).log():e.log&&e.log.apply(e,i)}a.log=function(){i("log",arguments)},a.warn=function(){i("warn",arguments)},a.error=function(){i("error",arguments)}}function t(e,a,r){return i(e,a,r),e.plugin_version=w,e}function s(){if(l=window.SensorsData_APP_New_H5_Bridge,_=l&&l.sensorsdata_track,c=_&&l.sensorsdata_get_server_url&&l.sensorsdata_get_server_url(),u&&!u.bridge.activeBridge&&c){if(u.bridge.activeBridge=j,u.para.app_js_bridge&&!u.para.app_js_bridge.is_mui&&(u.bridge.is_verify_success=c&&u.bridge.validateAppUrl(c)),u.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:u.bridge.is_verify_success?"success":"fail",support_two_way_call:!!l.sensorsdata_js_call_app},!u.para.app_js_bridge)return void g("app_js_bridge is not configured, data will not be sent by android bridge.");u.registerInterceptor("sendDataStage",{send:{priority:60,entry:o}}),g("Android bridge inits succeed.")}}function o(e,a){if(u.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;return u.bridge.is_verify_success?(_&&_.call(l,JSON.stringify(p.extend({server_url:u.para.server_url},e.data))),p.isFunction(r)&&r(),a.cancellationToken.cancel(),e):u.para.app_js_bridge.is_send?(u.debug.apph5({data:e.data,step:"4.2",output:"all"}),e):(p.isFunction(r)&&r(),a.cancellationToken.cancel(),e)}function d(e){var a=e.callType;return a in m.commands?m.commands[a](e,l):void(l&&p.isFunction(l.sensorsdata_js_call_app)&&l.sensorsdata_js_call_app(JSON.stringify(e)))}var l,_,c,u,p,g,f=window.SensorsData_App_Visual_Bridge,v=f&&f.sensorsdata_visualized_mode,y=f&&f.sensorsdata_visualized_alert_info,b=f&&f.sensorsdata_hover_web_nodes,m={isVerify:function(){return v&&(v===!0||v.call(f))},commands:{app_alert:e,visualized_track:a,page_info:a,sensorsdata_get_app_visual_config:r}},w="1.25.22",j={init:function(e){u=e,p=u&&u._,g=u&&u.log||console&&console.log||function(){},s()},handleCommand:d},S=t(j,"AndroidBridge","sdkAfterInitPara");return S}();