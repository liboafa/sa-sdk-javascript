var sdkversion_placeholder="1.25.22";function wrapPluginInitFn(t,e,i){if(e&&(t.plugin_name=e),i&&t.init){var r=t.init;t.init=function(n,s){if(wrapLogFn(n,t,e),n.readyState&&n.readyState.state>=3||!n.on)return o();function o(){r.call(t,n,s)}n.on(i,o)}}return t}function wrapLogFn(t,e,i){function r(e,r){t.logger?t.logger.msg.apply(t.logger,r).module(i+""||"").level(e).log():t.log&&t.log.apply(t,r)}e.log=function(){r("log",arguments)},e.warn=function(){r("warn",arguments)},e.error=function(){r("error",arguments)}}function createPlugin(t,e,i){return wrapPluginInitFn(t,e,i),t.plugin_version=sdkversion_placeholder,t}var siteLinker={getPart:function(t){var e=this.option.length;if(e)for(var i=0;i<e;i++)if(t.indexOf(this.option[i].part_url)>-1)return!0;return!1},getPartHash:function(t){var e=this.option.length;if(e)for(var i=0;i<e;i++)if(t.indexOf(this.option[i].part_url)>-1)return this.option[i].after_hash;return!1},getCurrenId:function(){var t=this.store.getDistinctId()||"",e=this.store.getFirstId()||"";return this._.urlSafeBase64&&this._.urlSafeBase64.encode?t=t?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))):"":this._.rot13obfs&&(t=t?this._.rot13obfs(t):""),encodeURIComponent(e?"f"+t:"d"+t)},rewriteUrl:function(t,e){var i=this,r=/([^?#]+)(\?[^#]*)?(#.*)?/.exec(t),n="";if(r){var s,o=r[1]||"",a=r[2]||"",u=r[3]||"",d="_sasdk="+this.getCurrenId(),f=function(t){var e=t.split("&"),r=[];return i._.each(e,function(t){t.indexOf("_sasdk=")>-1?r.push(d):r.push(t)}),r.join("&")};if(this.getPartHash(t))s=u.indexOf("_sasdk"),n=u.indexOf("?")>-1?s>-1?o+a+"#"+u.substring(1,s)+f(u.substring(s,u.length)):o+a+u+"&"+d:o+a+"#"+u.substring(1)+"?"+d;else s=a.indexOf("_sasdk"),n=/^\?(\w)+/.test(a)?s>-1?o+"?"+f(a.substring(1))+u:o+a+"&"+d+u:o+"?"+d+u;return e&&(e.href=n),n}},getUrlId:function(){var t=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(t)&&t[1]){var e=decodeURIComponent(t[1]);return!e||"f"!==e.substring(0,1)&&"d"!==e.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(e)?e=e.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(e.substring(1))):this._.rot13defs&&(e=e.substring(0,1)+this._.rot13defs(e.substring(1)))),e}return""},setRefferId:function(t){var e=this.store.getDistinctId(),i=this.getUrlId();if(i&&""!==i){var r="a"===i.substring(0,1)||"d"===i.substring(0,1);(i=i.substring(1))!==e&&(r?(this.sd.identify(i,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:i,distinct_id:e,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!t.re_login||this.sd.login(i))}},addListen:function(){var t=this,e=function(e){var i,r,n=e.target,s=n.tagName.toLowerCase(),o=n.parentNode;if("a"===s&&n.href||o&&o.tagName&&"a"===o.tagName.toLowerCase()&&o.href){"a"===s&&n.href?(i=n.href,r=n):(i=o.href,r=o);var a=t._.URL(i).protocol;"http:"!==a&&"https:"!==a||t.getPart(i)&&t.rewriteUrl(i,r)}};t._.addEvent(document,"mousedown",e),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&t._.addEvent(document,"pointerdown",e)},init:function(t,e){this.sd=t,this._=t._,this.store=t.store,this.para=t.para,this._.isObject(e)&&this._.isArray(e.linker)&&e.linker.length>0?(this.setRefferId(e),this.addListen(),this.option=e.linker,this.option=function(e){for(var i=e.length,r=[],n=0;n<i;n++)/[A-Za-z0-9]+\./.test(e[n].part_url)&&"[object Boolean]"==Object.prototype.toString.call(e[n].after_hash)?r.push(e[n]):t.log("linker \u914d\u7f6e\u7684\u7b2c "+(n+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return r}(this.option)):t.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")}},index=createPlugin(siteLinker,"SiteLinker","sdkReady");export default index;