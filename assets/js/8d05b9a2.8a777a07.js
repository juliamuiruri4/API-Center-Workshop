"use strict";(self.webpackChunkworkshop=self.webpackChunkworkshop||[]).push([[612],{3407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"develop/inventory/api-inventory","title":"Build an API Inventory","description":"Create an Azure API Center instance","source":"@site/docs/develop/inventory/api-inventory.md","sourceDirName":"develop/inventory","slug":"/develop/inventory/api-inventory","permalink":"/docs/develop/inventory/api-inventory","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/develop/inventory/api-inventory.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Deploy to Azure","permalink":"/docs/develop/deploy"},"next":{"title":"Define Custom Metadata","permalink":"/docs/develop/inventory/custom-metadata"}}');var i=t(4848),o=t(8453);const a={},s="Build an API Inventory",c={},d=[{value:"Create an Azure API Center instance",id:"create-an-azure-api-center-instance",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"build-an-api-inventory",children:"Build an API Inventory"})}),"\n",(0,i.jsx)(n.h2,{id:"create-an-azure-api-center-instance",children:"Create an Azure API Center instance"}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,i.jsxs)(n.p,{children:["This step uses the Azure API Center VS Code extension. If you haven't installed it yet, you can download it from ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=AzureAPICenter.apicenter",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"API Center VS Code Extension",src:t(7328).A+"",width:"1908",height:"1082"})}),"\n",(0,i.jsx)(n.p,{children:"Click on the API center icon on the side bar and sign in to your Azure account"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign in to Azure via API Center Extension",src:t(2293).A+"",width:"700",height:"403"})}),"\n",(0,i.jsx)(n.p,{children:"[TODO: Add better image]"}),"\n",(0,i.jsx)(n.p,{children:"Open your terminal, and sign in to your Azure account."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"az login\n"})}),"\n",(0,i.jsx)(n.p,{children:"Register the Microsoft.ApiCenter resource provider in your subscription. You only need to register the resource provider only once, and you can do this by running the command below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"az provider register --namespace Microsoft.ApiCenter\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create an API Center instance by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"az apic create --name contoso-air --resource-group rg-apic-workshop --location westeurope\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create an API Center instance",src:t(7317).A+"",width:"1792",height:"1033"})}),"\n",(0,i.jsx)(n.p,{children:"If you open the API Center extension again, you will see your newly created instance with a sample Petstore API.+"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"API Center instance created",src:t(4763).A+"",width:"1908",height:"1093"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2293:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apic-signin-vscode-b8b930f865b072dd25a9651ab602ff94.png"},7328:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apic-vscode-extension-58b5581053f22f53cd151a1607099f0b.jpg"},7317:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/create-apic-cli-be1bf39bc694ebe4b05bc698e9d46e9e.jpg"},4763:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/swagger-petstore-1984ace432c0975f7618d969afbb06c4.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);