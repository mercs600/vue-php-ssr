(()=>{var e={215:e=>{"use strict";e.exports=require("@vue/server-renderer")},734:e=>{"use strict";e.exports=require("vue")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}(()=>{const{createSSRApp:e}=r(734),{renderToString:t}=r(215),i=e({data:()=>({msg:"hello",context:"undefined"!=typeof context?context:{}}),methods:{click(){alert("siema")}},template:'<div @click="click">{{ msg }}, mam też dostep do contextu {{ context }} </div>'});(async()=>{if("undefined"!=typeof window)return i.mount("#app");let e=await t(i);e=`\n  <script type="text/javascript">\n  var context = ${JSON.stringify(context)}\n  <\/script>\n  <div id="app">${e}</div>`,dispatch(e)})()})(),module.exports={}})();