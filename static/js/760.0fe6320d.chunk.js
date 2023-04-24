"use strict";(self.webpackChunkITD_React_project=self.webpackChunkITD_React_project||[]).push([[760],{9899:function(n,e,t){t.d(e,{d:function(){return l}});var a=t(1413),s=t(7978),c=t(3145),o=t(4958),r=t(184),i=s.c.Option,l=function(n){return(0,r.jsxs)(i,(0,a.Z)((0,a.Z)({},n),{},{children:[(0,r.jsx)(c.Z,{name:n.data.value,width:18,height:18,secondaryClassName:o.Z.categoryIcon}),n.data.label]}))}},9760:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var a=t(9439),s=t(2426),c=t.n(s),o=t(3145),r="TransactionsItem_transactionItem__I4efX",i="TransactionsItem_commentWrapper__NOBZi",l="TransactionsItem_transactionThumb__8EK3s",d="TransactionsItem_thumb__siEpA",u="TransactionsItem_transactionDate__i0qAD",m="TransactionsItem_transactionComment__otRnm",_="TransactionsItem_transactionSum__heA7p",h="TransactionsItem_transactionCategory__udzxZ",p="TransactionsItem_buttonThumb__g1kfu",f="TransactionsItem_buttonItem__xDui1",x=t(184),v=function(n){var e=n.openModal,t=n.updateTransaction,a=n.id,s=n.sum,v=n.date,j=n.category,b=n.comment,I=n.filterIt;return(0,x.jsxs)("li",{className:r,onClick:function(){return t(a,v)},children:[(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)("p",{className:u,children:c()(v).format("MM.YYYY")}),(0,x.jsx)("p",{className:m,children:b})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("p",{className:_,children:[s," \u20b4"]})})]}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("p",{className:h,children:j}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("button",{className:f,type:"button",onClick:e,children:(0,x.jsx)(o.Z,{name:"icon-pencil",width:"22",height:"22",className:"icon-pencil"})}),(0,x.jsx)("button",{className:f,type:"button",onClick:function(){return I(a)},children:(0,x.jsx)(o.Z,{name:"icon-trash",width:"24",height:"24",className:"icon-trash"})})]})]})]},a)},j="Transactions_transactionList__76l1J",b="Transactions_formWrapper__jwN96",I="Transactions_formLabel__k1ayP",N="Transactions_formInput__tc3pe",T="Transactions_buttonEdit__vYe-K",g="Transactions_buttonCloseModal__xCCdw",y="Transactions_noTransactionWrapper__wWn6x",C="Transactions_noTransactionText__ncH1P",Z="Transactions_options__100NG",A="Transactions_overlayAddIncome__YfVME",M="Transactions_modalWrapper__BOCR6",S="Transactions_labelForSelector__RwlCT",w="Transactions_labelText__Vti7J",E="Transactions_flex__8v7Ld",k="Transactions_error__8eB8D",D=t(4164),q=t(8630),R=t(9434),L=t(4958),P=t(2791),O=t(9886),W=t(3255),Y=t(9899),F=t(5705),V=t(8007),J=t(318),B=document.querySelector("#modal-root"),H=function(n){var e=n.closeModal,t=n.value,s=n.id,c=(0,P.useState)("Other"),r=(0,a.Z)(c,2),i=r[0],l=r[1],d=(0,P.useState)(0),u=(0,a.Z)(d,1)[0],m=(0,P.useState)(""),_=(0,a.Z)(m,1)[0],h=(0,R.v9)(O.Dw),p=(0,R.I0)();(0,P.useEffect)((function(){p((0,J.n3)())}),[p]);var f=h.map((function(n){return{value:n.name,label:n.title}})),v=function(n){l(n.value)};return(0,D.createPortal)((0,x.jsx)("div",{className:A,children:(0,x.jsx)("div",{className:M,children:(0,x.jsx)(F.J9,{initialValues:{type:"expense",category:i,comment:_||"no comment",sum:Number(u)},validationSchema:V.object({category:V.string().required("Required"),comment:V.string().required("Required").min(4,"Must be 4 characters or more").max(80,"Must be 80 characters or less"),sum:V.number().required("Required")}),onSubmit:function(n,t){var a=t.setSubmitting;p((0,W.Ld)({id:s,values:n})),e(),a(!1)},children:function(n){var a=n.errors,s=n.touched;n.values;return(0,x.jsxs)(F.l0,{className:b,children:[(0,x.jsxs)("label",{className:S,children:[(0,x.jsx)("p",{className:w,children:"Per category"}),(0,x.jsx)(q.ZP,{onChange:v,value:t,isSearchable:!1,placeholder:i,className:"select-container",classNamePrefix:"select",options:f,name:"category",components:{Option:Y.d}}),(0,x.jsx)("div",{className:Z})]}),(0,x.jsxs)("div",{className:E,children:[(0,x.jsxs)("label",{className:I,style:{outline:"".concat(s.comment&&a.comment?"1px solid red":"none")},children:["Expense comment",(0,x.jsx)(F.gN,{className:N,type:"text",name:"comment",placeholder:"Enter comment"}),s.comment&&a.comment&&(0,x.jsx)("div",{className:k,children:a.comment})]}),(0,x.jsxs)("label",{className:I,style:{outline:"".concat(s.sum&&a.sum?"1px solid red":"none")},children:["Sum",(0,x.jsx)(F.gN,{className:N,type:"text",name:"sum",placeholder:"00.00"}),s.sum&&a.sum&&(0,x.jsx)("div",{className:k,children:a.sum})]}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{className:T,type:"submit",children:"Edit"})}),(0,x.jsx)("button",{className:g,type:"button",onClick:e,children:(0,x.jsx)(o.Z,{name:"icon-close",width:24,height:24,secondaryClassName:L.Z.iconClose})})]})]})}})})}),B)},K=t(5087),U=function(){var n=(0,R.v9)(K.Fw),e=(0,P.useState)([]),t=(0,a.Z)(e,2),s=t[0],c=t[1],o=(0,P.useState)(!1),r=(0,a.Z)(o,2),i=r[0],l=r[1],d=(0,P.useState)(""),u=(0,a.Z)(d,2),m=u[0],_=u[1],h=(0,P.useState)(""),p=(0,a.Z)(h,2),f=p[0],b=p[1],I=(0,R.I0)();(0,P.useEffect)((function(){c(n)}),[n]);var N=function(){l(!0)},T=function(n){var e=s.filter((function(e){return e._id!==n}));c(e),I((0,W.qL)(n))};return(0,x.jsxs)(x.Fragment,{children:[0===(null===s||void 0===s?void 0:s.length)&&(0,x.jsx)("div",{className:y,children:(0,x.jsx)("p",{className:C,children:"You have no transactions"})}),(0,x.jsx)("ul",{className:j,children:s&&s.map((function(n){var e=n._id,t=n.sum,a=n.comment,s=n.category,c=n.date;return(0,x.jsx)(v,{openModal:N,updateTransaction:function(){return function(n,e){_(n),b(e)}(e)},id:e,sum:t,comment:a,category:s,date:c,filterIt:T},e)}))}),i&&(0,x.jsx)(H,{closeModal:function(){return l(!1)},id:m,date:f})]})}},9886:function(n,e,t){t.d(e,{AD:function(){return a},Dw:function(){return s},nS:function(){return c}});var a=function(n){return n.expenses.presaving},s=function(n){return n.expenses.category},c=function(n){return n.expenses.isLoading}},5087:function(n,e,t){t.d(e,{Fw:function(){return c},Vw:function(){return o},eE:function(){return r}});var a=t(1413),s=t(6916),c=function(n){return n.statistics.transactions},o=function(n){return n.statistics.isLoading},r=(0,s.P1)([function(n){return n.statistics.categoriesStat}],(function(n){var e=n.reduce((function(n,e){return n+e.amount}),0);return n.map((function(n){return(0,a.Z)((0,a.Z)({},n),{},{percentage:(n.amount/e*100).toFixed(1)})}))}))},4958:function(n,e){e.Z={overlayAddIncome:"MoadlAddIncome_overlayAddIncome__1P5D8",modalWrapper:"MoadlAddIncome_modalWrapper__TwlUa",modalAddIncome:"MoadlAddIncome_modalAddIncome__Od7vw",modalInput:"MoadlAddIncome_modalInput__ZH85Z",btnContainer:"MoadlAddIncome_btnContainer__ELtRK",btnAdd:"MoadlAddIncome_btnAdd__dTtCU",btnClose:"MoadlAddIncome_btnClose__nIubc",btnSvg:"MoadlAddIncome_btnSvg__Q6jjo",iconClose:"MoadlAddIncome_iconClose__owHnM",categoryIcon:"MoadlAddIncome_categoryIcon__C4OJV"}}}]);
//# sourceMappingURL=760.0fe6320d.chunk.js.map