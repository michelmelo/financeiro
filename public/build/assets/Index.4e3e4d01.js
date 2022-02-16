import{J as ie,B as E,a0 as ce,k as C,aR as de,aS as pe,r as s,o as f,l as b,w as t,f as a,q as Y,ag as R,u as l,m as g,i as d,t as c,j as S,V as W,h as p,x as F}from"./vendor.d12b5734.js";import{b as ye,j as _e,e as fe,g as B}from"./main.06577e8c.js";import{u as be}from"./payment.ef8ace9c.js";import{_ as Be}from"./CapsuleIcon.37dfa933.js";import{_ as ve,a as he}from"./SendPaymentModal.683ff2db.js";import"./mail-driver.cbcca12d.js";const ge={class:"relative table-container"},Ce={class:"relative flex items-center justify-end h-5"},ke={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Pe={class:"absolute items-center left-6 top-2.5 select-none"},Ie={class:"relative block"},Me={setup($e){const{t:i}=ie();let v=E(!1),k=E(!0),y=E(null);const r=ce({customer:"",payment_mode:"",payment_number:""}),m=be();ye();const H=_e(),P=fe(),M=C(()=>!m.paymentTotalCount&&!k.value),L=C(()=>[{key:"status",sortable:!1,thClass:"extra w-10",tdClass:"text-left text-sm font-medium extra"},{key:"payment_date",label:i("payments.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"payment_number",label:i("payments.payment_number")},{key:"name",label:i("payments.customer")},{key:"payment_mode",label:i("payments.payment_mode")},{key:"invoice_number",label:i("invoices.invoice_number")},{key:"amount",label:i("payments.amount")},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]),I=C({get:()=>m.selectedPayments,set:n=>m.selectPayment(n)}),$=C({get:()=>m.selectAllField,set:n=>m.setSelectAllState(n)});de(r,()=>{J()},{debounce:500}),pe(()=>{m.selectAllField&&m.selectAllPayments()}),m.fetchPaymentModes({limit:"all"});async function z(n){return(await m.fetchPaymentModes({search:n})).data.data}function G(){return P.hasAbilities([B.DELETE_PAYMENT,B.EDIT_PAYMENT,B.VIEW_PAYMENT,B.SEND_PAYMENT])}async function q({page:n,filter:o,sort:h}){let V={customer_id:r.customer_id,payment_method_id:r.payment_mode!==null?r.payment_mode:"",payment_number:r.payment_number,orderByField:h.fieldName||"created_at",orderBy:h.order||"desc",page:n};k.value=!0;let u=await m.fetchPayments(V);return k.value=!1,{data:u.data.data,pagination:{totalPages:u.data.meta.last_page,currentPage:n,totalCount:u.data.meta.total,limit:10}}}function D(){y.value&&y.value.refresh()}function J(){D()}function N(){r.customer_id="",r.payment_mode="",r.payment_number=""}function O(){v.value&&N(),v.value=!v.value}function X(){H.openDialog({title:i("general.are_you_sure"),message:i("payments.confirm_delete",2),yesLabel:i("general.ok"),noLabel:i("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(n=>{n&&m.deleteMultiplePayments().then(o=>{o.data.success&&D()})})}return(n,o)=>{const h=s("BaseBreadcrumbItem"),V=s("BaseBreadcrumb"),u=s("BaseIcon"),T=s("BaseButton"),K=s("BasePageHeader"),Q=s("BaseCustomerSelectInput"),A=s("BaseInputGroup"),Z=s("BaseInput"),ee=s("BaseMultiselect"),te=s("BaseFilterWrapper"),ae=s("BaseEmptyPlaceholder"),ne=s("BaseDropdownItem"),le=s("BaseDropdown"),j=s("BaseCheckbox"),se=s("router-link"),oe=s("BaseText"),me=s("BaseFormatMoney"),re=s("BaseTable"),ue=s("BasePage");return f(),b(ue,{class:"payments"},{default:t(()=>[a(ve),a(K,{title:n.$t("payments.title")},{actions:t(()=>[Y(a(T,{variant:"primary-outline",onClick:O},{right:t(e=>[l(v)?(f(),b(u,{key:1,name:"XIcon",class:g(e.class)},null,8,["class"])):(f(),b(u,{key:0,class:g(e.class),name:"FilterIcon"},null,8,["class"]))]),default:t(()=>[d(c(n.$t("general.filter"))+" ",1)]),_:1},512),[[R,l(m).paymentTotalCount]]),l(P).hasAbilities(l(B).CREATE_PAYMENT)?(f(),b(T,{key:0,variant:"primary",class:"ml-4",onClick:o[0]||(o[0]=e=>n.$router.push("/admin/payments/create"))},{left:t(e=>[a(u,{name:"PlusIcon",class:g(e.class)},null,8,["class"])]),default:t(()=>[d(" "+c(n.$t("payments.add_payment")),1)]),_:1})):S("",!0)]),default:t(()=>[a(V,null,{default:t(()=>[a(h,{title:n.$t("general.home"),to:"dashboard"},null,8,["title"]),a(h,{title:n.$tc("payments.payment",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),a(te,{show:l(v),class:"mt-3",onClear:N},{default:t(()=>[a(A,{label:n.$t("payments.customer")},{default:t(()=>[a(Q,{modelValue:l(r).customer_id,"onUpdate:modelValue":o[1]||(o[1]=e=>l(r).customer_id=e),placeholder:n.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(A,{label:n.$t("payments.payment_number")},{default:t(()=>[a(Z,{modelValue:l(r).payment_number,"onUpdate:modelValue":o[2]||(o[2]=e=>l(r).payment_number=e)},{left:t(e=>[a(u,{name:"HashtagIcon",class:g(e.class)},null,8,["class"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(A,{label:n.$t("payments.payment_mode")},{default:t(()=>[a(ee,{modelValue:l(r).payment_mode,"onUpdate:modelValue":o[3]||(o[3]=e=>l(r).payment_mode=e),"value-prop":"id","track-by":"name","filter-results":!1,label:"name","resolve-on-load":"",delay:500,searchable:"",options:z},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),l(M)?(f(),b(ae,{key:0,title:n.$t("payments.no_payments"),description:n.$t("payments.list_of_payments")},W({default:t(()=>[a(Be,{class:"mt-5 mb-4"})]),_:2},[l(P).hasAbilities(l(B).CREATE_PAYMENT)?{name:"actions",fn:t(()=>[a(T,{variant:"primary-outline",onClick:o[4]||(o[4]=e=>n.$router.push("/admin/payments/create"))},{left:t(e=>[a(u,{name:"PlusIcon",class:g(e.class)},null,8,["class"])]),default:t(()=>[d(" "+c(n.$t("payments.add_new_payment")),1)]),_:1})])}:void 0]),1032,["title","description"])):S("",!0),Y(p("div",ge,[p("div",Ce,[l(m).selectedPayments.length?(f(),b(le,{key:0},{activator:t(()=>[p("span",ke,[d(c(n.$t("general.actions"))+" ",1),a(u,{name:"ChevronDownIcon"})])]),default:t(()=>[a(ne,{onClick:X},{default:t(()=>[a(u,{name:"TrashIcon",class:"mr-3 text-gray-600"}),d(" "+c(n.$t("general.delete")),1)]),_:1})]),_:1})):S("",!0)]),a(re,{ref:(e,_)=>{_.tableComponent=e,F(y)?y.value=e:y=e},data:q,columns:l(L),"placeholder-count":l(m).paymentTotalCount>=20?10:5,class:"mt-3"},W({header:t(()=>[p("div",Pe,[a(j,{modelValue:l($),"onUpdate:modelValue":o[5]||(o[5]=e=>F($)?$.value=e:null),variant:"primary",onChange:l(m).selectAllPayments},null,8,["modelValue","onChange"])])]),"cell-status":t(({row:e})=>[p("div",Ie,[a(j,{id:e.id,modelValue:l(I),"onUpdate:modelValue":o[6]||(o[6]=_=>F(I)?I.value=_:null),value:e.data.id,variant:"primary"},null,8,["id","modelValue","value"])])]),"cell-payment_date":t(({row:e})=>[d(c(e.data.formatted_payment_date),1)]),"cell-payment_number":t(({row:e})=>[a(se,{to:{path:`payments/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:t(()=>[d(c(e.data.payment_number),1)]),_:2},1032,["to"])]),"cell-name":t(({row:e})=>[a(oe,{text:e.data.customer.name,length:30,tag:"span"},null,8,["text"])]),"cell-payment_mode":t(({row:e})=>[p("span",null,c(e.data.payment_method?e.data.payment_method.name:"-"),1)]),"cell-invoice_number":t(({row:e})=>{var _,x,w,U;return[p("span",null,c(((x=(_=e==null?void 0:e.data)==null?void 0:_.invoice)==null?void 0:x.invoice_number)?(U=(w=e==null?void 0:e.data)==null?void 0:w.invoice)==null?void 0:U.invoice_number:"-"),1)]}),"cell-amount":t(({row:e})=>[a(me,{amount:e.data.amount,currency:e.data.customer.currency},null,8,["amount","currency"])]),_:2},[G()?{name:"cell-actions",fn:t(({row:e})=>[a(he,{row:e.data,table:l(y)},null,8,["row","table"])])}:void 0]),1032,["columns","placeholder-count"])],512),[[R,!l(M)]])]),_:1})}}};export{Me as default};
