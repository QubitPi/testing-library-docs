"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[1391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),o=r(6010),i=r(2389),l=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,m=e.defaultValue,b=e.values,y=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:g[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),w=T.tabGroupChoices,O=T.setTabGroupChoices,x=(0,a.useState)(k),j=x[0],N=x[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var C=w[y];null!=C&&C!==j&&v.some((function(e){return e.value===C}))&&N(C)}var P=function(e){var t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==j&&(I(t),N(n),null!=y&&O(y,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;r=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;r=null!=(o=E[i])?o:E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},3354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(5488),l=r(5162),s=["components"],u={id:"ecosystem-riot-testing-library",title:"riot-testing-library"},c=void 0,p={unversionedId:"ecosystem-riot-testing-library",id:"ecosystem-riot-testing-library",title:"riot-testing-library",description:"riot-testing-library builds on top of",source:"@site/docs/ecosystem-riot-testing-library.mdx",sourceDirName:".",slug:"/ecosystem-riot-testing-library",permalink:"/testing-library-docs/docs/ecosystem-riot-testing-library",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/ecosystem-riot-testing-library.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"ecosystem-riot-testing-library",title:"riot-testing-library"},sidebar:"docs",previous:{title:"eslint-plugin-jest-dom",permalink:"/testing-library-docs/docs/ecosystem-eslint-plugin-jest-dom"},next:{title:"jasmine-dom",permalink:"/testing-library-docs/docs/ecosystem-jasmine-dom"}},d={},m=[],b={toc:m};function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ariesjia/riot-testing-library"},(0,o.kt)("inlineCode",{parentName:"a"},"riot-testing-library"))," builds on top of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/dom-testing-library"},"DOM Testing Library")," by\nadding APIs for working with ",(0,o.kt)("a",{parentName:"p",href:"https://riot.js.org/"},"Riot.js")," components."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev riot-testing-library\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev riot-testing-library\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import render, {fireEvent} from 'riot-testing-library'\nimport TestTag from './test.tag'\n\ntest('should show count text  when rendered', () => {\n  const {queryByTestId} = render(TestTag, {count: 10})\n  expect(queryByTestId('count').textContent).toBe('10')\n})\n\ntest('should add count when click add button text', () => {\n  const {queryByTestId} = render(TestTag, {count: 1})\n  expect(queryByTestId('count').textContent).toBe('1')\n  fireEvent.click(queryByTestId('button'))\n  expect(queryByTestId('count').textContent).toBe('2')\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ariesjia/riot-testing-library"},"riot-testing-library on GitHub"))))}y.isMDXComponent=!0}}]);