var sd,_,log,sdkversion_placeholder="1.25.22";function wrapPluginInitFn(n,e,t){if(e&&(n.plugin_name=e),t&&n.init){var r=n.init;n.init=function(a,i){if(wrapLogFn(a,n,e),a.readyState&&a.readyState.state>=3||!a.on)return o();function o(){r.call(n,a,i)}a.on(t,o)}}return n}function wrapLogFn(n,e,t){function r(e,r){n.logger?n.logger.msg.apply(n.logger,r).module(t+""||"").level(e).log():n.log&&n.log.apply(n,r)}e.log=function(){r("log",arguments)},e.warn=function(){r("warn",arguments)},e.error=function(){r("error",arguments)}}function createPlugin(n,e,t){return wrapPluginInitFn(n,e,t),n.plugin_version=sdkversion_placeholder,n}function flattenArray(n){var e=[];return _.each(n,function(n){_.isArray(n)?e=e.concat(flattenArray(n)):e.push(_.optimizeServerUrl(n))}),e}function hasEqualServerUrl(n,e){e=_.isArray(e)?e:[e];var t=!1;return _.isArray(n)?_.each(n,function(n){_.indexOf(e,n)>-1&&(t=!0)}):_.indexOf(e,n)>-1&&(t=!0),t}function getSendUrl(n,e){var t=sd.kit.encodeTrackData(e);return-1!==n.indexOf("?")?n+"&"+t:n+"?"+t}var sender={hookFn:null,init:function(n){this.hookFn=n,sd.registerInterceptor("sendDataStage",{send:{priority:20,entry:function(n,e){return sender.sendData(n,e),n}}})},sendData:function(n,e){var t=n.data,r=t.event,a=n.server_url,i=n.callback,o=this,l=this.hookFn({event_name:r,data:_.extend2Lev({identities:{},lib:{},properties:{}},t),server_url:a});return _.isArray(l)&&l.length?(l=flattenArray(l),hasEqualServerUrl(a,l)?i=null:e.cancellationToken.stop(),_.each(l,function(e){if(e&&""!==e&&!hasEqualServerUrl(e,a)){var t=(r=e,function(){o.sendCall({server_url:r,data:n.data,config:null,callback:i}),i=null,n.callback=null});setTimeout(t)}var r}),n):(_.isFunction(i)&&i(),e.cancellationToken.stop(),n)},getInstance:function(n){return"beacon"===sd.para.send_type&&_.isSupportBeaconSend()?(n.data=sd.kit.encodeTrackData(n.data),new _.BeaconSend(n)):"ajax"===sd.para.send_type&&_.isSupportCors()?(n.data=sd.kit.encodeTrackData(n.data),new _.AjaxSend(n)):(n.data.time=1*new Date,n.data=getSendUrl(n.server_url,n.data),new _.ImageSend(n))},sendCall:function(n){this.getInstance(n).start()}},CustomEventsSender={plugin_name:"CustomEventsSender",init:function(n,e){if(_=(sd=n)._,log=sd&&sd.log||console&&console.log||function(){},_.isFunction(e)){if(sd.readyState&&sd.readyState.state>=3||!sd.on)return sender.init(e);sd.on("sdkAfterInitPara",function(){sender.init(e)})}else log("CustomEventsSender init failed\uff0chookFn error. hookFn:",e)}},index=createPlugin(CustomEventsSender);export default index;