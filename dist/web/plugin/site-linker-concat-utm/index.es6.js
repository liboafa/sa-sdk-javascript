var sdkversion_placeholder="1.24.12";function wrapPluginInitFn(t,i,e){if(i&&(t.plugin_name=i),e&&t.init){var r=t.init;t.init=function(i,n){if(i.readyState&&i.readyState.state>=3||!i.on)return s();function s(){r.call(t,i,n)}i.on(e,s)}}return t}function createPlugin(t,i,e){return wrapPluginInitFn(t,i,e),t.plugin_version=sdkversion_placeholder,t}var siteLinker={getPart:function(t){var i=this.option.length;if(i)for(var e=0;e<i;e++)if(t.indexOf(this.option[e].part_url)>-1)return!0;return!1},getPartHash:function(t){var i=this.option.length;if(i)for(var e=0;e<i;e++)if(t.indexOf(this.option[e].part_url)>-1)return this.option[e].after_hash;return!1},getCurrenId:function(){var t=this.store.getDistinctId()||"",i=this.store.getFirstId()||"";return this._.urlSafeBase64&&this._.urlSafeBase64.encode?t=t?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))):"":this._.rot13obfs&&(t=t?this._.rot13obfs(t):""),encodeURIComponent(i?"f"+t:"d"+t)},rewriteUrl:function(t,i){var e=this,r=/([^?#]+)(\?[^#]*)?(#.*)?/.exec(t),n="";if(r){var s,a=r[1]||"",o=r[2]||"",u=r[3]||"",f="_sasdk="+this.getCurrenId(),l=function(t){var i=t.split("&"),r=[];return e._.each(i,function(t){t.indexOf("_sasdk=")>-1?r.push(f):r.push(t)}),r.join("&")};if(this.getPartHash(t))s=u.indexOf("_sasdk"),n=u.indexOf("?")>-1?s>-1?a+o+"#"+u.substring(1,s)+l(u.substring(s,u.length)):a+o+u+"&"+f:a+o+"#"+u.substring(1)+"?"+f;else s=o.indexOf("_sasdk"),n=/^\?(\w)+/.test(o)?s>-1?a+"?"+l(o.substring(1))+u:a+o+"&"+f+u:a+"?"+f+u;return i&&(i.href=n),n}},getUrlId:function(){var t=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(t)&&t[1]){var i=decodeURIComponent(t[1]);return!i||"f"!==i.substring(0,1)&&"d"!==i.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(i)?i=i.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(i.substring(1))):this._.rot13defs&&(i=i.substring(0,1)+this._.rot13defs(i.substring(1)))),i}return""},setRefferId:function(t){var i=this.store.getDistinctId(),e=this.getUrlId();if(e&&""!==e){var r="a"===e.substring(0,1)||"d"===e.substring(0,1);(e=e.substring(1))!==i&&(r?(this.sd.identify(e,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:e,distinct_id:i,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!t.re_login||this.sd.login(e))}},addListen:function(){var t=this,i=function(i){var e,r,n=i.target,s=n.tagName.toLowerCase(),a=n.parentNode;if("a"===s&&n.href||a&&a.tagName&&"a"===a.tagName.toLowerCase()&&a.href){"a"===s&&n.href?(e=n.href,r=n):(e=a.href,r=a);var o=t._.URL(e).protocol;"http:"!==o&&"https:"!==o||t.getPart(e)&&t.rewriteUrl(e,r)}};t._.addEvent(document,"mousedown",i),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&t._.addEvent(document,"pointerdown",i)},init:function(t,i){this.sd=t,this._=t._,this.store=t.store,this.para=t.para,this._.isObject(i)&&this._.isArray(i.linker)&&i.linker.length>0?(this.setRefferId(i),this.addListen(),this.option=i.linker,this.option=function(i){for(var e=i.length,r=[],n=0;n<e;n++)/[A-Za-z0-9]+\./.test(i[n].part_url)&&"[object Boolean]"==Object.prototype.toString.call(i[n].after_hash)?r.push(i[n]):t.log("linker \u914d\u7f6e\u7684\u7b2c "+(n+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return r}(this.option)):t.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")}},siteLinker$1=createPlugin(siteLinker,"SiteLinker","sdkReady"),siteLinkerConcatUtm=siteLinker$1,oldRewriteUrl=siteLinker$1.rewriteUrl;siteLinkerConcatUtm.rewriteUrl=function(t,i){var e=this,r=oldRewriteUrl.call(this,t,i),n=/([^?#]+)(\?[^#]*)?(#.*)?/;var s=n.exec(location.href),a=function(t){var i={};if(e._.isArray(t)){var r=t[2]||"";if(""!==r)for(var n=r.slice(1).split("&"),s=0;s<n.length;s++){var a=n[s].split("=");i[a[0]]=a[1]}}return i}(s),o=function(t){var i={};if(e._.isArray(t)){var r=t[3]||"";if(""!==r){var n=r.split("?");if(n[1])for(var s=n[1].split("&"),a=0;a<s.length;a++){var o=s[a].split("=");i[o[0]]=o[1]}}}return i}(s),u=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","_channel_track_key"];function f(t){for(var i=t.length;i--;){var e=t.shift(),r=e.split("=")[0];-1==u.indexOf(r)&&t.push(e)}return t}var l={};this._.each(u,function(t){t in a&&(l[t]=a[t]),t in o&&!(t in l)&&(l[t]=o[t])});var h="";if(!this._.isEmptyObject(l)){var d="";for(var c in l)d+="&"+c+"="+l[c];var g=n.exec(r),_=g[1]||"",p=g[2]||"",v=g[3]||"";h+=_;var k=[];""!==p&&(k=f(p.slice(1).split("&"))).length&&(h+="?"+k.join("&"));var m=[],b="",S="";if(""!==v){var w=v.split("?");b=w[0]||"",S=w[1]||"",h+=b}""!==S&&(m=f(S.split("&"))).length&&(h+="?"+m.join("&"));var U=h.indexOf("_sasdk=");r=h.slice(0,U)+d.slice(1)+"&"+h.slice(U)}return i&&(i.href=r),r},window.SensorsDataWebJSSDKPlugin&&"[object Object]"===Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin)&&(window.SensorsDataWebJSSDKPlugin.SiteLinker={init:function(){}}),siteLinkerConcatUtm.name="SiteLinkerConcatUtm",siteLinkerConcatUtm.plugin_version=sdkversion_placeholder;export default siteLinkerConcatUtm;