var sd,source_channel_standard="utm_source utm_medium utm_campaign utm_content utm_term",sdkversion_placeholder="1.26.9";function wrapPluginInitFn(n,r,e){if(r&&(n.plugin_name=r),e&&n.init){var t=n.init;n.init=function(a,i){if(wrapLogFn(a,n,r),a.readyState&&a.readyState.state>=3||!a.on)return o();function o(){t.call(n,a,i)}a.on(e,o)}}return n}function wrapLogFn(n,r,e){function t(r,t){n.logger?n.logger.msg.apply(n.logger,t).module(e+""||"").level(r).log():n.log&&n.log.apply(n,t)}r.log=function(){t("log",arguments)},r.warn=function(){t("warn",arguments)},r.error=function(){t("error",arguments)}}function createPlugin(n,r,e){return wrapPluginInitFn(n,r,e),n.plugin_version=sdkversion_placeholder,n}var utm={init:function(n){n&&!sd&&(sd=n).registerInterceptor("businessStage",{getUtmData:{priority:0,entry:function(){return function(){var n=source_channel_standard.split(" "),r="",e={};sd._.isArray(sd.para.source_channel)&&sd.para.source_channel.length>0&&(n=n.concat(sd.para.source_channel),n=sd._.unique(n));return sd._.each(n,function(n){(r=sd._.getQueryParam(location.href,n)).length&&(e[n]=r)}),e}()}}})}},index=createPlugin(utm,"Utm","sdkAfterInitPara");export default index;