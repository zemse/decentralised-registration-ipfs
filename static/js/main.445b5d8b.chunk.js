(this["webpackJsonpd-reg"]=this["webpackJsonpd-reg"]||[]).push([[0],{113:function(e,t,n){e.exports=n(348)},118:function(e,t,n){},119:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},120:function(e,t,n){},121:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_userAddress","type":"address"},{"indexed":false,"internalType":"bytes32","name":"_ipfsSha256Hash","type":"bytes32"}],"name":"ProfileUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"profiles","outputs":[{"internalType":"bytes32","name":"ipfsSha256Hash","type":"bytes32"},{"internalType":"uint256","name":"credits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_ipfsSha256Hash","type":"bytes32"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},164:function(e,t){},23:function(e,t,n){e.exports={network:"kovan",dReg:{abi:n(121),address:"0xcaf5A88e50551759eBb44a5e5648b4d6c1932F50"},ipfs:{infura:{host:"ipfs.infura.io",port:5001,protocol:"https"}}}},31:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),r=n(13),o=n(23).ipfs,s=n(124),l=n(106),i=n(24),c=new s(o.infura);function u(){return(u=Object(r.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof t){e.next=4;break}"0x"===t.slice(0,2)?i.utils.arrayify(t):i.utils.toUtf8Bytes(t),e.next=11;break;case 4:if(!(t instanceof Uint8Array&&0===t.filter((function(e){return e>=256})).length)){e.next=8;break}t,e.next=11;break;case 8:throw window.ssss=t,console.log({input:t,first:Array.isArray(t),second:0===t.filter((function(e){return e>=256})).length}),new Error("Invalid input: "+t);case 11:return n=c.add(t),e.next=14,n.next();case 14:return r=e.sent,e.abrupt("return",r.value.path);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(r.a)(a.a.mark((function e(t){var n,r,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.get(t),e.next=3,n.next();case 3:return r=e.sent,o=r.value.content,e.next=7,o.next();case 7:return s=e.sent,e.abrupt("return",1===s.value._bufs.length?s.value._bufs[0]:s.value._bufs);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.exports={bs58:l,add:function(e){return u.apply(this,arguments)},get:function(e){return f.apply(this,arguments)},multihashToBytes32:function(e){var t=l.decode(e);if(34!==t.length)throw new Error("Invalid IPFS Hash Size: ".concat(t.length," bytes"));return t.slice(2)},toMultihash:function(e){var t=i.utils.hexlify(e);return l.encode(i.utils.concat(["0x1220",t]))}}}.call(this,n(123)(e))},348:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(110),s=n.n(o),l=(n(118),n(17)),i=n(19),c=n(18),u=(n(119),n(120),n(23)),f=n(24),p=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).openEraSwapLife=function(){window.open("https://eraswap.life/","","width=1001,height=650")},e.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.openEraSwapLife},"Load Wallet Using Era Swap Life"),r.a.createElement("button",{onClick:function(){return window.wallet=f.Wallet.createRandom().connect(f.getDefaultProvider(u.network))}},"Random Wallet"))},e}return n}(a.Component),d=n(6),m=n(0),E=n.n(m),S=n(13),h=n(24),w=n(31),g=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={name:"",location:"",url:"",bio:"",ipfsHash:null,ipfsStatus:d.IPFS_ADD_STATUS_ENUM.IDLE,txStatus:d.ETH_TX_CONFIRM_ENUM.IDLE,errorMessage:""},e.componentDidMount=function(){window.profileObj&&e.setState({name:window.profileObj.name,location:window.profileObj.location,url:window.profileObj.url,bio:window.profileObj.bio})},e.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("button",{onClick:e.props.hideProfile},"<< Go Back")," Register form"),"Name: ",r.a.createElement("input",{placeholder:"Enter your name",value:e.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement("br",null),"Location: ",r.a.createElement("input",{placeholder:"Enter your location",value:e.state.location,onChange:function(t){return e.setState({location:t.target.value})}}),r.a.createElement("br",null),"Url: ",r.a.createElement("input",{placeholder:"Enter your URL",value:e.state.url,onChange:function(t){return e.setState({url:t.target.value})}}),r.a.createElement("br",null),"Bio: ",r.a.createElement("textarea",{placeholder:"Tell me about yourself",value:e.state.bio,onChange:function(t){return e.setState({bio:t.target.value})}}),r.a.createElement("button",{disabled:e.state.ipfsStatus!==d.IPFS_ADD_STATUS_ENUM.IDLE,onClick:Object(S.a)(E.a.mark((function t(){var n,a,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({ipfsStatus:d.IPFS_ADD_STATUS_ENUM.UPLOADING}),n={version:1,name:e.state.name,location:e.state.location,url:e.state.url,bio:e.state.bio},a=h.utils.toUtf8Bytes(JSON.stringify(n)),t.next=6,w.add(a);case 6:r=t.sent,e.setState({ipfsHash:r,ipfsStatus:d.IPFS_ADD_STATUS_ENUM.UPLOADED}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.setState({errorMessage:t.t0.message,ipfsStatus:d.IPFS_ADD_STATUS_ENUM.IDLE});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))},function(){switch(e.state.ipfsStatus){case d.IPFS_ADD_STATUS_ENUM.IDLE:return r.a.createElement(r.a.Fragment,null,"Generate IPFS Hash");case d.IPFS_ADD_STATUS_ENUM.UPLOADING:return r.a.createElement(r.a.Fragment,null,"Uploading...");case d.IPFS_ADD_STATUS_ENUM.UPLOADED:return r.a.createElement(r.a.Fragment,null,"Uploaded!")}}()),e.state.ipfsHash?r.a.createElement(r.a.Fragment,null,"New IPFS Hash: ",e.state.ipfsHash,r.a.createElement("button",{disabled:e.state.txStatus!==d.ETH_TX_CONFIRM_ENUM.IDLE,onClick:Object(S.a)(E.a.mark((function t(){var n,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({txStatus:d.ETH_TX_CONFIRM_ENUM.SIGNING}),n=w.multihashToBytes32(e.state.ipfsHash),t.next=4,window.dRegContract.functions.updateProfile(n);case 4:return a=t.sent,console.log(a.hash),e.setState({txStatus:d.ETH_TX_CONFIRM_ENUM.WAITING}),t.next=9,a.wait();case 9:e.setState({txStatus:d.ETH_TX_CONFIRM_ENUM.CONFIRMED}),e.props.updateProfileObj(e.state.ipfsHash);case 11:case"end":return t.stop()}}),t)})))},function(){switch(e.state.txStatus){case d.ETH_TX_CONFIRM_ENUM.IDLE:return r.a.createElement(r.a.Fragment,null,"Sign and Submit Update Profile Tx");case d.ETH_TX_CONFIRM_ENUM.SIGNING:return r.a.createElement(r.a.Fragment,null,"Signing...");case d.ETH_TX_CONFIRM_ENUM.WAITING:return r.a.createElement(r.a.Fragment,null,"Waiting for confirmation");case d.ETH_TX_CONFIRM_ENUM.CONFIRMED:return r.a.createElement(r.a.Fragment,null,"Profile Updated")}}()),r.a.createElement("br",null),e.state.txStatus===d.ETH_TX_CONFIRM_ENUM.CONFIRMED?r.a.createElement("button",{onClick:e.props.hideProfile},"Back to Home"):null):null)},e}return n}(a.Component),T=n(24),_=n(31),b=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={registrationStatus:d.REGISTRATION_STATUS_ENUM.CHECKING,ipfsGetStatus:d.IPFS_GET_STATUS_ENUM.IDLE,showEditProfile:!1,errorMessage:""},e.componentDidMount=Object(S.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.dRegContract.functions.profiles(window.wallet.address);case 2:return n=t.sent,t.next=5,e.setState({registrationStatus:n.ipfsSha256Hash===T.constants.HashZero?d.REGISTRATION_STATUS_ENUM.NOT_REGISTERED:d.REGISTRATION_STATUS_ENUM.REGISTERED,ipfsGetStatus:d.IPFS_GET_STATUS_ENUM.LOADING});case 5:e.state.registrationStatus===d.REGISTRATION_STATUS_ENUM.REGISTERED&&e.updateProfileObj(n.ipfsSha256Hash);case 6:case"end":return t.stop()}}),t)}))),e.updateProfileObj=function(){var t=Object(S.a)(E.a.mark((function t(n){var a,r,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,a=n;try{a=_.toMultihash(n)}catch(s){}return t.next=5,_.get(a);case 5:r=t.sent,o=JSON.parse(T.utils.toUtf8String(r)),console.log({profileObj:o}),window.profileObj=o,e.setState({ipfsGetStatus:d.IPFS_GET_STATUS_ENUM.LOADED}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e.setState({errorMessage:t.t0.message,ipfsGetStatus:d.IPFS_GET_STATUS_ENUM.NOT_FOUND});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),e.render=function(){return r.a.createElement(r.a.Fragment,null,e.state.showEditProfile?r.a.createElement(g,{hideProfile:function(){return e.setState({showEditProfile:!1})},updateProfileObj:e.updateProfileObj}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,function(){switch(e.state.registrationStatus){case d.REGISTRATION_STATUS_ENUM.CHECKING:return r.a.createElement(r.a.Fragment,null,"Checking your registration status...");case d.REGISTRATION_STATUS_ENUM.NOT_REGISTERED:return r.a.createElement(r.a.Fragment,null,"You have not registered.",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.setState({showEditProfile:!0})}},"Register Now"));case d.REGISTRATION_STATUS_ENUM.REGISTERED:return r.a.createElement(r.a.Fragment,null,"You are registered",r.a.createElement("br",null),function(){switch(e.state.ipfsGetStatus){case d.IPFS_GET_STATUS_ENUM.LOADING:return r.a.createElement(r.a.Fragment,null,"Fetching your profile details from IPFS...");case d.IPFS_GET_STATUS_ENUM.LOADED:return r.a.createElement(r.a.Fragment,null,"Successfully, fetched your profile from IPFS.",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.setState({showEditProfile:!0})}},"Edit Profile"));case d.IPFS_GET_STATUS_ENUM.NOT_FOUND:return r.a.createElement(r.a.Fragment,null,"Looks like your profile was dropped from IPFS, kindly re-update your profile.")}}());default:return null}}())))},e}return n}(a.Component),N=n(25),I=n(24),O=n(31),v=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={userAddress:null,multiHash:null,name:null,location:null,url:null,bio:null},e.componentDidMount=Object(S.a)(E.a.mark((function t(){var n,a,r,o,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.userAddress,a=e.props.ipfsSha256Hash,r=O.toMultihash(a),console.log("h: ".concat(e.props.h),{ipfsSha256Hash:a},{multiHash:r}),e.setState({userAddress:n,multiHash:r}),t.next=7,O.get(r);case 7:o=t.sent,s=JSON.parse(I.utils.toUtf8String(o)),e.setState({name:s.name,location:s.location,url:s.url,bio:s.bio});case 10:case"end":return t.stop()}}),t)}))),e.render=function(){return r.a.createElement("div",{class:"timeline-element"},r.a.createElement("span",{className:"el-key"},"Address:")," ",e.state.userAddress,r.a.createElement("br",null),r.a.createElement("span",{className:"el-key"},"IPFS:")," ",e.state.multiHash,r.a.createElement("br",null),r.a.createElement("span",{className:"el-key"},"Name:")," ",e.state.name,r.a.createElement("br",null),r.a.createElement("span",{className:"el-key"},"Location:")," ",e.state.location,r.a.createElement("br",null),r.a.createElement("span",{className:"el-key"},"Url:")," ",r.a.createElement("a",{href:e.state.url,target:"_blank"},e.state.url),r.a.createElement("br",null),r.a.createElement("span",{className:"el-key"},"Bio:")," ",e.state.bio)},e}return n}(a.Component),U=(n(24),n(31),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={fetchingLogs:!0,logs:[],newLogs:[]},e.componentDidMount=Object(S.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.updateLogs(),window.wallet.provider.on(window.dRegContract.filters.ProfileUpdated(),(function(t){e.updateLogs()}));case 2:case"end":return t.stop()}}),t)}))),e.updateLogs=Object(S.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({fetchingLogs:!0}),t.next=3,window.wallet.provider.getLogs(Object(N.a)({},window.dRegContract.filters.ProfileUpdated(),{fromBlock:0,toBlock:"latest"}));case 3:n=t.sent.map((function(e){return window.dRegContract.interface.parseLog(e)})).reverse(),console.log({logs:n}),e.setState({logs:n,fetchingLogs:!1});case 6:case"end":return t.stop()}}),t)}))),e.render=function(){return r.a.createElement(r.a.Fragment,null,e.state.fetchingLogs?r.a.createElement("p",null,"Please wait fetching logs..."):r.a.createElement(r.a.Fragment,null,e.state.logs.map((function(e,t){var n=e.values._userAddress,a=e.values._ipfsSha256Hash;return r.a.createElement(v,{key:t,userAddress:n,ipfsSha256Hash:a,h:t})}))))},e}return n}(a.Component)),y=(n(24),n(31),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={name:null,showTimeLine:!1},e.componentDidMount=function(){setInterval((function(){window.profileObj&&window.profileObj.name!==e.state.name&&e.setState({name:window.profileObj.name})}),100)},e.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Welcome ",e.state.name?r.a.createElement(r.a.Fragment,null,e.state.name):r.a.createElement(r.a.Fragment,null,window.wallet.address),"!"),e.state.showTimeLine?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.setState({showTimeLine:!1})}},"Show My Dashboard"),r.a.createElement(U,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("button",{onClick:function(){return e.setState({showTimeLine:!0})}},"Show Public Timeline")))},e}return n}(a.Component)),A=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={walletLoaded:!1},e.componentDidMount=function(){setInterval((function(){var t=void 0!==window.wallet;t!==e.state.walletLoaded&&e.setState({walletLoaded:t})}),100)},e.render=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},e.state.walletLoaded?r.a.createElement(y,null):r.a.createElement(p,null)))},e}return n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(24),M=n(31);window.ethers=D,window.ipfsUtils=M,window.dRegContract=new D.Contract(u.dReg.address,u.dReg.abi,D.getDefaultProvider(u.network)),window.addEventListener("message",(function(e){setTimeout((function(){window.ProcessParentMessage_2(e.data)}),0)}),!1),window.ProcessParentMessage_2=function(e){"string"===typeof e&&"0x"===e.substring(0,2)&&(window.wallet=new D.Wallet(e).connect(D.getDefaultProvider(u.network)),window.dRegContract=window.dRegContract.connect(window.wallet))},s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t){e.exports={REGISTRATION_STATUS_ENUM:{CHECKING:0,NOT_REGISTERED:1,REGISTERED:2},IPFS_ADD_STATUS_ENUM:{IDLE:0,UPLOADING:1,UPLOADED:2},IPFS_GET_STATUS_ENUM:{IDLE:0,LOADING:1,LOADED:2,NOT_FOUND:3},ETH_TX_CONFIRM_ENUM:{IDLE:0,SIGNING:1,WAITING:2,CONFIRMED:3}}}},[[113,1,2]]]);
//# sourceMappingURL=main.445b5d8b.chunk.js.map