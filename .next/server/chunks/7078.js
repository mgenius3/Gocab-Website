"use strict";exports.id=7078,exports.ids=[7078],exports.modules={17078:(e,r,n)=>{n.r(r),n.d(r,{default:()=>Orders});var t=n(20997),a=n(16689),l=n(85246),i=n.n(l),s=n(59181),c=n.n(s),d=n(28823),o=n.n(d),h=n(95612),x=n.n(h),u=n(15953),j=n.n(u),p=n(34848),m=n.n(p),M=n(57715);function createData(e,r,n,t,a,l){return{id:e,date:r,name:n,shipTo:t,paymentMethod:a,amount:l}}let f=[createData(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA ⠀•••• 3719",312.44),createData(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA ⠀•••• 2574",866.99),createData(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC ⠀•••• 1253",100.81),createData(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX ⠀•••• 2000",654.39),createData(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA ⠀•••• 5919",212.79)];function preventDefault(e){e.preventDefault()}function Orders(){return(0,t.jsxs)(a.Fragment,{children:[t.jsx(M.default,{children:"Recent Orders"}),(0,t.jsxs)(c(),{size:"small",children:[t.jsx(j(),{children:(0,t.jsxs)(m(),{children:[t.jsx(x(),{children:"Date"}),t.jsx(x(),{children:"Name"}),t.jsx(x(),{children:"Ship To"}),t.jsx(x(),{children:"Payment Method"}),t.jsx(x(),{align:"right",children:"Sale Amount"})]})}),t.jsx(o(),{children:f.map(e=>(0,t.jsxs)(m(),{children:[t.jsx(x(),{children:e.date}),t.jsx(x(),{children:e.name}),t.jsx(x(),{children:e.shipTo}),t.jsx(x(),{children:e.paymentMethod}),t.jsx(x(),{align:"right",children:`$${e.amount}`})]},e.id))})]}),t.jsx(i(),{color:"primary",href:"#",onClick:preventDefault,sx:{mt:3},children:"See more orders"})]})}},57715:(e,r,n)=>{n.r(r),n.d(r,{default:()=>c});var t=n(20997);n(16689);var a=n(580),l=n.n(a),i=n(27163),s=n.n(i);function Title(e){return t.jsx(s(),{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}Title.propTypes={children:l().node};let c=Title}};