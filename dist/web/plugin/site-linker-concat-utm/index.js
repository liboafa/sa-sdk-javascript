(window.SensorsDataWebJSSDKPlugin=window.SensorsDataWebJSSDKPlugin||{}).SiteLinkerConcatUtm=function(){"use strict";function t(t,e,r){if(e&&(t.plugin_name=e),r&&t.init){var n=t.init;t.init=function(s,a){function o(){n.call(t,s,a)}return i(s,t,e),s.readyState&&s.readyState.state>=3||!s.on?o():void s.on(r,o)}}return t}function i(t,i,e){function r(i,r){t.logger?t.logger.msg.apply(t.logger,r).module(e+""||"").level(i).log():t.log&&t.log.apply(t,r)}i.log=function(){r("log",arguments)},i.warn=function(){r("warn",arguments)},i.error=function(){r("error",arguments)}}function e(i,e,n){return t(i,e,n),i.plugin_version=r,i}var r="1.25.7",n={};n.getPart=function(t){var i=!1,e=this.option.length;if(e)for(var r=0;r<e;r++)if(t.indexOf(this.option[r].part_url)>-1)return!0;return i},n.getPartHash=function(t){var i=this.option.length,e=!1;if(i)for(var r=0;r<i;r++)if(t.indexOf(this.option[r].part_url)>-1)return this.option[r].after_hash;return!!e},n.getCurrenId=function(){var t=this.store.getDistinctId()||"",i=this.store.getFirstId()||"";this._.urlSafeBase64&&this._.urlSafeBase64.encode?t=t?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))):"":this._.rot13obfs&&(t=t?this._.rot13obfs(t):"");var e=i?"f"+t:"d"+t;return encodeURIComponent(e)},n.rewriteUrl=function(t,i){var e=this,r=/([^?#]+)(\?[^#]*)?(#.*)?/,n=r.exec(t),s="";if(n){var a,o=n[1]||"",u=n[2]||"",f=n[3]||"",l="_sasdk="+this.getCurrenId(),h=function(t){var i=t.split("&"),r=[];return e._.each(i,function(t){t.indexOf("_sasdk=")>-1?r.push(l):r.push(t)}),r.join("&")};if(this.getPartHash(t)){a=f.indexOf("_sasdk");var d=f.indexOf("?");s=d>-1?a>-1?o+u+"#"+f.substring(1,a)+h(f.substring(a,f.length)):o+u+f+"&"+l:o+u+"#"+f.substring(1)+"?"+l}else{a=u.indexOf("_sasdk");var c=/^\?(\w)+/.test(u);s=c?a>-1?o+"?"+h(u.substring(1))+f:o+u+"&"+l+f:o+"?"+l+f}return i&&(i.href=s),s}},n.getUrlId=function(){var t=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(t)&&t[1]){var i=decodeURIComponent(t[1]);return!i||"f"!==i.substring(0,1)&&"d"!==i.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(i)?i=i.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(i.substring(1))):this._.rot13defs&&(i=i.substring(0,1)+this._.rot13defs(i.substring(1)))),i}return""},n.setRefferId=function(t){var i=this.store.getDistinctId(),e=this.getUrlId();if(e&&""!==e){var r="a"===e.substring(0,1)||"d"===e.substring(0,1);e=e.substring(1),e!==i&&(r?(this.sd.identify(e,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:e,distinct_id:i,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!t.re_login||this.sd.login(e))}},n.addListen=function(){var t=this,i=function(i){var e,r,n=i.target,s=n.tagName.toLowerCase(),a=n.parentNode;if("a"===s&&n.href||a&&a.tagName&&"a"===a.tagName.toLowerCase()&&a.href){"a"===s&&n.href?(e=n.href,r=n):(e=a.href,r=a);var o=t._.URL(e),u=o.protocol;"http:"!==u&&"https:"!==u||t.getPart(e)&&t.rewriteUrl(e,r)}};t._.addEvent(document,"mousedown",i),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&t._.addEvent(document,"pointerdown",i)},n.init=function(t,i){function e(i){for(var e=i.length,r=[],n=0;n<e;n++)/[A-Za-z0-9]+\./.test(i[n].part_url)&&"[object Boolean]"==Object.prototype.toString.call(i[n].after_hash)?r.push(i[n]):t.log("linker \u914d\u7f6e\u7684\u7b2c "+(n+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return r}return this.sd=t,this._=t._,this.store=t.store,this.para=t.para,this._.isObject(i)&&this._.isArray(i.linker)&&i.linker.length>0?(this.setRefferId(i),this.addListen(),this.option=i.linker,void(this.option=e(this.option))):void t.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")};var s=e(n,"SiteLinker","sdkReady"),a=s,o=s.rewriteUrl;return a.rewriteUrl=function(t,i){function e(t){var i={};if(s._.isArray(t)){var e=t[2]||"";if(""!==e)for(var r=e.slice(1).split("&"),n=0;n<r.length;n++){var a=r[n].split("=");i[a[0]]=a[1]}}return i}function r(t){var i={};if(s._.isArray(t)){var e=t[3]||"";if(""!==e){var r=e.split("?");if(r[1])for(var n=r[1].split("&"),a=0;a<n.length;a++){var o=n[a].split("=");i[o[0]]=o[1]}}}return i}function n(t){for(var i=t.length;i--;){var e=t.shift(),r=e.split("=")[0];d.indexOf(r)==-1&&t.push(e)}return t}var s=this,a=o.call(this,t,i),u=/([^?#]+)(\?[^#]*)?(#.*)?/,f=u.exec(location.href),l=e(f),h=r(f),d=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","_channel_track_key"],c={};this._.each(d,function(t){t in l&&(c[t]=l[t]),t in h&&!(t in c)&&(c[t]=h[t])});var g="";if(!this._.isEmptyObject(c)){var v="";for(var _ in c)v+="&"+_+"="+c[_];var p=u.exec(a),S=p[1]||"",b=p[2]||"",m=p[3]||"";g+=S;var w=[];""!==b&&(w=n(b.slice(1).split("&")),w.length&&(g+="?"+w.join("&")));var k=[],y="",U="";if(""!==m){var x=m.split("?");y=x[0]||"",U=x[1]||"",g+=y}""!==U&&(k=n(U.split("&")),k.length&&(g+="?"+k.join("&")));var D=g.indexOf("_sasdk=");a=g.slice(0,D)+v.slice(1)+"&"+g.slice(D)}return i&&(i.href=a),a},window.SensorsDataWebJSSDKPlugin&&"[object Object]"===Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)&&(window.SensorsDataWebJSSDKPlugin.SiteLinker={init:function(){}}),a.name="SiteLinkerConcatUtm",a.plugin_version=r,a}();