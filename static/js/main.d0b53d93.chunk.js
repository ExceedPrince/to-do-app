(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{25:function(t,e,a){},26:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),c=a.n(n),i=a(13),o=a.n(i),d=(a(25),a(19)),r=a(9),l=a(2),u=a(3),h=a(5),b=a(4),j=(a(26),a(14)),m=a.p+"static/media/trash.23b37181.svg",f=a.p+"static/media/clone.108432cb.svg";var p=function(t){return Object(s.jsx)("div",{id:t.id+"cont-card"+t.todoInfos.id,className:"card-ct",draggable:"true",onDragStart:function(t){var e=t.target;t.dataTransfer.setData("card_id",e.id),setTimeout((function(){e.style.display="none"}),0)},onDragOver:function(t){t.stopPropagation()},children:Object(s.jsxs)("div",{className:"omg",onClick:function(t){"DIV"===t.target.nodeName&&t.target.parentElement.classList.toggle("showCard")},children:[Object(s.jsxs)("div",{className:"cardButtons",children:[Object(s.jsx)("img",{src:m,style:{cursor:"pointer"},alt:"trash",width:"30",height:"30",onClick:t.deleteCard.bind(this,t.todoInfos.id)}),Object(s.jsx)("img",{src:f,style:{cursor:"pointer"},alt:"clone",width:"30",height:"30",onClick:t.duplicateCard.bind(this,t.todoInfos.id)})]}),Object(s.jsx)("div",{className:"cardTitle",children:Object(s.jsx)("button",{className:"todoTitle",onClick:t.createEditable.bind(this,t.todoInfos.id),children:t.todoInfos.title})}),Object(s.jsx)("div",{className:"cardDesc",children:t.todoInfos.desc})]})})},O=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={title:"",desc:""},t.onSubmit=function(e){e.preventDefault(),""===t.state.title?console.log("kellene egy l\xe1that\xf3 hiba\xfczenet"):t.props.addTodo(t.state.title,t.state.desc)},t.titleChange=function(e){return t.setState({title:e.target.value})},t.descChange=function(e){return t.setState({desc:e.target.value})},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"card-ct",children:Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"text",className:"title",name:"title",value:this.state.title,onChange:this.titleChange}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",className:"desc",name:"desc",value:this.state.desc,onChange:this.descChange}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"submitBtn",type:"submit",value:"Submit"})]})})}}]),a}(n.Component),v=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={id:t.props.todoInfos.id,title:t.props.todoInfos.title,desc:t.props.todoInfos.desc},t.onSubmitUP=function(e){e.preventDefault(),t.props.updateTodo(t.state.id,t.state.title,t.state.desc)},t.titleChangeUP=function(e){return t.setState({title:e.target.value})},t.descChangeUP=function(e){return t.setState({desc:e.target.value})},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"card-ct",children:Object(s.jsxs)("form",{onSubmit:this.onSubmitUP,children:[Object(s.jsx)("input",{type:"text",className:"title",name:"title",value:this.state.title,onChange:this.titleChangeUP}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",className:"desc",name:"desc",value:this.state.desc,onChange:this.descChangeUP}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"submitBtn",type:"submit",value:"Submit"})]})})}}]),a}(n.Component);function C(t){return Object(s.jsx)("div",{className:"newCardBtn",children:Object(s.jsx)("button",{className:"new-card",onClick:t.showNewCard,children:"\xdaj TODO hozz\xe1ad\xe1sa"})})}var g=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={actualDashName:t.props.actualDashName},t.setLocalDashName=function(e){t.setState({actualDashName:e.target.value}),e.target.parentElement.lastElementChild.style.opacity=1},t}return Object(u.a)(a,[{key:"setDashNameNow",value:function(){this.props.setDashName(this.state.actualDashName)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"dashName",children:[Object(s.jsx)("input",{type:"text",id:"nameInput",className:"board-names",onChange:this.setLocalDashName,value:this.state.actualDashName,placeholder:"dasboard name"}),Object(s.jsx)("button",{className:"saveButton",onClick:this.setDashNameNow.bind(this,this.props.setDashName),children:"Save"})]})}}]),a}(n.Component),N=a(15);function x(){var t=Object(j.a)(["\n    text-align: center;\n    background: ",";\n  "]);return x=function(){return t},t}var D=function(t){var e=N.a.div(x(),t.defaultColors);return Object(s.jsx)("div",{className:"dashboard-ct",children:Object(s.jsxs)("div",{className:"dashboard",children:[Object(s.jsx)(e,{primary:!0,children:Object(s.jsx)(g,{actualDashName:t.actualDashName,setDashName:t.setDashName})}),Object(s.jsxs)("div",{className:"cards-ct",children:[t.newCardDiv?Object(s.jsx)(O,{addTodo:t.addTodo}):Object(s.jsx)(C,{showNewCard:t.showNewCard}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"inner-cards-ct",onDrop:function(t){t.preventDefault();var e=t.dataTransfer.getData("card_id"),a=document.getElementById(e);a.style.display="block",t.target.appendChild(a)},onDragOver:function(t){t.preventDefault()},id:t.id,children:t.info.map((function(e,a){return!1===e.editable?Object(s.jsx)(p,{id:t.id,todoInfos:e,deleteCard:t.deleteCard,duplicateCard:t.duplicateCard,createEditable:t.createEditable},a):Object(s.jsx)(v,{todoInfos:e,deleteCard:t.deleteCard,updateTodo:t.updateTodo},a)}))})]})]})})},w=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).setDashName=function(t){s.setState({dashName:t})},s.createEditable=function(t){s.setState({todos:s.state.todos.map((function(e){return e.id===t&&(e.editable=!0),e}))})},s.deleteCard=function(t){s.setState({todos:Object(r.a)(s.state.todos.filter((function(e){return e.id!==t})))})},s.addTodo=function(t,e){var a={id:Math.floor(10*Math.random())+Math.floor(1e3*Math.random()),title:t,desc:e,editable:!1};s.setState({todos:[].concat(Object(r.a)(s.state.todos),[a])}),s.setState({newCardDiv:!1})},s.updateTodo=function(t,e,a){s.setState({todos:s.state.todos.map((function(s){return s.id===t&&(s.title=e,s.desc=a,s.editable=!1),s}))})},s.duplicateCard=function(t){var e=s.state.todos.filter((function(e){return e.id===t}))[0],a={id:Math.floor(10*Math.random())+Math.floor(1e3*Math.random()),title:e.title,desc:e.desc,editable:!1};s.setState({todos:[].concat(Object(r.a)(s.state.todos),[a])})},s.showNewCard=function(){s.setState({newCardDiv:!0})},s.defaultColors="#"+Math.floor(16777215*Math.random()).toString(16),s.mainId=s.props.unique,s.state={dashName:"Untilted dashboard",todos:[],newCardDiv:!1},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(D,{info:this.state.todos,newCardDiv:this.state.newCardDiv,showNewCard:this.showNewCard,actualDashName:this.state.dashName,setDashName:this.setDashName,deleteCard:this.deleteCard,duplicateCard:this.duplicateCard,createEditable:this.createEditable,addTodo:this.addTodo,updateTodo:this.updateTodo,defaultColors:this.defaultColors,id:this.mainId})})}}]),a}(n.Component);var y=function(){var t=Object(n.useState)(1),e=Object(d.a)(t,2),a=e[0],c=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"FE2 T3 - ToDo App"}),Object(s.jsxs)("div",{id:"container",children:[Array(a).fill(1).map((function(t,e){return Object(s.jsx)(w,{unique:e},e)})),Object(s.jsx)("button",{id:"new-dashboard",onClick:function(){c((function(t){return t+1}))},children:"+ Create dashboard"})]})]})},S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),c(t),i(t)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.d0b53d93.chunk.js.map