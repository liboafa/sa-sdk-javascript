!function(){"use strict";function t(t,e,i){var r=t.init;return e&&(t.name=e),t.init=function(e,s){function n(){r.call(t,e,s)}return e.readyState&&e.readyState.state>=3||!e.on?n():void e.on(i,n)},t}var e={};return e.getPart=function(t){var e=!1,i=this.option.length;if(i)for(var r=0;r<i;r++)if(t.indexOf(this.option[r].part_url)>-1)return!0;return e},e.getPartHash=function(t){var e=this.option.length,i=!1;if(e)for(var r=0;r<e;r++)if(t.indexOf(this.option[r].part_url)>-1)return this.option[r].after_hash;return!!i},e.getCurrenId=function(){var t=this.store.getDistinctId()||"",e=this.store.getFirstId()||"";this._.urlSafeBase64&&this._.urlSafeBase64.encode?t=t?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))):"":this._.rot13obfs&&(t=t?this._.rot13obfs(t):"");var i=e?"f"+t:"d"+t;return encodeURIComponent(i)},e.rewriteUrl=function(t,e){var i=this,r=/([^?#]+)(\?[^#]*)?(#.*)?/,s=r.exec(t),n="";if(s){var a,o=s[1]||"",h=s[2]||"",d=s[3]||"",u="_sasdk="+this.getCurrenId(),f=function(t){var e=t.split("&"),r=[];return i._.each(e,function(t){t.indexOf("_sasdk=")>-1?r.push(u):r.push(t)}),r.join("&")};if(this.getPartHash(t)){a=d.indexOf("_sasdk");var g=d.indexOf("?");n=g>-1?a>-1?o+h+"#"+d.substring(1,a)+f(d.substring(a,d.length)):o+h+d+"&"+u:o+h+"#"+d.substring(1)+"?"+u}else{a=h.indexOf("_sasdk");var c=/^\?(\w)+/.test(h);n=c?a>-1?o+"?"+f(h.substring(1))+d:o+h+"&"+u+d:o+"?"+u+d}return e&&(e.href=n),n}},e.getUrlId=function(){var t=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(t)&&t[1]){var e=decodeURIComponent(t[1]);return!e||"f"!==e.substring(0,1)&&"d"!==e.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(e)?e=e.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(e.substring(1))):this._.rot13defs&&(e=e.substring(0,1)+this._.rot13defs(e.substring(1)))),e}return""},e.setRefferId=function(t){var e=this.store.getDistinctId(),i=this.getUrlId();if(i&&""!==i){var r="a"===i.substring(0,1)||"d"===i.substring(0,1);i=i.substring(1),i!==e&&(r?(this.sd.identify(i,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:i,distinct_id:e,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!t.re_login||this.sd.login(i))}},e.addListen=function(){var t=this,e=function(e){var i,r,s=e.target,n=s.tagName.toLowerCase(),a=s.parentNode;if("a"===n&&s.href||a&&a.tagName&&"a"===a.tagName.toLowerCase()&&a.href){"a"===n&&s.href?(i=s.href,r=s):(i=a.href,r=a);var o=t._.URL(i),h=o.protocol;"http:"!==h&&"https:"!==h||t.getPart(i)&&t.rewriteUrl(i,r)}};t._.addEvent(document,"mousedown",e),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&t._.addEvent(document,"pointerdown",e)},e.init=function(t,e){function i(e){for(var i=e.length,r=[],s=0;s<i;s++)/[A-Za-z0-9]+\./.test(e[s].part_url)&&"[object Boolean]"==Object.prototype.toString.call(e[s].after_hash)?r.push(e[s]):t.log("linker \u914d\u7f6e\u7684\u7b2c "+(s+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return r}return this.sd=t,this._=t._,this.store=t.store,this.para=t.para,this._.isObject(e)&&this._.isArray(e.linker)&&e.linker.length>0?(this.setRefferId(e),this.addListen(),this.option=e.linker,void(this.option=i(this.option))):void t.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")},t(e,"SiteLinker","sdkReady"),e}();