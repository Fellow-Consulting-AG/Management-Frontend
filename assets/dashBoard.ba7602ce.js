import{t as w,h as k}from"./helperMixin.0a390acc.js";import{t as E}from"./tokenUtil.335809d5.js";import{Q as p}from"./QInput.964ceabf.js";import{d as B,r,_ as S,m,n as g,q as L,s as a,f as l,y as c,z as i,p as s,ap as v,x as b,t as M,F as T,aE as j,av as U,au as d,at as q,u as F,aw as R,ax as G,A as N,B as K}from"./index.d1a87ae7.js";import{Q as y}from"./QSeparator.f3254c21.js";import{C,Q as H,a as J,b as z,d as A}from"./ClosePopup.120a31fd.js";import{Q as Y}from"./QMarkupTable.7c36669c.js";import{r as W,n as P,c as _,d as V,Q,v as X,b as D}from"./dashBoardStore.5b2e60a4.js";import{Q as Z}from"./QSelect.eb19eb1c.js";import{Q as x}from"./QCheckbox.b2a09a21.js";import"./axios.ab682c6b.js";import"./format.054b8074.js";const ee=B({el:"#app",mixins:[w,k],methods:{async getPlans(){const e=await W.getPlans("all");e.forEach(t=>{t.value=t.id,t.label=t.name}),this.plan_list=e},async createOrg(){this.sub.hasOwnProperty("plan")&&this.sub.plan.hasOwnProperty("id")&&(this.sub.plan_id=this.sub.plan.id),await this.docstore.createOrg(this.org,this.sub)}},setup(){return{docstore:P(),org:r({}),sub:r({}),plan_list:r([{}]),create_org:r(!0),create_sub:r(!1)}}}),te={class:"row"},se=s("div",{class:"col-1"},null,-1),oe={class:"col-10"},le=s("div",{class:"col-1"},null,-1),ne={class:"row"},ae=s("div",{class:"col-1"},null,-1),re={class:"col-4"},ie=s("div",{class:"col-2"},null,-1),de={class:"col-4"},ue=s("div",{class:"col-1"},null,-1),pe={class:"row"},ce=s("div",{class:"col-1"},null,-1),me={class:"col-4"},be=s("div",{class:"col-2"},null,-1),$e={class:"col-4"},ge=s("div",{class:"col-1"},null,-1),fe={class:"row"},he=s("div",{class:"col-1"},null,-1),ve={class:"col-10"},Ce=s("div",{class:"col-1"},null,-1),_e={class:"row"},ye=s("div",{class:"col-1"},null,-1),Ve={class:"col-4"},we=s("div",{class:"col-2"},null,-1),ke={class:"col-4"},Be=s("div",{class:"col-1"},null,-1);function Se(e,t,$,f,h,u){return m(),g(T,null,[e.create_org==!0?(m(),L(Q,{key:0,style:{width:"700px",height:"360px"}},{default:a(()=>[l(_,null,{default:a(()=>[c(i(e.$t("popups.create_org")),1)]),_:1}),l(y),l(_,null,{default:a(()=>[s("div",te,[se,s("div",oe,[l(p,{modelValue:e.org.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.org.name=o),label:e.$t("name")},null,8,["modelValue","label"])]),le]),s("div",ne,[ae,s("div",re,[l(p,{modelValue:e.org.street,"onUpdate:modelValue":t[1]||(t[1]=o=>e.org.street=o),label:e.$t("street")},null,8,["modelValue","label"])]),ie,s("div",de,[l(p,{modelValue:e.org.plz,"onUpdate:modelValue":t[2]||(t[2]=o=>e.org.plz=o),label:e.$t("plz")},null,8,["modelValue","label"])]),ue]),s("div",pe,[ce,s("div",me,[l(p,{modelValue:e.org.city,"onUpdate:modelValue":t[3]||(t[3]=o=>e.org.city=o),label:e.$t("city")},null,8,["modelValue","label"])]),be,s("div",$e,[l(p,{modelValue:e.org.country,"onUpdate:modelValue":t[4]||(t[4]=o=>e.org.country=o),label:e.$t("country")},null,8,["modelValue","label"])]),ge])]),_:1}),l(y),l(V,{style:{"margin-left":"35%"}},{default:a(()=>[v(l(b,{label:e.$t("cancel")},null,8,["label"]),[[C,-1]]),v(l(b,{color:"primary",label:e.$t("create"),onClick:t[5]||(t[5]=o=>e.createOrg())},null,8,["label"]),[[C,-1]])]),_:1}),l(V,{style:{"margin-left":"20%","margin-top":"-7px"}},{default:a(()=>[l(b,{color:"primary",label:e.$t("popups.create_with_subscription"),onClick:t[6]||(t[6]=o=>(e.create_org=!1,e.create_sub=!0,e.getPlans()))},null,8,["label"])]),_:1})]),_:1})):M("",!0),e.create_sub==!0?(m(),L(Q,{key:1,style:{width:"700px",height:"260px"}},{default:a(()=>[l(_,null,{default:a(()=>[c(i(e.$t("create_subscription")),1)]),_:1}),l(y),l(_,null,{default:a(()=>[s("div",fe,[he,s("div",ve,[l(Z,{modelValue:e.sub.plan,"onUpdate:modelValue":t[7]||(t[7]=o=>e.sub.plan=o),options:e.plan_list,label:e.$t("plan")},null,8,["modelValue","options","label"])]),Ce]),s("div",_e,[ye,s("div",Ve,[l(p,{modelValue:e.sub.start_date,"onUpdate:modelValue":t[8]||(t[8]=o=>e.sub.start_date=o),label:e.$t("start_date")},null,8,["modelValue","label"])]),we,s("div",ke,[l(p,{modelValue:e.sub.end_date,"onUpdate:modelValue":t[9]||(t[9]=o=>e.sub.end_date=o),label:e.$t("end_date")},null,8,["modelValue","label"])]),Be])]),_:1}),l(y),l(V,{style:{"margin-left":"35%"}},{default:a(()=>[v(l(b,{label:e.$t("cancel")},null,8,["label"]),[[C,-1]]),v(l(b,{color:"primary",label:e.$t("create"),onClick:t[10]||(t[10]=o=>e.createOrg())},null,8,["label"]),[[C,-1]])]),_:1})]),_:1})):M("",!0)],64)}var Oe=S(ee,[["render",Se]]);const Te=B({el:"#app",mixins:[w,k],props:{organisation:{type:Object,default:{}}},mounted(){this.user.is_admin=!1,this.user.org_id=this.organisation.org_id},methods:{async createOrg(){await this.userApiService.createUser(this.user)}},setup(){return{userApiService:X,is_admin:r(!1),user:r({})}}}),Ue={class:"row"},Qe=s("div",{class:"col-1"},null,-1),De={class:"col-4"},Le=s("div",{class:"col-1"},null,-1),Me={class:"col-4"},Pe=s("div",{class:"col-1"},null,-1),Ie={class:"row"},Fe=s("div",{class:"col-1"},null,-1),ze={class:"col-4"},Ae=s("div",{class:"col-1"},null,-1),Ee={class:"col-4"},je={class:"col-1"};function qe(e,t,$,f,h,u){return m(),L(Q,{style:{width:"700px",height:"260px"}},{default:a(()=>[l(_,null,{default:a(()=>[c(i(e.$t("popups.create_user")),1)]),_:1}),l(y),l(_,null,{default:a(()=>[s("div",Ue,[Qe,s("div",De,[l(p,{modelValue:e.user.first_name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.user.first_name=o),label:e.$t("first_name")},null,8,["modelValue","label"])]),Le,s("div",Me,[l(p,{modelValue:e.user.last_name,"onUpdate:modelValue":t[1]||(t[1]=o=>e.user.last_name=o),label:e.$t("last_name")},null,8,["modelValue","label"])]),Pe]),s("div",Ie,[Fe,s("div",ze,[l(p,{modelValue:e.user.email,"onUpdate:modelValue":t[2]||(t[2]=o=>e.user.email=o),label:e.$t("email")},null,8,["modelValue","label"])]),Ae,s("div",Ee,[l(p,{type:"password",modelValue:e.user.password,"onUpdate:modelValue":t[3]||(t[3]=o=>e.user.password=o),label:e.$t("password")},null,8,["modelValue","label"])]),s("div",je,[l(x,{style:{"margin-top":"20px","margin-left":"15px"},modelValue:e.user.is_admin,"onUpdate:modelValue":t[4]||(t[4]=o=>e.user.is_admin=o),dense:"",flat:"","toggle-indeterminate":!1,label:e.user.is_admin?e.$t("admin"):e.$t("user")},null,8,["modelValue","label"])])])]),_:1}),l(y),l(V,{style:{"margin-left":"35%"}},{default:a(()=>[v(l(b,{label:e.$t("cancel")},null,8,["label"]),[[C,-1]]),v(l(b,{color:"primary",label:e.$t("create"),onClick:t[5]||(t[5]=o=>e.createOrg())},null,8,["label"]),[[C,-1]])]),_:1})]),_:1})}var Ne=S(Te,[["render",qe]]);const Ke=B({el:"#app",mixins:[w,k],components:{CreateUserPop:Ne,CreateOrgPop:Oe},watch:{organisations:{handler:function(e){this.orgs=e}}},mounted(){this.getOrgData()},methods:{async getOrgData(){await this.useDocbitOrgStore.getOrgsFromServer("1")},openOrgMenu(e){this.$router.push("/client/"+e.org_id)},async deleteOrg(){await this.useDocbitOrgStore.deleteOrg(this.selected_org.org_id,this.selected_org)},applyFilter(){this.orgs=[],this.organisations.forEach(e=>{e:for(const t in e){if(e[t]==null)continue;if(e[t].toString().toLowerCase().includes(this.search_filter.toLowerCase())){this.orgs.push(e);break e}}})},sortTable(e,t){this.sortColumn=e,this.sortOrder=t,this.sortedColumns()},getSortButtonClass(e,t){return{"active-sort-button":this.sortColumn===e&&this.sortOrder===t,"sort-button":!0}},sortedColumns(){const e=this.orgs,t=this.sortColumn,$=this.sortOrder;t&&e.sort((f,h)=>{let u=f[t],o=h[t];return typeof u=="string"&&(u=u.toLowerCase()),typeof o=="string"&&(o=o.toLowerCase()),$==="asc"?u>o?1:-1:u<o?1:-1}),this.orgs=e}},setup(){const e=P(),{organisations:t}=j(e);return{useDocbitOrgStore:e,organisations:t,sub_id:r(""),org_id:r(""),search_filter:r(""),sortColumn:"",sortOrder:"",selected_org:r({}),openCreateMenu:r(!1),orgs:r([]),currentOrg:r({}),create_user:r(!1),confirmDelete:r(!1),show_subscription_menu:r(!1)}}}),Ye=e=>(N("data-v-6e2ab8de"),e=e(),K(),e),Re={class:"",style:{margin:"20px"}},Ge={class:"row",style:{"margin-bottom":"10px"}},He=Ye(()=>s("div",{class:"col-8"},null,-1)),Je={class:"first-header-content"},We={class:"sort-buttons"},Xe={class:"middle-header-content"},Ze={class:"sort-buttons"},xe={class:"middle-header-content"},et={class:"sort-buttons"},tt={class:"middle-header-content"},st={class:"sort-buttons"},ot={class:"middle-header-content"},lt={class:"sort-buttons"},nt={class:"text-right table-header"},at=["onClick"],rt={class:"text-left"},it={class:"text-center"},dt={class:"text-center"},ut={class:"text-center"},pt={class:"text-center"},ct={class:"text-right"},mt={class:"text-green-14"},bt={class:"text-red-14"},$t={class:"q-ml-sm"};function gt(e,t,$,f,h,u){const o=U("CreateOrgPop"),O=U("CreateUserPop");return m(),g(T,null,[s("div",Re,[s("div",Ge,[l(p,{class:"col-3",outlined:"",dense:"",modelValue:e.search_filter,"onUpdate:modelValue":[t[0]||(t[0]=n=>e.search_filter=n),t[1]||(t[1]=n=>e.applyFilter())],debounce:"500",label:e.$t("search.organisation")},null,8,["modelValue","label"]),He,l(b,{class:"col-1",color:"primary",label:e.$t("create"),onClick:t[2]||(t[2]=n=>e.openCreateMenu=!0)},null,8,["label"])]),l(Y,{flat:"",class:"sticky-column-for-table q-table-seperator",style:{"max-height":"80vh",overflow:"auto"},dense:""},{default:a(()=>[s("thead",null,[s("tr",null,[s("th",null,[s("div",Je,[c(i(e.$t("name"))+" ",1),s("div",We,[s("button",{onClick:t[3]||(t[3]=n=>e.sortTable("name","asc")),class:d([e.getSortButtonClass("name","asc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[4]||(t[4]=n=>e.sortTable("name","desc")),class:d([e.getSortButtonClass("name","desc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",Xe,[c(i(e.$t("subscribed"))+" ",1),s("div",Ze,[s("button",{onClick:t[5]||(t[5]=n=>e.sortTable("subscribed","asc")),class:d([e.getSortButtonClass("subscribed","asc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[6]||(t[6]=n=>e.sortTable("subscribed","desc")),class:d([e.getSortButtonClass("subscribed","desc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",xe,[c(i(e.$t("created_on"))+" ",1),s("div",et,[s("button",{onClick:t[7]||(t[7]=n=>e.sortTable("created_on","desc")),class:d([e.getSortButtonClass("created_on","desc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[8]||(t[8]=n=>e.sortTable("created_on","asc")),class:d([e.getSortButtonClass("created_on","asc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",tt,[c(i(e.$t("user"))+" ",1),s("div",st,[s("button",{onClick:t[9]||(t[9]=n=>e.sortTable("user","desc")),class:d([e.getSortButtonClass("user","desc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[10]||(t[10]=n=>e.sortTable("user","asc")),class:d([e.getSortButtonClass("user","asc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",ot,[c(i(e.$t("pages"))+" ",1),s("div",lt,[s("button",{onClick:t[11]||(t[11]=n=>e.sortTable("pages","desc")),class:d([e.getSortButtonClass("pages","desc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[12]||(t[12]=n=>e.sortTable("pages","asc")),class:d([e.getSortButtonClass("pages","asc"),"sort-button"])}," \u25BC ",2)])])]),s("th",nt,i(e.$t("actions")),1)])]),s("tbody",null,[(m(!0),g(T,null,q(e.orgs,n=>(m(),g("tr",{key:n,onClick:I=>e.openOrgMenu(n)},[s("td",rt,i(n.name),1),s("td",it,i(e.$t(n.subscribed)),1),s("td",dt,i(new Date(n.created_on).toLocaleDateString()),1),s("td",ut,i(n.user),1),s("td",pt,i(n.pages)+" / Year",1),s("td",ct,[l(b,{flat:"",dense:"",round:"",onClick:t[13]||(t[13]=G(()=>{},["stop","prevent"])),icon:"more_horiz"},{default:a(()=>[l(H,{"auto-close":"","transition-show":"jump-down","transition-hide":"jump-up",anchor:"bottom middle",self:"top middle"},{default:a(()=>[l(J,{dense:"",style:{"min-width":"100px"}},{default:a(()=>[l(y,{inset:""}),l(z,{clickable:""},{default:a(()=>[l(A,{onClick:I=>{e.selected_org=n,e.create_user=!0}},{default:a(()=>[s("span",mt,i(e.$t("create_user")),1)]),_:2},1032,["onClick"])]),_:2},1024),l(z,{clickable:""},{default:a(()=>[l(A,{onClick:I=>{e.selected_org=n,e.confirmDelete=!0}},{default:a(()=>[s("span",bt,i(e.$t("delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])],8,at))),128))])]),_:1})]),l(D,{modelValue:e.openCreateMenu,"onUpdate:modelValue":t[14]||(t[14]=n=>e.openCreateMenu=n),onKeydown:t[15]||(t[15]=F(n=>e.openCreateMenu=!1,["esc"])),persistent:""},{default:a(()=>[l(o)]),_:1},8,["modelValue"]),l(D,{modelValue:e.create_user,"onUpdate:modelValue":t[16]||(t[16]=n=>e.create_user=n),onKeydown:t[17]||(t[17]=F(n=>e.create_user=!1,["esc"])),persistent:""},{default:a(()=>[l(O,{organisation:e.selected_org},null,8,["organisation"])]),_:1},8,["modelValue"]),l(D,{modelValue:e.confirmDelete,"onUpdate:modelValue":t[19]||(t[19]=n=>e.confirmDelete=n),persistent:""},{default:a(()=>[l(Q,null,{default:a(()=>[l(_,{class:"row",style:{"justify-content":"center",display:"flex"}},{default:a(()=>[l(R,{icon:"warning",color:"primary","text-color":"white"})]),_:1}),l(_,{class:"row items-center"},{default:a(()=>[s("span",$t,i(e.$t("popups.msg_delete")),1)]),_:1}),l(V,{align:"right"},{default:a(()=>[v(l(b,{flat:"",label:e.$t("cancel"),color:"primary"},null,8,["label"]),[[C]]),v(l(b,{flat:"",label:e.$t("done"),color:"primary",onClick:t[18]||(t[18]=n=>e.deleteOrg())},null,8,["label"]),[[C]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var ft=S(Ke,[["render",gt],["__scopeId","data-v-6e2ab8de"]]);const ht=B({el:"#app",mixins:[w,k,E],components:{},watch:{organisations:{handler:function(e){this.orgs=e}}},mounted(){const e=this.getCurrentOrgInLocalStorage();e!=null&&(this.partner_id=e.id),this.getOrgData()},methods:{async getOrgData(){await this.useDocbitOrgStore.getOrgsFromServer("1",this.partner_id)},openOrgMenu(e){this.$router.push("/client/"+e.org_id)},applyFilter(){this.orgs=[],this.organisations.forEach(e=>{e:for(const t in e){if(e[t]==null)continue;if(e[t].toString().toLowerCase().includes(this.search_filter.toLowerCase())){this.orgs.push(e);break e}}})},sortTable(e,t){this.sortColumn=e,this.sortOrder=t,this.sortedColumns()},getSortButtonClass(e,t){return{"active-sort-button":this.sortColumn===e&&this.sortOrder===t,"sort-button":!0}},sortedColumns(){const e=this.orgs,t=this.sortColumn,$=this.sortOrder;t&&e.sort((f,h)=>{let u=f[t],o=h[t];return typeof u=="string"&&(u=u.toLowerCase()),typeof o=="string"&&(o=o.toLowerCase()),$==="asc"?u>o?1:-1:u<o?1:-1}),this.orgs=e}},setup(){const e=P(),{organisations:t}=j(e);return{useDocbitOrgStore:e,organisations:t,sub_id:r(""),org_id:r(""),partner_id:r(""),search_filter:r(""),sortColumn:"",sortOrder:"",selected_org:r({}),openCreateMenu:r(!1),orgs:r([]),currentOrg:r({}),create_user:r(!1),confirmDelete:r(!1),show_subscription_menu:r(!1)}}}),vt=e=>(N("data-v-69db2ad9"),e=e(),K(),e),Ct={class:"",style:{margin:"20px"}},_t={class:"row",style:{"margin-bottom":"10px"}},yt=vt(()=>s("div",{class:"col-8"},null,-1)),Vt={class:"first-header-content"},wt={class:"sort-buttons"},kt={class:"middle-header-content"},Bt={class:"sort-buttons"},St={class:"middle-header-content"},Ot={class:"sort-buttons"},Tt={class:"middle-header-content"},Ut={class:"sort-buttons"},Qt={class:"middle-header-content"},Dt={class:"sort-buttons"},Lt=["onClick"],Mt={class:"text-left"},Pt={class:"text-center"},It={class:"text-center"},Ft={class:"text-center"},zt={class:"text-center"};function At(e,t,$,f,h,u){return m(),g("div",Ct,[s("div",_t,[l(p,{class:"col-3",outlined:"",dense:"",modelValue:e.search_filter,"onUpdate:modelValue":[t[0]||(t[0]=o=>e.search_filter=o),t[1]||(t[1]=o=>e.applyFilter())],debounce:"500",label:e.$t("search.organisation")},null,8,["modelValue","label"]),yt]),l(Y,{flat:"",class:"sticky-column-for-table q-table-seperator",style:{"max-height":"80vh",overflow:"auto"},dense:""},{default:a(()=>[s("thead",null,[s("tr",null,[s("th",null,[s("div",Vt,[c(i(e.$t("name"))+" ",1),s("div",wt,[s("button",{onClick:t[2]||(t[2]=o=>e.sortTable("name","asc")),class:d([e.getSortButtonClass("name","asc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[3]||(t[3]=o=>e.sortTable("name","desc")),class:d([e.getSortButtonClass("name","desc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",kt,[c(i(e.$t("subscribed"))+" ",1),s("div",Bt,[s("button",{onClick:t[4]||(t[4]=o=>e.sortTable("subscribed","asc")),class:d([e.getSortButtonClass("subscribed","asc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[5]||(t[5]=o=>e.sortTable("subscribed","desc")),class:d([e.getSortButtonClass("subscribed","desc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",St,[c(i(e.$t("created_on"))+" ",1),s("div",Ot,[s("button",{onClick:t[6]||(t[6]=o=>e.sortTable("created_on","desc")),class:d([e.getSortButtonClass("created_on","desc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[7]||(t[7]=o=>e.sortTable("created_on","asc")),class:d([e.getSortButtonClass("created_on","asc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",Tt,[c(i(e.$t("user"))+" ",1),s("div",Ut,[s("button",{onClick:t[8]||(t[8]=o=>e.sortTable("user","desc")),class:d([e.getSortButtonClass("user","desc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[9]||(t[9]=o=>e.sortTable("user","asc")),class:d([e.getSortButtonClass("user","asc"),"sort-button"])}," \u25BC ",2)])])]),s("th",null,[s("div",Qt,[c(i(e.$t("pages"))+" ",1),s("div",Dt,[s("button",{onClick:t[10]||(t[10]=o=>e.sortTable("pages","desc")),class:d([e.getSortButtonClass("pages","desc"),"sort-button"])}," \u25B2 ",2),s("button",{onClick:t[11]||(t[11]=o=>e.sortTable("pages","asc")),class:d([e.getSortButtonClass("pages","asc"),"sort-button"])}," \u25BC ",2)])])])])]),s("tbody",null,[(m(!0),g(T,null,q(e.orgs,o=>(m(),g("tr",{key:o,onClick:O=>e.openOrgMenu(o)},[s("td",Mt,i(o.name),1),s("td",Pt,i(e.$t(o.subscribed)),1),s("td",It,i(new Date(o.created_on).toLocaleDateString()),1),s("td",Ft,i(o.user),1),s("td",zt,i(o.pages)+" / Year",1)],8,Lt))),128))])]),_:1})])}var Et=S(ht,[["render",At],["__scopeId","data-v-69db2ad9"]]);const jt=B({el:"#app",mixins:[w,k,E],components:{admin_table:ft,partner_table:Et},mounted(){const e=this.getCurrentOrgInLocalStorage();e!=null&&(this.type=e.type)},methods:{},setup(){return{type:r("")}}}),qt={key:0},Nt={key:1};function Kt(e,t,$,f,h,u){const o=U("admin_table"),O=U("partner_table");return e.type=="management"?(m(),g("div",qt,[l(o)])):e.type=="partner"?(m(),g("div",Nt,[l(O)])):M("",!0)}var os=S(jt,[["render",Kt]]);export{os as default};
