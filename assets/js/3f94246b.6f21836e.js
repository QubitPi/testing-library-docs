"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[7445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),s=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,h=e.defaultValue,d=e.values,y=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(v),x=C[0],E=C[1],R=[],L=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var z=N[y];null!=z&&z!==x&&k.some((function(e){return e.value===z}))&&E(z)}var j=function(e){var t=e.currentTarget,n=R.indexOf(t),a=k[n].value;a!==x&&(L(t),E(a),null!=y&&T(y,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=R.indexOf(e.currentTarget)+1;n=null!=(a=R[r])?a:R[0];break;case"ArrowLeft":var o,i=R.indexOf(e.currentTarget)-1;n=null!=(o=R[i])?o:R[R.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return R.push(e)},onKeyDown:I,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5488),s=n(5162),l=["components"],c={id:"migrate-from-enzyme",title:"Migrate from Enzyme",sidebar_label:"Migrate from Enzyme"},u=void 0,p={unversionedId:"react-testing-library/migrate-from-enzyme",id:"react-testing-library/migrate-from-enzyme",title:"Migrate from Enzyme",description:"This page is intended for developers who have experience with Enzyme and are",source:"@site/docs/react-testing-library/migrate-from-enzyme.mdx",sourceDirName:"react-testing-library",slug:"/react-testing-library/migrate-from-enzyme",permalink:"/testing-library-docs/docs/react-testing-library/migrate-from-enzyme",draft:!1,editUrl:"https://github.com/testing-library/testing-library-docs/edit/main/docs/react-testing-library/migrate-from-enzyme.mdx",tags:[],version:"current",lastUpdatedBy:"Jack",lastUpdatedAt:1678697984,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"migrate-from-enzyme",title:"Migrate from Enzyme",sidebar_label:"Migrate from Enzyme"},sidebar:"docs",previous:{title:"API",permalink:"/testing-library-docs/docs/react-testing-library/api"},next:{title:"FAQ",permalink:"/testing-library-docs/docs/react-testing-library/faq"}},m={},h=[{value:"What is React Testing Library?",id:"what-is-react-testing-library",level:2},{value:"Why should I use React Testing Library?",id:"why-should-i-use-react-testing-library",level:2},{value:"How to migrate from Enzyme to React Testing Library?",id:"how-to-migrate-from-enzyme-to-react-testing-library",level:2},{value:"Install React Testing Library",id:"install-react-testing-library",level:2},{value:"Import React Testing Library to your test",id:"import-react-testing-library-to-your-test",level:2},{value:"Basic Enzyme to React Testing Library migration examples",id:"basic-enzyme-to-react-testing-library-migration-examples",level:2},{value:"Test 1: Render the component, and check if the <code>h1</code> value is correct",id:"test-1-render-the-component-and-check-if-the-h1-value-is-correct",level:3},{value:"Test 2: Input texts must have correct value",id:"test-2-input-texts-must-have-correct-value",level:3},{value:"Using act() and wrapper.update()",id:"using-act-and-wrapperupdate",level:2},{value:"Simulate user events",id:"simulate-user-events",level:2},{value:"Triggering class methods in tests (<code>wrapper.instance()</code>)",id:"triggering-class-methods-in-tests-wrapperinstance",level:3},{value:"How to <code>shallow</code> render a component?",id:"how-to-shallow-render-a-component",level:3}],d={toc:h};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page is intended for developers who have experience with Enzyme and are\ntrying to understand how to migrate to React Testing Library. It does not go\ninto great detail about how to migrate all types of tests, but it does have some\nhelpful information for those who are comparing Enzyme with React Testing\nLibrary."),(0,o.kt)("h2",{id:"what-is-react-testing-library"},"What is React Testing Library?"),(0,o.kt)("p",null,"React Testing Library is part of an open-source project named\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library"},"Testing Library"),". There are several other\nhelpful tools and libraries in the Testing Library project which you can use to\nwrite more concise and useful tests. Besides React Testing Library, here are\nsome of the project's other libraries that can help you along the way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/testing-library/jest-dom"},"@testing-library/jest-dom")),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"jest-dom")," provides a set of custom Jest matchers that you can use to extend\nJest. These make your tests more declarative, clearer to read, and easier to\nmaintain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/testing-library/user-event"},"@testing-library/user-event"),":"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"user-event")," tries to simulate the real events that happen in the browser as\nthe user interacts with elements on the page. For example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"userEvent.click(checkbox)")," would change the state of the checkbox."))),(0,o.kt)("h2",{id:"why-should-i-use-react-testing-library"},"Why should I use React Testing Library?"),(0,o.kt)("p",null,"Enzyme is a powerful test library, and its contributors did a lot for the\nJavaScript community. In fact, many of the React Testing Library maintainers\nused and contributed to Enzyme for years before developing and working on React\nTesting Library. So we want to say thank you to the contributors of Enzyme!"),(0,o.kt)("p",null,"The primary purpose of React Testing Library is to increase confidence in your\ntests by testing your components in the way a user would use them. Users don't\ncare what happens behind the scenes, they just see and interact with the output.\nInstead of accessing the components' internal APIs or evaluating their ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),",\nyou'll get more confidence by writing your tests based on the component output."),(0,o.kt)("p",null,"React Testing Library aims to solve the problem that many developers face when\nwriting tests with Enzyme, which allows (and encourages) developers to test\n",(0,o.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/testing-implementation-details"},"implementation details"),".\nTests which do this ultimately prevent you from modifying and refactoring the\ncomponent without changing its tests. As a result, the tests slow down\ndevelopment speed and productivity. Every small change may require rewriting\nsome part of your tests, even if the change does not affect the component's\noutput."),(0,o.kt)("p",null,"Rewriting your tests in React Testing library is worthwhile because you'll be\ntrading tests that slow you down for tests that give you more confidence and\nincrease your productivity in the long run."),(0,o.kt)("h2",{id:"how-to-migrate-from-enzyme-to-react-testing-library"},"How to migrate from Enzyme to React Testing Library?"),(0,o.kt)("p",null,"To ensure a successful migration, we recommend doing it incrementally by running\nthe two test libraries side by side in the same application, porting your Enzyme\ntests to React Testing Library one by one. That makes it possible to migrate\neven large and complex applications without disrupting other business because\nthe work can be done collaboratively and spread out over time."),(0,o.kt)("h2",{id:"install-react-testing-library"},"Install React Testing Library"),(0,o.kt)("p",null,"First, install React Testing Library and the ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-dom")," helper library (you can\ncheck ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/react-testing-library/setup"},"this page")," for the complete installation and setup guide)."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @testing-library/react @testing-library/jest-dom\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @testing-library/react @testing-library/jest-dom\n")))),(0,o.kt)("h2",{id:"import-react-testing-library-to-your-test"},"Import React Testing Library to your test"),(0,o.kt)("p",null,"If you're using Jest (you can use other test frameworks), then you only need to\nimport the following modules into your test file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// import React so you can use JSX (React.createElement) in your test\nimport React from 'react'\n\n/**\n * render: lets us render the component as React would\n * screen: a utility for finding elements the same way the user does\n */\nimport {render, screen} from '@testing-library/react'\n")),(0,o.kt)("p",null,"The test structure can be the same as you would write with Enzyme:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"test('test title', () => {\n  // Your tests come here...\n})\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"it")," blocks with React Testing Library.\nReact Testing Library doesn't replace Jest, just Enzyme. We recommend ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),"\nbecause it helps with this:\n",(0,o.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/avoid-nesting-when-youre-testing"},"Avoid Nesting When You're Testing"),".")),(0,o.kt)("h2",{id:"basic-enzyme-to-react-testing-library-migration-examples"},"Basic Enzyme to React Testing Library migration examples"),(0,o.kt)("p",null,"One thing to keep in mind is that there's not a one-to-one mapping of Enzyme\nfeatures to React Testing Library features. Many Enzyme features result in\ninefficient tests anyway, so some of the features you're accustomed to with\nEnzyme need to be left behind (no more need for a ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper")," variable or\n",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper.update()")," calls, etc.)."),(0,o.kt)("p",null,"React Testing Library has helpful queries which let you access your component's\nelements and their properties. We'll show some typical Enzyme tests along with\nalternatives using React Testing Library."),(0,o.kt)("p",null,"Let's say we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Welcome")," component which shows a welcome message. We will\nhave a look at both Enzyme and React Testing Library tests to learn how we can\ntest this component:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React Component")),(0,o.kt)("p",null,"The following component gets a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," and shows a welcome message\nin an ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," element. It also has a text input which users can change to a\ndifferent name, and the template updates accordingly. Check the live version on\n",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/ecstatic-hellman-fh7in"},"CodeSandbox"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const Welcome = props => {\n  const [values, setValues] = useState({\n    firstName: props.firstName,\n    lastName: props.lastName,\n  })\n\n  const handleChange = event => {\n    setValues({...values, [event.target.name]: event.target.value})\n  }\n\n  return (\n    <div>\n      <h1>\n        Welcome, {values.firstName} {values.lastName}\n      </h1>\n\n      <form name="userName">\n        <label>\n          First Name\n          <input\n            value={values.firstName}\n            name="firstName"\n            onChange={handleChange}\n          />\n        </label>\n\n        <label>\n          Last Name\n          <input\n            value={values.lastName}\n            name="lastName"\n            onChange={handleChange}\n          />\n        </label>\n      </form>\n    </div>\n  )\n}\n\nexport default Welcome\n')),(0,o.kt)("h3",{id:"test-1-render-the-component-and-check-if-the-h1-value-is-correct"},"Test 1: Render the component, and check if the ",(0,o.kt)("inlineCode",{parentName:"h3"},"h1")," value is correct"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enzyme test")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"test('has correct welcome text', () => {\n  const wrapper = shallow(<Welcome firstName=\"John\" lastName=\"Doe\" />)\n  expect(wrapper.find('h1').text()).toEqual('Welcome, John Doe')\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React Testing library")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"test('has correct welcome text', () => {\n  render(<Welcome firstName=\"John\" lastName=\"Doe\" />)\n  expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe')\n})\n")),(0,o.kt)("p",null,"As you can see, the tests are pretty similar. Enzyme's ",(0,o.kt)("inlineCode",{parentName:"p"},"shallow")," renderer\ndoesn't render sub-components, so React Testing Library's ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," method is\nmore similar to Enzyme's ",(0,o.kt)("inlineCode",{parentName:"p"},"mount")," method."),(0,o.kt)("p",null,"In React Testing Library, you don't need to assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," result to a\nvariable (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper"),"). You can simply access the rendered output by calling\nfunctions on the ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," object. The other good thing to know is that React\nTesting Library automatically cleans up the environment after each test so you\ndon't need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup")," in an ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," function."),(0,o.kt)("p",null,"The other thing that you might notice is ",(0,o.kt)("inlineCode",{parentName:"p"},"getByRole")," which has ",(0,o.kt)("inlineCode",{parentName:"p"},"'heading'")," as\nits argument. ",(0,o.kt)("inlineCode",{parentName:"p"},"'heading'")," is the accessible role of the ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," element. You can\nlearn more about them on the ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/byrole"},"queries documentation page"),".\nOne of the things people quickly learn to love about Testing Library is how it\nencourages you to write more accessible applications (because if it's not\naccessible, then it's harder to test)."),(0,o.kt)("h3",{id:"test-2-input-texts-must-have-correct-value"},"Test 2: Input texts must have correct value"),(0,o.kt)("p",null,"In the component above, the input values are initialized with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"props.firstName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"props.lastName")," values. We need to check whether the\nvalue is correct or not."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enzyme")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"test('has correct input value', () => {\n  const wrapper = shallow(<Welcome firstName=\"John\" lastName=\"Doe\" />)\n  expect(wrapper.find('input[name=\"firstName\"]').value).toEqual('John')\n  expect(wrapper.find('input[name=\"lastName\"]').value).toEqual('Doe')\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React Testing Library")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"test('has correct input value', () => {\n  render(<Welcome firstName=\"John\" lastName=\"Doe\" />)\n  expect(screen.getByRole('form')).toHaveFormValues({\n    firstName: 'John',\n    lastName: 'Doe',\n  })\n})\n")),(0,o.kt)("p",null,"Cool! It's pretty simple and handy, and the tests are clear enough that we don't\nneed to talk much about them. Something that you might notice is that the\n",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},'role="form"')," attribute, but what is it?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"role")," is one of the accessibility-related attributes that is recommended to use\nto improve your web application for people with disabilities. Some elements have\ndefault ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," values and you don't need to set one for them, but some others\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," do not have default ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," values. You can use different approaches\nto access the ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," element, but we recommend trying to access elements by\ntheir implicit ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," to make sure your component is accessible by people with\ndisabilities and those using screen readers. ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/byrole"},"This section"),"\nof the query documentation might help you understand the concepts better."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," element must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute in order to have an implicit\n",(0,o.kt)("inlineCode",{parentName:"p"},"role")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"'form'")," (as required by the specification).")),(0,o.kt)("p",null,"React Testing Library aims to test the components how users use them. Users see\nbuttons, headings, forms and other elements by their role, not by their ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"class"),", or element tag name. Therefore, when you use React Testing Library you\nshould avoid accessing the DOM with the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector")," API. (You ",(0,o.kt)("em",{parentName:"p"},"can"),"\nuse it in your tests, but it's not recommended for the reasons stated in this\nparagraph.)"),(0,o.kt)("p",null,"React Testing Library exposes some handy query APIs which help you access the\ncomponent elements efficiently. You can see the\n",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/about#types-of-queries"},"list of available queries here"),". If you're\nnot sure which query you should use in a given situation, we have a great page\nwhich explains ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/queries/about#priority"},"which query to use"),", so check it\nout!"),(0,o.kt)("p",null,"If you still have a question about which of React Testing Library's queries to\nuse, then check out ",(0,o.kt)("a",{parentName:"p",href:"https://testing-playground.com"},"testing-playground.com")," and\nthe accompanying Chrome extension\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano"},"Testing Playground")),"\nwhich aims to enable developers to find the best query when writing tests. It\nalso helps you find the best queries to select elements. It allows you to\ninspect the element hierarchies in the Chrome Developer Tools and provides you\nwith suggestions on how to select them, all while encouraging good testing\npractices."),(0,o.kt)("h2",{id:"using-act-and-wrapperupdate"},"Using act() and wrapper.update()"),(0,o.kt)("p",null,"When testing asynchronous code in Enzyme, you usually need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"act()")," to\nrun your tests correctly. When using React Testing Library, you don't need to\nexplicitly call ",(0,o.kt)("inlineCode",{parentName:"p"},"act()")," most of the time because it wraps API calls with ",(0,o.kt)("inlineCode",{parentName:"p"},"act()"),"\nby default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"update()")," syncs the Enzyme component tree snapshot with the React component\ntree, so you may see ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapper.update()")," in Enzyme tests. React Testing Library\ndoes not have (or need) a similar method, which is good for you since you need\nto handle fewer things!"),(0,o.kt)("h2",{id:"simulate-user-events"},"Simulate user events"),(0,o.kt)("p",null,"There are two ways to simulate user events with React Testing Library. One way\nis to use the ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/user-event/intro"},(0,o.kt)("inlineCode",{parentName:"a"},"user-event"))," library, and the other way is\nto use ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/dom-testing-library/api-events"},(0,o.kt)("inlineCode",{parentName:"a"},"fireEvent"))," which is included in\nReact Testing Library. ",(0,o.kt)("inlineCode",{parentName:"p"},"user-event")," is actually built on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"fireEvent"),"\n(which simply calls ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatchEvent")," on the given element). ",(0,o.kt)("inlineCode",{parentName:"p"},"user-event")," is\ngenerally recommended because it ensures that all the events are fired in the\ncorrect order for typical user interactions. This helps ensure your tests\nresemble the way your software is actually used."),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@testing-library/user-event")," module, first install it:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @testing-library/user-event @testing-library/dom\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @testing-library/user-event @testing-library/dom\n")))),(0,o.kt)("p",null,"Now you can import it into your test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import userEvent from '@testing-library/user-event'\n")),(0,o.kt)("p",null,"To demonstrate how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-event")," library, imagine we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Checkbox"),"\ncomponent which shows a checkbox input and an associated label. We want to\nsimulate the event of a user clicking the checkbox:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\'\n\nconst Checkbox = () => {\n  return (\n    <div>\n      <label htmlFor="checkbox">Check</label>\n      <input id="checkbox" type="checkbox" />\n    </div>\n  )\n}\n\nexport default Checkbox\n')),(0,o.kt)("p",null,"We want to test that when a user clicks on the checkbox's associated label, the\ninput's \"checked\" property is properly set. Let's see how we might write a test\nfor that case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"test('handles click correctly', async () => {\n  render(<Checkbox />)\n  const user = userEvent.setup()\n\n  // You can also call this method directly on userEvent,\n  // but using the methods from `.setup()` is recommended.\n  await user.click(screen.getByText('Check'))\n\n  expect(screen.getByLabelText('Check')).toBeChecked()\n})\n")),(0,o.kt)("p",null,"Nice!"),(0,o.kt)("h3",{id:"triggering-class-methods-in-tests-wrapperinstance"},"Triggering class methods in tests (",(0,o.kt)("inlineCode",{parentName:"h3"},"wrapper.instance()"),")"),(0,o.kt)("p",null,"As we already discussed, we recommend against testing implementation details and\nthings that users will not be aware of. We aim to test and interact with the\ncomponent more like how our users would."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If your test uses ","`","instance()","`"," or ","`","state()","`",", know that you're testing\nthings that the user couldn't possibly know about or even care about, which\nwill take your tests further from giving you confidence that things will work\nwhen your user uses them. \u2014\n",(0,o.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/why-i-never-use-shallow-rendering#calling-methods-in-react-components"},"Kent C. Dodds"))),(0,o.kt)("p",null,'If you\'re unsure how to test something internal to your component, then take a\nstep back and consider: "What would the user do to trigger this code to run?"\nThen make your test do that.'),(0,o.kt)("h3",{id:"how-to-shallow-render-a-component"},"How to ",(0,o.kt)("inlineCode",{parentName:"h3"},"shallow")," render a component?"),(0,o.kt)("p",null,"In general, you should avoid mocking out components. However, if you need to,\nthen try using\n",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/manual-mocks.html"},"Jest's mocking feature"),". For more\ninformation, see the ",(0,o.kt)("a",{parentName:"p",href:"/testing-library-docs/docs/react-testing-library/faq"},"FAQ"),"."))}y.isMDXComponent=!0}}]);