var sd,_,sdkversion_placeholder="1.25.7";function wrapPluginInitFn(n,e,r){if(e&&(n.plugin_name=e),r&&n.init){var a=n.init;n.init=function(t,i){if(wrapLogFn(t,n,e),t.readyState&&t.readyState.state>=3||!t.on)return o();function o(){a.call(n,t,i)}t.on(r,o)}}return n}function wrapLogFn(n,e,r){function a(e,a){n.logger?n.logger.msg.apply(n.logger,a).module(r+""||"").level(e).log():n.log&&n.log.apply(n,a)}e.log=function(){a("log",arguments)},e.warn=function(){a("warn",arguments)},e.error=function(){a("error",arguments)}}function createPlugin(n,e,r){return wrapPluginInitFn(n,e,r),n.plugin_version=sdkversion_placeholder,n}function sendData(n){new _.AjaxSend(n).start()}function sendInterceptor(n,e){if("ajax"===sd.para.send_type){var r=n.server_url;n.data=sd.kit.encodeTrackData(n.data),_.isArray(r)&&r.length?_.each(r,function(e){n.callback=null,n.server_url=e,sendData(n)}):"string"==typeof sd.para.server_url&&""!==sd.para.server_url?sendData(n):sd.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),e.cancellationToken.stop()}return n}function initPara(){"ajax"!==sd.para.send_type||_.isSupportCors()||(sd.para.send_type="image")}function senderInit(){sd.on("sdkInitPara",function(){initPara()}),sd.on("sdkAfterInitPara",function(){sd.registerInterceptor("sendDataStage",{send:{priority:120,entry:sendInterceptor}})})}var AjaxSender={plugin_name:"AjaxSender",init:function(n){_=(sd=n)._,senderInit()}},index=createPlugin(AjaxSender);export default index;