import{l as S,u as b,j as C,e as x,g}from"./main.06577e8c.js";import{J as E,G as j,aN as T,ah as N,r as l,o as a,l as s,w as t,u as e,f as n,i as p,t as f,j as y}from"./vendor.d12b5734.js";const V={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:()=>{}}},setup(i){const w=i,_=S();b();const v=C(),m=x(),{t:u}=E(),h=j();T(),N("utils");function B(r){v.openDialog({title:u("general.are_you_sure"),message:u("customers.confirm_delete",1),yesLabel:u("general.ok"),noLabel:u("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(c=>{c&&_.deleteCustomer({ids:[r]}).then(o=>{if(o.data.success)return w.loadData&&w.loadData(),!0})})}return(r,c)=>{const o=l("BaseIcon"),I=l("BaseButton"),d=l("BaseDropdownItem"),D=l("router-link"),k=l("BaseDropdown");return a(),s(k,{"content-loading":e(_).isFetchingViewData},{activator:t(()=>[e(h).name==="customers.view"?(a(),s(I,{key:0,variant:"primary"},{default:t(()=>[n(o,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(a(),s(o,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[e(m).hasAbilities(e(g).EDIT_CUSTOMER)?(a(),s(D,{key:0,to:`/admin/customers/${i.row.id}/edit`},{default:t(()=>[n(d,null,{default:t(()=>[n(o,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),p(" "+f(r.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):y("",!0),e(h).name!=="customers.view"&&e(m).hasAbilities(e(g).VIEW_CUSTOMER)?(a(),s(D,{key:1,to:`customers/${i.row.id}/view`},{default:t(()=>[n(d,null,{default:t(()=>[n(o,{name:"EyeIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),p(" "+f(r.$t("general.view")),1)]),_:1})]),_:1},8,["to"])):y("",!0),e(m).hasAbilities(e(g).DELETE_CUSTOMER)?(a(),s(d,{key:2,onClick:c[0]||(c[0]=$=>B(i.row.id))},{default:t(()=>[n(o,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),p(" "+f(r.$t("general.delete")),1)]),_:1})):y("",!0)]),_:1},8,["content-loading"])}}};export{V as _};
