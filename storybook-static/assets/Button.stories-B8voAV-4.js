import{f as q}from"./index-B-T0PRdw.js";import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import{P as e}from"./index-CE9T9n2a.js";import"./ArrowsBoost-DkvlGnXy.js";const s=({primary:h,backgroundColor:l,size:v,label:C,...S})=>{const z=h?"storybook-button--primary":"storybook-button--secondary";return n.jsx(n.Fragment,{children:n.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${v}`,z].join(" "),style:l&&{backgroundColor:l},...S,children:C})})};s.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};s.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}};const I={title:"Core/Button",component:s,parameters:{},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:q()}},r={args:{primary:!0,label:"Button"}},o={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,k,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(k=t.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const O=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,o as Secondary,t as Small,O as __namedExportsOrder,I as default};
