"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[3522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,b=e.values,y=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),T=x.tabGroupChoices,N=x.setTabGroupChoices,O=(0,a.useState)(k),w=O[0],A=O[1],E=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var j=T[y];null!=j&&j!==w&&g.some((function(e){return e.value===j}))&&A(j)}var B=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==w&&(C(t),A(r),null!=y&&N(y,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;n=null!=(l=E[o])?l:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:B,onClick:B},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},5977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],u={id:"byalttext",title:"ByAltText"},c=void 0,p={unversionedId:"queries/byalttext",id:"queries/byalttext",title:"ByAltText",description:"getByAltText, queryByAltText, getAllByAltText, queryAllByAltText,",source:"@site/docs/queries/byalttext.mdx",sourceDirName:"queries",slug:"/queries/byalttext",permalink:"/testing-library-docs/docs/queries/byalttext",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/queries/byalttext.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"byalttext",title:"ByAltText"},sidebar:"docs",previous:{title:"ByDisplayValue",permalink:"/testing-library-docs/docs/queries/bydisplayvalue"},next:{title:"ByTitle",permalink:"/testing-library-docs/docs/queries/bytitle"}},m={},d=[{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2}],b={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByAltText, queryByAltText, getAllByAltText, queryAllByAltText,\nfindByAltText, findAllByAltText")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"getByAltText(\n  // If you're using `screen`, then skip the container argument:\n  container: HTMLElement,\n  text: TextMatch,\n  options?: {\n    exact?: boolean = true,\n    normalizer?: NormalizerFn,\n  }): HTMLElement\n")),(0,l.kt)("p",null,"This will return the element (normally an ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>"),") that has the given ",(0,l.kt)("inlineCode",{parentName:"p"},"alt"),"\ntext. Note that it only supports elements which accept an ",(0,l.kt)("inlineCode",{parentName:"p"},"alt")," attribute or\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"custom elements"),"\n(since we don't know if a custom element implements ",(0,l.kt)("inlineCode",{parentName:"p"},"alt")," or not):\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"},(0,l.kt)("inlineCode",{parentName:"a"},"<img>")),",\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},(0,l.kt)("inlineCode",{parentName:"a"},"<input>")),",\nand ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area"},(0,l.kt)("inlineCode",{parentName:"a"},"<area>")),"\n(intentionally excluding\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet"},(0,l.kt)("inlineCode",{parentName:"a"},"<applet>")),"\nas it's deprecated)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<img alt="Incredibles 2 Poster" src="/incredibles-2.png" />\n')),(0,l.kt)(o.Z,{defaultValue:"native",values:[{label:"Native",value:"native"},{label:"React",value:"react"},{label:"Cypress",value:"cypress"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"native",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {screen} from '@testing-library/dom'\n\nconst incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)\n"))),(0,l.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import {render, screen} from '@testing-library/react'\n\nrender(<MyComponent />)\nconst incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)\n"))),(0,l.kt)(i.Z,{value:"cypress",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cy.findByAltText(/incredibles.*? poster/i).should('exist')\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/about#textmatch"},"TextMatch")," options"))}y.isMDXComponent=!0}}]);