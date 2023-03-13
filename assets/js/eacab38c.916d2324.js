"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[3493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),i=n(6010),s=n(2389),l=n(7392),o=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,s=e.lazy,d=e.block,g=e.defaultValue,m=e.values,f=e.groupId,y=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(t=null!=g?g:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,r.useState)(k),B=N[0],j=N[1],O=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=x[f];null!=C&&C!==B&&h.some((function(e){return e.value===C}))&&j(C)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==B&&(I(t),j(a),null!=f&&T(f,String(a)))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,s=O.indexOf(e.currentTarget)-1;n=null!=(i=O[s])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},y)},h.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:function(e){return O.push(e)},onKeyDown:q,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":B===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===B}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==B})}))))}function g(e){var t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},6306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(5488),l=n(5162),o=["components"],c={id:"intro",title:"Testcafe Testing Library"},u=void 0,p={unversionedId:"testcafe-testing-library/intro",id:"testcafe-testing-library/intro",title:"Testcafe Testing Library",description:"Introduction",source:"@site/docs/testcafe-testing-library/intro.mdx",sourceDirName:"testcafe-testing-library",slug:"/testcafe-testing-library/intro",permalink:"/testing-library-docs/docs/testcafe-testing-library/intro",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/testcafe-testing-library/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"intro",title:"Testcafe Testing Library"},sidebar:"docs",previous:{title:"Puppeteer Testing Library",permalink:"/testing-library-docs/docs/pptr-testing-library/intro"},next:{title:"Nightwatch Testing Library",permalink:"/testing-library-docs/docs/nightwatch-testing-library/intro"}},d={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Configure",id:"configure",level:2},{value:"Once in a single page load:",id:"once-in-a-single-page-load",level:3},{value:"For every test &amp; page load in a fixture:",id:"for-every-test--page-load-in-a-fixture",level:3},{value:"Globally for all fixtures, tests and page loads by injecting clientScripts",id:"globally-for-all-fixtures-tests-and-page-loads-by-injecting-clientscripts",level:3},{value:"Containers",id:"containers",level:2},{value:"Examples using <code>within</code>",id:"examples-using-within",level:3}],m={toc:g};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/testcafe-testing-library"},(0,i.kt)("inlineCode",{parentName:"a"},"testcafe-testing-library"))," allows the use of dom testing library queries\nwithin ",(0,i.kt)("a",{parentName:"p",href:"https://devexpress.github.io/testcafe/"},"Testcafe")," for cross-browser\nend-to-end web testing."),(0,i.kt)("p",null,"If you are new to the testing-library approach for writing tests, check out the\n",(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/about#priority"},"this guide on which query to use")," as well as the\n",(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/dom-testing-library/cheatsheet"},"cheat sheet"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev testcafe @testing-library/testcafe\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev testcafe @testing-library/testcafe\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/testing-library/testcafe-testing-library"},"testcafe-testing-library on GitHub"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"testcafe-testing-library")," provides custom Selectors allowing you to query the\ndom."),(0,i.kt)("p",null,"Add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},".testcaferc.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "clientScripts": [\n    { "module": "@testing-library/dom/dist/@testing-library/dom.umd.js" }\n  ],\n')),(0,i.kt)("p",null,"You can now import ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," which has all the get","[All]","By",(0,i.kt)("em",{parentName:"p"},", query","[All]","By"),",\nfind","[All]","By","*"," selectors that you can use in your tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {screen} from '@testing-library/testcafe'\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/about"},"See ",(0,i.kt)("inlineCode",{parentName:"a"},"Queries")," for reference")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A note about queries in testcafe. Testcafe has\n",(0,i.kt)("a",{parentName:"p",href:"https://devexpress.github.io/testcafe/documentation/test-api/built-in-waiting-mechanisms.html#wait-mechanism-for-selectors"},"built in waiting"),",\nfor this reason, there's no difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"queryBy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findBy")," queries\nin testcafe testing library. ",(0,i.kt)("inlineCode",{parentName:"p"},"getBy")," queries will throw an exception (as\ndesigned) so they will fail immediately and do not work with the built in\nwaiting that Testcafe provides.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"To show some simple examples (from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/testing-library/testcafe-testing-library/blob/master/tests/testcafe/selectors.ts"},"https://github.com/testing-library/testcafe-testing-library/blob/master/tests/testcafe/selectors.ts"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {screen} from '@testing-library/testcafe'\n\ntest('getByPlaceHolderText', async t => {\n  await t.typeText(\n    screen.getByPlaceholderText('Placeholder Text'),\n    'Hello Placeholder',\n  )\n})\ntest('getByText', async t => {\n  await t.click(screen.getByText('getByText'))\n})\n\ntest('getByLabelText', async t => {\n  await t.typeText(\n    screen.getByLabelText('Label For Input Labelled By Id'),\n    'Hello Input Labelled By Id',\n  )\n})\n\ntest('queryAllByText', async t => {\n  await t.expect(screen.queryAllByText('Button Text').exists).ok()\n  await t\n    .expect(screen.queryAllByText('Non-existing Button Text').exists)\n    .notOk()\n})\n")),(0,i.kt)("h2",{id:"configure"},"Configure"),(0,i.kt)("p",null,"You can customize the testIdAttribute using the ",(0,i.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/dom-testing-library/api-configuration"},"configure function of DOM\nTesting Library")," in a few different ways:"),(0,i.kt)("h3",{id:"once-in-a-single-page-load"},"Once in a single page load:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {configureOnce, getByTestId} from '@testing-library/testcafe'\n\ntest('can be configured once in a single page load', async t => {\n  await configureOnce({testIdAttribute: 'data-other-test-id'})\n  await t.click(screen.getByTestId('other-id'))\n})\n")),(0,i.kt)("h3",{id:"for-every-test--page-load-in-a-fixture"},"For every test & page load in a fixture:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {configure, screen} from '@testing-library/testcafe'\n\nfixture`configure`.clientScripts(\n  configure({testIdAttribute: 'data-automation-id'}),\n).page`http://localhost:13370`\n\ntest('supports alternative testIdAttribute', async t => {\n  await t.click(screen.getByTestId('image-with-random-alt-tag'))\n})\n\ntest('still works after browser page load and reload', async t => {\n  await t.click(screen.getByText('Go to Page 2'))\n\n  await t.eval(() => location.reload(true))\n\n  await t\n    .click(screen.getByTestId('page2-thing'))\n    .expect(screen.getByText('second page').exists)\n    .ok()\n})\n")),(0,i.kt)("h3",{id:"globally-for-all-fixtures-tests-and-page-loads-by-injecting-clientscripts"},"Globally for all fixtures, tests and page loads by ",(0,i.kt)("a",{parentName:"h3",href:"https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/inject-scripts-into-tested-pages.html#add-client-scripts-to-all-tests"},"injecting clientScripts")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: the dom-testing-library umd must come before your configure script")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".testcaferc.json"',title:'".testcaferc.json"'},'  "clientScripts": [\n    "./node_modules/@testing-library/dom/dist/@testing-library/dom.umd.js",\n    "./path/to/my-app-testcafe.config.js"\n  ]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./path/to/my-app-testcafe.config.js"',title:'"./path/to/my-app-testcafe.config.js"'},"window.TestingLibraryDom.configure({testIdAttribute: 'data-automation-id'})\n")),(0,i.kt)("h2",{id:"containers"},"Containers"),(0,i.kt)("p",null,"By default the selectors come pre-bound to ",(0,i.kt)("inlineCode",{parentName:"p"},"document.body"),", so no need to\nprovide a container. However, if you want to restrict your query using a\ncontainer, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"within")," which can take either a string or a query\n(get","[All]","By",(0,i.kt)("em",{parentName:"p"},", query","[All]","By"),", find","[All]","By","*",")."),(0,i.kt)("h3",{id:"examples-using-within"},"Examples using ",(0,i.kt)("inlineCode",{parentName:"h3"},"within")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {within, screen} from '@testing-library/testcafe'\n\nfixture`within`.page`http://localhost:13370`\n\ntest('works with getBy* selectors', async t => {\n  await t\n    .expect(\n      within(screen.getByTestId('nested')).getByText('Button Text').exists,\n    )\n    .ok()\n})\n\ntest('works with CSS selector strings', async t => {\n  const {getByText} = await within('#nested')\n  await t.click(getByText('Button Text')).ok()\n})\n\ntest('works on any testcafe selector', async t => {\n  const nested = Selector('#nested')\n\n  await t.expect(within(nested).getByText('Button Text').exists).ok()\n})\n\ntest('works with results from \"byAll\" query with index - regex', async t => {\n  const nestedDivs = screen.getAllByTestId(/nested/)\n  await t.expect(nestedDivs.count).eql(2)\n\n  await t\n    .expect(within(nestedDivs.nth(0)).getByText('Button Text').exists)\n    .ok()\n    .expect(\n      within(nestedDivs.nth(1)).getByText('text only in 2nd nested').exists,\n    )\n    .ok()\n})\n")))}f.isMDXComponent=!0}}]);