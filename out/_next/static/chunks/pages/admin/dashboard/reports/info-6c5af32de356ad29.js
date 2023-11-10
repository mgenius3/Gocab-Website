(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9922],{87357:function(t,e,i){"use strict";i.d(e,{Z:function(){return Z}});var o=i(87462),r=i(63366),n=i(67294),l=i(70828),a=i(49731),s=i(86523),u=i(39707),c=i(96682),d=i(85893);let f=["className","component"];var m=i(37078),v=i(21265),g=i(10606);let p=(0,v.Z)(),h=function(t={}){let{themeId:e,defaultTheme:i,defaultClassName:m="MuiBox-root",generateClassName:v}=t,g=(0,a.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(s.Z),p=n.forwardRef(function(t,n){let a=(0,c.Z)(i),s=(0,u.Z)(t),{className:p,component:h="div"}=s,Z=(0,r.Z)(s,f);return(0,d.jsx)(g,(0,o.Z)({as:h,ref:n,className:(0,l.Z)(p,v?v(m):m),theme:e&&a[e]||a},Z))});return p}({themeId:g.Z,defaultTheme:p,defaultClassName:"MuiBox-root",generateClassName:m.Z.generate});var Z=h},35097:function(t,e,i){"use strict";i.d(e,{V:function(){return getDividerUtilityClass}});var o=i(1588),r=i(34867);function getDividerUtilityClass(t){return(0,r.Z)("MuiDivider",t)}let n=(0,o.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=n},84592:function(t,e,i){"use strict";i.d(e,{f:function(){return getListItemIconUtilityClass}});var o=i(1588),r=i(34867);function getListItemIconUtilityClass(t){return(0,r.Z)("MuiListItemIcon",t)}let n=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);e.Z=n},10155:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var o=i(63366),r=i(87462),n=i(67294),l=i(63961),a=i(94780),s=i(71657),u=i(90948),c=i(1588),d=i(34867);function getToolbarUtilityClass(t){return(0,d.Z)("MuiToolbar",t)}(0,c.Z)("MuiToolbar",["root","gutters","regular","dense"]);var f=i(85893);let m=["className","component","disableGutters","variant"],useUtilityClasses=t=>{let{classes:e,disableGutters:i,variant:o}=t;return(0,a.Z)({root:["root",!i&&"gutters",o]},getToolbarUtilityClass,e)},v=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,!i.disableGutters&&e.gutters,e[i.variant]]}})(({theme:t,ownerState:e})=>(0,r.Z)({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===e.variant&&{minHeight:48}),({theme:t,ownerState:e})=>"regular"===e.variant&&t.mixins.toolbar),g=n.forwardRef(function(t,e){let i=(0,s.Z)({props:t,name:"MuiToolbar"}),{className:n,component:a="div",disableGutters:u=!1,variant:c="regular"}=i,d=(0,o.Z)(i,m),g=(0,r.Z)({},i,{component:a,disableGutters:u,variant:c}),p=useUtilityClasses(g);return(0,f.jsx)(v,(0,r.Z)({as:a,className:(0,l.Z)(p.root,n),ref:e,ownerState:g},d))});var p=g},88169:function(t,e,i){"use strict";i.d(e,{Z:function(){return createSvgIcon}});var o=i(87462),r=i(67294),n=i(63366),l=i(63961),a=i(94780),s=i(98216),u=i(71657),c=i(90948),d=i(1588),f=i(34867);function getSvgIconUtilityClass(t){return(0,f.Z)("MuiSvgIcon",t)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=i(85893);let v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],useUtilityClasses=t=>{let{color:e,fontSize:i,classes:o}=t,r={root:["root","inherit"!==e&&`color${(0,s.Z)(e)}`,`fontSize${(0,s.Z)(i)}`]};return(0,a.Z)(r,getSvgIconUtilityClass,o)},g=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,"inherit"!==i.color&&e[`color${(0,s.Z)(i.color)}`],e[`fontSize${(0,s.Z)(i.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var i,o,r,n,l,a,s,u,c,d,f,m,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(i=t.transitions)||null==(o=i.create)?void 0:o.call(i,"fill",{duration:null==(r=t.transitions)||null==(r=r.duration)?void 0:r.shorter}),fontSize:({inherit:"inherit",small:(null==(n=t.typography)||null==(l=n.pxToRem)?void 0:l.call(n,20))||"1.25rem",medium:(null==(a=t.typography)||null==(s=a.pxToRem)?void 0:s.call(a,24))||"1.5rem",large:(null==(u=t.typography)||null==(c=u.pxToRem)?void 0:c.call(u,35))||"2.1875rem"})[e.fontSize],color:null!=(d=null==(f=(t.vars||t).palette)||null==(f=f[e.color])?void 0:f.main)?d:({action:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.active,disabled:null==(v=(t.vars||t).palette)||null==(v=v.action)?void 0:v.disabled,inherit:void 0})[e.color]}}),p=r.forwardRef(function(t,e){let i=(0,u.Z)({props:t,name:"MuiSvgIcon"}),{children:a,className:s,color:c="inherit",component:d="svg",fontSize:f="medium",htmlColor:p,inheritViewBox:h=!1,titleAccess:Z,viewBox:S="0 0 24 24"}=i,C=(0,n.Z)(i,v),y=r.isValidElement(a)&&"svg"===a.type,I=(0,o.Z)({},i,{color:c,component:d,fontSize:f,instanceFontSize:t.fontSize,inheritViewBox:h,viewBox:S,hasSvgAsChild:y}),w={};h||(w.viewBox=S);let x=useUtilityClasses(I);return(0,m.jsxs)(g,(0,o.Z)({as:d,className:(0,l.Z)(x.root,s),focusable:"false",color:p,"aria-hidden":!Z||void 0,role:Z?"img":void 0,ref:e},w,C,y&&a.props,{ownerState:I,children:[y?a.props.children:a,Z?(0,m.jsx)("title",{children:Z}):null]}))});function createSvgIcon(t,e){function Component(i,r){return(0,m.jsx)(p,(0,o.Z)({"data-testid":`${e}Icon`,ref:r},i,{children:t}))}return Component.muiName=p.muiName,r.memo(r.forwardRef(Component))}p.muiName="SvgIcon"},71025:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/reports/info",function(){return i(73084)}])}},function(t){t.O(0,[1627,3714,9726,7739,8961,1159,6325,1922,4778,3440,8623,5589,9774,2888,179],function(){return t(t.s=71025)}),_N_E=t.O()}]);