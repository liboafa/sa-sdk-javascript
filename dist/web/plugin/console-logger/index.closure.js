!function(){"use strict";function o(o,e,t){if(e&&(o.plugin_name=e),t&&o.init){var r=o.init;o.init=function(l,i){function s(){r.call(o,l,i)}return n(l,o,e),l.readyState&&l.readyState.state>=3||!l.on?s():void l.on(t,s)}}return o}function n(o,n,e){function t(n,t){o.logger?o.logger.msg.apply(o.logger,t).module(e+""||"").level(n).log():o.log&&o.log.apply(o,t)}n.log=function(){t("log",arguments)},n.warn=function(){t("warn",arguments)},n.error=function(){t("error",arguments)}}function e(n,e,t){return o(n,e,t),n.plugin_version=v,n}function t(o){return null===h?void r(o):void h.push(o)}function r(o){try{if("log"===o.level&&l())return void a(o);if("warn"===o.level&&i())return void a(o);if("error"===o.level&&s())return void a(o)}catch(n){}}function l(){return!!f()||(p.para.show_log===!0||d.isObject(p.para.show_log)&&"log"===p.para.show_log.level)}function i(){return!!f()||(l()||d.isObject(p.para.show_log)&&"warn"===p.para.show_log.level)}function s(){return!!f()||(!d.isObject(p.para.show_log)||"none"!==p.para.show_log.level)}function a(o){var n=o.content,e=d.isObject(n[0])?d.formatJsonString(n[0]):n[0],t=u(o);n[0]=t+(t.length>0?": ":"")+e;try{console&&(d.isFunction(console[o.level])?console[o.level].apply(console,n):d.isObject(console[o.level])&&console[o.level](n[0]))}catch(r){}}function u(o){var n="",e="",t=p.para.show_log;return d.isObject(t)&&t.show_brand===!1||(n+=o.brand),d.isObject(t)&&t.show_level===!1||(n+=(n.length>0?"-":"")+o.level),n.length>0&&(n="["+n+"]"),d.isObject(t)&&t.show_module===!1||(e=o.module),n+e}function c(){d.sessionStorage.isSupport()&&sessionStorage.setItem(b,"true")}function g(){d.sessionStorage.isSupport()&&sessionStorage.removeItem(b)}function f(){return d.sessionStorage.isSupport()&&"true"===sessionStorage.getItem(b)}var v="1.25.17",p=null,d=null,h=[],_={init:function(o){o&&(p=o,d=p._,p.logger&&p.logger.appendWriter(t),p.on&&p.on("sdkAfterInitPara",function(){for(var o=0;o<h.length;o++)r(h[o]);h=null}),p.on&&p.on("sdkInitAPI",function(){p.enableLocalLog=c,p.disableLocalLog=g}))}},w=e(_,"ConsoleLogger"),b="sensorsdata_jssdk_debug";return w}();