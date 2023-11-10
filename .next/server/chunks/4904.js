"use strict";exports.id=4904,exports.ids=[4904],exports.modules={14406:(e,t,r)=>{var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TypographyRoot=void 0;var o=a(r(7071)),n=a(r(10434)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r(16689));a(r(580));var l=a(r(24224)),u=r(97986),p=r(29295),s=a(r(86549)),f=a(r(76610)),d=a(r(83113)),c=r(85051),y=r(20997);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}let useUtilityClasses=e=>{let{align:t,gutterBottom:r,noWrap:a,paragraph:o,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,d.default)(t)}`,r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,p.unstable_composeClasses)(l,c.getTypographyUtilityClass,i)},h=t.TypographyRoot=(0,s.default)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.default)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.default)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>v[e]||e,m=i.forwardRef(function(e,t){let r=(0,f.default)({props:e,name:"MuiTypography"}),a=transformDeprecatedColors(r.color),i=(0,u.unstable_extendSxProp)((0,n.default)({},r,{color:a})),{align:p="inherit",className:s,component:d,gutterBottom:c=!1,noWrap:v=!1,paragraph:m=!1,variant:_="body1",variantMapping:O=b}=i,j=(0,o.default)(i,g),P=(0,n.default)({},i,{align:p,color:a,className:s,component:d,gutterBottom:c,noWrap:v,paragraph:m,variant:_,variantMapping:O}),W=d||(m?"p":O[_]||b[_])||"span",w=useUtilityClasses(P);return(0,y.jsx)(h,(0,n.default)({as:W,ref:t,ownerState:P,className:(0,l.default)(w.root,s)},j))});t.default=m},34904:(e,t,r)=>{var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0});var o={typographyClasses:!0};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"typographyClasses",{enumerable:!0,get:function(){return i.default}});var n=a(r(14406)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r(85051));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}Object.keys(i).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(o,e))&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))})},85051:(e,t,r)=>{var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getTypographyUtilityClass=function(e){return(0,n.default)("MuiTypography",e)};var o=r(90657),n=a(r(25380));let i=(0,o.unstable_generateUtilityClasses)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);t.default=i}};