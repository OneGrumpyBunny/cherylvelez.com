(this["webpackJsonpreact-would-you-rather-game"]=this["webpackJsonpreact-would-you-rather-game"]||[]).push([[0],{36:function(e,t,a){e.exports=a(50)},41:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(41),a(4)),s=a(5),i=a(7),u=a(6),m=a(9),p=a(2),d=a(35),h=a(10),v=a(1),b={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},O={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe","tylermcginnis"],text:"write JavaScript"},optionTwo:{votes:[],text:"write Swift"}}};function E(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){O=Object(v.a)(Object(v.a)({},O),{},Object(h.a)({},r.id,r)),b=Object(v.a)(Object(v.a)({},b),{},Object(h.a)({},n,Object(v.a)(Object(v.a)({},b[n]),{},{questions:b[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function j(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){b=Object(v.a)(Object(v.a)({},b),{},Object(h.a)({},t,Object(v.a)(Object(v.a)({},b[t]),{},{answers:Object(v.a)(Object(v.a)({},b[t].answers),{},Object(h.a)({},a,n))}))),O=Object(v.a)(Object(v.a)({},O),{},Object(h.a)({},a,Object(v.a)(Object(v.a)({},O[a]),{},Object(h.a)({},n,Object(v.a)(Object(v.a)({},O[a][n]),{},{votes:O[a][n].votes.concat([t])}))))),e()}),500)}))}(e)}var f=a(14),g=a.n(f);function y(e){return function(t){return t(Object(f.showLoading)()),j(e).then((function(){var a;t({type:"ADD_ANSWER_TO_USER",authedUser:(a=e).authedUser,qid:a.qid,answer:a.answer}),t(function(e){return{type:"SAVE_ANSWER",authedUser:e.authedUser,qid:e.qid,answer:e.answer}}(e))})).then((function(){return t(Object(f.hideLoading)())})).catch((function(e){console.warn("Error in handleSaveAnswer: ",e),alert("There was an error saving your the answer. Try again.")}))}}function w(e,t){return function(a,n){var r,o=n().authedUser;return a(Object(f.showLoading)()),(r={author:o,optionOneText:e,optionTwoText:t},E(r)).then((function(e){var t;a(function(e){return{type:"ADD_POLL",poll:e}}(e)),a({type:"ADD_POLL_TO_USER",id:(t=e).id,author:t.author})})).then((function(){return a(Object(f.hideLoading)())}))}}function x(e){return{type:"SET_AUTHED_USER",id:e}}function N(){return function(e){return e(Object(f.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},b))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(v.a)({},O))}),1e3)}))]).then((function(e){var t=Object(d.a)(e,2);return{users:t[0],polls:t[1]}})).then((function(t){var a=t.users,n=t.polls;e(function(e){return{type:"RECEIVE_USERS",users:e}}(a)),e(function(e){return{type:"RECEIVE_POLLS",polls:e}}(n)),e(x(null)),e(Object(f.hideLoading)())}))}}var T=a(8),q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userId:"currentUser",buttonDisabled:!0},e.handleChange=function(t){var a=t.target.value;e.setState({userId:a,buttonDisabled:!a})},e.handleSubmit=function(t){var a=e.props.dispatch,n=e.state.userId;t.preventDefault(),a(x(n))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state.buttonDisabled;return r.a.createElement("div",{className:"signinForm"},r.a.createElement("h2",null,r.a.createElement("em",null,"Welcome to the Would You Rather App!")),r.a.createElement("h3",null,"Please sign in to continue"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("select",{onChange:this.handleChange},r.a.createElement("option",{value:"selectuser",disabled:""},"Select user"),Object.values(e).map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("button",{disabled:t},"Sign In")))}}]),a}(n.Component);var k=Object(p.connect)((function(e){return{users:e.users}}))(q);function S(e,t,a){var n=e.id,r=e.optionOne,o=e.optionTwo,l=e.timestamp,c=t.name,s=t.avatarURL,i=e.optionOne.votes.length,u=e.optionTwo.votes.length,m=i+u;return{name:c,id:n,timestamp:l,optionOne:r,optionTwo:o,hasVoted1:r.votes.includes(a),hasVoted2:o.votes.includes(a),avatar:s,percentVotes1:(i/m*100).toFixed(0),percentVotes2:(u/m*100).toFixed(0)}}function U(e,t,a){var n=e.name,r=e.avatarURL,o=e.answers,l=e.questions;return{name:n,avatar:r,rank:t,numAnswered:Object.keys(o).length,numAsked:l.length,authedUser:a,answers:o}}var L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.poll;if(!e)return r.a.createElement(T.a,{to:"/error404"});var t=e.id,a=e.avatar,n=e.name,o=e.optionOne;return null===e?r.a.createElement("p",null,"No polls returned"):r.a.createElement("div",{className:"pollContainer"},r.a.createElement("div",{className:"poll"},r.a.createElement("p",null,r.a.createElement("img",{className:"avatar",alt:"user avater",src:a})," ",n),r.a.createElement("p",null,o.text,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.b,{className:"pollBtn",to:"/questions/".concat(t)},"See Details"))))}}]),a}(n.Component);var C=Object(p.connect)((function(e,t){var a=e.authedUser,n=e.users,r=e.questions[t.id];return{authedUser:a,poll:r?S(r,n[r.author],a):null}}))(L),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.poll;if(!e)return r.a.createElement(T.a,{to:"/error404"});var t=e.id,a=e.avatar,n=e.name,o=e.optionOne;return null===e?r.a.createElement("p",null,"No polls returned"):r.a.createElement("div",{className:"pollContainer"},r.a.createElement("div",{className:"poll"},r.a.createElement("p",null,r.a.createElement("img",{className:"avatar",alt:"user avater",src:a})," ",n),r.a.createElement("p",null,o.text,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.b,{className:"pollBtn",value:"pollBtn",to:"/vote/".concat(t)},"Vote Now!"))))}}]),a}(n.Component);var D=Object(T.g)(Object(p.connect)((function(e,t){var a=e.authedUser,n=e.users,r=e.questions[t.id];return{authedUser:a,poll:r?S(r,n[r.author],a):null}}))(A)),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.poll;if(!a)return r.a.createElement(T.a,{to:"/error404"});var o=a.hasVoted1,l=a.hasVoted2,c=a.id;return null===a?r.a.createElement("p",null,"No polls returned"):r.a.createElement(n.Fragment,null,"/"===t.pathname?!1===o&&!1===l&&r.a.createElement(D,{id:c}):(!0===o||!0===l)&&r.a.createElement(C,{id:c}))}}]),a}(n.Component);var _=Object(T.g)(Object(p.connect)((function(e,t){var a=e.authedUser,n=e.users,r=e.questions[t.id];return{authedUser:a,poll:r?S(r,n[r.author],a):null}}))(R)),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.pollIds;return r.a.createElement("div",{className:"pollsList"},r.a.createElement("h3",null,r.a.createElement("em",null,"Would you rather...")),e.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(_,{id:e}))})))}}]),a}(n.Component);var z=Object(p.connect)((function(e){var t=e.questions;return{pollIds:Object.keys(t).sort((function(e,a){return t[a].timestamp-t[e].timestamp}))}}))(P),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.author,t=e.name,a=e.avatar,n=e.numAsked,o=e.numAnswered,l=e.rank;return null===e?r.a.createElement("p",null,"No authors returned"):r.a.createElement("div",{className:"leaders"},r.a.createElement("p",null,r.a.createElement("img",{className:"avatar",alt:"user avater",src:a})," ",t),r.a.createElement("p",null,n),r.a.createElement("p",null,o),r.a.createElement("p",null,"#",l))}}]),a}(n.Component);var V=Object(T.g)(Object(p.connect)((function(e,t){var a=e.authedUser,n=e.users,r=t.id,o=t.index,l=n[r];return{authedUser:a,author:l?U(l,o,a):null}}))(I)),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.authorIds;return r.a.createElement("div",{className:"leadersList"},r.a.createElement("h3",null,r.a.createElement("em",null,"Would you rather... Leaderboard")),r.a.createElement("div",{className:"leaders head"},r.a.createElement("p",null,"Name"),r.a.createElement("p",null,"Polls Asked"),r.a.createElement("p",null,"Polls Answered"),r.a.createElement("p",null,"Rank")),r.a.createElement("hr",null),e.map((function(e,t){return r.a.createElement("div",{key:e},r.a.createElement(V,{id:e,index:t+1}))})))}}]),a}(n.Component);var B=Object(T.g)(Object(p.connect)((function(e){var t=e.users;return{authorIds:Object.keys(t).sort((function(e,a){return Object.keys(t[a].answers).length+Object.keys(t[a].questions).length-(Object.keys(t[e].answers).length+Object.keys(t[e].questions).length)}))}}))(W)),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={buttonDisabled:!0,optionOne:"",optionTwo:"",toHome:!1},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name,o=e.state,l=o.optionOne,c=o.optionTwo;e.setState((function(){return{optionOne:"optionOne"===r?n:l,optionTwo:"optionTwo"===r?n:c,buttonDisabled:!l||!c}}))},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.dispatch,r=a.id,o=e.state;n(w(o.optionOne,o.optionTwo)),e.setState((function(){return{optionOne:"",optionTwo:"",buttonDisabled:!0,toHome:!r}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.buttonDisabled;return e.toHome?r.a.createElement(T.a,{to:"/"}):r.a.createElement("div",{className:"newPollForm"},r.a.createElement("h2",null,"Would you rather ..."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"optionOne",onChange:this.handleChange,placeholder:"Enter option one here"}),r.a.createElement("p",null,"OR"),r.a.createElement("input",{type:"text",name:"optionTwo",onChange:this.handleChange,placeholder:"Enter option two here"}),r.a.createElement("button",{disabled:t},"Save")))}}]),a}(n.Component),H=Object(T.g)(Object(p.connect)()(F)),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLogout=function(t){var a=e.props,n=a.dispatch,r=a.history;t.preventDefault(),n(x(null)),r.push("/")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.user,t=e.name,a=e.avatarURL;return r.a.createElement("div",{className:"userIdentity"},r.a.createElement("img",{alt:"user avatar",src:a}),t,r.a.createElement("br",null),r.a.createElement("button",{className:"logoutBtn",onClick:this.handleLogout},"Logout"))}}]),a}(n.Component),J=Object(T.g)(Object(p.connect)((function(e){return{user:e.users[e.authedUser]}}))(M));function G(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",exact:!0,activeClassName:"navActive"},"Open Polls")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/responses",activeClassName:"navActive"},"Answered Polls")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/leaderboard",activeClassName:"navActive"},"Leaderboard")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/add",activeClassName:"navActive"},"New Poll"))))}var $=a(29),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.poll;if(!e)return r.a.createElement(T.a,{to:"/error404"});var t=e.hasVoted1,a=e.hasVoted2,n=e.optionOne,o=e.optionTwo,l=e.percentVotes1,c=e.percentVotes2,s=e.avatar,i=e.name;return r.a.createElement("div",{className:"pollsList"},r.a.createElement("h3",null,r.a.createElement("em",null,"Would you rather...")),r.a.createElement("div",{className:"pollContainer"},r.a.createElement("p",null,r.a.createElement("img",{className:"avatar",alt:"user avater",src:s})," ",i),r.a.createElement("div",{className:"pollDetail"},r.a.createElement("p",null,n.text," ",!0===t&&r.a.createElement($.FaCheck,{color:"Green"})),r.a.createElement("p",null,o.text," ",!0===a&&r.a.createElement($.FaCheck,{color:"Green"}))),r.a.createElement("div",{className:"pollDetail"},r.a.createElement("p",null,r.a.createElement("span",{className:"details"},n.votes.length," ",1===n.votes.length?"vote":"votes"," (",l,"%)")),r.a.createElement("p",null,r.a.createElement("span",{className:"details"},o.votes.length," ",1===o.votes.length?"vote":"votes"," (",c,"%)")))))}}]),a}(n.Component);var K=Object(T.g)(Object(p.connect)((function(e,t){var a=e.authedUser,n=e.users,r=e.questions[t.match.params.id];return{poll:r?S(r,n[r.author],a):null}}))(Y)),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={toDetails:!1},e.handleAnswer=function(t){t.preventDefault();var a=e.props,n=a.dispatch,r=a.poll;n(y({authedUser:a.authedUser,qid:r.id,answer:t.target.value})),e.setState((function(){return{toDetails:!0}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.poll;if(!e)return r.a.createElement(T.a,{to:"/error404"});var t=e.optionOne,a=e.optionTwo,n=e.avatar,o=e.name,l=e.id;return!0===this.state.toDetails?r.a.createElement(T.a,{to:"/questions/".concat(l)}):r.a.createElement("div",{className:"pollsList"},r.a.createElement("h3",null,r.a.createElement("em",null,"Would you rather...")),r.a.createElement("div",{className:"pollContainer"},r.a.createElement("p",{className:"zeroMargin"},r.a.createElement("img",{className:"avatar",alt:"user avater",src:n})," ",o),r.a.createElement("div",{className:"pollDetail"},r.a.createElement("p",null,t.text),r.a.createElement("p",null,a.text)),r.a.createElement("div",{className:"pollDetail"},r.a.createElement("p",null,r.a.createElement("button",{className:"voteBtn",value:"optionOne",onClick:this.handleAnswer},"Select this Option!")),r.a.createElement("p",null,r.a.createElement("button",{className:"voteBtn",value:"optionTwo",onClick:this.handleAnswer},"Select this Option!")))))}}]),a}(n.Component);var X=Object(T.g)(Object(p.connect)((function(e,t){var a=e.authedUser,n=e.users,r=e.questions[t.match.params.id];return{authedUser:a,poll:r?S(r,n[r.author],a):null}}))(Q)),Z=function(){return r.a.createElement("div",{className:"pollsList"},r.a.createElement("h5",{className:"font-weight-bold"},"404 Error Page"),r.a.createElement("p",null,"Sorry poll or URL does not exist. Please Try Again."))},ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement(m.a,null,r.a.createElement(n.Fragment,null,e?r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(G,null),r.a.createElement("div",{className:"dashboard"},r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/",exact:!0,component:z}),r.a.createElement(T.b,{path:"/responses",component:z}),r.a.createElement(T.b,{path:"/leaderboard",component:B}),r.a.createElement(T.b,{path:"/add",component:H}),r.a.createElement(T.b,{path:"/questions/:id",component:K}),r.a.createElement(T.b,{path:"/vote/:id",component:X}),r.a.createElement(T.b,{path:"/error404",component:Z}),r.a.createElement(T.b,{component:Z})))):r.a.createElement(T.b,{path:"/",component:k})))}}]),a}(n.Component);var te=Object(p.connect)((function(e){var t=e.authedUser;return e.questions,{loading:null===t,isLoggedIn:null!==t}}))(ee),ae=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(N())}},{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement(m.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(g.a,null),r.a.createElement("div",{className:"container"},e?r.a.createElement(te,null):r.a.createElement(k,null))))}}]),a}(n.Component);var ne=Object(p.connect)((function(e){var t=e.authedUser;return{loading:null===t,isLoggedIn:null!==t}}))(ae),re=a(16);var oe=a(24);var le=Object(re.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.id;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(v.a)(Object(v.a)({},e),t.users);case"ADD_POLL_TO_USER":var a=t.author,n=t.id;return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},a,Object(v.a)(Object(v.a)({},e[a]),{},{questions:[].concat(Object(oe.a)(e[a].questions),[n])})));case"ADD_ANSWER_TO_USER":var r=t.authedUser,o=t.qid,l=t.answer;return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},r,Object(v.a)(Object(v.a)({},e[r]),{},{answers:Object(v.a)(Object(v.a)({},e[r].answers),{},Object(h.a)({},o,l))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_POLLS":return Object(v.a)(Object(v.a)({},e),t.polls);case"SAVE_ANSWER":var a=t.authedUser,n=t.qid,r=t.answer;return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},n,Object(v.a)(Object(v.a)({},e[n]),{},Object(h.a)({},r,Object(v.a)(Object(v.a)({},e[n][r]),{},{votes:[].concat(Object(oe.a)(e[n][r].votes),[a])})))));case"ADD_POLL":var o=t.poll;return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},o.id,Object(v.a)({},o)));default:return e}},loadingBar:f.loadingBarReducer}),ce=a(34),se=function(e){return function(t){return function(a){console.group(a.type),console.log("The Action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},ie=Object(re.a)(ce.a,se),ue=Object(re.d)(le,ie);l.a.render(r.a.createElement(p.Provider,{store:ue},r.a.createElement(ne,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9c3ff36f.chunk.js.map