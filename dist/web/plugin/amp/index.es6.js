var sdkversion_placeholder="1.26.5";function wrapPluginInitFn(i,t,n){if(t&&(i.plugin_name=t),n&&i.init){var e=i.init;i.init=function(s,r){if(wrapLogFn(s,i,t),s.readyState&&s.readyState.state>=3||!s.on)return d();function d(){e.call(i,s,r)}s.on(n,d)}}return i}function wrapLogFn(i,t,n){function e(t,e){i.logger?i.logger.msg.apply(i.logger,e).module(n+""||"").level(t).log():i.log&&i.log.apply(i,e)}t.log=function(){e("log",arguments)},t.warn=function(){e("warn",arguments)},t.error=function(){e("error",arguments)}}function createPlugin(i,t,n){return wrapPluginInitFn(i,t,n),i.plugin_version=sdkversion_placeholder,i}var amp={sd:null,init:function(i){if(this.sd)return!1;if(this.sd=i,!this.sd||!this.sd._)return!1;var t=this.sd._.cookie.get("sensors_amp_id"),n=this.sd.store._state.distinct_id;if(t&&t.length>0){var e="amp-"===t.slice(0,4);if(t!==n){if(!e)return!1;this.sd.store._state.first_id?(this.sd.identify(t,!0),this.sd.saEvent.send({original_id:t,distinct_id:n,type:"track_signup",event:"$SignUp",properties:{}},null),this.setAmpId(n)):this.sd.identify(t,!0)}}else this.setAmpId(n);this.addListener()},addListener:function(){var i=this;this.sd.events.on("changeDistinctId",function(t){i.setAmpId(t)}),this.sd.events.isReady()},setAmpId:function(i){this.sd._.cookie.set("sensors_amp_id",i)}},index=createPlugin(amp,"Amp","sdkReady");export default index;