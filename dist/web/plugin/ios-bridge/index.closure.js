!function(){"use strict";function e(e,r,a){if(r&&(e.plugin_name=r),a&&e.init){var n=e.init;e.init=function(t,s){function o(){n.call(e,t,s)}return i(t,e,r),t.readyState&&t.readyState.state>=3||!t.on?o():void t.on(a,o)}}return e}function i(e,i,r){function a(i,a){e.logger?e.logger.msg.apply(e.logger,a).module(r+""||"").level(i).log():e.log&&e.log.apply(e,a)}i.log=function(){a("log",arguments)},i.warn=function(){a("warn",arguments)},i.error=function(){a("error",arguments)}}function r(i,r,a){return e(i,r,a),i.plugin_version=g,i}function a(){if(s=window.SensorsData_iOS_JS_Bridge&&window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url,o=function(){return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.sensorsdataNativeTracker},d&&!d.bridge.activeBridge&&o()&&o().postMessage){if(d.bridge.activeBridge=l,d.para.app_js_bridge&&!d.para.app_js_bridge.is_mui&&(d.bridge.is_verify_success=s&&d.bridge.validateAppUrl(s)),d.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:d.bridge.is_verify_success?"success":"fail",support_two_way_call:!0},!d.para.app_js_bridge)return void c("app_js_bridge is not configured, data will not be sent by iOS bridge.");d.registerInterceptor("sendDataStage",{send:{priority:70,entry:n}}),c("IOS bridge inits succeed.")}}function n(e,i){if(d.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;return d.bridge.is_verify_success?(o()&&o().postMessage(JSON.stringify({callType:"app_h5_track",data:_.extend({server_url:d.para.server_url},e.data)})),_.isFunction(r)&&r(),i.cancellationToken.cancel(),e):d.para.app_js_bridge.is_send?(d.debug.apph5({data:e.data,step:"4.1",output:"all"}),e):(_.isFunction(r)&&r(),i.cancellationToken.cancel(),e)}function t(e){var i=e.callType;return"page_info"!==i&&"visualized_track"!==i||d.bridge.hasVisualModeBridge()?"sensorsdata_get_app_visual_config"===i?_.isObject(window.SensorsData_APP_New_H5_Bridge)&&window.SensorsData_APP_New_H5_Bridge[i]:o()&&o().postMessage(JSON.stringify(e)):null}var s,o,d,_,c,g="1.25.22",l={init:function(e){d=e,_=d&&d._,c=d&&d.log||console&&console.log||function(){},a()},handleCommand:t},u=r(l,"IOSBridge","sdkAfterInitPara");return u}();