var sd,_,sdkversion_placeholder="1.26.9";function wrapPluginInitFn(e,r,a){if(r&&(e.plugin_name=r),a&&e.init){var n=e.init;e.init=function(d,t){if(wrapLogFn(d,e,r),d.readyState&&d.readyState.state>=3||!d.on)return i();function i(){n.call(e,d,t)}d.on(a,i)}}return e}function wrapLogFn(e,r,a){function n(r,n){e.logger?e.logger.msg.apply(e.logger,n).module(a+""||"").level(r).log():e.log&&e.log.apply(e,n)}r.log=function(){n("log",arguments)},r.warn=function(){n("warn",arguments)},r.error=function(){n("error",arguments)}}function createPlugin(e,r,a){return wrapPluginInitFn(e,r,a),e.plugin_version=sdkversion_placeholder,e}function debugPath(e){var r=e,a="";a=-1!==sd.para.debug_mode_url.indexOf("?")?sd.para.debug_mode_url+"&"+sd.kit.encodeTrackData(e):sd.para.debug_mode_url+"?"+sd.kit.encodeTrackData(e),_.ajax({url:a,type:"GET",cors:!0,header:{"Dry-Run":String(sd.para.debug_mode_upload)},success:function(e){!0===_.isEmptyObject(e)?alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f"+r):alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0"+JSON.stringify(e))}})}function sendData(e,r){if(!0===sd.para.debug_mode){var a=e.data;e.callback;debugPath(JSON.stringify(a)),r.cancellationToken.stop()}return e}function initPara(){!0===sd.para.debug_mode&&(sd.para.debug_mode_upload=sd.para.debug_mode_upload||!1,_.isString(sd.para.debug_mode_url)||(_.isString(sd.para.server_url)?sd.para.debug_mode_url=sd.para.server_url.replace("sa.gif","debug"):_.isArray(sd.para.server_url)&&_.isString(sd.para.server_url[0])?sd.para.debug_mode_url=sd.para.server_url[0].replace("sa.gif","debug"):sd.para.debug_mode=!1))}function senderInit(){sd.on("sdkInitPara",function(){initPara()}),sd.on("sdkAfterInitPara",function(){sd.registerInterceptor("sendDataStage",{send:{priority:30,entry:sendData}})})}var DebugSender={plugin_name:"DebugSender",init:function(e){_=(sd=e)._,senderInit()}},index=createPlugin(DebugSender);export default index;