(this["webpackJsonptest-cover"]=this["webpackJsonptest-cover"]||[]).push([[0],{174:function(e,t,a){e.exports=a.p+"static/media/cover01.07c43942.jpg"},175:function(e,t,a){e.exports=a.p+"static/media/cover02.b59c979f.jpg"},176:function(e,t,a){e.exports=a.p+"static/media/chome_ic.c8039f52.png"},177:function(e,t,a){e.exports=a.p+"static/media/setting_.004e76e5.png"},179:function(e,t,a){e.exports=a(399)},184:function(e,t,a){},200:function(e,t){},202:function(e,t){},232:function(e,t){},233:function(e,t){},277:function(e,t){},279:function(e,t){},302:function(e,t){},393:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},399:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),l=a.n(o),s=(a(184),a(57),a(37)),i=a(38),p=a(68),r=a(39),u=a(40),m=a(55),h=a.n(m),d=(a(393),a(99),a(67)),v=a(174),g=a.n(v),f=a(175),_=a.n(f),E=function(e){Object(u.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a=this.props.data.data,n=this.props.id;console.log("9 "+n);var o="",l="",s="",i="",p="",r="",u="",m="",h="",d="",v="",f="",E="",b="",y="",w="",k="app_header_2_1",x="app_header_2_2",O="2.8vh",N="3.4vh",j="app_sub_1_1",C="inline-block",S="inline-block";if(a.map((function(t){t.Timestamp==n&&(e=t.cover,o=t.logo.replace("open?","uc?export=view&"),l=t.pic1.replace("open?","uc?export=view&"),s=t.pic2.replace("open?","uc?export=view&"),i=t.pic3.replace("open?","uc?export=view&"),p=t.pic4.replace("open?","uc?export=view&"),r=t.pic5.replace("open?","uc?export=view&"),u=t.topic1,m=t.topic2,h=t.subTopic,d=t.name,v=t.title,f=t.dept,E=t.school,b=t.sso1,y=t.sso2,w=t.sso3)})),"1"===e&&(t=g.a),"2"===e&&(t=_.a),null!==p&&""!==p||(p=l,C="none",r=l,S="none"),null!==r&&""!==r||(r=l,S="none",p=l,C="none"),u.length>40&&(O="2.5vh"),m.length>34&&(k="app_header_3_1",x="app_header_3_2"),h.length>50)j="app_sub_2_1";return m.length>34&&(N="3vh"),console.log("topic 1: "+u.length),console.log("topic 2: "+m.length),console.log("sub topic : "+h.length),c.a.createElement("div",{className:"page",style:{backgroundImage:"url(".concat(t,")")}},c.a.createElement("img",{src:o,className:"App_logo",alt:"logo",style:{}}),c.a.createElement("div",{className:"app_header"},c.a.createElement("p",{className:k,style:{fontSize:O}},u),c.a.createElement("p",{className:x,style:{fontSize:N}},m),c.a.createElement("p",{className:j},h)),c.a.createElement("img",{className:"App_profile",alt:"\u0e20\u0e32\u0e1e\u0e1a\u0e38\u0e04\u0e04\u0e25",src:l}),c.a.createElement("img",{className:"app_story1",alt:"\u0e20\u0e32\u0e1e\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 1",src:s}),c.a.createElement("img",{className:"app_story1_1",alt:"\u0e20\u0e32\u0e1e\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 2",src:i}),c.a.createElement("img",{className:"app_story2",alt:"\u0e20\u0e32\u0e1e\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 3",src:p,style:{display:C}}),c.a.createElement("img",{className:"app_story2_2",alt:"\u0e20\u0e32\u0e1e\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 4",src:r,style:{display:S}}),c.a.createElement("p",{className:"app_a1"},d),c.a.createElement("p",{className:"app_a2"},v),c.a.createElement("p",{className:"app_a3"},f),c.a.createElement("p",{className:"app_a4"},E),c.a.createElement("p",{className:"app_a5"},b),c.a.createElement("p",{className:"app_a6"},y),c.a.createElement("p",{className:"app_a7"},w))}}]),a}(n.Component),b=a(176),y=a.n(b),w=a(177),k=a.n(w),x=function(e){Object(u.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedOption:null,options:[]},e.handleChange=function(t){e.setState({selectedOption:t},(function(){return console.log("Option selected:",e.state.selectedOption.value)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a,n=this.props.data.data,o=n.map((function(e,t){return{label:e.name,value:e,id:e.Timestamp,key:t}}));n.map((function(n){n,n.logo.replace("open?","uc?export=view&"),e=n.pic1.replace("open?","uc?export=view&"),n.pic2.replace("open?","uc?export=view&"),n.pic3.replace("open?","uc?export=view&"),t=n.pic4.replace("open?","uc?export=view&"),a=n.pic5.replace("open?","uc?export=view&"),n.topic1,n.topic2,n.name,n.title,n.dept,n.school,n.sso}));return null!==t&&""!==t||(t=e,"none",a=e,"none"),null!==a&&""!==a||(a=e,"none",t=e,"none"),c.a.createElement("div",null,this.state&&this.state.selectedOption&&null!=this.state.selectedOption.value&&c.a.createElement(E,{data:this.props.data,name:this.state.selectedOption.label,id:this.state.selectedOption.id}),c.a.createElement("p",null,"\u0e17\u0e33\u0e15\u0e32\u0e21\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e14\u0e31\u0e07\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a"),c.a.createElement("p",null,"1. \u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07 ",c.a.createElement("a",{href:"https://forms.gle/cJWPEg13sso8vPyC6",target:"_blank"},"Google Forms")),c.a.createElement("p",null,"2. \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e23\u0e2d\u0e01\u0e1f\u0e2d\u0e23\u0e4c\u0e21\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27 \u0e43\u0e2b\u0e49\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 ",c.a.createElement("button",{onClick:this.props.refresh},"\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25")," \u0e41\u0e25\u0e49\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07\u0e17\u0e48\u0e32\u0e19\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07"),c.a.createElement(d.a,{value:"",onChange:this.handleChange,options:o}),c.a.createElement("p",null,"3. \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e01\u0e14 ctrl+P \u0e2b\u0e23\u0e37\u0e2d \u0e44\u0e1b\u0e17\u0e35\u0e48 \u0e40\u0e21\u0e19\u0e39 > \u0e1e\u0e34\u0e21\u0e1e\u0e4c \u0e41\u0e25\u0e49\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e40\u0e1b\u0e47\u0e19 pdf \u0e42\u0e14\u0e22\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"),c.a.createElement("img",{src:k.a,style:{wiidth:"40vh",height:"50vh"}}),c.a.createElement("p",null,"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38: \u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 ",c.a.createElement("img",{src:y.a,style:{wiidth:"20px",height:"20px"}})," \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19"))}}]),a}(n.Component),O=(a(396),a(398),function(e){Object(u.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:[]},e.handleClick=e.handleClick.bind(Object(p.a)(e)),e}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=this;h.a.init({key:"1VYCcGr5Wr9pQ0cHRn-0YvPFGWbS0BasOugBF84MvlTM",callback:function(t){console.log("google sheet data ---\x3e",t),e.setState({data:t})},simpleSheet:!0})}},{key:"componentDidMount",value:function(){var e=this;h.a.init({key:"1VYCcGr5Wr9pQ0cHRn-0YvPFGWbS0BasOugBF84MvlTM",callback:function(t){console.log("google sheet data ---\x3e",t),e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){return this.state&&this.state.data&&c.a.createElement(x,{data:this.state,refresh:this.handleClick})}}]),a}(n.Component));var N=function(){return c.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/profile2.da4c82e1.jpg"}},[[179,1,2]]]);
//# sourceMappingURL=main.6ec88647.chunk.js.map