(window.webpackJsonpmygitsite=window.webpackJsonpmygitsite||[]).push([[0],{35:function(e,t,a){e.exports=a(55)},40:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/Tree.3fe02623.png"},47:function(e,t,a){e.exports=a.p+"static/media/page_not_found.790cfac0.png"},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),o=(a(40),a(6)),i=a(7),m=a(9),u=a(8),s=a(21),p=a(10),E=a(15),b=a(11),d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"),l.a.createElement("br",null),l.a.createElement("p",null,"Hello!"),l.a.createElement("p",null,"I'm a computer science student currently attending Cornell University."),l.a.createElement("p",null,"I have worked largely as a backend developer but also have experience in scripting and full-stack development."),l.a.createElement("p",null,"I dabble in web design, as you can see."),l.a.createElement("br",null),l.a.createElement("p",null,"Elisabeth Finkel"),l.a.createElement("p",null,"B.A. Computer Science May 2021, Cornell University"))}}]),t}(l.a.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Contact"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("p",null,"Fill out this form and I will respond at my earliest convenience."),l.a.createElement("br",null),l.a.createElement("div",{id:"contact-form"},l.a.createElement("form",{action:"https://formspree.io/finkelelisabeth@gmail.com",method:"POST"},l.a.createElement("div",null,l.a.createElement("label",{for:"name"},"Enter your name: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",id:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",{for:"email"},"Enter your email: "),l.a.createElement("br",null),l.a.createElement("input",{type:"email",name:"email",id:"email",required:!0})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",{for:"message"},"Enter your message here:"),l.a.createElement("br",null),l.a.createElement("textarea",{name:"message",cols:"80",rows:"5"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",className:"normlink",value:"Submit"}))))))}}]),t}(l.a.Component),f=a(13),v=a.n(f),y=a(31),g=a.n(y),O=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css",integrity:"sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd",crossOrigin:"anonymous"}),l.a.createElement("h2",null,"Projects"),l.a.createElement("br",null),l.a.createElement("div",{style:{color:"blue"}},l.a.createElement(g.a,null,l.a.createElement(v.a,{style:{padding:"10px"}},l.a.createElement("a",{href:"https://esfinkel.github.io/finkel-peterson-family-tree/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.a.Img,{variant:"top",src:a(46)}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,l.a.createElement("br",null),"Family Tree"),l.a.createElement(v.a.Text,null,"Finkel-Peterson family tree."))),l.a.createElement(v.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated August 11"))))))}}]),t}(l.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{background:"white",padding:"20px"}},l.a.createElement("p",null,l.a.createElement("a",{className:"normlink",href:"https://esfinkel.github.io"},"\xab Return to main page")),l.a.createElement("p",null),l.a.createElement("img",{src:a(47),alt:"example of a 404 error page"}),l.a.createElement("p",null),l.a.createElement("a",{className:"",href:"https://youtu.be/SQkWF9D-paw",rel:"noopener noreferrer",target:"_blank"},"Looking for "),l.a.createElement("a",{className:"",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=aSXtXLAVgkE",target:"_blank"},"inspiration?"))}}]),t}(l.a.Component),j=a(32),w=(a(51),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={sidebarOpen:!1},a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(s.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e}),document.getElementById("main-content").classList.toggle("moved")}},{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement(j.a,{sidebar:l.a.createElement("nav",{className:"navbar navbar-light"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement(E.b,{to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(E.b,{to:"/contact"},l.a.createElement("li",null,"Contact")),l.a.createElement(E.b,{to:"/projects"},l.a.createElement("li",null,"Projects")))),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"#004d7ce0",width:"150px"}}}),l.a.createElement("div",{className:"App-header"},l.a.createElement("div",{id:"main-content"},l.a.createElement("div",{className:"toggle-btn",onClick:function(){return e.onSetSidebarOpen(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:d}),l.a.createElement(b.a,{path:"/contact",component:h}),l.a.createElement(b.a,{path:"/projects",component:O}),l.a.createElement(b.a,{component:k}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.62de9af0.chunk.js.map