/**
 * Copyright MARS FLAG Corporation. All rights reserved.
 *
 * http://www.marsflag.com/
 */
(function(J,Q,b,Y,F){if(J[Y]!=F){return }J[Y]=1;J.onerror=function(){return true};var e=J.MF_suggest||J.MF_conf,S={},Q=J.document,a="replace",R="split",D="length",M="jQuery",c="getElementsByTagName",N=Q[c]("script"),B=Q.location,O=B.protocol,V=0,H=(!!Date.now)?function(){return Date.now()}:function(){return +new Date},A="GALFSRAM",T=J[A]=J[A]||{};if(e){S=e.opts}else{(function(i,h,f,g){i=i[i[D]-1].src;h=i[a](/^.*?(#|$)/,"");f=h[R]("&");for(;V<f[D];){g=f[V++][R]("=");S[g[0]]=g[1]||""}e={base_uri:i.replace(/[?#].*?$/,"").replace(/\/[^/]+$/,"")+"/",opts:S}})(Q[c]("script"))}var V;var W=0;var E=e.base_uri?e.base_uri[a](/\/*$/,"/"):"";var P=[E+"common.js",E+"sug_lib.js",E+"sug_view.js"];var U=[];var X=["body {font-size:16px; border:0px; margin:0px; padding:0px; overflow:hidden; font-family:'NotoSans', 'NotoSansCJKjp', Arial, 'Arial Unicode MS', sans-serif;}","body * {font-size:16px !important; font-family:'NotoSans', 'NotoSansCJKjp', Arial, 'Arial Unicode MS', sans-serif;}","#suggest_area table {border-collapse:collapse; border:none; border-spacing:0}","body #suggest_area td {border:1px solid #E1E0D2; cursor:pointer; font-weight:normal; font-size:16px !important; line-height:1.3em; text-align:left; height: auto !important; max-height: 64px; padding:8px; }",".suggest_row_0 {background-color:#FFFFFF}",".suggest_row_1 {background-color:#F2F2F2}",".suggest_data_graph div {background-color:#E0FFFF; border-bottom:1px solid #6699FF;border-left:1px solid #6699FF}"];function Z(){return(T&&T[M])}function L(f){return(f&&f[a](/^https?:/,O)[a](/\/*$/,"/"))}if(Z()){P.shift()}var I,K=Q[c](b)[0];function C(f){I=Q.createElement(f)}function d(){K.parentNode.insertBefore(I,K)}for(V=0;V<P[D];V++){C(b);I.src=P[V];d()}if(U[D]>0){C("style");I.type="text/css";I.innerHTML="<!--"+U.join("")+"-->";d()}(function(m){var k=false;function g(){if(k){return }k=true;m()}var j=navigator.userAgent.toLowerCase();var f={safari:/webkit/.test(j),opera:/opera/.test(j),msie:/msie/.test(j)&&!/opera/.test(j)};if(Q.addEventListener&&!f.opera){Q.addEventListener("DOMContentLoaded",g,false)}if(f.msie&&J==top){(function(){if(k){return }try{Q.documentElement.doScroll("left")}catch(n){setTimeout(arguments.callee,10);return }g()})()}if(f.opera){Q.addEventListener("DOMContentLoaded",function(){if(k){return }for(var n=0;n<Q.styleSheets[D];n++){if(Q.styleSheets[n].disabled){setTimeout(arguments.callee,10);return }}g()},false)}if(f.safari){var h;function l(){var p=Q;var q=p[c]("style")[D];var n=p[c]("link");for(var o=0;o<n[D];o++){if(n[o].rel=="stylesheet"){q++}}return q}(function(){if(k){return }if(Q.readyState!="loaded"&&Q.readyState!="complete"){setTimeout(arguments.callee,10);return }if(h===F){h=l()}if(Q.styleSheets[D]!=h){setTimeout(arguments.callee,10);return }g()})()}var i=J.onload;J.onload=function(){if(i){i.apply(this,arguments)}g()}})(G);function G(){if(!(Z()&&J.initJSONPSuggest)){if(W<100){W++;setTimeout(G,100)}return }var g=T[M];var f=g("#MF_form_phrase, .MF_form_phrase");(function(){function i(m,l){var n;if(m.input){n=g(m.input)}else{if(f){n=f;f=null}else{return }}if(n[D]==1){k(n,m,l)}else{if(n[D]>1){n.each(function(o){k(g(this),m,l+"_"+o)})}}}function k(p,n,m){if(p.data("suggest_idx")){return }if(p.data("ui-autocomplete")){return }p.data("suggest_idx",m);var l={interface_url:(L(n.sv)||"")+"/suggest.x"[a](/^https?:/,Q.location.protocol),input_jquery:p,array_styles:X,show_data_graph:false,suggest_frame:"suggest_frame"+(m||""),handler_name:"suggest_ctxt"+(m||""),callback:"load_suggest"};var o=n.unit||n.unitid;if(o){if(o.indexOf(j)!==0){o=j+o}l.array_queries="unitid="+o}initJSONPSuggest(l,g)}var h=e.opts,j="mf2_";if(h){if(typeof h[D]!="number"){i(h)}else{for(V=0;V<h[D];V++){i(h[V],V)}}}})()}})(window,document,"script","MF_suggest_ext");