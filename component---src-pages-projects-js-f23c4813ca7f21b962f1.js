(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"16l3":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),l=n("7oih"),o=n("vOnD"),r=o.default.ul.withConfig({displayName:"ProjectListing__StyledProjectListing",componentId:"sc-1t6jgis-0"})(["list-style:none;margin-top:0.5em;"]),c=o.default.li.withConfig({displayName:"ProjectListing__StyledProjectItem",componentId:"sc-1t6jgis-1"})(["font-size:1.8rem;margin-bottom:0.5em;line-height:1.5em;"]),d=o.default.span.withConfig({displayName:"ProjectListing__StyledLinkWrap",componentId:"sc-1t6jgis-2"})(["display:block;@media (min-width:550px){display:inline;}"]),s=o.default.a.withConfig({displayName:"ProjectListing__StyledProjectLink",componentId:"sc-1t6jgis-3"})([""]),m=o.default.span.withConfig({displayName:"ProjectListing__StyledLedeSpan",componentId:"sc-1t6jgis-4"})([""]),u=function(e){var t=e.projects.map((function(e){return i.a.createElement(c,{key:e.node.fields.slug},i.a.createElement(d,null,i.a.createElement(s,{href:e.node.frontmatter.link,target:"_blank"},e.node.frontmatter.title),": "),e.node.frontmatter.lede&&i.a.createElement(m,null,e.node.frontmatter.lede))}));return i.a.createElement(r,null,t)},p=o.default.section.withConfig({displayName:"ProjectListingSection__StyledListingSection",componentId:"sc-1xo5rhh-0"})(["margin-bottom:2em;"]),g=o.default.h2.withConfig({displayName:"ProjectListingSection__StyledSectionHeading",componentId:"sc-1xo5rhh-1"})(["margin-bottom:0;"]),f=function(e){var t=e.projects,n=e.sectionTitle;return t.length>0?i.a.createElement(p,null,i.a.createElement(g,null,n),i.a.createElement(u,{projects:t})):null},h=function(e){try{var t=e.data.allMdx?e.data.allMdx.edges:[];return i.a.createElement("div",null,i.a.createElement("h1",null,"Projects"),i.a.createElement(f,{projects:t}))}catch(n){return console.log(n),i.a.createElement("h2",null,"Unable to find any projects.")}};t.default=function(e){return i.a.createElement(l.a,null,i.a.createElement(h,e))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-f23c4813ca7f21b962f1.js.map