var harmonyBridge,harmonyServerUrl,harmonyTrack,sd,_,log,sdkversion_placeholder="1.26.14";function wrapPluginInitFn(r,e,a){if(e&&(r.plugin_name=e),a&&r.init){var n=r.init;r.init=function(i,o){if(wrapLogFn(i,r,e),i.readyState&&i.readyState.state>=3||!i.on)return d();function d(){n.call(r,i,o)}i.on(a,d)}}return r}function wrapLogFn(r,e,a){function n(e,n){r.logger?r.logger.msg.apply(r.logger,n).module(a+""||"").level(e).log():r.log&&r.log.apply(r,n)}e.log=function(){n("log",arguments)},e.warn=function(){n("warn",arguments)},e.error=function(){n("error",arguments)}}function createPlugin(r,e,a){return wrapPluginInitFn(r,e,a),r.plugin_version=sdkversion_placeholder,r}var HarmonyBridge={init:function(r){_=(sd=r)&&sd._,log=sd&&sd.log||console&&console.log||function(){},initBridge()},handleCommand:handleCommand};function initBridge(){harmonyBridge=window.SensorsData_APP_New_H5_Bridge,harmonyServerUrl=harmonyBridge&&harmonyBridge.sensorsdata_harmony_get_server_url&&harmonyBridge.sensorsdata_harmony_get_server_url(),harmonyTrack=harmonyBridge&&harmonyBridge.sensorsdata_harmony_js_call_app,sd&&!sd.bridge.activeBridge&&harmonyServerUrl&&harmonyTrack?(sd.bridge.activeBridge=HarmonyBridge,sd.para.app_js_bridge&&!sd.para.app_js_bridge.is_mui&&(sd.bridge.is_verify_success=harmonyServerUrl&&sd.bridge.validateAppUrl(harmonyServerUrl)),sd.bridge.bridge_info={touch_app_bridge:!0,platform:"harmony",verify_success:sd.bridge.is_verify_success?"success":"fail",support_two_way_call:!1},sd.para.app_js_bridge?(sd.registerInterceptor("sendDataStage",{send:{priority:60,entry:sendData}}),log("Harmony bridge inits succeed.")):log("app_js_bridge is not configured, data will not be sent by harmony bridge.")):log("harmony bridge init failed.")}function sendData(r,e){if(sd.para.app_js_bridge.is_mui||"item_set"===r.data.type||"item_delete"===r.data.type)return r;var a=r.callback;return sd.bridge.is_verify_success?(harmonyTrack.call(harmonyBridge,JSON.stringify(_.extend({server_url:sd.para.server_url},r.data))),_.isFunction(a)&&a(),e.cancellationToken.cancel(),r):sd.para.app_js_bridge.is_send?(sd.debug.apph5({data:r.data,step:"4.2",output:"all"}),r):(_.isFunction(a)&&a(),e.cancellationToken.cancel(),r)}function handleCommand(){log("harmony sdk not supported command.")}var index=createPlugin(HarmonyBridge,"HarmonyBridge","sdkAfterInitPara");export default index;