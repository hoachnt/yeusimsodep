import{z as h,j as s,P as n,r as l}from"./index-f37a754a.js";import{e}from"./index-0d5e1eec.js";import{n as p}from"./clsx-1463b71a.js";import{s as g}from"./stitches.config-d2b7a38e.js";import{T as r}from"./Typography-618cd055.js";import{r as i}from"./index-c5e565f8.js";import{f}from"./useCheckingRegister-445c5cb4.js";import{m as j}from"./motion-65f5b15b.js";import"./dimensions-608c05cf.js";const u=g("div",{float:"left",boxSizing:"border-box",pl:"calc($$rowGap / 2)",pr:"calc($$rowGap / 2)"}),b=u,o=({children:t,span:d,offset:a,css:m,...x})=>s.jsx(b,{css:{width:100/12*d+"%",marginLeft:100/12*a+"%",...m},...x,children:t});o.toString=()=>".nextui-column";const y=h.memo(o),c=p(y,{span:12,offset:0}),C=()=>s.jsx(n,{to:"/admin/order",style:{minWidth:"100%"},children:s.jsxs(e,{isPressable:!0,css:{minWidth:"320px",minHeight:"320px",bg:"#000"},children:[s.jsx(e.Body,{css:{position:"absolute",zIndex:1,display:"flex",minHeight:"100%",justifyContent:"center",alignItems:"center",textAlign:"center"},children:s.jsx(c,{children:s.jsx(r,{variant:"h4",color:"white",children:"Xem đơn đặt hàng"})})}),s.jsx(e.Image,{src:"https://cdn.dribbble.com/users/156849/screenshots/6993098/32.gif",objectFit:"cover",width:"100%",height:340,alt:"Card image background"})]})}),v=()=>s.jsx(n,{to:"/admin/finished_order",style:{minWidth:"100%"},children:s.jsx(e,{isPressable:!0,css:{minWidth:"320px",minHeight:"320px",height:"340px"},children:s.jsx(e.Body,{css:{position:"absolute",zIndex:"1",minHeight:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},children:s.jsx(c,{children:s.jsx(r,{variant:"h4",children:"Đơn đặt hàng đã hoàn thành"})})})})});function H(){return s.jsx("div",{children:s.jsxs(i.Container,{gap:2,justify:"center",css:{marginBottom:"62px",padding:"10px 0"},children:[s.jsx(i,{xs:12,sm:6,css:{padding:"10px 10px 0 10px"},children:s.jsx(C,{})}),s.jsx(i,{xs:12,sm:6,css:{padding:"10px 10px 0 10px"},children:s.jsx(v,{})})]})})}const E=()=>{const[t]=f("/admin/login");return l.useEffect(()=>{t()},[]),s.jsx(j.div,{children:s.jsx(H,{})})};export{E as default};
