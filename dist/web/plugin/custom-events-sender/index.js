(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).CustomEventsSender=function(){"use strict";function n(n,t,a){if(t&&(n.plugin_name=t),a&&n.init){var r=n.init;n.init=function(i,o){function u(){r.call(n,i,o)}return e(i,n,t),i.readyState&&i.readyState.state>=3||!i.on?u():void i.on(a,u)}}return n}function e(n,e,t){function a(e,a){n.logger?n.logger.msg.apply(n.logger,a).module(t+""||"").level(e).log():n.log&&n.log.apply(n,a)}e.log=function(){a("log",arguments)},e.warn=function(){a("warn",arguments)},e.error=function(){a("error",arguments)}}function t(e,t,a){return n(e,t,a),e.plugin_version=l,e}function a(n){var e=[];return u.each(n,function(n){u.isArray(n)?e=e.concat(a(n)):e.push(u.optimizeServerUrl(n))}),e}function r(n,e){e=u.isArray(e)?e:[e];var t=!1;return u.isArray(n)?u.each(n,function(n){u.indexOf(e,n)>-1&&(t=!0)}):u.indexOf(e,n)>-1&&(t=!0),t}function i(n,e){var t=o.kit.encodeTrackData(e);return n.indexOf("?")!==-1?n+"&"+t:n+"?"+t}var o,u,c,l="1.25.18",s={hookFn:null,init:function(n){this.hookFn=n,o.registerInterceptor("sendDataStage",{send:{priority:20,entry:function(n,e){return s.sendData(n,e),n}}})},sendData:function(n,e){var t=n.data,i=t.event,o=n.server_url,c=n.callback,l=this,s=this.hookFn({event_name:i,data:u.extend2Lev({identities:{},lib:{},properties:{}},t),server_url:o});return u.isArray(s)&&s.length?(s=a(s),r(o,s)?c=null:e.cancellationToken.stop(),u.each(s,function(e){if(e&&""!==e&&!r(e,o)){var t=function(e){return function(){l.sendCall({server_url:e,data:n.data,config:null,callback:c}),c=null,n.callback=null}}(e);setTimeout(t)}}),n):(u.isFunction(c)&&c(),e.cancellationToken.stop(),n)},getInstance:function(n){return"beacon"===o.para.send_type&&u.isSupportBeaconSend()?(n.data=o.kit.encodeTrackData(n.data),new u.BeaconSend(n)):"ajax"===o.para.send_type&&u.isSupportCors()?(n.data=o.kit.encodeTrackData(n.data),new u.AjaxSend(n)):(n.data.time=1*new Date,n.data=i(n.server_url,n.data),new u.ImageSend(n))},sendCall:function(n){var e=this.getInstance(n);e.start()}},d={plugin_name:"CustomEventsSender",init:function(n,e){if(o=n,u=o._,c=o&&o.log||console&&console.log||function(){},u.isFunction(e)){if(o.readyState&&o.readyState.state>=3||!o.on)return s.init(e);o.on("sdkAfterInitPara",function(){s.init(e)})}else c("CustomEventsSender init failed\uff0chookFn error. hookFn:",e)}},f=t(d);return f}();