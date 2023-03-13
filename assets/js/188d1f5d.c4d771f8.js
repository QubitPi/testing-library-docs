"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[7901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,b=e.values,y=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,O=(0,a.useState)(k),E=O[0],x=O[1],C=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var I=T[y];null!=I&&I!==E&&h.some((function(e){return e.value===I}))&&x(I)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==E&&(A(t),x(r),null!=y&&N(y,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var i,l=C.indexOf(e.currentTarget)-1;n=null!=(i=C[l])?i:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5488),o=n(5162),s=["components"],u={id:"intro",title:"Angular Testing Library",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"angular-testing-library/intro",id:"angular-testing-library/intro",title:"Angular Testing Library",description:"Angular Testing Library",source:"@site/docs/angular-testing-library/intro.mdx",sourceDirName:"angular-testing-library",slug:"/angular-testing-library/intro",permalink:"/testing-library-docs/docs/angular-testing-library/intro",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/angular-testing-library/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"intro",title:"Angular Testing Library",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"API",permalink:"/testing-library-docs/docs/marko-testing-library/api"},next:{title:"Examples",permalink:"/testing-library-docs/docs/angular-testing-library/examples"}},d={},m=[{value:"The problem",id:"the-problem",level:2},{value:"This solution",id:"this-solution",level:2}],b={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/angular-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"Angular Testing Library")),"\nbuilds on top of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/dom-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"DOM Testing Library")),"\nby adding APIs for working with Angular components."),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @testing-library/angular\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @testing-library/angular\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/testing-library/angular-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"@testing-library/angular-testing-library")," on GitHub"))),(0,i.kt)("h2",{id:"the-problem"},"The problem"),(0,i.kt)("p",null,"You want to write maintainable tests for your Angular components. As a part of\nthis goal, you want your tests to avoid including implementation details of your\ncomponents and rather focus on making your tests give you the confidence for\nwhich they are intended. As part of this, you want your testbase to be\nmaintainable in the long run so refactors of your components (changes to\nimplementation but not functionality) don't break your tests and slow you and\nyour team down."),(0,i.kt)("h2",{id:"this-solution"},"This solution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Angular Testing Library")," is a very lightweight solution for testing Angular\ncomponents. It provides light utility functions on top of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/dom-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"DOM Testing Library")),"\nin a way that encourages better testing practices. Its primary guiding principle\nis:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/guiding-principles"},"The more your tests resemble the way your software is used, the more confidence they can give you."))),(0,i.kt)("p",null,"So rather than dealing with instances of rendered Angular components, your tests\nwill work with actual DOM nodes. The utilities this library provides facilitate\nquerying the DOM in the same way the user would. Finding form elements by their\nlabel text (just like a user would), finding links and buttons from their text\n(like a user would). It also exposes a recommended way to find elements by a\n",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid"),' as an "escape hatch" for elements where the text content and label\ndo not make sense or is not practical.'),(0,i.kt)("p",null,"This library encourages your applications to be more accessible and allows you\nto get your tests closer to using your components the way a user will, which\nallows your tests to give you more confidence that your application will work\nwhen a real user uses it."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Angular Testing Library"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Re-exports the ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"fireEvent")," utility functions from\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/testing-library/dom-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"DOM Testing Library")),"."),(0,i.kt)("li",{parentName:"ul"},"Encapsulates the ",(0,i.kt)("inlineCode",{parentName:"li"},"fireEvent")," functions of your component to automatically call\n",(0,i.kt)("inlineCode",{parentName:"li"},"detectChanges()")," after an event occurs"),(0,i.kt)("li",{parentName:"ul"},"Is test framework agnostic, it runs on every test framework")))}y.isMDXComponent=!0}}]);