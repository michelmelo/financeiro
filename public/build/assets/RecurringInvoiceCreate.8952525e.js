var Z=Object.defineProperty,ee=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var j=(e,i,u)=>i in e?Z(e,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[i]=u,D=(e,i)=>{for(var u in i||(i={}))ie.call(i,u)&&j(e,u,i[u]);if(N)for(var u of N(i))te.call(i,u)&&j(e,u,i[u]);return e},E=(e,i)=>ee(e,ne(i));import{G as P,B as k,a0 as re,k as q,C as O,D as ae,r as g,o as b,e as A,h as v,f as r,u as n,t as L,w as c,l as _,j as B,F as G,$ as oe,J as le,aN as se,L as I,M as p,O as U,aP as ce,T as ue,m as de,i as ge,U as ve}from"./vendor.d12b5734.js";import{_ as me,a as fe,b as ye,c as be,d as Ie,e as $e,f as we}from"./SalesTax.62b51293.js";import{t as H,d as _e,b as Re,m as qe,r as pe}from"./main.06577e8c.js";import{_ as Be}from"./ExchangeRateConverter.51225bb9.js";import{_ as he}from"./CreateCustomFields.0e9a8f21.js";import{_ as Se}from"./TaxTypeModal.2460e971.js";import"./DragIcon.0ee0bf19.js";import"./SelectNotePopup.03759a1f.js";import"./NoteModal.c9873ab1.js";import"./payment.ef8ace9c.js";import"./exchange-rate.4132c0bf.js";const Ve={class:"col-span-5 pr-0"},Ce={class:"flex mt-7"},Fe={class:"relative w-20 mt-8"},Le={class:"ml-2"},Te={class:"p-0 mb-1 leading-snug text-left text-black"},Me={class:"p-0 m-0 text-xs leading-tight text-left text-gray-500",style:{"max-width":"480px"}},ke={class:"grid grid-cols-1 col-span-7 gap-4 mt-8 lg:gap-6 lg:mt-0 lg:grid-cols-2"},Ue={props:{v:{type:Object,default:null},isLoading:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1}},setup(e){const i=e,u=P(),t=H(),V=_e(),$=k(!1),d=re([{label:"None",value:"NONE"},{label:"Date",value:"DATE"},{label:"Count",value:"COUNT"}]),m=q(()=>t.newRecurringInvoice.selectedFrequency&&t.newRecurringInvoice.selectedFrequency.value==="CUSTOM"),T=q(()=>i.isEdit?V.config.recurring_invoice_status.update_status:V.config.recurring_invoice_status.create_status);O(()=>t.newRecurringInvoice.selectedFrequency,l=>{t.isFetchingInitialSettings||(l&&l.value!=="CUSTOM"?t.newRecurringInvoice.frequency=l.value:t.newRecurringInvoice.frequency=null)}),ae(()=>{u.params.id||f()});function R(l){return t.newRecurringInvoice.limit_by===l}const C=oe(()=>{f()},500);async function f(){const l=t.newRecurringInvoice.frequency;if(!l)return;$.value=!0;let a={starts_at:t.newRecurringInvoice.starts_at,frequency:l};try{await t.fetchRecurringInvoiceFrequencyDate(a)}catch(h){console.error(h),$.value=!1}$.value=!1}return(l,a)=>{const h=g("BaseCustomerSelectPopup"),M=g("BaseSwitch"),w=g("BaseDatePicker"),y=g("BaseInputGroup"),S=g("BaseMultiselect"),s=g("BaseInput");return b(),A(G,null,[v("div",Ve,[r(h,{modelValue:n(t).newRecurringInvoice.customer,"onUpdate:modelValue":a[0]||(a[0]=o=>n(t).newRecurringInvoice.customer=o),valid:e.v.customer_id,"content-loading":e.isLoading,type:"recurring-invoice"},null,8,["modelValue","valid","content-loading"]),v("div",Ce,[v("div",Fe,[r(M,{modelValue:n(t).newRecurringInvoice.send_automatically,"onUpdate:modelValue":a[1]||(a[1]=o=>n(t).newRecurringInvoice.send_automatically=o),class:"absolute -top-4"},null,8,["modelValue"])]),v("div",Le,[v("p",Te,L(l.$t("recurring_invoices.send_automatically")),1),v("p",Me,L(l.$t("recurring_invoices.send_automatically_desc")),1)])])]),v("div",ke,[r(y,{label:l.$t("recurring_invoices.starts_at"),"content-loading":e.isLoading,required:"",error:e.v.starts_at.$error&&e.v.starts_at.$errors[0].$message},{default:c(()=>[r(w,{modelValue:n(t).newRecurringInvoice.starts_at,"onUpdate:modelValue":a[2]||(a[2]=o=>n(t).newRecurringInvoice.starts_at=o),"content-loading":e.isLoading,"calendar-button":!0,"calendar-button-icon":"calendar",invalid:e.v.starts_at.$error,onChange:a[3]||(a[3]=o=>f())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),r(y,{label:l.$t("recurring_invoices.next_invoice_date"),"content-loading":e.isLoading,required:""},{default:c(()=>[r(w,{modelValue:n(t).newRecurringInvoice.next_invoice_at,"onUpdate:modelValue":a[4]||(a[4]=o=>n(t).newRecurringInvoice.next_invoice_at=o),"content-loading":e.isLoading,"calendar-button":!0,disabled:!0,loading:$.value,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading","loading"])]),_:1},8,["label","content-loading"]),r(y,{label:l.$t("recurring_invoices.limit_by"),"content-loading":e.isLoading,class:"lg:mt-0",required:"",error:e.v.limit_by.$error&&e.v.limit_by.$errors[0].$message},{default:c(()=>[r(S,{modelValue:n(t).newRecurringInvoice.limit_by,"onUpdate:modelValue":a[5]||(a[5]=o=>n(t).newRecurringInvoice.limit_by=o),"content-loading":e.isLoading,options:n(d),label:"label",invalid:e.v.limit_by.$error,"value-prop":"value"},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"]),R("DATE")?(b(),_(y,{key:0,label:l.$t("recurring_invoices.limit_date"),"content-loading":e.isLoading,required:R("DATE"),error:e.v.limit_date.$error&&e.v.limit_date.$errors[0].$message},{default:c(()=>[r(w,{modelValue:n(t).newRecurringInvoice.limit_date,"onUpdate:modelValue":a[6]||(a[6]=o=>n(t).newRecurringInvoice.limit_date=o),"content-loading":e.isLoading,invalid:e.v.limit_date.$error,"calendar-button-icon":"calendar"},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","required","error"])):B("",!0),R("COUNT")?(b(),_(y,{key:1,label:l.$t("recurring_invoices.count"),"content-loading":e.isLoading,required:R("COUNT"),error:e.v.limit_count.$error&&e.v.limit_count.$errors[0].$message},{default:c(()=>[r(s,{modelValue:n(t).newRecurringInvoice.limit_count,"onUpdate:modelValue":a[7]||(a[7]=o=>n(t).newRecurringInvoice.limit_count=o),"content-loading":e.isLoading,invalid:e.v.limit_count.$error,type:"number"},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","required","error"])):B("",!0),r(y,{label:l.$t("recurring_invoices.status"),required:"","content-loading":e.isLoading,error:e.v.status.$error&&e.v.status.$errors[0].$message},{default:c(()=>[r(S,{modelValue:n(t).newRecurringInvoice.status,"onUpdate:modelValue":a[8]||(a[8]=o=>n(t).newRecurringInvoice.status=o),options:n(T),"content-loading":e.isLoading,invalid:e.v.status.$error,placeholder:l.$t("recurring_invoices.select_a_status"),"value-prop":"value",label:"value"},null,8,["modelValue","options","content-loading","invalid","placeholder"])]),_:1},8,["label","content-loading","error"]),r(y,{label:l.$t("recurring_invoices.frequency.select_frequency"),required:"","content-loading":e.isLoading,error:e.v.selectedFrequency.$error&&e.v.selectedFrequency.$errors[0].$message},{default:c(()=>[r(S,{modelValue:n(t).newRecurringInvoice.selectedFrequency,"onUpdate:modelValue":a[9]||(a[9]=o=>n(t).newRecurringInvoice.selectedFrequency=o),"content-loading":e.isLoading,options:n(t).frequencies,label:"label",invalid:e.v.selectedFrequency.$error,object:"",onChange:f},null,8,["modelValue","content-loading","options","invalid"])]),_:1},8,["label","content-loading","error"]),n(m)?(b(),_(y,{key:2,label:l.$t("recurring_invoices.frequency.title"),"content-loading":e.isLoading,required:"",error:e.v.frequency.$error&&e.v.frequency.$errors[0].$message},{default:c(()=>[r(s,{modelValue:n(t).newRecurringInvoice.frequency,"onUpdate:modelValue":[a[10]||(a[10]=o=>n(t).newRecurringInvoice.frequency=o),n(C)],"content-loading":e.isLoading,disabled:!n(m),invalid:e.v.frequency.$error,loading:$.value},null,8,["modelValue","content-loading","disabled","invalid","loading","onUpdate:modelValue"])]),_:1},8,["label","content-loading","error"])):B("",!0),r(Be,{store:n(t),"store-prop":"newRecurringInvoice",v:e.v,"is-loading":e.isLoading,"is-edit":e.isEdit,"customer-currency":n(t).newRecurringInvoice.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])])],64)}}},xe=["onSubmit"],Ne={class:"flex"},je={class:"grid-cols-12 gap-8 mt-6 mb-8 lg:grid"},De={class:"block mt-10 invoice-foot lg:flex lg:justify-between lg:items-start"},Ee={class:"w-full relative lg:w-1/2"},Ze={setup(e){const i=H(),u=Re(),t=qe(),V=pe(),$="newRecurringInvoice",{t:d}=le();let m=k(!1);const T=k(["customer","company","customerCustom","invoice","invoiceCustom"]);let R=P(),C=se(),f=q(()=>i.isFetchingInvoice||i.isFetchingInitialSettings),l=q(()=>a.value?d("recurring_invoices.edit_invoice"):d("recurring_invoices.new_invoice")),a=q(()=>R.name==="recurring-invoices.edit");const h=q(()=>u.selectedCompanySettings.sales_tax_us_enabled==="YES"&&V.salesTaxUSEnabled),M={starts_at:{required:I.withMessage(d("validation.required"),p)},status:{required:I.withMessage(d("validation.required"),p)},frequency:{required:I.withMessage(d("validation.required"),p)},limit_by:{required:I.withMessage(d("validation.required"),p)},limit_date:{required:I.withMessage(d("validation.required"),U(function(){return i.newRecurringInvoice.limit_by==="DATE"}))},limit_count:{required:I.withMessage(d("validation.required"),U(function(){return i.newRecurringInvoice.limit_by==="COUNT"}))},selectedFrequency:{required:I.withMessage(d("validation.required"),p)},customer_id:{required:I.withMessage(d("validation.required"),p)},exchange_rate:{required:U(function(){return I.withMessage(d("validation.required"),p),i.showExchangeRate}),decimal:I.withMessage(d("validation.valid_exchange_rate"),ce)}},w=ue(M,q(()=>i.newRecurringInvoice),{$scope:$});i.resetCurrentRecurringInvoice(),i.fetchRecurringInvoiceInitialSettings(a.value),t.resetCustomFields(),w.value.$reset,O(()=>i.newRecurringInvoice.customer,s=>{s&&s.currency?i.newRecurringInvoice.currency=s.currency:i.newRecurringInvoice.currency=u.selectedCompanyCurrency});async function y(){if(w.value.$touch(),w.value.$invalid)return!1;m.value=!0;let s=E(D({},i.newRecurringInvoice),{sub_total:i.getSubTotal,total:i.getTotal,tax:i.getTotalTax});R.params.id?i.updateRecurringInvoice(s).then(o=>{o.data.data&&C.push(`/admin/recurring-invoices/${o.data.data.id}/view`),m.value=!1}).catch(o=>{m.value=!1}):S(s)}function S(s){i.addRecurringInvoice(s).then(o=>{o.data.data&&C.push(`/admin/recurring-invoices/${o.data.data.id}/view`),m.value=!1}).catch(o=>{m.value=!1})}return(s,o)=>{const F=g("BaseBreadcrumbItem"),z=g("BaseBreadcrumb"),x=g("BaseButton"),J=g("router-link"),Y=g("BaseIcon"),K=g("BasePageHeader"),Q=g("BaseScrollPane"),W=g("BasePage");return b(),A(G,null,[r(me),r(fe),r(Se),n(h)&&!n(f)?(b(),_(ye,{key:0,store:n(i),"store-prop":"newRecurringInvoice","is-edit":n(a),customer:n(i).newRecurringInvoice.customer},null,8,["store","is-edit","customer"])):B("",!0),r(W,{class:"relative invoice-create-page"},{default:c(()=>[v("form",{onSubmit:ve(y,["prevent"])},[r(K,{title:n(l)},{actions:c(()=>[r(J,{to:`/invoices/pdf/${n(i).newRecurringInvoice.unique_hash}`},{default:c(()=>[s.$route.name==="invoices.edit"?(b(),_(x,{key:0,target:"_blank",class:"mr-3",variant:"primary-outline",type:"button"},{default:c(()=>[v("span",Ne,L(s.$t("general.view_pdf")),1)]),_:1})):B("",!0)]),_:1},8,["to"]),r(x,{loading:n(m),disabled:n(m),variant:"primary",type:"submit"},{left:c(X=>[n(m)?B("",!0):(b(),_(Y,{key:0,name:"SaveIcon",class:de(X.class)},null,8,["class"]))]),default:c(()=>[ge(" "+L(s.$t("recurring_invoices.save_invoice")),1)]),_:1},8,["loading","disabled"])]),default:c(()=>[r(z,null,{default:c(()=>[r(F,{title:s.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),r(F,{title:s.$t("recurring_invoices.title",2),to:"/admin/recurring-invoices"},null,8,["title"]),s.$route.name==="invoices.edit"?(b(),_(F,{key:0,title:s.$t("recurring_invoices.edit_invoice"),to:"#",active:""},null,8,["title"])):(b(),_(F,{key:1,title:n(l),to:"#",active:""},null,8,["title"]))]),_:1})]),_:1},8,["title"]),v("div",je,[r(Ue,{v:n(w),"is-loading":n(f),"is-edit":n(a)},null,8,["v","is-loading","is-edit"])]),r(Q,null,{default:c(()=>[r(be,{currency:n(i).newRecurringInvoice.currency,"is-loading":n(f),"item-validation-scope":$,store:n(i),"store-prop":"newRecurringInvoice"},null,8,["currency","is-loading","store"]),v("div",De,[v("div",Ee,[r(Ie,{store:n(i),"store-prop":"newRecurringInvoice",fields:T.value,type:"Invoice"},null,8,["store","fields"]),r(he,{type:"Invoice","is-edit":n(a),"is-loading":n(f),store:n(i),"store-prop":"newRecurringInvoice","custom-field-scope":$,class:"mb-6"},null,8,["is-edit","is-loading","store"]),r($e,{store:n(i),"store-prop":"newRecurringInvoice"},null,8,["store"])]),r(we,{currency:n(i).newRecurringInvoice.currency,"is-loading":n(f),store:n(i),"store-prop":"newRecurringInvoice","tax-popup-type":"invoice"},null,8,["currency","is-loading","store"])])]),_:1})],40,xe)]),_:1})],64)}}};export{Ze as default};
