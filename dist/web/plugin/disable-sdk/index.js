(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).DisableSDK=function(){"use strict";function n(n,t,o){if(t&&(n.plugin_name=t),o&&n.init){var e=n.init;n.init=function(r,l){function u(){e.call(n,r,l)}return i(r,n,t),r.readyState&&r.readyState.state>=3||!r.on?u():void r.on(o,u)}}return n}function i(n,i,t){function o(i,o){n.logger?n.logger.msg.apply(n.logger,o).module(t+""||"").level(i).log():n.log&&n.log.apply(n,o)}i.log=function(){o("log",arguments)},i.warn=function(){o("warn",arguments)},i.error=function(){o("error",arguments)}}function t(i,t,o){return n(i,t,o),i.plugin_version=l,i}function o(){u=!0}function e(){u=!1}function r(){return u}var l="1.25.17",u=!1,a=null,g={init:function(n){a=n,a.disableSDK=o,a.enableSDK=e,a.getDisabled=r}},c=t(g,"DisableSDK","sdkInitAPI");return c}();