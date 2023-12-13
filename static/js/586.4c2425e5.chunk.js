"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[586],{586:function(e,n,r){r.r(n),r.d(n,{default:function(){return Ze}});var t,a,o,i,l,u,c,d,s,m=r(2791),h=r(9434),f=r(5218),x=r(5282),p=(r(7427),r(5705)),Z=r(2838),b=r(4294),v=r(2082),j=r(168),g=r(225),C=g.Z.form(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),y=r(184),S=x.object().shape({name:x.string().min(3).required(),number:x.string().phone("UA").required()}),k=function(){var e=(0,h.I0)(),n=(0,h.v9)((function(e){return e.contacts.contacts})),r=(0,p.TA)({initialValues:{name:"",number:""},validationSchema:S,onSubmit:function(r,t){var a=t.resetForm;n.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts.")):(e((0,v.uK)(r)),a())}});return(0,y.jsxs)(C,{onSubmit:r.handleSubmit,children:[(0,y.jsx)(Z.Z,{fullWidth:!0,id:"name",name:"name",label:"name",value:r.values.name,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),(0,y.jsx)(Z.Z,{fullWidth:!0,id:"number",name:"number",label:"number",type:"tel",value:r.values.number,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.number&&Boolean(r.errors.number),helperText:r.touched.number&&r.errors.number}),(0,y.jsx)(b.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"Add contact"})]})},B=r(3433),w=r(9439),I=r(4554),F=r(3896),A=r(3449),L=r(9502),P=r(2851),T=r(3356),W=r(3400),q=r(653),E=r(3044),_=r(8820),N=r(5397),O=r(690),J=r(4361),K=r(5803),U=r(1413),V=r(8184),z=r(890),D=(0,g.Z)(I.Z)(a||(a=(0,j.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  transform: translate(-50%, -50%);\n  width: 280px;\n  padding: 10px;\n  background-color: ",";\n"])),(function(e){return e.theme.palette.background.modal})),G=g.Z.form(o||(o=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 14px;\n"]))),R=(0,g.Z)(I.Z)(i||(i=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n"]))),H=(0,g.Z)(z.Z)(l||(l=(0,j.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.palette.text.primary})),M=x.object().shape({name:x.string().min(3).required(),number:x.string().phone("UA").required()}),Q=function(e){var n=e.id,r=e.open,t=e.handleClose,a=e.name,o=e.number,i=(0,h.I0)(),l=(0,p.TA)({initialValues:{name:a,number:o},validationSchema:M,onSubmit:function(e){var r=(0,U.Z)({id:n},e);i((0,v.mP)(r)),t()}});return(0,y.jsx)(V.Z,{open:r,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(D,{children:[(0,y.jsx)(H,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Edit contact"}),(0,y.jsxs)(G,{onSubmit:l.handleSubmit,children:[(0,y.jsx)(Z.Z,{fullWidth:!0,id:"name",name:"name",label:"name",value:l.values.name,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.name&&Boolean(l.errors.name),helperText:l.touched.name&&l.errors.name}),(0,y.jsx)(Z.Z,{fullWidth:!0,id:"number",name:"number",label:"number",type:"tel",value:l.values.number,onChange:l.handleChange,onBlur:l.handleBlur,error:l.touched.number&&Boolean(l.errors.number),helperText:l.touched.number&&l.errors.number}),(0,y.jsxs)(R,{children:[(0,y.jsx)(b.Z,{sx:{color:"#4caf50"},fullWidth:!0,type:"submit",children:"save"}),(0,y.jsx)(b.Z,{sx:{color:"#f44336"},onClick:t,children:"Cancel"})]})]})]})})},X=r(6259),Y=r(4852),$=r(9174),ee=(0,g.Z)(X.Z)(u||(u=(0,j.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.palette.text.primary})),ne=(0,g.Z)(Y.ZP)(c||(c=(0,j.Z)(["\n  padding-left: 0;\n"]))),re=(0,g.Z)($.Z)(d||(d=(0,j.Z)(["\n  @media screen and (max-width: 400px) {\n    padding-left: 0;\n  }\n"]))),te=function(e){var n=e.id,r=e.name,t=e.number,a=e.phone,o=e.favorite,i=e.handleAddFavorite,l=e.updateFavInLocalStorage,u=(0,m.useState)(!1),c=(0,w.Z)(u,2),d=c[0],s=c[1],f=(0,m.useState)(!1),x=(0,w.Z)(f,2),p=x[0],Z=x[1],b=(0,h.I0)(),j=o.includes(n);return(0,m.useEffect)((function(){Z(j)}),[j]),(0,y.jsxs)(ne,{secondaryAction:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(T.Z,{title:"Edit",children:(0,y.jsx)(W.Z,{edge:"end","aria-label":"edit",onClick:function(){return s(!0)},children:(0,y.jsx)(_.Z,{})})}),(0,y.jsx)(T.Z,{title:"Delete",children:(0,y.jsx)(W.Z,{edge:"end","aria-label":"delete",onClick:function(){return l(n),b((0,v.GK)(n))},children:(0,y.jsx)(N.Z,{})})}),(0,y.jsx)(Q,{open:d,handleClose:function(){return s(!1)},id:n,name:r,number:t})]}),children:[(0,y.jsx)(re,{label:"favorite",size:"small",icon:(0,y.jsx)(O.Z,{}),checkedIcon:(0,y.jsx)(J.Z,{}),onChange:function(){i(n)},checked:p}),(0,y.jsx)(q.Z,{children:(0,y.jsx)(E.Z,{children:(0,y.jsx)(K.Z,{})})}),(0,y.jsx)(ee,{primary:r,secondary:t||a})]})},ae=function(){var e,n=(0,m.useState)(null!==(e=JSON.parse(localStorage.getItem("favorite")))&&void 0!==e?e:[]),r=(0,w.Z)(n,2),t=r[0],a=r[1];console.log("addFavorite",t);var o=(0,m.useState)("all"),i=(0,w.Z)(o,2),l=i[0],u=i[1],c=(0,m.useState)([]),d=(0,w.Z)(c,2),s=d[0],f=d[1],x=(0,h.v9)((function(e){return e.contacts.contacts})),p=(0,h.v9)((function(e){return e.filter})).toLowerCase(),Z=x.filter((function(e){return e.name.toLowerCase().includes(p)})),b=function(e){var n=t.filter((function(n){return n!==e}));return a(n)},v=function(e){a((function(n){return n.includes(e)?n.filter((function(n){return n!==e})):[].concat((0,B.Z)(n),[e])}))};return(0,m.useEffect)((function(){localStorage.setItem("favorite",JSON.stringify(t))}),[t]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(A.ZP,{value:l,children:[(0,y.jsx)(I.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,y.jsxs)(L.Z,{onChange:function(e,n){if("favorite"===n){var r=Z.filter((function(e){return t.includes(e.id)}));f(r)}u(n)},"aria-label":"lab API tabs example",children:[(0,y.jsx)(F.Z,{label:"all",value:"all"}),(0,y.jsx)(F.Z,{label:"favotite",value:"favorite"})]})}),(0,y.jsx)(P.Z,{value:"all",sx:{padding:0},children:(0,y.jsx)("ul",{children:Z.sort((function(e,n){return e.name.localeCompare(n.name)})).map((function(e){var n=e.id,r=e.name,a=e.phone,o=e.number;return(0,y.jsx)(te,{id:n,name:r,phone:a,number:o,handleAddFavorite:v,favorite:t,updateFavInLocalStorage:b},n)}))})}),(0,y.jsx)(P.Z,{value:"favorite",sx:{padding:0},children:(0,y.jsx)("ul",{children:s.sort((function(e,n){return e.name.localeCompare(n.name)})).map((function(e){var n=e.id,r=e.name,a=e.phone,o=e.number;return(0,y.jsx)(te,{id:n,name:r,phone:a,number:o,handleAddFavorite:v,favorite:t,updateFavInLocalStorage:b},n)}))})})]})})},oe=r(6895),ie=function(){var e=(0,h.I0)();return(0,y.jsx)(Z.Z,{id:"filled-search",label:"Put the name for search",type:"search",variant:"filled",onChange:function(n){e((0,oe.sP)(n.currentTarget.value))}})},le=(0,g.Z)(z.Z)(s||(s=(0,j.Z)(["\n  text-align: center;\n  color: ",";\n"])),(function(e){return e.theme.palette.text.primary}));function ue(e){var n=e.msg;return(0,y.jsx)(le,{children:n})}var ce,de,se,me=function(e){return e.contacts.isLoading},he=function(e){return e.contacts.error},fe=(0,g.Z)(I.Z)(ce||(ce=(0,j.Z)(["\n  padding: 100px 10px 30px 10px;\n  height: 100dvh;\n"]))),xe=(0,g.Z)(I.Z)(de||(de=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin: 0 auto;\n  max-width: 350px;\n\n  padding: 12px;\n  border-radius: 16px;\n  background-color: ",";\n"])),(function(e){return e.theme.palette.background.secondary})),pe=(0,g.Z)(z.Z)(se||(se=(0,j.Z)(["\n  font-weight: 700;\n  text-align: center;\n  color: ",";\n"])),(function(e){return e.theme.palette.text.primary}));function Ze(){var e=(0,h.I0)(),n=(0,h.v9)(me),r=(0,h.v9)(he),t=(0,h.v9)((function(e){return e.contacts.contacts})),a=(0,h.v9)((function(e){return e.filter}));return(0,m.useEffect)((function(){e((0,v.yF)())}),[e]),(0,y.jsx)(fe,{children:(0,y.jsxs)(xe,{children:[(0,y.jsx)(f.x7,{position:"top-center",reverseOrder:!1}),(0,y.jsx)(pe,{variant:"h4",component:"h1",children:"Phonebook"}),(0,y.jsx)(k,{}),(0,y.jsx)(pe,{variant:"h5",component:"h2",children:"Contacts"}),t.length>0||a?(0,y.jsx)(ie,{}):(0,y.jsx)(ue,{msg:"No contacts added"}),n&&!r&&(0,y.jsx)("b",{children:"Request in progress..."}),(0,y.jsx)(ae,{})]})})}}}]);
//# sourceMappingURL=586.4c2425e5.chunk.js.map