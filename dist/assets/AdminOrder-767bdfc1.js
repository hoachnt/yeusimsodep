import{r as n,j as t}from"./index-f37a754a.js";import{O as h}from"./OrderList-2d65e6e5.js";import{s as i}from"./supabase-0398110b.js";import{u,e as f}from"./useFetching-57589e60.js";import{f as x}from"./useCheckingRegister-445c5cb4.js";import{e as y}from"./clear-icon-1bc4aa1e.js";import{T as c}from"./Typography-618cd055.js";import{m as b}from"./motion-65f5b15b.js";import"./index-0d5e1eec.js";import"./clsx-1463b71a.js";import"./stitches.config-d2b7a38e.js";import"./dimensions-608c05cf.js";import"./text-eaa2bdb5.js";import"./object-d51462ff.js";import"./index-c5e565f8.js";const L=()=>{const p=i.channel("orders"),[r,s]=n.useState([]),o="active",[d,m,a]=u(async()=>{let{data:e}=await i.from("orders").select("*").eq("status",o);s(e)}),[l]=x("/admin/login");return n.useEffect(()=>{l(),d()},[]),p.on("postgres_changes",{event:"INSERT",schema:"public",table:"orders"},e=>s([e.new,...r])).on("postgres_changes",{event:"DELETE",schema:"public",table:"orders"},e=>s(r.filter(g=>g.id!==e.old.id))).on("postgres_changes",{event:"UPDATE",schema:"public",table:"orders"},async()=>{let{data:e}=await i.from("orders").select("*").eq("status",o);s(e)}).subscribe(),m?t.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"10px 0"},children:[t.jsx(f,{}),t.jsx(y,{size:"lg"})]}):!r||!r.length?t.jsx(c,{variant:"h3",sx:{textAlign:"center",padding:"10px 0"},children:"Không có đơn đặt hàng bây giờ"}):a?t.jsx(c,{variant:"h3",children:a}):t.jsx(b.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.75,ease:"easeOut"},exit:{opacity:0},style:{padding:"10px 0"},children:t.jsx(h,{orders:r})})};export{L as default};
