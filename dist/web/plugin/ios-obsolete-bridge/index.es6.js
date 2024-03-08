var sd,_,log,sdkversion_placeholder="1.26.7";function wrapPluginInitFn(e,r,t){if(r&&(e.plugin_name=r),t&&e.init){var n=e.init;e.init=function(i,s){if(wrapLogFn(i,e,r),i.readyState&&i.readyState.state>=3||!i.on)return a();function a(){n.call(e,i,s)}i.on(t,a)}}return e}function wrapLogFn(e,r,t){function n(r,n){e.logger?e.logger.msg.apply(e.logger,n).module(t+""||"").level(r).log():e.log&&e.log.apply(e,n)}r.log=function(){n("log",arguments)},r.warn=function(){n("warn",arguments)},r.error=function(){n("error",arguments)}}function createPlugin(e,r,t){return wrapPluginInitFn(e,r,t),e.plugin_version=sdkversion_placeholder,e}var IOSObsoleteBridge={init:function(e){_=(sd=e)&&sd._,log=sd&&sd.log||console&&console.log||function(){},initBridge()}};function initBridge(){sd&&!sd.bridge.activeBridge&&hasBridge()&&(sd.bridge.activeBridge=IOSObsoleteBridge,sd.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:verifyIOSObsoleteBridge()?"success":"fail"},sd.para.app_js_bridge?(sd.registerInterceptor("sendDataStage",{send:{priority:90,entry:sendData}}),log("IOS obsolete bridge inits succeed.")):log("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."))}function hasBridge(){return(/sensors-verify/.test(navigator.userAgent)||/sa-sdk-ios/.test(navigator.userAgent))&&!window.MSStream}function verifyIOSObsoleteBridge(){if(/sensors-verify/.test(navigator.userAgent)){var e=navigator.userAgent.match(/sensors-verify\/([^\s]+)/);if(e&&e[0]&&"string"==typeof e[1]&&2===e[1].split("?").length){e=e[1].split("?");var r=null,t=null;try{r=_.URL(sd.para.server_url).hostname,t=_.URL(sd.para.server_url).searchParams.get("project")||"default"}catch(n){sd.log(n)}return!(!r||r!==e[0]||!t||t!==e[1])}return!1}return!!/sa-sdk-ios/.test(navigator.userAgent)}function sendData(e,r){if(sd.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var t,n,i=e.callback;if(sd.bridge.bridge_info.verify_success){var s=document.createElement("iframe"),a=(t=e.data,n=(n=JSON.stringify(_.extend({server_url:sd.para.server_url},t))).replace(/\r\n/g,""),"sensorsanalytics://trackEvent?event="+(n=encodeURIComponent(n)));return s.setAttribute("src",a),document.documentElement.appendChild(s),s.parentNode.removeChild(s),s=null,_.isFunction(i)&&i(),r.cancellationToken.cancel(),!0}return sd.para.app_js_bridge.is_send?(sd.debug.apph5({data:e.data,step:"3.2",output:"all"}),e):(_.isFunction(i)&&i(),r.cancellationToken.cancel(),e)}var index=createPlugin(IOSObsoleteBridge,"IOSObsoleteBridge","sdkAfterInitPara");export default index;