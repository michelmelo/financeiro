import{D as L,_ as F,a as R}from"./EstimateIcon.6d86d768.js";import{o as c,e as C,m as j,h as t,r,l as p,w as i,f as a,g as W,t as _,aj as z,a as q,d as H,ah as V,u as e,j as v,i as y,B as D,C as U,J as Z,k as M,V as N,G,aN as J,D as Y}from"./vendor.d12b5734.js";import{_ as T,h as K,b as O,e as E,g as h}from"./main.06577e8c.js";import{_ as Q}from"./LineChart.94a9cd5f.js";import{_ as X}from"./InvoiceIndexDropdown.50db2ca9.js";import{_ as tt}from"./EstimateIndexDropdown.8f4bf538.js";const et=t("circle",{cx:"25",cy:"25",r:"25",fill:"#EAF1FB"},null,-1),at=t("path",{d:"M28.2656 23.0547C27.3021 24.0182 26.1302 24.5 24.75 24.5C23.3698 24.5 22.1849 24.0182 21.1953 23.0547C20.2318 22.0651 19.75 20.8802 19.75 19.5C19.75 18.1198 20.2318 16.9479 21.1953 15.9844C22.1849 14.9948 23.3698 14.5 24.75 14.5C26.1302 14.5 27.3021 14.9948 28.2656 15.9844C29.2552 16.9479 29.75 18.1198 29.75 19.5C29.75 20.8802 29.2552 22.0651 28.2656 23.0547ZM28.2656 25.75C29.6979 25.75 30.9219 26.2708 31.9375 27.3125C32.9792 28.3281 33.5 29.5521 33.5 30.9844V32.625C33.5 33.1458 33.3177 33.5885 32.9531 33.9531C32.5885 34.3177 32.1458 34.5 31.625 34.5H17.875C17.3542 34.5 16.9115 34.3177 16.5469 33.9531C16.1823 33.5885 16 33.1458 16 32.625V30.9844C16 29.5521 16.5078 28.3281 17.5234 27.3125C18.5651 26.2708 19.8021 25.75 21.2344 25.75H21.8984C22.8099 26.1667 23.7604 26.375 24.75 26.375C25.7396 26.375 26.6901 26.1667 27.6016 25.75H28.2656Z",fill:"currentColor"},null,-1),st=[et,at],ot={props:{colorClass:{type:String,default:"text-primary-500"}},setup(d){return(o,s)=>(c(),C("svg",{width:"50",height:"50",viewBox:"0 0 50 50",class:j(d.colorClass),fill:"none",xmlns:"http://www.w3.org/2000/svg"},st,2))}},lt={},nt={class:"flex items-center"};function ct(d,o){const s=r("BaseContentPlaceholdersText"),n=r("BaseContentPlaceholdersBox"),u=r("BaseContentPlaceholders");return c(),p(u,{rounded:!0,class:"relative flex justify-between w-full p-3 bg-white rounded shadow lg:col-span-3 xl:p-4"},{default:i(()=>[t("div",null,[a(s,{class:"h-5 -mb-1 w-14 xl:mb-6 xl:h-7",lines:1}),a(s,{class:"h-3 w-28 xl:h-4",lines:1})]),t("div",nt,[a(n,{circle:!0,class:"w-10 h-10 xl:w-12 xl:h-12"})])]),_:1})}var rt=T(lt,[["render",ct]]);const it={},dt={class:"flex items-center"};function ut(d,o){const s=r("BaseContentPlaceholdersText"),n=r("BaseContentPlaceholdersBox"),u=r("BaseContentPlaceholders");return c(),p(u,{rounded:!0,class:"relative flex justify-between w-full p-3 bg-white rounded shadow lg:col-span-2 xl:p-4"},{default:i(()=>[t("div",null,[a(s,{class:"w-12 h-5 -mb-1 xl:mb-6 xl:h-7",lines:1}),a(s,{class:"w-20 h-3 xl:h-4",lines:1})]),t("div",dt,[a(n,{circle:!0,class:"w-10 h-10 xl:w-12 xl:h-12"})])]),_:1})}var mt=T(it,[["render",ut]]);const _t={class:"text-xl font-semibold leading-tight text-black xl:text-3xl"},ht={class:"block mt-1 text-sm leading-tight text-gray-500 xl:text-lg"},pt={class:"flex items-center"},B={props:{iconComponent:{type:Object,required:!0},loading:{type:Boolean,default:!1},route:{type:String,required:!0},label:{type:String,required:!0},large:{type:Boolean,default:!1}},setup(d){return(o,s)=>{const n=r("router-link");return d.loading?d.large?(c(),p(rt,{key:1})):(c(),p(mt,{key:2})):(c(),p(n,{key:0,class:j(["relative flex justify-between p-3 bg-white rounded shadow hover:bg-gray-50 xl:p-4 lg:col-span-2",{"lg:!col-span-3":d.large}]),to:d.route},{default:i(()=>[t("div",null,[t("span",_t,[W(o.$slots,"default")]),t("span",ht,_(d.label),1)]),t("div",pt,[(c(),p(z(d.iconComponent),{class:"w-10 h-10 xl:w-12 xl:h-12"}))])]),_:3},8,["class","to"]))}}},S=(d=!1)=>(d?window.pinia.defineStore:H)({id:"dashboard",state:()=>({stats:{totalAmountDue:0,totalCustomerCount:0,totalInvoiceCount:0,totalEstimateCount:0},chartData:{months:[],invoiceTotals:[],expenseTotals:[],receiptTotals:[],netIncomeTotals:[]},totalSales:null,totalReceipts:null,totalExpenses:null,totalNetIncome:null,recentDueInvoices:[],recentEstimates:[],isDashboardDataLoaded:!1}),actions:{loadData(s){return new Promise((n,u)=>{q.get("/api/v1/dashboard",{params:s}).then(l=>{this.stats.totalAmountDue=l.data.total_amount_due,this.stats.totalCustomerCount=l.data.total_customer_count,this.stats.totalInvoiceCount=l.data.total_invoice_count,this.stats.totalEstimateCount=l.data.total_estimate_count,this.chartData&&l.data.chart_data&&(this.chartData.months=l.data.chart_data.months,this.chartData.invoiceTotals=l.data.chart_data.invoice_totals,this.chartData.expenseTotals=l.data.chart_data.expense_totals,this.chartData.receiptTotals=l.data.chart_data.receipt_totals,this.chartData.netIncomeTotals=l.data.chart_data.net_income_totals),this.totalSales=l.data.total_sales,this.totalReceipts=l.data.total_receipts,this.totalExpenses=l.data.total_expenses,this.totalNetIncome=l.data.total_net_income,this.recentDueInvoices=l.data.recent_due_invoices,this.recentEstimates=l.data.recent_estimates,this.isDashboardDataLoaded=!0,n(l)}).catch(l=>{K(l),u(l)})})}}})(),bt={class:"grid gap-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-8"},xt={setup(d){V("utils");const o=S(),s=O(),n=E();return(u,l)=>{const f=r("BaseFormatMoney");return c(),C("div",bt,[e(n).hasAbilities(e(h).VIEW_INVOICE)?(c(),p(B,{key:0,"icon-component":L,loading:!e(o).isDashboardDataLoaded,route:"/admin/invoices",large:!0,label:u.$t("dashboard.cards.due_amount")},{default:i(()=>[a(f,{amount:e(o).stats.totalAmountDue,currency:e(s).selectedCompanyCurrency},null,8,["amount","currency"])]),_:1},8,["loading","label"])):v("",!0),e(n).hasAbilities(e(h).VIEW_CUSTOMER)?(c(),p(B,{key:1,"icon-component":ot,loading:!e(o).isDashboardDataLoaded,route:"/admin/customers",label:u.$t("dashboard.cards.customers")},{default:i(()=>[y(_(e(o).stats.totalCustomerCount),1)]),_:1},8,["loading","label"])):v("",!0),e(n).hasAbilities(e(h).VIEW_INVOICE)?(c(),p(B,{key:2,"icon-component":F,loading:!e(o).isDashboardDataLoaded,route:"/admin/invoices",label:u.$t("dashboard.cards.invoices")},{default:i(()=>[y(_(e(o).stats.totalInvoiceCount),1)]),_:1},8,["loading","label"])):v("",!0),e(n).hasAbilities(e(h).VIEW_ESTIMATE)?(c(),p(B,{key:3,"icon-component":R,loading:!e(o).isDashboardDataLoaded,route:"/admin/estimates",label:u.$t("dashboard.cards.estimates")},{default:i(()=>[y(_(e(o).stats.totalEstimateCount),1)]),_:1},8,["loading","label"])):v("",!0)])}}},ft={},gt={class:"grid grid-cols-1 col-span-10 px-4 py-5 lg:col-span-7 xl:col-span-8 sm:p-8"},yt={class:"flex items-center justify-between mb-2 xl:mb-4"},Ct={class:"grid grid-cols-3 col-span-10 text-center border-t border-l border-gray-200 border-solid lg:border-t-0 lg:text-right lg:col-span-3 xl:col-span-2 lg:grid-cols-1"},vt={class:"flex flex-col items-center justify-center p-6 lg:justify-end lg:items-end"},wt={class:"flex flex-col items-center justify-center p-6 lg:justify-end lg:items-end"},$t={class:"flex flex-col items-center justify-center p-6 lg:justify-end lg:items-end"},Dt={class:"flex flex-col items-center justify-center col-span-3 p-6 border-t border-gray-200 border-solid lg:justify-end lg:items-end lg:col-span-1"};function Et(d,o){const s=r("BaseContentPlaceholdersText"),n=r("BaseContentPlaceholdersBox"),u=r("BaseContentPlaceholders");return c(),p(u,{class:"grid grid-cols-10 mt-8 bg-white rounded shadow"},{default:i(()=>[t("div",gt,[t("div",yt,[a(s,{class:"h-10 w-36",lines:1}),a(s,{class:"h-10 w-36 !mt-0",lines:1})]),a(n,{class:"h-80 xl:h-72 sm:w-full"})]),t("div",Ct,[t("div",vt,[a(s,{class:"h-3 w-14 xl:h-4",lines:1}),a(s,{class:"w-20 h-5 xl:h-6",lines:1})]),t("div",wt,[a(s,{class:"h-3 w-14 xl:h-4",lines:1}),a(s,{class:"w-20 h-5 xl:h-6",lines:1})]),t("div",$t,[a(s,{class:"h-3 w-14 xl:h-4",lines:1}),a(s,{class:"w-20 h-5 xl:h-6",lines:1})]),t("div",Dt,[a(s,{class:"h-3 w-14 xl:h-4",lines:1}),a(s,{class:"w-20 h-5 xl:h-6",lines:1})])])]),_:1})}var Bt=T(ft,[["render",Et]]);const It={key:0,class:"grid grid-cols-10 mt-8 bg-white rounded shadow"},Tt={class:"grid grid-cols-1 col-span-10 px-4 py-5 lg:col-span-7 xl:col-span-8 sm:p-6"},St={class:"flex justify-between mt-1 mb-4 flex-col md:flex-row"},kt={class:"flex items-center sw-section-title h-10"},At={class:"w-full my-2 md:m-0 md:w-40 h-10"},Pt={class:"grid grid-cols-3 col-span-10 text-center border-t border-l border-gray-200 border-solid lg:border-t-0 lg:text-right lg:col-span-3 xl:col-span-2 lg:grid-cols-1"},jt={class:"p-6"},Vt={class:"text-xs leading-5 lg:text-sm"},Mt=t("br",null,null,-1),Nt={class:"block mt-1 text-xl font-semibold leading-8 lg:text-2xl"},Ot={class:"p-6"},Lt={class:"text-xs leading-5 lg:text-sm"},Ft=t("br",null,null,-1),Rt={class:"block mt-1 text-xl font-semibold leading-8 lg:text-2xl text-green-400"},Wt={class:"p-6"},zt={class:"text-xs leading-5 lg:text-sm"},qt=t("br",null,null,-1),Ht={class:"block mt-1 text-xl font-semibold leading-8 lg:text-2xl text-red-400"},Ut={class:"col-span-3 p-6 border-t border-gray-200 border-solid lg:col-span-1"},Zt={class:"text-xs leading-5 lg:text-sm"},Gt=t("br",null,null,-1),Jt={class:"block mt-1 text-xl font-semibold leading-8 lg:text-2xl text-primary-500"},Yt={setup(d){const o=S(),s=O();V("utils");const n=E(),u=D(["This year","Previous year"]),l=D("This year");U(l,b=>{b==="Previous year"?f({previous_year:!0}):f()},{immediate:!0});async function f(b){n.hasAbilities(h.DASHBOARD)&&await o.loadData(b)}return(b,w)=>{const I=r("BaseIcon"),g=r("BaseMultiselect"),x=r("BaseFormatMoney");return c(),C("div",null,[e(o).isDashboardDataLoaded?(c(),C("div",It,[t("div",Tt,[t("div",St,[t("h6",kt,[a(I,{name:"ChartSquareBarIcon",class:"text-primary-400 mr-1"}),y(" "+_(b.$t("dashboard.monthly_chart.title")),1)]),t("div",At,[a(g,{modelValue:l.value,"onUpdate:modelValue":w[0]||(w[0]=$=>l.value=$),options:u.value,"allow-empty":!1,"show-labels":!1,placeholder:b.$t("dashboard.select_year"),"can-deselect":!1},null,8,["modelValue","options","placeholder"])])]),a(Q,{invoices:e(o).chartData.invoiceTotals,expenses:e(o).chartData.expenseTotals,receipts:e(o).chartData.receiptTotals,income:e(o).chartData.netIncomeTotals,labels:e(o).chartData.months,class:"sm:w-full"},null,8,["invoices","expenses","receipts","income","labels"])]),t("div",Pt,[t("div",jt,[t("span",Vt,_(b.$t("dashboard.chart_info.total_sales")),1),Mt,t("span",Nt,[a(x,{amount:e(o).totalSales,currency:e(s).selectedCompanyCurrency},null,8,["amount","currency"])])]),t("div",Ot,[t("span",Lt,_(b.$t("dashboard.chart_info.total_receipts")),1),Ft,t("span",Rt,[a(x,{amount:e(o).totalReceipts,currency:e(s).selectedCompanyCurrency},null,8,["amount","currency"])])]),t("div",Wt,[t("span",zt,_(b.$t("dashboard.chart_info.total_expense")),1),qt,t("span",Ht,[a(x,{amount:e(o).totalExpenses,currency:e(s).selectedCompanyCurrency},null,8,["amount","currency"])])]),t("div",Ut,[t("span",Zt,_(b.$t("dashboard.chart_info.net_income")),1),Gt,t("span",Jt,[a(x,{amount:e(o).totalNetIncome,currency:e(s).selectedCompanyCurrency},null,8,["amount","currency"])])])])])):(c(),p(Bt,{key:1}))])}}},Kt={class:"grid grid-cols-1 gap-6 mt-10 xl:grid-cols-2"},Qt={key:0,class:"due-invoices"},Xt={class:"relative z-10 flex items-center justify-between mb-3"},te={class:"mb-0 text-xl font-semibold leading-normal"},ee={key:1,class:"recent-estimates"},ae={class:"relative z-10 flex items-center justify-between mb-3"},se={class:"mb-0 text-xl font-semibold leading-normal"},oe={setup(d){const o=S(),{t:s}=Z(),n=E(),u=D(null),l=D(null),f=M(()=>[{key:"formattedDueDate",label:s("dashboard.recent_invoices_card.due_on")},{key:"user",label:s("dashboard.recent_invoices_card.customer")},{key:"due_amount",label:s("dashboard.recent_invoices_card.amount_due")},{key:"actions",tdClass:"text-right text-sm font-medium pl-0",thClass:"text-right pl-0",sortable:!1}]),b=M(()=>[{key:"formattedEstimateDate",label:s("dashboard.recent_estimate_card.date")},{key:"user",label:s("dashboard.recent_estimate_card.customer")},{key:"total",label:s("dashboard.recent_estimate_card.amount_due")},{key:"actions",tdClass:"text-right text-sm font-medium pl-0",thClass:"text-right pl-0",sortable:!1}]);function w(){return n.hasAbilities([h.DELETE_INVOICE,h.EDIT_INVOICE,h.VIEW_INVOICE,h.SEND_INVOICE])}function I(){return n.hasAbilities([h.CREATE_ESTIMATE,h.EDIT_ESTIMATE,h.VIEW_ESTIMATE,h.SEND_ESTIMATE])}return(g,x)=>{const $=r("BaseButton"),k=r("router-link"),A=r("BaseFormatMoney"),P=r("BaseTable");return c(),C("div",null,[t("div",Kt,[e(n).hasAbilities(e(h).VIEW_INVOICE)?(c(),C("div",Qt,[t("div",Xt,[t("h6",te,_(g.$t("dashboard.recent_invoices_card.title")),1),a($,{size:"sm",variant:"primary-outline",onClick:x[0]||(x[0]=m=>g.$router.push("/admin/invoices"))},{default:i(()=>[y(_(g.$t("dashboard.recent_invoices_card.view_all")),1)]),_:1})]),a(P,{data:e(o).recentDueInvoices,columns:e(f),loading:!e(o).isDashboardDataLoaded},N({"cell-user":i(({row:m})=>[a(k,{to:{path:`invoices/${m.data.id}/view`},class:"font-medium text-primary-500"},{default:i(()=>[y(_(m.data.customer.name),1)]),_:2},1032,["to"])]),"cell-due_amount":i(({row:m})=>[a(A,{amount:m.data.due_amount,currency:m.data.customer.currency},null,8,["amount","currency"])]),_:2},[w()?{name:"cell-actions",fn:i(({row:m})=>[a(X,{row:m.data,table:u.value},null,8,["row","table"])])}:void 0]),1032,["data","columns","loading"])])):v("",!0),e(n).hasAbilities(e(h).VIEW_ESTIMATE)?(c(),C("div",ee,[t("div",ae,[t("h6",se,_(g.$t("dashboard.recent_estimate_card.title")),1),a($,{variant:"primary-outline",size:"sm",onClick:x[1]||(x[1]=m=>g.$router.push("/admin/estimates"))},{default:i(()=>[y(_(g.$t("dashboard.recent_estimate_card.view_all")),1)]),_:1})]),a(P,{data:e(o).recentEstimates,columns:e(b),loading:!e(o).isDashboardDataLoaded},N({"cell-user":i(({row:m})=>[a(k,{to:{path:`estimates/${m.data.id}/view`},class:"font-medium text-primary-500"},{default:i(()=>[y(_(m.data.customer.name),1)]),_:2},1032,["to"])]),"cell-total":i(({row:m})=>[a(A,{amount:m.data.total,currency:m.data.customer.currency},null,8,["amount","currency"])]),_:2},[I()?{name:"cell-actions",fn:i(({row:m})=>[a(tt,{row:m,table:l.value},null,8,["row","table"])])}:void 0]),1032,["data","columns","loading"])])):v("",!0)])])}}},ue={setup(d){const o=G(),s=E(),n=J();return Y(()=>{o.meta.ability&&!s.hasAbilities(o.meta.ability)?n.push({name:"account.settings"}):o.meta.isOwner&&!s.currentUser.is_owner&&n.push({name:"account.settings"})}),(u,l)=>{const f=r("BasePage");return c(),p(f,null,{default:i(()=>[a(xt),a(Yt),a(oe)]),_:1})}}};export{ue as default};
