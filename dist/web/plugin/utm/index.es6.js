var sd,source_channel_standard="utm_source utm_medium utm_campaign utm_content utm_term",sdkversion_placeholder="1.24.12";function wrapPluginInitFn(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var r=n.init;n.init=function(t,a){if(t.readyState&&t.readyState.state>=3||!t.on)return i();function i(){r.call(n,t,a)}t.on(e,i)}}return n}function createPlugin(n,t,e){return wrapPluginInitFn(n,t,e),n.plugin_version=sdkversion_placeholder,n}var utm={init:function(n){n&&!sd&&(sd=n).registerInterceptor("businessStage",{getUtmData:{priority:0,entry:function(){return function(){var n=source_channel_standard.split(" "),t="",e={};sd._.isArray(sd.para.source_channel)&&sd.para.source_channel.length>0&&(n=n.concat(sd.para.source_channel),n=sd._.unique(n));return sd._.each(n,function(n){(t=sd._.getQueryParam(location.href,n)).length&&(e[n]=t)}),e}()}}})}},index=createPlugin(utm,"Utm","sdkAfterInitPara");export default index;