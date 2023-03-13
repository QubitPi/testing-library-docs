"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[3052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"intro",title:"Introduction"},l=void 0,u={unversionedId:"dom-testing-library/intro",id:"dom-testing-library/intro",title:"Introduction",description:"The problem",source:"@site/docs/dom-testing-library/intro.mdx",sourceDirName:"dom-testing-library",slug:"/dom-testing-library/intro",permalink:"/testing-library-docs/docs/dom-testing-library/intro",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/dom-testing-library/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"intro",title:"Introduction"},sidebar:"docs",previous:{title:"Configuration Options",permalink:"/testing-library-docs/docs/dom-testing-library/api-configuration"},next:{title:"Install",permalink:"/testing-library-docs/docs/dom-testing-library/install"}},c={},p=[{value:"The problem",id:"the-problem",level:2},{value:"This solution",id:"this-solution",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-problem"},"The problem"),(0,i.kt)("p",null,"You want to write maintainable tests for your Web UI. As a part of this goal,\nyou want your tests to avoid including implementation details of your components\nand rather focus on making your tests give you the confidence for which they are\nintended. As part of this, you want your testbase to be maintainable in the long\nrun so refactors of your components (changes to implementation but not\nfunctionality) don't break your tests and slow you and your team down."),(0,i.kt)("h2",{id:"this-solution"},"This solution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM Testing Library")," is a very light-weight solution for testing DOM nodes\n(whether simulated with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom"},(0,i.kt)("inlineCode",{parentName:"a"},"JSDOM"))," as provided by\ndefault with ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," or in the browser). The main utilities it provides\ninvolve querying the DOM for nodes in a way that's similar to how the user finds\nelements on the page. In this way, the library helps ensure your tests give you\nconfidence in your UI code. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM Testing Library"),"'s primary guiding\nprinciple is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/guiding-principles"},"The more your tests resemble the way your software is used, the more confidence they can give you."))),(0,i.kt)("p",null,"As part of this goal, the utilities this library provides facilitate querying\nthe DOM in the same way the user would. Finding form elements by their label\ntext (just like a user would), finding links and buttons from their text (like a\nuser would), and more. It also exposes a recommended way to find elements by a\n",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid"),' as an "escape hatch" for elements where the text content and label\ndo not make sense or is not practical.'),(0,i.kt)("p",null,"This library encourages your applications to be more accessible and allows you\nto get your tests closer to using your components the way a user will, which\nallows your tests to give you more confidence that your application will work\nwhen a real user uses it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What this library is not"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A test runner or framework"),(0,i.kt)("li",{parentName:"ol"},"Specific to a testing framework (though we recommend Jest as our preference,\nthe library works with any framework. See\n",(0,i.kt)("a",{parentName:"li",href:"/testing-library-docs/docs/dom-testing-library/setup#using-without-jest"},"Using Without Jest"),")")))}m.isMDXComponent=!0}}]);