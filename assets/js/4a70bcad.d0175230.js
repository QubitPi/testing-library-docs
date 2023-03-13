"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[6888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),o=n(6010),s=n(2389),l=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,d=e.defaultValue,f=e.values,y=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==x&&!h.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),O=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,a.useState)(x),E=w[0],q=w[1],N=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var P=O[y];null!=P&&P!==E&&h.some((function(e){return e.value===P}))&&q(P)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==E&&(j(t),q(r),null!=y&&T(y,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var o,s=N.indexOf(e.currentTarget)-1;n=null!=(o=N[s])?o:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:Z,onFocus:C,onClick:C},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},5972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(5488),l=n(5162),i=["components"],u={id:"ecosystem-query-extensions",title:"query-extensions"},c=void 0,p={unversionedId:"ecosystem-query-extensions",id:"ecosystem-query-extensions",title:"query-extensions",description:"query-extensions is an experimental companion library for Testing",source:"@site/docs/ecosystem-query-extensions.mdx",sourceDirName:".",slug:"/ecosystem-query-extensions",permalink:"/testing-library-docs/docs/ecosystem-query-extensions",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/ecosystem-query-extensions.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"ecosystem-query-extensions",title:"query-extensions"},sidebar:"docs",previous:{title:"jasmine-dom",permalink:"/testing-library-docs/docs/ecosystem-jasmine-dom"},next:{title:"rtl-simple-queries",permalink:"/testing-library-docs/docs/ecosystem-rtl-simple-queries"}},m={},d=[],f={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjefferson08/query-extensions"},(0,o.kt)("inlineCode",{parentName:"a"},"query-extensions"))," is an experimental companion library for Testing\nLibrary that mixes a higher-level API into the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"@testing-library")," core\nqueries"),(0,o.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev query-extensions\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev query-extensions\n")))),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tjefferson08/query-extensions"},"github repo")," for documentation for examples and rationale."))}y.isMDXComponent=!0}}]);