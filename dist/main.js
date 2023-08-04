"use strict";(self.webpackChunkcapstone2=self.webpackChunkcapstone2||[]).push([[179],{850:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100px;\n  border-bottom: 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 100px;\n  background: rgb(63, 104, 190);\n  background: radial-gradient(circle, rgba(63, 104, 190, 1) 0%, rgba(40, 203, 207, 1) 100%);\n}\n\n.iconDiv {\n  display: flex;\n  justify-content: center;\n}\n\n.icon {\n  width: 100px;\n}\n\n.headerList {\n  list-style: none;\n  display: flex;\n  gap: 100px;\n}\n\n.headerListItem {\n  font-size: 25px;\n}\n\na {\n  text-decoration: none;\n}\n\na:link,\na:visited,\na:hover,\na:active {\n  color: black;\n}\n",""]);const s=r},608:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,".popupMenuBackground {\n  background: transparent;\n  backdrop-filter: blur(5px);\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n  overflow-y: scroll;\n}\n\n.popupMenu {\n  position: fixed;\n  top: 20px;\n  bottom: 20px;\n  left: 5%;\n  right: 5%;\n  background-color: rgb(136, 201, 255);\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: scroll;\n}\n\n.exitBtn {\n  border-radius: 6px;\n  width: 25px;\n  height: 25px;\n  border: none;\n  position: fixed;\n  top: 45px;\n  left: 45px;\n}\n\n.pMargin {\n  margin: 0;\n}\n\n.popupMenuImg {\n  margin-top: 10px;\n  height: 230px;\n  border-radius: 20px;\n}\n\n.movie {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.infoDiv {\n  margin-top: 15px;\n  width: 360px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.movieTitle {\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.movieInfo {\n  font-size: 22px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 300px;\n  height: 200px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n\n.fName,\n.fComment {\n  border: 1px solid rgb(129, 129, 129);\n  border-radius: 6px;\n}\n\n.fName {\n  height: 24px;\n}\n\n.fComment {\n  font-family: 'Times New Roman', Times, serif;\n  height: 100px;\n  padding-top: 4px;\n  resize: none;\n  font-size: 15px;\n}\n\n.submitBtn {\n  width: 80px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  border-radius: 6px;\n  border: 1px solid rgb(129, 129, 129);\n  background-color: white;\n  transition: 0.1s;\n}\n\n.submitBtn:active {\n  background-color: rgb(230, 230, 230);\n}\n\n@media (min-width: 600px) {\n  .popupMenu {\n    left: 10%;\n    right: 10%;\n  }\n\n  .exitBtn {\n    left: 13%;\n    right: 11%;\n  }\n}\n\n@media (min-width: 900px) {\n  .popupMenu {\n    left: 25%;\n    right: 25%;\n  }\n\n  .exitBtn {\n    left: 27%;\n    right: 23%;\n  }\n}\n",""]);const s=r},426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"body {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.card {\n  width: 300px;\n  border: 1px solid black;\n  margin: 10px;\n}\n\n.img-container {\n  height: 200px;\n  overflow: hidden;\n}\n\nimg {\n  width: 100%;\n  object-fit: cover;\n}\n",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=i(u,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var c=o(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},506:(n,e,t)=>{var o=t(379),i=t.n(o),a=t(795),r=t.n(a),s=t(569),c=t.n(s),d=t(565),l=t.n(d),p=t(216),m=t.n(p),u=t(589),f=t.n(u),h=t(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=m(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var g=t(608),x={};x.styleTagTransform=f(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=m(),i()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var b=t(850),y={};y.styleTagTransform=f(),y.setAttributes=l(),y.insert=c().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=m(),i()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const C=t.p+"f6800ca0aaae3c2f1087.png",w="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes",E=async n=>{try{const e=await fetch(w),t=await e.json();t.filter((e=>e.item_id===n)).length>=1&&((n,e)=>{const t=n.filter((n=>n.item_id===e));t&&(document.getElementById(e).textContent=`${t[0].likes} 🤍 likes`)})(t,n)}catch(n){}},T=document.getElementById("cardContainer"),k=n=>{const e=document.createElement("div");e.className="card";const t=document.createElement("h3");t.textContent=n.name;const o=document.createElement("div");o.className="img-container";const i=document.createElement("img");i.src=n.image.original;const a=document.createElement("button");a.className="like-btn",a.innerHTML='<i class="far fa-heart"></i><span> likes</span>',a.id=n.id;const r=document.createElement("span");r.className="like-count",r.id=n.id;const s=document.createElement("button");s.className="comment-btn",s.textContent="Comment",s.id=`commentBtn${n.id}`,o.appendChild(i),e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(s),T.appendChild(e),a.addEventListener("click",(()=>{(async n=>{try{await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})}),E(n)}catch(n){}})(n.id)})),E(n.id),(()=>{const n=document.querySelectorAll(".card");document.querySelector(".items-counter").innerHTML=n.length})()};let M=[];const S="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zDkBx7Z7MEPVQmnqSyaW/comments",I=async n=>{const e=await fetch(`${S}?item_id=item${n}`);(n=>{const e=document.querySelector("#commentsDiv");if(n.error){const n=document.createElement("p");n.textContent="There is no Comments.",e.appendChild(n)}else{for(;e.firstChild;)e.removeChild(e.lastChild);n.forEach((n=>{const t=document.createElement("p");t.textContent=n.comment,e.appendChild(t)})),(()=>{const n=document.querySelector("#commentsTitle"),e=document.querySelector("#commentsDiv").childElementCount;n.textContent=`Comments : ${e}`})()}})(await e.json())},N=document.getElementById("cardContainer"),B=document.querySelector("#pageIcon");B.src=C,B.classList.add("icon"),N.addEventListener("click",(n=>{"BUTTON"===n.target.tagName&&"Comment"===n.target.textContent&&(n=>{const e=n.replace(/\D+/,"")-1,t=document.createElement("section");t.classList.add("popupMenuBackground"),t.innerHTML=`\n  <div class="popupMenu">\n  <button class="exitBtn" id="popupExitBtn">X</button>\n  <div>\n    <img src="${M[e].image.medium}" class="popupMenuImg">\n  </div>\n  <div class="movie">\n    <h3 class="movieTitle">${M[e].name}</h3>\n    <p class="movieInfo pMargin">genres : ${M[e].genres}</p>\n    <div class="infoDiv">\n      <p class="movieInfo pMargin">language : ${M[e].language}</p>\n      <p class="movieInfo pMargin">status : ${M[e].status}</p>\n    </div>\n    <div class="infoDiv">\n      <p class="movieInfo pMargin">network : ${M[e].network.name}</p>\n      <p class="movieInfo pMargin">rating : ${M[e].rating.average}</p>\n    </div>\n  </div>\n  <div class="commentsTitleDiv" id="commentsTitleDiv">\n    <h3 id="commentsTitle">Comments : 0</h3>\n  </div>\n  <div class="comments" id="commentsDiv">  \n    <p id="firstComment"></p>\n  </div>\n  <form>\n    <title>Add A Comment</title>\n    <input id="fName" class="fName" placeholder="Your name">\n    <textarea id="fComment" class="fComment" placeholder="Your insigths"></textarea>\n    <button id="submitComment" class="submitBtn" type="button">Comment</button>\n  </form>\n</div>\n  `,I(e),document.body.appendChild(t),document.body.style.overflow="hidden",document.querySelector("#popupExitBtn").addEventListener("click",(()=>{var n;n=t,document.body.removeChild(n),document.body.style.overflow="scroll"})),document.querySelector("#submitComment").addEventListener("click",(()=>{(async n=>{const e=document.querySelector("#fName"),t=document.querySelector("#fComment");""!==e.value&&""!==t.value&&(await fetch(S,{method:"POST",body:JSON.stringify({item_id:`item${n}`,username:e.value,comment:t.value}),headers:{"Content-type":"application/json; charset=UTF-8"}}),I(n),e.value="",t.value="")})(e)}))})(n.target.id)})),window.onload=(async()=>{const n=await fetch("https://api.tvmaze.com/shows"),e=await n.json();if(e){const n=e.slice(0,10);M=n,n.forEach((n=>{k(n)}))}})()}},n=>{n(n.s=506)}]);