import{j as u}from"./jsx-runtime-DWbWqHZ-.js";import{P as r}from"./index-CE9T9n2a.js";import"./index-l2PZgWEW.js";const l=({error:i,size:n,className:I,readOnly:c,type:p,...q})=>{const E=c&&"cursor-not-allowed border-1 hover:border-transparent active:border-transparent focus:border-transparent",S=c&&"cursor-not-allowed has-[:focus]:border-main-beerus has-[:active]:border-main-beerus",N=i?"border-supportive-chiChi-100 border-2 hover:border-supportive-chiChi-100 focus:border-supportive-chiChi-100 active:border-supportive-chiChi-100":"border-transparent",R=i?"border-supportive-chiChi-100":"border-main-beerus",_=n=="sm"?"h-8 py-1 px-2":n=="lg"?"h-12 p-3":n=="xl"?"h-14 p-4":"h-10 px-3 py-2";let e="";switch(p){case"number":e="e.g. 12345";break;case"date":e="mm/dd/yyyy";break;case"time":e="--:-- --";break;case"datetime-local":e="mm/dd/yyyy --:-- --";break;case"email":e="e.g. john.doe@domain.co";break;case"password":e="Password";break;case"search":e="e.g. Search something";break;case"tel":e="e.g. +372 123 4567";break;case"url":e="e.g. https://domain.com";break;case"text":e="Placeholder text";break;default:e=""}return u.jsx("div",{className:[`transition ease-in-out duration-200
    border border-1 rounded-md has-[:disabled]:opacity-[32%]`,S,R].join(" "),children:u.jsx("input",{readOnly:c,className:[`transition ease-in-out duration-200
            w-full block text-md bg-main-gohan placeholder-main-trunks text-main-bulma
            outline-none resize-none rounded-md border-2
            hover:border-hover-main-beerus hover:border-2
            focus:border-main-piccolo focus:border-1 
            active:border-main-piccolo active:border-1
            disabled:hover:border-transparent disabled:focus:border-transparent disabled:cursor-not-allowed
            invalid:border-supportive-chiChi-100 invalid:border-2`,_,E,N,I].join(" "),placeholder:e,type:p,...q})})};l.propTypes={size:r.oneOf(["sm","md","lg","xl"]),error:r.bool,readOnly:r.bool,placeholder:r.string,type:r.string,className:r.string};l.defaultProps={size:"md",error:!1,type:"text",placeholder:""};l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},type:{defaultValue:{value:'"text"',computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},readOnly:{description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const H={title:"Core/Input",component:l},a={args:{type:""}},o={name:"Default with Placeholder",args:{placeholder:"Default with placeholder"}},s={args:{disabled:!0,placeholder:"Disabled"}},t={name:"Read Only",args:{readOnly:!0,placeholder:"Read only text"}},d={args:{error:!0,placeholder:"Error"}};var m,b,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: ""
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Default with Placeholder",
  args: {
    placeholder: "Default with placeholder"
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled"
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,w,P;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Read Only",
  args: {
    readOnly: true,
    placeholder: "Read only text"
  }
}`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var O,j,C;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: "Error"
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const A=["Default","Placeholder","Disabled","readOnly","Error"];export{a as Default,s as Disabled,d as Error,o as Placeholder,A as __namedExportsOrder,H as default,t as readOnly};
