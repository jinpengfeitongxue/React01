(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),l=n.n(r),s=n(7),u=n(1),i=n(2),c=n(4),d=n(3),p=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{ref:this.props.refs,value:this.props.value,type:"text",onChange:this.props.onChange}),o.a.createElement("button",{onClick:this.props.addTodo},"\u6dfb\u52a0"))}}]),n}(o.a.Component),h=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("ul",null,this.props.renderTodos(!1)),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210"),o.a.createElement("ul",null,this.props.renderTodos(!0)))}}]),n}(o.a.Component),f=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({inpValue:t.target.value})},e.addTodo=function(){""!=e.state.inpValue&&e.setState({todos:[{title:e.state.inpValue,done:!1}].concat(Object(s.a)(e.state.todos))})},e.delTodo=function(t){e.setState({todos:e.state.todos.filter((function(e,n){return n!=t}))})},e.toggle=function(t){var n=JSON.parse(JSON.stringify(e.state.todos));n[t].done=!n[t].done,e.setState({todos:n})},e.renderTodos=function(t){return e.state.todos.map((function(n,a){if(t==n.done)return o.a.createElement("li",null,o.a.createElement("input",{onClick:function(){return e.toggle(a)},checked:t,type:"checkbox"}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),o.a.createElement("button",{onClick:function(){return e.delTodo(a)}},"\u5220\u9664"))}))},e.state={inpValue:"",todos:[]},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this,t=this.state;t.todos,t.inpValue;return o.a.createElement("div",null,o.a.createElement(p,{addTodo:this.addTodo,value:this.state.inpValue,onChange:this.handleChange,refs:function(t){return e.input=t}}),o.a.createElement(h,{delTodo:this.delTodo,renderTodos:this.renderTodos}))}}]),n}(o.a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.e1eeaa86.chunk.js.map