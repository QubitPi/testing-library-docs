"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[9802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),i=r(6010),o=r(2389),l=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,m=e.defaultValue,b=e.values,h=e.groupId,y=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,O=(0,a.useState)(k),x=O[0],E=O[1],C=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var R=T[h];null!=R&&R!==x&&g.some((function(e){return e.value===R}))&&E(R)}var I=function(e){var t=e.currentTarget,r=C.indexOf(t),n=g[r].value;n!==x&&(j(t),E(n),null!=h&&N(h,String(n)))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=C.indexOf(e.currentTarget)+1;r=null!=(n=C[a])?n:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;r=null!=(i=C[o])?i:C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},y)},g.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},5327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(5488),l=r(5162),s=["components"],u={id:"intro",title:"React Testing Library",sidebar_label:"Introduction"},c=void 0,p={unversionedId:"react-testing-library/intro",id:"react-testing-library/intro",title:"React Testing Library",description:"React Testing Library builds on top of DOM Testing Library by adding",source:"@site/docs/react-testing-library/intro.mdx",sourceDirName:"react-testing-library",slug:"/react-testing-library/intro",permalink:"/testing-library-docs/docs/react-testing-library/intro",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/react-testing-library/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"intro",title:"React Testing Library",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Cheatsheet",permalink:"/testing-library-docs/docs/dom-testing-library/cheatsheet"},next:{title:"Example",permalink:"/testing-library-docs/docs/react-testing-library/example-intro"}},d={},m=[{value:"The problem",id:"the-problem",level:2},{value:"This solution",id:"this-solution",level:2},{value:"Tutorials",id:"tutorials",level:2}],b={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"React Testing Library"))," builds on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM Testing Library")," by adding\nAPIs for working with React components."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Projects created with ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},(0,i.kt)("inlineCode",{parentName:"a"},"Create React App"))," have\nout of the box support for ",(0,i.kt)("strong",{parentName:"p"},"React Testing Library"),". If that is not the case,\nyou can add it via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," like so:")),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @testing-library/react\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @testing-library/react\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/testing-library/react-testing-library"},"React Testing Library on GitHub"))),(0,i.kt)("h2",{id:"the-problem"},"The problem"),(0,i.kt)("p",null,"You want to write maintainable tests for your React components. As a part of\nthis goal, you want your tests to avoid including implementation details of your\ncomponents and rather focus on making your tests give you the confidence for\nwhich they are intended. As part of this, you want your testbase to be\nmaintainable in the long run so refactors of your components (changes to\nimplementation but not functionality) don't break your tests and slow you and\nyour team down."),(0,i.kt)("h2",{id:"this-solution"},"This solution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"React Testing Library")," is a very light-weight solution for testing React\ncomponents. It provides light utility functions on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom/test-utils"),", in a way that encourages better testing practices. Its\nprimary guiding principle is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/guiding-principles"},"The more your tests resemble the way your software is used, the more confidence they can give you."))),(0,i.kt)("p",null,"So rather than dealing with instances of rendered React components, your tests\nwill work with actual DOM nodes. The utilities this library provides facilitate\nquerying the DOM in the same way the user would. Finding form elements by their\nlabel text (just like a user would), finding links and buttons from their text\n(like a user would). It also exposes a recommended way to find elements by a\n",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid"),' as an "escape hatch" for elements where the text content and label\ndo not make sense or is not practical.'),(0,i.kt)("p",null,"This library encourages your applications to be more accessible and allows you\nto get your tests closer to using your components the way a user will, which\nallows your tests to give you more confidence that your application will work\nwhen a real user uses it."),(0,i.kt)("p",null,"This library is a replacement for ",(0,i.kt)("a",{parentName:"p",href:"http://airbnb.io/enzyme/"},"Enzyme"),". While you\n",(0,i.kt)("em",{parentName:"p"},"can")," follow these guidelines using Enzyme itself, enforcing this is harder\nbecause of all the extra utilities that Enzyme provides (utilities which\nfacilitate testing implementation details). Read more about this in\n",(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/react-testing-library/faq"},"the FAQ"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What this library is not"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A test runner or framework"),(0,i.kt)("li",{parentName:"ol"},"Specific to a testing framework (though we recommend Jest as our preference,\nthe library works with any framework. See\n",(0,i.kt)("a",{parentName:"li",href:"/testing-library-docs/docs/react-testing-library/setup#using-without-jest"},"Using Without Jest"),")")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: This library is built on top of\n",(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/dom-testing-library/intro"},(0,i.kt)("inlineCode",{parentName:"a"},"DOM Testing Library"))," which is where most of\nthe logic behind the queries is.")),(0,i.kt)("h2",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,'Have a look at the "What is React Testing library?" video below for an\nintroduction to the library.'),(0,i.kt)("a",{href:"https://youtu.be/JKOwJUM4_RM"},(0,i.kt)("img",{width:"200px",alt:"what is react testing library",src:"https://img.youtube.com/vi/JKOwJUM4_RM/0.jpg",style:{marginLeft:0}})),(0,i.kt)("p",null,"Also, don't miss this\n",(0,i.kt)("a",{parentName:"p",href:"https://www.robinwieruch.de/react-testing-library"},"tutorial for React Testing Library"),"."))}h.isMDXComponent=!0}}]);