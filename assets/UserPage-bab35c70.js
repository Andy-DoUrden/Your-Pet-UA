import{s as x,g as ei,_ as Ct,c as zt,d as de,e as xe,r as S,R as ii,f as oe,j as l,h as st,i as Le,k as re,l as Fe,m as ni,n as Zt,o as Gt,p as ai,q as oi,t as ri,b as si,v as Z,L as li,w as ci,x as pi,C as mi}from"./index-af600773.js";import{F as fi,a as di,c as xi,b as Ht,d as ui,e as gi}from"./index.esm-29c55bda.js";import{L as bi}from"./Loader-8caa547e.js";x.div`
  margin-bottom: 32px;
  position: relative;
  img {
    width: 140px;
    height: 135px;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 20%;
    max-width: 100%;
  }
`;x.div`
  
`;x.div`
  position: relative;
`;x.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;const hi=x(fi)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media screen and (min-width: 768px) {
  flex-direction:row-reverse;
  @media screen and (max-width: 1280px) {
  gap: 70px;
  }
  }
  @media screen and (min-width: 1280px) {
  flex-direction: column;
  }
`,yi=x.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  @media screen and (min-width: 768px) {
  gap: 15px 0px;
  }
`,wi=x.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  color:var(--clr-primary);
  @media screen and (min-width: 768px) {
  width: 354px;
  gap: 10px;
  }
`,Dt=x.li`
  display: flex;
  flex-direction:column;
  width: 100%;
`,Lt=x.div`
  display:flex; 
  justify-content: space-between;
  
`,Ft=x.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.56px;
  margin: auto;
  margin-top:10px;
  color: var(--clr-brand-red);
  &UserFormInput{
  border-color: var(--clr-brand-red);
  }
`,Et=x.label`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
  font-size: 18px;
  letter-spacing: 0.72px;
  }
`,Rt=x(di)`
  outline: 0;
  background: none;

  flex: 1 1 auto;

  max-width: 190px;
  height: 28px;
  padding: 4px 12px;
  background: var(--clr-brand-blue);
  background: none;

  border: 1px solid var(--clr-brand-blue);
  border-radius: 40px;

  font-size: 12px;
  letter-spacing: 0.48px;
  @media screen and (min-width: 768px) {
  max-width: 255px;
  font-size:16px;
  letter-spacing: 0.64px;
  }
`,vi=x.button`
  gap: 0px 11px;
  align-items: center;
  display: flex;
  background-color:transparent;
  cursor: pointer;
  border: none;
  font-size: 18px;
  width: 121px;
  border: 1px solid var(--clr-brand-blue);
  border-radius:40px;
  padding: 4px 10px;
  @media screen and (min-width: 768px) {
  justify-content:flex-end;
  
  }
    transition: all 300ms;

  &:hover{
    background-color:var(--clr-brand-blue);
    color: var(--clr-bcg);
    p{
      color: var(--clr-bcg);
    }
    svg{
          stroke: var(--clr-bcg);
    }
  }

`,ki=x.button`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 6px 107px;
  box-sizing:border-box;
  margin: auto;

  border-radius: 40px;
  border: 1px solid var(--clr-primary-inv);
  color: var(--clr-primary-inv);
  background-color:var(--clr-brand-blue);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;

  transition: all 300ms ;

  cursor: pointer;
  @media screen and (min-width: 768px) {
      font-size: 16px;
    max-width: 255px;
    margin-right:  0px;
    margin-left:auto;
    padding: 5px 108px;
  }
  &:hover{
    background-color:transparent;
    color: var(--clr-brand-blue);
    border: 1px solid var(--clr-brand-blue);
    border-radius:40px;
  }
`,Ni=x.p`
  color: var(--clr-brand-blue);

  font-size: 16px;
  font-style: normal;
  letter-spacing: 0.64px;
  transition:color 300ms;
`,Ci=x.svg`
  width: 24px;
  height: 24px;
  stroke: #54adff;
  fill: none;
  transition: stroke 300ms; 
`,zi=x.svg`
  stroke: var(--clr-bcg-user);
  fill: none;
  width: 24px;
  height: 24px;
  transition: stroke 300ms;
`,ji=x.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Si=x.div`
    background-color:var(--clr-bcg-user);
    border-radius:20px;
    padding: 70px  12px 60px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index:5;
    @media screen and (min-width: 768px) {
    padding: 108px  155px 109px;
    width: 608px;
  }
`,Ai=x.h3`
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;
margin-bottom:44px;

  @media screen and (min-width: 768px) {
  font-size: 36px;
  letter-spacing: 1.44px;
  margin-bottom:48px;
  }
`,Di=x.button`
  position:absolute;
  top: 12px;
  right: 12px;
  border: none;
  background-color:transparent;
  @media screen and (min-width: 768px) {
  top: 24px;
  right: 24px;
  }
  transition: transform 300ms  ;
  &:hover{
    transform: scale(1.2);
  }
`,Li=x.div`
  display: flex;
  flex-direction:column;
  gap:8px 0px ;
  @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:center;
    gap: 0px  17px;
  }
`,Fi=x.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;


  background-color:transparent;
  color:var(--clr-brand-blue);
  border:   2px solid var(--clr-brand-blue);
  border-radius: 40px;
  padding: 8px 20px;
  transition:all 300ms;
  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  }
  &:hover{
    background-color:var(--clr-brand-blue);
    color:var(--clr-bcg);

  }
`,Ei=x.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  display: flex;
  justify-content: center;
  align-items:center;
  gap:0px 8px;


  background-color:var(--clr-brand-blue);
  color:var(--clr-primary-inv);
  border: none;
  border-radius: 40px;
  padding: 8px 20px;

  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
  } 
  transition: all 300ms;

  &:hover{
    background-color: transparent;
    color:var(--clr-brand-blue);
    border: 2px solid var(--clr-brand-blue);
    svg{
    stroke:var(--clr-brand-blue);
    }
  }
`;var Ee={exports:{}},Ri="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ti=Ri,Ii=Ti;function Re(){}function Te(){}Te.resetWarningCache=Re;var Mi=function(){function t(o,r,c,m,g,F){if(F!==Ii){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}t.isRequired=t;function e(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Te,resetWarningCache:Re};return i.PropTypes=i,i};Ee.exports=Mi();var Wi=Ee.exports;const R=ei(Wi);var Oi=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function It(t,e){var i=Bi(t);if(typeof i.path!="string"){var o=t.webkitRelativePath;Object.defineProperty(i,"path",{value:typeof e=="string"?e:typeof o=="string"&&o.length>0?o:t.name,writable:!1,configurable:!1,enumerable:!0})}return i}function Bi(t){var e=t.name,i=e&&e.lastIndexOf(".")!==-1;if(i&&!t.type){var o=e.split(".").pop().toLowerCase(),r=Oi.get(o);r&&Object.defineProperty(t,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return t}var Pi=[".DS_Store","Thumbs.db"];function Xi(t){return Ct(this,void 0,void 0,function(){return zt(this,function(e){return Kt(t)&&_i(t.dataTransfer)?[2,Ki(t.dataTransfer,t.type)]:Hi(t)?[2,Ui(t)]:Array.isArray(t)&&t.every(function(i){return"getFile"in i&&typeof i.getFile=="function"})?[2,$i(t)]:[2,[]]})})}function _i(t){return Kt(t)}function Hi(t){return Kt(t)&&Kt(t.target)}function Kt(t){return typeof t=="object"&&t!==null}function Ui(t){return te(t.target.files).map(function(e){return It(e)})}function $i(t){return Ct(this,void 0,void 0,function(){var e;return zt(this,function(i){switch(i.label){case 0:return[4,Promise.all(t.map(function(o){return o.getFile()}))];case 1:return e=i.sent(),[2,e.map(function(o){return It(o)})]}})})}function Ki(t,e){return Ct(this,void 0,void 0,function(){var i,o;return zt(this,function(r){switch(r.label){case 0:return t.items?(i=te(t.items).filter(function(c){return c.kind==="file"}),e!=="drop"?[2,i]:[4,Promise.all(i.map(Yi))]):[3,2];case 1:return o=r.sent(),[2,ue(Ie(o))];case 2:return[2,ue(te(t.files).map(function(c){return It(c)}))]}})})}function ue(t){return t.filter(function(e){return Pi.indexOf(e.name)===-1})}function te(t){if(t===null)return[];for(var e=[],i=0;i<t.length;i++){var o=t[i];e.push(o)}return e}function Yi(t){if(typeof t.webkitGetAsEntry!="function")return ge(t);var e=t.webkitGetAsEntry();return e&&e.isDirectory?Me(e):ge(t)}function Ie(t){return t.reduce(function(e,i){return de(de([],xe(e),!1),xe(Array.isArray(i)?Ie(i):[i]),!1)},[])}function ge(t){var e=t.getAsFile();if(!e)return Promise.reject("".concat(t," is not a File"));var i=It(e);return Promise.resolve(i)}function qi(t){return Ct(this,void 0,void 0,function(){return zt(this,function(e){return[2,t.isDirectory?Me(t):Vi(t)]})})}function Me(t){var e=t.createReader();return new Promise(function(i,o){var r=[];function c(){var m=this;e.readEntries(function(g){return Ct(m,void 0,void 0,function(){var F,W,O;return zt(this,function(L){switch(L.label){case 0:if(g.length)return[3,5];L.label=1;case 1:return L.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return F=L.sent(),i(F),[3,4];case 3:return W=L.sent(),o(W),[3,4];case 4:return[3,6];case 5:O=Promise.all(g.map(qi)),r.push(O),c(),L.label=6;case 6:return[2]}})})},function(g){o(g)})}c()})}function Vi(t){return Ct(this,void 0,void 0,function(){return zt(this,function(e){return[2,new Promise(function(i,o){t.file(function(r){var c=It(r,t.fullPath);i(c)},function(r){o(r)})})]})})}var Qi=function(t,e){if(t&&e){var i=Array.isArray(e)?e:e.split(","),o=t.name||"",r=(t.type||"").toLowerCase(),c=r.replace(/\/.*$/,"");return i.some(function(m){var g=m.trim().toLowerCase();return g.charAt(0)==="."?o.toLowerCase().endsWith(g):g.endsWith("/*")?c===g.replace(/\/.*$/,""):r===g})}return!0};function be(t){return Zi(t)||Ji(t)||Oe(t)||Gi()}function Gi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ji(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zi(t){if(Array.isArray(t))return ee(t)}function he(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,o)}return i}function ye(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?he(Object(i),!0).forEach(function(o){We(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):he(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function We(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Tt(t,e){return nn(t)||en(t,e)||Oe(t,e)||tn()}function tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oe(t,e){if(t){if(typeof t=="string")return ee(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function en(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var o=[],r=!0,c=!1,m,g;try{for(i=i.call(t);!(r=(m=i.next()).done)&&(o.push(m.value),!(e&&o.length===e));r=!0);}catch(F){c=!0,g=F}finally{try{!r&&i.return!=null&&i.return()}finally{if(c)throw g}}return o}}function nn(t){if(Array.isArray(t))return t}var an="file-invalid-type",on="file-too-large",rn="file-too-small",sn="too-many-files",ln=function(e){e=Array.isArray(e)&&e.length===1?e[0]:e;var i=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:an,message:"File type must be ".concat(i)}},we=function(e){return{code:on,message:"File is larger than ".concat(e," ").concat(e===1?"byte":"bytes")}},ve=function(e){return{code:rn,message:"File is smaller than ".concat(e," ").concat(e===1?"byte":"bytes")}},cn={code:sn,message:"Too many files"};function Be(t,e){var i=t.type==="application/x-moz-file"||Qi(t,e);return[i,i?null:ln(e)]}function Pe(t,e,i){if(vt(t.size))if(vt(e)&&vt(i)){if(t.size>i)return[!1,we(i)];if(t.size<e)return[!1,ve(e)]}else{if(vt(e)&&t.size<e)return[!1,ve(e)];if(vt(i)&&t.size>i)return[!1,we(i)]}return[!0,null]}function vt(t){return t!=null}function pn(t){var e=t.files,i=t.accept,o=t.minSize,r=t.maxSize,c=t.multiple,m=t.maxFiles,g=t.validator;return!c&&e.length>1||c&&m>=1&&e.length>m?!1:e.every(function(F){var W=Be(F,i),O=Tt(W,1),L=O[0],it=Pe(F,o,r),P=Tt(it,1),pt=P[0],M=g?g(F):null;return L&&pt&&!M})}function Yt(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function Ut(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(e){return e==="Files"||e==="application/x-moz-file"}):!!t.target&&!!t.target.files}function ke(t){t.preventDefault()}function mn(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function fn(t){return t.indexOf("Edge/")!==-1}function dn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return mn(t)||fn(t)}function dt(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(o){for(var r=arguments.length,c=new Array(r>1?r-1:0),m=1;m<r;m++)c[m-1]=arguments[m];return e.some(function(g){return!Yt(o)&&g&&g.apply(void 0,[o].concat(c)),Yt(o)})}}function xn(){return"showOpenFilePicker"in window}function un(t){if(vt(t)){var e=Object.entries(t).filter(function(i){var o=Tt(i,2),r=o[0],c=o[1],m=!0;return Xe(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),m=!1),(!Array.isArray(c)||!c.every(_e))&&(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),m=!1),m}).reduce(function(i,o){var r=Tt(o,2),c=r[0],m=r[1];return ye(ye({},i),{},We({},c,m))},{});return[{description:"Files",accept:e}]}return t}function gn(t){if(vt(t))return Object.entries(t).reduce(function(e,i){var o=Tt(i,2),r=o[0],c=o[1];return[].concat(be(e),[r],be(c))},[]).filter(function(e){return Xe(e)||_e(e)}).join(",")}function bn(t){return t instanceof DOMException&&(t.name==="AbortError"||t.code===t.ABORT_ERR)}function hn(t){return t instanceof DOMException&&(t.name==="SecurityError"||t.code===t.SECURITY_ERR)}function Xe(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||/\w+\/[-+.\w]+/g.test(t)}function _e(t){return/^.*\.[\w]+$/.test(t)}var yn=["children"],wn=["open"],vn=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],kn=["refKey","onChange","onClick"];function Nn(t){return jn(t)||zn(t)||He(t)||Cn()}function Cn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jn(t){if(Array.isArray(t))return ie(t)}function Jt(t,e){return Dn(t)||An(t,e)||He(t,e)||Sn()}function Sn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(t,e){if(t){if(typeof t=="string")return ie(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ie(t,e)}}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function An(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var o=[],r=!0,c=!1,m,g;try{for(i=i.call(t);!(r=(m=i.next()).done)&&(o.push(m.value),!(e&&o.length===e));r=!0);}catch(F){c=!0,g=F}finally{try{!r&&i.return!=null&&i.return()}finally{if(c)throw g}}return o}}function Dn(t){if(Array.isArray(t))return t}function Ne(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,o)}return i}function B(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(i),!0).forEach(function(o){ne(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ne(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function ne(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function qt(t,e){if(t==null)return{};var i=Ln(t,e),o,r;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)o=c[r],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}function Ln(t,e){if(t==null)return{};var i={},o=Object.keys(t),r,c;for(c=0;c<o.length;c++)r=o[c],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}var se=S.forwardRef(function(t,e){var i=t.children,o=qt(t,yn),r=$e(o),c=r.open,m=qt(r,wn);return S.useImperativeHandle(e,function(){return{open:c}},[c]),ii.createElement(S.Fragment,null,i(B(B({},m),{},{open:c})))});se.displayName="Dropzone";var Ue={disabled:!1,getFilesFromEvent:Xi,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};se.defaultProps=Ue;se.propTypes={children:R.func,accept:R.objectOf(R.arrayOf(R.string)),multiple:R.bool,preventDropOnDocument:R.bool,noClick:R.bool,noKeyboard:R.bool,noDrag:R.bool,noDragEventsBubbling:R.bool,minSize:R.number,maxSize:R.number,maxFiles:R.number,disabled:R.bool,getFilesFromEvent:R.func,onFileDialogCancel:R.func,onFileDialogOpen:R.func,useFsAccessApi:R.bool,autoFocus:R.bool,onDragEnter:R.func,onDragLeave:R.func,onDragOver:R.func,onDrop:R.func,onDropAccepted:R.func,onDropRejected:R.func,onError:R.func,validator:R.func};var ae={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function $e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=B(B({},Ue),t),i=e.accept,o=e.disabled,r=e.getFilesFromEvent,c=e.maxSize,m=e.minSize,g=e.multiple,F=e.maxFiles,W=e.onDragEnter,O=e.onDragLeave,L=e.onDragOver,it=e.onDrop,P=e.onDropAccepted,pt=e.onDropRejected,M=e.onFileDialogCancel,A=e.onFileDialogOpen,T=e.useFsAccessApi,nt=e.autoFocus,X=e.preventDropOnDocument,et=e.noClick,Y=e.noKeyboard,mt=e.noDrag,j=e.noDragEventsBubbling,_=e.onError,gt=e.validator,bt=S.useMemo(function(){return gn(i)},[i]),Mt=S.useMemo(function(){return un(i)},[i]),jt=S.useMemo(function(){return typeof A=="function"?A:Ce},[A]),ht=S.useMemo(function(){return typeof M=="function"?M:Ce},[M]),$=S.useRef(null),V=S.useRef(null),Wt=S.useReducer(Fn,ae),St=Jt(Wt,2),kt=St[0],Q=St[1],Vt=kt.isFocused,yt=kt.isFileDialogActive,xt=S.useRef(typeof window<"u"&&window.isSecureContext&&T&&xn()),Ot=function(){!xt.current&&yt&&setTimeout(function(){if(V.current){var d=V.current.files;d.length||(Q({type:"closeDialog"}),ht())}},300)};S.useEffect(function(){return window.addEventListener("focus",Ot,!1),function(){window.removeEventListener("focus",Ot,!1)}},[V,yt,ht,xt]);var lt=S.useRef([]),Bt=function(d){$.current&&$.current.contains(d.target)||(d.preventDefault(),lt.current=[])};S.useEffect(function(){return X&&(document.addEventListener("dragover",ke,!1),document.addEventListener("drop",Bt,!1)),function(){X&&(document.removeEventListener("dragover",ke),document.removeEventListener("drop",Bt))}},[$,X]),S.useEffect(function(){return!o&&nt&&$.current&&$.current.focus(),function(){}},[$,nt,o]);var ct=S.useCallback(function(p){_?_(p):console.error(p)},[_]),Pt=S.useCallback(function(p){p.preventDefault(),p.persist(),y(p),lt.current=[].concat(Nn(lt.current),[p.target]),Ut(p)&&Promise.resolve(r(p)).then(function(d){if(!(Yt(p)&&!j)){var N=d.length,C=N>0&&pn({files:d,accept:bt,minSize:m,maxSize:c,multiple:g,maxFiles:F,validator:gt}),w=N>0&&!C;Q({isDragAccept:C,isDragReject:w,isDragActive:!0,type:"setDraggedFiles"}),W&&W(p)}}).catch(function(d){return ct(d)})},[r,W,ct,j,bt,m,c,g,F,gt]),at=S.useCallback(function(p){p.preventDefault(),p.persist(),y(p);var d=Ut(p);if(d&&p.dataTransfer)try{p.dataTransfer.dropEffect="copy"}catch{}return d&&L&&L(p),!1},[L,j]),Xt=S.useCallback(function(p){p.preventDefault(),p.persist(),y(p);var d=lt.current.filter(function(C){return $.current&&$.current.contains(C)}),N=d.indexOf(p.target);N!==-1&&d.splice(N,1),lt.current=d,!(d.length>0)&&(Q({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Ut(p)&&O&&O(p))},[$,O,j]),Nt=S.useCallback(function(p,d){var N=[],C=[];p.forEach(function(w){var I=Be(w,bt),z=Jt(I,2),G=z[0],J=z[1],U=Pe(w,m,c),H=Jt(U,2),E=H[0],ot=H[1],v=gt?gt(w):null;if(G&&E&&!v)N.push(w);else{var ft=[J,ot];v&&(ft=ft.concat(v)),C.push({file:w,errors:ft.filter(function(wt){return wt})})}}),(!g&&N.length>1||g&&F>=1&&N.length>F)&&(N.forEach(function(w){C.push({file:w,errors:[cn]})}),N.splice(0)),Q({acceptedFiles:N,fileRejections:C,type:"setFiles"}),it&&it(N,C,d),C.length>0&&pt&&pt(C,d),N.length>0&&P&&P(N,d)},[Q,g,bt,m,c,F,it,P,pt,gt]),ut=S.useCallback(function(p){p.preventDefault(),p.persist(),y(p),lt.current=[],Ut(p)&&Promise.resolve(r(p)).then(function(d){Yt(p)&&!j||Nt(d,p)}).catch(function(d){return ct(d)}),Q({type:"reset"})},[r,Nt,ct,j]),tt=S.useCallback(function(){if(xt.current){Q({type:"openDialog"}),jt();var p={multiple:g,types:Mt};window.showOpenFilePicker(p).then(function(d){return r(d)}).then(function(d){Nt(d,null),Q({type:"closeDialog"})}).catch(function(d){bn(d)?(ht(d),Q({type:"closeDialog"})):hn(d)?(xt.current=!1,V.current?(V.current.value=null,V.current.click()):ct(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ct(d)});return}V.current&&(Q({type:"openDialog"}),jt(),V.current.value=null,V.current.click())},[Q,jt,ht,T,Nt,ct,Mt,g]),K=S.useCallback(function(p){!$.current||!$.current.isEqualNode(p.target)||(p.key===" "||p.key==="Enter"||p.keyCode===32||p.keyCode===13)&&(p.preventDefault(),tt())},[$,tt]),n=S.useCallback(function(){Q({type:"focus"})},[]),a=S.useCallback(function(){Q({type:"blur"})},[]),s=S.useCallback(function(){et||(dn()?setTimeout(tt,0):tt())},[et,tt]),u=function(d){return o?null:d},b=function(d){return Y?null:u(d)},k=function(d){return mt?null:u(d)},y=function(d){j&&d.stopPropagation()},f=S.useMemo(function(){return function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=p.refKey,N=d===void 0?"ref":d,C=p.role,w=p.onKeyDown,I=p.onFocus,z=p.onBlur,G=p.onClick,J=p.onDragEnter,U=p.onDragOver,H=p.onDragLeave,E=p.onDrop,ot=qt(p,vn);return B(B(ne({onKeyDown:b(dt(w,K)),onFocus:b(dt(I,n)),onBlur:b(dt(z,a)),onClick:u(dt(G,s)),onDragEnter:k(dt(J,Pt)),onDragOver:k(dt(U,at)),onDragLeave:k(dt(H,Xt)),onDrop:k(dt(E,ut)),role:typeof C=="string"&&C!==""?C:"presentation"},N,$),!o&&!Y?{tabIndex:0}:{}),ot)}},[$,K,n,a,s,Pt,at,Xt,ut,Y,mt,o]),D=S.useCallback(function(p){p.stopPropagation()},[]),h=S.useMemo(function(){return function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=p.refKey,N=d===void 0?"ref":d,C=p.onChange,w=p.onClick,I=qt(p,kn),z=ne({accept:bt,multiple:g,type:"file",style:{display:"none"},onChange:u(dt(C,ut)),onClick:u(dt(w,D)),tabIndex:-1},N,V);return B(B({},z),I)}},[V,i,g,ut,o]);return B(B({},kt),{},{isFocused:Vt&&!o,getRootProps:f,getInputProps:h,rootRef:$,inputRef:V,open:u(tt)})}function Fn(t,e){switch(e.type){case"focus":return B(B({},t),{},{isFocused:!0});case"blur":return B(B({},t),{},{isFocused:!1});case"openDialog":return B(B({},ae),{},{isFileDialogActive:!0});case"closeDialog":return B(B({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":return B(B({},t),{},{isDragActive:e.isDragActive,isDragAccept:e.isDragAccept,isDragReject:e.isDragReject});case"setFiles":return B(B({},t),{},{acceptedFiles:e.acceptedFiles,fileRejections:e.fileRejections});case"reset":return B({},ae);default:return t}}function Ce(){}const ze=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,je=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`,Se=x.img`
  display: block;
  width: 182px;
  height: 182px;
  border-radius: 40px;
`,Ae=x.div`
  display: flex;
  align-items: center;
`,En=x.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`,Rn=x.p`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`,Tn=x.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`,In=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  min-height: 224px;
`,Mn=x.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  transition: transform 300ms;

  &:hover{
  transform: scale(1.1);
  }
`,Wn=x.svg`
  width: 24px;
  height: 24px;
  stroke:var(--clr-brand-blue);
`,On=x.svg`
  fill: none;

`,Bn=x.svg`
  fill: none;
  stroke:var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Pn=x.svg`
  stroke:var(--clr-brand-red);
  width: 24px;
  height: 24px;
`,Xn=({isUserUpdate:t,setUserPhoto:e})=>{const{data:i=[],isLoading:o}=oe(),[r,c]=S.useState(null),[m,g]=S.useState(!1),F=P=>{c(P[0])},{getRootProps:W,getInputProps:O,isDragActive:L}=$e({onDrop:F,accept:{"image/jpeg":[],"image/png":[]}});S.useEffect(()=>{g(!1)},[r]);const it=()=>{e(r),g(!0)};return l.jsx(l.Fragment,{children:o?l.jsx("h1",{children:"loading.."}):l.jsx(ze,{children:l.jsxs(ze,{children:[l.jsx("input",{type:"file",name:"image",...O()}),l.jsxs(In,{children:[r?l.jsx(je,{children:l.jsx(Se,{src:URL.createObjectURL(r),alt:"User's file",style:{maxWidth:"300px"}})}):l.jsx(je,{children:l.jsx(Se,{src:i.user.avatarURL?i.user.avatarURL:"https://res.cloudinary.com/de2bdafop/image/upload/v1690014491/default-avatar_zfllbo.png",alt:"Default avatar",style:{maxWidth:"300px"}})}),!t&&l.jsx(Ae,{children:r&&!m?l.jsxs(Ae,{children:[l.jsx(En,{type:"button",onClick:it,children:l.jsx(Bn,{children:l.jsx("use",{href:st+"#iconCheck"})})}),l.jsx(Rn,{children:"Confirm"}),l.jsx(Tn,{type:"button",onClick:()=>c(null),children:l.jsx(Pn,{children:l.jsx("use",{href:st+"#iconCross"})})})]}):l.jsxs(Mn,{...W(),className:`dropzone ${L?"active":""}`,type:"button",children:[l.jsx(Wn,{children:l.jsx(On,{children:l.jsx("use",{href:st+"#iconCamera"})})}),"Edit photo"]})})]})]})})})},_n=x.div`
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--clr-backdrop);
    z-index:101;
`;function Ke({children:t,isOpen:e}){const i=Le(),o=re(Fe),[r,c]=S.useState(!0),m=g=>{g.target.id==="4"&&(console.log(g.target.id),o&&c(!1)(i(Zt(!1))),e&&e(!1))};return r&&ni.createPortal(l.jsx(_n,{id:"4",onClick:g=>m(g),children:t}),document.getElementById("modal-root"))}var Ye={exports:{}};(function(t){(function(e,i){t.exports=i(e)})(typeof Gt>"u"?typeof window>"u"?Gt:window:Gt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var i,o,r,c,m,g=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,F='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',W={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},O={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},L={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},it={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},P={Show:"Show",Ask:"Ask",Prompt:"Prompt"},pt={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},M={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},T={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},nt={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},X=function(n){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+n+g)},et=function(n){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+n+g)},Y=function(n){return n||(n="head"),e.document[n]!==null||(X(`
Notiflix needs to be appended to the "<`+n+'>" element, but you called it before the "<'+n+'>" element has been created.'),!1)},mt=function(n,a){if(!Y("head"))return!1;if(n()!==null&&!e.document.getElementById(a)){var s=e.document.createElement("style");s.id=a,s.innerHTML=n(),e.document.head.appendChild(s)}},j=function(){var n={},a=!1,s=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(a=arguments[0],s++);for(var u=function(b){for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&(n[k]=a&&Object.prototype.toString.call(b[k])==="[object Object]"?j(n[k],b[k]):b[k])};s<arguments.length;s++)u(arguments[s]);return n},_=function(n){var a=e.document.createElement("div");return a.innerHTML=n,a.textContent||a.innerText||""},gt=function(n,a){n||(n="110px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+n+'" height="'+n+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return s},bt=function(n,a){n||(n="110px"),a||(a="#ff5549");var s='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+n+'" height="'+n+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return s},Mt=function(n,a){n||(n="110px"),a||(a="#eebf31");var s='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+n+'" height="'+n+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return s},jt=function(n,a){n||(n="110px"),a||(a="#26c0d3");var s='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+n+'" height="'+n+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return s},ht=function(n,a){n||(n="60px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+a+'" width="'+n+'" height="'+n+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return s},$=function(n,a){n||(n="60px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+a+'" width="'+n+'" height="'+n+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return s},V=function(n,a){n||(n="60px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+n+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+n+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+n+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+a+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return s},Wt=function(n,a){n||(n="60px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" fill="'+a+'" width="'+n+'" height="'+n+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return s},St=function(n,a){n||(n="60px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" fill="'+a+'" width="'+n+'" height="'+n+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return s},kt=function(n,a){n||(n="60px"),a||(a="#32c682");var s='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+a+'" width="'+n+'" height="'+n+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return s},Q=function(n,a,s){n||(n="60px"),a||(a="#f8f8f8"),s||(s="#32c682");var u='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+n+'" height="'+n+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+a+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+s+'" stroke="'+s+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return u},Vt=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},yt=0,xt=function(n,a,s,u){if(!Y("body"))return!1;i||K.Notify.init({});var b=j(!0,i,{});if(typeof s=="object"&&!Array.isArray(s)||typeof u=="object"&&!Array.isArray(u)){var k={};typeof s=="object"?k=s:typeof u=="object"&&(k=u),i=j(!0,i,k)}var y=i[n.toLocaleLowerCase("en")];yt++,typeof a!="string"&&(a="Notiflix "+n),i.plainText&&(a=_(a)),!i.plainText&&a.length>i.messageMaxLength&&(i=j(!0,i,{closeButton:!0,messageMaxLength:150}),a='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),a.length>i.messageMaxLength&&(a=a.substring(0,i.messageMaxLength)+"..."),i.fontAwesomeIconStyle==="shadow"&&(y.fontAwesomeIconColor=y.background),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.getElementById(O.wrapID)||e.document.createElement("div");if(f.id=O.wrapID,f.style.width=i.width,f.style.zIndex=i.zindex,f.style.opacity=i.opacity,i.position==="center-center"?(f.style.left=i.distance,f.style.top=i.distance,f.style.right=i.distance,f.style.bottom=i.distance,f.style.margin="auto",f.classList.add("nx-flex-center-center"),f.style.maxHeight="calc((100vh - "+i.distance+") - "+i.distance+")",f.style.display="flex",f.style.flexWrap="wrap",f.style.flexDirection="column",f.style.justifyContent="center",f.style.alignItems="center",f.style.pointerEvents="none"):i.position==="center-top"?(f.style.left=i.distance,f.style.right=i.distance,f.style.top=i.distance,f.style.bottom="auto",f.style.margin="auto"):i.position==="center-bottom"?(f.style.left=i.distance,f.style.right=i.distance,f.style.bottom=i.distance,f.style.top="auto",f.style.margin="auto"):i.position==="right-bottom"?(f.style.right=i.distance,f.style.bottom=i.distance,f.style.top="auto",f.style.left="auto"):i.position==="left-top"?(f.style.left=i.distance,f.style.top=i.distance,f.style.right="auto",f.style.bottom="auto"):i.position==="left-bottom"?(f.style.left=i.distance,f.style.bottom=i.distance,f.style.top="auto",f.style.right="auto"):(f.style.right=i.distance,f.style.top=i.distance,f.style.left="auto",f.style.bottom="auto"),i.backOverlay){var D=e.document.getElementById(O.overlayID)||e.document.createElement("div");D.id=O.overlayID,D.style.width="100%",D.style.height="100%",D.style.position="fixed",D.style.zIndex=i.zindex-1,D.style.left=0,D.style.top=0,D.style.right=0,D.style.bottom=0,D.style.background=y.backOverlayColor||i.backOverlayColor,D.className=i.cssAnimation?"nx-with-animation":"",D.style.animationDuration=i.cssAnimation?i.cssAnimationDuration+"ms":"",e.document.getElementById(O.overlayID)||e.document.body.appendChild(D)}e.document.getElementById(O.wrapID)||e.document.body.appendChild(f);var h=e.document.createElement("div");h.id=i.ID+"-"+yt,h.className=i.className+" "+y.childClassName+" "+(i.cssAnimation?"nx-with-animation":"")+" "+(i.useIcon?"nx-with-icon":"")+" nx-"+i.cssAnimationStyle+" "+(i.closeButton&&typeof s!="function"?"nx-with-close-button":"")+" "+(typeof s=="function"?"nx-with-callback":"")+" "+(i.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=i.fontSize,h.style.color=y.textColor,h.style.background=y.background,h.style.borderRadius=i.borderRadius,h.style.pointerEvents="all",i.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+i.fontFamily+'", '+F,i.cssAnimation&&(h.style.animationDuration=i.cssAnimationDuration+"ms");var p="";if(i.closeButton&&typeof s!="function"&&(p='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!i.useIcon)h.innerHTML='<span class="nx-message">'+a+"</span>"+(i.closeButton?p:"");else if(i.useFontAwesome)h.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+i.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+(i.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+a+"</span>"+(i.closeButton?p:"");else{var d="";n===W.Success?d='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===W.Failure?d='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===W.Warning?d='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===W.Info&&(d='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=d+'<span class="nx-message nx-with-icon">'+a+"</span>"+(i.closeButton?p:"")}if(i.position==="left-bottom"||i.position==="right-bottom"){var N=e.document.getElementById(O.wrapID);N.insertBefore(h,N.firstChild)}else e.document.getElementById(O.wrapID).appendChild(h);var C=e.document.getElementById(h.id);if(C){var w,I,z=function(){C.classList.add("nx-remove");var v=e.document.getElementById(O.overlayID);v&&0>=f.childElementCount&&v.classList.add("nx-remove"),clearTimeout(w)},G=function(){if(C&&C.parentNode!==null&&C.parentNode.removeChild(C),0>=f.childElementCount&&f.parentNode!==null){f.parentNode.removeChild(f);var v=e.document.getElementById(O.overlayID);v&&v.parentNode!==null&&v.parentNode.removeChild(v)}clearTimeout(I)};if(i.closeButton&&typeof s!="function"){var J=e.document.getElementById(h.id).querySelector("span.nx-close-button");J.addEventListener("click",function(){z();var v=setTimeout(function(){G(),clearTimeout(v)},i.cssAnimationDuration)})}if((typeof s=="function"||i.clickToClose)&&C.addEventListener("click",function(){typeof s=="function"&&s(),z();var v=setTimeout(function(){G(),clearTimeout(v)},i.cssAnimationDuration)}),!i.closeButton&&typeof s!="function"){var U=function(){w=setTimeout(function(){z()},i.timeout),I=setTimeout(function(){G()},i.timeout+i.cssAnimationDuration)};U(),i.pauseOnHover&&(C.addEventListener("mouseenter",function(){C.classList.add("nx-paused"),clearTimeout(w),clearTimeout(I)}),C.addEventListener("mouseleave",function(){C.classList.remove("nx-paused"),U()}))}}if(i.showOnlyTheLastOne&&0<yt)for(var H,E=e.document.querySelectorAll("[id^="+i.ID+"-]:not([id="+i.ID+"-"+yt+"])"),ot=0;ot<E.length;ot++)H=E[ot],H.parentNode!==null&&H.parentNode.removeChild(H);i=j(!0,i,b)},Ot=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},lt=function(n,a,s,u,b,k){if(!Y("body"))return!1;o||K.Report.init({});var y={};if(typeof b=="object"&&!Array.isArray(b)||typeof k=="object"&&!Array.isArray(k)){var f={};typeof b=="object"?f=b:typeof k=="object"&&(f=k),y=j(!0,o,{}),o=j(!0,o,f)}var D=o[n.toLocaleLowerCase("en")];typeof a!="string"&&(a="Notiflix "+n),typeof s!="string"&&(n===L.Success?s='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':n===L.Failure?s='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':n===L.Warning?s='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':n===L.Info&&(s='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof u!="string"&&(u="Okay"),o.plainText&&(a=_(a),s=_(s),u=_(u)),o.plainText||(a.length>o.titleMaxLength&&(a="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',u="Okay"),s.length>o.messageMaxLength&&(a="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',u="Okay"),u.length>o.buttonMaxLength&&(a="Possible HTML Tags Error",s='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',u="Okay")),a.length>o.titleMaxLength&&(a=a.substring(0,o.titleMaxLength)+"..."),s.length>o.messageMaxLength&&(s=s.substring(0,o.messageMaxLength)+"..."),u.length>o.buttonMaxLength&&(u=u.substring(0,o.buttonMaxLength)+"..."),o.cssAnimation||(o.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=it.ID,h.className=o.className,h.style.zIndex=o.zindex,h.style.borderRadius=o.borderRadius,h.style.fontFamily='"'+o.fontFamily+'", '+F,o.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center";var p="",d=o.backOverlayClickToClose===!0;o.backOverlay&&(p='<div class="'+o.className+"-overlay"+(o.cssAnimation?" nx-with-animation":"")+(d?" nx-report-click-to-close":"")+'" style="background:'+(D.backOverlayColor||o.backOverlayColor)+";animation-duration:"+o.cssAnimationDuration+'ms;"></div>');var N="";if(n===L.Success?N=gt(o.svgSize,D.svgColor):n===L.Failure?N=bt(o.svgSize,D.svgColor):n===L.Warning?N=Mt(o.svgSize,D.svgColor):n===L.Info&&(N=jt(o.svgSize,D.svgColor)),h.innerHTML=p+'<div class="'+o.className+"-content"+(o.cssAnimation?" nx-with-animation ":"")+" nx-"+o.cssAnimationStyle+'" style="width:'+o.width+"; background:"+o.backgroundColor+"; animation-duration:"+o.cssAnimationDuration+'ms;"><div style="width:'+o.svgSize+"; height:"+o.svgSize+';" class="'+o.className+'-icon">'+N+'</div><h5 class="'+o.className+'-title" style="font-weight:500; font-size:'+o.titleFontSize+"; color:"+D.titleColor+';">'+a+'</h5><p class="'+o.className+'-message" style="font-size:'+o.messageFontSize+"; color:"+D.messageColor+';">'+s+'</p><a id="NXReportButton" class="'+o.className+'-button" style="font-weight:500; font-size:'+o.buttonFontSize+"; background:"+D.buttonBackground+"; color:"+D.buttonColor+';">'+u+"</a></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var C=function(){var z=e.document.getElementById(h.id);z.classList.add("nx-remove");var G=setTimeout(function(){z.parentNode!==null&&z.parentNode.removeChild(z),clearTimeout(G)},o.cssAnimationDuration)},w=e.document.getElementById("NXReportButton");if(w.addEventListener("click",function(){typeof b=="function"&&b(),C()}),p&&d){var I=e.document.querySelector(".nx-report-click-to-close");I.addEventListener("click",function(){C()})}}o=j(!0,o,y)},Bt=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ct=function(n,a,s,u,b,k,y,f,D){if(!Y("body"))return!1;r||K.Confirm.init({});var h=j(!0,r,{});typeof D!="object"||Array.isArray(D)||(r=j(!0,r,D)),typeof a!="string"&&(a="Notiflix Confirm"),typeof s!="string"&&(s="Do you agree with me?"),typeof b!="string"&&(b="Yes"),typeof k!="string"&&(k="No"),typeof y!="function"&&(y=void 0),typeof f!="function"&&(f=void 0),r.plainText&&(a=_(a),s=_(s),b=_(b),k=_(k)),r.plainText||(a.length>r.titleMaxLength&&(a="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',b="Okay",k="..."),s.length>r.messageMaxLength&&(a="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',b="Okay",k="..."),(b.length||k.length)>r.buttonsMaxLength&&(a="Possible HTML Tags Error",s='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',b="Okay",k="...")),a.length>r.titleMaxLength&&(a=a.substring(0,r.titleMaxLength)+"..."),s.length>r.messageMaxLength&&(s=s.substring(0,r.messageMaxLength)+"..."),b.length>r.buttonsMaxLength&&(b=b.substring(0,r.buttonsMaxLength)+"..."),k.length>r.buttonsMaxLength&&(k=k.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=pt.ID,p.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),p.style.zIndex=r.zindex,p.style.padding=r.distance,r.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on"));var d=typeof r.position=="string"?r.position.trim():"center";p.classList.add("nx-position-"+d),p.style.fontFamily='"'+r.fontFamily+'", '+F;var N="";r.backOverlay&&(N='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var C="";typeof y=="function"&&(C='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+k+"</a>");var w="",I=null,z=void 0;if(n===P.Ask||n===P.Prompt){I=u||"";var G=n===P.Ask||200<I.length?Math.ceil(1.5*I.length):250,J=n===P.Prompt?'value="'+I+'"':"";w='<div><input id="NXConfirmValidationInput" type="text" '+J+' maxlength="'+G+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(p.innerHTML=N+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+a+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+s+w+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof y=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+b+"</a>"+C+"</div></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var U=e.document.getElementById(p.id),H=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");if(E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",function(v){var ft=v.target.value;if(n===P.Ask&&ft!==I)v.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success");else{n===P.Ask&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success"));var wt=(v.key||"").toLocaleLowerCase("en")==="enter"||v.keyCode===13;wt&&H.dispatchEvent(new Event("click"))}})),H.addEventListener("click",function(v){if(n===P.Ask&&I&&E){var ft=(E.value||"").toString();if(ft!==I)return E.focus(),E.classList.add("nx-validation-failure"),v.stopPropagation(),v.preventDefault(),v.returnValue=!1,v.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}typeof y=="function"&&(n===P.Prompt&&E&&(z=E.value||""),y(z)),U.classList.add("nx-remove");var wt=setTimeout(function(){U.parentNode!==null&&(U.parentNode.removeChild(U),clearTimeout(wt))},r.cssAnimationDuration)}),typeof y=="function"){var ot=e.document.getElementById("NXConfirmButtonCancel");ot.addEventListener("click",function(){typeof f=="function"&&(n===P.Prompt&&E&&(z=E.value||""),f(z)),U.classList.add("nx-remove");var v=setTimeout(function(){U.parentNode!==null&&(U.parentNode.removeChild(U),clearTimeout(v))},r.cssAnimationDuration)})}}r=j(!0,r,h)},Pt=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},at=function(n,a,s,u,b){if(!Y("body"))return!1;c||K.Loading.init({});var k=j(!0,c,{});if(typeof a=="object"&&!Array.isArray(a)||typeof s=="object"&&!Array.isArray(s)){var y={};typeof a=="object"?y=a:typeof s=="object"&&(y=s),c=j(!0,c,y)}var f="";if(typeof a=="string"&&0<a.length&&(f=a),u){f=f.length>c.messageMaxLength?_(f).toString().substring(0,c.messageMaxLength)+"...":_(f).toString();var D="";0<f.length&&(D='<p id="'+c.messageID+'" class="nx-loading-message" style="color:'+c.messageColor+";font-size:"+c.messageFontSize+';">'+f+"</p>"),c.cssAnimation||(c.cssAnimationDuration=0);var h="";if(n===M.Standard)h=ht(c.svgSize,c.svgColor);else if(n===M.Hourglass)h=$(c.svgSize,c.svgColor);else if(n===M.Circle)h=V(c.svgSize,c.svgColor);else if(n===M.Arrows)h=Wt(c.svgSize,c.svgColor);else if(n===M.Dots)h=St(c.svgSize,c.svgColor);else if(n===M.Pulse)h=kt(c.svgSize,c.svgColor);else if(n===M.Custom&&c.customSvgCode!==null&&c.customSvgUrl===null)h=c.customSvgCode||"";else if(n===M.Custom&&c.customSvgUrl!==null&&c.customSvgCode===null)h='<img class="nx-custom-loading-icon" width="'+c.svgSize+'" height="'+c.svgSize+'" src="'+c.customSvgUrl+'" alt="Notiflix">';else{if(n===M.Custom&&(c.customSvgUrl===null||c.customSvgCode===null))return X('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;h=Q(c.svgSize,"#f8f8f8","#32c682")}var p=parseInt((c.svgSize||"").replace(/[^0-9]/g,"")),d=e.innerWidth,N=p>=d?d-40+"px":p+"px",C='<div style="width:'+N+"; height:"+N+';" class="'+c.className+"-icon"+(0<f.length?" nx-with-message":"")+'">'+h+"</div>",w=e.document.createElement("div");if(w.id=A.ID,w.className=c.className+(c.cssAnimation?" nx-with-animation":"")+(c.clickToClose?" nx-loading-click-to-close":""),w.style.zIndex=c.zindex,w.style.background=c.backgroundColor,w.style.animationDuration=c.cssAnimationDuration+"ms",w.style.fontFamily='"'+c.fontFamily+'", '+F,w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.alignItems="center",w.style.justifyContent="center",c.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.innerHTML=C+D,!e.document.getElementById(w.id)&&(e.document.body.appendChild(w),c.clickToClose)){var I=e.document.getElementById(w.id);I.addEventListener("click",function(){w.classList.add("nx-remove");var J=setTimeout(function(){w.parentNode!==null&&(w.parentNode.removeChild(w),clearTimeout(J))},c.cssAnimationDuration)})}}else if(e.document.getElementById(A.ID))var z=e.document.getElementById(A.ID),G=setTimeout(function(){z.classList.add("nx-remove");var J=setTimeout(function(){z.parentNode!==null&&(z.parentNode.removeChild(z),clearTimeout(J))},c.cssAnimationDuration);clearTimeout(G)},b);c=j(!0,c,k)},Xt=function(n){typeof n!="string"&&(n="");var a=e.document.getElementById(A.ID);if(a)if(0<n.length){n=n.length>c.messageMaxLength?_(n).substring(0,c.messageMaxLength)+"...":_(n);var s=a.getElementsByTagName("p")[0];if(s)s.innerHTML=n;else{var u=e.document.createElement("p");u.id=c.messageID,u.className="nx-loading-message nx-loading-message-new",u.style.color=c.messageColor,u.style.fontSize=c.messageFontSize,u.innerHTML=n,a.appendChild(u)}}else X("Where is the new message?")},Nt=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ut=0,tt=function(n,a,s,u,b,k){var y;if(Array.isArray(s)){if(1>s.length)return X("Array of HTMLElements should contains at least one HTMLElement."),!1;y=s}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,s)){if(1>s.length)return X("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;y=Array.prototype.slice.call(s)}else{var f=typeof s!="string"||1>(s||"").length||(s||"").length===1&&((s||"")[0]==="#"||(s||"")[0]===".");if(f)return X("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var D=e.document.querySelectorAll(s);if(1>D.length)return X('You called the "Notiflix.Block..." function with "'+s+'" selector, but there is no such element(s) in the document.'),!1;y=D}m||K.Block.init({});var h=j(!0,m,{});if(typeof u=="object"&&!Array.isArray(u)||typeof b=="object"&&!Array.isArray(b)){var p={};typeof u=="object"?p=u:typeof b=="object"&&(p=b),m=j(!0,m,p)}var d="";typeof u=="string"&&0<u.length&&(d=u),m.cssAnimation||(m.cssAnimationDuration=0);var N=nt.className;typeof m.className=="string"&&(N=m.className.trim());var C=typeof m.querySelectorLimit=="number"?m.querySelectorLimit:200,w=(y||[]).length>=C?C:y.length,I="nx-block-temporary-position";if(n){for(var z,G=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],J=0;J<w;J++)if(z=y[J],z){if(-1<G.indexOf(z.tagName.toLocaleLowerCase("en")))break;var U=z.querySelectorAll("[id^="+nt.ID+"]");if(1>U.length){var H="";a&&(a===T.Hourglass?H=$(m.svgSize,m.svgColor):a===T.Circle?H=V(m.svgSize,m.svgColor):a===T.Arrows?H=Wt(m.svgSize,m.svgColor):a===T.Dots?H=St(m.svgSize,m.svgColor):a===T.Pulse?H=kt(m.svgSize,m.svgColor):H=ht(m.svgSize,m.svgColor));var E='<span class="'+N+'-icon" style="width:'+m.svgSize+";height:"+m.svgSize+';">'+H+"</span>",ot="";0<d.length&&(d=d.length>m.messageMaxLength?_(d).substring(0,m.messageMaxLength)+"...":_(d),ot='<span style="font-size:'+m.messageFontSize+";color:"+m.messageColor+';" class="'+N+'-message">'+d+"</span>"),ut++;var v=e.document.createElement("div");v.id=nt.ID+"-"+ut,v.className=N+(m.cssAnimation?" nx-with-animation":""),v.style.position=m.position,v.style.zIndex=m.zindex,v.style.background=m.backgroundColor,v.style.animationDuration=m.cssAnimationDuration+"ms",v.style.fontFamily='"'+m.fontFamily+'", '+F,v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center",m.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.innerHTML=E+ot;var ft=e.getComputedStyle(z).getPropertyValue("position"),wt=typeof ft=="string"?ft.toLocaleLowerCase("en"):"relative",le=Math.round(1.25*parseInt(m.svgSize))+40,qe=z.offsetHeight||0,Qt="";le>qe&&(Qt="min-height:"+le+"px;");var ce="";ce=z.getAttribute("id")?"#"+z.getAttribute("id"):z.classList[0]?"."+z.classList[0]:(z.tagName||"").toLocaleLowerCase("en");var pe="",me=-1>=["absolute","relative","fixed","sticky"].indexOf(wt);if(me||0<Qt.length){if(!Y("head"))return!1;me&&(pe="position:relative!important;");var Ve='<style id="Style-'+nt.ID+"-"+ut+'">'+ce+"."+I+"{"+pe+Qt+"}</style>",fe=e.document.createRange();fe.selectNode(e.document.head);var Qe=fe.createContextualFragment(Ve);e.document.head.appendChild(Qe),z.classList.add(I)}z.appendChild(v)}}}else var Ge=function(q){var rt=setTimeout(function(){q.parentNode!==null&&q.parentNode.removeChild(q);var At=q.getAttribute("id"),_t=e.document.getElementById("Style-"+At);_t&&_t.parentNode!==null&&_t.parentNode.removeChild(_t),clearTimeout(rt)},m.cssAnimationDuration)},Je=function(q){if(q&&0<q.length)for(var rt,At=0;At<q.length;At++)rt=q[At],rt&&(rt.classList.add("nx-remove"),Ge(rt));else et(typeof s=="string"?'"Notiflix.Block.remove();" function called with "'+s+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+s+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Ze=function(q){var rt=setTimeout(function(){q.classList.remove(I),clearTimeout(rt)},m.cssAnimationDuration+300)},ti=setTimeout(function(){for(var q,rt=0;rt<w;rt++)q=y[rt],q&&(Ze(q),U=q.querySelectorAll("[id^="+nt.ID+"]"),Je(U));clearTimeout(ti)},k);m=j(!0,m,h)},K={Notify:{init:function(n){i=j(!0,O,n),mt(Vt,"NotiflixNotifyInternalCSS")},merge:function(n){return i?void(i=j(!0,i,n)):(X("You have to initialize the Notify module before call Merge function."),!1)},success:function(n,a,s){xt(W.Success,n,a,s)},failure:function(n,a,s){xt(W.Failure,n,a,s)},warning:function(n,a,s){xt(W.Warning,n,a,s)},info:function(n,a,s){xt(W.Info,n,a,s)}},Report:{init:function(n){o=j(!0,it,n),mt(Ot,"NotiflixReportInternalCSS")},merge:function(n){return o?void(o=j(!0,o,n)):(X("You have to initialize the Report module before call Merge function."),!1)},success:function(n,a,s,u,b){lt(L.Success,n,a,s,u,b)},failure:function(n,a,s,u,b){lt(L.Failure,n,a,s,u,b)},warning:function(n,a,s,u,b){lt(L.Warning,n,a,s,u,b)},info:function(n,a,s,u,b){lt(L.Info,n,a,s,u,b)}},Confirm:{init:function(n){r=j(!0,pt,n),mt(Bt,"NotiflixConfirmInternalCSS")},merge:function(n){return r?void(r=j(!0,r,n)):(X("You have to initialize the Confirm module before call Merge function."),!1)},show:function(n,a,s,u,b,k,y){ct(P.Show,n,a,null,s,u,b,k,y)},ask:function(n,a,s,u,b,k,y,f){ct(P.Ask,n,a,s,u,b,k,y,f)},prompt:function(n,a,s,u,b,k,y,f){ct(P.Prompt,n,a,s,u,b,k,y,f)}},Loading:{init:function(n){c=j(!0,A,n),mt(Pt,"NotiflixLoadingInternalCSS")},merge:function(n){return c?void(c=j(!0,c,n)):(X("You have to initialize the Loading module before call Merge function."),!1)},standard:function(n,a){at(M.Standard,n,a,!0,0)},hourglass:function(n,a){at(M.Hourglass,n,a,!0,0)},circle:function(n,a){at(M.Circle,n,a,!0,0)},arrows:function(n,a){at(M.Arrows,n,a,!0,0)},dots:function(n,a){at(M.Dots,n,a,!0,0)},pulse:function(n,a){at(M.Pulse,n,a,!0,0)},custom:function(n,a){at(M.Custom,n,a,!0,0)},notiflix:function(n,a){at(M.Notiflix,n,a,!0,0)},remove:function(n){typeof n!="number"&&(n=0),at(null,null,null,!1,n)},change:function(n){Xt(n)}},Block:{init:function(n){m=j(!0,nt,n),mt(Nt,"NotiflixBlockInternalCSS")},merge:function(n){return m?void(m=j(!0,m,n)):(X('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(n,a,s){tt(!0,T.Standard,n,a,s)},hourglass:function(n,a,s){tt(!0,T.Hourglass,n,a,s)},circle:function(n,a,s){tt(!0,T.Circle,n,a,s)},arrows:function(n,a,s){tt(!0,T.Arrows,n,a,s)},dots:function(n,a,s){tt(!0,T.Dots,n,a,s)},pulse:function(n,a,s){tt(!0,T.Pulse,n,a,s)},remove:function(n,a){typeof a!="number"&&(a=0),tt(!1,null,n,null,null,a)}}};return typeof e.Notiflix=="object"?j(!0,e.Notiflix,{Notify:K.Notify,Report:K.Report,Confirm:K.Confirm,Loading:K.Loading,Block:K.Block}):{Notify:K.Notify,Report:K.Report,Confirm:K.Confirm,Loading:K.Loading,Block:K.Block}})})(Ye);var Hn=Ye.exports;const Un=({isUserUpdate:t,setIsUserUpdate:e})=>{const i=re(ai),[o,r]=S.useState(!1),[c,m]=S.useState(null),{data:g,isLoading:F}=oe(),[W]=oi(),[O]=ri(),L=si(),it=A=>{A.date.split("-").reverse().join("-");const T=new FormData,nt=et=>{const Y=new Date(et),mt=String(Y.getDate()).padStart(2,"0"),j=String(Y.getMonth()+1).padStart(2,"0"),_=Y.getFullYear();return`${mt}-${j}-${_}`};let X;c?X={name:A.name,email:A.email,date:nt(A.date),phone:A.phone,city:A.city,image:c}:X={name:A.name,email:A.email,date:nt(A.date),phone:A.phone,city:A.city},Object.entries(X).forEach(([et,Y])=>{T.append(et,Y)}),W(c?T:X).unwrap().catch(et=>Hn.Notify.failure(et.data.message)),e(et=>!et)},P=()=>{r(!0)},pt=async()=>{await O(i).unwrap(),L("/login"),localStorage.removeItem("persist:auth"),window.location.reload()};S.useEffect(()=>{const A=T=>{T.keyCode===27&&r(!1)};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[]);const M=xi({name:Ht().min(3,"Ім'я надто коротке!").max(16,"Ім'я надто довге!").required("Поле потрібно заповнити"),date:ui().required("Введіть дату народження").max(new Date,"Дата не може бути у майбутньому"),email:Ht().email("Не правильний формат імейлу").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Не правильний формат імейлу").required("Імейл потрібно ввести"),city:Ht().min(3,"Назва міста надто коротке!").required("Поле потрібно заповнити"),phone:Ht().matches(/^\+\d{12}$/,"Телефон має містити '+' та довжину 12").min(13,"Номер надто короткий!").max(13,"Номер надто довгий").required("Поле потрібно заповнити")});return l.jsxs(l.Fragment,{children:[F?l.jsx(bi,{}):l.jsx(gi,{initialValues:{name:g.user.name?g.user.name:"",date:g.user.date?g.user.date.split("-").reverse().join("-"):"",email:g.user.email?g.user.email:"",city:(g.user.city,g.user.city),phone:g.user.phone?g.user.phone:""},validationSchema:M,onSubmit:it,children:({errors:A,touched:T})=>l.jsxs(hi,{children:[l.jsx(Xn,{isUserUpdate:t,setUserPhoto:m}),l.jsxs(yi,{children:[l.jsxs(wi,{children:[l.jsxs(Dt,{children:[l.jsxs(Lt,{children:[l.jsx(Et,{htmlFor:"name",children:"Ім'я:"}),l.jsx(Rt,{type:"text",name:"name",id:"name",placeholder:"Вікторія",disabled:t})]}),A.name&&T.name?l.jsx(Ft,{children:A.name}):null]}),l.jsxs(Dt,{children:[l.jsxs(Lt,{children:[l.jsx(Et,{htmlFor:"email",children:"Імейл:"}),l.jsx(Rt,{name:"email",id:"email",placeholder:"vikky2001@gmail.com|",disabled:t,className:`${T.name&&A.name?"is-invalid":""}`})]}),A.email&&T.email?l.jsx(Ft,{children:A.email}):null]}),l.jsxs(Dt,{children:[l.jsxs(Lt,{children:[l.jsx(Et,{htmlFor:"birthDate",children:"ДН:"}),l.jsx(Rt,{type:"date",name:"date",id:"date",placeholder:"00-00-0000",disabled:t})]}),A.date&&T.date?l.jsx(Ft,{children:A.date}):null]}),l.jsxs(Dt,{children:[l.jsxs(Lt,{children:[l.jsx(Et,{htmlFor:"phone",children:"Телефон:"}),l.jsx(Rt,{type:"phone",name:"phone",id:"phone",placeholder:"+38000000000",disabled:t})]}),A.phone&&T.phone?l.jsx(Ft,{children:A.phone}):null]}),l.jsxs(Dt,{children:[l.jsxs(Lt,{children:[l.jsx(Et,{htmlFor:"city",children:"Місто:"}),l.jsx(Rt,{type:"text",name:"city",id:"city",placeholder:"Київ",disabled:t})]}),A.city&&T.city?l.jsx(Ft,{children:A.city}):null]})]}),t?l.jsxs(vi,{type:"button",onClick:P,children:[l.jsx(Ci,{children:l.jsx("use",{href:st+"#iconLogout"})}),l.jsx(Ni,{children:"Вийти"})]}):l.jsx(ki,{type:"submit",children:"Зберегти"})]})]})}),o?l.jsx(Ke,{isOpen:r,children:l.jsxs(Si,{children:[l.jsx(Ai,{children:"Бажаєте вийти?"}),l.jsxs(Li,{children:[l.jsx(Fi,{onClick:()=>r(!1),children:"Ні"}),l.jsxs(Ei,{onClick:()=>pt(),children:["Так",l.jsx(zi,{children:l.jsx("use",{href:st+"#iconLogout"})})]})]}),l.jsx(Di,{onClick:()=>r(!1),children:l.jsx(ji,{children:l.jsx("use",{href:st+"#iconCross"})})})]})}):l.jsx("div",{})]})},$n=x.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 46px;
  @media screen and (min-width: 375px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
      gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 394px;
    margin-bottom: 16px;
  }
`,Kn=x.h2`
  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-weight: 500;
  line-height: normal;
    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`,Yn=x.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 20px 8px;

  background-color: var(--clr-bcg);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-right: 76px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 24px 21px 16px;
  }
`,De=x.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;

  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`,qn=x.svg`
  fill: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Vn=x.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`,Qn=x.svg`
  fill: var(--clr-primary-inv);
  width: 24px;
  height: 24px;
`,Gn=x.svg`
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;x.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;x.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  gap: 11px;
  width: 94px;
  padding: 0;
  background-color: transparent;
  border: none;
  margin-bottom: 22px;
  cursor: pointer;
`;x.label`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;

  cursor: pointer;
`;const Jn=x.h3`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;
    margin-bottom: 52px;
  }
`,Zn=x.p`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 0.94px;
    margin-bottom: 60px;
  }
`,ta=x.button`
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 12px;
  color: var(--clr-bcg);
  border-radius: 40px;
  border: none;
  background: var(--blue-links, #54adff);
`,ea=x.div`
  background-color: var(--clr-bcg-user);
  border-radius: 20px;
  padding: 68px 16px 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 5;
  @media screen and (min-width: 768px) {
    padding: 60px 129px 60px;
    width: 608px;
  }
`,ia=x.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`,na=()=>{const t=Le(),e=re(Fe);S.useEffect(()=>{const c=m=>{m.keyCode===27&&t(Zt(!1))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t]);const[i,o]=S.useState(!0),r=()=>{t(Zt(!1))};return l.jsx(l.Fragment,{children:l.jsxs($n,{children:[l.jsx(Kn,{children:"Мої дані:"}),l.jsxs(Yn,{children:[i?l.jsx(De,{onClick:()=>o(c=>!c),children:l.jsx(qn,{children:l.jsx("use",{href:st+"#iconEdit"})})}):l.jsx(De,{onClick:()=>o(c=>!c),children:l.jsx(Vn,{children:l.jsx("use",{href:st+"#iconCross"})})}),l.jsx(Un,{isUserUpdate:i,setIsUserUpdate:o}),e&&l.jsx(Ke,{children:l.jsxs(ea,{children:[l.jsx(Jn,{children:"Вітаємо!"}),l.jsx(Zn,{children:"Реєстрація успішна"}),l.jsxs(ta,{onClick:()=>{r()},type:"button",children:["Перейти до профілю",l.jsx(Qn,{children:l.jsx("use",{href:st+"#iconPaw"})})]}),l.jsx(ia,{onClick:()=>{r()},children:l.jsx(Gn,{children:l.jsx("use",{href:st+"#iconCross"})})})]})})]})]})})},aa=Z.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right:auto;
    @media only screen and (min-width: 768px) {
        font-size: 28px;
    }
`,oa=Z.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`;Z.li`
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 703px;
    padding: 20px 20px 0 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 40px;
  }
  @media only screen and (min-width: 1280px) {
    width: 821px;
    height: 100%;
    padding: 20px 28px 20px 20px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`;Z.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`;Z.li`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: 0.64px;
    line-height: 1.375;
  }

  h3 {
    display: inline;
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
      font-family: Manrope-SemiBold, sans-serif;
      font-weight: 600;
    }
  }
  p {
    display: inline;
    font-family: Manrope-Regular, sans-serif;
    font-weight: 400;
    @media only screen and (min-width: 768px) {
      font-family: Manrope-Regular, sans-serif;
      font-weight: 400;
    }
  }
`;Z.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54adff;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;Z.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: 24px;
  font-family: Manrope-Bold, sans-serif;
  font-weight: 700;
  letter-spacing: 0.96px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;Z.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: 14px;
  font-family: Manrope-Medium, sans-serif;
  font-weight: 500;
  letter-spacing: -0.14px;
  span {
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
  }
  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }
`;Z.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;Z.button`
  position: absolute;
  top: 272px;
  right: 16px;

  border: none;
  background-color: transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;const ra=Z.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 31px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 20px;
    max-width: 704px;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
    max-width: 821px;
  }
`,sa=Z(li)`
  border-radius: 50%;
  padding: 20px 18px 16px;
  color: var(--clr-primary-inv);
  background-color: var(--clr-brand-blue);
  margin-left: auto;
  font-size: 12px;

  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px 0px;

  position: fixed;
  bottom: 30px;
  z-index: 2;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  @media only screen and (min-width: 768px) {
    position: static;
    padding: 8px 20px;
    border-radius: 40px;

    bottom: auto;
    right: auto;

    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.64px;
    transition: 300ms;
    flex-shrink: 0;
    outline: none;

    div {
      flex-direction: row;
      gap: 8px;
      z-index: 2;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      width: 136px;
      height: 100%;
      background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);

      border-radius: 40px;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 0;
      
    }

    &:hover:before {
      opacity: 1;
    }

    /* &:hover div {
      color: var(--clr-primary-inv);
      z-index: 2;
    } */
  }
`;Z.svg`
  fill: none;
  stroke: var(--clr-brand-blue);
  width: 24px;
  height: 24px;
`;const la=Z.svg`
  stroke: var(--clr-bcg);
  width: 24px;
  height: 24px;
`,ca=x.p`
  margin: 0 auto 130px;
  text-align: center;
      @media only screen and (min-width: 1280px) {
      width: 821px;
    }

`,pa=()=>l.jsx(l.Fragment,{children:l.jsx(ca,{children:'Ви не додали своїх домашніх тварин, якщо ви хочете їх додати, натисніть на кнопку "Додати +"'})}),ma=x.li`
  padding: 16px 20px 40px;
  border-radius: 20px;
  background:var(--clr-bcg-user);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  width: 280px;
  position: relative;
  margin: auto;
  @media only screen and (min-width: 768px) {
    display:flex;
    width: 703px;
    padding: 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 40px;
  }
  @media only screen and (min-width: 1280px) {  
    width: 821px;;
    height: 100%;
    padding: 20px 28px 20px 20px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }
    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`,fa=x.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
    border-radius: 40px;
  }
`,$t=x.li`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 1280px) {
    font-size:16px;
    letter-spacing: 0.64px;
    line-height: 1.375;
  }
  
  h3 {
    display: inline;
    font-weight: 700;
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-weight: 600;
        font-size: 14px;
    }
        @media only screen and (min-width: 1280px) {
        font-size:16px;
    }
  }
  p {
    display: inline;
    word-break: break-all;
    white-space: normal;
    font-weight: 400;
    @media only screen and (min-width: 1280px) {
        font-size:16px;
    }
  }
`;x.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: #54ADFF;
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;x.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: 24px;
  font-family: Manrope-Bold, sans-serif;
  font-weight: 700;
  letter-spacing: 0.96px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;x.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: 14px;
  font-family: Manrope-Medium, sans-serif;
  font-weight: 500;
  letter-spacing: -0.14px;
  span {
    font-family: Manrope-Bold, sans-serif;
    font-weight: 700;
  }
  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }
`;x.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;const da=ci`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`,xa=x.button`
  position: absolute;
  top: 272px;
  right: 16px;
  
  border: none;
  background-color:transparent;
  padding: 0px;
  @media only screen and (min-width: 768px) {
  top: 20px;
  right: 20px;

  transition: transform 300ms;

  &:hover{
    animation: ${da} 0.5s ease;
  }
  }

`,ua=x.svg`
  fill:none;
  stroke:var(--clr-brand-blue) ;
  width: 24px;
  height: 24px;

`;function ga({pets:t}){const[e]=pi(),i=async o=>{await e(o).unwrap()};return l.jsxs(ma,{children:[l.jsx(xa,{onClick:()=>i(t._id),children:l.jsx(ua,{children:l.jsx("use",{href:st+"#iconTrash"})})}),l.jsx(fa,{src:t.avatarURL,alt:"user-pet"}),l.jsxs("ul",{children:[l.jsxs($t,{children:[l.jsxs("h3",{children:["$","Ім'я:"," "]}),l.jsx("p",{children:t.name})]}),l.jsxs($t,{children:[l.jsx("h3",{children:"Дата народження: "}),l.jsx("p",{children:t.date})]}),l.jsxs($t,{children:[l.jsx("h3",{children:"Порода: "}),l.jsx("p",{children:t.type})]}),l.jsxs($t,{children:[l.jsx("h3",{children:"Коментар: "}),l.jsx("p",{children:t.comments})]})]})]})}const ba=()=>{var e,i;const{data:t=[]}=oe();return l.jsxs("div",{children:[l.jsxs(ra,{children:[l.jsx(aa,{children:"Мої улубленці:"}),l.jsx(sa,{to:"/add-pet",state:{from:"/user"},children:l.jsxs("div",{children:["Додати",l.jsx(la,{children:l.jsx("use",{href:st+"#iconPlusSmall"})})]})})]}),l.jsx(oa,{children:t.pets&&((e=t.pets)==null?void 0:e.map(o=>l.jsx(ga,{pets:o},o._id)))}),((i=t.pets)==null?void 0:i.length)===0&&l.jsx(pa,{})]})},ha=Z.div`
  position: relative;
  margin-top: 20px;
  @media only screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 42px;
    display: flex;
    gap: 0px 32px;
  }
`;function ka(){return l.jsx(mi,{children:l.jsxs(ha,{children:[l.jsx(na,{}),l.jsx(ba,{})]})})}export{ka as default};
