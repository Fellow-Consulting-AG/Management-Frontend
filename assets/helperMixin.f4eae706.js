import{X as me,r as L,o as re,w as W,c as H,G as K,Y as R,L as le,Z as ae,g as U,K as N,$ as pe,a0 as C,k as ge,a as he,I as we,h as z,a1 as ye,a2 as ve,a3 as be,a4 as _e,a5 as G,O as f,a6 as p,J as Ee,a7 as Te,a8 as Se,a9 as S,aa as Pe,ab as qe}from"./index.b6ff9535.js";let A,$=0;const a=new Array(256);for(let e=0;e<256;e++)a[e]=(e+256).toString(16).substring(1);const Le=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),J=4096;function O(){(A===void 0||$+16>J)&&($=0,A=Le(J));const e=Array.prototype.slice.call(A,$,$+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,a[e[0]]+a[e[1]]+a[e[2]]+a[e[3]]+"-"+a[e[4]]+a[e[5]]+"-"+a[e[6]]+a[e[7]]+"-"+a[e[8]]+a[e[9]]+"-"+a[e[10]]+a[e[11]]+a[e[12]]+a[e[13]]+a[e[14]]+a[e[15]]}function Ie(e){return e==null?null:e}function Z(e,t){return e==null?t===!0?`f_${O()}`:null:e}function Re({getValue:e,required:t=!0}={}){if(me.value===!0){const o=e!==void 0?L(Ie(e())):L(null);return t===!0&&o.value===null&&re(()=>{o.value=`f_${O()}`}),e!==void 0&&W(e,n=>{o.value=Z(n,t)}),o}return e!==void 0?H(()=>Z(e(),t)):L(`f_${O()}`)}const ze={dark:{type:Boolean,default:null}};function Ge(e,t){return H(()=>e.dark===null?t.dark.isActive:e.dark)}let h=[],I=[];function ue(e){I=I.filter(t=>t!==e)}function $e(e){ue(e),I.push(e)}function ee(e){ue(e),I.length===0&&h.length!==0&&(h[h.length-1](),h=[])}function Je(e){I.length===0?e():h.push(e)}function Ze(e){h=h.filter(t=>t!==e)}function et(e,t,o){let n;function s(){n!==void 0&&(R.remove(n),n=void 0)}return K(()=>{e.value===!0&&s()}),{removeFromHistory:s,addToHistory(){n={condition:()=>o.value===!0,handler:t},R.add(n)}}}function tt(){let e=null;const t=U();function o(){e!==null&&(clearTimeout(e),e=null)}return le(o),K(o),{removeTimeout:o,registerTimeout(n,s){o(),ae(t)===!1&&(e=setTimeout(()=>{e=null,n()},s))}}}function ot(){let e;const t=U();function o(){e=void 0}return le(o),K(o),{removeTick:o,registerTick(n){e=n,N(()=>{e===n&&(ae(t)===!1&&e(),e=void 0)})}}}const nt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},it=["beforeShow","show","beforeHide","hide"];function st({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:s,processOnMount:c}){const i=U(),{props:l,emit:u,proxy:m}=i;let d;function E(r){e.value===!0?x(r):T(r)}function T(r){if(l.disable===!0||r!==void 0&&r.qAnchorHandled===!0||t!==void 0&&t(r)!==!0)return;const v=l["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!0),d=r,N(()=>{d===r&&(d=void 0)})),(l.modelValue===null||v===!1)&&X(r)}function X(r){e.value!==!0&&(e.value=!0,u("beforeShow",r),n!==void 0?n(r):u("show",r))}function x(r){if(l.disable===!0)return;const v=l["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!1),d=r,N(()=>{d===r&&(d=void 0)})),(l.modelValue===null||v===!1)&&j(r)}function j(r){e.value!==!1&&(e.value=!1,u("beforeHide",r),s!==void 0?s(r):u("hide",r))}function Q(r){l.disable===!0&&r===!0?l["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):r===!0!==e.value&&(r===!0?X:j)(d)}W(()=>l.modelValue,Q),o!==void 0&&pe(i)===!0&&W(()=>m.$route.fullPath,()=>{o.value===!0&&e.value===!0&&x()}),c===!0&&re(()=>{Q(l.modelValue)});const Y={show:T,hide:x,toggle:E};return Object.assign(m,Y),Y}const rt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function lt(e,t=()=>{},o=()=>{}){return{transitionProps:H(()=>{const n=`q-transition--${e.transitionShow||t()}`,s=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:H(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const F=[];function at(e){return F.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ke(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return C(e)}else if(e.__qPortal===!0){const o=C(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=C(e)}while(e!=null)}function ut(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=ke(e,t);continue}e.hide(t)}e=C(e)}}const Me=ge({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Ce(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ct(e,t,o,n){const s=L(!1),c=L(!1);let i=null;const l={},u=n==="dialog"&&Ce(e);function m(E){if(E===!0){ee(l),c.value=!0;return}c.value=!1,s.value===!1&&(u===!1&&i===null&&(i=ve(!1,n)),s.value=!0,F.push(e.proxy),$e(l))}function d(E){if(c.value=!1,E!==!0)return;ee(l),s.value=!1;const T=F.indexOf(e.proxy);T!==-1&&F.splice(T,1),i!==null&&(be(i),i=null)}return he(()=>{d(!0)}),e.proxy.__qPortal=!0,we(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:d,portalIsActive:s,portalIsAccessible:c,renderPortal:()=>u===!0?o():s.value===!0?[z(ye,{to:i},z(Me,o))]:void 0}}const dt=[Element,String],Fe=[null,document,document.body,document.scrollingElement,document.documentElement];function ft(e,t){let o=_e(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Fe.includes(o)?window:o}function He(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function xe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let k;function mt(){if(k!==void 0)return k;const e=document.createElement("p"),t=document.createElement("div");G(e,{width:"100%",height:"200px"}),G(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),k=o-n,k}function Ae(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let P=0,V,B,q,D=!1,te,oe,ne,g=null;function Ve(e){Be(e)&&Ee(e)}function Be(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Te(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),s=o||n?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const i=t[c];if(Ae(i,n))return n?s<0&&i.scrollTop===0?!0:s>0&&i.scrollTop+i.clientHeight===i.scrollHeight:s<0&&i.scrollLeft===0?!0:s>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function ie(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function M(e){D!==!0&&(D=!0,requestAnimationFrame(()=>{D=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=n),n>q&&(document.scrollingElement.scrollTop-=Math.ceil((n-q)/8))}))}function se(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:s}=window.getComputedStyle(t);V=xe(window),B=He(window),te=t.style.left,oe=t.style.top,ne=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${B}px`,s!=="hidden"&&(s==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,f.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",M,p.passiveCapture),window.visualViewport.addEventListener("scroll",M,p.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ie,p.passiveCapture))}f.is.desktop===!0&&f.is.mac===!0&&window[`${e}EventListener`]("wheel",Ve,p.notPassive),e==="remove"&&(f.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",M,p.passiveCapture),window.visualViewport.removeEventListener("scroll",M,p.passiveCapture)):window.removeEventListener("scroll",ie,p.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=te,t.style.top=oe,window.location.href===ne&&window.scrollTo(V,B),q=void 0)}function De(e){let t="add";if(e===!0){if(P++,g!==null){clearTimeout(g),g=null;return}if(P>1)return}else{if(P===0||(P--,P>0))return;if(t="remove",f.is.ios===!0&&f.is.nativeMobile===!0){g!==null&&clearTimeout(g),g=setTimeout(()=>{se(t),g=null},100);return}}se(t)}function pt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,De(t))}}}const w=[];let _;function We(e){_=e.keyCode===27}function Ne(){_===!0&&(_=!1)}function Oe(e){_===!0&&(_=!1,Se(e,27)===!0&&w[w.length-1](e))}function ce(e){window[e]("keydown",We),window[e]("blur",Ne),window[e]("keyup",Oe),_=!1}function gt(e){f.is.desktop===!0&&(w.push(e),w.length===1&&ce("addEventListener"))}function ht(e){const t=w.indexOf(e);t!==-1&&(w.splice(t,1),w.length===0&&ce("removeEventListener"))}const y=[];function de(e){y[y.length-1](e)}function wt(e){f.is.desktop===!0&&(y.push(e),y.length===1&&document.body.addEventListener("focusin",de))}function yt(e){const t=y.indexOf(e);t!==-1&&(y.splice(t,1),y.length===0&&document.body.removeEventListener("focusin",de))}function Ke(e){return Pe(e)===!0?"__q_date|"+e.getTime():qe(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function Ue(e){if(e.length<9)return e;const o=e.substring(0,8),n=e.substring(9);switch(o){case"__q_date":const s=Number(n);return new Date(Number.isNaN(s)===!0?n:s);case"__q_expr":return new RegExp(n);case"__q_numb":return Number(n);case"__q_bool":return Boolean(n==="1");case"__q_strn":return""+n;case"__q_objt":return JSON.parse(n);default:return e}}function Xe(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:S,setItem:S,remove:S,removeItem:S,clear:S,isEmpty:()=>!0}}function je(e){const t=window[e+"Storage"],o=i=>{const l=t.getItem(i);return l?Ue(l):null},n=i=>t.getItem(i)!==null,s=(i,l)=>{t.setItem(i,Ke(l))},c=i=>{t.removeItem(i)};return{has:n,hasItem:n,getLength:()=>t.length,getItem:o,getIndex:i=>i<t.length?o(t.key(i)):null,getKey:i=>i<t.length?t.key(i):null,getAll:()=>{let i;const l={},u=t.length;for(let m=0;m<u;m++)i=t.key(m),l[i]=o(i);return l},getAllKeys:()=>{const i=[],l=t.length;for(let u=0;u<l;u++)i.push(t.key(u));return i},set:s,setItem:s,remove:c,removeItem:c,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const fe=f.has.webStorage===!1?Xe():je("local"),Qe={install({$q:e}){e.localStorage=fe}};Object.assign(Qe,fe);var vt={methods:{showErrorToast(e,t=!1){let o={type:"negative",message:e};t===!0&&(o.actions=[{label:"Dismiss",color:"white",handler:()=>{}}],o.timeout=0);const n=this.$q.notify(o);this.notifications===null||this.notifications===void 0||this.notifications.push(n)},showSuccessToast(e){this.$q.notify({color:"primary",message:e})},showWarningAlert(e){return this.$q.notify({classes:"warning_toast",type:"warning",color:"warning",position:"bottom",message:e,timeout:0,actions:[{label:"Dismiss",color:"white",handler:()=>{}}]})},showProcessMessage(e){return this.$q.notify({color:"info",position:"bottom",type:"info",message:e,timeout:0})},removeAllNotifications(){this.notifications.forEach(e=>{e()})},showFullWidthToast(e,t="negative",o=!1){let n={type:t,classes:"q-notification-full-width full-width",position:"top",message:e};o===!0&&(n.actions=[{label:"X",color:"white",handler:()=>{}}],n.timeout=0);const s=this.$q.notify(n);this.notifications===null||this.notifications===void 0||this.notifications.push(s)}}};const b=document.querySelector.bind(document);var bt={methods:{toggleMenu(){let e=document.getElementById("menu_btn");e&&(e.querySelector("i").innerHTML==="chevron_left"?e.querySelector("i").innerHTML="chevron_right":e.querySelector("i").innerHTML="chevron_left"),document.getElementById("left_section").classList.toggle("hidden"),document.getElementById("right_section").classList.toggle("right_section"),document.getElementById("right_section").classList.toggle("full-width")},showLoading(){!b||!b(".loading-component")||(b(".loading-component").style.display="block")},hideLoading(){!b||!b(".loading-component")||(b(".loading-component").style.display="none")},goFormular(){window.open("https://cloudintegration.eu/formular")}}};export{xe as A,mt as B,F as C,ke as D,at as E,ut as F,Qe as P,rt as a,Ge as b,lt as c,Je as d,Re as e,nt as f,it as g,bt as h,tt as i,ot as j,ct as k,st as l,et as m,yt as n,ht as o,pt as p,wt as q,Ze as r,gt as s,vt as t,ze as u,Xe as v,je as w,dt as x,ft as y,He as z};
