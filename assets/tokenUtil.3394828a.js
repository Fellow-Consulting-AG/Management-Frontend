import{P as r}from"./helperMixin.f4eae706.js";var a={methods:{setUpLocalStorageOnLogin(t){this.setUserInLocalStorage(t.user.name),this.setTokenInLocalStorage(t.user.token),this.setOrgInLocalStorage(t.name,t.type,t.id),this.setOtherOrgsInLocalStorage(t.orgs),this.addCurrentOrgToOrgObjInStorage()},setUserInLocalStorage(t){r.set("username",t)},getUserInLocalStorage(){return r.getItem("username")},setTokenInLocalStorage(t){r.set("management_token",t),r.remove("login_attempts")},setOrgInLocalStorage(t,e,o){r.set("org",{name:t,type:e,id:o})},setOtherOrgsInLocalStorage(t){r.set("orgs",t)},getCurrentOrgInLocalStorage(){return r.getItem("org")},getOtherOrgsInLocalStorage(){return r.getItem("orgs")},getSpecificOrgFromLocalStorage(t){const e=r.getItem("orgs");if(e){for(const o in e)if(o==t)return e[o]}return null},changeActiveOrg(t){console.log("clicked");const e=this.getSpecificOrgFromLocalStorage(t);e&&this.setOrgInLocalStorage(e.name,e.type,e.id)},addCurrentOrgToOrgObjInStorage(){const t=r.getItem("org");if(t){const e=this.getOtherOrgsInLocalStorage();e&&(e[t.id]=t,r.set("orgs",e))}}}};export{a as t};
