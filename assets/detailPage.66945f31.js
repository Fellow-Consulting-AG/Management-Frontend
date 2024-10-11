import{_ as D,d as T,aE as y,r as i,m as f,n as g,p as l,f as s,v as F,z as a,x as d,s as r,u,F as $,at as I,aw as w,ap as O,A as B,B as E,ax as z}from"./index.a3023078.js";import{Q as c}from"./QSeparator.08455f39.js";import{Q as m}from"./QInput.fe276ae5.js";import{y as M,n as A,Q as h,b as V,c as n,d as Q}from"./dashBoardStore.1e8ec05b.js";import{Q as K,a as N,b as S,d as U,C as k}from"./ClosePopup.710dc1c6.js";import{Q as P}from"./QMarkupTable.45df5920.js";import{Q as j}from"./QSelect.0fea4071.js";import{t as L,h as R}from"./helperMixin.292ad739.js";import{t as q}from"./tokenUtil.fdf9c008.js";import"./axios.ab682c6b.js";import"./format.054b8074.js";const G=T({el:"#app",mixins:[L,R,q],mounted(){this.init()},methods:{async init(){this.user_id=this.$route.params.id,this.selected_user=await this.useDocbitUserStore.getUsers(this.user_id),await this.getOrgsFromServer("1"),this.organisations.forEach(e=>{this.customer_list.push({value:e.org_id,label:e.name})})},async deleteUser(){await this.useDocbitUserStore.deleteUser(this.selected_user),this.$router.push("/users")},async addOrg(){if(!this.org){this.showErrorToast(this.$t("error_message.ORG_NOT_SET"));return}const e={user_id:this.selected_user.id,org_id:this.org.value};await this.useDocbitUserStore.addToOrg(e),this.addToOrg=!1},async editOnOrg(){const e={user_id:this.selected_user.id,org_id:this.org.value};await this.useDocbitUserStore.editOnOrg(e)},async removeOrg(){const e={user_id:this.selected_user.id,org_id:this.org.org_id};await this.useDocbitUserStore.removeFromOrg(e),this.removeFromOrg=!1}},setup(){const e=M(),{selected_user:t}=y(e),p=A(),{organisations:v}=y(p),{getOrgsFromServer:b}=p;return{useDocbitUserStore:e,selected_user:t,getOrgsFromServer:b,organisations:v,customer_list:i([]),user_id:i(""),add_org:i({}),org:i({}),addToOrg:i(!1),removeFromOrg:i(!1),confirmDelete:i(!1),deleteuser:i(!1),editing:i(!1)}}}),_=e=>(B("data-v-6919a16c"),e=e(),E(),e),H={style:{"margin-left":"15%","max-width":"70%"}},J={class:"row",style:{height:"100px"}},W={class:"col-7 text-weight-bold text-primary",style:{"margin-top":"30px","font-size":"30px"}},X={class:"col-2 row"},Y=_(()=>l("div",{class:"col-1"},null,-1)),Z=_(()=>l("div",{class:"col-1"},null,-1)),x={style:{"margin-left":"10px"},class:"row"},ee={class:"col-1"},se={class:"input-name-top"},te={class:"input-name-normal"},le={class:"col-4"},oe={class:"col-1"},re={class:"input-name-top"},ae={class:"input-name-normal"},ie={class:"col-4"},de={class:"col-4"},ne={color:"primary",style:{"font-size":"x-large"}},ue=_(()=>l("div",{class:"col-6"},null,-1)),me={class:"col-2"},pe={class:"text-left"},fe={class:"text-right"},ge={class:"text-left"},ce={class:"text-center"},he={class:"text-center"},_e={class:"text-right"},ve={class:"text-red-14"},be={class:"text-red-14"},ye={class:"q-ml-sm"};function $e(e,t,p,v,b,we){return f(),g($,null,[l("div",H,[l("div",J,[s(F,{class:"col-2",name:"user"}),l("div",W,a(e.selected_user.first_name)+" "+a(e.selected_user.last_name),1),l("div",X,[Y,s(d,{class:"col-5",style:{height:"30px","max-width":"45%","margin-top":"30px"},color:"primary",label:e.editing===!0?e.$t("stop_editing"):e.$t("edit"),onClick:t[0]||(t[0]=o=>(e.editing=!e.editing,e.checkUpdate()))},null,8,["label"]),Z,s(d,{class:"col-5",style:{height:"30px","max-width":"45%","margin-top":"30px"},color:"red",label:e.$t("delete"),onClick:t[1]||(t[1]=o=>(e.deleteuser=!0,e.confirmDelete=!0))},null,8,["label"])])]),s(c,{class:"separators"}),l("div",x,[l("div",ee,[l("div",se,a(e.$t("first_name")),1),l("div",te,a(e.$t("email")),1)]),l("div",le,[s(m,{class:"input-field",dense:"",borderless:!e.editing,disable:!e.editing,modelValue:e.selected_user.first_name,"onUpdate:modelValue":t[2]||(t[2]=o=>e.selected_user.first_name=o)},null,8,["borderless","disable","modelValue"]),s(m,{class:"input-field",dense:"",borderless:!e.editing,disable:!e.editing,modelValue:e.selected_user.email,"onUpdate:modelValue":t[3]||(t[3]=o=>e.selected_user.email=o)},null,8,["borderless","disable","modelValue"])]),l("div",oe,[l("div",re,a(e.$t("last_name")),1),l("div",ae,a(e.$t("created_on")),1)]),l("div",ie,[s(m,{class:"input-field",dense:"",borderless:!e.editing,disable:!e.editing,modelValue:e.selected_user.last_name,"onUpdate:modelValue":t[4]||(t[4]=o=>e.selected_user.last_name=o)},null,8,["borderless","disable","modelValue"]),s(m,{class:"input-field",dense:"",borderless:!e.editing,disable:!0,modelValue:e.selected_user.created_on,"onUpdate:modelValue":t[5]||(t[5]=o=>e.selected_user.created_on=o)},null,8,["borderless","modelValue"])])]),s(c,{class:"separators",style:{"margin-top":"20px"}}),s(h,{class:"organisation-card"},{default:r(()=>[s(n,{class:"row"},{default:r(()=>[l("div",de,[l("span",ne,a(e.$t("organisations")),1)]),ue,l("div",me,[s(d,{style:{height:"30px"},color:"primary",label:e.$t("add_to_org"),onClick:t[6]||(t[6]=o=>e.addToOrg=!0)},null,8,["label"])])]),_:1}),s(n,null,{default:r(()=>[s(P,{flat:""},{default:r(()=>[l("thead",null,[l("tr",null,[l("th",pe,a(e.$t("name")),1),l("th",null,a(e.$t("is_org_admin")),1),l("th",null,a(e.$t("is_default")),1),l("th",fe,a(e.$t("actions")),1)])]),l("tbody",null,[(f(!0),g($,null,I(e.selected_user.orgs,o=>(f(),g("tr",{key:o},[l("td",ge,a(o.org_name),1),l("td",ce,a(o.is_org_admin),1),l("td",he,a(o.is_default),1),l("td",_e,[s(d,{flat:"",dense:"",round:"",onClick:t[7]||(t[7]=z(()=>{},["stop","prevent"])),icon:"more_horiz"},{default:r(()=>[s(K,null,{default:r(()=>[s(N,{dense:"",style:{"min-width":"100px"}},{default:r(()=>[s(S,{clickable:""},{default:r(()=>[s(U,{onClick:C=>this.$router.push("/client/"+o.org_id)},{default:r(()=>[l("span",ve,a(e.$t("open_org")),1)]),_:2},1032,["onClick"])]),_:2},1024),s(c),s(S,{clickable:""},{default:r(()=>[s(U,{onClick:C=>{this.org=o,e.removeFromOrg=!0,e.confirmDelete=!0}},{default:r(()=>[l("span",be,a(e.$t("remove")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))])]),_:1})]),_:1})]),_:1})]),s(V,{modelValue:e.addToOrg,"onUpdate:modelValue":t[10]||(t[10]=o=>e.addToOrg=o),persistent:"",onKeypress:[t[11]||(t[11]=u(o=>e.addToOrg=!1,["esc"])),t[12]||(t[12]=u(o=>e.addOrg(),["enter"]))]},{default:r(()=>[s(h,null,{default:r(()=>[s(n,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:r(()=>[s(w,{icon:"info",color:"primary","text-color":"white"})]),_:1}),s(n,{class:"row items-center"},{default:r(()=>[s(j,{style:{width:"200px"},modelValue:e.org,"onUpdate:modelValue":t[8]||(t[8]=o=>e.org=o),options:e.customer_list},null,8,["modelValue","options"])]),_:1}),s(Q,null,{default:r(()=>[O(s(d,{flat:"",label:e.$t("cancel"),color:"primary"},null,8,["label"]),[[k]]),s(d,{align:"right",flat:"",label:e.$t("proceed"),color:"primary",onClick:t[9]||(t[9]=o=>e.addOrg())},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(V,{modelValue:e.confirmDelete,"onUpdate:modelValue":t[14]||(t[14]=o=>e.confirmDelete=o),persistent:"",onKeypress:[t[15]||(t[15]=u(o=>(e.confirmDelete=!1,e.removeFromOrg=!1),["esc"])),t[16]||(t[16]=u(o=>e.addOrg(),["enter"]))]},{default:r(()=>[s(h,null,{default:r(()=>[s(n,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:r(()=>[s(w,{icon:"warning",color:"primary","text-color":"white"})]),_:1}),s(n,{class:"row items-center"},{default:r(()=>[l("span",ye,a(e.$t("popups.msg_remove")),1)]),_:1}),s(Q,null,{default:r(()=>[O(s(d,{flat:"",label:e.$t("cancel"),color:"primary"},null,8,["label"]),[[k]]),s(d,{align:"right",flat:"",label:e.$t("proceed"),color:"primary",onClick:t[13]||(t[13]=o=>e.removeOrg())},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Be=D(G,[["render",$e],["__scopeId","data-v-6919a16c"]]);export{Be as default};
