!function(){"use strict";function e(e,i,n){if(i&&(e.plugin_name=i),n&&e.init){var o=e.init;e.init=function(r,g){function l(){o.call(e,r,g)}return t(r,e,i),r.readyState&&r.readyState.state>=3||!r.on?l():void r.on(n,l)}}return e}function t(e,t,i){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(i+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function i(t,i,n){return e(t,i,n),t.plugin_version=g,t}function n(e){try{if("$pageview"!==e.event&&(!e.type||"profile"!==e.type.slice(0,7))){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,i=document.documentElement.scrollHeight||0,n={$page_height:Math.max(t,i)||0};e.properties=o._.extend(e.properties||{},n)}}catch(g){l("\u9875\u9762\u9ad8\u5ea6\u83b7\u53d6\u5f02\u5e38\u3002")}return r.call(o.kit,e)}var o,r,g="1.25.22",l=window.console&&window.console.log||function(){},a={init:function(e){return o=e,l=o&&o.log||l,e&&e.kit&&e.kit.buildData?(r=o.kit.buildData,o.kit.buildData=n,void l("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")):void l("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301 RegisterPropertyPageHeight \u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk")}},u=i(a,"RegisterPropertyPageHeight","sdkReady");return u}();