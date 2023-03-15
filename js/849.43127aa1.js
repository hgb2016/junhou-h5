"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[849],{3094:function(){},4746:function(e,t,l){l(1958),l(368),l(6742),l(2939),l(1452)},1083:function(e,t,l){l.d(t,{ZP:function(){return m},x_:function(){return f}});var n=l(6252),r=l(3759),a=l(8443),i=l(293),o=l(1027),s=l(1690),u=l(8217);const[c,d]=(0,r["do"])("cell"),f={tag:(0,a.SQ)("div"),icon:String,size:String,title:a.Or,value:a.Or,label:a.Or,center:Boolean,isLink:Boolean,border:a.J5,required:Boolean,iconPrefix:String,valueClass:a.Vg,labelClass:a.Vg,titleClass:a.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},g=(0,i.l7)({},f,s.g2);var m=(0,n.aZ)({name:c,props:g,setup(e,{slots:t}){const l=(0,s.yj)(),r=()=>{const l=t.label||(0,o.Xq)(e.label);if(l)return(0,n.Wm)("div",{class:[d("label"),e.labelClass]},[t.label?t.label():e.label])},a=()=>{var l;if(t.title||(0,o.Xq)(e.title)){const a=null==(l=t.title)?void 0:l.call(t);if(Array.isArray(a)&&0===a.length)return;return(0,n.Wm)("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[a||(0,n.Wm)("span",null,[e.title]),r()])}},i=()=>{const l=t.value||t.default,r=l||(0,o.Xq)(e.value);if(r)return(0,n.Wm)("div",{class:[d("value"),e.valueClass]},[l?l():(0,n.Wm)("span",null,[e.value])])},c=()=>t.icon?t.icon():e.icon?(0,n.Wm)(u.JO,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection&&"right"!==e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,n.Wm)(u.JO,{name:t,class:d("right-icon")},null)}};return()=>{var r;const{tag:o,size:s,center:u,border:g,isLink:m,required:v}=e,p=null!=(r=e.clickable)?r:m,b={center:u,required:v,clickable:p,borderless:!g};return s&&(b[s]=!!s),(0,n.Wm)(o,{class:d(b),role:p?"button":void 0,tabindex:p?0:void 0,onClick:l},{default:()=>{var e;return[c(),a(),i(),f(),null==(e=t.extra)?void 0:e.call(t)]}})}}})},5160:function(e,t,l){l.d(t,{bL:function(){return a}});var n=l(458),r=l(1083);const a=(0,n.n)(r.ZP)},8852:function(e,t,l){l.d(t,{gN:function(){return L}});var n=l(458),r=l(6252),a=l(2931),i=l(3759),o=l(8443),s=l(293),u=l(5314),c=l(1027),d=l(2639),f=l(6846);function g(e){return Array.isArray(e)?!e.length:0!==e&&!e}function m(e,t){if(g(e)){if(t.required)return!1;if(!1===t.validateEmpty)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}function v(e,t){return new Promise((l=>{const n=t.validator(e,t);(0,c.tI)(n)?n.then(l):l(n)}))}function p(e,t){const{message:l}=t;return(0,c.mf)(l)?l(e,t):l||""}function b({target:e}){e.composing=!0}function h({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function y(e,t){const l=(0,f.oD)();e.style.height="auto";let n=e.scrollHeight;if((0,c.Kn)(t)){const{maxHeight:e,minHeight:l}=t;void 0!==e&&(n=Math.min(n,e)),void 0!==l&&(n=Math.max(n,l))}n&&(e.style.height=`${n}px`,(0,f.kn)(l))}function k(e){return"number"===e?{type:"text",inputmode:"decimal"}:"digit"===e?{type:"tel",inputmode:"numeric"}:{type:e}}function S(e){return[...e].length}function W(e,t){return[...e].slice(0,t).join("")}var x=l(1083),w=l(590);let C=0;function V(){const e=(0,r.FN)(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return`${t}-${++C}`}var q=l(3466),B=l(8217),I=l(5160);const[M,P]=(0,i["do"])("field"),O={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:o.Or,formatter:Function,clearIcon:(0,o.SQ)("clear"),modelValue:(0,o.SI)(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:(0,o.SQ)("focus"),formatTrigger:(0,o.SQ)("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},F=(0,s.l7)({},x.x_,O,{rows:o.Or,type:(0,o.SQ)("text"),rules:Array,autosize:[Boolean,Object],labelWidth:o.Or,labelClass:o.Vg,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var A=(0,r.aZ)({name:M,props:F,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:l}){const n=V(),i=(0,a.qj)({status:"unvalidated",focused:!1,validateMessage:""}),o=(0,a.iH)(),x=(0,a.iH)(),C=(0,a.iH)(),{parent:M}=(0,w.NB)(u.WN),O=()=>{var t;return String(null!=(t=e.modelValue)?t:"")},F=t=>(0,c.Xq)(e[t])?e[t]:M&&(0,c.Xq)(M.props[t])?M.props[t]:void 0,A=(0,r.Fl)((()=>{const t=F("readonly");if(e.clearable&&!t){const t=""!==O(),l="always"===e.clearTrigger||"focus"===e.clearTrigger&&i.focused;return t&&l}return!1})),L=(0,r.Fl)((()=>C.value&&l.input?C.value():e.modelValue)),E=e=>e.reduce(((e,t)=>e.then((()=>{if("failed"===i.status)return;let{value:e}=L;if(t.formatter&&(e=t.formatter(e,t)),!m(e,t))return i.status="failed",void(i.validateMessage=p(e,t));if(t.validator){if(g(e)&&!1===t.validateEmpty)return;return v(e,t).then((l=>{l&&"string"===typeof l?(i.status="failed",i.validateMessage=l):!1===l&&(i.status="failed",i.validateMessage=p(e,t))}))}}))),Promise.resolve()),X=()=>{i.status="unvalidated",i.validateMessage=""},$=()=>t("endValidate",{status:i.status,message:i.validateMessage}),z=(l=e.rules)=>new Promise((n=>{X(),l?(t("startValidate"),E(l).then((()=>{"failed"===i.status?(n({name:e.name,message:i.validateMessage}),$()):(i.status="passed",n(),$())}))):n()})),J=t=>{if(M&&e.rules){const{validateTrigger:l}=M.props,n=(0,s.qo)(l).includes(t),r=e.rules.filter((e=>e.trigger?(0,s.qo)(e.trigger).includes(t):n));r.length&&z(r)}},T=t=>{var l;const{maxlength:n}=e;if((0,c.Xq)(n)&&S(t)>n){const e=O();if(e&&S(e)===+n)return e;const r=null==(l=o.value)?void 0:l.selectionEnd;if(i.focused&&r){const e=[...t],l=e.length-+n;return e.splice(r-l,l),e.join("")}return W(t,+n)}return t},D=(l,n="onChange")=>{const r=l;l=T(l);const a=S(r)-S(l);if("number"===e.type||"digit"===e.type){const t="number"===e.type;l=(0,d.uf)(l,t,t)}let s=0;if(e.formatter&&n===e.formatTrigger){const{formatter:t,maxlength:n}=e;if(l=t(l),(0,c.Xq)(n)&&S(l)>n&&(l=W(l,+n)),o.value&&i.focused){const{selectionEnd:e}=o.value,l=W(r,e);s=S(t(l))-S(l)}}if(o.value&&o.value.value!==l)if(i.focused){let{selectionStart:e,selectionEnd:t}=o.value;if(o.value.value=l,(0,c.Xq)(e)&&(0,c.Xq)(t)){const n=S(l);a?(e-=a,t-=a):s&&(e+=s,t+=s),o.value.setSelectionRange(Math.min(e,n),Math.min(t,n))}}else o.value.value=l;l!==e.modelValue&&t("update:modelValue",l)},H=e=>{e.target.composing||D(e.target.value)},j=()=>{var e;return null==(e=o.value)?void 0:e.blur()},N=()=>{var e;return null==(e=o.value)?void 0:e.focus()},Q=()=>{const t=o.value;"textarea"===e.type&&e.autosize&&t&&y(t,e.autosize)},Y=e=>{i.focused=!0,t("focus",e),(0,r.Y3)(Q),F("readonly")&&j()},R=e=>{F("readonly")||(i.focused=!1,D(O(),"onBlur"),t("blur",e),J("onBlur"),(0,r.Y3)(Q),(0,f.pe)())},Z=e=>t("clickInput",e),K=e=>t("clickLeftIcon",e),_=e=>t("clickRightIcon",e),G=e=>{(0,f.PF)(e),t("update:modelValue",""),t("clear",e)},U=(0,r.Fl)((()=>"boolean"===typeof e.error?e.error:!(!M||!M.props.showError||"failed"!==i.status)||void 0)),ee=(0,r.Fl)((()=>{const e=F("labelWidth");if(e)return{width:(0,d.Nn)(e)}})),te=l=>{const n=13;if(l.keyCode===n){const t=M&&M.props.submitOnEnter;t||"textarea"===e.type||(0,f.PF)(l),"search"===e.type&&j()}t("keypress",l)},le=()=>e.id||`${n}-input`,ne=()=>i.status,re=()=>{const t=P("control",[F("inputAlign"),{error:U.value,custom:!!l.input,"min-height":"textarea"===e.type&&!e.autosize}]);if(l.input)return(0,r.Wm)("div",{class:t,onClick:Z},[l.input()]);const a={id:le(),ref:o,name:e.name,rows:void 0!==e.rows?+e.rows:void 0,class:t,disabled:F("disabled"),readonly:F("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${n}-label`:void 0,onBlur:R,onFocus:Y,onInput:H,onClick:Z,onChange:h,onKeypress:te,onCompositionend:h,onCompositionstart:b};return"textarea"===e.type?(0,r.Wm)("textarea",a,null):(0,r.Wm)("input",(0,r.dG)(k(e.type),a),null)},ae=()=>{const t=l["left-icon"];if(e.leftIcon||t)return(0,r.Wm)("div",{class:P("left-icon"),onClick:K},[t?t():(0,r.Wm)(B.JO,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ie=()=>{const t=l["right-icon"];if(e.rightIcon||t)return(0,r.Wm)("div",{class:P("right-icon"),onClick:_},[t?t():(0,r.Wm)(B.JO,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},oe=()=>{if(e.showWordLimit&&e.maxlength){const t=S(O());return(0,r.Wm)("div",{class:P("word-limit")},[(0,r.Wm)("span",{class:P("word-num")},[t]),(0,r.Uk)("/"),e.maxlength])}},se=()=>{if(M&&!1===M.props.showErrorMessage)return;const t=e.errorMessage||i.validateMessage;if(t){const e=l["error-message"],n=F("errorMessageAlign");return(0,r.Wm)("div",{class:P("error-message",n)},[e?e({message:t}):t])}},ue=()=>{const t=F("colon")?":":"";return l.label?[l.label(),t]:e.label?(0,r.Wm)("label",{id:`${n}-label`,for:le()},[e.label+t]):void 0},ce=()=>[(0,r.Wm)("div",{class:P("body")},[re(),A.value&&(0,r.Wm)(B.JO,{ref:x,name:e.clearIcon,class:P("clear")},null),ie(),l.button&&(0,r.Wm)("div",{class:P("button")},[l.button()])]),oe(),se()];return(0,q.F)({blur:j,focus:N,validate:z,formValue:L,resetValidation:X,getValidationStatus:ne}),(0,r.JJ)(w.F1,{customValue:C,resetValidation:X,validateWithTrigger:J}),(0,r.YP)((()=>e.modelValue),(()=>{D(O()),X(),J("onChange"),(0,r.Y3)(Q)})),(0,r.bv)((()=>{D(O(),e.formatTrigger),(0,r.Y3)(Q)})),(0,w.OR)("touchstart",G,{target:(0,r.Fl)((()=>{var e;return null==(e=x.value)?void 0:e.$el}))}),()=>{const t=F("disabled"),n=F("labelAlign"),a=ae(),i=()=>{const e=ue();return"top"===n?[a,e].filter(Boolean):e||[]};return(0,r.Wm)(I.bL,{size:e.size,class:P({error:U.value,disabled:t,[`label-${n}`]:n}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ee.value,valueClass:P("value"),titleClass:[P("label",[n,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:a&&"top"!==n?()=>a:null,title:i,value:ce,extra:l.extra})}}});const L=(0,n.n)(A)},8008:function(e,t,l){l(1958),l(368),l(6742),l(3094)}}]);