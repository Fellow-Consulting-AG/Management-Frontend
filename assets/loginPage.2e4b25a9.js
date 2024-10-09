import{a as L,l as E,Q as p,b as I,c as r,d as m}from"./dashBoardStore.5b2e60a4.js";import{k as F,c as q,h as n,l as V,g as A,Q,_ as x,d as O,r as i,m as g,n as z,p as l,q as _,s as o,t as P,u as N,f as a,F as U,v as d,x as f,y as B,z as T,A as D,B as R}from"./index.d1a87ae7.js";import{Q as c}from"./QInput.964ceabf.js";import{Q as M}from"./QSeparator.f3254c21.js";import{u as G,a as j,b as K,c as W,t as H,h as J,P as S}from"./helperMixin.0a390acc.js";import{t as X}from"./tokenUtil.335809d5.js";import"./axios.ab682c6b.js";var Y=F({name:"QInnerLoading",props:{...G,...j,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:s}){const w=A(),y=K(e,w.proxy.$q),{transitionProps:h,transitionStyle:b}=W(e),t=q(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(y.value===!0?" q-inner-loading--dark":"")),k=q(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function C(){const v=[n(Q,{size:e.size,color:e.color})];return e.label!==void 0&&v.push(n("div",{class:k.value,style:e.labelStyle},[e.label])),v}function $(){return e.showing===!0?n("div",{class:t.value,style:b.value},s.default!==void 0?s.default():C()):null}return()=>n(V,h.value,$)}});const Z=O({el:"#app",mixins:[X,H,J],setup(){const e=L(),{setAuthToken:s}=e;return{setAuthToken:s,user:i(""),password:i(""),visibility_off:i(!0),error_message:i(""),processing:i(!1),display_error:i(!1),forgotPw:i(!1)}},methods:{onSubmit(){this.authenticateUser()},async authenticateUser(){try{this.user=this.user.replace(/\s+/g,""),this.password=this.password.replace(/\s+/g,"");const e=await E.login(this.user,this.password);e&&this.afterLoginEvent(e)}catch(e){this.handleLoginFailed(),this.handleErrorFromApi(e)}return null},async afterLoginEvent(e){try{this.setUpLocalStorageOnLogin(e),this.setAuthToken("Bearer "+e.user.token),this.$router.push("/dashboard")}catch{this.showErrorToast(this.$t("messages.error.INTERNAL_OCCUR"))}return null},handleLoginFailed(){let e=S.getItem("login_attempts")||0;S.set("login_attempts",++e),e>3&&this.showErrorToast(this.$t("messages.error.LOGIN_FAILED"))},handleErrorFromApi(e){let s="";e.response&&e.response.status===400&&(s=this.$t("messages.error.INVALID_PASS")),e!=null&&typeof e=="object"&&e.hasOwnProperty("message")&&(s=e.message),e&&e.response&&e.response.data&&(e.response.data.hasOwnProperty("message")&&(s=e.response.data.message),e.response.data.hasOwnProperty("error_description")&&(s=e.response.data.error_description)),!(!s||s==="")&&this.displayError(s)},handleSpecificErrors(e){e.hasOwnProperty("error")},displayError(e){this.display_error=!0;let s="";e=='Invalid "username" or "password" in request.'?s=this.$t("messages.invalid.USER_PASS"):s=e,s||(s=this.$t("messages.error.LOGIN_ERROR")),this.error_message=s},openForgotPw(){this.forgotPw=!0},closeForgotPw(){this.forgotPw=!1}}}),u=e=>(D("data-v-619a9f8b"),e=e(),R(),e),ee=u(()=>l("div",{class:"col-1 fellow-logo"},[l("img",{src:"/app_icons/FELLOW.png"}),l("span",{class:""},"FELLOWPRO AG")],-1)),se={class:"row login"},ae=u(()=>l("span",{class:"text-uppercase text-primary text-weight-bold q-mx-auto",style:{"font-size":"45px"}},"Management Application",-1)),oe=u(()=>l("span",{class:"text-uppercase text-primary text-weight-bold q-mx-auto q-mb-lg",style:{"font-size":"45px"}},"Forgot Password",-1)),te={class:"row",style:{"flex-direction":"column",width:"100%"}},le=u(()=>l("img",{class:"loader",src:"loader.gif",alt:"Loading..."},null,-1));function re(e,s,w,y,h,b){return g(),z(U,null,[l("div",{class:"page-holder",onKeydown:s[8]||(s[8]=N(t=>e.onSubmit(),["enter"]))},[ee,l("div",se,[e.forgotPw?P("",!0):(g(),_(p,{key:0,class:"q-mx-auto login-card"},{default:o(()=>[a(r,{class:"row",style:{"margin-top":"20px"}},{default:o(()=>[ae]),_:1}),a(r,{class:"row"},{default:o(()=>[a(c,{class:"col-7 q-pt-xl q-mx-auto",modelValue:e.user,"onUpdate:modelValue":s[0]||(s[0]=t=>e.user=t),outlined:"",dense:"",label:"E-Mail"},{default:o(()=>[a(d,{name:"person",style:{color:"grey"},class:"q-pt-sm",size:"sm"})]),_:1},8,["modelValue"])]),_:1}),a(r,{class:"row",style:{"margin-top":"-15px"}},{default:o(()=>[a(c,{class:"col-7 q-mx-auto",modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=t=>e.password=t),outlined:"",dense:"",label:"Password",type:e.visibility_off?"password":"text"},{append:o(()=>[a(d,{name:e.visibility_off?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[1]||(s[1]=t=>e.visibility_off=!e.visibility_off)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),a(r,{class:"row"},{default:o(()=>[l("a",{href:"#",onClick:s[3]||(s[3]=(...t)=>e.openForgotPw&&e.openForgotPw(...t)),class:"q-mx-auto text-primary"},"Forgot Password?")]),_:1}),a(m,{class:"row"},{default:o(()=>[a(f,{disable:e.processing,class:"col-2 q-mx-auto q-mt-sm",size:"md",color:"primary",label:e.$t("login"),onClick:s[4]||(s[4]=t=>e.onSubmit())},null,8,["disable","label"])]),_:1})]),_:1})),e.forgotPw?(g(),_(p,{key:1,class:"q-mx-auto login-card"},{default:o(()=>[a(r,{class:"row",style:{"margin-top":"20px"}},{default:o(()=>[oe]),_:1}),a(r,{class:"row"},{default:o(()=>[a(c,{class:"col-7 q-pt-xl q-mx-auto",modelValue:e.user,"onUpdate:modelValue":s[5]||(s[5]=t=>e.user=t),outlined:"",dense:"",label:"E-Mail"},{default:o(()=>[a(d,{name:"person",style:{color:"grey"},class:"q-pt-sm",size:"sm"})]),_:1},8,["modelValue"])]),_:1}),a(m,{class:"row"},{default:o(()=>[a(f,{disable:e.processing,class:"col-3 q-mx-auto q-mt-sm q-mb-lg",size:"md",color:"primary",label:e.$t("reset password"),onClick:s[6]||(s[6]=t=>e.onSubmit())},null,8,["disable","label"])]),_:1}),a(M,{class:"q-mt-xl"}),a(r,{class:"row"},{default:o(()=>[l("a",{href:"#",onClick:s[7]||(s[7]=(...t)=>e.closeForgotPw&&e.closeForgotPw(...t)),class:"q-mx-auto text-primary"},"Back to Login")]),_:1})]),_:1})):P("",!0)])],32),a(I,{modelValue:e.display_error,"onUpdate:modelValue":s[10]||(s[10]=t=>e.display_error=t),persistent:"",class:"login-error-dialog"},{default:o(()=>[a(p,{style:{width:"500px","max-width":"40vw"}},{default:o(()=>[a(r,{class:"row items-center login-error-background p-4"},{default:o(()=>[a(d,{color:"white",size:"xl",class:"q-ml-auto q-mr-auto",name:"warning"})]),_:1}),a(r,null,{default:o(()=>[B(T(e.$t(e.error_message)),1)]),_:1}),a(m,null,{default:o(()=>[l("div",te,[a(f,{label:e.$t("Close"),class:"q-mr-sm login-error-background",color:"primary",onClick:s[9]||(s[9]=t=>e.display_error=!1)},null,8,["label"])])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(Y,{showing:e.processing},{default:o(()=>[le]),_:1},8,["showing"])],64)}var fe=x(Z,[["render",re],["__scopeId","data-v-619a9f8b"]]);export{fe as default};
