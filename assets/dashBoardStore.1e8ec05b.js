var Le=Object.defineProperty;var Ve=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var S=(t,e,s)=>(Ve(t,typeof e!="symbol"?e+"":e,s),s);import{k as ne,c as f,h as d,C as V,r as O,D as $e,g as z,i as ze,E as Ue,w as L,o as Ce,G as re,H as Ie,I as Me,J as He,K as Ke,L as Qe,M as Ne,N as Z,v as _e,Q as We,l as me,O as qe,P as Je,R as Ze,S as Ge,U}from"./index.a3023078.js";import{d as De,b as Fe,e as Xe,r as Ye,u as Ae,f as et,a as tt,g as st,i as at,j as ot,c as nt,k as rt,l as it,m as lt,n as be,o as ye,p as ut,q as ct,s as dt,v as ft,w as pt,P as y}from"./helperMixin.292ad739.js";import{a as Ee}from"./axios.ab682c6b.js";var Nt=ne({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const s=f(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>d(t.tag,{class:s.value},V(e.default))}});const we=/^on[A-Z]/;function gt(){const{attrs:t,vnode:e}=z(),s={listeners:O({}),attributes:O({})};function a(){const o={},n={};for(const i in t)i!=="class"&&i!=="style"&&we.test(i)===!1&&(o[i]=t[i]);for(const i in e.props)we.test(i)===!0&&(n[i]=e.props[i]);s.attributes.value=o,s.listeners.value=n}return $e(a),a(),s}function mt({validate:t,resetValidation:e,requiresQForm:s}){const a=ze(Ue,!1);if(a!==!1){const{props:o,proxy:n}=z();Object.assign(n,{validate:t,resetValidation:e}),L(()=>o.disable,i=>{i===!0?(typeof e=="function"&&e(),a.unbindComponent(n)):a.bindComponent(n)}),Ce(()=>{o.disable!==!0&&a.bindComponent(n)}),re(()=>{o.disable!==!0&&a.unbindComponent(n)})}else s===!0&&console.error("Parent QForm not found on useFormChild()!")}const ke=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Oe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Se=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,se=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,fe={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>ke.test(t),hexaColor:t=>Oe.test(t),hexOrHexaColor:t=>Se.test(t),rgbColor:t=>te.test(t),rgbaColor:t=>se.test(t),rgbOrRgbaColor:t=>te.test(t)||se.test(t),hexOrRgbColor:t=>ke.test(t)||te.test(t),hexaOrRgbaColor:t=>Oe.test(t)||se.test(t),anyColor:t=>Se.test(t)||te.test(t)||se.test(t)},ht=[!0,!1,"ondemand"],vt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:t=>ht.includes(t)}};function _t(t,e){const{props:s,proxy:a}=z(),o=O(!1),n=O(null),i=O(!1);mt({validate:R,resetValidation:F});let p=0,m;const k=f(()=>s.rules!==void 0&&s.rules!==null&&s.rules.length!==0),w=f(()=>s.disable!==!0&&k.value===!0&&e.value===!1),x=f(()=>s.error===!0||o.value===!0),I=f(()=>typeof s.errorMessage=="string"&&s.errorMessage.length!==0?s.errorMessage:n.value);L(()=>s.modelValue,()=>{i.value=!0,w.value===!0&&s.lazyRules===!1&&C()});function P(){s.lazyRules!=="ondemand"&&w.value===!0&&i.value===!0&&C()}L(()=>s.reactiveRules,q=>{q===!0?m===void 0&&(m=L(()=>s.rules,P,{immediate:!0,deep:!0})):m!==void 0&&(m(),m=void 0)},{immediate:!0}),L(()=>s.lazyRules,P),L(t,q=>{q===!0?i.value=!0:w.value===!0&&s.lazyRules!=="ondemand"&&C()});function F(){p++,e.value=!1,i.value=!1,o.value=!1,n.value=null,C.cancel()}function R(q=s.modelValue){if(s.disable===!0||k.value===!1)return!0;const A=++p,N=e.value!==!0?()=>{i.value=!0}:()=>{},D=(h,_)=>{h===!0&&N(),o.value=h,n.value=_||null,e.value=!1},E=[];for(let h=0;h<s.rules.length;h++){const _=s.rules[h];let v;if(typeof _=="function"?v=_(q,fe):typeof _=="string"&&fe[_]!==void 0&&(v=fe[_](q)),v===!1||typeof v=="string")return D(!0,v),!1;v!==!0&&v!==void 0&&E.push(v)}return E.length===0?(D(!1),!0):(e.value=!0,Promise.all(E).then(h=>{if(h===void 0||Array.isArray(h)===!1||h.length===0)return A===p&&D(!1),!0;const _=h.find(v=>v===!1||typeof v=="string");return A===p&&D(_!==void 0,_),_===void 0},h=>(A===p&&(console.error(h),D(!0)),!1)))}const C=Ie(R,0);return re(()=>{m!==void 0&&m(),C.cancel()}),Object.assign(a,{resetValidation:F,validate:R}),Me(a,"hasError",()=>x.value),{isDirtyModel:i,hasRules:k,hasError:x,errorMessage:I,validate:R,resetValidation:F}}function bt(t){return t!=null&&(""+t).length!==0}const yt={...Ae,...vt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Wt={...yt,maxlength:[Number,String]},Jt=["update:modelValue","clear","focus","blur"];function Zt({requiredForAttr:t=!0,tagProp:e,changeEvent:s=!1}={}){const{props:a,proxy:o}=z(),n=Fe(a,o.$q),i=Xe({required:t,getValue:()=>a.for});return{requiredForAttr:t,changeEvent:s,tag:e===!0?f(()=>a.tag):{value:"label"},isDark:n,editable:f(()=>a.disable!==!0&&a.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:gt(),targetUid:i,rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function Gt(t){const{props:e,emit:s,slots:a,attrs:o,proxy:n}=z(),{$q:i}=n;let p=null;t.hasValue===void 0&&(t.hasValue=f(()=>bt(e.modelValue))),t.emitValue===void 0&&(t.emitValue=r=>{s("update:modelValue",r)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:Y,onFocusout:ee}),Object.assign(t,{clearValue:W,onControlFocusin:Y,onControlFocusout:ee,focus:_}),t.computedCounter===void 0&&(t.computedCounter=f(()=>{if(e.counter!==!1){const r=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,u=e.maxlength!==void 0?e.maxlength:e.maxValues;return r+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:m,hasRules:k,hasError:w,errorMessage:x,resetValidation:I}=_t(t.focused,t.innerLoading),P=t.floatingLabel!==void 0?f(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):f(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),F=f(()=>e.bottomSlots===!0||e.hint!==void 0||k.value===!0||e.counter===!0||e.error!==null),R=f(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),C=f(()=>`q-field row no-wrap items-start q-field--${R.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(P.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&F.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),q=f(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(w.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length!==0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),A=f(()=>e.labelSlot===!0||e.label!==void 0),N=f(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&w.value!==!0?` text-${e.labelColor}`:"")),D=f(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:P.value,modelValue:e.modelValue,emitValue:t.emitValue})),E=f(()=>{const r={};return t.targetUid.value&&(r.for=t.targetUid.value),e.disable===!0&&(r["aria-disabled"]="true"),r});function h(){const r=document.activeElement;let u=t.targetRef!==void 0&&t.targetRef.value;u&&(r===null||r.id!==t.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==r&&u.focus({preventScroll:!0}))}function _(){De(h)}function v(){Ye(h);const r=document.activeElement;r!==null&&t.rootRef.value.contains(r)&&r.blur()}function Y(r){p!==null&&(clearTimeout(p),p=null),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,s("focus",r))}function ee(r,u){p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,!(document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1))&&(t.focused.value===!0&&(t.focused.value=!1,s("blur",r)),u!==void 0&&u())})}function W(r){He(r),i.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),s("update:modelValue",null),t.changeEvent===!0&&s("change",null),s("clear",e.modelValue),Ke(()=>{const u=m.value;I(),m.value=u})}function M(r){[13,32].includes(r.keyCode)&&W(r)}function ie(){const r=[];return a.prepend!==void 0&&r.push(d("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Z},a.prepend())),r.push(d("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},le())),w.value===!0&&e.noErrorIcon===!1&&r.push(H("error",[d(_e,{name:i.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?r.push(H("inner-loading-append",a.loading!==void 0?a.loading():[d(We,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&r.push(H("inner-clearable-append",[d(_e,{class:"q-field__focusable-action",name:e.clearIcon||i.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":i.lang.label.clear,onKeyup:M,onClick:W})])),a.append!==void 0&&r.push(d("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Z},a.append())),t.getInnerAppend!==void 0&&r.push(H("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&r.push(t.getControlChild()),r}function le(){const r=[];return e.prefix!==void 0&&e.prefix!==null&&r.push(d("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&r.push(t.getShadowControl()),t.getControl!==void 0?r.push(t.getControl()):a.rawControl!==void 0?r.push(a.rawControl()):a.control!==void 0&&r.push(d("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},a.control(D.value))),A.value===!0&&r.push(d("div",{class:N.value},V(a.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&r.push(d("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),r.concat(V(a.default))}function ue(){let r,u;w.value===!0?x.value!==null?(r=[d("div",{role:"alert"},x.value)],u=`q--slot-error-${x.value}`):(r=V(a.error),u="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(r=[d("div",e.hint)],u=`q--slot-hint-${e.hint}`):(r=V(a.hint),u="q--slot-hint"));const J=e.counter===!0||a.counter!==void 0;if(e.hideBottomSpace===!0&&J===!1&&r===void 0)return;const K=d("div",{key:u,class:"q-field__messages col"},r);return d("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:Z},[e.hideBottomSpace===!0?K:d(me,{name:"q-transition--field-message"},()=>K),J===!0?d("div",{class:"q-field__counter"},a.counter!==void 0?a.counter():t.computedCounter.value):null])}function H(r,u){return u===null?null:d("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let B=!1;return Qe(()=>{B=!0}),Ne(()=>{B===!0&&e.autofocus===!0&&n.focus()}),e.autofocus===!0&&Ce(()=>{n.focus()}),re(()=>{p!==null&&clearTimeout(p)}),Object.assign(n,{focus:_,blur:v}),function(){const u=t.getControl===void 0&&a.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...E.value}:E.value;return d(t.tag.value,{ref:t.rootRef,class:[C.value,o.class],style:o.style,...u},[a.before!==void 0?d("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Z},a.before()):null,d("div",{class:"q-field__inner relative-position col self-stretch"},[d("div",{ref:t.controlRef,class:q.value,tabindex:-1,...t.controlEvents},ie()),F.value===!0?ue():null]),a.after!==void 0?d("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Z},a.after()):null])}}const Xt={name:String};function Yt(t){return f(()=>({type:"hidden",name:t.name,value:t.modelValue}))}function es(t={}){return(e,s,a)=>{e[s](d("input",{class:"hidden"+(a||""),...t.value}))}}function ts(t){return f(()=>t.name||t.for)}const wt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,kt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ot=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,St=/[a-z0-9_ -]$/i;function ss(t){return function(s){if(s.type==="compositionend"||s.type==="change"){if(s.target.qComposing!==!0)return;s.target.qComposing=!1,t(s)}else s.type==="compositionupdate"&&s.target.qComposing!==!0&&typeof s.data=="string"&&(qe.is.firefox===!0?St.test(s.data)===!1:wt.test(s.data)===!0||kt.test(s.data)===!0||Ot.test(s.data)===!0)===!0&&(s.target.qComposing=!0)}}var as=ne({name:"QCardActions",props:{...Je,vertical:Boolean},setup(t,{slots:e}){const s=Ze(t),a=f(()=>`q-card__actions ${s.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>d("div",{class:a.value},V(e.default))}}),os=ne({name:"QCard",props:{...Ae,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:s}}=z(),a=Fe(t,s),o=f(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>d(t.tag,{class:o.value},V(e.default))}});let ae=0;const xt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},xe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var ns=ne({name:"QDialog",inheritAttrs:!1,props:{...et,...tt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:t=>["standard","top","bottom","left","right"].includes(t)}},emits:[...st,"shake","click","escapeKey"],setup(t,{slots:e,emit:s,attrs:a}){const o=z(),n=O(null),i=O(!1),p=O(!1);let m=null,k=null,w,x;const I=f(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:P}=ut(),{registerTimeout:F}=at(),{registerTick:R,removeTick:C}=ot(),{transitionProps:q,transitionStyle:A}=nt(t,()=>xe[t.position][0],()=>xe[t.position][1]),N=f(()=>A.value+(t.backdropFilter!==void 0?`;backdrop-filter:${t.backdropFilter};-webkit-backdrop-filter:${t.backdropFilter}`:"")),{showPortal:D,hidePortal:E,portalIsAccessible:h,renderPortal:_}=rt(o,n,je,"dialog"),{hide:v}=it({showing:i,hideOnRouteChange:I,handleShow:ue,handleHide:H,processOnMount:!0}),{addToHistory:Y,removeFromHistory:ee}=lt(i,v,I),W=f(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${xt[t.position]}`+(p.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),M=f(()=>i.value===!0&&t.seamless!==!0),ie=f(()=>t.autoClose===!0?{onClick:Re}:{}),le=f(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${M.value===!0?"modal":"seamless"}`,a.class]);L(()=>t.maximized,c=>{i.value===!0&&K(c)}),L(M,c=>{P(c),c===!0?(ct(ce),dt(u)):(be(ce),ye(u))});function ue(c){Y(),k=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,K(t.maximized),D(),p.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),R(B)):C(),F(()=>{if(o.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:b,bottom:Q}=document.activeElement.getBoundingClientRect(),{innerHeight:ve}=window,de=window.visualViewport!==void 0?window.visualViewport.height:ve;b>0&&Q>de/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-de,Q>=ve?1/0:Math.ceil(document.scrollingElement.scrollTop+Q-de/2))),document.activeElement.scrollIntoView()}x=!0,n.value.click(),x=!1}D(!0),p.value=!1,s("show",c)},t.transitionDuration)}function H(c){C(),ee(),J(!0),p.value=!0,E(),k!==null&&(((c&&c.type.indexOf("key")===0?k.closest('[tabindex]:not([tabindex^="-"])'):void 0)||k).focus(),k=null),F(()=>{E(!0),p.value=!1,s("hide",c)},t.transitionDuration)}function B(c){De(()=>{let b=n.value;if(b!==null){if(c!==void 0){const Q=b.querySelector(c);if(Q!==null){Q.focus({preventScroll:!0});return}}b.contains(document.activeElement)!==!0&&(b=b.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||b.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||b.querySelector("[autofocus], [data-autofocus]")||b,b.focus({preventScroll:!0}))}})}function r(c){c&&typeof c.focus=="function"?c.focus({preventScroll:!0}):B(),s("shake");const b=n.value;b!==null&&(b.classList.remove("q-animate--scale"),b.classList.add("q-animate--scale"),m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,n.value!==null&&(b.classList.remove("q-animate--scale"),B())},170))}function u(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&r():(s("escapeKey"),v()))}function J(c){m!==null&&(clearTimeout(m),m=null),(c===!0||i.value===!0)&&(K(!1),t.seamless!==!0&&(P(!1),be(ce),ye(u))),c!==!0&&(k=null)}function K(c){c===!0?w!==!0&&(ae<1&&document.body.classList.add("q-body--dialog"),ae++,w=!0):w===!0&&(ae<2&&document.body.classList.remove("q-body--dialog"),ae--,w=!1)}function Re(c){x!==!0&&(v(c),s("click",c))}function Be(c){t.persistent!==!0&&t.noBackdropDismiss!==!0?v(c):t.noShake!==!0&&r()}function ce(c){t.allowFocusOutside!==!0&&h.value===!0&&Ge(n.value,c.target)!==!0&&B('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:B,shake:r,__updateRefocusTarget(c){k=c||null}}),re(J);function je(){return d("div",{role:"dialog","aria-modal":M.value===!0?"true":"false",...a,class:le.value},[d(me,{name:"q-transition--fade",appear:!0},()=>M.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:N.value,"aria-hidden":"true",tabindex:-1,onClick:Be}):null),d(me,q.value,()=>i.value===!0?d("div",{ref:n,class:W.value,style:A.value,tabindex:-1,...ie.value},V(e.default)):null)])}return _}});const Te=qe.has.webStorage===!1?ft():pt("session"),j={install({$q:t}){t.sessionStorage=Te}};Object.assign(j,Te);var he={methods:{logout(){this.clearStorageForLogout(),window.location.href="/"},clearStorageForLogout(){Pe().$reset(),y.remove("token_deatils"),y.remove("session_id"),y.remove("after_login_route"),y.remove("user_details"),y.remove("user_settings"),y.remove("doc_types"),y.remove("fields_sep_comp"),y.remove("login_source"),y.remove("verify_email"),y.remove("image_field_splitter"),j.clear()},clearStorageForRefresh(){j.remove("sub_org_id"),j.remove("doc_types_sub_types"),j.remove("organizations"),j.remove("acls"),j.remove("sub_app"),j.remove("sub_types")},setDataToLocalStorage(t,e){return y.set(t,e)},getDataByKey(t){return y.getItem(t)}}};class oe extends Error{constructor(s){super();S(this,"metadata");S(this,"success",!1);S(this,"message","");S(this,"status","");this.metadata=s,this.convertError(),this.handleApiKeyError()}convertError(){this.status="",this.success=!1,this.message="",!(!this.metadata.hasOwnProperty("response")||!this.metadata.response)&&(this.metadata.response.hasOwnProperty("status")&&(this.status=this.metadata.response.status),this.metadata.response.hasOwnProperty("data")&&(this.metadata.response.data.hasOwnProperty("success")&&(this.success=this.metadata.response.data.success),this.metadata.response.data.hasOwnProperty("message")&&(this.message=this.metadata.response.data.message),this.metadata.response.data.hasOwnProperty("error_description")&&(this.message=this.metadata.response.data.error_description)))}handleApiKeyError(){this.message.toLowerCase().includes("invalid key")&&he.methods.logout()}}class Ct extends Error{constructor(s){super();S(this,"metadata");S(this,"success",!1);S(this,"message","");S(this,"status","");this.metadata=s,this.convertError()}convertError(){this.status="cancelled",this.success=!1,this.message="cancelled"}}const qt=Ee.CancelToken;function Dt(t){const e={},s={cancelToken:null};return e[t]={handleRequestCancellation:()=>(s.cancelToken&&s.cancelToken.cancel(t),s.cancelToken=qt.source(),s.cancelToken)},e}const Ft=Dt("doc2app");class At{constructor(e){S(this,"client");this.client=Ee.create({...e}),this.client.defaults.headers.common.Accept="application/json;charset=UTF-8",this.client.defaults.headers.common["Content-Type"]="application/json;charset=UTF-8"}async post(e,s,a){try{const o=a?await this.client.post(e,s,a):await this.client.post(e,s);return this.handleResponse(o)}catch(o){if(a&&a.hasOwnProperty("error")){const n=a.error;return n&&n.call(this,o),{}}this.handleError(o)}return{}}async postWithCancel(e,s,a){try{console.info("postWithCancel",e),a.cancelToken=Ft[e].handleRequestCancellation().token;const o=a?await this.client.post(e,s,a):await this.client.post(e,s);return this.handleResponse(o)}catch(o){if(a&&a.hasOwnProperty("error")){const n=a.error;return n&&n.call(this,o),{}}this.handleError(o)}return{}}async put(e,s,a){try{const o=a?await this.client.put(e,s,a):await this.client.put(e,s);return this.handleResponse(o)}catch(o){if(a&&a.hasOwnProperty("error")){const n=a.error;return n&&n.call(this,o),{}}this.handleError(o)}return{}}async get(e,s){try{const a=await this.client.get(e,s);return this.handleResponse(a)}catch(a){if(s&&s.hasOwnProperty("error")){const o=s.error;return o&&o.call(this,a),{}}this.handleError(a)}return{}}async delete(e,s){try{const a=s?await this.client.delete(e,s):await this.client.delete(e);return this.handleResponse(a)}catch(a){this.handleError(a)}return{}}createParams(e){const s=new URLSearchParams;for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const o=e[a];o!=null?s.append(a,o):console.debug(`Param key '${a}' was null or undefined and will be ignored`)}return s}handleResponse(e){return e.data}isAxiosError(e){return typeof(e==null?void 0:e.response)=="object"}handleError(e){if(e instanceof Error)if(this.isAxiosError(e)){if(e.response)throw e.response.status&&e.response.status===503&&(this.logErrorMessage(e.response),window.location.href="/network_error"),e.response.status&&e.response.status===401&&he.methods.logout(),new oe(e);if(e.request)throw new oe(e)}else throw e.message=="Network Error"&&(this.logErrorMessage(e),window.location.href="/network_error"),this.isAxiosCancel(e)?new Ct(e):new oe(e);throw new oe(e)}isAxiosCancel(e){return e.hasOwnProperty("message")&&e.message.toLowerCase().includes("handlerequestcancellation")?(console.info("lets handle cancel event"),!0):!1}logErrorMessage(e){const s=JSON.stringify(e);y.set("network_error_log",s)}}class T extends At{constructor(s){super(s);S(this,"token","")}encodeQueryData(s){const a=[];for(const o in s)a.push(encodeURIComponent(o)+"="+encodeURIComponent(s[o]));return a.join("&")}async postWithCancel(s,a,o){const n={};o||(o={}),await this.addTokenToOptions(n,o);const i={...n,...o};return super.postWithCancel(s,a,i)}async post(s,a,o){const n={};o||(o={}),await this.addTokenToOptions(n,o);const i={...n,...o};return super.post(s,a,i)}async put(s,a,o){const n={};o||(o={}),await this.addTokenToOptions(n,o);const i={...n,...o};return super.put(s,a,i)}async get(s,a){const o={};a||(a={}),await this.addTokenToOptions(o,a);const n={...o,...a};return super.get(s,n)}getDefaultOptions(){return{timeout:3e4,timeoutErrorMessage:"Request timed out"}}async delete(s,a,o){const n={};a&&(n.data=a),o||(o={}),await this.addTokenToOptions(n,o);const i={...n,...o};return super.delete(s,i)}async addTokenToOptions(s,a){if(a&&a.headers&&a.headers.Authorization)return;const o=await this.getToken();if(s.hasOwnProperty("headers")||(s.headers={}),a&&a.headers){a.headers.Authorization=o;return}s.headers.Authorization=o}async getToken(){const s=Pe();let a=s.current_token;return a||(s.setAuthToken(),a=s.current_token),a}}const g="https://demo.auth.docbits.com",l={get_token:g+"/management/auth/get_token",dashboard:g+"/management/dashboard/",create_user:g+"/management/user/create",get_edit_delete_user:g+"/management/user/",add_to_org:g+"/management/user/add_to_org",edit_on_org:g+"/management/user/edit_on_org",remove_from_org:g+"/management/user/remove_from_org",get_delete_org:g+"/management/org/",create_org:g+"/management/org/create",create_lead:g+"/management/leads/create",get_put_delete_lead:g+"/management/leads/",convert_to_org:g+"/management/leads/customer/",edit_docbit_org:g+"/management/docbit_orgs/edit/",get_delete_docbit_org:g+"/management/docbit_orgs/",create_docbits_org:g+"/management/docbit_orgs/create",get_delete_app:g+"/management/docbit_apps/",create_app:g+"/management/docbit_apps/create",create_sub:g+"/management/docbit_subs/create",get_put_delete_sub:g+"/management/docbit_subs/",get_delete_plan:g+"/management/docbit_plans/",create_plan:g+"/management/docbit_plans/create",edit_plan:g+"/management/docbit_plans/edit_plan",add_remove_plan_app:g+"/management/docbit_plans/add_remove_plan_app"};function Et(t,e){return"Basic "+btoa(t+":"+e)}class Tt extends T{constructor(){super({})}async getUsers(e){const s=new FormData;return s.append("id",e),super.get(l.get_edit_delete_user+e,s)}async createUser(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_user,s)}async deleteUser(e){const s=new FormData;return s.append("id",e),super.delete(l.get_edit_delete_user+e,s)}async addToOrg(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.add_to_org,s)}async editOnOrg(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.edit_on_org,s)}async removeFromOrg(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.remove_from_org,s)}}class Pt extends T{constructor(){super({})}handleSubscriptionError(e){throw e instanceof Error&&e.message.includes("timeout")?{message:"timeout"}:e instanceof Error&&e.message=="Network Error"?{message:"network_error"}:this.isAxiosError(e)&&e.response&&e.response.status&&e.response.status===500?{message:"network_error"}:e}async createUser(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_user,s)}async login(e,s){const a=new FormData;a.append("grant_type","password"),a.append("scope","profile");const o={headers:{Authorization:Et(e,s)},timeout:1e4,error:this.handleAPILoginError.bind(this)};return super.post(l.get_token,a,o)}handleAPILoginError(e){throw e instanceof Error&&e.message.includes("timeout")?{message:"Request is taking time, Please try again after few seconds"}:e instanceof Error&&e.message=="Network Error"?{message:"network_error"}:e}}class Rt extends T{constructor(){super({})}async createLead(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_lead,s)}async editLead(e,s){const a=new FormData;for(const[o,n]of Object.entries(s))a.append(o,n);return super.put(l.get_put_delete_lead+e,a)}async convertToOrg(e,s){const a=new FormData;return a.append("type",s),super.post(l.convert_to_org+e,a)}async getLead(e,s=null){let a="";return s!=null&&(a="?partner_id="+s),super.get(l.get_put_delete_lead+e+a)}async deleteLead(e,s=null){const a=new FormData;a.append("id",e);let o="";return s!=null&&(o="?partner_id="+s),super.delete(l.get_put_delete_lead+e+o,a)}}class Bt extends T{constructor(){super({})}async createOrg(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_org,s)}async getOrg(e){return super.get(l.get_delete_org+e)}async deleteOrg(e){const s=new FormData;return s.append("id",e),super.delete(l.get_delete_org+e,s)}}class jt extends T{constructor(){super({})}async getDashboardData(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.dashboard,s)}}class Lt extends T{constructor(){super({})}async getApps(e){return super.get(l.get_delete_app+e)}async createApp(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_app,s)}async deleteApp(e){const s=new FormData;return s.append("id",e),super.delete(l.get_delete_app+e,s)}}class Vt extends T{constructor(){super({})}async getOrgs(e,s=null){let a="";return s!=null&&(a="?partner_id="+s),super.get(l.get_delete_docbit_org+e+a)}async createOrg(e,s){const a=new FormData;for(const[o,n]of Object.entries(e))a.append(o,n);if(s.hasOwnProperty("plan_id"))for(const[o,n]of Object.entries(s))a.append(o,n);return super.post(l.create_docbits_org,a)}async editOrg(e,s){const a=new FormData;return a.append("name",s.name),a.append("partner_id",s.partner_id),a.append("street",s.street),a.append("plz",s.plz),a.append("city",s.city),a.append("country",s.country),a.append("org_type",s.org_type),a.append("email",s.email),a.append("phone",s.phone),super.post(l.edit_docbit_org+e,a)}async deleteOrg(e){const s=new FormData;return s.append("id",e),super.delete(l.get_delete_docbit_org+e,s)}}class $t extends T{constructor(){super({})}async getPlans(e){return super.get(l.get_delete_plan+e)}async createPlan(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_plan,s)}async deletePlan(e){const s=new FormData;return s.append("id",e),super.delete(l.get_delete_plan+e,s)}async editPlan(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.edit_plan,s)}async addAppToPlan(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.add_remove_plan_app,s)}async removeAppFromPlan(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.delete(l.add_remove_plan_app,s)}}class zt extends T{constructor(){super({})}async getSubscriptions(e){return super.get(l.get_put_delete_sub+e)}async createSubscriptions(e){const s=new FormData;for(const[a,o]of Object.entries(e))s.append(a,o);return super.post(l.create_sub,s)}async extendSub(e,s){const a=new FormData;return a.append("id",e),a.append("end",s.toUTCString()),super.put(l.get_put_delete_sub+e,a)}async deleteSub(e){const s=new FormData;return s.append("id",e),super.delete(l.get_put_delete_sub+e,s)}}const $=new Tt,rs=new Pt,pe=new Bt,Ut=new jt,G=new Rt,is=new Lt,X=new Vt,It=new zt,ge=new $t,ls=U("user-store",{state:()=>({user_list:[],selected_user:{}}),getters:{getUser:t=>t.user_list},actions:{async getUsersFromServer(t){this.user_list=[];const e=await $.getUsers(t);e&&Object.keys(e).forEach(s=>{this.user_list.push(e[s])})},async getUsers(t){return await $.getUsers(t)},async deleteUser(t){if((await $.deleteUser(t.id)).success==!0){const s=this.user_list.indexOf(t);this.user_list.splice(s,1)}},async createUser(t){const e=await $.createUser(t);e.success&&this.user_list.join(e.data)},async addToOrg(t){const e=await $.addToOrg(t);e.success&&this.selected_user.orgs.join(e.data)},async editOnOrg(t){const e=await $.editOnOrg(t);e.success&&this.selected_user.orgs.join(e.data)},async removeFromOrg(t){const e=await $.removeFromOrg(t);e.success&&this.selected_user.orgs.indexOf(e.data)}}}),Pe=U("auth",{state:()=>({token:""}),getters:{getData(t){return t},current_token(t){return t.token}},actions:{setAuthToken(t){try{if(t!=null)this.token=t;else{const e=this.getTokenDetails();this.token="Bearer "+e.toString()}}catch(e){throw e}},redirectToLogin(){he.methods.logout()},setTokenInLocalStorage(t){const e=new Date,s=+t.expires_in;e.setSeconds(e.getSeconds()+s-600),t.expire_time=e,y.set("management_token",t.token),y.remove("login_attempts")},getTokenDetails(){return y.getItem("management_token")}}}),us=U("leads",{state:()=>({leads:[]}),getters:{getLeads:t=>t.leads},actions:{async getLeadsFromServer(t,e=null){this.leads=[];const s=await G.getLead(t,e);s&&Object.keys(s).forEach(a=>{this.leads.push(s[a])})},async deleteLead(t,e=null){if((await G.deleteLead(t.id,e)).success==!0){const a=this.leads.indexOf(t);this.leads.splice(a,1)}},async createLead(t){const e=await G.createLead(t);e.success&&this.leads.push(e.data)},async editLead(t,e,s){const a=await G.editLead(t,s);a&&(this.leads[this.leads.indexOf(e)]=a,console.log(this.leads))},async convertToOrg(t,e){const s=await G.convertToOrg(t.id,e),a=this.leads.indexOf(t);this.leads[a]=s}}}),cs=U("plans",{state:()=>({plans:[]}),getters:{getPlans:t=>t.plans},actions:{async getPlansFromServer(t){this.plans=[];const e=await ge.getPlans(t);e&&Object.keys(e).forEach(s=>{this.plans.push(e[s])})},async deletePlan(t){if((await ge.deletePlan(t.id)).success==!0){const s=this.plans.indexOf(t);this.plans.splice(s,1)}},async createPlan(t){const e=await ge.createPlan(t);e.success&&this.plans.join(e.data)}}}),ds=U("mngm-org",{state:()=>({organisations:[]}),getters:{getOrgs:t=>t.organisations},actions:{async getOrgsFromServer(t){this.organisations=[];const e=await pe.getOrg(t);e&&Object.keys(e).forEach(s=>{this.organisations.push(e[s])})},async deleteOrg(t){if((await pe.deleteOrg(t.id)).success==!0){const s=this.organisations.indexOf(t);this.organisations.splice(s,1)}},async createOrg(t){const e=await pe.createOrg(t);e.success&&this.organisations.join(e.data)}}}),fs=U("org",{state:()=>({organisations:[],selected_org:{},selected_org_subs:{}}),getters:{getOrgs:t=>t.organisations},actions:{async getOrgsFromServer(t,e=null){this.organisations=[];const s=await X.getOrgs(t,e);s&&Object.keys(s).forEach(a=>{let o=new Date;if(Object.keys(s[a].subscriptions).length>>0){let n="expired";Object.keys(s[a].subscriptions).forEach(i=>{const p=new Date(s[a].subscriptions[i].end);p>o&&(o=p,n=p.toLocaleDateString())}),s[a].subscribed=n}else s[a].subscribed="no";this.organisations.push(s[a])})},async getSpecificOrgFromStore(t,e=null){let s=null;return this.organisations.forEach(a=>{a.org_id==t&&(s=a)}),s==null&&(s=await this.getSpecificOrg(t,e)),s},async getSpecificOrg(t,e=null){const s=await X.getOrgs(t,e);s&&(this.selected_org=s[t],this.selected_org_subs=s[t].subscriptions)},async editOrg(t,e){const s=await X.editOrg(t,e);if(s.success){const a=this.organisations.indexOf(e);this.organisations[a]=s.data}},async deleteOrg(t,e){if((await X.deleteOrg(t)).success==!0){const a=this.organisations.indexOf(e);this.organisations.splice(a,1)}},async createOrg(t,e){const s=await X.createOrg(t,e);s.success&&this.organisations.join(s.data)},async createSub(t){const e=await It.createSubscriptions(t);e&&(this.selected_org_subs[e.id]=e)}}}),ps=U("dashboard",{state:()=>({dashboardData:{}}),getters:{getData:t=>t.dashboardData},actions:{async getDashboardData(t){const e=await Ut.getDashboardData(t);e&&(this.dashboardData=e)}}});export{os as Q,Pe as a,ns as b,Nt as c,as as d,Xt as e,Jt as f,ts as g,Zt as h,Gt as i,bt as j,ss as k,rs as l,ps as m,fs as n,Yt as o,es as p,us as q,ge as r,is as s,cs as t,Wt as u,$ as v,It as w,ds as x,ls as y};
