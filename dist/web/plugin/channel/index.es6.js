var _,sd,store,cookie_name,sdkversion_placeholder="1.26.14";function wrapPluginInitFn(e,n,t){if(n&&(e.plugin_name=n),t&&e.init){var i=e.init;e.init=function(a,r){if(wrapLogFn(a,e,n),a.readyState&&a.readyState.state>=3||!a.on)return l();function l(){i.call(e,a,r)}a.on(t,l)}}return e}function wrapLogFn(e,n,t){function i(n,i){e.logger?e.logger.msg.apply(e.logger,i).module(t+""||"").level(n).log():e.log&&e.log.apply(e,i)}n.log=function(){i("log",arguments)},n.warn=function(){i("warn",arguments)},n.error=function(){i("error",arguments)}}function createPlugin(e,n,t){return wrapPluginInitFn(e,n,t),e.plugin_version=sdkversion_placeholder,e}var Channel={event_list:[],latest_event_initial_time:null,max_save_time:2592e6,init:function(e,n){if(sd||!e)return!1;cookie_name=(n=n||{}).cookie_name||"sensorsdata2015jssdkchannel",sd=e;var t=this;!function(){if(_=sd._,store=sd.store,!_.localStorage.isSupport())return!1;sd.para.max_string_length=1024,t.eventList.init(),t.addLatestChannelUrl(),t.addIsChannelCallbackEvent()}()},addIsChannelCallbackEvent:function(){sd.registerPage({$is_channel_callback_event:function(e){if(_.isObject(e)&&e.event&&"$WebClick"!==e.event&&"$pageview"!==e.event&&"$WebStay"!==e.event&&"$SignUp"!==e.event)return!Channel.eventList.hasEvent(e.event)&&(Channel.eventList.add(e.event),!0)}})},addLatestChannelUrl:function(){var e=this.getUrlDomain(),n=this.cookie.getChannel();if("url\u89e3\u6790\u5931\u8d25"===e)this.registerAndSave({_sa_channel_landing_url:"",_sa_channel_landing_url_error:"url\u7684domain\u89e3\u6790\u5931\u8d25"});else if(_.isReferralTraffic(document.referrer)){var t=_.getQueryParam(location.href,"sat_cf");_.isString(t)&&t.length>0?(this.registerAndSave({_sa_channel_landing_url:location.href}),Channel.channelLinkHandler()):this.registerAndSave({_sa_channel_landing_url:""})}else n?sd.registerPage(n):sd.registerPage({_sa_channel_landing_url:"",_sa_channel_landing_url_error:"\u53d6\u503c\u5f02\u5e38"})},registerAndSave:function(e){sd.registerPage(e),this.cookie.saveChannel(e)},cookie:{getChannel:function(){var e=sd.kit.userDecryptIfNeeded(_.cookie.get(cookie_name));return e=_.safeJSONParse(e),!(!_.isObject(e)||!e.prop)&&e.prop},saveChannel:function(e){var n={prop:e},t=JSON.stringify(n);sd.para.encrypt_cookie&&(t=sd.kit.userEncrypt(t)),_.cookie.set(cookie_name,t)}},channelLinkHandler:function(){this.eventList.reset(),sd.track("$ChannelLinkReaching")},getUrlDomain:function(){var e=_.info.pageProp.url_domain;return""===e&&(e="url\u89e3\u6790\u5931\u8d25"),e},eventList:{init:function(){var e=this.get(),n=(new Date).getTime();if(e&&_.isNumber(e.latest_event_initial_time)&&_.isArray(e.eventList)){var t=n-e.latest_event_initial_time;t>0&&t<Channel.max_save_time?(Channel.event_list=e.eventList,Channel.latest_event_initial_time=e.latest_event_initial_time):this.reset()}else this.reset()},get:function(){var e={};try{e=store.readObjectVal("sawebjssdkchannel")}catch(n){sd.log(n)}return e},add:function(e){Channel.event_list.push(e),this.save()},save:function(){var e={latest_event_initial_time:Channel.latest_event_initial_time,eventList:Channel.event_list};store.saveObjectVal("sawebjssdkchannel",e)},reset:function(){Channel.event_list=[],Channel.latest_event_initial_time=(new Date).getTime(),this.save()},hasEvent:function(e){var n=!1;return _.each(Channel.event_list,function(t){t===e&&(n=!0)}),n}}},index=createPlugin(Channel,"SensorsChannel","sdkAfterInitAPI");export default index;