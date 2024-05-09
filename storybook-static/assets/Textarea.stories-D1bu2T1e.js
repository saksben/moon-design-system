import{j as l}from"./jsx-runtime-DWbWqHZ-.js";import{P as n}from"./index-CE9T9n2a.js";import"./index-l2PZgWEW.js";const t=({error:i,className:P,readOnly:d,...j})=>{const w=d&&"cursor-not-allowed border-1 hover:border-transparent active:border-transparent focus:border-transparent",E=d&&"cursor-not-allowed has-[:focus]:border-main-beerus has-[:active]:border-main-beerus",N=i?"border-supportive-chiChi-100 border-2 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100":"border-transparent",R=i?"border-supportive-chiChi-100":"border-main-beerus";return l.jsx("div",{className:[`transition ease-in-out duration-200 
        border border-1 rounded-md has-[:disabled]:opacity-[32%]`,E,R].join(" "),children:l.jsx("textarea",{readOnly:d,className:[`transition ease-in-out duration-200
            pt-4 pl-4 w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma
            outline-none resize-none rounded-md  border-2
            hover:border-hover-main-beerus hover:border-2
            focus:border-main-piccolo focus:border-1 
            active:border-main-piccolo active:border-1
            disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed
            invalid:border-supportive-chiChi-100 invalid:border-2`,w,N,P].join(" "),...j})})};t.propTypes={error:n.bool,readOnly:n.bool,className:n.string};t.defaultProps={error:!1};t.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{error:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},readOnly:{description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const k={title:"Core/Textarea",component:t},e={args:{}},r={name:"Default with Placeholder",args:{placeholder:"Here is a sample placeholder",type:"text"}},a={args:{disabled:!0,placeholder:"Disabled"}},o={name:"Read Only",args:{readOnly:!0,placeholder:"Read only text"}},s={args:{error:!0,placeholder:"Error"}};var c,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Default with Placeholder",
  args: {
    placeholder: "Here is a sample placeholder",
    type: "text"
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,f,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled"
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,y,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Read Only",
  args: {
    readOnly: true,
    placeholder: "Read only text"
  }
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var T,C,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: "Error"
  }
}`,...(O=(C=s.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const A=["Default","Placeholder","Disabled","readOnly","Error"];export{e as Default,a as Disabled,s as Error,r as Placeholder,A as __namedExportsOrder,k as default,o as readOnly};
