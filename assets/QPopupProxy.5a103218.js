import{k as Ne,r as I,c as D,w as K,G as rt,ao as ot,al as lt,h as g,l as ve,g as ze,C as yt,J as Lt,aJ as Dt,aa as Mt,aK as Rt,aL as Wt,K as ut,x as L,I as Ut}from"./index.cc8a9120.js";import{u as Jt,v as st,e as Xt,f as Kt,g as wt,r as it,s as Gt,c as ct,p as dt,h as ea,i as ta,Q as aa}from"./ClosePopup.77a6b9f5.js";import{f as na,a as Fe,x as ra,g as oa,j as la,i as ua,c as sa,l as ia,k as ca,y as da,u as fa,b as va}from"./helperMixin.d8cb7978.js";import{e as ha,o as ma,p as ga,b as ya}from"./dashBoardStore.0f319a0d.js";import{p as x,c as Da}from"./format.054b8074.js";var tn=Ne({name:"QTooltip",inheritAttrs:!1,props:{...Jt,...na,...Fe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...Fe.transitionShow,default:"jump-down"},transitionHide:{...Fe.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:st},self:{type:String,default:"top middle",validator:st},offset:{type:Array,default:()=>[14,14],validator:Xt},scrollTarget:ra,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...oa],setup(e,{slots:a,emit:l,attrs:r}){let u,s;const m=ze(),{proxy:{$q:i}}=m,f=I(null),Y=I(!1),v=D(()=>dt(e.anchor,i.lang.rtl)),M=D(()=>dt(e.self,i.lang.rtl)),F=D(()=>e.persistent!==!0),{registerTick:p,removeTick:q}=la(),{registerTimeout:S}=ua(),{transitionProps:_,transitionStyle:Ce}=sa(e),{localScrollTarget:De,changeScrollEvent:A,unconfigureScrollTarget:y}=Kt(e,se),{anchorEl:O,canShow:Me,anchorEvents:N}=wt({showing:Y,configureAnchorEl:ue}),{show:he,hide:ee}=ia({showing:Y,canShow:Me,handleShow:Z,handleHide:R,hideOnRouteChange:F,processOnMount:!0});Object.assign(N,{delayShow:E,delayHide:W});const{showPortal:te,hidePortal:T,renderPortal:Oe}=ca(m,f,we,"tooltip");if(i.platform.is.mobile===!0){const k={anchorEl:O,innerRef:f,onClickOutside(z){return ee(z),z.target.classList.contains("q-dialog__backdrop")&&Lt(z),!0}},me=D(()=>e.modelValue===null&&e.persistent!==!0&&Y.value===!0);K(me,z=>{(z===!0?ea:it)(k)}),rt(()=>{it(k)})}function Z(k){te(),p(()=>{s=new MutationObserver(()=>Q()),s.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),Q(),se()}),u===void 0&&(u=K(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,Q)),S(()=>{te(!0),l("show",k)},e.transitionDuration)}function R(k){q(),T(),ae(),S(()=>{T(!0),l("hide",k)},e.transitionDuration)}function ae(){s!==void 0&&(s.disconnect(),s=void 0),u!==void 0&&(u(),u=void 0),y(),ot(N,"tooltipTemp")}function Q(){Gt({targetEl:f.value,offset:e.offset,anchorEl:O.value,anchorOrigin:v.value,selfOrigin:M.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function E(k){if(i.platform.is.mobile===!0){ct(),document.body.classList.add("non-selectable");const me=O.value,z=["touchmove","touchcancel","touchend","click"].map(re=>[me,re,"delayHide","passiveCapture"]);lt(N,"tooltipTemp",z)}S(()=>{he(k)},e.delay)}function W(k){i.platform.is.mobile===!0&&(ot(N,"tooltipTemp"),ct(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),S(()=>{ee(k)},e.hideDelay)}function ue(){if(e.noParentEvent===!0||O.value===null)return;const k=i.platform.is.mobile===!0?[[O.value,"touchstart","delayShow","passive"]]:[[O.value,"mouseenter","delayShow","passive"],[O.value,"mouseleave","delayHide","passive"]];lt(N,"anchor",k)}function se(){if(O.value!==null||e.scrollTarget!==void 0){De.value=da(O.value,e.scrollTarget);const k=e.noParentEvent===!0?Q:ee;A(De.value,k)}}function ne(){return Y.value===!0?g("div",{...r,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",r.class],style:[r.style,Ce.value],role:"tooltip"},yt(a.default)):null}function we(){return g(ve,_.value,ne)}return rt(ae),Object.assign(m.proxy,{updatePosition:Q}),Oe}});function Ma(){let e=Object.create(null);return{getCache:(a,l)=>e[a]===void 0?e[a]=typeof l=="function"?l():l:e[a],setCache(a,l){e[a]=l},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const G=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function wa(e,a,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),a=e.getMonth()+1,e=e.getFullYear()),xa(Be(e,a,l))}function ft(e,a,l){return St(Ya(e,a,l))}function ba(e){return Sa(e)===0}function xe(e,a){return a<=6?31:a<=11||ba(e)?30:29}function Sa(e){const a=G.length;let l=G[0],r,u,s,m,i;if(e<l||e>=G[a-1])throw new Error("Invalid Jalaali year "+e);for(i=1;i<a&&(r=G[i],u=r-l,!(e<r));i+=1)l=r;return m=e-l,u-m<6&&(m=m-u+C(u+4,33)*33),s=P(P(m+1,33)-1,4),s===-1&&(s=4),s}function bt(e,a){const l=G.length,r=e+621;let u=-14,s=G[0],m,i,f,Y,v;if(e<s||e>=G[l-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<l&&(m=G[v],i=m-s,!(e<m));v+=1)u=u+C(i,33)*8+C(P(i,33),4),s=m;Y=e-s,u=u+C(Y,33)*8+C(P(Y,33)+3,4),P(i,33)===4&&i-Y===4&&(u+=1);const M=C(r,4)-C((C(r,100)+1)*3,4)-150,F=20+u-M;return a||(i-Y<6&&(Y=Y-i+C(i+4,33)*33),f=P(P(Y+1,33)-1,4),f===-1&&(f=4)),{leap:f,gy:r,march:F}}function Ya(e,a,l){const r=bt(e,!0);return Be(r.gy,3,r.march)+(a-1)*31-C(a,7)*(a-7)+l-1}function xa(e){const a=St(e).gy;let l=a-621,r,u,s;const m=bt(l,!1),i=Be(a,3,m.march);if(s=e-i,s>=0){if(s<=185)return u=1+C(s,31),r=P(s,31)+1,{jy:l,jm:u,jd:r};s-=186}else l-=1,s+=179,m.leap===1&&(s+=1);return u=7+C(s,30),r=P(s,30)+1,{jy:l,jm:u,jd:r}}function Be(e,a,l){let r=C((e+C(a-8,6)+100100)*1461,4)+C(153*P(a+9,12)+2,5)+l-34840408;return r=r-C(C(e+100100+C(a-8,6),100)*3,4)+752,r}function St(e){let a=4*e+139361631;a=a+C(C(4*e+183187720,146097)*3,4)*4-3908;const l=C(P(a,1461),4)*5+308,r=C(P(l,153),5)+1,u=P(C(l,153),12)+1;return{gy:C(a,1461)-100100+C(8-u,6),gm:u,gd:r}}function C(e,a){return~~(e/a)}function P(e,a){return e-~~(e/a)*a}const _a=["gregorian","persian"],vt={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>_a.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Ha=["update:modelValue"];function J(e){return e.year+"/"+x(e.month)+"/"+x(e.day)}function Ca(e,a){const l=D(()=>e.disable!==!0&&e.readonly!==!0),r=D(()=>l.value===!0?0:-1),u=D(()=>{const i=[];return e.color!==void 0&&i.push(`bg-${e.color}`),e.textColor!==void 0&&i.push(`text-${e.textColor}`),i.join(" ")});function s(){return e.locale!==void 0?{...a.lang.date,...e.locale}:a.lang.date}function m(i){const f=new Date,Y=i===!0?null:0;if(e.calendar==="persian"){const v=wa(f);return{year:v.jy,month:v.jm,day:v.jd}}return{year:f.getFullYear(),month:f.getMonth()+1,day:f.getDate(),hour:Y,minute:Y,second:Y,millisecond:Y}}return{editable:l,tabindex:r,headerClass:u,getLocale:s,getCurrentDate:m}}const Yt=864e5,Oa=36e5,Ae=6e4,xt="YYYY-MM-DDTHH:mm:ss.SSSZ",Ta=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ka=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Ee={};function pa(e,a){const l="("+a.days.join("|")+")",r=e+l;if(Ee[r]!==void 0)return Ee[r];const u="("+a.daysShort.join("|")+")",s="("+a.months.join("|")+")",m="("+a.monthsShort.join("|")+")",i={};let f=0;const Y=e.replace(ka,M=>{switch(f++,M){case"YY":return i.YY=f,"(-?\\d{1,2})";case"YYYY":return i.YYYY=f,"(-?\\d{1,4})";case"M":return i.M=f,"(\\d{1,2})";case"Mo":return i.M=f++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return i.M=f,"(\\d{2})";case"MMM":return i.MMM=f,m;case"MMMM":return i.MMMM=f,s;case"D":return i.D=f,"(\\d{1,2})";case"Do":return i.D=f++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return i.D=f,"(\\d{2})";case"H":return i.H=f,"(\\d{1,2})";case"HH":return i.H=f,"(\\d{2})";case"h":return i.h=f,"(\\d{1,2})";case"hh":return i.h=f,"(\\d{2})";case"m":return i.m=f,"(\\d{1,2})";case"mm":return i.m=f,"(\\d{2})";case"s":return i.s=f,"(\\d{1,2})";case"ss":return i.s=f,"(\\d{2})";case"S":return i.S=f,"(\\d{1})";case"SS":return i.S=f,"(\\d{2})";case"SSS":return i.S=f,"(\\d{3})";case"A":return i.A=f,"(AM|PM)";case"a":return i.a=f,"(am|pm)";case"aa":return i.aa=f,"(a\\.m\\.|p\\.m\\.)";case"ddd":return u;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"do":return f++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return f++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return f++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return i.Z=f,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return i.ZZ=f,"(Z|[+-]\\d{2}\\d{2})";case"X":return i.X=f,"(-?\\d+)";case"x":return i.x=f,"(-?\\d{4,})";default:return f--,M[0]==="["&&(M=M.substring(1,M.length-1)),M.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:i,regex:new RegExp("^"+Y)};return Ee[r]=v,v}function _t(e,a){return e!==void 0?e:a!==void 0?a.date:Rt.date}function ht(e,a=""){const l=e>0?"-":"+",r=Math.abs(e),u=Math.floor(r/60),s=r%60;return l+x(u)+a+x(s)}function qa(e,a,l){let r=e.getFullYear(),u=e.getMonth();const s=e.getDate();return a.year!==void 0&&(r+=l*a.year,delete a.year),a.month!==void 0&&(u+=l*a.month,delete a.month),e.setDate(1),e.setMonth(2),e.setFullYear(r),e.setMonth(u),e.setDate(Math.min(s,Le(e))),a.date!==void 0&&(e.setDate(e.getDate()+l*a.date),delete a.date),e}function $a(e,a,l){const r=a.year!==void 0?a.year:e[`get${l}FullYear`](),u=a.month!==void 0?a.month-1:e[`get${l}Month`](),s=new Date(r,u+1,0).getDate(),m=Math.min(s,a.date!==void 0?a.date:e[`get${l}Date`]());return e[`set${l}Date`](1),e[`set${l}Month`](2),e[`set${l}FullYear`](r),e[`set${l}Month`](u),e[`set${l}Date`](m),delete a.year,delete a.month,delete a.date,e}function Ze(e,a,l){const r=Ht(a),u=new Date(e),s=r.year!==void 0||r.month!==void 0||r.date!==void 0?qa(u,r,l):u;for(const m in r){const i=Da(m);s[`set${i}`](s[`get${i}`]()+l*r[m])}return s}function Ht(e){const a={...e};return e.years!==void 0&&(a.year=e.years,delete a.years),e.months!==void 0&&(a.month=e.months,delete a.months),e.days!==void 0&&(a.date=e.days,delete a.days),e.day!==void 0&&(a.date=e.day,delete a.day),e.hour!==void 0&&(a.hours=e.hour,delete a.hour),e.minute!==void 0&&(a.minutes=e.minute,delete a.minute),e.second!==void 0&&(a.seconds=e.second,delete a.second),e.millisecond!==void 0&&(a.milliseconds=e.millisecond,delete a.millisecond),a}function Ct(e,a,l){const r=Ht(a),u=l===!0?"UTC":"",s=new Date(e),m=r.year!==void 0||r.month!==void 0||r.date!==void 0?$a(s,r,u):s;for(const i in r){const f=i.charAt(0).toUpperCase()+i.slice(1);m[`set${u}${f}`](r[i])}return m}function ja(e,a,l){const r=Ot(e,a,l),u=new Date(r.year,r.month===null?null:r.month-1,r.day===null?1:r.day,r.hour,r.minute,r.second,r.millisecond),s=u.getTimezoneOffset();return r.timezoneOffset===null||r.timezoneOffset===s?u:Ze(u,{minutes:r.timezoneOffset-s},1)}function Ot(e,a,l,r,u){const s={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(u!==void 0&&Object.assign(s,u),e==null||e===""||typeof e!="string")return s;a===void 0&&(a=xt);const m=_t(l,Dt.props),i=m.months,f=m.monthsShort,{regex:Y,map:v}=pa(a,m),M=e.match(Y);if(M===null)return s;let F="";if(v.X!==void 0||v.x!==void 0){const p=parseInt(M[v.X!==void 0?v.X:v.x],10);if(isNaN(p)===!0||p<0)return s;const q=new Date(p*(v.X!==void 0?1e3:1));s.year=q.getFullYear(),s.month=q.getMonth()+1,s.day=q.getDate(),s.hour=q.getHours(),s.minute=q.getMinutes(),s.second=q.getSeconds(),s.millisecond=q.getMilliseconds()}else{if(v.YYYY!==void 0)s.year=parseInt(M[v.YYYY],10);else if(v.YY!==void 0){const p=parseInt(M[v.YY],10);s.year=p<0?p:2e3+p}if(v.M!==void 0){if(s.month=parseInt(M[v.M],10),s.month<1||s.month>12)return s}else v.MMM!==void 0?s.month=f.indexOf(M[v.MMM])+1:v.MMMM!==void 0&&(s.month=i.indexOf(M[v.MMMM])+1);if(v.D!==void 0){if(s.day=parseInt(M[v.D],10),s.year===null||s.month===null||s.day<1)return s;const p=r!=="persian"?new Date(s.year,s.month,0).getDate():xe(s.year,s.month);if(s.day>p)return s}v.H!==void 0?s.hour=parseInt(M[v.H],10)%24:v.h!==void 0&&(s.hour=parseInt(M[v.h],10)%12,(v.A&&M[v.A]==="PM"||v.a&&M[v.a]==="pm"||v.aa&&M[v.aa]==="p.m.")&&(s.hour+=12),s.hour=s.hour%24),v.m!==void 0&&(s.minute=parseInt(M[v.m],10)%60),v.s!==void 0&&(s.second=parseInt(M[v.s],10)%60),v.S!==void 0&&(s.millisecond=parseInt(M[v.S],10)*10**(3-M[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(F=v.Z!==void 0?M[v.Z].replace(":",""):M[v.ZZ],s.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return s.dateHash=x(s.year,6)+"/"+x(s.month)+"/"+x(s.day),s.timeHash=x(s.hour)+":"+x(s.minute)+":"+x(s.second)+F,s}function Ia(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function Fa(e,a){return Ct(new Date,e,a)}function Ea(e){const a=new Date(e).getDay();return a===0?7:a}function _e(e){const a=new Date(e.getFullYear(),e.getMonth(),e.getDate());a.setDate(a.getDate()-(a.getDay()+6)%7+3);const l=new Date(a.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const r=a.getTimezoneOffset()-l.getTimezoneOffset();a.setHours(a.getHours()-r);const u=(a-l)/(Yt*7);return 1+Math.floor(u)}function Pa(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function Pe(e,a){const l=new Date(e);return a===!0?Pa(l):l.getTime()}function Va(e,a,l,r={}){const u=Pe(a,r.onlyDate),s=Pe(l,r.onlyDate),m=Pe(e,r.onlyDate);return(m>u||r.inclusiveFrom===!0&&m===u)&&(m<s||r.inclusiveTo===!0&&m===s)}function Aa(e,a){return Ze(e,a,1)}function Na(e,a){return Ze(e,a,-1)}function B(e,a,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(a){case"year":case"years":r[`${u}Month`](0);case"month":case"months":r[`${u}Date`](1);case"day":case"days":case"date":r[`${u}Hours`](0);case"hour":case"hours":r[`${u}Minutes`](0);case"minute":case"minutes":r[`${u}Seconds`](0);case"second":case"seconds":r[`${u}Milliseconds`](0)}return r}function za(e,a,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(a){case"year":case"years":r[`${u}Month`](11);case"month":case"months":r[`${u}Date`](Le(r));case"day":case"days":case"date":r[`${u}Hours`](23);case"hour":case"hours":r[`${u}Minutes`](59);case"minute":case"minutes":r[`${u}Seconds`](59);case"second":case"seconds":r[`${u}Milliseconds`](999)}return r}function Ba(e){let a=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{a=Math.max(a,new Date(l))}),a}function Za(e){let a=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{a=Math.min(a,new Date(l))}),a}function Ye(e,a,l){return(e.getTime()-e.getTimezoneOffset()*Ae-(a.getTime()-a.getTimezoneOffset()*Ae))/l}function Qe(e,a,l="days"){const r=new Date(e),u=new Date(a);switch(l){case"years":case"year":return r.getFullYear()-u.getFullYear();case"months":case"month":return(r.getFullYear()-u.getFullYear())*12+r.getMonth()-u.getMonth();case"days":case"day":case"date":return Ye(B(r,"day"),B(u,"day"),Yt);case"hours":case"hour":return Ye(B(r,"hour"),B(u,"hour"),Oa);case"minutes":case"minute":return Ye(B(r,"minute"),B(u,"minute"),Ae);case"seconds":case"second":return Ye(B(r,"second"),B(u,"second"),1e3)}}function He(e){return Qe(e,B(e,"year"),"days")+1}function Qa(e){return Mt(e)===!0?"date":typeof e=="number"?"number":"string"}function La(e,a,l){const r=new Date(e);if(a){const u=new Date(a);if(r<u)return u}if(l){const u=new Date(l);if(r>u)return u}return r}function Ra(e,a,l){const r=new Date(e),u=new Date(a);if(l===void 0)return r.getTime()===u.getTime();switch(l){case"second":case"seconds":if(r.getSeconds()!==u.getSeconds())return!1;case"minute":case"minutes":if(r.getMinutes()!==u.getMinutes())return!1;case"hour":case"hours":if(r.getHours()!==u.getHours())return!1;case"day":case"days":case"date":if(r.getDate()!==u.getDate())return!1;case"month":case"months":if(r.getMonth()!==u.getMonth())return!1;case"year":case"years":if(r.getFullYear()!==u.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${l}`)}return!0}function Le(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function de(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const mt={YY(e,a,l){const r=this.YYYY(e,a,l)%100;return r>=0?x(r):"-"+x(Math.abs(r))},YYYY(e,a,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return de(e.getMonth()+1)},MM(e){return x(e.getMonth()+1)},MMM(e,a){return a.monthsShort[e.getMonth()]},MMMM(e,a){return a.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return de(this.Q(e))},D(e){return e.getDate()},Do(e){return de(e.getDate())},DD(e){return x(e.getDate())},DDD(e){return He(e)},DDDo(e){return de(He(e))},DDDD(e){return x(He(e),3)},d(e){return e.getDay()},do(e){return de(e.getDay())},dd(e,a){return a.days[e.getDay()].slice(0,2)},ddd(e,a){return a.daysShort[e.getDay()]},dddd(e,a){return a.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return _e(e)},wo(e){return de(_e(e))},ww(e){return x(_e(e))},H(e){return e.getHours()},HH(e){return x(e.getHours())},h(e){const a=e.getHours();return a===0?12:a>12?a%12:a},hh(e){return x(this.h(e))},m(e){return e.getMinutes()},mm(e){return x(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return x(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return x(Math.floor(e.getMilliseconds()/10))},SSS(e){return x(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,a,l,r){const u=r==null?e.getTimezoneOffset():r;return ht(u,":")},ZZ(e,a,l,r){const u=r==null?e.getTimezoneOffset():r;return ht(u)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function Tt(e,a,l,r,u){if(e!==0&&!e||e===1/0||e===-1/0)return;const s=new Date(e);if(isNaN(s))return;a===void 0&&(a=xt);const m=_t(l,Dt.props);return a.replace(Ta,(i,f)=>i in mt?mt[i](s,m,r,u):f===void 0?i:f.split("\\]").join("]"))}function Wa(e){return Mt(e)===!0?new Date(e.getTime()):e}var an={isValid:Ia,extractDate:ja,buildDate:Fa,getDayOfWeek:Ea,getWeekOfYear:_e,isBetweenDates:Va,addToDate:Aa,subtractFromDate:Na,adjustDate:Ct,startOfDate:B,endOfDate:za,getMaxDate:Ba,getMinDate:Za,getDateDiff:Qe,getDayOfYear:He,inferDateFormat:Qa,getDateBetween:La,isSameDate:Ra,daysInMonth:Le,formatDate:Tt,clone:Wa};const le=20,Ua=["Calendar","Years","Months"],gt=e=>Ua.includes(e),Ve=e=>/^-?[\d]+\/[0-1]\d$/.test(e),fe=" \u2014 ";function X(e){return e.year+"/"+x(e.month)}var nn=Ne({name:"QDate",props:{...vt,...ha,...fa,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...vt.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ve},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ve},navigationMaxYearMonth:{type:String,validator:Ve},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:gt}},emits:[...Ha,"rangeStart","rangeEnd","navigation"],setup(e,{slots:a,emit:l}){const{proxy:r}=ze(),{$q:u}=r,s=va(e,u),{getCache:m}=Ma(),{tabindex:i,headerClass:f,getLocale:Y,getCurrentDate:v}=Ca(e,u);let M;const F=ma(e),p=ga(F),q=I(null),S=I(Xe()),_=I(Y()),Ce=D(()=>Xe()),De=D(()=>Y()),A=D(()=>v()),y=I(Ke(S.value,_.value)),O=I(e.defaultView),Me=D(()=>u.lang.rtl===!0?"right":"left"),N=I(Me.value),he=I(Me.value),ee=y.value.year,te=I(ee-ee%le-(ee<0?le:0)),T=I(null),Oe=D(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(s.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),Z=D(()=>e.color||"primary"),R=D(()=>e.textColor||"white"),ae=D(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Q=D(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),E=D(()=>Q.value.filter(t=>typeof t=="string").map(t=>pe(t,S.value,_.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),W=D(()=>{const t=n=>pe(n,S.value,_.value);return Q.value.filter(n=>Wt(n)===!0&&n.from!==void 0&&n.to!==void 0).map(n=>({from:t(n.from),to:t(n.to)})).filter(n=>n.from.dateHash!==null&&n.to.dateHash!==null&&n.from.dateHash<n.to.dateHash)}),ue=D(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const n=ft(t.year,t.month,t.day);return new Date(n.gy,n.gm-1,n.gd)}),se=D(()=>e.calendar==="persian"?J:(t,n,o)=>Tt(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),n===void 0?S.value:n,o===void 0?_.value:o,t.year,t.timezoneOffset)),ne=D(()=>E.value.length+W.value.reduce((t,n)=>t+1+Qe(ue.value(n.to),ue.value(n.from)),0)),we=D(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(T.value!==null){const o=T.value.init,c=ue.value(o);return _.value.daysShort[c.getDay()]+", "+_.value.monthsShort[o.month-1]+" "+o.day+fe+"?"}if(ne.value===0)return fe;if(ne.value>1)return`${ne.value} ${_.value.pluralDay}`;const t=E.value[0],n=ue.value(t);return isNaN(n.valueOf())===!0?fe:_.value.headerTitle!==void 0?_.value.headerTitle(n,t):_.value.daysShort[n.getDay()]+", "+_.value.monthsShort[t.month-1]+" "+t.day}),k=D(()=>E.value.concat(W.value.map(n=>n.from)).sort((n,o)=>n.year-o.year||n.month-o.month)[0]),me=D(()=>E.value.concat(W.value.map(n=>n.to)).sort((n,o)=>o.year-n.year||o.month-n.month)[0]),z=D(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ne.value===0)return fe;if(ne.value>1){const t=k.value,n=me.value,o=_.value.monthsShort;return o[t.month-1]+(t.year!==n.year?" "+t.year+fe+o[n.month-1]+" ":t.month!==n.month?fe+o[n.month-1]:"")+" "+n.year}return E.value[0].year}),re=D(()=>{const t=[u.iconSet.datetime.arrowLeft,u.iconSet.datetime.arrowRight];return u.lang.rtl===!0?t.reverse():t}),Re=D(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):_.value.firstDayOfWeek),kt=D(()=>{const t=_.value.daysShort,n=Re.value;return n>0?t.slice(n,7).concat(t.slice(0,n)):t}),U=D(()=>{const t=y.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():xe(t.year,t.month)}),pt=D(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),$=D(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),j=D(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Te=D(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return $.value!==null&&$.value.year>=y.value.year&&(t.year.prev=!1,$.value.year===y.value.year&&$.value.month>=y.value.month&&(t.month.prev=!1)),j.value!==null&&j.value.year<=y.value.year&&(t.year.next=!1,j.value.year===y.value.year&&j.value.month<=y.value.month&&(t.month.next=!1)),t}),be=D(()=>{const t={};return E.value.forEach(n=>{const o=X(n);t[o]===void 0&&(t[o]=[]),t[o].push(n.day)}),t}),We=D(()=>{const t={};return W.value.forEach(n=>{const o=X(n.from),c=X(n.to);if(t[o]===void 0&&(t[o]=[]),t[o].push({from:n.from.day,to:o===c?n.to.day:void 0,range:n}),o<c){let d;const{year:b,month:h}=n.from,w=h<12?{year:b,month:h+1}:{year:b+1,month:1};for(;(d=X(w))<=c;)t[d]===void 0&&(t[d]=[]),t[d].push({from:void 0,to:d===c?n.to.day:void 0,range:n}),w.month++,w.month>12&&(w.year++,w.month=1)}}),t}),ge=D(()=>{if(T.value===null)return;const{init:t,initHash:n,final:o,finalHash:c}=T.value,[d,b]=n<=c?[t,o]:[o,t],h=X(d),w=X(b);if(h!==V.value&&w!==V.value)return;const H={};return h===V.value?(H.from=d.day,H.includeFrom=!0):H.from=1,w===V.value?(H.to=b.day,H.includeTo=!0):H.to=U.value,H}),V=D(()=>X(y.value)),qt=D(()=>{const t={};if(e.options===void 0){for(let o=1;o<=U.value;o++)t[o]=!0;return t}const n=typeof e.options=="function"?e.options:o=>e.options.includes(o);for(let o=1;o<=U.value;o++){const c=V.value+"/"+x(o);t[o]=n(c)}return t}),$t=D(()=>{const t={};if(e.events===void 0)for(let n=1;n<=U.value;n++)t[n]=!1;else{const n=typeof e.events=="function"?e.events:o=>e.events.includes(o);for(let o=1;o<=U.value;o++){const c=V.value+"/"+x(o);t[o]=n(c)===!0&&pt.value(c)}}return t}),jt=D(()=>{let t,n;const{year:o,month:c}=y.value;if(e.calendar!=="persian")t=new Date(o,c-1,1),n=new Date(o,c-1,0).getDate();else{const d=ft(o,c,1);t=new Date(d.gy,d.gm-1,d.gd);let b=c-1,h=o;b===0&&(b=12,h--),n=xe(h,b)}return{days:t.getDay()-Re.value-1,endDay:n}}),Ue=D(()=>{const t=[],{days:n,endDay:o}=jt.value,c=n<0?n+7:n;if(c<6)for(let h=o-c;h<=o;h++)t.push({i:h,fill:!0});const d=t.length;for(let h=1;h<=U.value;h++){const w={i:h,event:$t.value[h],classes:[]};qt.value[h]===!0&&(w.in=!0,w.flat=!0),t.push(w)}if(be.value[V.value]!==void 0&&be.value[V.value].forEach(h=>{const w=d+h-1;Object.assign(t[w],{selected:!0,unelevated:!0,flat:!1,color:Z.value,textColor:R.value})}),We.value[V.value]!==void 0&&We.value[V.value].forEach(h=>{if(h.from!==void 0){const w=d+h.from-1,H=d+(h.to||U.value)-1;for(let ye=w;ye<=H;ye++)Object.assign(t[ye],{range:h.range,unelevated:!0,color:Z.value,textColor:R.value});Object.assign(t[w],{rangeFrom:!0,flat:!1}),h.to!==void 0&&Object.assign(t[H],{rangeTo:!0,flat:!1})}else if(h.to!==void 0){const w=d+h.to-1;for(let H=d;H<=w;H++)Object.assign(t[H],{range:h.range,unelevated:!0,color:Z.value,textColor:R.value});Object.assign(t[w],{flat:!1,rangeTo:!0})}else{const w=d+U.value-1;for(let H=d;H<=w;H++)Object.assign(t[H],{range:h.range,unelevated:!0,color:Z.value,textColor:R.value})}}),ge.value!==void 0){const h=d+ge.value.from-1,w=d+ge.value.to-1;for(let H=h;H<=w;H++)t[H].color=Z.value,t[H].editRange=!0;ge.value.includeFrom===!0&&(t[h].editRangeFrom=!0),ge.value.includeTo===!0&&(t[w].editRangeTo=!0)}y.value.year===A.value.year&&y.value.month===A.value.month&&(t[d+A.value.day-1].today=!0);const b=t.length%7;if(b>0){const h=7-b;for(let w=1;w<=h;w++)t.push({i:w,fill:!0})}return t.forEach(h=>{let w="q-date__calendar-item ";h.fill===!0?w+="q-date__calendar-item--fill":(w+=`q-date__calendar-item--${h.in===!0?"in":"out"}`,h.range!==void 0&&(w+=` q-date__range${h.rangeTo===!0?"-to":h.rangeFrom===!0?"-from":""}`),h.editRange===!0&&(w+=` q-date__edit-range${h.editRangeFrom===!0?"-from":""}${h.editRangeTo===!0?"-to":""}`),(h.range!==void 0||h.editRange===!0)&&(w+=` text-${h.color}`)),h.classes=w}),t}),It=D(()=>e.disable===!0?{"aria-disabled":"true"}:{});K(()=>e.modelValue,t=>{if(M===t)M=0;else{const n=Ke(S.value,_.value);ie(n.year,n.month,n)}}),K(O,()=>{q.value!==null&&r.$el.contains(document.activeElement)===!0&&q.value.focus()}),K(()=>y.value.year+"|"+y.value.month,()=>{l("navigation",{year:y.value.year,month:y.value.month})}),K(Ce,t=>{nt(t,_.value,"mask"),S.value=t}),K(De,t=>{nt(S.value,t,"locale"),_.value=t});function Je(){const{year:t,month:n,day:o}=A.value,c={...y.value,year:t,month:n,day:o},d=be.value[X(c)];(d===void 0||d.includes(c.day)===!1)&&$e(c),ke(c.year,c.month)}function Ft(t){gt(t)===!0&&(O.value=t)}function Et(t,n){["month","year"].includes(t)&&(t==="month"?et:qe)(n===!0?-1:1)}function ke(t,n){O.value="Calendar",ie(t,n)}function Pt(t,n){if(e.range===!1||!t){T.value=null;return}const o=Object.assign({...y.value},t),c=n!==void 0?Object.assign({...y.value},n):o;T.value={init:o,initHash:J(o),final:c,finalHash:J(c)},ke(o.year,o.month)}function Xe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function pe(t,n,o){return Ot(t,n,o,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ke(t,n){const o=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(o.length===0)return Ge();const c=o[o.length-1],d=pe(c.from!==void 0?c.from:c,t,n);return d.dateHash===null?Ge():d}function Ge(){let t,n;if(e.defaultYearMonth!==void 0){const o=e.defaultYearMonth.split("/");t=parseInt(o[0],10),n=parseInt(o[1],10)}else{const o=A.value!==void 0?A.value:v();t=o.year,n=o.month}return{year:t,month:n,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+x(n)+"/01"}}function et(t){let n=y.value.year,o=Number(y.value.month)+t;o===13?(o=1,n++):o===0&&(o=12,n--),ie(n,o),ae.value===!0&&Se("month")}function qe(t){const n=Number(y.value.year)+t;ie(n,y.value.month),ae.value===!0&&Se("year")}function Vt(t){ie(t,y.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",ae.value===!0&&Se("year")}function At(t){ie(y.value.year,t),O.value="Calendar",ae.value===!0&&Se("month")}function Nt(t,n){const o=be.value[n];(o!==void 0&&o.includes(t.day)===!0?je:$e)(t)}function oe(t){return{year:t.year,month:t.month,day:t.day}}function ie(t,n,o){if($.value!==null&&t<=$.value.year&&((n<$.value.month||t<$.value.year)&&(n=$.value.month),t=$.value.year),j.value!==null&&t>=j.value.year&&((n>j.value.month||t>j.value.year)&&(n=j.value.month),t=j.value.year),o!==void 0){const{hour:d,minute:b,second:h,millisecond:w,timezoneOffset:H,timeHash:ye}=o;Object.assign(y.value,{hour:d,minute:b,second:h,millisecond:w,timezoneOffset:H,timeHash:ye})}const c=t+"/"+x(n)+"/01";c!==y.value.dateHash&&(N.value=y.value.dateHash<c==(u.lang.rtl!==!0)?"left":"right",t!==y.value.year&&(he.value=N.value),ut(()=>{te.value=t-t%le-(t<0?le:0),Object.assign(y.value,{year:t,month:n,day:1,dateHash:c})}))}function tt(t,n,o){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;M=c;const{reason:d,details:b}=at(n,o);l("update:modelValue",c,d,b)}function Se(t){const n=E.value[0]!==void 0&&E.value[0].dateHash!==null?{...E.value[0]}:{...y.value};ut(()=>{n.year=y.value.year,n.month=y.value.month;const o=e.calendar!=="persian"?new Date(n.year,n.month,0).getDate():xe(n.year,n.month);n.day=Math.min(Math.max(1,n.day),o);const c=ce(n);M=c;const{details:d}=at("",n);l("update:modelValue",c,t,d)})}function at(t,n){return n.from!==void 0?{reason:`${t}-range`,details:{...oe(n.target),from:oe(n.from),to:oe(n.to)}}:{reason:`${t}-day`,details:oe(n)}}function ce(t,n,o){return t.from!==void 0?{from:se.value(t.from,n,o),to:se.value(t.to,n,o)}:se.value(t,n,o)}function $e(t){let n;if(e.multiple===!0)if(t.from!==void 0){const o=J(t.from),c=J(t.to),d=E.value.filter(h=>h.dateHash<o||h.dateHash>c),b=W.value.filter(({from:h,to:w})=>w.dateHash<o||h.dateHash>c);n=d.concat(b).concat(t).map(h=>ce(h))}else{const o=Q.value.slice();o.push(ce(t)),n=o}else n=ce(t);tt(n,"add",t)}function je(t){if(e.noUnset===!0)return;let n=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const o=ce(t);t.from!==void 0?n=e.modelValue.filter(c=>c.from!==void 0?c.from!==o.from&&c.to!==o.to:!0):n=e.modelValue.filter(c=>c!==o),n.length===0&&(n=null)}tt(n,"remove",t)}function nt(t,n,o){const c=E.value.concat(W.value).map(d=>ce(d,t,n)).filter(d=>d.from!==void 0?d.from.dateHash!==null&&d.to.dateHash!==null:d.dateHash!==null);l("update:modelValue",(e.multiple===!0?c:c[0])||null,o)}function zt(){if(e.minimal!==!0)return g("div",{class:"q-date__header "+f.value},[g("div",{class:"relative-position"},[g(ve,{name:"q-transition--fade"},()=>g("div",{key:"h-yr-"+z.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...m("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[z.value]))]),g("div",{class:"q-date__header-title relative-position flex no-wrap"},[g("div",{class:"relative-position col"},[g(ve,{name:"q-transition--fade"},()=>g("div",{key:"h-sub"+we.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...m("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[we.value]))]),e.todayBtn===!0?g(L,{class:"q-date__header-today self-start",icon:u.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:i.value,onClick:Je}):null])])}function Ie({label:t,type:n,key:o,dir:c,goTo:d,boundaries:b,cls:h}){return[g("div",{class:"row items-center q-date__arrow"},[g(L,{round:!0,dense:!0,size:"sm",flat:!0,icon:re.value[0],tabindex:i.value,disable:b.prev===!1,...m("go-#"+n,{onClick(){d(-1)}})})]),g("div",{class:"relative-position overflow-hidden flex flex-center"+h},[g(ve,{name:"q-transition--jump-"+c},()=>g("div",{key:o},[g(L,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:i.value,...m("view#"+n,{onClick:()=>{O.value=n}})})]))]),g("div",{class:"row items-center q-date__arrow"},[g(L,{round:!0,dense:!0,size:"sm",flat:!0,icon:re.value[1],tabindex:i.value,disable:b.next===!1,...m("go+#"+n,{onClick(){d(1)}})})])]}const Bt={Calendar:()=>[g("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[g("div",{class:"q-date__navigation row items-center no-wrap"},Ie({label:_.value.months[y.value.month-1],type:"Months",key:y.value.month,dir:N.value,goTo:et,boundaries:Te.value.month,cls:" col"}).concat(Ie({label:y.value.year,type:"Years",key:y.value.year,dir:he.value,goTo:qe,boundaries:Te.value.year,cls:""}))),g("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},kt.value.map(t=>g("div",{class:"q-date__calendar-item"},[g("div",t)]))),g("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[g(ve,{name:"q-transition--slide-"+N.value},()=>g("div",{key:V.value,class:"q-date__calendar-days fit"},Ue.value.map(t=>g("div",{class:t.classes},[t.in===!0?g(L,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:i.value,...m("day#"+t.i,{onClick:()=>{Zt(t.i)},onMouseover:()=>{Qt(t.i)}})},t.event!==!1?()=>g("div",{class:"q-date__event bg-"+t.event}):null):g("div",""+t.i)]))))])])],Months(){const t=y.value.year===A.value.year,n=c=>$.value!==null&&y.value.year===$.value.year&&$.value.month>c||j.value!==null&&y.value.year===j.value.year&&j.value.month<c,o=_.value.monthsShort.map((c,d)=>{const b=y.value.month===d+1;return g("div",{class:"q-date__months-item flex flex-center"},[g(L,{class:t===!0&&A.value.month===d+1?"q-date__today":null,flat:b!==!0,label:c,unelevated:b,color:b===!0?Z.value:null,textColor:b===!0?R.value:null,tabindex:i.value,disable:n(d+1),...m("month#"+d,{onClick:()=>{At(d+1)}})})])});return e.yearsInMonthView===!0&&o.unshift(g("div",{class:"row no-wrap full-width"},[Ie({label:y.value.year,type:"Years",key:y.value.year,dir:he.value,goTo:qe,boundaries:Te.value.year,cls:" col"})])),g("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},o)},Years(){const t=te.value,n=t+le,o=[],c=d=>$.value!==null&&$.value.year>d||j.value!==null&&j.value.year<d;for(let d=t;d<=n;d++){const b=y.value.year===d;o.push(g("div",{class:"q-date__years-item flex flex-center"},[g(L,{key:"yr"+d,class:A.value.year===d?"q-date__today":null,flat:!b,label:d,dense:!0,unelevated:b,color:b===!0?Z.value:null,textColor:b===!0?R.value:null,tabindex:i.value,disable:c(d),...m("yr#"+d,{onClick:()=>{Vt(d)}})})]))}return g("div",{class:"q-date__view q-date__years flex flex-center"},[g("div",{class:"col-auto"},[g(L,{round:!0,dense:!0,flat:!0,icon:re.value[0],tabindex:i.value,disable:c(t),...m("y-",{onClick:()=>{te.value-=le}})})]),g("div",{class:"q-date__years-content col self-stretch row items-center"},o),g("div",{class:"col-auto"},[g(L,{round:!0,dense:!0,flat:!0,icon:re.value[1],tabindex:i.value,disable:c(n),...m("y+",{onClick:()=>{te.value+=le}})})])])}};function Zt(t){const n={...y.value,day:t};if(e.range===!1){Nt(n,V.value);return}if(T.value===null){const o=Ue.value.find(d=>d.fill!==!0&&d.i===t);if(e.noUnset!==!0&&o.range!==void 0){je({target:n,from:o.range.from,to:o.range.to});return}if(o.selected===!0){je(n);return}const c=J(n);T.value={init:n,initHash:c,final:n,finalHash:c},l("rangeStart",oe(n))}else{const o=T.value.initHash,c=J(n),d=o<=c?{from:T.value.init,to:n}:{from:n,to:T.value.init};T.value=null,$e(o===c?n:{target:n,...d}),l("rangeEnd",{from:oe(d.from),to:oe(d.to)})}}function Qt(t){if(T.value!==null){const n={...y.value,day:t};Object.assign(T.value,{final:n,finalHash:J(n)})}}return Object.assign(r,{setToday:Je,setView:Ft,offsetCalendar:Et,setCalendarTo:ke,setEditingRange:Pt}),()=>{const t=[g("div",{class:"q-date__content col relative-position"},[g(ve,{name:"q-transition--fade"},Bt[O.value])])],n=yt(a.default);return n!==void 0&&t.push(g("div",{class:"q-date__actions"},n)),e.name!==void 0&&e.disable!==!0&&p(t,"push"),g("div",{class:Oe.value,...It.value},[zt(),g("div",{ref:q,class:"q-date__main col column",tabindex:-1},t)])}}}),rn=Ne({name:"QPopupProxy",props:{...ta,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:a,emit:l,attrs:r}){const{proxy:u}=ze(),{$q:s}=u,m=I(!1),i=I(null),f=D(()=>parseInt(e.breakpoint,10)),{canShow:Y}=wt({showing:m});function v(){return s.screen.width<f.value||s.screen.height<f.value?"dialog":"menu"}const M=I(v()),F=D(()=>M.value==="menu"?{maxHeight:"99vh"}:{});K(()=>v(),S=>{m.value!==!0&&(M.value=S)});function p(S){m.value=!0,l("show",S)}function q(S){m.value=!1,M.value=v(),l("hide",S)}return Object.assign(u,{show(S){Y(S)===!0&&i.value.show(S)},hide(S){i.value.hide(S)},toggle(S){i.value.toggle(S)}}),Ut(u,"currentComponent",()=>({type:M.value,ref:i.value})),()=>{const S={ref:i,...F.value,...r,onShow:p,onHide:q};let _;return M.value==="dialog"?_=ya:(_=aa,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),g(_,S,a.default)}}});export{tn as Q,rn as a,nn as b,an as d};
