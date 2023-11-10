(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{12374:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/users",function(){return r(51661)}])},39536:function(e,n){"use strict";n.Z=class{async get(e){try{let n=await fetch("/v1"+this.baseURL+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});if(!n.ok){let e=await n.json();throw Error(e.msg)}let r=await n.json();return{response:r.msg,error:null}}catch(e){return{response:null,error:e.message}}}async post(e,n){try{let r=await fetch("/v1"+this.baseURL+e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)},body:JSON.stringify(n)});if(!r.ok){let e=await r.json();throw Error(e.msg)}let t=await r.json();return{response:t.msg,error:null}}catch(e){return{response:null,error:e.message}}}async delete(e){try{let n=await fetch("/v1"+this.baseURL+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});if(!n.ok){let e=await n.json();throw Error(e.msg)}let r=await n.json();return{response:r.msg,error:null}}catch(e){return{response:null,error:e.message}}}constructor(e,n=""){this.baseURL=e,this.token=n}}},75595:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return mainListItems}});var t=r(85893),s=r(67294),i=r(98619),a=r(48885),o=r(59334),l=r(42410),d=r(48571),c=r(15498),h=r(41664),u=r.n(h),x=r(9008),p=r.n(x);function mainListItems(){return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsxs)(p(),{children:[(0,t.jsx)("title",{children:"Gocab"}),(0,t.jsx)("link",{rel:"icon",href:"/images/icon.png"})]}),(0,t.jsx)(u(),{href:"/admin/dashboard/drivers",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a.Z,{children:(0,t.jsx)(l.Z,{})}),(0,t.jsx)(o.Z,{primary:"Drivers"})]})}),(0,t.jsx)(u(),{href:"/admin/dashboard/users",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a.Z,{children:(0,t.jsx)(d.Z,{})}),(0,t.jsx)(o.Z,{primary:"Users"})]})}),(0,t.jsx)(u(),{href:"/admin/dashboard/reports",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a.Z,{children:(0,t.jsx)(c.Z,{})}),(0,t.jsx)(o.Z,{primary:"Reports"})]})})]})}},51661:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Dashboard}});var t=r(85893),s=r(67294),i=r(90948),a=r(21265),o=r(22430),l=r(66720),d=r(77533),c=r(87357),h=r(42293),u=r(10155),x=r(78462),p=r(15861),g=r(67720),m=r(93946),j=r(14948),f=r(326),Z=r(19572),w=r(65817),b=r(75595),y=r(91782),v=r(11163),k=r(61202);let S=(0,i.ZP)(h.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:r}=e;return{zIndex:n.zIndex.drawer+1,transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),...r&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})}}}),P=(0,i.ZP)(d.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:r}=e;return{"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:240,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen}),boxSizing:"border-box",...!r&&{overflowX:"hidden",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),width:n.spacing(7),[n.breakpoints.up("sm")]:{width:n.spacing(9)}}}}}),E=(0,a.Z)();function Dashboard(){let e=(0,v.useRouter)(),[n,r]=s.useState(null),[i]=s.useState(()=>localStorage.getItem("adminToken")),[a,d]=s.useState(!0),toggleDrawer=()=>{d(!a)};return s.useEffect(()=>{try{let e=(0,k.o)(i);r(e)}catch(n){console.log(n),e.push("/admin/login")}},[i]),(0,t.jsx)(o.Z,{theme:E,children:(0,t.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,t.jsx)(l.ZP,{}),(0,t.jsx)(S,{position:"absolute",open:a,children:(0,t.jsxs)(u.Z,{sx:{pr:"24px"},children:[(0,t.jsx)(m.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:toggleDrawer,sx:{marginRight:"36px",...a&&{display:"none"}},children:(0,t.jsx)(f.Z,{})}),(0,t.jsxs)(p.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:[null==n?void 0:n.name," - Admin Dashboard(Users)"]}),(0,t.jsx)(m.Z,{color:"inherit",children:(0,t.jsx)(j.Z,{badgeContent:4,color:"secondary",children:(0,t.jsx)(w.Z,{})})})]})}),(0,t.jsxs)(P,{variant:"permanent",open:a,children:[(0,t.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,t.jsx)(m.Z,{onClick:toggleDrawer,children:(0,t.jsx)(Z.Z,{})})}),(0,t.jsx)(g.Z,{}),(0,t.jsxs)(x.Z,{component:"nav",children:[(0,t.jsx)(b.default,{}),(0,t.jsx)(g.Z,{sx:{my:1}})]})]}),(0,t.jsxs)(c.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,t.jsx)(u.Z,{}),(0,t.jsx)(y.default,{})]})]})})}},91782:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return AllUsersInformation}});var t=r(85893),s=r(67294),i=r(90629),a=r(7906),o=r(295),l=r(53252),d=r(72882),c=r(53184),h=r(45347),u=r(53816),x=r(39536),p=r(11163),g=r(61202);let m=[{id:"name",label:"Name",minWidth:100},{id:"email",label:"Email",minWidth:100},{id:"address",label:"Address",minWidth:100,format:e=>e.toLocaleString("en-US")},{id:"phone",label:"Phone Number",minWidth:100}];function AllUsersInformation(){let[e]=s.useState(()=>localStorage.getItem("adminToken")),n=new x.Z("/admin",e),r=(0,p.useRouter)(),[j,f]=s.useState(0),[Z,w]=s.useState(5),[b,y]=s.useState(null),[v,k]=s.useState(null),[S,P]=s.useState(null),fetchDriverInfo=async()=>{try{let{error:e,response:r}=await n.get("/all_users");if(e)throw Error(e);y(r)}catch(e){console.log(e.message)}};s.useEffect(()=>{try{let n=(0,g.o)(e);P(n),fetchDriverInfo()}catch(e){console.log(e),r.push("/admin/login")}},[e]);let[E,C]=s.useState(!1),handleOpeDriverModal=e=>{k(e),C(!0)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,t.jsx)(d.Z,{sx:{maxHeight:440},children:(0,t.jsxs)(a.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)(u.Z,{style:{background:"black"},children:m.map(e=>(0,t.jsx)(l.Z,{style:{minWidth:"100"},children:e.label},e.id))})}),(0,t.jsx)(o.Z,{children:b&&b.slice(j*Z,j*Z+Z).map((e,n)=>(0,t.jsxs)(u.Z,{hover:!0,role:"checkbox",tabIndex:-1,onClick:()=>handleOpeDriverModal(e),children:[(0,t.jsx)(l.Z,{children:e.name}),(0,t.jsx)(l.Z,{children:e.email}),(0,t.jsx)(l.Z,{children:e.address}),(0,t.jsx)(l.Z,{children:e.phone})]},n))})]})}),(0,t.jsx)(h.Z,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:null==b?void 0:b.length,rowsPerPage:Z,page:j,onPageChange:(e,n)=>{f(n)},onRowsPerPageChange:e=>{w(+e.target.value),f(0)}})]})})}}},function(e){e.O(0,[9726,7739,8961,4724,1159,6325,2561,3440,7820,9774,2888,179],function(){return e(e.s=12374)}),_N_E=e.O()}]);