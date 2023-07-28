import{z as m,j as e,r as P}from"./index-f37a754a.js";import{t as y,s as h}from"./stitches.config-d2b7a38e.js";import{a as j,b as w,c as L,d as b,f as v}from"./text-eaa2bdb5.js";import{a as F,u as D,e as E,$ as S}from"./useCheckingRegister-445c5cb4.js";import{a as V}from"./clsx-1463b71a.js";const R={isDark:!1,theme:y,type:"light"},I=m.createContext(R),M=I,G=()=>m.useContext(M),J=!1;function K(s){return typeof s=="function"}function _(s,i){let{elementType:$="a",onPress:u,onPressStart:a,onPressEnd:c,onClick:o,isDisabled:n,...f}=s,t;$!=="a"&&(t={role:"link",tabIndex:n?void 0:0});let{focusableProps:l}=j(s,i),{pressProps:d,isPressed:p}=w({onPress:u,onPressStart:a,onPressEnd:c,isDisabled:n,ref:i}),k=L(f,{labelable:!0}),x=b(l,d);return{isPressed:p,linkProps:b(k,{...x,...t,"aria-disabled":n||void 0,onClick:r=>{d.onClick(r),o&&(o(r),console.warn("onClick is deprecated, please use onPress"))}})}}const N=h("svg",{ml:"$1",as:"center",display:"flex",color:"currentColor"}),T=h("a",{$$linkColor:"$colors$link",display:"inline-flex",alignItems:"center",lineHeight:"inherit",textDecoration:"none",width:"$fit",backgroundColor:"transparent",backgroundImage:"inherit",backgroundClip:"inherit",WebkitTextFillColor:"inherit",color:"$$linkColor",outline:"none",maxW:"$max","&:hover":{opacity:.8},"@motion":{transition:"none"},variants:{color:{inherit:{$$linkColor:"inherit"},default:{$$linkColor:"$colors$link"},text:{$$linkColor:"$colors$text"},primary:{$$linkColor:"$colors$primary"},secondary:{$$linkColor:"$colors$secondary"},success:{$$linkColor:"$colors$success"},warning:{$$linkColor:"$colors$warning"},error:{$$linkColor:"$colors$error"}},underline:{true:{"&:hover, &:active, &:focus":{textDecoration:"underline"}}},block:{true:{padding:"$2 $4",borderRadius:"$base","&:hover":{backgroundColor:"$$linkBackgroundColor"}}},animated:{true:{transition:"opacity 0.25s ease 0s, box-shadow 0.25s ease 0s"}}},compoundVariants:[{block:!0,animated:!0,css:{transition:"opacity 0.25s ease 0s, box-shadow 0.25s ease 0s, background 0.25s ease 0s","@motion":{transition:"none"}}}],defaultVariants:{color:"default",animated:!0}},F),B=T,C=()=>e.jsxs(N,{className:"nextui-link-icon",fill:"none",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",children:[e.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),e.jsx("path",{d:"M15 3h6v6"}),e.jsx("path",{d:"M10 14L21 3"})]});C.toString=()=>".nextui-link-icon";const H=m.memo(C),g=v((s,i)=>{const{children:$,isExternal:u=!1,as:a,css:c,color:o="default",autoFocus:n,className:f,...t}=s,l=D(i),{linkProps:d}=_({...t,elementType:a},l),{isFocusVisible:p,focusProps:k}=E({autoFocus:n}),x=P.useMemo(()=>{let r=`$colors$${o}Light`;switch(o){case"inherit":case"text":r="$colors$textLight";break;case"default":r="$colors$linkLight"}return{...c,$$linkBackgroundColor:r}},[c,o]);return e.jsx(B,{ref:l,as:a,className:V("nextui-link",f),color:o,css:x,isFocusVisible:p,...S(d,k,t),children:e.jsxs(e.Fragment,{children:[$,u&&e.jsx(H,{})]})})});g.toString=()=>".nextui-link";const Q=g;export{J as _,R as d,G as e,M as f,K as i,Q as t};
