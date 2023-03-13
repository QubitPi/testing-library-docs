"use strict";(self.webpackChunkreact_testing_library_docs=self.webpackChunkreact_testing_library_docs||[]).push([[7918],{9055:(e,t,a)=>{a.r(t),a.d(t,{default:()=>be});var n=a(7294),r=a(833),l=a(9688),i=n.createContext(null);function o(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(i);if(null===e)throw new l.i6("DocProvider");return e}function c(){var e,t=s(),a=t.metadata,l=t.frontMatter,i=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=i.image)?e:l.image})}var d=a(6010),m=a(7524),u=a(7462),v=a(5999),b=a(2244);function f(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b.Z,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b.Z,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){var e=s().metadata;return n.createElement(f,{previous:e.previous,next:e.next})}var p=a(2263),E=a(9960),g=a(143),L=a(5281),N=a(373),_=a(4477);var k={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){var t=k[e.versionMetadata.banner];return n.createElement(t,e)}function C(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(E.Z,{to:a,onClick:r},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){var t,a=e.className,r=e.versionMetadata,l=(0,p.Z)().siteConfig.title,i=(0,g.gA)({failfast:!0}).pluginId,o=(0,N.J)(i).savePreferredVersionName,s=(0,g.Jo)(i),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(Z,{siteTitle:l,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(C,{versionLabel:m.label,to:u.path,onClick:function(){return o(m.name)}})))}function H(e){var t=e.className,a=(0,_.E)();return a.banner?n.createElement(x,{className:t,versionMetadata:a}):null}function T(e){var t=e.className,a=(0,_.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function y(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function U(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:L.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(U,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var w=a(4881),M=a(6233);const I="lastUpdated_vwxv";function B(e){return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M.Z,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",I)},(a||r)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function V(){var e=s().metadata,t=e.editUrl,a=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,i=e.tags,o=i.length>0,c=!!(t||a||l);return o||c?n.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(B,{tags:i}),c&&n.createElement(O,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var S=a(6043),P=a(3743),D=a(3366);const R="tocCollapsibleButton_TO0P",j="tocCollapsibleButtonExpanded_MG3E";var z=["collapsed"];function F(e){var t=e.collapsed,a=(0,D.Z)(e,z);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",R,!t&&j,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q="tocCollapsible_ETCw",G="tocCollapsibleContent_vkbj",J="tocCollapsibleExpanded_sAul";function K(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,S.u)({initialState:!0}),o=i.collapsed,s=i.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(q,!o&&J,a)},n.createElement(F,{collapsed:o,onClick:s}),n.createElement(S.z,{lazy:!0,className:G,collapsed:o},n.createElement(P.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const Q="tocMobile_ITEo";function W(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(K,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,Q)})}var X=a(9407);function Y(){var e=s(),t=e.toc,a=e.frontMatter;return n.createElement(X.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var $=a(2503),ee=a(210);function te(e){var t,a,r,l,i=e.children,o=(t=s(),a=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:a.title);return n.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},o&&n.createElement("header",null,n.createElement($.Z,{as:"h1"},o)),n.createElement(ee.Z,null,i))}var ae=a(3791),ne=a(8596),re=a(4996);function le(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ie={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function oe(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(E.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function se(e){var t=e.children,a=e.active,r=e.index,l=e.addMicrodata;return n.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ce(){var e=(0,re.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(E.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",ie.breadcrumbsItemLink),href:e},n.createElement(le,{className:ie.breadcrumbHomeIcon})))}function de(){var e=(0,ae.s1)(),t=(0,ne.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ce,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(se,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(oe,{href:t.href,isLast:r},t.label))})))):null}const me="docItemContainer_Djhp",ue="docItemCol_VOVn";function ve(e){var t,a,r,l,i,o,c=e.children,u=(t=s(),a=t.frontMatter,r=t.toc,l=(0,m.i)(),i=a.hide_table_of_contents,o=!i&&r.length>0,{hidden:i,mobile:o?n.createElement(W,null):void 0,desktop:!o||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(Y,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&ue)},n.createElement(H,null),n.createElement("div",{className:me},n.createElement("article",null,n.createElement(de,null),n.createElement(T,null),u.mobile,n.createElement(te,null,c),n.createElement(V,null)),n.createElement(h,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function be(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(o,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(c,null),n.createElement(ve,null,n.createElement(a,null))))}},9407:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),o=a(3743);const s="tableOfContents_bqdL";var c=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),r=a(3366),l=a(7294),i=a(6668),o=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,o);a>=0?t[a].children.push(l):n.push(l)})),n}function c(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=m(o,{anchorTopOffset:a.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function b(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(b,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}const f=l.memo(b);var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,b=void 0===u?void 0:u,p=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,h),L=(0,i.L)(),N=null!=p?p:L.tableOfContents.minHeadingLevel,_=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:_});return v((0,l.useMemo)((function(){if(m&&b)return{linkClassName:m,linkActiveClassName:b,minHeadingLevel:N,maxHeadingLevel:_}}),[m,b,N,_])),l.createElement(f,(0,n.Z)({toc:k,className:o,linkClassName:m},g))}},4477:(e,t,a)=>{a.d(t,{E:()=>o,q:()=>i});var n=a(7294),r=a(9688),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);