(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2040],{15861:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var i=n(63366),o=n(87462),a=n(67294),s=n(63961),l=n(39707),u=n(94780),c=n(90948),h=n(71657),d=n(98216),p=n(1588),m=n(34867);function getTypographyUtilityClass(t){return(0,m.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(85893);let Z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=t=>{let{align:e,gutterBottom:n,noWrap:i,paragraph:o,variant:a,classes:s}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,n&&"gutterBottom",i&&"noWrap",o&&"paragraph"]};return(0,u.Z)(l,getTypographyUtilityClass,s)},g=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,d.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,o.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=t=>y[t]||t,v=a.forwardRef(function(t,e){let n=(0,h.Z)({props:t,name:"MuiTypography"}),a=transformDeprecatedColors(n.color),u=(0,l.Z)((0,o.Z)({},n,{color:a})),{align:c="inherit",className:d,component:p,gutterBottom:m=!1,noWrap:y=!1,paragraph:v=!1,variant:b="body1",variantMapping:C=x}=u,j=(0,i.Z)(u,Z),P=(0,o.Z)({},u,{align:c,color:a,className:d,component:p,gutterBottom:m,noWrap:y,paragraph:v,variant:b,variantMapping:C}),w=p||(v?"p":C[b]||x[b])||"span",_=useUtilityClasses(P);return(0,f.jsx)(g,(0,o.Z)({as:w,ref:e,ownerState:P,className:(0,s.Z)(_.root,d)},j))});var b=v},2734:function(t,e,n){"use strict";n.d(e,{Z:function(){return useTheme}}),n(67294);var i=n(96682),o=n(90247),a=n(10606);function useTheme(){let t=(0,i.Z)(o.Z);return t[a.Z]||t}},39707:function(t,e,n){"use strict";n.d(e,{Z:function(){return extendSxProp}});var i=n(87462),o=n(63366),a=n(59766),s=n(44920);let l=["sx"],splitProps=t=>{var e,n;let i={systemProps:{},otherProps:{}},o=null!=(e=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?e:s.Z;return Object.keys(t).forEach(e=>{o[e]?i.systemProps[e]=t[e]:i.otherProps[e]=t[e]}),i};function extendSxProp(t){let e;let{sx:n}=t,s=(0,o.Z)(t,l),{systemProps:u,otherProps:c}=splitProps(s);return e=Array.isArray(n)?[u,...n]:"function"==typeof n?(...t)=>{let e=n(...t);return(0,a.P)(e)?(0,i.Z)({},u,e):u}:(0,i.Z)({},u,n),(0,i.Z)({},c,{sx:e})}},82366:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about_us",function(){return n(25650)}])},25650:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return about_us}});var i=n(85893),o=n(67294),a=n(9008),s=n.n(a);n(83739);var l=n(39044),u=n(2962),c=n(73454),h=n(65582),d=n(15861),p=n(86886),m=n(90629),f=n(87462),Z=n(63366),g=n(63961),x=n(94780),y=n(90948),v=n(71657),b=n(1588),C=n(34867);function getCardUtilityClass(t){return(0,C.Z)("MuiCard",t)}(0,b.Z)("MuiCard",["root"]);let j=["className","raised"],useUtilityClasses=t=>{let{classes:e}=t;return(0,x.Z)({root:["root"]},getCardUtilityClass,e)},P=(0,y.ZP)(m.Z,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),w=o.forwardRef(function(t,e){let n=(0,v.Z)({props:t,name:"MuiCard"}),{className:o,raised:a=!1}=n,s=(0,Z.Z)(n,j),l=(0,f.Z)({},n,{raised:a}),u=useUtilityClasses(l);return(0,i.jsx)(P,(0,f.Z)({className:(0,g.Z)(u.root,o),elevation:a?8:void 0,ref:e,ownerState:l},s))});function getCardContentUtilityClass(t){return(0,C.Z)("MuiCardContent",t)}(0,b.Z)("MuiCardContent",["root"]);let _=["className","component"],CardContent_useUtilityClasses=t=>{let{classes:e}=t;return(0,x.Z)({root:["root"]},getCardContentUtilityClass,e)},M=(0,y.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),B=o.forwardRef(function(t,e){let n=(0,v.Z)({props:t,name:"MuiCardContent"}),{className:o,component:a="div"}=n,s=(0,Z.Z)(n,_),l=(0,f.Z)({},n,{component:a}),u=CardContent_useUtilityClasses(l);return(0,i.jsx)(M,(0,f.Z)({as:a,className:(0,g.Z)(u.root,o),ownerState:l,ref:e},s))});var about_us=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.PB,{title:"About Gocab",description:"Learn more about Gocab - Your trusted transportation partner.",canonical:"https://gocab.site/about",openGraph:{url:"https://gocab.site/about"}}),(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"About Gocab"}),(0,i.jsx)("link",{rel:"icon",href:"/images/icon.png"})]}),(0,i.jsx)(c.Z,{}),(0,i.jsxs)(h.Z,{style:{marginTop:"120px",marginBottom:"120px"},children:[(0,i.jsx)(d.Z,{variant:"h4",gutterBottom:!0,className:"text-blue-600",children:"About Gocab"}),(0,i.jsxs)(p.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(p.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(m.Z,{elevation:3,children:(0,i.jsx)(w,{children:(0,i.jsxs)(B,{children:[(0,i.jsx)(d.Z,{variant:"h6",children:"Our Mission"}),(0,i.jsx)(d.Z,{children:"At Gocab, our mission is to provide safe, reliable, and efficient transportation services for our customers. We are dedicated to making urban travel easier and more convenient."})]})})})}),(0,i.jsx)(p.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(m.Z,{elevation:3,children:(0,i.jsx)(w,{children:(0,i.jsxs)(B,{children:[(0,i.jsx)(d.Z,{variant:"h6",children:"Our Vision"}),(0,i.jsx)(d.Z,{children:"Our vision is to transform the way people move within cities. We envision a future where transportation is not only accessible but also sustainable, making our cities cleaner and more livable."})]})})})}),(0,i.jsx)(p.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(m.Z,{elevation:3,children:(0,i.jsx)(w,{children:(0,i.jsxs)(B,{children:[(0,i.jsx)(d.Z,{variant:"h6",children:"Our Values"}),(0,i.jsx)(d.Z,{children:"Gocab is built on a foundation of integrity, transparency, and customer-centricity. We value safety, innovation, and environmental responsibility."})]})})})}),(0,i.jsx)(p.ZP,{item:!0,xs:12,sm:12,children:(0,i.jsx)(m.Z,{elevation:3,children:(0,i.jsx)(w,{children:(0,i.jsxs)(B,{children:[(0,i.jsx)(d.Z,{variant:"h6",children:"Our Team"}),(0,i.jsx)(d.Z,{children:"Meet the dedicated and passionate team behind Gocab. We are committed to creating a better transportation experience for all."})]})})})})]})]}),(0,i.jsx)(l.Z,{})]})},70828:function(t,e,n){"use strict";e.Z=function(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=function r(t){var e,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e)}return i}(t))&&(i&&(i+=" "),i+=e);return i}}},function(t){t.O(0,[9726,7739,4724,1737,8977,679,8354,7230,9774,2888,179],function(){return t(t.s=82366)}),_N_E=t.O()}]);