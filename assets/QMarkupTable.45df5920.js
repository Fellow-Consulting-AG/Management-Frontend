import{u as s,b as n}from"./helperMixin.292ad739.js";import{k as u,c as d,h as e,C as b,g as c}from"./index.a3023078.js";const q=["horizontal","vertical","cell","none"];var m=u({name:"QMarkupTable",props:{...s,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:a=>q.includes(a)}},setup(a,{slots:r}){const t=c(),l=n(a,t.proxy.$q),o=d(()=>`q-markup-table q-table__container q-table__card q-table--${a.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(a.dense===!0?" q-table--dense":"")+(a.flat===!0?" q-table--flat":"")+(a.bordered===!0?" q-table--bordered":"")+(a.square===!0?" q-table--square":"")+(a.wrapCells===!1?" q-table--no-wrap":""));return()=>e("div",{class:o.value},[e("table",{class:"q-table"},b(r.default))])}});export{m as Q};
