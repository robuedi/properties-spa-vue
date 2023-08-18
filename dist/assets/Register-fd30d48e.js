import{u as V,c as D,a as u}from"./index.esm-6a0f3a02.js";import{d as A,u as M,r,o as p,a as b,w as s,b as w,e as t,f as e,m,t as j,g as B,c as P,h as a,i as W,j as z}from"./index-bf000827.js";const G=a("h6",null,"Pick a password",-1),H=a("p",{class:"mt-2"},"Suggestions",-1),J=a("ul",{class:"pl-2 ml-2 mt-0",style:{"line-height":"1.5"}},[a("li",null,"At least one lowercase"),a("li",null,"At least one uppercase"),a("li",null,"At least one numeric"),a("li",null,"Minimum 8 characters")],-1),K={key:0,class:"text-center mt-2"},O=a("strong",null,"Login",-1),Q=A({__name:"RegisterForm",props:{hideLoginLink:{type:Boolean,default:!1}},emits:["registered"],setup(y,{emit:_}){const{hideLoginLink:f}=y,g=M(),{defineComponentBinds:i,handleSubmit:c,errors:o}=V({validationSchema:D({name:u().min(2).required(),email:u().email().required(),password:u().min(6).required(),password_confirmation:u().min(6).required()})}),R=i("name"),F=i("email"),L=i("password"),S=i("password_confirmation"),N=c((k,{setErrors:h,resetForm:d})=>{let n=k;if(!n)throw new Error("Wrong registration fields sent");g.register(n).then(()=>{d(),_("registered",!0)}).catch(l=>{Array.isArray(l.response.data.errors)&&l.response.data.errors.length>0?h({general:l.response.data.errors.flat()}):h(l.response.data.errors)})});return(k,h)=>{const d=r("InputText"),n=r("ErrorFeedback"),l=r("Divider"),x=r("Password"),$=r("InlineMessage"),q=r("BasicForm"),E=r("Button"),I=r("router-link"),T=r("Card");return p(),b(T,{style:{width:"25em"}},{title:s(()=>[w(" Register ")]),content:s(()=>[t(q,{class:"mt-3"},{default:s(()=>{var v;return[t(n,{error:e(o).name},{default:s(()=>[t(d,m({placeholder:"Name",class:"w-full",id:"value"},e(R),{type:"text",name:"name",class:{"p-invalid":!!e(o).name},"aria-describedby":"text-error"}),null,16,["class"])]),_:1},8,["error"]),t(n,{error:e(o).email},{default:s(()=>[t(d,m({placeholder:"Email",class:"w-full",id:"value"},e(F),{type:"text",name:"email",class:{"p-invalid":!!e(o).email},"aria-describedby":"text-error"}),null,16,["class"])]),_:1},8,["error"]),t(n,{error:e(o).password},{default:s(()=>[t(x,m(e(L),{inputClass:"w-full",placeholder:"Password"}),{header:s(()=>[G]),footer:s(()=>[t(l),H,J]),_:1},16)]),_:1},8,["error"]),t(n,{error:e(o).password_confirmation},{default:s(()=>[t(x,m({feedback:!1},e(S),{inputClass:"w-full",placeholder:"Password Confirmation"}),null,16)]),_:1},8,["error"]),(v=e(o))!=null&&v.general?(p(),b($,{key:0,severity:"warn"},{default:s(()=>{var C;return[w(j((C=e(o))==null?void 0:C.general),1)]}),_:1})):B("",!0)]}),_:1})]),footer:s(()=>[t(E,{icon:"pi pi-user",onClick:e(N),class:"w-full",label:"Register"},null,8,["onClick"]),f?B("",!0):(p(),P("p",K,[w(" Already having an account? "),t(I,{class:"text-dark text-weight-bold",style:{"text-decoration":"none"},to:{name:"login"}},{default:s(()=>[O]),_:1})]))]),_:1})}}}),U={class:"grow flex justify-center items-center"},Z=A({__name:"Register",setup(y){const _=W(),f=z(),g=()=>{f.add({severity:"success",summary:"Successful registration",detail:"Please login",life:3e3}),_.push({name:"login"})};return(i,c)=>(p(),P("div",U,[t(Q,{onRegistered:c[0]||(c[0]=o=>g())})]))}});export{Z as default};
