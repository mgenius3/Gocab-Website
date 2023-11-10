(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1225],{15861:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var o=r(63366),n=r(87462),a=r(67294),i=r(63961),s=r(39707),c=r(94780),l=r(90948),u=r(71657),p=r(98216),f=r(1588),y=r(34867);function getTypographyUtilityClass(t){return(0,y.Z)("MuiTypography",t)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(85893);let h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=t=>{let{align:e,gutterBottom:r,noWrap:o,paragraph:n,variant:a,classes:i}=t,s={root:["root",a,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,c.Z)(s,getTypographyUtilityClass,i)},d=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,p.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,n.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=t=>b[t]||t,x=a.forwardRef(function(t,e){let r=(0,u.Z)({props:t,name:"MuiTypography"}),a=transformDeprecatedColors(r.color),c=(0,s.Z)((0,n.Z)({},r,{color:a})),{align:l="inherit",className:p,component:f,gutterBottom:y=!1,noWrap:b=!1,paragraph:x=!1,variant:v="body1",variantMapping:S=g}=c,Z=(0,o.Z)(c,h),$=(0,n.Z)({},c,{align:l,color:a,className:p,component:f,gutterBottom:y,noWrap:b,paragraph:x,variant:v,variantMapping:S}),_=f||(x?"p":S[v]||g[v])||"span",C=useUtilityClasses($);return(0,m.jsx)(d,(0,n.Z)({as:_,ref:e,ownerState:$,className:(0,i.Z)(C.root,p)},Z))});var v=x},2734:function(t,e,r){"use strict";r.d(e,{Z:function(){return useTheme}}),r(67294);var o=r(96682),n=r(90247),a=r(10606);function useTheme(){let t=(0,o.Z)(n.Z);return t[a.Z]||t}},39707:function(t,e,r){"use strict";r.d(e,{Z:function(){return extendSxProp}});var o=r(87462),n=r(63366),a=r(59766),i=r(44920);let s=["sx"],splitProps=t=>{var e,r;let o={systemProps:{},otherProps:{}},n=null!=(e=null==t||null==(r=t.theme)?void 0:r.unstable_sxConfig)?e:i.Z;return Object.keys(t).forEach(e=>{n[e]?o.systemProps[e]=t[e]:o.otherProps[e]=t[e]}),o};function extendSxProp(t){let e;let{sx:r}=t,i=(0,n.Z)(t,s),{systemProps:c,otherProps:l}=splitProps(i);return e=Array.isArray(r)?[c,...r]:"function"==typeof r?(...t)=>{let e=r(...t);return(0,a.P)(e)?(0,o.Z)({},c,e):c}:(0,o.Z)({},c,r),(0,o.Z)({},l,{sx:e})}},76273:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/Chart",function(){return r(71683)}])},71683:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Chart}});var o=r(85893),n=r(67294),a=r(2734),i=r(9253),s=r(74624),c=r(3023),l=r(75358),u=r(25048),p=r(56880),f=r(27748);function createData(t,e){return{time:t,amount:e}}let y=[createData("00:00",0),createData("03:00",300),createData("06:00",600),createData("09:00",800),createData("12:00",1500),createData("15:00",2e3),createData("18:00",2400),createData("21:00",2400),createData("24:00",void 0)];function Chart(){let t=(0,a.Z)();return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(f.default,{children:"Today"}),(0,o.jsx)(i.h,{children:(0,o.jsxs)(s.w,{data:y,margin:{top:16,right:16,bottom:0,left:24},children:[(0,o.jsx)(c.K,{dataKey:"time",stroke:t.palette.text.secondary,style:t.typography.body2}),(0,o.jsx)(l.B,{stroke:t.palette.text.secondary,style:t.typography.body2,children:(0,o.jsx)(u._,{angle:270,position:"left",style:{textAnchor:"middle",fill:t.palette.text.primary,...t.typography.body1},children:"Sales ($)"})}),(0,o.jsx)(p.x,{isAnimationActive:!1,type:"monotone",dataKey:"amount",stroke:t.palette.primary.main,dot:!1})]})})]})}},27748:function(t,e,r){"use strict";r.r(e);var o=r(85893);r(67294);var n=r(45697),a=r.n(n),i=r(15861);function Title(t){return(0,o.jsx)(i.Z,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t.children})}Title.propTypes={children:a().node},e.default=Title},69921:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function z(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case u:case p:case a:case s:case i:case y:return t;default:switch(t=t&&t.$$typeof){case l:case f:case d:case h:case c:return t;default:return e}}case n:return e}}}function A(t){return z(t)===p}e.AsyncMode=u,e.ConcurrentMode=p,e.ContextConsumer=l,e.ContextProvider=c,e.Element=o,e.ForwardRef=f,e.Fragment=a,e.Lazy=d,e.Memo=h,e.Portal=n,e.Profiler=s,e.StrictMode=i,e.Suspense=y,e.isAsyncMode=function(t){return A(t)||z(t)===u},e.isConcurrentMode=A,e.isContextConsumer=function(t){return z(t)===l},e.isContextProvider=function(t){return z(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return z(t)===f},e.isFragment=function(t){return z(t)===a},e.isLazy=function(t){return z(t)===d},e.isMemo=function(t){return z(t)===h},e.isPortal=function(t){return z(t)===n},e.isProfiler=function(t){return z(t)===s},e.isStrictMode=function(t){return z(t)===i},e.isSuspense=function(t){return z(t)===y},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===p||t===s||t===i||t===y||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===d||t.$$typeof===h||t.$$typeof===c||t.$$typeof===l||t.$$typeof===f||t.$$typeof===b||t.$$typeof===x||t.$$typeof===v||t.$$typeof===g)},e.typeOf=z},59864:function(t,e,r){"use strict";t.exports=r(69921)},64836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}},function(t){t.O(0,[9726,6956,9774,2888,179],function(){return t(t.s=76273)}),_N_E=t.O()}]);