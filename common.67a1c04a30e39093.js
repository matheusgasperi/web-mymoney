"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4833:(M,v,u)=>{u.d(v,{c:()=>i});var _=u(7205),c=u(7683),m=u(3139);const i=(a,s)=>{let t,e;const n=(l,p,f)=>{if(typeof document>"u")return;const w=document.elementFromPoint(l,p);w&&s(w)?w!==t&&(d(),o(w,f)):d()},o=(l,p)=>{t=l,e||(e=t);const f=t;(0,_.c)(()=>f.classList.add("ion-activated")),p()},d=(l=!1)=>{if(!t)return;const p=t;(0,_.c)(()=>p.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,m.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>n(l.currentX,l.currentY,c.a),onMove:l=>n(l.currentX,l.currentY,c.b),onEnd:()=>{d(!0),(0,c.h)(),e=void 0}})}},8685:(M,v,u)=>{u.d(v,{g:()=>_});const _=(s,t,e,n,o)=>m(s[1],t[1],e[1],n[1],o).map(d=>c(s[0],t[0],e[0],n[0],d)),c=(s,t,e,n,o)=>o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+n*o))-s*Math.pow(o-1,3),m=(s,t,e,n,o)=>a((n-=o)-3*(e-=o)+3*(t-=o)-(s-=o),3*e-6*t+3*s,3*t-3*s,s).filter(l=>l>=0&&l<=1),a=(s,t,e,n)=>{if(0===s)return((s,t,e)=>{const n=t*t-4*s*e;return n<0?[]:[(-t+Math.sqrt(n))/(2*s),(-t-Math.sqrt(n))/(2*s)]})(t,e,n);const o=(3*(e/=s)-(t/=s)*t)/3,d=(2*t*t*t-9*t*e+27*(n/=s))/27;if(0===o)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-o),-Math.sqrt(-o)];const l=Math.pow(d/2,2)+Math.pow(o/3,3);if(0===l)return[Math.pow(d/2,.5)-t/3];if(l>0)return[Math.pow(-d/2+Math.sqrt(l),1/3)-Math.pow(d/2+Math.sqrt(l),1/3)-t/3];const p=Math.sqrt(Math.pow(-o/3,3)),f=Math.acos(-d/(2*Math.sqrt(Math.pow(-o/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(f/3)-t/3,w*Math.cos((f+2*Math.PI)/3)-t/3,w*Math.cos((f+4*Math.PI)/3)-t/3]}},9523:(M,v,u)=>{u.d(v,{i:()=>_});const _=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},1112:(M,v,u)=>{u.r(v),u.d(v,{startFocusVisible:()=>i});const _="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=a=>{let s=[],t=!0;const e=a?a.shadowRoot:document,n=a||document.body,o=E=>{s.forEach(h=>h.classList.remove(_)),E.forEach(h=>h.classList.add(_)),s=E},d=()=>{t=!1,o([])},l=E=>{t=m.includes(E.key),t||o([])},p=E=>{if(t&&E.composedPath){const h=E.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));o(h)}},f=()=>{e.activeElement===n&&o([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",p),e.addEventListener("focusout",f),e.addEventListener("touchstart",d),e.addEventListener("mousedown",d),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",p),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",d),e.removeEventListener("mousedown",d)},setFocus:o}}},1878:(M,v,u)=>{u.d(v,{C:()=>a,a:()=>m,d:()=>i});var _=u(5861),c=u(3756);const m=function(){var s=(0,_.Z)(function*(t,e,n,o,d,l){var p;if(t)return t.attachViewToDom(e,n,d,o);if(!(l||"string"==typeof n||n instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof n?null===(p=e.ownerDocument)||void 0===p?void 0:p.createElement(n):n;return o&&o.forEach(w=>f.classList.add(w)),d&&Object.assign(f,d),e.appendChild(f),yield new Promise(w=>(0,c.c)(f,w)),f});return function(e,n,o,d,l,p){return s.apply(this,arguments)}}(),i=(s,t)=>{if(t){if(s)return s.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},a=()=>{let s,t;return{attachViewToDom:function(){var o=(0,_.Z)(function*(d,l,p={},f=[]){var w,E;if(s=d,l){const g="string"==typeof l?null===(w=s.ownerDocument)||void 0===w?void 0:w.createElement(l):l;f.forEach(r=>g.classList.add(r)),Object.assign(g,p),s.appendChild(g),yield new Promise(r=>(0,c.c)(g,r))}else if(s.children.length>0){const g=null===(E=s.ownerDocument)||void 0===E?void 0:E.createElement("div");f.forEach(r=>g.classList.add(r)),g.append(...s.children),s.appendChild(g)}const h=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),s.parentNode.insertBefore(t,s),h.appendChild(s),s});return function(l,p){return o.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&t&&(t.parentNode.insertBefore(s,t),t.remove()),Promise.resolve())}}},7683:(M,v,u)=>{u.d(v,{a:()=>m,b:()=>i,c:()=>c,d:()=>s,h:()=>a});const _={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},c=()=>{_.selection()},m=()=>{_.selectionStart()},i=()=>{_.selectionChanged()},a=()=>{_.selectionEnd()},s=t=>{_.impact(t)}},6465:(M,v,u)=>{u.d(v,{I:()=>a,a:()=>o,b:()=>s,c:()=>p,d:()=>w,f:()=>d,g:()=>n,i:()=>e,p:()=>f,r:()=>E,s:()=>l});var _=u(5861),c=u(3756),m=u(7208);const a="ion-content",s=".ion-content-scroll-host",t=`${a}, ${s}`,e=h=>h&&"ION-CONTENT"===h.tagName,n=function(){var h=(0,_.Z)(function*(g){return e(g)?(yield new Promise(r=>(0,c.c)(g,r)),g.getScrollElement()):g});return function(r){return h.apply(this,arguments)}}(),o=h=>h.querySelector(s)||h.querySelector(t),d=h=>h.closest(t),l=(h,g)=>e(h)?h.scrollToTop(g):Promise.resolve(h.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),p=(h,g,r,y)=>e(h)?h.scrollByPoint(g,r,y):Promise.resolve(h.scrollBy({top:r,left:g,behavior:y>0?"smooth":"auto"})),f=h=>(0,m.a)(h,a),w=h=>{if(e(h)){const r=h.scrollY;return h.scrollY=!1,r}return h.style.setProperty("overflow","hidden"),!0},E=(h,g)=>{e(h)?h.scrollY=g:h.style.removeProperty("overflow")}},7208:(M,v,u)=>{u.d(v,{a:()=>m,b:()=>c,p:()=>_});const _=i=>console.warn(`[Ionic Warning]: ${i}`),c=(i,...a)=>console.error(`[Ionic Error]: ${i}`,...a),m=(i,...a)=>console.error(`<${i.tagName.toLowerCase()}> must be used inside ${a.join(" or ")}.`)},3230:(M,v,u)=>{u.d(v,{a:()=>_,b:()=>d,c:()=>s,d:()=>l,e:()=>r,f:()=>m,g:()=>c,h:()=>h,i:()=>t,j:()=>n,k:()=>p,l:()=>e,m:()=>a,n:()=>i,o:()=>o,p:()=>f,q:()=>w,r:()=>E,s:()=>g});const _="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(M,v,u)=>{u.d(v,{s:()=>_});const _=e=>{try{if(e instanceof class t{constructor(n){this.value=n}})return e.value;if(!i()||"string"!=typeof e||""===e)return e;const n=document.createDocumentFragment(),o=document.createElement("div");n.appendChild(o),o.innerHTML=e,s.forEach(f=>{const w=n.querySelectorAll(f);for(let E=w.length-1;E>=0;E--){const h=w[E];h.parentNode?h.parentNode.removeChild(h):n.removeChild(h);const g=m(h);for(let r=0;r<g.length;r++)c(g[r])}});const d=m(n);for(let f=0;f<d.length;f++)c(d[f]);const l=document.createElement("div");l.appendChild(n);const p=l.querySelector("div");return null!==p?p.innerHTML:l.innerHTML}catch(n){return console.error(n),""}},c=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let o=e.attributes.length-1;o>=0;o--){const d=e.attributes.item(o),l=d.name;if(!a.includes(l.toLowerCase())){e.removeAttribute(l);continue}const p=d.value;null!=p&&p.toLowerCase().includes("javascript:")&&e.removeAttribute(l)}const n=m(e);for(let o=0;o<n.length;o++)c(n[o])},m=e=>null!=e.children?e.children:e.childNodes,i=()=>{var e;const o=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},1316:(M,v,u)=>{u.r(v),u.d(v,{KEYBOARD_DID_CLOSE:()=>c,KEYBOARD_DID_OPEN:()=>_,copyVisualViewport:()=>g,keyboardDidClose:()=>f,keyboardDidOpen:()=>l,keyboardDidResize:()=>p,resetKeyboardAssist:()=>t,setKeyboardClose:()=>d,setKeyboardOpen:()=>o,startKeyboardAssist:()=>e,trackViewportChanges:()=>h});const _="ionKeyboardDidShow",c="ionKeyboardDidHide";let i={},a={},s=!1;const t=()=>{i={},a={},s=!1},e=r=>{n(r),r.visualViewport&&(a=g(r.visualViewport),r.visualViewport.onresize=()=>{h(r),l()||p(r)?o(r):f(r)&&d(r)})},n=r=>{r.addEventListener("keyboardDidShow",y=>o(r,y)),r.addEventListener("keyboardDidHide",()=>d(r))},o=(r,y)=>{w(r,y),s=!0},d=r=>{E(r),s=!1},l=()=>!s&&i.width===a.width&&(i.height-a.height)*a.scale>150,p=r=>s&&!f(r),f=r=>s&&a.height===r.innerHeight,w=(r,y)=>{const D=new CustomEvent(_,{detail:{keyboardHeight:y?y.keyboardHeight:r.innerHeight-a.height}});r.dispatchEvent(D)},E=r=>{const y=new CustomEvent(c);r.dispatchEvent(y)},h=r=>{i=Object.assign({},a),a=g(r.visualViewport)},g=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},7741:(M,v,u)=>{u.d(v,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(m,i,a)=>{const s=m*i/a-m+"ms",t=2*Math.PI*i/a;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(m,i,a)=>{const s=i/a,t=m*s-m+"ms",e=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,i,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*i+(i<a/2?180:-180)}deg)`,"animation-delay":m*i/a-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,i,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*i+(i<a/2?180:-180)}deg)`,"animation-delay":m*i/a-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,i,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":m*i/a-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,i,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":m*i/a-m+"ms"}})}}},6546:(M,v,u)=>{u.r(v),u.d(v,{createSwipeBackGesture:()=>a});var _=u(3756),c=u(9523),m=u(3139);u(3509);const a=(s,t,e,n,o)=>{const d=s.ownerDocument.defaultView,l=(0,c.i)(s),f=r=>l?-r.deltaX:r.deltaX;return(0,m.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:C}=r;return l?C>=d.innerWidth-50:C<=50})(r)&&t(),onStart:e,onMove:r=>{const C=f(r)/d.innerWidth;n(C)},onEnd:r=>{const y=f(r),C=d.innerWidth,D=y/C,O=(r=>l?-r.velocityX:r.velocityX)(r),P=O>=0&&(O>.2||y>C/2),x=(P?1-D:D)*C;let T=0;if(x>5){const b=x/Math.abs(O);T=Math.min(b,540)}o(P,D<=0?.01:(0,_.l)(0,D,.9999),T)}})}},2854:(M,v,u)=>{u.d(v,{c:()=>m,g:()=>a,h:()=>c,o:()=>t});var _=u(5861);const c=(e,n)=>null!==n.closest(e),m=(e,n)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},n):n,a=e=>{const n={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o):[])(e).forEach(o=>n[o]=!0),n},s=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,_.Z)(function*(n,o,d,l){if(null!=n&&"#"!==n[0]&&!s.test(n)){const p=document.querySelector("ion-router");if(p)return o?.preventDefault(),p.push(n,d,l)}return!1});return function(o,d,l,p){return e.apply(this,arguments)}}()},5521:(M,v,u)=>{u.d(v,{q:()=>s});var _=u(5861),c=u(5062),m=u(4941),i=u(931),a=u(4719);let s=(()=>{class t{constructor(n,o){this.afAuth=n,this.toastController=o}resetPassword(){var n=this;return(0,_.Z)(function*(){try{yield n.afAuth.sendPasswordResetEmail(n.email),(yield n.toastController.create({message:"Um e-mail com instru\xe7\xf5es para redefinir sua senha foi enviado para "+n.email,duration:5e3})).present(),n.dismiss()}catch(o){(yield n.toastController.create({message:o.message,duration:5e3})).present()}})()}dismiss(){this.modal.dismiss()}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(m.zQ),c.Y36(i.yF))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-resetpassword"]],decls:12,vars:1,consts:[["slot","end"],[3,"click"],["slot","icon-only","name","close"],["name","mail"],["type","text","placeholder","E-mail",3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(n,o){1&n&&(c.TgZ(0,"ion-content")(1,"ion-toolbar")(2,"ion-title"),c._uU(3,"Esqueci minha senha"),c.qZA(),c.TgZ(4,"ion-buttons",0)(5,"ion-button",1),c.NdJ("click",function(){return o.dismiss()}),c._UZ(6,"ion-icon",2),c.qZA()()(),c.TgZ(7,"ion-item"),c._UZ(8,"ion-icon",3),c.TgZ(9,"ion-input",4),c.NdJ("ngModelChange",function(l){return o.email=l}),c.qZA()(),c.TgZ(10,"ion-button",5),c.NdJ("click",function(){return o.resetPassword()}),c._uU(11,"Redefinir senha"),c.qZA()()),2&n&&(c.xp6(9),c.Q6J("ngModel",o.email))},dependencies:[a.JJ,a.On,i.YG,i.Sm,i.W2,i.gu,i.pK,i.Ie,i.sr,i.wd,i.j9],styles:["ion-content[_ngcontent-%COMP%]{--background:#d1d0d8;border:2px solid #858585}ion-content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{background-color:#d1d0d8;font-size:14px;border-radius:20px 20px 0 0}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border:2px solid #858585;--background: #efefef;--highlight-background: #7972e6;--padding-start: 10px;--highlight-height: 0;--padding-top: 0;--min-height: 50px;margin-bottom:12px;border-radius:5px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;color:#858585}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{margin-left:10px;font-size:14px}"]}),t})()}}]);