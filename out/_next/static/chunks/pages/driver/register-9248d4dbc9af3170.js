(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6465],{15861:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var s=n(63366),i=n(87462),a=n(67294),o=n(63961),l=n(39707),c=n(94780),d=n(90948),h=n(71657),x=n(98216),u=n(1588),m=n(34867);function getTypographyUtilityClass(e){return(0,m.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var p=n(85893);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=e=>{let{align:t,gutterBottom:n,noWrap:s,paragraph:i,variant:a,classes:o}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,x.Z)(t)}`,n&&"gutterBottom",s&&"noWrap",i&&"paragraph"]};return(0,c.Z)(l,getTypographyUtilityClass,o)},g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,x.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,i.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>j[e]||e,v=a.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiTypography"}),a=transformDeprecatedColors(n.color),c=(0,l.Z)((0,i.Z)({},n,{color:a})),{align:d="inherit",className:x,component:u,gutterBottom:m=!1,noWrap:j=!1,paragraph:v=!1,variant:b="body1",variantMapping:w=y}=c,N=(0,s.Z)(c,f),Z=(0,i.Z)({},c,{align:d,color:a,className:x,component:u,gutterBottom:m,noWrap:j,paragraph:v,variant:b,variantMapping:w}),k=u||(v?"p":w[b]||y[b])||"span",C=useUtilityClasses(Z);return(0,p.jsx)(g,(0,i.Z)({as:k,ref:t,ownerState:Z,className:(0,o.Z)(C.root,x)},N))});var b=v},71579:function(e,t,n){"use strict";n.d(t,{Z:function(){return utils_isMuiElement}});var s=n(67294),utils_isMuiElement=function(e,t){var n,i;return s.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(i=e.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},39707:function(e,t,n){"use strict";n.d(t,{Z:function(){return extendSxProp}});var s=n(87462),i=n(63366),a=n(59766),o=n(44920);let l=["sx"],splitProps=e=>{var t,n;let s={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:o.Z;return Object.keys(e).forEach(t=>{i[t]?s.systemProps[t]=e[t]:s.otherProps[t]=e[t]}),s};function extendSxProp(e){let t;let{sx:n}=e,o=(0,i.Z)(e,l),{systemProps:c,otherProps:d}=splitProps(o);return t=Array.isArray(n)?[c,...n]:"function"==typeof n?(...e)=>{let t=n(...e);return(0,a.P)(t)?(0,s.Z)({},c,t):c}:(0,s.Z)({},c,n),(0,s.Z)({},d,{sx:t})}},45348:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/driver/register",function(){return n(1722)}])},39044:function(e,t,n){"use strict";n.d(t,{Z:function(){return Footer}});var s=n(85893),i=n(21737),a=n(41664),o=n.n(a);function Footer(){return(0,s.jsxs)("footer",{className:"pt-4",children:[(0,s.jsxs)("div",{className:"max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8",children:[(0,s.jsxs)("ul",{className:"Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10",children:[(0,s.jsxs)("li",{className:"space-y-5 row-span-2",children:[(0,s.jsx)("h2",{className:"text-sm tracking-wide text-gray-900 uppercase font-bold",children:"Services"}),(0,s.jsxs)("ul",{className:"space-y-4",children:[(0,s.jsx)("li",{children:(0,s.jsx)(o(),{className:"hover:text-gray-900 transition-colors duration-200 text-2xl",href:"#",children:"Logistics"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{className:"hover:text-gray-900 transition-colors duration-200 text-2xl",href:"#",children:"Transit"})})]})]}),(0,s.jsxs)("li",{className:"space-y-5",children:[(0,s.jsx)("h2",{className:"text-sm tracking-wide text-gray-900 uppercase font-bold",children:"Connect"}),(0,s.jsxs)("ul",{className:"space-y-4",children:[(0,s.jsx)("li",{children:(0,s.jsx)(o(),{className:"hover:text-gray-900 transition-colors duration-200 text-2xl",href:"https://twitter.com/gocabnig?s=21&t=6UkIQWvqM8RtLwHgHaxiVA",children:"Twitter"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{className:"hover:text-gray-900 transition-colors duration-200 text-2xl",href:"https://www.facebook.com/profile.php?id=61553801965019&mibextid=LQQJ4d",children:"Facebook"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{className:"hover:text-gray-900 transition-colors duration-200 font-semibold text-2xl",href:"/",children:"Instagram"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{className:"hover:text-gray-900 transition-colors duration-200 font-semibold text-2xl",href:"https://wa.me/message/5VRYHDJMBIWLD1",children:"Whatsapp"})})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black",children:[(0,s.jsxs)("ul",{className:"flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",children:[(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"/",className:"text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",children:"Terms of Service"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"/",className:"text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",children:"Privacy Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"/",className:"text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",children:"Cookie Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:"#",className:"text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold",children:"Partners"})})]}),(0,s.jsx)("ul",{className:"flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row",children:(0,s.jsx)(o(),{href:"/",className:"text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight",children:"\xa9 2023 Gocab Transit & Logistics."})})]})]}),(0,s.jsxs)(i.Z,{severity:"info",className:"text-center flex justify-center",children:["Built by —",(0,s.jsx)(o(),{href:"https://instagram.com/mgeniusoftware",target:"_blank",children:(0,s.jsx)("strong",{children:" @mgeniusoftware"})})]})]})}},73454:function(e,t,n){"use strict";n.d(t,{Z:function(){return Header}});var s=n(85893),i=n(41664),a=n.n(i),o=n(67294);function Header(){let[e,t]=o.useState(!1);return(0,s.jsx)("div",{className:"fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out",children:(0,s.jsxs)("div",{className:"flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between p-4",children:[(0,s.jsx)(a(),{href:"/",className:"text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline",children:(0,s.jsx)("h1",{className:"text-4xl Avenir tracking-tighter text-blue-600 md:text-4x1 lg:text-3xl",children:"Gocab"})}),(0,s.jsx)("button",{className:"text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none ",type:"button","aria-label":"button",onClick:()=>t(!e),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#191919",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-menu",children:[(0,s.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,s.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,s.jsx)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})]}),(0,s.jsx)("div",{className:"md:flex flex-grow items-center"+(e?" flex":" hidden"),children:(0,s.jsx)("nav",{className:"flex-col flex-grow ",children:(0,s.jsxs)("ul",{className:"flex flex-grow justify-end flex-wrap items-center",children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"https://gocab.vercel.app/driver/dashboard/information",className:"font-medium text-blue-600 hover:text-blue-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"Become a Driver"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:"/about_us",className:"font-medium text-blue-600 hover:text-blue-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"About Us"})}),(0,s.jsx)("li",{children:(0,s.jsxs)(a(),{className:"inline-flex items-center px-4 py-2 mt-2 font-medium text-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900",href:"/#download",children:[(0,s.jsx)("span",{className:"justify-center",children:"Download"}),(0,s.jsx)("svg",{className:"w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})})]})})})]})})}},39536:function(e,t){"use strict";t.Z=class{async get(e){try{let t=await fetch("/api"+this.baseURL+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});if(!t.ok){let e=await t.json();throw Error(e.msg)}let n=await t.json();return{response:n.msg,error:null}}catch(e){return{response:null,error:e.message}}}async post(e,t){try{let n=await fetch("/api"+this.baseURL+e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)},body:JSON.stringify(t)});if(!n.ok){let e=await n.json();throw Error(e.msg)}let s=await n.json();return{response:s.msg,error:null}}catch(e){return{response:null,error:e.message}}}async delete(e){try{let t=await fetch("/api"+this.baseURL+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}});if(!t.ok){let e=await t.json();throw Error(e.msg)}let n=await t.json();return{response:n.msg,error:null}}catch(e){return{response:null,error:e.message}}}constructor(e,t=""){this.baseURL=e,this.token=t}}},1722:function(e,t,n){"use strict";n.r(t);var s=n(85893),i=n(67294),a=n(73454),o=n(39044),l=n(22920);n(27967);var c=n(41664),d=n.n(c),h=n(39536),x=n(8987),u=n(9008),m=n.n(u),p=n(65582),f=n(90629),g=n(15861),y=n(86886),j=n(61903),v=n(69417);t.default=()=>{let e=new h.Z("/driver"),[t,n]=(0,i.useState)({name:"",phone:"",address:"",email:"",password:""}),[c,u]=(0,i.useState)(!1),handleChange=e=>{n({...t,[e.target.name]:e.target.value})},handleSubmit=async n=>{n.preventDefault();try{u(!0);let n={name:t.name,phone:t.phone,address:t.address,email:t.email,password:t.password},{error:s,response:i}=await e.post("/register",n);if(s)throw Error(s);localStorage.setItem("userToken",JSON.stringify(i)),l.Am.info("Successfully registered"),router.push("https://gocab.vercel.app/driver/dashboard/information"),u(!1)}catch(e){l.Am.error(e.message),u(!1)}};return(0,s.jsxs)("div",{children:[(0,s.jsxs)(m(),{children:[(0,s.jsx)("title",{children:"Register"}),(0,s.jsx)("link",{rel:"icon",href:"/images/icon.png"})]}),(0,s.jsx)(a.Z,{}),(0,s.jsxs)(p.Z,{maxWidth:"xs",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:[(0,s.jsxs)(f.Z,{elevation:3,style:{padding:"16px",marginTop:"20px"},children:[(0,s.jsx)(g.Z,{variant:"h5",align:"center",style:{margin:"16px"},children:"Sign Up As A Driver"}),(0,s.jsxs)("form",{onSubmit:handleSubmit,children:[(0,s.jsxs)(y.ZP,{container:!0,spacing:2,children:[(0,s.jsx)(y.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(j.Z,{label:"Name",name:"name",variant:"outlined",fullWidth:!0,required:!0,value:t.name,onChange:handleChange})}),(0,s.jsx)(y.ZP,{item:!0,xs:12,sm:6,children:(0,s.jsx)(j.Z,{label:"Phone",name:"phone",variant:"outlined",fullWidth:!0,required:!0,type:"number",value:t.phone,onChange:handleChange})}),(0,s.jsx)(y.ZP,{item:!0,xs:12,children:(0,s.jsx)(j.Z,{label:"Email",name:"email",variant:"outlined",fullWidth:!0,required:!0,type:"email",value:t.email,onChange:handleChange})}),(0,s.jsx)(y.ZP,{item:!0,xs:12,children:(0,s.jsx)(j.Z,{label:"Address",name:"address",variant:"outlined",fullWidth:!0,required:!0,value:t.address,onChange:handleChange})}),(0,s.jsx)(y.ZP,{item:!0,xs:12,children:(0,s.jsx)(j.Z,{label:"Password",name:"password",variant:"outlined",fullWidth:!0,required:!0,type:"password",value:t.password,onChange:handleChange})})]}),c?(0,s.jsxs)(x.Z,{loading:!0,variant:"outlined",className:"mt-5 mb-3 cursor-pointer",children:[" ","Sign Up"]}):(0,s.jsx)(v.Z,{type:"submit",variant:"outlined",className:"mt-5 mb-3 cursor-pointer",children:"Sign Up"}),(0,s.jsx)(y.ZP,{container:!0,children:(0,s.jsx)(y.ZP,{item:!0,style:{color:"#1976d2",textDecoration:"underline"},children:(0,s.jsx)(d(),{href:"https://google.com",variant:"body2",children:"Already have an account? Login"})})})]})]}),(0,s.jsx)(l.Ix,{position:"bottom-center"})]}),(0,s.jsx)(o.Z,{})]})}},9008:function(e,t,n){e.exports=n(79201)},70828:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t)}return s}(e))&&(s&&(s+=" "),s+=t);return s}}},function(e){e.O(0,[9726,7739,8961,4724,1159,1737,9723,8977,1903,9774,2888,179],function(){return e(e.s=45348)}),_N_E=e.O()}]);