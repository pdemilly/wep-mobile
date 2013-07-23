jQuery.atmosphere=function(){jQuery(window).bind("unload.atmosphere",function(){jQuery.atmosphere.unsubscribe()});jQuery(window).keypress(function(e){if(e.keyCode==27){e.preventDefault()}});var e=function(e){var t,n=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,r={};while(t=n.exec(e)){r[t[1]]=t[2]}return r};return{version:"1.1",requests:[],callbacks:[],onError:function(e){},onClose:function(e){},onOpen:function(e){},onMessage:function(e){},onReconnect:function(e,t){},onMessagePublished:function(e){},onTransportFailure:function(e){},onLocalMessage:function(e){},AtmosphereRequest:function(t){function g(){f=true;c=false;l=0;i=null;s=null;o=null;u=null}function y(){ut();g()}function b(e){y();n=jQuery.extend(n,e)}function w(){return n.webSocketImpl!=null||window.WebSocket||window.MozWebSocket}function E(){return window.EventSource}function S(){if(n.shared){d=x(n);if(d!=null){if(n.logLevel=="debug"){jQuery.atmosphere.debug("Storage service available. All communication will be local")}if(d.open(n)){return}}if(n.logLevel=="debug"){jQuery.atmosphere.debug("No Storage service available.")}d=null}if(n.transport!="websocket"&&n.transport!="sse"){N("opening",n.transport,n);F()}else if(n.transport=="websocket"){if(!w()){H("Websocket is not supported, using request.fallbackTransport ("+n.fallbackTransport+")")}else{_(false)}}else if(n.transport=="sse"){if(!E()){H("Server Side Events(SSE) is not supported, using request.fallbackTransport ("+n.fallbackTransport+")")}else{M(false)}}}function x(e){function u(t){var r=jQuery.parseJSON(t),s=r.data;if(r.target==="c"){switch(r.type){case"open":N("opening","local",n);break;case"close":if(!i){i=true;if(s.reason==="aborted"){ot()}else{if(s.heir===v){S()}else{setTimeout(function(){tt("","closed",200,n.transport);ot()},100)}}}break;case"message":tt(s,"messageReceived",200,e.transport);break;case"localMessage":et(s);break}}}function a(){var e=(new RegExp("(?:^|; )("+encodeURIComponent(s)+")=([^;]*)")).exec(document.cookie);if(e){return jQuery.parseJSON(decodeURIComponent(e[2]))}}var t,r,i,s="atmosphere-"+e.url,o={storage:function(){if(!jQuery.atmosphere.supportStorage()){return}var t=window.localStorage,n=function(e){return jQuery.parseJSON(t.getItem(s+"-"+e))},r=function(e,n){t.setItem(s+"-"+e,jQuery.stringifyJSON(n))};return{init:function(){r("children",n("children").concat([v]));jQuery(window).on("storage.socket",function(e){e=e.originalEvent;if(e.key===s&&e.newValue){u(e.newValue)}});return n("opened")},signal:function(e,n){t.setItem(s,jQuery.stringifyJSON({target:"p",type:e,data:n}))},close:function(){var t,i=n("children");jQuery(window).off("storage.socket");if(i){t=jQuery.inArray(e.id,i);if(t>-1){i.splice(t,1);r("children",i)}}}}},windowref:function(){var e=window.open("",s.replace(/\W/g,""));if(!e||e.closed||!e.callbacks){return}return{init:function(){e.callbacks.push(u);e.children.push(v);return e.opened},signal:function(t,n){if(!e.closed&&e.fire){e.fire(jQuery.stringifyJSON({target:"p",type:t,data:n}))}},close:function(){function t(e,t){var n=jQuery.inArray(t,e);if(n>-1){e.splice(n,1)}}if(!i){t(e.callbacks,u);t(e.children,v)}}}}};t=a();if(!t||jQuery.now()-t.ts>1e3){return}r=o.storage()||o.windowref();if(!r){return}return{open:function(){var n;m=setInterval(function(){var e=t;t=a();if(!t||e.ts===t.ts){u(jQuery.stringifyJSON({target:"c",type:"close",data:{reason:"error",heir:e.heir}}))}},1e3);n=r.init();if(n){setTimeout(function(){N("opening","local",e)},50)}return n},send:function(e){r.signal("send",e)},localSend:function(e){r.signal("localSend",jQuery.stringifyJSON({id:v,event:e}))},close:function(){if(!c){clearInterval(m);r.signal("close");r.close()}}}}function T(){function i(e){var t=jQuery.parseJSON(e),n=t.data;if(t.target==="p"){switch(t.type){case"send":X(n);break;case"localSend":et(n);break;case"close":ot();break}}}function s(){document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(jQuery.stringifyJSON({ts:jQuery.now()+1,heir:(e.get("children")||[])[0]}))}var e,t="atmosphere-"+n.url,r={storage:function(){if(!jQuery.atmosphere.supportStorage()){return}var e=window.localStorage;return{init:function(){jQuery(window).on("storage.socket",function(e){e=e.originalEvent;if(e.key===t&&e.newValue){i(e.newValue)}})},signal:function(n,r){e.setItem(t,jQuery.stringifyJSON({target:"c",type:n,data:r}))},get:function(n){return jQuery.parseJSON(e.getItem(t+"-"+n))},set:function(n,r){e.setItem(t+"-"+n,jQuery.stringifyJSON(r))},close:function(){jQuery(window).off("storage.socket");e.removeItem(t);e.removeItem(t+"-opened");e.removeItem(t+"-children")}}},windowref:function(){var e=t.replace(/\W/g,""),n=(jQuery('iframe[name="'+e+'"]')[0]||jQuery('<iframe name="'+e+'" />').hide().appendTo("body")[0]).contentWindow;return{init:function(){n.callbacks=[i];n.fire=function(e){var t;for(t=0;t<n.callbacks.length;t++){n.callbacks[t](e)}}},signal:function(e,t){if(!n.closed&&n.fire){n.fire(jQuery.stringifyJSON({target:"c",type:e,data:t}))}},get:function(e){return!n.closed?n[e]:null},set:function(e,t){if(!n.closed){n[e]=t}},close:function(){}}}};h=function(n){e.signal("message",n)};e=r.storage()||r.windowref();e.init();if(n.logLevel=="debug"){jQuery.atmosphere.debug("Installed StorageService "+e)}e.set("children",[]);if(e.get("opened")!=null&&!e.get("opened")){e.set("opened",false)}s();m=setInterval(s,1e3);p=e}function N(e,t,i){if(n.shared&&t!="local"){T()}if(p!=null){p.set("opened",true)}i.close=function(){ot();i.reconnect=false};r.request=i;var s=r.state;r.state=e;r.status=200;var o=r.transport;r.transport=t;var u=r.responseBody;st();r.responseBody=u;r.state=s;r.transport=o}function C(e){e.transport="jsonp";var t=n;if(e!=null&&typeof e!="undefined"){t=e}var r=t.url;var i=t.data;if(t.attachHeadersAsQueryString){r=B(t);if(i!=""){r+="&X-Atmosphere-Post-Body="+encodeURIComponent(i)}i=""}a=jQuery.ajax({url:r,type:t.method,dataType:"jsonp",error:function(e,n,r){if(e.status<300&&t.requestCount++<t.maxRequest){q(a,t)}else{tt(n,"error",e.status,t.transport)}},jsonp:"jsonpTransport",success:function(e){if(t.requestCount++<t.maxRequest){if(!t.executeCallbackBeforeReconnect){q(a,t)}var r=e.message;if(r!=null&&typeof r!="string"){try{r=jQuery.stringifyJSON(r)}catch(i){}}tt(r,"messageReceived",200,t.transport);if(t.executeCallbackBeforeReconnect){q(a,t)}}else{jQuery.atmosphere.log(n.logLevel,["JSONP reconnect maximum try reached "+n.requestCount]);D()}},data:t.data,beforeSend:function(e){I(e,t,false)}})}function k(e){var t=n;if(e!=null&&typeof e!="undefined"){t=e}var r=t.url;var i=t.data;if(t.attachHeadersAsQueryString){r=B(t);if(i!=""){r+="&X-Atmosphere-Post-Body="+encodeURIComponent(i)}i=""}a=jQuery.ajax({url:r,type:t.method,error:function(e,n,r){if(e.status<300&&t.requestCount++<t.maxRequest){q(a,t)}else{tt(n,"error",e.status,t.transport)}},success:function(e,r,i){if(t.requestCount++<t.maxRequest){if(!t.executeCallbackBeforeReconnect){q(a,t)}tt(e,"messageReceived",200,t.transport);if(t.executeCallbackBeforeReconnect){q(a,t)}}else{jQuery.atmosphere.log(n.logLevel,["AJAX reconnect maximum try reached "+n.requestCount]);D()}},data:t.data,beforeSend:function(e){I(e,t,false)}})}function L(e){if(n.webSocketImpl!=null){return n.webSocketImpl}else{if(window.WebSocket){return new WebSocket(e)}else{return new MozWebSocket(e)}}}function A(){var e=B(n);return decodeURI(jQuery('<a href="'+e+'"/>')[0].href.replace(/^http/,"ws"))}function O(){var e=B(n);return e}function M(e){r.transport="sse";var t=O(n.url);if(n.logLevel=="debug"){jQuery.atmosphere.debug("Invoking executeSSE");jQuery.atmosphere.debug("Using URL: "+t)}if(e){N("re-opening","sse",n)}if(!n.reconnect){if(s!=null){s.close()}return}s=new EventSource(t,{withCredentials:n.withCredentials});if(n.connectTimeout>0){n.id=setTimeout(function(){if(!e){s.close()}},n.connectTimeout)}s.onopen=function(t){if(n.logLevel=="debug"){jQuery.atmosphere.debug("SSE successfully opened")}if(!e){N("opening","sse",n)}e=true;if(n.method=="POST"){r.state="messageReceived";s.send(n.data)}};s.onmessage=function(e){r.state="messageReceived";r.status=200;var e=e.data;var t=P(e,n,r);if(jQuery.trim(e).length==0){t=true}if(!t){st();r.responseBody=""}};s.onerror=function(t){clearTimeout(n.id);r.state="closed";r.responseBody="";r.status=!e?501:200;st();s.close();if(c){jQuery.atmosphere.log(n.logLevel,["SSE closed normally"])}else if(!e){H("SSE failed. Downgrading to fallback transport and resending")}else if(n.reconnect&&r.transport=="sse"){n.requestCount=l;if(l++<n.maxRequest){n.id=setTimeout(function(){M(true)},n.reconnectInterval);r.responseBody=""}else{jQuery.atmosphere.log(n.logLevel,["SSE reconnect maximum try reached "+n.requestCount]);D()}}}}function _(e){r.transport="websocket";var t=A(n.url);var s=false;if(n.logLevel=="debug"){jQuery.atmosphere.debug("Invoking executeWebSocket");jQuery.atmosphere.debug("Using URL: "+t)}if(e){N("re-opening","websocket",n)}if(!n.reconnect){if(i!=null){i.close()}return}i=L(t);if(n.connectTimeout>0){n.id=setTimeout(function(){if(!e){var t={code:1002,reason:"",wasClean:false};i.onclose(t);try{i.close()}catch(n){}}},n.connectTimeout)}i.onopen=function(t){if(n.logLevel=="debug"){jQuery.atmosphere.debug("Websocket successfully opened")}if(!e){N("opening","websocket",n)}e=true;if(n.method=="POST"){r.state="messageReceived";i.send(n.data)}};i.onmessage=function(e){if(e.data.indexOf("parent.callback")!=-1){jQuery.atmosphere.log(n.logLevel,["parent.callback no longer supported with 0.8 version and up. Please upgrade"])}r.state="messageReceived";r.status=200;var e=e.data;var t=P(e,n,r);if(!t){st();r.responseBody=""}};i.onerror=function(e){clearTimeout(n.id)};i.onclose=function(t){if(s)return;var i=t.reason;if(i===""){switch(t.code){case 1e3:i="Normal closure; the connection successfully completed whatever purpose for which "+"it was created.";break;case 1001:i="The endpoint is going away, either because of a server failure or because the "+"browser is navigating away from the page that opened the connection.";break;case 1002:i="The endpoint is terminating the connection due to a protocol error.";break;case 1003:i="The connection is being terminated because the endpoint received data of a type it "+"cannot accept (for example, a text-only endpoint received binary data).";break;case 1004:i="The endpoint is terminating the connection because a data frame was received that "+"is too large.";break;case 1005:i="Unknown: no status code was provided even though one was expected.";break;case 1006:i="Connection was closed abnormally (that is, with no close frame being sent).";break}}jQuery.atmosphere.warn("Websocket closed, reason: "+i);jQuery.atmosphere.warn("Websocket closed, wasClean: "+t.wasClean);r.state="closed";r.responseBody="";r.status=!e?501:200;st();clearTimeout(n.id);s=true;if(c){jQuery.atmosphere.log(n.logLevel,["Websocket closed normally"])}else if(!e){H("Websocket failed. Downgrading to Comet and resending")}else if(n.reconnect&&r.transport=="websocket"){if(n.reconnect&&l++<n.maxRequest){n.requestCount=l;r.responseBody="";_(true)}else{jQuery.atmosphere.log(n.logLevel,["Websocket reconnect maximum try reached "+n.requestCount]);jQuery.atmosphere.warn("Websocket error, reason: "+t.reason);D()}}}}function D(){r.state="error";r.responseBody="";r.status=500;st()}function P(e,t,n){if(t.trackMessageLength){if(n.partialMessage.length!=0){e=n.partialMessage+e}var r=[];var i=0;var s=e.indexOf(t.messageDelimiter);while(s!=-1){i=e.substring(i,s);e=e.substring(s+t.messageDelimiter.length,e.length);if(e.length==0||e.length<i)break;s=e.indexOf(t.messageDelimiter);r.push(e.substring(0,i))}if(r.length==0||s!=-1&&e.length!=0&&i!=e.length){n.partialMessage=i+t.messageDelimiter+e}else{n.partialMessage=""}if(r.length!=0){n.responseBody=r.join(t.messageDelimiter);return false}else{return true}}else{n.responseBody=e}return false}function H(e){jQuery.atmosphere.log(n.logLevel,[e]);if(typeof n.onTransportFailure!="undefined"){n.onTransportFailure(e,n)}else if(typeof jQuery.atmosphere.onTransportFailure!="undefined"){jQuery.atmosphere.onTransportFailure(e,n)}n.transport=n.fallbackTransport;if(n.reconnect&&n.transport!="none"||n.transport==null){n.method=n.fallbackMethod;r.transport=n.fallbackTransport;n.id=setTimeout(function(){S()},n.reconnectInterval)}}function B(e){var t=n;if(e!=null&&typeof e!="undefined"){t=e}var i=t.url;if(!t.attachHeadersAsQueryString)return i;if(i.indexOf("X-Atmosphere-Framework")!=-1){return i}i+=i.indexOf("?")!=-1?"&":"?";i+="X-Atmosphere-tracking-id="+t.uuid;i+="&X-Atmosphere-Framework="+jQuery.atmosphere.version;i+="&X-Atmosphere-Transport="+t.transport;if(t.trackMessageLength){i+="&X-Atmosphere-TrackMessageSize="+"true"}if(t.lastTimestamp!=undefined){i+="&X-Cache-Date="+t.lastTimestamp}else{i+="&X-Cache-Date="+0}if(t.contentType!=""){i+="&Content-Type="+t.contentType}jQuery.each(t.headers,function(n,s){var o=jQuery.isFunction(s)?s.call(this,t,e,r):s;if(o!=null){i+="&"+encodeURIComponent(n)+"="+encodeURIComponent(o)}});return i}function j(){var e;if(jQuery.browser.msie){var t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];for(var n=0;n<t.length;n++){try{e=new ActiveXObject(t[n])}catch(r){}}}else if(window.XMLHttpRequest){e=new XMLHttpRequest}return e}function F(t){var i=n;if(t!=null||typeof t!="undefined"){i=t}if(i.transport=="jsonp"||i.enableXDR&&jQuery.atmosphere.checkCORSSupport()){C(i);return}if(i.transport=="ajax"){k(t);return}if(i.transport=="streaming"&&jQuery.browser.msie){i.enableXDR&&window.XDomainRequest?R(i):z(i);return}if(i.enableXDR&&window.XDomainRequest){R(i);return}if(i.reconnect&&i.requestCount++<i.maxRequest){var s=j();I(s,i,true);if(i.suspend){o=s}if(i.transport!="polling"){r.transport=i.transport}var u=false;if(!jQuery.browser.msie){s.onerror=function(){u=true;try{r.status=XMLHttpRequest.status}catch(e){r.status=404}r.state="error";q(s,i,true)}}s.onreadystatechange=function(){if(c){return}var t=false;var o=false;if(i.transport=="streaming"&&i.readyState>2&&s.readyState==4){i.readyState=0;i.lastIndex=0;q(s,i,true);return}i.readyState=s.readyState;if(s.readyState==4){if(jQuery.browser.msie){o=true}else if(i.transport=="streaming"){o=true}else if(i.transport=="long-polling"){o=true;clearTimeout(i.id)}}else if(!jQuery.browser.msie&&s.readyState==3&&s.status==200&&i.transport!="long-polling"){o=true}else{clearTimeout(i.id)}if(o){var u=s.responseText;nt(s,n);if(i.transport=="streaming"){var a=u.substring(i.lastIndex,u.length);r.isJunkEnded=true;if(!r.junkFull&&(a.indexOf("<!-- Welcome to the Atmosphere Framework.")==-1||a.indexOf("<!-- EOD -->")==-1)){if(!jQuery.browser.opera)return}r.junkFull=true;if(i.lastIndex==0&&a.indexOf("<!-- Welcome to the Atmosphere Framework.")!=-1&&a.indexOf("<!-- EOD -->")!=-1){r.isJunkEnded=false}if(!r.isJunkEnded){var f="<!-- EOD -->";var l=f.length;var h=a.indexOf(f)+l;if(h>l&&h!=a.length){r.responseBody=a.substring(h);t=P(r.responseBody,i,r)}else{t=true}}else{var p=u.substring(i.lastIndex,u.length);t=P(p,i,r)}i.lastIndex=u.length;if(jQuery.browser.opera){jQuery.atmosphere.iterate(function(){if(s.responseText.length>i.lastIndex){try{r.status=s.status;r.headers=e(s.getAllResponseHeaders());if(n.readResponsesHeaders&&n.headers){jQuery.each(n.headers,function(e){var t=s.getResponseHeader(e);if(t){r.headers[e]=t}})}}catch(t){r.status=404}if(!r.junkFull){var o="<!-- EOD -->";var u=o.length;var a=s.responseText.indexOf(o)+u;i.lastIndex=a;r.junkFull=true}else{i.lastPingTime=(new Date).getTime();r.state="messageReceived";r.responseBody=s.responseText.substring(i.lastIndex);i.lastIndex=s.responseText.length;st();if(i.transport=="streaming"&&s.responseText.length>i.maxStreamingLength){s.abort();I(s,i,true)}}}},0)}if(t){return}}else{t=P(u,i,r);i.lastIndex=u.length}try{r.status=s.status;r.headers=e(s.getAllResponseHeaders());nt(s,i)}catch(d){r.status=404}if(i.suspend){r.state=r.status==0?"closed":"messageReceived"}else{r.state="messagePublished"}if(!i.executeCallbackBeforeReconnect){q(s,i,false)}if(r.responseBody.indexOf("parent.callback")!=-1){jQuery.atmosphere.log(i.logLevel,["parent.callback no longer supported with 0.8 version and up. Please upgrade"])}st();if(i.executeCallbackBeforeReconnect){q(s,i,false)}if(i.transport=="streaming"&&u.length>i.maxStreamingLength){s.abort();I(s,i,true)}}};s.send(i.data);if(i.suspend){i.id=setTimeout(function(){if(f){s.abort();b(i);S()}},i.timeout)}f=true}else{if(i.logLevel=="debug"){jQuery.atmosphere.log(i.logLevel,["Max re-connection reached."])}D()}}function I(e,t,i){var s=B(t);s=jQuery.atmosphere.prepareURL(s);if(i){e.open(t.method,s,true);if(t.connectTimeout>-1){t.id=setTimeout(function(){if(t.requestCount==0){e.abort();tt("Connect timeout","closed",200,t.transport)}},t.connectTimeout)}}if(n.withCredentials){if("withCredentials"in e){e.withCredentials=true}}if(!n.dropAtmosphereHeaders){e.setRequestHeader("X-Atmosphere-Framework",jQuery.atmosphere.version);e.setRequestHeader("X-Atmosphere-Transport",t.transport);if(t.lastTimestamp!=undefined){e.setRequestHeader("X-Cache-Date",t.lastTimestamp)}else{e.setRequestHeader("X-Cache-Date",0)}if(t.trackMessageLength){e.setRequestHeader("X-Atmosphere-TrackMessageSize","true")}if(t.contentType!=""){e.setRequestHeader("Content-Type",t.contentType)}e.setRequestHeader("X-Atmosphere-tracking-id",t.uuid)}jQuery.each(t.headers,function(n,s){var o=jQuery.isFunction(s)?s.call(this,e,t,i,r):s;if(o!=null){e.setRequestHeader(n,o)}})}function q(e,t,n){if(n||t.suspend&&e.status==200&&t.transport!="streaming"&&f){if(t.reconnect){N("re-opening",t.transport,t);t.id=setTimeout(function(){F()},t.reconnectInterval)}}}function R(e){u=U(e);u.open()}function U(e){var t=n;if(e!=null&&typeof e!="undefined"){t=e}var r=t.transport;var i=0;var s=function(e){var t=e.responseText;var n=false;if(t.indexOf("<!-- Welcome to the Atmosphere Framework.")!=-1){n=true}if(n){var s="<!-- EOD -->";var o=s.length;var u=t.indexOf(s);if(u!==-1){t=t.substring(u+o+i);i+=t.length}}tt(t,"messageReceived",200,r)};var o=new window.XDomainRequest;var u=t.rewriteURL||function(e){var t=/(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);switch(t&&t[1]){case"JSESSIONID":return e.replace(/;jsessionid=[^\?]*|(\?)|$/,";jsessionid="+t[2]+"$1");case"PHPSESSID":return e.replace(/\?PHPSESSID=[^&]*&?|\?|$/,"?PHPSESSID="+t[2]+"&").replace(/&$/,"")}return e};o.onprogress=function(){s(o);t.lastMessage=o.responseText};o.onerror=function(){if(t.transport!="polling"){tt(o.responseText,"error",500,r)}};o.onload=function(){if(t.lastMessage==o.responseText)return;if(t.executeCallbackBeforeReconnect){s(o)}if(t.transport=="long-polling"&&t.requestCount++<t.maxRequest){o.status=200;q(o,t,false)}if(!t.executeCallbackBeforeReconnect){s(o)}t.lastMessage=o.responseText};return{open:function(){if(t.method=="POST"){t.attachHeadersAsQueryString=true}var e=B(t);if(t.method=="POST"){e+="&X-Atmosphere-Post-Body="+encodeURIComponent(t.data)}o.open(t.method,u(e));o.send();if(t.connectTimeout>-1){t.id=setTimeout(function(){if(t.requestCount==0){o.abort();tt("Connect timeout","closed",200,t.transport)}},t.connectTimeout)}},close:function(){o.abort();tt(o.responseText,"closed",200,r)}}}function z(e){u=W(e);u.open()}function W(e){var t=n;if(e!=null&&typeof e!="undefined"){t=e}var i;var s=new window.ActiveXObject("htmlfile");s.open();s.close();var o=t.url;if(t.transport!="polling"){r.transport=t.transport}return{open:function(){var e=s.createElement("iframe");o=B(t);if(t.data!=""){o+="&X-Atmosphere-Post-Body="+encodeURIComponent(t.data)}o=jQuery.atmosphere.prepareURL(o);e.src=o;s.body.appendChild(e);var n=e.contentDocument||e.contentWindow.document;i=jQuery.atmosphere.iterate(function(){try{if(!n.firstChild){return}if(n.readyState==="complete"){try{jQuery.noop(n.fileSize)}catch(e){tt("Connection Failure","error",500,t.transport);return false}}var s=n.body?n.body.lastChild:n;var o=function(){var e=s.cloneNode(true);e.appendChild(n.createTextNode("."));var t=e.innerText;var r=true;if(t.indexOf("<!-- Welcome to the Atmosphere Framework.")==-1){r=false}if(r){var i="<!-- EOD -->";var o=i.length;var u=t.indexOf(i)+o;t=t.substring(u)}return t.substring(0,t.length-1)};if(!jQuery.nodeName(s,"pre")){var u=n.head||n.getElementsByTagName("head")[0]||n.documentElement||n;var a=n.createElement("script");a.text="document.write('<plaintext>')";u.insertBefore(a,u.firstChild);u.removeChild(a);s=n.body.lastChild}tt(o(),"opening",200,t.transport);i=jQuery.atmosphere.iterate(function(){var e=o();if(e.length>t.lastIndex){r.status=200;s.innerText="";tt(e,"messageReceived",200,t.transport);t.lastIndex=0}if(n.readyState==="complete"){tt("","re-opening",200,t.transport);z(t);return false}},null);return false}catch(f){jQuery.atmosphere.error(f)}})},close:function(){if(i){i()}s.execCommand("Stop");tt("","closed",200,t.transport)}}}function X(e){if(d!=null){V(e)}else if(o!=null||s!=null){J(e)}else if(u!=null){K(e)}else if(a!=null){Q(e)}else if(i!=null){Z(e)}}function V(e){d.send(e)}function $(e){if(e.length==0)return;try{if(d){d.localSend(e)}else{p.signal("localMessage",jQuery.stringifyJSON({id:v,event:e}))}}catch(t){jQuery.atmosphere.error(t)}}function J(e){var t=Y(e);F(t)}function K(e){if(n.enableXDR&&jQuery.atmosphere.checkCORSSupport()){var t=Y(e);t.reconnect=false;C(t)}else{J(e)}}function Q(e){J(e)}function G(e){var t=e;if(typeof t=="object"){t=e.data}return t}function Y(e){var t=G(e);var r={connected:false,timeout:6e4,method:"POST",url:n.url,contentType:n.contentType,headers:{},reconnect:true,callback:null,data:t,suspend:false,maxRequest:60,logLevel:"info",requestCount:0,transport:"polling",attachHeadersAsQueryString:true,enableXDR:n.enableXDR,uuid:n.uuid};if(typeof e=="object"){r=jQuery.extend(r,e)}return r}function Z(e){var t=G(e);var r;try{if(n.webSocketUrl!=null){r=n.webSocketPathDelimiter+n.webSocketUrl+n.webSocketPathDelimiter+t}else{r=t}i.send(r)}catch(s){i.onclose=function(e){};i.close();H("Websocket failed. Downgrading to Comet and resending "+r);J(e)}}function et(e){var t=jQuery.parseJSON(e);if(t.id!=v){if(typeof n.onLocalMessage!="undefined"){n.onLocalMessage(t.event)}else if(typeof jQuery.atmosphere.onLocalMessage!="undefined"){jQuery.atmosphere.onLocalMessage(t.event)}}}function tt(e,t,i,s){if(t=="messageReceived"){if(P(e,n,r))return}r.transport=s;r.status=i;r.state=t;st()}function nt(e,t){if(!t.readResponsesHeaders)return;try{var i=e.getResponseHeader("X-Cache-Date");if(i!=null||i!=undefined){t.lastTimestamp=i.split(" ").pop()}tempUUID=e.getResponseHeader("X-Atmosphere-tracking-id");if(tempUUID!=null||tempUUID!=undefined){t.uuid=tempUUID.split(" ").pop()}if(t.headers){jQuery.each(n.headers,function(t){var n=e.getResponseHeader(t);if(n){r.headers[t]=n}})}}catch(s){}}function rt(e){it(e,n);it(e,jQuery.atmosphere)}function it(e,t){switch(e.state){case"messageReceived":if(typeof t.onMessage!="undefined")t.onMessage(e);break;case"error":if(typeof t.onError!="undefined")t.onError(e);break;case"opening":if(typeof t.onOpen!="undefined")t.onOpen(e);break;case"messagePublished":if(typeof t.onMessagePublished!="undefined")t.onMessagePublished(e);break;case"re-opening":if(typeof t.onReconnect!="undefined")t.onReconnect(n,e);break;case"unsubscribe":case"closed":if(typeof t.onClose!="undefined")t.onClose(e);break}}function st(){var e=function(e,t){t(r)};if(d==null&&h!=null){h(r.responseBody)}var t=typeof r.responseBody=="string"?r.responseBody.split(n.messageDelimiter):new Array(r.responseBody);for(var i=0;i<t.length;i++){if(t.length>1&&t[i].length==0){continue}r.responseBody=jQuery.trim(t[i]);if(r.responseBody.length==0&&r.transport=="streaming"&&r.state=="messageReceived"){var s=navigator.userAgent.toLowerCase();var o=s.indexOf("android")>-1;if(o){continue}}rt(r);if(jQuery.atmosphere.callbacks.length>0){if(n.logLevel=="debug"){jQuery.atmosphere.debug("Invoking "+jQuery.atmosphere.callbacks.length+" global callbacks: "+r.state)}try{jQuery.each(jQuery.atmosphere.callbacks,e)}catch(u){jQuery.atmosphere.log(n.logLevel,["Callback exception"+u])}}if(typeof n.callback=="function"){if(n.logLevel=="debug"){jQuery.atmosphere.debug("Invoking request callbacks")}try{n.callback(r)}catch(u){jQuery.atmosphere.log(n.logLevel,["Callback exception"+u])}}}}function ot(){n.reconnect=false;r.request=n;f=false;c=true;r.state="unsubscribe";r.responseBody="";r.status=408;st();ut();if(p!=null){clearInterval(m);document.cookie=encodeURIComponent("atmosphere-"+n.url)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";p.signal("close",{reason:"",heir:!c?v:(p.get("children")||[])[0]});p.close()}if(d!=null){d.close()}}function ut(){if(u!=null){u.close();u=null}if(a!=null){a.abort();a=null}if(o!=null){o.abort();o=null}if(i!=null){i.close();i=null}if(s!=null){s.close();s=null}}var n={timeout:3e5,method:"GET",headers:{},contentType:"",callback:null,url:"",data:"",suspend:true,maxRequest:60,reconnect:true,maxStreamingLength:1e7,lastIndex:0,logLevel:"info",requestCount:0,fallbackMethod:"GET",fallbackTransport:"streaming",transport:"long-polling",webSocketImpl:null,webSocketUrl:null,webSocketPathDelimiter:"@@",enableXDR:false,rewriteURL:false,attachHeadersAsQueryString:true,executeCallbackBeforeReconnect:false,readyState:0,lastTimestamp:0,withCredentials:false,trackMessageLength:false,messageDelimiter:"|",connectTimeout:-1,reconnectInterval:0,dropAtmosphereHeaders:true,uuid:0,shared:false,readResponsesHeaders:true,onError:function(e){},onClose:function(e){},onOpen:function(e){},onMessage:function(e){},onReconnect:function(e,t){},onMessagePublished:function(e){},onTransportFailure:function(e,t){},onLocalMessage:function(e){}};var r={status:200,responseBody:"",headers:[],state:"messageReceived",transport:"polling",error:null,request:null,partialMessage:"",id:0};var i=null;var s=null;var o=null;var u=null;var a=null;var f=true;var l=0;var c=false;var h=null;var p;var d=null;var v=jQuery.now();var m;b(t);this.subscribe=function(e){b(e);S()};this.execute=function(){S()};this.invokeCallback=function(){st()};this.close=function(){ot()};this.getUrl=function(){return n.url};this.push=function(e){X(e)};this.pushLocal=function(e){$(e)};this.response=r},subscribe:function(e,t,n){if(typeof t=="function"){jQuery.atmosphere.addCallback(t)}if(typeof e!="string"){n=e}else{n.url=e}var r=new jQuery.atmosphere.AtmosphereRequest(n);r.execute();jQuery.atmosphere.requests[jQuery.atmosphere.requests.length]=r;return r},addCallback:function(e){if(jQuery.inArray(e,jQuery.atmosphere.callbacks)==-1){jQuery.atmosphere.callbacks.push(e)}},removeCallback:function(e){var t=jQuery.inArray(e,jQuery.atmosphere.callbacks);if(t!=-1){jQuery.atmosphere.callbacks.splice(t,1)}},unsubscribe:function(){if(jQuery.atmosphere.requests.length>0){for(var e=0;e<jQuery.atmosphere.requests.length;e++){jQuery.atmosphere.requests[e].close();clearTimeout(jQuery.atmosphere.requests[e].id)}}jQuery.atmosphere.requests=[];jQuery.atmosphere.callbacks=[]},unsubscribeUrl:function(e){var t=-1;if(jQuery.atmosphere.requests.length>0){for(var n=0;n<jQuery.atmosphere.requests.length;n++){var r=jQuery.atmosphere.requests[n];if(r.getUrl()==e){r.close();clearTimeout(r.id);t=n;break}}}if(t>=0){jQuery.atmosphere.requests.splice(t,1)}},publish:function(e){if(typeof e.callback=="function"){jQuery.atmosphere.addCallback(callback)}e.transport="polling";var t=new jQuery.atmosphere.AtmosphereRequest(e);jQuery.atmosphere.requests[jQuery.atmosphere.requests.length]=t;return t},checkCORSSupport:function(){if(jQuery.browser.msie&&!window.XDomainRequest){return true}else if(jQuery.browser.opera){return true}var e=navigator.userAgent.toLowerCase();var t=e.indexOf("android")>-1;if(t){return true}return false},S4:function(){return((1+Math.random())*65536|0).toString(16).substring(1)},guid:function(){return jQuery.atmosphere.S4()+jQuery.atmosphere.S4()+"-"+jQuery.atmosphere.S4()+"-"+jQuery.atmosphere.S4()+"-"+jQuery.atmosphere.S4()+"-"+jQuery.atmosphere.S4()+jQuery.atmosphere.S4()+jQuery.atmosphere.S4()},prepareURL:function(e){var t=jQuery.now();var n=e.replace(/([?&])_=[^&]*/,"$1_="+t);return n+(n===e?(/\?/.test(e)?"&":"?")+"_="+t:"")},param:function(e){return jQuery.param(e,jQuery.ajaxSettings.traditional)},supportStorage:function(){var e=window.localStorage;if(e){try{e.setItem("t","t");e.removeItem("t");return window.StorageEvent&&!jQuery.browser.msie&&!(jQuery.browser.mozilla&&jQuery.browser.version.split(".")[0]==="1")}catch(t){}}return false},iterate:function(e,t){var n;t=t||0;(function r(){n=setTimeout(function(){if(e()===false){return}r()},t)})();return function(){clearTimeout(n)}},log:function(e,t){if(window.console){var n=window.console[e];if(typeof n=="function"){n.apply(window.console,t)}}},warn:function(){jQuery.atmosphere.log("warn",arguments)},info:function(){jQuery.atmosphere.log("info",arguments)},debug:function(){jQuery.atmosphere.log("debug",arguments)},error:function(){jQuery.atmosphere.log("error",arguments)}}}();(function(e){function r(e){return'"'+e.replace(t,function(e){var t=n[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"'}function i(e){return e<10?"0"+e:e}function s(e,t){var n,o,u,a,l=t[e],c=typeof l;if(l&&typeof l==="object"&&typeof l.toJSON==="function"){l=l.toJSON(e);c=typeof l}switch(c){case"string":return r(l);case"number":return isFinite(l)?String(l):"null";case"boolean":return String(l);case"object":if(!l){return"null"}switch(Object.prototype.toString.call(l)){case"[object Date]":return isFinite(l.valueOf())?'"'+l.getUTCFullYear()+"-"+i(l.getUTCMonth()+1)+"-"+i(l.getUTCDate())+"T"+i(l.getUTCHours())+":"+i(l.getUTCMinutes())+":"+i(l.getUTCSeconds())+"Z"+'"':"null";case"[object Array]":u=l.length;a=[];for(n=0;n<u;n++){a.push(s(n,l)||"null")}return"["+a.join(",")+"]";default:a=[];for(n in l){if(Object.prototype.hasOwnProperty.call(l,n)){o=s(n,l);if(o){a.push(r(n)+":"+o)}}}return"{"+a.join(",")+"}"}}}var t=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};e.stringifyJSON=function(e){if(window.JSON&&window.JSON.stringify){return window.JSON.stringify(e)}return s("",{"":e})}})(jQuery)