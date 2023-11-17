(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2842],{28442:function(e,t,n){"use strict";function isHostComponent(e){return"string"==typeof e}n.d(t,{X:function(){return isHostComponent}})},63441:function(e,t,n){"use strict";var o=n(64836);t.Z=void 0;var r=o(n(64938)),i=n(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");t.Z=a},64938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(76031)},69417:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var o=n(63366),r=n(87462),i=n(67294),a=n(63961),l=n(47925),s=n(94780),u=n(41796),c=n(90948),d=n(71657),p=n(47739),v=n(98216),f=n(1588),m=n(34867);function getButtonUtilityClass(e){return(0,m.Z)("MuiButton",e)}let h=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=i.createContext({}),Z=i.createContext(void 0);var x=n(85893);let g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:t,disableElevation:n,fullWidth:o,size:i,variant:a,classes:l}=e,u={root:["root",a,`${a}${(0,v.Z)(t)}`,`size${(0,v.Z)(i)}`,`${a}Size${(0,v.Z)(i)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(i)}`]},c=(0,s.Z)(u,getButtonUtilityClass,l);return(0,r.Z)({},l,c)},commonIconStyles=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,v.Z)(n.color)}`],t[`size${(0,v.Z)(n.size)}`],t[`${n.variant}Size${(0,v.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,o;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],a="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${h.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${h.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,u.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}}),S=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(n.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),C=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(n.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),w=i.forwardRef(function(e,t){let n=i.useContext(b),s=i.useContext(Z),u=(0,l.Z)(n,e),c=(0,d.Z)({props:u,name:"MuiButton"}),{children:p,color:v="primary",component:f="button",className:m,disabled:h=!1,disableElevation:w=!1,disableFocusRipple:z=!1,endIcon:I,focusVisibleClassName:_,fullWidth:$=!1,size:M="medium",startIcon:P,type:k,variant:R="text"}=c,j=(0,o.Z)(c,g),E=(0,r.Z)({},c,{color:v,component:f,disabled:h,disableElevation:w,disableFocusRipple:z,fullWidth:$,size:M,type:k,variant:R}),T=useUtilityClasses(E),N=P&&(0,x.jsx)(S,{className:T.startIcon,ownerState:E,children:P}),L=I&&(0,x.jsx)(C,{className:T.endIcon,ownerState:E,children:I}),F=s||"";return(0,x.jsxs)(y,(0,r.Z)({ownerState:E,className:(0,a.Z)(n.className,T.root,m,F),component:f,disabled:h,focusRipple:!z,focusVisibleClassName:(0,a.Z)(T.focusVisible,_),ref:t,type:k},j,{classes:T,children:[N,p,L]}))});var z=w},78462:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var o=n(63366),r=n(87462),i=n(67294),a=n(63961),l=n(94780),s=n(90948),u=n(71657),c=n(59773),d=n(1588),p=n(34867);function getListUtilityClass(e){return(0,p.Z)("MuiList",e)}(0,d.Z)("MuiList",["root","padding","dense","subheader"]);var v=n(85893);let f=["children","className","component","dense","disablePadding","subheader"],useUtilityClasses=e=>{let{classes:t,disablePadding:n,dense:o,subheader:r}=e;return(0,l.Z)({root:["root",!n&&"padding",o&&"dense",r&&"subheader"]},getListUtilityClass,t)},m=(0,s.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),h=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiList"}),{children:l,className:s,component:d="ul",dense:p=!1,disablePadding:h=!1,subheader:b}=n,Z=(0,o.Z)(n,f),x=i.useMemo(()=>({dense:p}),[p]),g=(0,r.Z)({},n,{component:d,dense:p,disablePadding:h}),y=useUtilityClasses(g);return(0,v.jsx)(c.Z.Provider,{value:x,children:(0,v.jsxs)(m,(0,r.Z)({as:d,className:(0,a.Z)(y.root,s),ref:t,ownerState:g},Z,{children:[b,l]}))})});var b=h},59773:function(e,t,n){"use strict";var o=n(67294);let r=o.createContext({});t.Z=r},26336:function(e,t,n){"use strict";n.d(t,{L:function(){return getListItemTextUtilityClass}});var o=n(1588),r=n(34867);function getListItemTextUtilityClass(e){return(0,r.Z)("MuiListItemText",e)}let i=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i},90629:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var o=n(63366),r=n(87462),i=n(67294),a=n(63961),l=n(94780),s=n(41796),u=n(90948),styles_getOverlayAlpha=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),c=n(71657),d=n(1588),p=n(34867);function getPaperUtilityClass(e){return(0,p.Z)("MuiPaper",e)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=n(85893);let f=["className","component","elevation","square","variant"],useUtilityClasses=e=>{let{square:t,elevation:n,variant:o,classes:r}=e,i={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,l.Z)(i,getPaperUtilityClass,r)},m=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",styles_getOverlayAlpha(t.elevation))}, ${(0,s.Fq)("#fff",styles_getOverlayAlpha(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))}),h=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiPaper"}),{className:i,component:l="div",elevation:s=1,square:u=!1,variant:d="elevation"}=n,p=(0,o.Z)(n,f),h=(0,r.Z)({},n,{component:l,elevation:s,square:u,variant:d}),b=useUtilityClasses(h);return(0,v.jsx)(m,(0,r.Z)({as:l,ownerState:h,className:(0,a.Z)(b.root,i),ref:t},p))});var b=h},57144:function(e,t,n){"use strict";var o=n(39336);t.Z=o.Z},76031:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return utils_deprecatedPropType},isMuiElement:function(){return s.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return c.Z},requirePropFactory:function(){return utils_requirePropFactory},setRef:function(){return d},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return utils_unsupportedProp},useControlled:function(){return f.Z},useEventCallback:function(){return m.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return b.Z}});var o=n(37078),r=n(98216),i=n(49064).Z,a=n(88169),l=n(57144),utils_deprecatedPropType=function(e,t){return()=>null},s=n(71579),u=n(8038),c=n(5340);n(87462);var utils_requirePropFactory=function(e,t){return()=>null},d=n(7960).Z,p=n(58974),v=n(27909),utils_unsupportedProp=function(e,t,n,o,r){return null},f=n(72021),m=n(2068),h=n(51705),b=n(18791);let Z={configure:e=>{o.Z.configure(e)}}},71579:function(e,t,n){"use strict";n.d(t,{Z:function(){return utils_isMuiElement}});var o=n(67294),utils_isMuiElement=function(e,t){var n,r;return o.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)}},8038:function(e,t,n){"use strict";var o=n(82690);t.Z=o.Z},5340:function(e,t,n){"use strict";var o=n(74161);t.Z=o.Z},72021:function(e,t,n){"use strict";n.d(t,{Z:function(){return utils_useControlled}});var o=n(67294),utils_useControlled=function({controlled:e,default:t,name:n,state:r="value"}){let{current:i}=o.useRef(void 0!==e),[a,l]=o.useState(t),s=i?e:a,u=o.useCallback(e=>{i||l(e)},[]);return[s,u]}},58974:function(e,t,n){"use strict";var o=n(73546);t.Z=o.Z},27909:function(e,t,n){"use strict";var o=n(92996);t.Z=o.Z},49064:function(e,t,n){"use strict";function createChainedFunction(...e){return e.reduce((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}n.d(t,{Z:function(){return createChainedFunction}})},39336:function(e,t,n){"use strict";function debounce(e,t=166){let n;function debounced(...o){clearTimeout(n),n=setTimeout(()=>{e.apply(this,o)},t)}return debounced.clear=()=>{clearTimeout(n)},debounced}n.d(t,{Z:function(){return debounce}})},82690:function(e,t,n){"use strict";function ownerDocument(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return ownerDocument}})},74161:function(e,t,n){"use strict";n.d(t,{Z:function(){return ownerWindow}});var o=n(82690);function ownerWindow(e){let t=(0,o.Z)(e);return t.defaultView||window}},92996:function(e,t,n){"use strict";n.d(t,{Z:function(){return useId}});var o,r=n(67294);let i=0,a=(o||(o=n.t(r,2)))["useId".toString()];function useId(e){if(void 0!==a){let t=a();return null!=e?e:t}return function(e){let[t,n]=r.useState(e),o=e||t;return r.useEffect(()=>{null==t&&(i+=1,n(`mui-${i}`))},[t]),o}(e)}},40064:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/driver/dashboard/information/info",function(){return n(7847)}])},7847:function(e,t,n){"use strict";n.r(t);var o=n(85893);n(67294);var r=n(63441),i=n(90629),a=n(78462),l=n(97212),s=n(59334),u=n(69417),c=n(21737),d=n(41664),p=n.n(d);let v={display:"block",marginBottom:"12px"};t.default=e=>{let{driverInfo:t}=e;return(0,o.jsx)(i.Z,{children:(0,o.jsx)(a.Z,{children:t?(0,o.jsxs)(l.ZP,{style:v,children:[(0,o.jsx)(s.Z,{primary:"Vehicle Model",secondary:"".concat(t.v_model)}),(0,o.jsx)(s.Z,{primary:"Vehicle Number",secondary:"".concat(t.v_number)}),(0,o.jsx)(s.Z,{primary:"Vehicle Colour",secondary:"".concat(t.v_colour)}),(0,o.jsx)(s.Z,{primary:"Means of Identity",secondary:"".concat(t.means_of_identity)}),(0,o.jsx)(s.Z,{primary:"Ride Offers: ".concat(t.offers),secondary:"".concat(t.offers)}),(0,o.jsxs)(s.Z,{className:"mb-3",children:[(0,o.jsx)("p",{children:"Documents"}),(0,o.jsx)(p(),{href:t.documents,children:(0,o.jsxs)(u.Z,{variant:"outlined",children:[(0,o.jsx)(r.Z,{})," View"]})})]}),"on review"==t.verification_status?(0,o.jsx)(c.Z,{severity:"info",children:"Your application to become a driver is on review"}):"approved"==t.verification_status?(0,o.jsx)(c.Z,{severity:"success",children:"Your application to be a Gocab Driver has been approved"}):(0,o.jsx)(c.Z,{severity:"error",children:"Your application to be a Gocab Driver has been declined"})]}):null})})}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[9726,7739,4724,1737,4778,9774,2888,179],function(){return e(e.s=40064)}),_N_E=e.O()}]);