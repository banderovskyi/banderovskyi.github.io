var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},r=1,a=arguments.length;r<a;r++)if(null!==(t=arguments[r]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e,n,i){if(i)try{t.setItem(e,n)}catch(r){}return n}function i(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}function r(){var t=document,e=t.body;return e||(e=t.createElement("body"),e.fake=!0),e}function a(t){var e="";return t.fake&&(e=P.style.overflow,t.style.background="",t.style.overflow=P.style.overflow="hidden",P.appendChild(t)),e}function o(t,e){t.fake&&(t.remove(),P.style.overflow=e,P.offsetHeight)}function u(){var t=document,e=r(),n=a(e),i=t.createElement("div"),u=!1;e.appendChild(i);try{for(var l,s="(10px * 10)",c=["calc"+s,"-moz-calc"+s,"-webkit-calc"+s],f=0;f<3;f++)if(l=c[f],i.style.width=l,100===i.offsetWidth){u=l.replace(s,"");break}}catch(d){}return e.fake?o(e,n):i.remove(),u}function l(){var t=document,e=r(),n=a(e),i=t.createElement("div"),u=t.createElement("div"),l="",s=70,c=3,f=!1;i.className="tns-t-subp2",u.className="tns-t-ct";for(var d=0;d<s;d++)l+="<div></div>";return u.innerHTML=l,i.appendChild(u),e.appendChild(i),f=Math.abs(i.getBoundingClientRect().left-u.children[s-c].getBoundingClientRect().left)<2,e.fake?o(e,n):i.remove(),f}function s(){var t,e=document,n=r(),i=a(n),u=e.createElement("div"),l=e.createElement("style"),s="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",u.className="tns-mq-test",n.appendChild(l),n.appendChild(u),l.styleSheet?l.styleSheet.cssText=s:l.appendChild(e.createTextNode(s)),t=window.getComputedStyle?window.getComputedStyle(u).position:u.currentStyle.position,n.fake?o(n,i):u.remove(),"absolute"===t}function c(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}function v(t){var e="insertRule"in t?t.cssRules:t.rules;return e.length}function p(t,e){return Math.atan2(t,e)*(180/Math.PI)}function h(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return i>=90-e?n="horizontal":i<=e&&(n="vertical"),n}function m(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}function y(t,e){return t.hasAttribute(e)}function g(t,e){return t.getAttribute(e)}function x(t){return"undefined"!=typeof t.item}function b(t,e){if(t=x(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=x(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function w(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function M(t,e){"none"!==t.style.display&&(t.style.display="none")}function T(t,e){"none"===t.style.display&&(t.style.display="")}function E(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1),i=["Webkit","Moz","ms","O"];i.forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var r=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var o=t[a];if(void 0!==r.style[o])return o}return!1}function N(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=r(),u=a(i),l=n.createElement("p"),s=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return s+="transform",i.insertBefore(l,null),l.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(l).getPropertyValue(s),i.fake?o(i,u):l.remove(),void 0!==e&&e.length>0&&"none"!==e}function L(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function B(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&Q;t.addEventListener(i,e[i],r)}}function S(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&Q;t.removeEventListener(n,e[n],i)}}function H(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}function O(t,e,n,i,r,a,o){function u(){a-=l,c+=f,t.style[e]=n+c+s+i,a>0?setTimeout(u,l):o()}var l=Math.min(a,10),s=r.indexOf("%")>=0?"%":"px",r=r.replace(s,""),c=Number(t.style[e].replace(n,"").replace(i,"").replace(s,"")),f=(r-c)/a*l;setTimeout(u,l)}var D=window,k=D.requestAnimationFrame||D.webkitRequestAnimationFrame||D.mozRequestAnimationFrame||D.msRequestAnimationFrame||function(t){return setTimeout(t,16)},R=window,I=R.cancelAnimationFrame||R.mozCancelAnimationFrame||function(t){clearTimeout(t)},P=document.documentElement,z="classList"in document.createElement("_"),W=z?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},q=z?function(t,e){W(t,e)||t.classList.add(e)}:function(t,e){W(t,e)||(t.className+=" "+e)},F=z?function(t,e){W(t,e)&&t.classList.remove(e)}:function(t,e){W(t,e)&&(t.className=t.className.replace(e,""))},j=!1;try{var V=Object.defineProperty({},"passive",{get:function(){j=!0}});window.addEventListener("test",null,V)}catch(G){}var Q=!!j&&{passive:!0};Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var X=function(r){function a(t){for(var e in t)on||("slideBy"===e&&(t[e]="page"),"edgePadding"===e&&(t[e]=!1),"autoHeight"===e&&(t[e]=!1)),"responsive"===e&&a(t[e])}function o(t){t&&(Gn=Xn=Yn=Kn=Wn=Jn=Zn=$n=!1)}function x(){for(var t=on?vi-ri:vi;t<0;)t+=Mn;return t%Mn+1}function D(t){return t=t?Math.max(0,Math.min(jn?Mn-1:Mn-In,t)):0,on?t+ri:t}function R(t){for(null==t&&(t=vi),on&&(t-=ri);t<0;)t+=Mn;return Math.floor(t%Mn)}function P(){var t,e=R();return t=Wi?e:Hn||Sn?Math.ceil((e+1)*rr/Mn-1):Math.floor(e/In),!jn&&on&&vi===mi&&(t=rr-1),t}function z(){if(Sn||Hn&&!zn)return Mn-1;var t=Hn?"fixedWidth":"items",e=[];if((Hn||r[t]<Mn)&&e.push(r[t]),rn)for(var n in rn){var i=rn[n][t];i&&(Hn||i<Mn)&&e.push(i)}return e.length||e.push(0),Math.ceil(Hn?zn/Math.min.apply(null,e):Math.max.apply(null,e))}function j(){var t=z(),e=on?Math.ceil((5*t-Mn)/2):4*t-Mn;return e=Math.max(t,e),K("edgePadding")?e+1:e}function V(){return Ie.innerWidth||Re.documentElement.clientWidth||Re.body.clientWidth}function G(t){return"top"===t?"afterbegin":"beforeend"}function Q(t){if(null!=t){var e,n,i=Re.createElement("div");return t.appendChild(i),e=i.getBoundingClientRect(),n=e.right-e.left,i.remove(),n||Q(t.parentNode)}}function Y(){var t=On?2*On-Dn:0;return Q(bn)-t}function K(t){if(r[t])return!0;if(rn)for(var e in rn)if(rn[e][t])return!0;return!1}function J(t,e){if(null==e&&(e=Tn),"items"===t&&Hn)return Math.floor((kn+Dn)/(Hn+Dn))||1;var n=r[t];if(rn)for(var i in rn)e>=parseInt(i)&&t in rn[i]&&(n=rn[i][t]);return"slideBy"===t&&"page"===n&&(n=J("items")),on||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function U(t){return Ve?Ve+"("+100*t+"% / "+ai+")":100*t/ai+"%"}function _(t,e,n,i,r){var a="";if(void 0!==t){var o=t;e&&(o-=e),a=mn?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px",l=mn?u+" 0 0":"0 "+u+" 0";a="margin: 0 "+l+";"}return!on&&r&&Ke&&i&&(a+=nt(i)),a}function Z(t,e,n){return t?(t+e)*ai+"px":Ve?Ve+"("+100*ai+"% / "+n+")":100*ai/n+"%"}function $(t,e,n){var i;if(t)i=t+e+"px";else{on||(n=Math.floor(n));var r=on?ai:n;i=Ve?Ve+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==an?i+";":i+" !important;"}function tt(t){var e="";if(t!==!1){var n=mn?"padding-":"margin-",i=mn?"right":"bottom";e=n+i+": "+t+"px;"}return e}function et(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function nt(t){return et(Ke,18)+"transition-duration:"+t/1e3+"s;"}function it(t){return et(Ue,17)+"animation-duration:"+t/1e3+"s;"}function rt(){var t="tns-outer",e="tns-inner";K("gutter");if(yn.className=t,gn.className=e,yn.id=Ti+"-ow",gn.id=Ti+"-iw",""===xn.id&&(xn.id=Ti),Mi+=Ge||Sn?" tns-subpixel":" tns-no-subpixel",Mi+=Ve?" tns-calc":" tns-no-calc",Sn&&(Mi+=" tns-autowidth"),Mi+=" tns-"+r.axis,xn.className+=Mi,on?(pn=Re.createElement("div"),pn.id=Ti+"-mw",pn.className="tns-ovh",yn.appendChild(pn),pn.appendChild(gn)):yn.appendChild(gn),Vn){var n=pn?pn:gn;n.className+=" tns-ah"}if(bn.insertBefore(yn,xn),gn.appendChild(xn),m(wn,function(t,e){q(t,"tns-item"),t.id||(t.id=Ti+"-item"+e),!on&&vn&&q(t,vn),b(t,{"aria-hidden":"true",tabindex:"-1"})}),ri){for(var i=Re.createDocumentFragment(),a=Re.createDocumentFragment(),o=ri;o--;){var u=o%Mn,l=wn[u].cloneNode(!0);if(C(l,"id"),a.insertBefore(l,a.firstChild),on){var s=wn[Mn-1-u].cloneNode(!0);C(s,"id"),i.appendChild(s)}}xn.insertBefore(i,xn.firstChild),xn.appendChild(a),wn=xn.children}}function at(){if(K("autoHeight")||Sn||!mn){var t=xn.querySelectorAll("img");m(t,function(t){var e=t.src;ei||(e&&e.indexOf("data:image")<0?(t.src="",B(t,Qi),q(t,"loading"),t.src=e):Lt(t))}),k(function(){Dt(w(t),function(){Ln=!0})}),K("autoHeight")&&(t=Ht(vi,Math.min(vi+In-1,ai-1))),ei?ot():k(function(){Dt(w(t),ot)})}else on&&Zt(),st(),ct()}function ot(){if(Sn){var t=jn?vi:Mn-1;!function e(){var n=wn[t].getBoundingClientRect().left,i=wn[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?ut():setTimeout(function(){e()},16)}()}else ut()}function ut(){mn&&!Sn||(zt(),Sn?(ui=Ut(),Ni&&(Li=pt()),mi=di(),o(Ei||Li)):He()),on&&Zt(),st(),ct()}function lt(){if(!on)for(var t=vi,e=vi+Math.min(Mn,In);t<e;t++){var n=wn[t];n.style.left=100*(t-vi)/In+"%",q(n,cn),F(n,vn)}if(mn&&(Ge||Sn?(f(ti,"#"+Ti+" > .tns-item","font-size:"+Ie.getComputedStyle(wn[0]).fontSize+";",v(ti)),f(ti,"#"+Ti,"font-size:0;",v(ti))):on&&m(wn,function(t,e){t.style.marginLeft=U(e)})),Qe){if(Ke){var i=pn&&r.autoHeight?nt(r.speed):"";f(ti,"#"+Ti+"-mw",i,v(ti))}i=_(r.edgePadding,r.gutter,r.fixedWidth,r.speed,r.autoHeight),f(ti,"#"+Ti+"-iw",i,v(ti)),on&&(i=mn&&!Sn?"width:"+Z(r.fixedWidth,r.gutter,r.items)+";":"",Ke&&(i+=nt(qn)),f(ti,"#"+Ti,i,v(ti))),i=mn&&!Sn?$(r.fixedWidth,r.gutter,r.items):"",r.gutter&&(i+=tt(r.gutter)),on||(Ke&&(i+=nt(qn)),Ue&&(i+=it(qn))),i&&f(ti,"#"+Ti+" > .tns-item",i,v(ti))}else{Rt(),gn.style.cssText=_(On,Dn,Hn,Vn),on&&mn&&!Sn&&(xn.style.width=Z(Hn,Dn,In));var i=mn&&!Sn?$(Hn,Dn,In):"";Dn&&(i+=tt(Dn)),i&&f(ti,"#"+Ti+" > .tns-item",i,v(ti))}if(rn&&Qe)for(var a in rn){a=parseInt(a);var o=rn[a],i="",u="",l="",s="",c="",d=Sn?null:J("items",a),p=J("fixedWidth",a),h=J("speed",a),y=J("edgePadding",a),g=J("autoHeight",a),x=J("gutter",a);Ke&&pn&&J("autoHeight",a)&&"speed"in o&&(u="#"+Ti+"-mw{"+nt(h)+"}"),("edgePadding"in o||"gutter"in o)&&(l="#"+Ti+"-iw{"+_(y,x,p,h,g)+"}"),on&&mn&&!Sn&&("fixedWidth"in o||"items"in o||Hn&&"gutter"in o)&&(s="width:"+Z(p,x,d)+";"),Ke&&"speed"in o&&(s+=nt(h)),s&&(s="#"+Ti+"{"+s+"}"),("fixedWidth"in o||Hn&&"gutter"in o||!on&&"items"in o)&&(c+=$(p,x,d)),"gutter"in o&&(c+=tt(x)),!on&&"speed"in o&&(Ke&&(c+=nt(h)),Ue&&(c+=it(h))),c&&(c="#"+Ti+" > .tns-item{"+c+"}"),i=u+l+s+c,i&&ti.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",ti.cssRules.length)}}function st(){if(Wt(),yn.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Mt()+"</span>  of "+Mn+"</div>"),Bn=yn.querySelector(".tns-liveregion .current"),qi){var t=Jn?"stop":"start";gr?b(gr,{"data-action":t}):r.autoplayButtonOutput&&(yn.insertAdjacentHTML(G(r.autoplayPosition),'<button type="button" data-action="'+t+'">'+br[0]+t+br[1]+_n[0]+"</button>"),gr=yn.querySelector("[data-action]")),gr&&B(gr,{click:pe}),Jn&&(ce(),Zn&&B(xn,Oi),$n&&B(xn,Di))}if(zi){if(nr)b(nr,{"aria-label":"Carousel Pagination"}),er=nr.children,m(er,function(t,e){b(t,{"data-nav":e,tabindex:"-1","aria-label":cr+(e+1),"aria-controls":Ti})});else{for(var e="",n=Wi?"":'style="display:none"',i=0;i<Mn;i++)e+='<button type="button" data-nav="'+i+'" tabindex="-1" aria-controls="'+Ti+'" '+n+' aria-label="'+cr+(i+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",yn.insertAdjacentHTML(G(r.navPosition),e),nr=yn.querySelector(".tns-nav"),er=nr.children}if(De(),Ke){var a=Ke.substring(0,Ke.length-18).toLowerCase(),o="transition: all "+qn/1e3+"s";a&&(o="-"+a+"-"+o),f(ti,"[aria-controls^="+Ti+"-item]",o,v(ti))}b(er[ur],{"aria-label":cr+(ur+1)+fr}),C(er[ur],"tabindex"),q(er[ur],sr),B(nr,Hi)}Pi&&(Ji||_i&&Zi||(yn.insertAdjacentHTML(G(r.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Ti+'">'+Qn[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Ti+'">'+Qn[1]+"</button></div>"),Ji=yn.querySelector(".tns-controls")),_i&&Zi||(_i=Ji.children[0],Zi=Ji.children[1]),r.controlsContainer&&b(Ji,{"aria-label":"Carousel Navigation",tabindex:"0"}),(r.controlsContainer||r.prevButton&&r.nextButton)&&b([_i,Zi],{"aria-controls":Ti,tabindex:"-1"}),(r.controlsContainer||r.prevButton&&r.nextButton)&&(b(_i,{"data-controls":"prev"}),b(Zi,{"data-controls":"next"})),Yi=Vt(_i),Ki=Vt(Zi),Xt(),Ji?B(Ji,Si):(B(_i,Si),B(Zi,Si))),mt()}function ct(){if(on&&Ze){var t={};t[Ze]=ie,B(xn,t)}Yn&&B(xn,Ri,r.preventScrollOnTouch),Kn&&B(xn,Ii),Wn&&B(Re,ki),"inner"===an?wi.on("outerResized",function(){vt(),wi.emit("innerLoaded",ke())}):(rn||Hn||Sn||Vn||!mn)&&B(Ie,{resize:dt}),Vn&&("outer"===an?wi.on("innerLoaded",Ot):Ei||Ot()),Et(),Ei?bt():Li&&gt(),wi.on("indexChanged",kt),"inner"===an&&wi.emit("innerLoaded",ke()),"function"==typeof Ci&&Ci(ke()),En=!0}function ft(){if(ti.disabled=!0,ti.ownerNode&&ti.ownerNode.remove(),S(Ie,{resize:dt}),Wn&&S(Re,ki),Ji&&S(Ji,Si),nr&&S(nr,Hi),S(xn,Oi),S(xn,Di),gr&&S(gr,{click:pe}),Jn&&clearInterval(dr),on&&Ze){var t={};t[Ze]=ie,S(xn,t)}Yn&&S(xn,Ri),Kn&&S(xn,Ii);var e=[Cn,Ui,$i,tr,ir,xr];en.forEach(function(t,n){var i="container"===t?yn:r[t];if("object"==typeof i&&i){var a=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=e[n],r[t]=a?a.nextElementSibling:o.firstElementChild}}),en=cn=fn=dn=vn=mn=yn=gn=xn=bn=Cn=wn=Mn=hn=Tn=Sn=Hn=On=Dn=kn=In=Pn=zn=Wn=qn=Fn=jn=Vn=ti=ei=An=ii=ri=ai=oi=ui=li=si=ci=fi=di=vi=pi=hi=mi=Nn=gi=xi=bi=Ci=wi=Mi=Ti=Ei=Ai=Ni=Li=Bi=Si=Hi=Oi=Di=ki=Ri=Ii=Pi=zi=Wi=qi=Fi=ji=Vi=Gi=Qi=Ln=Gn=Qn=Ji=Ui=_i=Zi=Yi=Ki=Xn=nr=ir=er=rr=ar=or=ur=lr=sr=cr=fr=Jn=Un=yr=_n=Zn=gr=xr=$n=br=dr=vr=pr=hr=mr=Er=Ar=Cr=wr=Mr=Nr=Tr=Lr=Yn=Kn=null;for(var n in this)"rebuild"!==n&&(this[n]=null);En=!1}function dt(t){k(function(){vt(we(t))})}function vt(t){if(En){"outer"===an&&wi.emit("outerResized",ke(t)),Tn=V();var e,n=hn,i=!1;rn&&(ht(),e=n!==hn,e&&wi.emit("newBreakpointStart",ke(t)));var a,u,l=In,s=Ei,c=Li,p=Wn,h=Gn,m=Xn,y=Yn,g=Kn,x=Jn,b=Zn,C=$n,w=vi;if(e){var E=Hn,A=Vn,N=Qn,L=Rn,H=_n;if(!Qe)var O=Dn,k=On}if(Wn=J("arrowKeys"),Gn=J("controls"),Xn=J("nav"),Yn=J("touch"),Rn=J("center"),Kn=J("mouseDrag"),Jn=J("autoplay"),Zn=J("autoplayHoverPause"),$n=J("autoplayResetOnVisibility"),e&&(Ei=J("disable"),Hn=J("fixedWidth"),qn=J("speed"),Vn=J("autoHeight"),Qn=J("controlsText"),_n=J("autoplayText"),Un=J("autoplayTimeout"),Qe||(On=J("edgePadding"),Dn=J("gutter"))),o(Ei),kn=Y(),mn&&!Sn||Ei||(zt(),mn||(He(),i=!0)),(Hn||Sn)&&(ui=Ut(),mi=di()),(e||Hn)&&(In=J("items"),Pn=J("slideBy"),u=In!==l,u&&(Hn||Sn||(mi=di()),Br())),e&&Ei!==s&&(Ei?bt():Ct()),Ni&&(e||Hn||Sn)&&(Li=pt(),Li!==c&&(Li?($t(_t(D(0))),gt()):(xt(),i=!0))),o(Ei||Li),Jn||(Zn=$n=!1),Wn!==p&&(Wn?B(Re,ki):S(Re,ki)),Gn!==h&&(Gn?Ji?T(Ji):(_i&&T(_i),Zi&&T(Zi)):Ji?M(Ji):(_i&&M(_i),Zi&&M(Zi))),Xn!==m&&(Xn?T(nr):M(nr)),Yn!==y&&(Yn?B(xn,Ri,r.preventScrollOnTouch):S(xn,Ri)),Kn!==g&&(Kn?B(xn,Ii):S(xn,Ii)),Jn!==x&&(Jn?(gr&&T(gr),vr||hr||ce()):(gr&&M(gr),vr&&fe())),Zn!==b&&(Zn?B(xn,Oi):S(xn,Oi)),$n!==C&&($n?B(Re,Di):S(Re,Di)),e){if(Hn===E&&Rn===L||(i=!0),Vn!==A&&(Vn||(gn.style.height="")),Gn&&Qn!==N&&(_i.innerHTML=Qn[0],Zi.innerHTML=Qn[1]),gr&&_n!==H){var R=Jn?1:0,I=gr.innerHTML,P=I.length-H[R].length;I.substring(P)===H[R]&&(gr.innerHTML=I.substring(0,P)+_n[R])}}else Rn&&(Hn||Sn)&&(i=!0);if((u||Hn&&!Sn)&&(rr=Oe(),De()),a=vi!==w,a?(wi.emit("indexChanged",ke()),i=!0):u?a||kt():(Hn||Sn)&&(Et(),Wt(),wt()),u&&!on&&qt(),!Ei&&!Li){if(e&&!Qe&&(On===k&&Dn===O||(gn.style.cssText=_(On,Dn,Hn,qn,Vn)),mn)){on&&(xn.style.width=Z(Hn,Dn,In));var z=$(Hn,Dn,In)+tt(Dn);d(ti,v(ti)-1),f(ti,"#"+Ti+" > .tns-item",z,v(ti))}Vn&&Ot(),i&&(Zt(),pi=vi)}e&&wi.emit("newBreakpointEnd",ke(t))}}function pt(){if(!Hn&&!Sn){var t=Rn?In-(In-1)/2:In;return Mn<=t}var e=Hn?(Hn+Dn)*Mn:An[Mn],n=On?kn+2*On:kn+Dn;return Rn&&(n-=Hn?(kn-Hn)/2:(kn-(An[vi+1]-An[vi]-Dn))/2),e<=n}function ht(){hn=0;for(var t in rn)t=parseInt(t),Tn>=t&&(hn=t)}function mt(){!Jn&&gr&&M(gr),!Xn&&nr&&M(nr),Gn||(Ji?M(Ji):(_i&&M(_i),Zi&&M(Zi)))}function yt(){Jn&&gr&&T(gr),Xn&&nr&&T(nr),Gn&&(Ji?T(Ji):(_i&&T(_i),Zi&&T(Zi)))}function gt(){if(!Bi){if(On&&(gn.style.margin="0px"),ri)for(var t="tns-transparent",e=ri;e--;)on&&q(wn[e],t),q(wn[ai-e-1],t);mt(),Bi=!0}}function xt(){if(Bi){if(On&&Qe&&(gn.style.margin=""),ri)for(var t="tns-transparent",e=ri;e--;)on&&F(wn[e],t),F(wn[ai-e-1],t);yt(),Bi=!1}}function bt(){if(!Ai){if(ti.disabled=!0,xn.className=xn.className.replace(Mi.substring(1),""),C(xn,["style"]),jn)for(var t=ri;t--;)on&&M(wn[t]),M(wn[ai-t-1]);if(mn&&on||C(gn,["style"]),!on)for(var e=vi,n=vi+Mn;e<n;e++){var i=wn[e];C(i,["style"]),F(i,cn),F(i,vn)}mt(),Ai=!0}}function Ct(){if(Ai){if(ti.disabled=!1,xn.className+=Mi,Zt(),jn)for(var t=ri;t--;)on&&T(wn[t]),T(wn[ai-t-1]);if(!on)for(var e=vi,n=vi+Mn;e<n;e++){var i=wn[e],r=e<vi+In?cn:vn;i.style.left=100*(e-vi)/In+"%",q(i,r)}yt(),Ai=!1}}function wt(){var t=Mt();Bn.innerHTML!==t&&(Bn.innerHTML=t)}function Mt(){var t=Tt(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function Tt(t){null==t&&(t=_t());var e,n,i,r=vi;if(Rn||On?(Sn||Hn)&&(n=-(parseFloat(t)+On),i=n+kn+2*On):Sn&&(n=An[vi],i=n+kn),Sn)An.forEach(function(t,a){a<ai&&((Rn||On)&&t<=n+.5&&(r=a),i-t>=.5&&(e=a))});else{if(Hn){var a=Hn+Dn;Rn||On?(r=Math.floor(n/a),e=Math.ceil(i/a-1)):e=r+Math.ceil(kn/a)-1}else if(Rn||On){var o=In-1;if(Rn?(r-=o/2,e=vi+o/2):e=vi+o,On){var u=On*In/kn;r-=u,e+=u}r=Math.floor(r),e=Math.ceil(e)}else e=r+In-1;r=Math.max(r,0),e=Math.min(e,ai-1)}return[r,e]}function Et(){if(ei&&!Ei){var t=Tt();t.push(ni),Ht.apply(null,t).forEach(function(t){if(!W(t,Gi)){var e={};e[Ze]=function(t){t.stopPropagation()},B(t,e),B(t,Qi),t.src=g(t,"data-src");var n=g(t,"data-srcset");n&&(t.srcset=n),q(t,"loading")}})}}function At(t){Lt(Me(t))}function Nt(t){Bt(Me(t))}function Lt(t){q(t,"loaded"),St(t)}function Bt(t){q(t,"failed"),St(t)}function St(t){q(t,Gi),F(t,"loading"),S(t,Qi)}function Ht(t,e,n){var i=[];for(n||(n="img");t<=e;)m(wn[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function Ot(){var t=Ht.apply(null,Tt());k(function(){Dt(t,Pt)})}function Dt(t,e){return Ln?e():(t.forEach(function(e,n){!ei&&e.complete&&St(e),W(e,Gi)&&t.splice(n,1)}),t.length?void k(function(){Dt(t,e)}):e())}function kt(){Et(),Wt(),wt(),Xt(),Ft()}function Rt(){on&&Vn&&(pn.style[Ke]=qn/1e3+"s")}function It(t,e){for(var n=[],i=t,r=Math.min(t+e,ai);i<r;i++)n.push(wn[i].offsetHeight);return Math.max.apply(null,n)}function Pt(){var t=Vn?It(vi,In):It(ri,Mn),e=pn?pn:gn;e.style.height!==t&&(e.style.height=t+"px")}function zt(){An=[0];var t=mn?"left":"top",e=mn?"right":"bottom",n=wn[0].getBoundingClientRect()[t];m(wn,function(i,r){r&&An.push(i.getBoundingClientRect()[t]-n),r===ai-1&&An.push(i.getBoundingClientRect()[e]-n)})}function Wt(){var t=Tt(),e=t[0],n=t[1];m(wn,function(t,i){i>=e&&i<=n?y(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),q(t,Vi)):y(t,"aria-hidden")||(b(t,{"aria-hidden":"true",tabindex:"-1"}),F(t,Vi))})}function qt(){for(var t=vi+Math.min(Mn,In),e=ai;e--;){var n=wn[e];e>=vi&&e<t?(q(n,"tns-moving"),n.style.left=100*(e-vi)/In+"%",q(n,cn),F(n,vn)):n.style.left&&(n.style.left="",q(n,vn),F(n,cn)),F(n,fn)}setTimeout(function(){m(wn,function(t){F(t,"tns-moving")})},300)}function Ft(){if(Xn&&(ur=or>=0?or:P(),or=-1,ur!==lr)){var t=er[lr],e=er[ur];b(t,{tabindex:"-1","aria-label":cr+(lr+1)}),F(t,sr),b(e,{"aria-label":cr+(ur+1)+fr}),C(e,"tabindex"),q(e,sr),lr=ur}}function jt(t){return t.nodeName.toLowerCase()}function Vt(t){return"button"===jt(t)}function Gt(t){return"true"===t.getAttribute("aria-disabled")}function Qt(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Xt(){if(Gn&&!Fn&&!jn){var t=Yi?_i.disabled:Gt(_i),e=Ki?Zi.disabled:Gt(Zi),n=vi<=hi,i=!Fn&&vi>=mi;n&&!t&&Qt(Yi,_i,!0),!n&&t&&Qt(Yi,_i,!1),i&&!e&&Qt(Ki,Zi,!0),!i&&e&&Qt(Ki,Zi,!1)}}function Yt(t,e){Ke&&(t.style[Ke]=e)}function Kt(){return Hn?(Hn+Dn)*ai:An[ai]}function Jt(t){null==t&&(t=vi);var e=On?Dn:0;return Sn?(kn-e-(An[t+1]-An[t]-Dn))/2:Hn?(kn-Hn)/2:(In-1)/2}function Ut(){var t=On?Dn:0,e=kn+t-Kt();return Rn&&!jn&&(e=Hn?-(Hn+Dn)*(ai-1)-Jt():Jt(ai-1)-An[ai-1]),e>0&&(e=0),e}function _t(t){null==t&&(t=vi);var e;if(mn&&!Sn)if(Hn)e=-(Hn+Dn)*t,Rn&&(e+=Jt());else{var n=Xe?ai:In;Rn&&(t-=Jt()),e=100*-t/n}else e=-An[t],Rn&&Sn&&(e+=Jt());return oi&&(e=Math.max(e,ui)),e+=!mn||Sn||Hn?"px":"%"}function Zt(t){Yt(xn,"0s"),$t(t)}function $t(t){null==t&&(t=_t()),xn.style[si]=ci+t+fi}function te(t,e,n,i){var r=t+In;jn||(r=Math.min(r,ai));for(var a=t;a<r;a++){var o=wn[a];i||(o.style.left=100*(a-vi)/In+"%"),dn&&Je&&(o.style[Je]=o.style[_e]=dn*(a-t)/1e3+"s"),F(o,e),q(o,n),i&&ii.push(o)}}function ee(t,e){li&&Br(),(vi!==pi||e)&&(wi.emit("indexChanged",ke()),wi.emit("transitionStart",ke()),Vn&&Ot(),vr&&t&&["click","keydown"].indexOf(t.type)>=0&&fe(),bi=!0,Sr())}function ne(t){return t.toLowerCase().replace(/-/g,"")}function ie(t){if(on||bi){if(wi.emit("transitionEnd",ke(t)),!on&&ii.length>0)for(var e=0;e<ii.length;e++){var n=ii[e];n.style.left="",_e&&Je&&(n.style[_e]="",n.style[Je]=""),F(n,fn),q(n,vn)}if(!t||!on&&t.target.parentNode===xn||t.target===xn&&ne(t.propertyName)===ne(si)){if(!li){var i=vi;Br(),vi!==i&&(wi.emit("indexChanged",ke()),Zt())}"inner"===an&&wi.emit("innerLoaded",ke()),bi=!1,pi=vi}}}function re(t,e){if(!Li)if("prev"===t)ae(e,-1);else if("next"===t)ae(e,1);else{if(bi){if(yi)return;ie()}var n=R(),i=0;if("first"===t?i=-n:"last"===t?i=on?Mn-In-n:Mn-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Mn-1,t))),i=t-n)),!on&&i&&Math.abs(i)<In){var r=i>0?1:-1;i+=vi+i-Mn>=hi?Mn*r:2*Mn*r*-1}vi+=i,on&&jn&&(vi<hi&&(vi+=Mn),vi>mi&&(vi-=Mn)),R(vi)!==R(pi)&&ee(e)}}function ae(t,e){if(bi){if(yi)return;ie()}var n;if(!e){t=we(t);for(var i=Me(t);i!==Ji&&[_i,Zi].indexOf(i)<0;)i=i.parentNode;var r=[_i,Zi].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Fn){if(vi===hi&&e===-1)return void re("last",t);if(vi===mi&&1===e)return void re("first",t)}e&&(vi+=Pn*e,Sn&&(vi=Math.floor(vi)),ee(n||t&&"keydown"===t.type?t:null))}function oe(t){if(bi){if(yi)return;ie()}t=we(t);for(var e,n=Me(t);n!==nr&&!y(n,"data-nav");)n=n.parentNode;if(y(n,"data-nav")){var e=or=Number(g(n,"data-nav")),i=Hn||Sn?e*Mn/rr:e*In,r=Wi?e:Math.min(Math.ceil(i),Mn-1);re(r,t),ur===e&&(vr&&fe(),or=-1)}}function ue(){dr=setInterval(function(){ae(null,yr)},Un),vr=!0}function le(){clearInterval(dr),vr=!1}function se(t,e){b(gr,{"data-action":t}),gr.innerHTML=br[0]+t+br[1]+e}function ce(){ue(),gr&&se("stop",_n[1])}function fe(){le(),gr&&se("start",_n[0])}function de(){Jn&&!vr&&(ce(),hr=!1)}function ve(){vr&&(fe(),hr=!0)}function pe(){vr?(fe(),hr=!0):(ce(),hr=!1)}function he(){Re.hidden?vr&&(le(),mr=!0):mr&&(ue(),mr=!1)}function me(){vr&&(le(),pr=!0)}function ye(){pr&&(ue(),pr=!1)}function ge(t){t=we(t);var e=[Pe.LEFT,Pe.RIGHT].indexOf(t.keyCode);e>=0&&ae(t,0===e?-1:1)}function xe(t){t=we(t);var e=[Pe.LEFT,Pe.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?_i.disabled||ae(t,-1):Zi.disabled||ae(t,1))}function be(t){t.focus()}function Ce(t){t=we(t);var e=Re.activeElement;if(y(e,"data-nav")){var n=[Pe.LEFT,Pe.RIGHT,Pe.ENTER,Pe.SPACE].indexOf(t.keyCode),i=Number(g(e,"data-nav"));n>=0&&(0===n?i>0&&be(er[i-1]):1===n?i<rr-1&&be(er[i+1]):(or=i,re(i,t)))}}function we(t){return t=t||Ie.event,Te(t)?t.changedTouches[0]:t}function Me(t){return t.target||Ie.event.srcElement}function Te(t){return t.type.indexOf("touch")>=0}function Ee(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ae(){return h(p(Ar.y-Er.y,Ar.x-Er.x),gi)===r.axis}function Ne(t){if(bi){if(yi)return;ie()}Jn&&vr&&le(),Nr=!0,Tr&&(I(Tr),Tr=null);var e=we(t);wi.emit(Te(t)?"touchStart":"dragStart",ke(t)),!Te(t)&&["img","a"].indexOf(jt(Me(t)))>=0&&Ee(t),Ar.x=Er.x=e.clientX,Ar.y=Er.y=e.clientY,on&&(Cr=parseFloat(xn.style[si].replace(ci,"")),Yt(xn,"0s"))}function Le(t){if(Nr){var e=we(t);Ar.x=e.clientX,Ar.y=e.clientY,on?Tr||(Tr=k(function(){Be(t)})):("?"===xi&&(xi=Ae()),xi&&(Xi=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Xi&&t.preventDefault()}}function Be(t){if(!xi)return void(Nr=!1);if(I(Tr),Nr&&(Tr=k(function(){Be(t)})),"?"===xi&&(xi=Ae()),xi){!Xi&&Te(t)&&(Xi=!0);try{t.type&&wi.emit(Te(t)?"touchMove":"dragMove",ke(t))}catch(e){}var n=Cr,i=Lr(Ar,Er);if(!mn||Hn||Sn)n+=i,n+="px";else{var r=Xe?i*In*100/((kn+Dn)*ai):100*i/(kn+Dn);n+=r,n+="%"}xn.style[si]=ci+n+fi}}function Se(t){if(Nr){Tr&&(I(Tr),Tr=null),on&&Yt(xn,""),Nr=!1;var e=we(t);Ar.x=e.clientX,Ar.y=e.clientY;var n=Lr(Ar,Er);if(Math.abs(n)){if(!Te(t)){var i=Me(t);B(i,{click:function a(t){Ee(t),S(i,{click:a})}})}on?Tr=k(function(){if(mn&&!Sn){var e=-n*In/(kn+Dn);e=n>0?Math.floor(e):Math.ceil(e),vi+=e}else{var i=-(Cr+n);if(i<=0)vi=hi;else if(i>=An[ai-1])vi=mi;else for(var r=0;r<ai&&i>=An[r];)vi=r,i>An[r]&&n<0&&(vi+=1),r++}ee(t,n),wi.emit(Te(t)?"touchEnd":"dragEnd",ke(t))}):xi&&ae(t,n>0?-1:1)}}"auto"===r.preventScrollOnTouch&&(Xi=!1),gi&&(xi="?"),Jn&&!vr&&ue()}function He(){var t=pn?pn:gn;t.style.height=An[vi+In]-An[vi]+"px"}function Oe(){var t=Hn?(Hn+Dn)*Mn/kn:Mn/In;return Math.min(Math.ceil(t),Mn)}function De(){if(Xn&&!Wi&&rr!==ar){var t=ar,e=rr,n=T;for(ar>rr&&(t=rr,e=ar,n=M);t<e;)n(er[t]),t++;ar=rr}}function ke(t){return{container:xn,slideItems:wn,navContainer:nr,navItems:er,controlsContainer:Ji,hasControls:Pi,prevButton:_i,nextButton:Zi,items:In,slideBy:Pn,cloneCount:ri,slideCount:Mn,slideCountNew:ai,index:vi,indexCached:pi,displayIndex:x(),navCurrentIndex:ur,navCurrentIndexCached:lr,pages:rr,pagesCached:ar,sheet:ti,isOn:En,event:t||{}}}r=t({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},r||{});var Re=document,Ie=window,Pe={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},ze={},We=r.useLocalStorage;if(We){var qe=navigator.userAgent,Fe=new Date;try{ze=Ie.localStorage,ze?(ze.setItem(Fe,Fe),We=ze.getItem(Fe)==Fe,ze.removeItem(Fe)):We=!1,We||(ze={})}catch(je){We=!1}We&&(ze.tnsApp&&ze.tnsApp!==qe&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){ze.removeItem(t)}),localStorage.tnsApp=qe)}var Ve=ze.tC?e(ze.tC):n(ze,"tC",u(),We),Ge=ze.tPL?e(ze.tPL):n(ze,"tPL",l(),We),Qe=ze.tMQ?e(ze.tMQ):n(ze,"tMQ",s(),We),Xe=ze.tTf?e(ze.tTf):n(ze,"tTf",A("transform"),We),Ye=ze.t3D?e(ze.t3D):n(ze,"t3D",N(Xe),We),Ke=ze.tTDu?e(ze.tTDu):n(ze,"tTDu",A("transitionDuration"),We),Je=ze.tTDe?e(ze.tTDe):n(ze,"tTDe",A("transitionDelay"),We),Ue=ze.tADu?e(ze.tADu):n(ze,"tADu",A("animationDuration"),We),_e=ze.tADe?e(ze.tADe):n(ze,"tADe",A("animationDelay"),We),Ze=ze.tTE?e(ze.tTE):n(ze,"tTE",L(Ke,"Transition"),We),$e=ze.tAE?e(ze.tAE):n(ze,"tAE",L(Ue,"Animation"),We),tn=Ie.console&&"function"==typeof Ie.console.warn,en=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],nn={};if(en.forEach(function(t){if("string"==typeof r[t]){var e=r[t],n=Re.querySelector(e);if(nn[t]=e,!n||!n.nodeName)return void(tn&&console.warn("Can't find",r[t]));r[t]=n}}),r.container.children.length<1)return void(tn&&console.warn("No slides found in",r.container));var rn=r.responsive,an=r.nested,on="carousel"===r.mode;if(rn){0 in rn&&(r=t(r,rn[0]),delete rn[0]);var un={};for(var ln in rn){var sn=rn[ln];sn="number"==typeof sn?{items:sn}:sn,un[ln]=sn}rn=un,un=null}if(on||a(r),!on){r.axis="horizontal",r.slideBy="page",r.edgePadding=!1;var cn=r.animateIn,fn=r.animateOut,dn=r.animateDelay,vn=r.animateNormal}var pn,hn,mn="horizontal"===r.axis,yn=Re.createElement("div"),gn=Re.createElement("div"),xn=r.container,bn=xn.parentNode,Cn=xn.outerHTML,wn=xn.children,Mn=wn.length,Tn=V(),En=!1;rn&&ht(),on&&(xn.className+=" tns-vpfix");var An,Nn,Ln,Bn,Sn=r.autoWidth,Hn=J("fixedWidth"),On=J("edgePadding"),Dn=J("gutter"),kn=Y(),Rn=J("center"),In=Sn?1:Math.floor(J("items")),Pn=J("slideBy"),zn=r.viewportMax||r.fixedWidthViewportWidth,Wn=J("arrowKeys"),qn=J("speed"),Fn=r.rewind,jn=!Fn&&r.loop,Vn=J("autoHeight"),Gn=J("controls"),Qn=J("controlsText"),Xn=J("nav"),Yn=J("touch"),Kn=J("mouseDrag"),Jn=J("autoplay"),Un=J("autoplayTimeout"),_n=J("autoplayText"),Zn=J("autoplayHoverPause"),$n=J("autoplayResetOnVisibility"),ti=c(),ei=r.lazyload,ni=r.lazyloadSelector,ii=[],ri=jn?j():0,ai=on?Mn+2*ri:Mn+ri,oi=!(!Hn&&!Sn||jn),ui=Hn?Ut():null,li=!on||!jn,si=mn?"left":"top",ci="",fi="",di=function(){return Hn?function(){return Rn&&!jn?Mn-1:Math.ceil(-ui/(Hn+Dn))}:Sn?function(){for(var t=ai;t--;)if(An[t]>=-ui)return t}:function(){return Rn&&on&&!jn?Mn-1:jn||on?Math.max(0,ai-Math.ceil(In)):ai-1}}(),vi=D(J("startIndex")),pi=vi,hi=(x(),0),mi=Sn?null:di(),yi=r.preventActionWhenRunning,gi=r.swipeAngle,xi=!gi||"?",bi=!1,Ci=r.onInit,wi=new H,Mi=" tns-slider tns-"+r.mode,Ti=xn.id||i(),Ei=J("disable"),Ai=!1,Ni=r.freezable,Li=!(!Ni||Sn)&&pt(),Bi=!1,Si={click:ae,keydown:xe},Hi={click:oe,keydown:Ce},Oi={mouseover:me,mouseout:ye},Di={visibilitychange:he},ki={keydown:ge},Ri={touchstart:Ne,touchmove:Le,touchend:Se,touchcancel:Se},Ii={mousedown:Ne,mousemove:Le,mouseup:Se,mouseleave:Se},Pi=K("controls"),zi=K("nav"),Wi=!!Sn||r.navAsThumbnails,qi=K("autoplay"),Fi=K("touch"),ji=K("mouseDrag"),Vi="tns-slide-active",Gi="tns-complete",Qi={load:At,error:Nt},Xi="force"===r.preventScrollOnTouch;if(Pi)var Yi,Ki,Ji=r.controlsContainer,Ui=r.controlsContainer?r.controlsContainer.outerHTML:"",_i=r.prevButton,Zi=r.nextButton,$i=r.prevButton?r.prevButton.outerHTML:"",tr=r.nextButton?r.nextButton.outerHTML:"";if(zi)var er,nr=r.navContainer,ir=r.navContainer?r.navContainer.outerHTML:"",rr=Sn?Mn:Oe(),ar=0,or=-1,ur=P(),lr=ur,sr="tns-nav-active",cr="Carousel Page ",fr=" (Current Slide)";if(qi)var dr,vr,pr,hr,mr,yr="forward"===r.autoplayDirection?1:-1,gr=r.autoplayButton,xr=r.autoplayButton?r.autoplayButton.outerHTML:"",br=["<span class='tns-visually-hidden'>"," animation</span>"];if(Fi||ji)var Cr,wr,Mr,Tr,Er={},Ar={},Nr=!1,Lr=mn?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Sn||o(Ei||Li),Xe&&(si=Xe,ci="translate",Ye?(ci+=mn?"3d(":"3d(0px, ",fi=mn?", 0px, 0px)":", 0px)"):(ci+=mn?"X(":"Y(",fi=")")),on&&(xn.className=xn.className.replace("tns-vpfix","")),rt(),lt(),at();var Br=function(){return jn?on?function(){var t=hi,e=mi;t+=Pn,e-=Pn,On?(t+=1,e-=1):Hn&&(kn+Dn)%(Hn+Dn)&&(e-=1),ri&&(vi>e?vi-=Mn:vi<t&&(vi+=Mn))}:function(){if(vi>mi)for(;vi>=hi+Mn;)vi-=Mn;else if(vi<hi)for(;vi<=mi-Mn;)vi+=Mn;
}:function(){vi=Math.max(hi,Math.min(mi,vi))}}(),Sr=function(){return on?function(){Yt(xn,""),Ke||!qn?($t(),qn&&E(xn)||ie()):O(xn,si,ci,fi,_t(),qn,ie),mn||He()}:function(){ii=[];var t={};t[Ze]=t[$e]=ie,S(wn[pi],t),B(wn[vi],t),te(pi,cn,fn,!0),te(vi,vn,cn),Ze&&$e&&qn&&E(xn)||ie()}}();return{version:"2.9.2",getInfo:ke,events:wi,goTo:re,play:de,pause:ve,isOn:En,updateSliderHeight:Pt,refresh:at,destroy:ft,rebuild:function(){return X(t(r,nn))}}};return X}();