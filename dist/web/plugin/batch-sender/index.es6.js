var sd,_,sdkversion_placeholder="1.26.14";function wrapPluginInitFn(n,a,t){if(a&&(n.plugin_name=a),t&&n.init){var e=n.init;n.init=function(r,o){if(wrapLogFn(r,n,a),r.readyState&&r.readyState.state>=3||!r.on)return i();function i(){e.call(n,r,o)}r.on(t,i)}}return n}function wrapLogFn(n,a,t){function e(a,e){n.logger?n.logger.msg.apply(n.logger,e).module(t+""||"").level(a).log():n.log&&n.log.apply(n,e)}a.log=function(){e("log",arguments)},a.warn=function(){e("warn",arguments)},a.error=function(){e("error",arguments)}}function createPlugin(n,a,t){return wrapPluginInitFn(n,a,t),n.plugin_version=sdkversion_placeholder,n}var batchInstance=null;function sendData(n,a){return!sd.para.app_js_bridge&&sd.para.batch_send&&_.localStorage.isSupport()&&localStorage.length<sd.para.batch_send.storage_length&&(batchInstance.add(n.data),a.cancellationToken.stop()),n}function initPara(){var n={datasend_timeout:6e3,send_interval:6e3,storage_length:200};_.localStorage.isSupport()&&_.isSupportCors()&&"object"==typeof localStorage?!0===sd.para.batch_send?sd.para.batch_send=_.extend({},n):"object"==typeof sd.para.batch_send&&(sd.para.batch_send=_.extend({},n,sd.para.batch_send)):sd.para.batch_send=!1}function senderInit(){sd.on("sdkInitPara",function(){initPara()}),sd.on("sdkAfterInitPara",function(){!sd.para.app_js_bridge&&sd.para.batch_send&&_.localStorage.isSupport()&&(batchInstance||(batchInstance=new _.BatchSend),batchInstance.batchInterval(),sd.registerInterceptor("sendDataStage",{send:{priority:100,entry:sendData}}))})}var BatchSender={plugin_name:"BatchSender",init:function(n){_=(sd=n)._,senderInit()}},index=createPlugin(BatchSender);export default index;