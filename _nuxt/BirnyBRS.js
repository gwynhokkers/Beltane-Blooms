import{u as L,d as M,x as R,ah as x,ai as E,aj as k,ak as v,ab as e,c as s,N as _,w as o,g as u,al as w,am as q,h as r,P as C,f as d,t as U,e as b,M as H,k as O,F as Q,s as $,an as G,ao as J,I as K,U as W,ap as X}from"./Cm6Dwt9p.js";import{_ as Y,a as Z}from"./BqLgdxG2.js";import tt from"./BHOKeq9I.js";import{_ as et,a as at}from"./B-POBRtY.js";import"./Bz3Eup_L.js";import"./Dnd51l0P.js";function nt(S){let a;return a=L().$nuxtSiteConfig,a||{}}const ot=d("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1),st={class:"text-gray-500 dark:text-gray-400"},rt={class:"flex flex-wrap items-center gap-3 mt-4"},it={key:1},ft=M({__name:"[slug]",async setup(S){var g,h,y;let a,i;const c=R(),{data:t}=([a,i]=x(()=>w(c.path,()=>$(c.path).findOne(),"$9yljQkk6zF")),a=await a,i(),a);if(!t.value)throw E({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:m}=([a,i]=x(()=>w(`${c.path}-surround`,()=>$("/blog").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(G(c.path)),{default:()=>[]})),a=await a,i(),a),p=((g=t.value.head)==null?void 0:g.title)||t.value.title,f=((h=t.value.head)==null?void 0:h.description)||t.value.description;if(k({title:p,ogTitle:p,description:f,ogDescription:f}),(y=t.value.image)!=null&&y.src){const l=nt();k({ogImage:v(l.url,t.value.image.src),twitterImage:v(l.url,t.value.image.src)})}return(l,ct)=>{const B=J,N=K,P=W,D=Y,A=tt,T=et,V=Z,j=at,z=X,F=q;return e(t)?(s(),_(F,{key:0},{default:o(()=>[r(D,{title:e(t).title,description:e(t).description},{headline:o(()=>[r(B,C(e(t).badge,{variant:"subtle"}),null,16),ot,d("time",st,U(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[d("div",rt,[(s(!0),b(Q,null,H(e(t).authors,(n,I)=>(s(),_(P,{key:I,to:n.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r(N,C({ref_for:!0},n.avatar,{alt:n.name,size:"2xs"}),null,16,["alt"]),O(" "+U(n.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(z,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),_(j,{key:0,links:e(t).body.toc.links},null,8,["links"])):u("",!0)]),default:o(()=>[r(V,{prose:""},{default:o(()=>{var n;return[e(t)&&e(t).body?(s(),_(A,{key:0,value:e(t)},null,8,["value"])):u("",!0),(n=e(m))!=null&&n.length?(s(),b("hr",it)):u("",!0),r(T,{surround:e(m)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):u("",!0)}}});export{ft as default};
