(this.webpackJsonpinfyassgn2=this.webpackJsonpinfyassgn2||[]).push([[0],{23:function(e,t){},29:function(e,t,n){e.exports=n(49)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t){},43:function(e,t){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),l=n.n(i),o=(n(34),n(9)),c=n(10),u=n(13),s=n(12),d=n(14),f=n(5),m=(n(35),n(11)),h=(n(36),n(18)),b=n.n(h),v=n(26),p=n.n(v),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={tabledata:{}},n.fileHandler=n.fileHandler.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"fileHandler",value:function(e){e.preventDefault();var t=this,n=e.target.files[0],a=new FileReader;a.onload=function(e){for(var n=e.target.result,a=b.a.read(n,{type:"binary"}),r=a.SheetNames[0],i=a.Sheets[r],l=b.a.utils.sheet_to_json(i,{header:1}),o=[],c=0;c<l.length;c++){var u=l[c].filter((function(e){return null!=e}));u.length>0&&o.push(u)}for(var s={},d=0;d<o.length;d++){if(o[d].includes("Name")){var f=o[d];s.Name=f[f.indexOf("Name")+1]}if(o[d].includes("Registration date")){var m=o[d];s["Registration date"]=p()(m[m.indexOf("Registration date")+1]).format("DD-MM-YYYY")}if(o[d].includes("a2")){var h=o[d];s.a2=h[h.indexOf("a2")+1]}if(o[d].includes("b2")){var v=o[d];s.b2=v[v.indexOf("b2")+1]}}t.setState({tabledata:s})},a.readAsBinaryString(n)}},{key:"render",value:function(){var e=this.state.tabledata,t=Object.keys(e).map((function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,e[t]))}));return r.a.createElement("div",{id:"outer_cntr"},r.a.createElement("input",{type:"file",onChange:this.fileHandler}),r.a.createElement("table",{id:"upload"},r.a.createElement("tbody",null,t)))}}]),t}(r.a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"main_outer_cntr"},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:g}),r.a.createElement(f.a,{path:"/upload",component:g}))))}}]),t}(r.a.Component),E=n(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.764634ec.chunk.js.map