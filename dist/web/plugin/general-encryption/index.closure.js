!function(){"use strict";function n(n,t,e){if(t&&(n.plugin_name=t),e&&n.init){var r=n.init;n.init=function(o,c){function a(){r.call(n,o,c)}return i(o,n,t),o.readyState&&o.readyState.state>=3||!o.on?a():void o.on(e,a)}}return n}function i(n,i,t){function e(i,e){n.logger?n.logger.msg.apply(n.logger,e).module(t+""||"").level(i).log():n.log&&n.log.apply(n,e)}i.log=function(){e("log",arguments)},i.warn=function(){e("warn",arguments)},i.error=function(){e("error",arguments)}}function t(i,t,e){return n(i,t,e),i.plugin_version=o,i}var e,r,o="1.25.18",c={init:function(n,i){e=n,r=e._;var t=i&&i.encrypt_utils,o=window.console&&window.console.log||function(){};o=e&&e.log||o;var c=e.kit.encodeTrackData;return e&&e.kit&&c?r.isObject(t)&&r.isFunction(t.encryptEvent)&&r.isFunction(t.encryptSymmetricKeyWithPublicKey)&&r.isString(i.pub_key)&&r.isNumber(i.pkv)?(e.kit.encodeTrackData=function(n){try{var a=t.encryptEvent,l=t.encryptSymmetricKeyWithPublicKey,u=i.pkv,y=i.pub_key;if(r.isFunction(t.encryptEvent)){var p=a(n),d=e._.base64Encode(p),s={pkv:u,ekey:l(y),payloads:[d]},g=JSON.stringify(s),f=encodeURIComponent(g);return"data="+f}return c.call(e.kit,n)}catch(v){return o("Encrypted data exception."),c.call(e.kit,n)}},void o("GeneralEncryption Plugin initialized successfully.")):void o("GeneralEncryption Plugin initialization failed. parameter error."):void o("Web SDK initialization failed.")}},a=t(c,"GeneralEncryption","sdkReady");return a}();