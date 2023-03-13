"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[7642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"api-async",title:"Async Methods"},s=void 0,c={unversionedId:"dom-testing-library/api-async",id:"dom-testing-library/api-async",title:"Async Methods",description:"Several utilities are provided for dealing with asynchronous code. These can be",source:"@site/docs/dom-testing-library/api-async.mdx",sourceDirName:"dom-testing-library",slug:"/dom-testing-library/api-async",permalink:"/testing-library-docs/docs/dom-testing-library/api-async",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/dom-testing-library/api-async.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"api-async",title:"Async Methods"},sidebar:"docs",previous:{title:"Firing Events",permalink:"/testing-library-docs/docs/dom-testing-library/api-events"},next:{title:"Appearance and Disappearance",permalink:"/testing-library-docs/docs/guide-disappearance"}},p={},d=[{value:"<code>findBy</code> Queries",id:"findby-queries",level:2},{value:"<code>waitFor</code>",id:"waitfor",level:2},{value:"<code>waitForElementToBeRemoved</code>",id:"waitforelementtoberemoved",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Several utilities are provided for dealing with asynchronous code. These can be\nuseful to wait for an element to appear or disappear in response to an event,\nuser action, timeout, or Promise. (See the\n",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/guide-disappearance"},"guide to testing disappearance"),".)"),(0,o.kt)("p",null,"The async methods return Promises, so be sure to use ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".then")," when\ncalling them."),(0,o.kt)("h2",{id:"findby-queries"},(0,o.kt)("inlineCode",{parentName:"h2"},"findBy")," Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"findBy")," methods are a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"getBy"),"\n",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/about#types-of-queries"},"queries")," and ",(0,o.kt)("a",{parentName:"p",href:"#waitfor"},(0,o.kt)("inlineCode",{parentName:"a"},"waitFor")),". They\naccept the waitFor options as the last argument (e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"await screen.findByText('text', queryOptions, waitForOptions)"),")."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"findBy")," queries work when you expect an element to appear but the change to the\nDOM might not happen immediately."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const button = screen.getByRole('button', {name: 'Click Me'})\nfireEvent.click(button)\nawait screen.findByText('Clicked once')\nfireEvent.click(button)\nawait screen.findByText('Clicked twice')\n")),(0,o.kt)("h2",{id:"waitfor"},(0,o.kt)("inlineCode",{parentName:"h2"},"waitFor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function waitFor<T>(\n  callback: () => T | Promise<T>,\n  options?: {\n    container?: HTMLElement\n    timeout?: number\n    interval?: number\n    onTimeout?: (error: Error) => Error\n    mutationObserverOptions?: MutationObserverInit\n  },\n): Promise<T>\n")),(0,o.kt)("p",null,"When in need to wait for any period of time you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor"),", to wait for\nyour expectations to pass. Returning ",(0,o.kt)("em",{parentName:"p"},"a falsy condition is not sufficient")," to\ntrigger a retry, the callback must throw an error in order to retry the\ncondition. Here's a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\n// Wait until the callback does not throw an error. In this case, that means\n// it'll wait until the mock function has been called once.\nawait waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))\n// ...\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," may run the callback a number of times until the timeout is reached.\nNote that the number of calls is constrained by the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"interval"),"\noptions."),(0,o.kt)("p",null,"This can be useful if you have a unit test that mocks API calls and you need to\nwait for your mock promises to all resolve."),(0,o.kt)("p",null,"If you return a promise in the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," callback (either explicitly or\nimplicitly with the ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," syntax), then the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," utility does not call\nyour callback again until that promise rejects. This allows you to ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor"),"\nthings that must be checked asynchronously."),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," is the global ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),". Make sure the elements you\nwait for are descendants of ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),"."),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"interval")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"50ms"),". However it runs your callback immediately\nbefore starting the intervals."),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1000ms"),"."),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"onTimeout")," takes the error and appends the ",(0,o.kt)("inlineCode",{parentName:"p"},"container"),"'s printed\nstate to the error message which should hopefully make it easier to track down\nwhat caused the timeout."),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"mutationObserverOptions")," is\n",(0,o.kt)("inlineCode",{parentName:"p"},"{subtree: true, childList: true, attributes: true, characterData: true}")," which\ndetects additions and removals of child elements (including text nodes) in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"container")," and any of its descendants. It also detects attribute changes. When\nany of those changes occur, it re-runs the callback."),(0,o.kt)("h2",{id:"waitforelementtoberemoved"},(0,o.kt)("inlineCode",{parentName:"h2"},"waitForElementToBeRemoved")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function waitForElementToBeRemoved<T>(\n  callback: (() => T) | T,\n  options?: {\n    container?: HTMLElement\n    timeout?: number\n    interval?: number\n    onTimeout?: (error: Error) => Error\n    mutationObserverOptions?: MutationObserverInit\n  },\n): Promise<void>\n")),(0,o.kt)("p",null,"To wait for the removal of element(s) from the DOM you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"waitForElementToBeRemoved"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForElementToBeRemoved")," function is a small\nwrapper around the ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor")," utility."),(0,o.kt)("p",null,"The first argument must be an element, array of elements, or a callback which\nreturns an element or array of elements."),(0,o.kt)("p",null,"Here is an example where the promise resolves because the element is removed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const el = document.querySelector('div.getOuttaHere')\n\nwaitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() =>\n  console.log('Element no longer in DOM'),\n)\n\nel.setAttribute('data-neat', true)\n// other mutations are ignored...\n\nel.parentElement.removeChild(el)\n// logs 'Element no longer in DOM'\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitForElementToBeRemoved")," throws an error if the first argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," or\nan empty array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"waitForElementToBeRemoved(null).catch(err => console.log(err))\nwaitForElementToBeRemoved(queryByText(/not here/i)).catch(err =>\n  console.log(err),\n)\nwaitForElementToBeRemoved(queryAllByText(/not here/i)).catch(err =>\n  console.log(err),\n)\nwaitForElementToBeRemoved(() => getByText(/not here/i)).catch(err =>\n  console.log(err),\n)\n\n// Error: The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.\n")),(0,o.kt)("p",null,"The options object is forwarded to ",(0,o.kt)("inlineCode",{parentName:"p"},"waitFor"),"."))}u.isMDXComponent=!0}}]);