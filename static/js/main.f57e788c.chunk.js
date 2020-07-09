(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(3),n=a.n(c),o=a(1);a(9),a(10);function m(e){var t=e.keyData,a=e.power,c=e.setDisplay,n=e.volume,o=t.keyTrigger,m=t.url,d=t.keyCode,i=t.id,u=Object(r.useRef)(),l=Object(r.useRef)(),p=function(e){e.keyCode===d&&k(e.keyCode)};Object(r.useEffect)((function(){return document.addEventListener("keydown",p),function(){document.removeEventListener("keydown",p)}}));var k=function(){l.current.classList.toggle("pressed"),a&&(y(),c(i),l.current.classList.add("active")),setTimeout((function(){l.current.classList.toggle("pressed"),l.current.classList.remove("active")}),150)},y=function(){u.current.volume=n/100,u.current.currentTime=0,u.current.play()};return s.a.createElement("div",{className:"drum-pad",id:i,onClick:function(){return k(d)},ref:l},s.a.createElement("audio",{src:m,ref:u,className:"clip",id:o}),o)}var d=function(e){var t=e.bank,a=e.power,r=e.setDisplay,c=e.volume;return s.a.createElement("div",{className:"pad-bank"},t.map((function(e,t){return s.a.createElement(m,{key:t,volume:c,keyData:e,power:a,setDisplay:r})})))};a(11);function i(e){var t=e.onChange,a=e.state,c=void 0===a||a,n=Object(r.useState)(c),m=Object(o.a)(n,2),d=m[0],i=m[1],u=Object(r.useRef)();return s.a.createElement("div",{className:"select ",ref:u,onClick:function(e){t(!d),i((function(e){return!e}))}},s.a.createElement("div",{className:"switch "+(d?"on":"")}))}var u=function(e){var t=e.setPower,a=e.setBank,r=e.display,c=e.bank,n=e.power,o=e.setVolume,m=e.volume;return s.a.createElement("div",{className:"options"},s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("span",null,"Power"),s.a.createElement(i,{onChange:function(e){return t(e)},state:n})),s.a.createElement("div",{id:"display",className:"mt-3 mb-3"},r),s.a.createElement("input",{type:"range",style:{width:"100%"},className:"mb-3",value:m,onChange:function(e){return o(+e.target.value)}}),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("span",null,"Bank"),s.a.createElement(i,{onChange:function(e){a(e)},state:c})))},l=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],p=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}];function k(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),m=Object(o.a)(n,2),i=m[0],k=m[1],y=Object(r.useState)(80),g=Object(o.a)(y,2),f=g[0],h=g[1],C=Object(r.useState)(!1),v=Object(o.a)(C,2),w=v[0],E=v[1];return s.a.createElement("div",{className:"app",id:"drum-machine"},s.a.createElement(d,{bank:w?p:l,power:a,setDisplay:k,volume:f}),s.a.createElement(u,{setPower:c,setBank:E,bank:w,power:a,setDisplay:k,display:i,setVolume:h,volume:f}))}a(12);n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.f57e788c.chunk.js.map