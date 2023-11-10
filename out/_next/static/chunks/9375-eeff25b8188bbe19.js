(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9375],{54970:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var o=n(r(64938)),i=r(85893),s=(0,o.default)((0,i.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.Z=s},65582:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),o=r(87462),i=r(67294),s=r(70828),a=r(14142),l=r(34867),u=r(94780),c=r(65149),h=r(13264),d=r(66500),p=r(85893);let f=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,d.Z)(),m=(0,h.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,a.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemePropsDefault=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:g}),useUtilityClasses=(e,t)=>{let{classes:r,fixed:n,disableGutters:o,maxWidth:i}=e,s={root:["root",i&&`maxWidth${(0,a.Z)(String(i))}`,n&&"fixed",o&&"disableGutters"]};return(0,u.Z)(s,e=>(0,l.Z)(t,e),r)};var _=r(98216),b=r(90948),R=r(71657);let v=function(e={}){let{createStyledComponent:t=m,useThemeProps:r=useThemePropsDefault,componentName:a="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=i.forwardRef(function(e,t){let i=r(e),{className:u,component:c="div",disableGutters:h=!1,fixed:d=!1,maxWidth:g="lg"}=i,m=(0,n.Z)(i,f),_=(0,o.Z)({},i,{component:c,disableGutters:h,fixed:d,maxWidth:g}),b=useUtilityClasses(_,a);return(0,p.jsx)(l,(0,o.Z)({as:c,ownerState:_,className:(0,s.Z)(b.root,u),ref:t},m))});return u}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,_.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,R.Z)({props:e,name:"MuiContainer"})});var w=v},18972:function(e,t,r){"use strict";r.d(t,{Z:function(){return T}});var n=r(63366),o=r(87462),i=r(67294),s=r(63961),a=r(94780),l=r(41796),u=r(90948),c=r(71657),h=r(59773),d=r(47739),p=r(58974),f=r(51705),g=r(35097),m=r(84592),_=r(26336),b=r(1588),R=r(34867);function getMenuItemUtilityClass(e){return(0,R.Z)("MuiMenuItem",e)}let v=(0,b.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var w=r(85893);let y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],useUtilityClasses=e=>{let{disabled:t,dense:r,divider:n,disableGutters:i,selected:s,classes:l}=e,u=(0,a.Z)({root:["root",r&&"dense",t&&"disabled",!i&&"gutters",n&&"divider",s&&"selected"]},getMenuItemUtilityClass,l);return(0,o.Z)({},l,u)},E=(0,u.ZP)(d.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${_.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${_.Z.inset}`]:{paddingLeft:36},[`& .${m.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,o.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${m.Z.root} svg`]:{fontSize:"1.25rem"}}))),k=i.forwardRef(function(e,t){let r;let a=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:d=!1,divider:g=!1,disableGutters:m=!1,focusVisibleClassName:_,role:b="menuitem",tabIndex:R,className:v}=a,k=(0,n.Z)(a,y),T=i.useContext(h.Z),C=i.useMemo(()=>({dense:d||T.dense||!1,disableGutters:m}),[T.dense,d,m]),x=i.useRef(null);(0,p.Z)(()=>{l&&x.current&&x.current.focus()},[l]);let O=(0,o.Z)({},a,{dense:C.dense,divider:g,disableGutters:m}),N=useUtilityClasses(a),S=(0,f.Z)(x,t);return a.disabled||(r=void 0!==R?R:-1),(0,w.jsx)(h.Z.Provider,{value:C,children:(0,w.jsx)(E,(0,o.Z)({ref:S,role:b,tabIndex:r,component:u,focusVisibleClassName:(0,s.Z)(N.focusVisible,_),className:(0,s.Z)(N.root,v)},k,{ownerState:O,classes:N}))})});var T=k},13264:function(e,t,r){"use strict";var n=r(70182);let o=(0,n.ZP)();t.Z=o},11163:function(e,t,r){e.exports=r(59974)},86650:function(e,t,r){"use strict";r.d(t,{Jt:function(){return getDownloadURL},cF:function(){return getStorage},iH:function(){return ref},KV:function(){return uploadBytes}});var n,o,i,s,a=r(25816),l=r(74444),u=r(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c="firebasestorage.googleapis.com",h="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StorageError=class StorageError extends l.ZR{constructor(e,t,r=0){super(prependCode(e),`Firebase Storage: ${t} (${prependCode(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return prependCode(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};function prependCode(e){return"storage/"+e}function unknown(){return new StorageError(i.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function invalidArgument(e){return new StorageError(i.INVALID_ARGUMENT,e)}function appDeleted(){return new StorageError(i.APP_DELETED,"The Firebase app was deleted.")}function invalidFormat(e,t){return new StorageError(i.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function internalError(e){throw new StorageError(i.INTERNAL_ERROR,"Internal error: "+e)}(n=i||(i={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Location=class Location{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Location.makeFromUrl(e,t)}catch(t){return new Location(e,"")}if(""===r.path)return r;throw new StorageError(i.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",o=RegExp("^gs://"+n+"(/(.*))?$","i");function httpModify(e){e.path_=decodeURIComponent(e.path)}let s=t.replace(/[.]/g,"\\."),a=RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:httpModify},{regex:l,indices:{bucket:1,path:2},postModify:httpModify}];for(let t=0;t<u.length;t++){let n=u[t],o=n.regex.exec(e);if(o){let e=o[n.indices.bucket],t=o[n.indices.path];t||(t=""),r=new Location(e,t),n.postModify(r);break}}if(null==r)throw new StorageError(i.INVALID_URL,"Invalid URL '"+e+"'.");return r}};let FailRequest=class FailRequest{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function isString(e){return"string"==typeof e||e instanceof String}function isNativeBlob(e){return isNativeBlobDefined()&&e instanceof Blob}function isNativeBlobDefined(){return"undefined"!=typeof Blob&&!(0,l.UG)()}function validateNumber(e,t,r,n){if(n<t)throw invalidArgument(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw invalidArgument(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function makeUrl(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function makeQueryString(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let o=t(n)+"="+t(e[n]);r=r+o+"&"}return r.slice(0,-1)}(o=s||(s={}))[o.NO_ERROR=0]="NO_ERROR",o[o.NETWORK_ERROR=1]="NETWORK_ERROR",o[o.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NetworkRequest=class NetworkRequest{constructor(e,t,r,n,o,i,s,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=s,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let backoffDone=(e,t)=>{let r=this.resolve_,n=this.reject_,o=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(o,o.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==o){let e=unknown();e.serverResponse=o.getErrorText(),n(this.errorCallback_?this.errorCallback_(o,e):e)}else if(t.canceled){let e=this.appDelete_?appDeleted():new StorageError(i.CANCELED,"User canceled the upload/download.");n(e)}else{let e=new StorageError(i.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");n(e)}};this.canceled_?backoffDone(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let n=1,o=null,i=null,s=!1,a=0,l=!1;function triggerCallback(...e){l||(l=!0,t.apply(null,e))}function callWithDelay(t){o=setTimeout(()=>{o=null,e(responseHandler,2===a)},t)}function clearGlobalTimeout(){i&&clearTimeout(i)}function responseHandler(e,...t){let r;if(l){clearGlobalTimeout();return}if(e){clearGlobalTimeout(),triggerCallback.call(null,e,...t);return}let o=2===a||s;if(o){clearGlobalTimeout(),triggerCallback.call(null,e,...t);return}n<64&&(n*=2),1===a?(a=2,r=0):r=(n+Math.random())*1e3,callWithDelay(r)}let u=!1;function stop(e){!u&&(u=!0,clearGlobalTimeout(),!l&&(null!==o?(e||(a=2),clearTimeout(o),callWithDelay(0)):e||(a=1)))}return callWithDelay(0),i=setTimeout(()=>{s=!0,stop(!0)},r),stop}((e,t)=>{if(t){e(!1,new RequestEndStatus(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let progressListener=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(progressListener),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(progressListener),this.pendingConnection_=null;let t=r.getErrorCode()===s.NO_ERROR,n=r.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return r||n||o}(n,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===s.ABORT;e(!1,new RequestEndStatus(!1,null,t));return}let o=-1!==this.successCodes_.indexOf(n);e(!0,new RequestEndStatus(o,r))})},backoffDone,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}};let RequestEndStatus=class RequestEndStatus{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}};function getBlob$1(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(isNativeBlobDefined())return new Blob(e);throw new StorageError(i.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};let StringData=class StringData{constructor(e,t){this.data=e,this.contentType=t||null}};function utf8Bytes_(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let o=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(o){let o=n,i=e.charCodeAt(++r);n=65536|(1023&o)<<10|1023&i,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function base64Bytes_(e,t){let r;switch(e){case d.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw invalidFormat(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case d.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw invalidFormat(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new StorageError(i.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw invalidFormat(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}let DataURLParts=class DataURLParts{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw invalidFormat(d.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FbsBlob=class FbsBlob{constructor(e,t){let r=0,n="";isNativeBlob(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(isNativeBlob(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new FbsBlob(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new FbsBlob(r,!0)}}static getBlob(...e){if(isNativeBlobDefined()){let t=e.map(e=>e instanceof FbsBlob?e.data_:e);return new FbsBlob(getBlob$1.apply(null,t))}{let t=e.map(e=>isString(e)?function(e,t){switch(e){case d.RAW:return new StringData(utf8Bytes_(t));case d.BASE64:case d.BASE64URL:return new StringData(base64Bytes_(e,t));case d.DATA_URL:return new StringData(function(e){let t=new DataURLParts(e);return t.base64?base64Bytes_(d.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw invalidFormat(d.DATA_URL,"Malformed data URL.")}return utf8Bytes_(t)}(t.rest)}(t),function(e){let t=new DataURLParts(e);return t.contentType}(t))}throw unknown()}(d.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),o=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[o++]=e[t]}),new FbsBlob(n,!0)}}uploadData(){return this.data_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jsonObjectOrNull(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function lastComponent(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function noXform_(e,t){return t}let Mapping=class Mapping{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||noXform_}};let p=null;function getMappings(){if(p)return p;let e=[];e.push(new Mapping("bucket")),e.push(new Mapping("generation")),e.push(new Mapping("metageneration")),e.push(new Mapping("name","fullPath",!0));let t=new Mapping("name");t.xform=function(e,t){return!isString(t)||t.length<2?t:lastComponent(t)},e.push(t);let r=new Mapping("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new Mapping("timeCreated")),e.push(new Mapping("updated")),e.push(new Mapping("md5Hash",null,!0)),e.push(new Mapping("cacheControl",null,!0)),e.push(new Mapping("contentDisposition",null,!0)),e.push(new Mapping("contentEncoding",null,!0)),e.push(new Mapping("contentLanguage",null,!0)),e.push(new Mapping("contentType",null,!0)),e.push(new Mapping("metadata","customMetadata",!0)),p=e}function fromResourceString(e,t,r){let n=jsonObjectOrNull(t);return null===n?null:function(e,t,r){let n={};n.type="file";let o=r.length;for(let e=0;e<o;e++){let o=r[e];n[o.local]=o.xform(n,t[o.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,o=new Location(t,r);return e._makeStorageReference(o)}}),n}(e,n,r)}let RequestInfo=class RequestInfo{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function handlerCheck(e){if(!e)throw unknown()}function sharedErrorHandler(e){return function(t,r){var n,o;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new StorageError(i.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new StorageError(i.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,s=new StorageError(i.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,s=new StorageError(i.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}}let XhrConnection=class XhrConnection{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw internalError("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw internalError("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw internalError("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw internalError("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw internalError("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}};let XhrTextConnection=class XhrTextConnection extends XhrConnection{initXhr(){this.xhr_.responseType="text"}};function newTextConnection(){return new XhrTextConnection}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Reference=class Reference{constructor(e,t){this._service=e,t instanceof Location?this._location=t:this._location=Location.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Reference(e,t)}get root(){let e=new Location(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lastComponent(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new Location(this._location.bucket,e);return new Reference(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new StorageError(i.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}};function extractBucket(e,t){let r=null==t?void 0:t[h];return null==r?null:Location.makeFromBucketSpec(r,e)}let FirebaseStorageImpl=class FirebaseStorageImpl{constructor(e,t,r,n,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=o,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=Location.makeFromBucketSpec(n,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,e):this._bucket=extractBucket(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Reference(this,e)}_makeRequest(e,t,r,n,o=!0){if(this._deleted)return new FailRequest(appDeleted());{let i=function(e,t,r,n,o,i,s=!0){let a=makeQueryString(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(u.Authorization="Firebase "+r),u["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager"),null!==n&&(u["X-Firebase-AppCheck"]=n),new NetworkRequest(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,s)}(e,this._appId,r,n,t,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}};let f="@firebase/storage",g="0.11.2",m="storage";function uploadBytes(e,t,r){return function(e,t,r){e._throwIfRoot("uploadBytes");let n=function(e,t,r,n,o){let s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},l=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+l;let u=function(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}(t,n,o),c=function(e,t){let r={},n=t.length;for(let o=0;o<n;o++){let n=t[o];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}(u,r),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+l+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",d=FbsBlob.getBlob(h,n,"\r\n--"+l+"--");if(null===d)throw new StorageError(i.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let p={name:u.fullPath},f=makeUrl(s,e.host,e._protocol),g=e.maxUploadRetryTime,m=new RequestInfo(f,"POST",function(t,n){let o=fromResourceString(e,n,r);return handlerCheck(null!==o),o},g);return m.urlParams=p,m.headers=a,m.body=d.uploadData(),m.errorHandler=sharedErrorHandler(t),m}(e.storage,e._location,getMappings(),new FbsBlob(t,!0),r);return e.storage.makeRequestWithTokens(n,newTextConnection).then(t=>({metadata:t,ref:e}))}(e=(0,l.m9)(e),t,r)}function getDownloadURL(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),o=makeUrl(n,e.host,e._protocol),s=e.maxOperationRetryTime,a=new RequestInfo(o,"GET",function(t,n){let o=fromResourceString(e,n,r);return handlerCheck(null!==o),function(e,t,r,n){let o=jsonObjectOrNull(t);if(null===o||!isString(o.downloadTokens))return null;let i=o.downloadTokens;if(0===i.length)return null;let s=encodeURIComponent,a=i.split(","),l=a.map(t=>{let o=e.bucket,i=e.fullPath,a="/b/"+s(o)+"/o/"+s(i),l=makeUrl(a,r,n),u=makeQueryString({alt:"media",token:t});return l+u});return l[0]}(o,n,e.host,e._protocol)},s);return a.errorHandler=function(e){let t=sharedErrorHandler(e);return function(r,n){let o=t(r,n);if(404===r.getStatus()){var s;s=e.path,o=new StorageError(i.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}return o.serverResponse=n.serverResponse,o}}(t),a}(e.storage,e._location,getMappings());return e.storage.makeRequestWithTokens(t,newTextConnection).then(e=>{if(null===e)throw new StorageError(i.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function ref(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function refFromPath(e,t){if(e instanceof FirebaseStorageImpl){if(null==e._bucket)throw new StorageError(i.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h+"' property when initializing the app?");let r=new Reference(e,e._bucket);return null!=t?refFromPath(r,t):r}return void 0!==t?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new Location(e._location.bucket,r);return new Reference(e.storage,n)}(e,t):e}(e,t);if(e instanceof FirebaseStorageImpl)return new Reference(e,t);throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function getStorage(e=(0,a.Mq)(),t){e=(0,l.m9)(e);let r=(0,a.qX)(e,m),n=r.getImmediate({identifier:t}),o=(0,l.P0)("storage");return o&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:o}=n;o&&(e._overrideAuthToken="string"==typeof o?o:(0,l.Sg)(o,e.app.options.projectId))}(e,t,r,n)}(n,...o),n}(0,a.Xd)(new u.wA(m,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new FirebaseStorageImpl(r,n,o,t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(f,g,""),(0,a.KN)(f,g,"esm2017")}}]);