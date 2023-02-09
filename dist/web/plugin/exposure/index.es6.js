var sd,_,log,sdkversion_placeholder="1.24.12";function wrapPluginInitFn(e,t,n){if(t&&(e.plugin_name=t),n&&e.init){var r=e.init;e.init=function(t,i){if(t.readyState&&t.readyState.state>=3||!t.on)return o();function o(){r.call(e,t,i)}t.on(n,o)}}return e}function createPlugin(e,t,n){return wrapPluginInitFn(e,t,n),e.plugin_version=sdkversion_placeholder,e}var EXPOSURE_ATTR_EVENT_NAME="data-sensors-exposure-event-name",exposureIntersection={},exposureEleOption=[],exposureConfig={area_rate:0,stay_duration:0,repeated:!0};function isSupport(){return("MutationObserver"in window||"WebKitMutationObserver"in window||"MozMutationObserver"in window)&&"IntersectionObserver"in window}function formatConfig(e){var t={};return _.each(e,function(n,r){switch(r){case"area_rate":n=Number(n),!isNaN(n)&&n>=0&&n<=1?t.area_rate=n:log("parameter config.area_rate error. config:",e);break;case"stay_duration":n=Number(n),!isNaN(n)&&n>=0?t.stay_duration=n:log("parameter config.stay_duration error. config:",e);break;case"repeated":"false"===n||!1===n||"true"===n||!0===n?t.repeated=n:log("parameter config.repeated error. config:",e)}}),t}var exposurePlugin={isReady:!1,init:function(e){if(isSupport()){var t=this;_.isObject(e)&&(exposureConfig=_.extend(exposureConfig,formatConfig(e))),_.bindReady(function(){var e=t.getElesByEventName();t.addObserveByNodes(e),mutation.init()}),sd.ee.spa.on("switch",function(e){if(e===location.href)return!1;t.clear();var n=t.getElesByEventName();t.addObserveByNodes(n)}),_.listenPageState({visible:function(){t.start()},hidden:function(){t.stop()}}),this.isReady=!0}else log("The current browser does not support the element exposure key API, and the element exposure plugin initialization failed.")},getElesByEventName:function(e){return(e=e||document).querySelectorAll("["+EXPOSURE_ATTR_EVENT_NAME+"]")},getEleEventName:function(e){return e.getAttribute(EXPOSURE_ATTR_EVENT_NAME)},getEleAttr:function(e,t){t=t||e.attributes;var n={},r={},i=this.getEleEventName(e);return _.each(t,function(e){var t=e.value;try{var i=e.name.match(/^data-sensors-exposure-property-(.+)/);i&&(n[i[1]]=t)}catch(a){}try{var o=e.name.match(/^data-sensors-exposure-config-(.+)/);if(o)switch(o[1]){case"area_rate":r.area_rate=t;break;case"stay_duration":r.stay_duration=t;break;case"repeated":r.repeated=!1}}catch(a){}}),{eventName:i,config:formatConfig(r),properties:n}},addObserveByNodes:function(e){if(e.length){var t=this;_.each(e,function(e){if(1===e.nodeType&&e.hasAttribute(EXPOSURE_ATTR_EVENT_NAME)){var n=t.getEleAttr(e);n.config=_.extend({},exposureConfig,n.config),n.ele=e,t.addOrUpdateWatchEle(n)}})}},getIntersection:function(e){var t=this;return exposureIntersection[e.area_rate]?exposureIntersection[e.area_rate]:exposureIntersection[e.area_rate]=new IntersectionObserver(function(){t.exposure.apply(t,arguments)},{threshold:e.area_rate})},exposure:function(e){var t=this;_.each(e,function(e){var n=e.target,r=t.getEleOption(n);!1!==e.isIntersecting&&r&&!r.config.isSend?e.intersectionRatio>=r.config.area_rate&&(r.timer&&(clearTimeout(r.timer),r.timer=null),r.timer=setTimeout(function(){var e=n.getBoundingClientRect(),r=t.getEleOption(n);if(e.width&&e.height&&r&&r.eventName&&!r.config.isSend){var i=sd.heatmap.getEleDetail(n);sd.track(r.eventName,_.extend({},i,r.properties)),r.config.isSend=!0,r.config.repeated&&(r.config.isSend=!1)}},1e3*r.config.stay_duration)):r&&r.timer&&(clearTimeout(r.timer),r.timer=null)})},getEleOption:function(e){var t=null;return _.each(exposureEleOption,function(n){e===n.ele&&(t=n)}),t},addOrUpdateWatchEle:function(e){var t=e.ele,n=e.config,r=exposurePlugin.getEleOption(t);if(r)_.extend2Lev(r,e),r.config.repeated&&(r.config.isSend=!1);else{if(!e.eventName)return log("parameter option.eventName error. option:",e),!1;_.isElement(t)||log("parameter element error. option:",e),this.getIntersection(n).observe(t),exposureEleOption.push(e)}},removeWatchEle:function(e){var t=null,n=-1;if(_.each(exposureEleOption,function(r,i){e===r.ele&&(t=r,n=i)}),t){var r=t.config,i=exposureIntersection[r.area_rate];i&&_.isElement(e)&&(i.unobserve(e),t.timer&&(clearTimeout(t.timer),t.timer=null),n>-1&&exposureEleOption.splice(n,1))}},start:function(){_.each(exposureEleOption,function(e){var t=e.config,n=e.ele,r=exposureIntersection[t.area_rate];r&&_.isElement(n)&&r.observe(n)})},stop:function(){_.each(exposureEleOption,function(e){var t=e.config,n=e.ele,r=exposureIntersection[t.area_rate];r&&_.isElement(n)&&(r.unobserve(n),e.timer&&(clearTimeout(e.timer),e.timer=null))})},clear:function(){this.stop(),exposureIntersection={},exposureEleOption=[]}},mutation={mo:null,init:function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;this.mo=new e(this.listenNodesChange),this.observe()},observe:function(){this.mo.observe(document.body,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0})},listenNodesChange:function(e){_.each(e,function(e){switch(e.type){case"childList":e.removedNodes.length>0?_.each(e.removedNodes,function(e){if(1===e.nodeType){exposurePlugin.removeWatchEle(e);var t=exposurePlugin.getElesByEventName(e);t.length&&_.each(t,function(e){exposurePlugin.removeWatchEle(e)})}}):e.addedNodes.length&&(exposurePlugin.addObserveByNodes(e.addedNodes),_.each(e.addedNodes,function(e){if(1===e.nodeType){var t=exposurePlugin.getElesByEventName(e);exposurePlugin.addObserveByNodes(t)}}));break;case"attributes":if(!e.attributeName)return!1;var t=e.target,n=e.attributeName;if(!_.isString(n)||n.indexOf("data-sensors-exposure")<0)return;var r=exposurePlugin.getEleAttr(t,[{name:n}]),i=exposurePlugin.getEleOption(t)||{ele:t,config:exposureConfig},o=_.extend2Lev({},i,r);Object.prototype.hasOwnProperty.call(o,"eventName")?exposurePlugin.addOrUpdateWatchEle(o):exposurePlugin.removeWatchEle(t)}})}},Exposure={exposureViews:exposureEleOption,init:function(e,t){if(!e||sd)return!1;_=(sd=e)._,log=sd.log,exposurePlugin.init(t),log("Exposure Plugin initialized successfully")},addExposureView:function(e,t){if(exposurePlugin.isReady)if(_.isElement(e)){var n={ele:e,config:_.isObject(t.config)?formatConfig(t.config):{},eventName:t.eventName,properties:_.isObject(t.properties)?t.properties:{}},r=exposurePlugin.getEleOption(e);if(r){if(r=_.extend2Lev({},r,n),!_.isString(r.eventName)||!r.eventName)return void log("parameter option.eventName error. option",t);r.config.repeated&&(r.config.isSend=!1)}else{if(!_.isString(n.eventName)||!n.eventName)return void log("parameter option.eventName error. option",t);exposurePlugin.addOrUpdateWatchEle(n)}}else log("parameter element error.");else log("Exposure Plugin uninitialized.")},removeExposureView:function(e){exposurePlugin.isReady?_.isElement(e)?exposurePlugin.removeWatchEle(e):log("removeExposureView parameter ele errors."):log("Exposure Plugin uninitialized.")}},index=createPlugin(Exposure,"Exposure","sdkAfterInitPara");export default index;