import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{P as i}from"./index-CE9T9n2a.js";import{c as r}from"./cn-DPD4JpCE.js";import"./index-l2PZgWEW.js";const d=({error:c,readOnly:l,className:w,...E})=>{const j=r("transition ease-in-out duration-200 border rounded-md has-[:disabled]:opacity-[32%]",c==!0?"border-supportive-chiChi-100":"border-main-beerus",l&&"cursor-not-allowed"),N=r("transition ease-in-out duration-200","pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma outline-none resize-none rounded-md border-2","hover:border-hover-main-beerus hover:border-2","focus:border-main-piccolo focus:border-2","active:border-main-piccolo active:border-2","disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed","invalid:border-supportive-chiChi-100 invalid:border-2",c==!0?"border-supportive-chiChi-100 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100":"border-transparent",l&&"cursor-not-allowed hover:border-transparent active:border-transparent focus:border-transparent");return e.jsx(e.Fragment,{children:e.jsx("div",{className:r(j),children:e.jsx("textarea",{readOnly:l,className:r(N,w),...E})})})};d.propTypes={error:i.bool,readOnly:i.bool,className:i.string};d.defaultProps={error:!1};d.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{error:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},readOnly:{description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const k={title:"Core/Textarea",component:d},a={args:{}},o={name:"Default with Placeholder",args:{placeholder:"Here is a sample placeholder",type:"text"}},s={args:{error:!0,placeholder:"Error"}},t={name:"Read Only",args:{readOnly:!0,placeholder:"Read only text"}},n={args:{disabled:!0,placeholder:"Disabled"}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default with Placeholder",
  args: {
    placeholder: "Here is a sample placeholder",
    type: "text"
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: "Error"
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,D,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Read Only",
  args: {
    readOnly: true,
    placeholder: "Read only text"
  }
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var O,P,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled"
  }
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const A=["Default","Placeholder","Error","readOnly","Disabled"];export{a as Default,n as Disabled,s as Error,o as Placeholder,A as __namedExportsOrder,k as default,t as readOnly};
