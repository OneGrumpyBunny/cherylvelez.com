(this["webpackJsonpreact-drum-machine"]=this["webpackJsonpreact-drum-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(7),s=a.n(i),o=a(2),c=a(3),d=a(1),l=a(4),u=a(5),m={animation:".5s activateDrumPad"},p={animation:"none"},y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={padStyle:p},r.playSound=r.playSound.bind(Object(d.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r.activatePad=r.activatePad.bind(Object(d.a)(r)),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"activatePad",value:function(){this.setState({padStyle:m})}},{key:"deActivatePad",value:function(){this.setState({padStyle:p})}},{key:"playSound",value:function(e){var t=this,a=document.getElementById(this.props.keyTrigger);a.currentTime=0,a.play(),this.activatePad(),this.props.updateDisplay(this.props.id.replace(/-/g," ")),setTimeout((function(){return t.deActivatePad()}),500)}},{key:"render",value:function(){return n.a.createElement("div",{id:this.props.id,onClick:this.playSound,className:"drum-pad",style:this.state.padStyle},n.a.createElement("div",{id:this.props.id},n.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.url}),this.props.keyTrigger))}}]),a}(n.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.drumset.map((function(t){return n.a.createElement(y,{id:t.id,url:t.url,keyTrigger:t.keyTrigger,keyCode:t.keyCode,updateDisplay:e.props.updateDisplay})}));return n.a.createElement("div",{className:"Drumbox"},t)}}]),a}(n.a.Component),k=(a(13),function(){return n.a.createElement("div",{className:"Header"},n.a.createElement("h1",null,"Fancy Beats Drum Machine"),n.a.createElement("p",null,"Beat the drums to make music!"))}),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={drumset:g,display:""},r.displayClipName=r.displayClipName.bind(Object(d.a)(r)),r}return Object(c.a)(a,[{key:"displayClipName",value:function(e){this.setState({display:e})}},{key:"clearDisplay",value:function(){this.setState({display:""})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(k,null),n.a.createElement("div",{className:"wrapper"},n.a.createElement(h,{drumset:this.state.drumset,updateDisplay:this.displayClipName}),n.a.createElement("p",null,"Currently playing: ",n.a.createElement("div",{id:"display"},this.state.display))))}}]),a}(n.a.Component),g=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],f=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.367008e1.chunk.js.map