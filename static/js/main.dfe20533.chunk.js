(this.webpackJsonpmegamenu=this.webpackJsonpmegamenu||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.1090473d.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.58d7e3d6.svg"},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),o=(a(12),a(5)),s=a.n(o),u=a(1),i=a(2),m=[{page:"products",links:[{label:"payment",icon:l.a.createElement(u.d,null),url:"/products"},{label:"terminal",icon:l.a.createElement(u.d,null),url:"/products"},{label:"connect",icon:l.a.createElement(u.d,null),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:l.a.createElement(u.b,null),url:"/products"},{label:"libraries",icon:l.a.createElement(u.b,null),url:"/products"},{label:"help",icon:l.a.createElement(u.b,null),url:"/products"},{label:"billing",icon:l.a.createElement(u.b,null),url:"/products"}]},{page:"company",links:[{label:"about",icon:l.a.createElement(u.c,null),url:"/products"},{label:"customers",icon:l.a.createElement(u.c,null),url:"/products"}]}],b=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],p=s[1],E=Object(n.useState)({}),d=Object(i.a)(E,2),g=d[0],v=d[1],f=Object(n.useState)({page:"",links:[]}),O=Object(i.a)(f,2),h=O[0],N=O[1];return l.a.createElement(b.Provider,{value:{isMegamenuOpen:u,isSidebarOpen:c,openMegamenu:function(e,t){var a=m.find((function(t){return t.page===e}));N(a),v(t),p(!0)},openSidebar:function(){r(!0)},closeMegamenu:function(){p(!1)},closeSidebar:function(){r(!1)},location:g,page:h}},e.children)},E=function(){var e=Object(n.useContext)(b),t=e.openSidebar,a=e.openMegamenu,c=e.closeMegamenu,r=function(e){var t=e.target;console.log(t);var n=e.target.textContent;console.log(n);var l=e.target.getBoundingClientRect();console.log(l);var c=(l.left+l.right)/2;console.log(c);var r=l.bottom-3;console.log(r),a(n,{center:c,bottom:r})};return l.a.createElement("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||c()}},l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("img",{src:s.a,alt:"stripe",className:"nav-logo"}),l.a.createElement("button",{className:"btn toggle-btn",onClick:t},l.a.createElement(u.a,null))),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:r},"products")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:r},"developers")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:r},"company"))),l.a.createElement("button",{className:"btn signin-btn"},"Signin")))},d=a(6),g=a.n(d),v=function(){var e=Object(n.useContext)(b).closeMegamenu;return l.a.createElement("section",{className:"hero",onMouseOver:e},l.a.createElement("div",{className:"hero-center"},l.a.createElement("article",{className:"hero-info"},l.a.createElement("h1",null,"payment infrastructure for the internet"),l.a.createElement("p",null,"Millions of companies of all sizes - from startups to Fortune 500s - use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online."),l.a.createElement("button",{className:"btn"},"Start now")),l.a.createElement("article",{className:"hero-images"},l.a.createElement("img",{src:g.a,alt:"phone",className:"phone-img"}))))},f=function(){var e=Object(n.useContext)(b),t=e.isSidebarOpen,a=e.closeSidebar;return l.a.createElement("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper")},l.a.createElement("div",{className:"sidebar"},l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(u.e,null)),l.a.createElement("div",{className:"sidebar-links"},m.map((function(e,t){var a=e.links,n=e.page;return l.a.createElement("article",{key:t},l.a.createElement("h4",null,n),l.a.createElement("div",{className:"sidebar-sublinks"},a.map((function(e,t){var a=e.url,n=e.icon,c=e.label;return l.a.createElement("a",{key:t,href:a},n,c)}))))})))))},O=function(){var e=Object(n.useContext)(b),t=e.isMegamenuOpen,a=e.location,c=e.page,r=c.page,o=c.links,s=Object(n.useRef)(null),u=Object(n.useState)("col-2"),m=Object(i.a)(u,2),p=m[0],E=m[1];return Object(n.useEffect)((function(){E("col-2");var e=s.current,t=a.center,n=a.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"),3===o.length&&E("col-3"),o.length>3&&E("col-4")}),[a,o]),l.a.createElement("aside",{className:"".concat(t?"submenu show":"submenu"),ref:s},l.a.createElement("h4",null,r),l.a.createElement("div",{className:"submenu-center ".concat(p)},o.map((function(e,t){var a=e.label,n=e.icon,c=e.url;return l.a.createElement("a",{key:t,href:c},n,a)}))))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(f,null),l.a.createElement(v,null),l.a.createElement(O,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(h,null))),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.dfe20533.chunk.js.map