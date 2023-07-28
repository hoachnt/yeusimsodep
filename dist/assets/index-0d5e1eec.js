import{r as n,z as y,j as u}from"./index-f37a754a.js";import{u as B,h as q,b as U,e as X,$ as G,i as J,a as K}from"./useCheckingRegister-445c5cb4.js";import{n as F,a as H}from"./clsx-1463b71a.js";import{k as W,s as p}from"./stitches.config-d2b7a38e.js";import{g as D}from"./dimensions-608c05cf.js";const Q=t=>{const[o,r]=n.useState(()=>typeof t=="function"?t():t),e=n.useRef(t);return n.useEffect(()=>{e.current=o},[o]),[o,i=>{const s=typeof i=="function"?i(e.current):i;e.current=s,r(s)},e]},I=(t,o)=>{if(!t)return 0;const r=t.includes("px")?+t.split("px")[0]:t.includes("%")?+t.split("%")[0]*o*.01:t;return Number.isNaN(+r)?0:+r},Z=t=>{if(!t||typeof window>"u")return{width:0,height:0};const o=t.getBoundingClientRect(),{width:r,height:e}=window.getComputedStyle(t);return{width:I(`${r}`,o.width),height:I(`${e}`,o.height)}},_=t=>{const[o,r]=n.useState({width:0,height:0}),e=()=>{const{width:i,height:s}=Z(t.current);r({width:i,height:s})};return n.useEffect(()=>e(),[t.current]),[o,e]},ee=(t,o=!0)=>{n.useEffect(()=>{const r=()=>t();return o&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[])},te=(t=!1,o)=>{const[r,e]=n.useState(t),[i,s]=n.useState(0),[m,a]=n.useState(0);return{visible:r,x:i,y:m,onClick:c=>{if(!o.current)return;const d=o.current.getBoundingClientRect();e(!0),s(c.clientX-d.left),a(c.clientY-d.top)},onCompleted:()=>{e(!1),s(0),a(0)}}},oe=W({"0%":{opacity:0,transform:"scale(0.25)"},"30%":{opacity:1},"80%":{opacity:.5},"100%":{transform:"scale(28)",opacity:0}}),A=p("div",{position:"absolute",left:0,right:0,top:0,bottom:0,"& svg":{position:"absolute",animation:`350ms linear ${oe}`,animationFillMode:"forwards",width:"$md",height:"$md"}}),re=({visible:t,x:o,y:r,color:e,onCompleted:i,className:s,...m})=>{const a=n.useRef(null),c=Number.isNaN(+r)?0:r-10,d=Number.isNaN(+o)?0:o-10;return n.useEffect(()=>{let h=a.current;if(h)return h.addEventListener("animationend",i),()=>{h&&h.removeEventListener("animationend",i)}}),t?u.jsx(A,{ref:a,className:H("nextui-drip",s),...m,children:u.jsx("svg",{height:"20",style:{top:c,left:d},viewBox:"0 0 20 20",width:"20",children:u.jsx("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:u.jsx("g",{className:"nextui-drip-filler",fill:e,children:u.jsx("rect",{height:"100%",rx:"10",width:"100%"})})})})}):null},ie=y.memo(re),se=F(ie,{visible:!1,x:0,y:0,className:""}),ne=W({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),ae=p("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),ce=p("img",{size:"100%",display:"block"}),de=p("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${ne} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"}),V=y.memo(({opacity:t,css:o,className:r,...e})=>u.jsx(de,{className:H("nextui-image-skeleton",r),css:{opacity:t,...o},...e}));V.toString=()=>".nextui-image-skeleton";const le=F(V,{opacity:.5,className:""}),L=y.forwardRef((t,o)=>{const{src:r,width:e,height:i,showSkeleton:s=!0,className:m,maxDelay:a=3e3,autoResize:c=!1,objectFit:d="scale-down",containerCss:h,css:x,...b}=t,f=B(o),[g,w]=n.useState(!0),[$,P]=n.useState(s),{w:v,h:S}=n.useMemo(()=>({w:e?typeof e=="number"?`${e}px`:e:"auto",h:i?typeof i=="number"?`${i}px`:i:"auto"}),[e,i]),[z,j,N]=Q(S),[C,l]=_(f),O=s&&!!e&&!!i;n.useEffect(()=>{f.current&&f.current.complete&&(w(!1),P(!1))}),n.useEffect(()=>{const R=setTimeout(()=>{O&&P(!1),clearTimeout(R)},a);return()=>clearTimeout(R)},[g]),n.useEffect(()=>{if(!c)return;const R=C.width===0,T=N.current==="auto";!R&&e&&i&&(C.width<e?!T&&j("auto"):T&&j(S))},[C,e]),ee(()=>{c&&l()});const E=n.useMemo(()=>g?"loading":"ready",[g]);return u.jsxs(ae,{className:H("nextui-image-container",`nextui-image--${E}`,m),css:{width:v,height:z,...h},"data-state":E,ready:!g||$,children:[$&&u.jsx(le,{opacity:1}),u.jsx(ce,{ref:f,alt:t.alt||"",className:"nextui-image",css:{objectFit:d,...x},"data-state":E,height:i,src:r,width:e,onLoad:()=>{w(!1)},...b})]})});L.toString=()=>".nextui-image";const ue=y.memo(L),he=p("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),me=p("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}}),M=({height:t,x:o,y:r,align:e,children:i,textColor:s,css:m,...a})=>{const c=n.useMemo(()=>{if(e&&e!=="center")return e==="left"||e==="start"?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}},[e]),d=r?D(r/2):0,h=o?D(o/2):0;return u.jsx(he,{css:{margin:`${d} ${h}`,height:`calc(${t} * 1px)`,...m},role:"separator",...a,children:i&&u.jsx(me,{className:"nextui-divider-text",color:s,css:{...c},children:i})})};M.toString=()=>".nextui-divider";const fe=y.memo(M),pe=F(fe,{x:0,y:0,height:1,align:"center"}),ge=t=>{const{ref:o,disableAnimation:r=!1,disableRipple:e=!1,variant:i="shadow",isHoverable:s=!1,borderWeight:m="light",isPressable:a=!1,onClick:c,onPress:d,autoFocus:h,allowTextSelectionOnPress:x=!0,...b}=t,f=B(o),{onClick:g,...w}=te(!1,f),$=l=>{r||e||!f.current||g(l)},{isPressed:P,pressProps:v}=q({isDisabled:!a,onPress:l=>{l.pointerType!=="keyboard"&&l.pointerType!=="virtual"||($(l),c==null||c(l)),d==null||d(l)},allowTextSelectionOnPress:x,...b}),{hoverProps:S,isHovered:z}=U({isDisabled:!s,...b}),{isFocusVisible:j,focusProps:N}=X({autoFocus:h});v.onClick=l=>{a&&($(l),c==null||c(l))};const C=n.useCallback((l={})=>({...G(a?{...v,...N}:{},s?S:{},b,l)}),[a,s,v,N,S,b]);return{cardRef:f,variant:i,borderWeight:m,isPressable:a,isHovered:z,isPressed:P,disableAnimation:r,disableRipple:e,dripBindings:w,onDripClickHandler:g,isFocusVisible:j,getCardProps:C}},be=p("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),$e=p("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${A}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$lg",dropShadow:"none"}},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$lg",dropShadow:"none"}}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl","@safari":{boxShadow:"$xl",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$xl",dropShadow:"none"}}}]},J,K),xe=p("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),we=p("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}}),Y=y.forwardRef(({...t},o)=>{const{as:r,css:e,children:i,...s}=t,{cardRef:m,variant:a,isFocusVisible:c,isPressable:d,isPressed:h,disableAnimation:x,disableRipple:b,borderWeight:f,isHovered:g,getCardProps:w,dripBindings:$}=ge({...s,ref:o});return u.jsxs($e,{ref:m,as:r,borderWeight:f,css:e,disableAnimation:x,isFocusVisible:c,isHovered:g,isPressable:d,isPressed:h,role:d?"button":"region",tabIndex:d?0:-1,variant:a,...w(),children:[d&&!x&&!b&&u.jsx(se,{...$}),i]})});Y.toString=()=>".nextui-card";const k=Y;k.Header=xe,k.Body=be,k.Footer=we,k.Image=ue,k.Divider=pe;export{A as S,_ as a,k as e,te as r,se as s,Q as t};
