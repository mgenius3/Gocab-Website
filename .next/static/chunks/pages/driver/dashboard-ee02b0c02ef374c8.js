(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3517],{36379:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/driver/dashboard",function(){return r(38405)}])},71729:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Chart}});var n=r(85893),i=r(67294),a=r(2734),s=r(9253),o=r(74624),l=r(3023),c=r(75358),d=r(25048),h=r(56880),x=r(57715);function createData(e,t){return{time:e,amount:t}}let u=[createData("00:00",0),createData("03:00",300),createData("06:00",600),createData("09:00",800),createData("12:00",1500),createData("15:00",2e3),createData("18:00",2400),createData("21:00",2400),createData("24:00",void 0)];function Chart(){let e=(0,a.Z)();return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(x.default,{children:"Today"}),(0,n.jsx)(s.h,{children:(0,n.jsxs)(o.w,{data:u,margin:{top:16,right:16,bottom:0,left:24},children:[(0,n.jsx)(l.K,{dataKey:"time",stroke:e.palette.text.secondary,style:e.typography.body2}),(0,n.jsx)(c.B,{stroke:e.palette.text.secondary,style:e.typography.body2,children:(0,n.jsx)(d._,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary,...e.typography.body1},children:"Sales ($)"})}),(0,n.jsx)(h.x,{isAnimationActive:!1,type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}},11955:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Deposits}});var n=r(85893),i=r(67294),a=r(23795),s=r(15861),o=r(57715);function preventDefault(e){e.preventDefault()}function Deposits(){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(o.default,{children:"Recent Deposits"}),(0,n.jsx)(s.Z,{component:"p",variant:"h4",children:"$3,024.00"}),(0,n.jsx)(s.Z,{color:"text.secondary",sx:{flex:1},children:"on 15 March, 2019"}),(0,n.jsx)("div",{children:(0,n.jsx)(a.Z,{color:"primary",href:"#",onClick:preventDefault,children:"View balance"})})]})}},17078:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Orders}});var n=r(85893),i=r(67294),a=r(23795),s=r(7906),o=r(295),l=r(53252),c=r(53184),d=r(53816),h=r(57715);function createData(e,t,r,n,i,a){return{id:e,date:t,name:r,shipTo:n,paymentMethod:i,amount:a}}let x=[createData(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA ⠀•••• 3719",312.44),createData(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA ⠀•••• 2574",866.99),createData(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC ⠀•••• 1253",100.81),createData(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX ⠀•••• 2000",654.39),createData(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA ⠀•••• 5919",212.79)];function preventDefault(e){e.preventDefault()}function Orders(){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(h.default,{children:"Recent Orders"}),(0,n.jsxs)(s.Z,{size:"small",children:[(0,n.jsx)(c.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{children:"Date"}),(0,n.jsx)(l.Z,{children:"Name"}),(0,n.jsx)(l.Z,{children:"Ship To"}),(0,n.jsx)(l.Z,{children:"Payment Method"}),(0,n.jsx)(l.Z,{align:"right",children:"Sale Amount"})]})}),(0,n.jsx)(o.Z,{children:x.map(e=>(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l.Z,{children:e.date}),(0,n.jsx)(l.Z,{children:e.name}),(0,n.jsx)(l.Z,{children:e.shipTo}),(0,n.jsx)(l.Z,{children:e.paymentMethod}),(0,n.jsx)(l.Z,{align:"right",children:"$".concat(e.amount)})]},e.id))})]}),(0,n.jsx)(a.Z,{color:"primary",href:"#",onClick:preventDefault,sx:{mt:3},children:"See more orders"})]})}},57715:function(e,t,r){"use strict";r.r(t);var n=r(85893);r(67294);var i=r(45697),a=r.n(i),s=r(15861);function Title(e){return(0,n.jsx)(s.Z,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}Title.propTypes={children:a().node},t.default=Title},38405:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Dashboard}});var n=r(85893),i=r(67294),a=r(90948),s=r(21265),o=r(22430),l=r(66720),c=r(77533),d=r(87357),h=r(42293),x=r(10155),u=r(78462),p=r(15861),j=r(67720),f=r(93946),g=r(14948),m=r(65582),Z=r(86886),y=r(90629),D=r(23795),v=r(326),w=r(19572),b=r(65817),S=r(8822),M=r(71729),C=r(11955),P=r(17078);function Copyright(e){return(0,n.jsxs)(p.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,n.jsx)(D.Z,{color:"inherit",href:"https://mui.com/",children:"gocab"})," ",new Date().getFullYear(),"."]})}let k=(0,a.ZP)(h.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:r}=e;return{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...r&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}}}),_=(0,a.ZP)(c.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:r}=e;return{"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!r&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}}),T=(0,s.Z)();function Dashboard(){let[e,t]=i.useState(!0),toggleDrawer=()=>{t(!e)};return(0,n.jsx)(o.Z,{theme:T,children:(0,n.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,n.jsx)(l.ZP,{}),(0,n.jsx)(k,{position:"absolute",open:e,children:(0,n.jsxs)(x.Z,{sx:{pr:"24px"},children:[(0,n.jsx)(f.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:toggleDrawer,sx:{marginRight:"36px",...e&&{display:"none"}},children:(0,n.jsx)(v.Z,{})}),(0,n.jsx)(p.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Driver Dashboard"}),(0,n.jsx)(f.Z,{color:"inherit",children:(0,n.jsx)(g.Z,{badgeContent:4,color:"secondary",children:(0,n.jsx)(b.Z,{})})})]})}),(0,n.jsxs)(_,{variant:"permanent",open:e,children:[(0,n.jsx)(x.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,n.jsx)(f.Z,{onClick:toggleDrawer,children:(0,n.jsx)(w.Z,{})})}),(0,n.jsx)(j.Z,{}),(0,n.jsxs)(u.Z,{component:"nav",children:[(0,n.jsx)(S.default,{}),(0,n.jsx)(j.Z,{sx:{my:1}})]})]}),(0,n.jsxs)(d.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,n.jsx)(x.Z,{}),(0,n.jsxs)(m.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:[(0,n.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,n.jsx)(Z.ZP,{item:!0,xs:12,md:8,lg:9,children:(0,n.jsx)(y.Z,{sx:{p:2,display:"flex",flexDirection:"column",height:240},children:(0,n.jsx)(M.default,{})})}),(0,n.jsx)(Z.ZP,{item:!0,xs:12,md:4,lg:3,children:(0,n.jsx)(y.Z,{sx:{p:2,display:"flex",flexDirection:"column",height:240},children:(0,n.jsx)(C.default,{})})}),(0,n.jsx)(Z.ZP,{item:!0,xs:12,children:(0,n.jsx)(y.Z,{sx:{p:2,display:"flex",flexDirection:"column"},children:(0,n.jsx)(P.default,{})})})]}),(0,n.jsx)(Copyright,{sx:{pt:4}})]})]})]})})}},8822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return MainListItems}});var n=r(85893),i=r(67294),a=r(98619),s=r(48885),o=r(59334),l=r(74721),c=r(13540),d=r(41664),h=r.n(d);function MainListItems(){return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(h(),{href:"/driver/dashboard/information",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)(o.Z,{primary:"Information"})]})}),(0,n.jsx)(h(),{href:"/driver/login",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(c.Z,{})}),(0,n.jsx)(o.Z,{primary:"Sign Out"})]})})]})}}},function(e){e.O(0,[9726,7739,8961,4724,6325,2561,8205,6956,6438,9774,2888,179],function(){return e(e.s=36379)}),_N_E=e.O()}]);