(this["webpackJsonpteaching-react"]=this["webpackJsonpteaching-react"]||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/bowser.69f44bd2.jpg"},function(e,a,t){e.exports=t.p+"static/media/babymario.2a72b74a.jpg"},function(e,a,t){e.exports=t.p+"static/media/DryBowserSmash3.2c593025.png"},function(e,a,t){e.exports=t.p+"static/media/Morton_SSBU.511f5f28.png"},function(e,a,t){e.exports=t.p+"static/media/roy-kooper.ed560b7c.png"},function(e,a,t){e.exports=t.p+"static/media/waluigi.5ba830fa.jpg"},function(e,a,t){e.exports=t.p+"static/media/Wario_MP100.5e22ba9d.png"},function(e,a,t){e.exports=t.p+"static/media/yoshi.64e02a76.png"},,,,,,,,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(10),r=t.n(s),c=t(11),l=t(12),p=t(15),o=t(13),m=t(16),d=t(14),f=t.n(d),u=(t(22),function(e){return n.a.createElement(f.a,{isFlipped:e.flipped,flipDirection:"horizontal"},n.a.createElement("div",{className:"card-front",onClick:e.click},n.a.createElement("p",null,"click to turn")),n.a.createElement("div",{className:"card-back"},n.a.createElement("img",{className:"card-image",src:e.image})))}),g=(t(23),t(1)),h=t.n(g),v=t(2),b=t.n(v),E=t(3),w=t.n(E),k=t(4),F=t.n(k),y=t(5),x=t.n(y),N=t(6),j=t.n(N),S=t(7),O=t.n(S),B=t(8),C=t.n(B),D=function(e){return n.a.createElement("div",null,n.a.createElement("p",null,"Remaining moves: ",e.turn))},P=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={message:"match the cards to win the game",cards:[{flipped:!1,image:h.a},{flipped:!1,image:b.a},{flipped:!1,image:h.a},{flipped:!1,image:b.a},{flipped:!1,image:w.a},{flipped:!1,image:F.a},{flipped:!1,image:w.a},{flipped:!1,image:F.a},{flipped:!1,image:x.a},{flipped:!1,image:j.a},{flipped:!1,image:x.a},{flipped:!1,image:j.a},{flipped:!1,image:O.a},{flipped:!1,image:C.a},{flipped:!1,image:O.a},{flipped:!1,image:C.a}],firstFlip:null,secondFlip:null,turns:20},t.flipHandler=function(e){if(0===t.state.turns);else if(null==t.state.firstFlip){var a=t.state.cards;a[e].flipped=!0,t.setState({cards:a,firstFlip:e})}else if(null==t.state.secondFlip){var i=t.state.cards;i[e].flipped=!0,t.setState({cards:i,secondFlip:e})}},t.refreshPage=function(){window.location.reload(!1)},t.winningLogic=function(){},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,a=this.state,t=a.firstFlip,i=a.secondFlip,n=a.cards;null!=t&&null!=i&&(n[t].image===n[i].image?this.setState({firstFlip:null,secondFlip:null,message:"its a match"}):n[t].image!==n[i].image&&setTimeout((function(){var a=e.state.cards;a[t].flipped=!1,a[i].flipped=!1,e.setState({cards:a,firstFlip:null,secondFlip:null,turns:e.state.turns-1,message:"These aren't a match"})}),1e3))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"turns"},n.a.createElement(D,{turn:this.state.turns})),n.a.createElement("div",{className:"cards"},this.state.cards.map((function(a,t){return n.a.createElement(u,{key:t,image:a.image,flipped:a.flipped,click:function(){return e.flipHandler(t)}})}))),n.a.createElement("p",{className:"ptag"},this.state.message),n.a.createElement("button",{className:"reset",onClick:this.refreshPage},"Click to reset game")))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.2c13b9b4.chunk.js.map