"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[546],{3094:function(){},2546:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var l=i(5160),n=(i(6338),i(8480)),o=(i(5590),i(2406)),r=(i(6615),i(8217)),a=(i(6870),i(6252)),s=i(6612);const c={slot:"left"},u={slot:"icon",style:{display:"flex","justify-content":"center"}},d={slot:"icon",style:{display:"flex","justify-content":"center"}},f={style:{"margin-left":"8px"}};function g(e,t,i,g,v,m){const h=r.JO,p=o.l2,k=n.Ee,b=l.bL;return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(p,{title:e.$t("settings"),onClickLeft:e._routerBack,placeholder:""},{default:(0,a.w5)((()=>[(0,a._)("template",c,[(0,a.Wm)(h,{name:"static/img/com_nav_ic_back_white.png",size:"22"})])])),_:1},8,["title","onClickLeft"]),(0,a.Wm)(b,{onClick:m.jumpPolicyAgreement,center:"","title-class":"title-style",title:e.$t("privacy_agreement"),"is-link":"",style:{"margin-top":"5px"}},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(k,{width:"24px",src:"static/img/setting_ic_privacy_policy.png"})])])),_:1},8,["onClick","title"]),(0,a.Wm)(b,{onClick:m.onVersionClick,center:"","title-class":"title-style","value-class":"val-cls",value:"v "+(this.$dsBridge.call("syn.getAppVersion","")||"1.0.0"),title:"Version",style:{"margin-top":"5px"}},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a.Wm)(k,{width:"24px",src:"static/img/setting_ic_version.png"})])])),_:1},8,["onClick","value"]),m.isLogin?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"align-center exit-txt",onClick:t[0]||(t[0]=(...e)=>m.onLogoutClick&&m.onLogoutClick(...e))},[(0,a.Wm)(k,{width:"24px",src:"static/img/setting_ic_logout.png"}),(0,a._)("div",f,(0,s.zw)(e.$t("logout")),1)])):(0,a.kq)("",!0),m.isTestPage?((0,a.wg)(),(0,a.iD)("div",{key:1,onClick:t[1]||(t[1]=t=>e._routePush("FactoryMain")),style:{width:"100vw",height:"50px",position:"fixed",bottom:"0"}})):(0,a.kq)("",!0)])}var v={name:"set-page",computed:{isLogin(){return this._isLogin()},isTestPage(){return this._isTest()}},data(){return{}},methods:{jumpPolicyAgreement(){this._routePush("PolicyAgreement")},onVersionClick(){this._showToast(this.h5VersionInfo),this.hideCode+="0"},onLogoutClick(){this._showConfirm("Log Out?",(()=>{this._routeReplace("LogoutPage")}),(()=>{}))}}},m=i(3744);const h=(0,m.Z)(v,[["render",g],["__scopeId","data-v-7088cb5f"]]);var p=h},1083:function(e,t,i){i.d(t,{ZP:function(){return v},x_:function(){return f}});var l=i(6252),n=i(3759),o=i(8443),r=i(293),a=i(1027),s=i(1690),c=i(8217);const[u,d]=(0,n["do"])("cell"),f={tag:(0,o.SQ)("div"),icon:String,size:String,title:o.Or,value:o.Or,label:o.Or,center:Boolean,isLink:Boolean,border:o.J5,required:Boolean,iconPrefix:String,valueClass:o.Vg,labelClass:o.Vg,titleClass:o.Vg,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},g=(0,r.l7)({},f,s.g2);var v=(0,l.aZ)({name:u,props:g,setup(e,{slots:t}){const i=(0,s.yj)(),n=()=>{const i=t.label||(0,a.Xq)(e.label);if(i)return(0,l.Wm)("div",{class:[d("label"),e.labelClass]},[t.label?t.label():e.label])},o=()=>{var i;if(t.title||(0,a.Xq)(e.title)){const o=null==(i=t.title)?void 0:i.call(t);if(Array.isArray(o)&&0===o.length)return;return(0,l.Wm)("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[o||(0,l.Wm)("span",null,[e.title]),n()])}},r=()=>{const i=t.value||t.default,n=i||(0,a.Xq)(e.value);if(n)return(0,l.Wm)("div",{class:[d("value"),e.valueClass]},[i?i():(0,l.Wm)("span",null,[e.value])])},u=()=>t.icon?t.icon():e.icon?(0,l.Wm)(c.JO,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection&&"right"!==e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return(0,l.Wm)(c.JO,{name:t,class:d("right-icon")},null)}};return()=>{var n;const{tag:a,size:s,center:c,border:g,isLink:v,required:m}=e,h=null!=(n=e.clickable)?n:v,p={center:c,required:m,clickable:h,borderless:!g};return s&&(p[s]=!!s),(0,l.Wm)(a,{class:d(p),role:h?"button":void 0,tabindex:h?0:void 0,onClick:i},{default:()=>{var e;return[u(),o(),r(),f(),null==(e=t.extra)?void 0:e.call(t)]}})}}})},5160:function(e,t,i){i.d(t,{bL:function(){return o}});var l=i(458),n=i(1083);const o=(0,l.n)(n.ZP)},6338:function(e,t,i){i(1958),i(368),i(6742),i(3094)},6870:function(e,t,i){i(1958),i(368),i(6742)},8480:function(e,t,i){i.d(t,{Ee:function(){return h}});var l=i(458),n=i(6252),o=i(2931),r=i(3759),a=i(8443),s=i(2639),c=i(1027),u=i(293),d=i(8217);const[f,g]=(0,r["do"])("image"),v={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:a.Or,height:a.Or,radius:a.Or,lazyLoad:Boolean,iconSize:a.Or,showError:a.J5,errorIcon:(0,a.SQ)("photo-fail"),iconPrefix:String,showLoading:a.J5,loadingIcon:(0,a.SQ)("photo")};var m=(0,n.aZ)({name:f,props:v,emits:["load","error"],setup(e,{emit:t,slots:i}){const l=(0,o.iH)(!1),r=(0,o.iH)(!0),a=(0,o.iH)(),{$Lazyload:f}=(0,n.FN)().proxy,v=(0,n.Fl)((()=>{const t={width:(0,s.Nn)(e.width),height:(0,s.Nn)(e.height)};return(0,c.Xq)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,s.Nn)(e.radius)),t}));(0,n.YP)((()=>e.src),(()=>{l.value=!1,r.value=!0}));const m=e=>{r.value&&(r.value=!1,t("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:a.value,enumerable:!0}),m(e)},p=e=>{l.value=!0,r.value=!1,t("error",e)},k=(t,i,l)=>l?l():(0,n.Wm)(d.JO,{name:t,size:e.iconSize,class:i,classPrefix:e.iconPrefix},null),b=()=>r.value&&e.showLoading?(0,n.Wm)("div",{class:g("loading")},[k(e.loadingIcon,g("loading-icon"),i.loading)]):l.value&&e.showError?(0,n.Wm)("div",{class:g("error")},[k(e.errorIcon,g("error-icon"),i.error)]):void 0,y=()=>{if(l.value||!e.src)return;const t={alt:e.alt,class:g("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?(0,n.wy)((0,n.Wm)("img",(0,n.dG)({ref:a},t),null),[[(0,n.Q2)("lazy"),e.src]]):(0,n.Wm)("img",(0,n.dG)({ref:a,src:e.src,onLoad:m,onError:p},t),null)},w=({el:e})=>{const t=()=>{e===a.value&&r.value&&h()};a.value?t():(0,n.Y3)(t)},x=({el:e})=>{e!==a.value||l.value||p()};return f&&u._f&&(f.$on("loaded",w),f.$on("error",x),(0,n.Jd)((()=>{f.$off("loaded",w),f.$off("error",x)}))),(0,n.bv)((()=>{(0,n.Y3)((()=>{var e;(null==(e=a.value)?void 0:e.complete)&&h()}))})),()=>{var t;return(0,n.Wm)("div",{class:g({round:e.round,block:e.block}),style:v.value},[y(),b(),null==(t=i.default)?void 0:t.call(i)])}}});const h=(0,l.n)(m)},5590:function(e,t,i){i(1958),i(368),i(6742),i(7179)},2406:function(e,t,i){i.d(t,{l2:function(){return h}});var l=i(458),n=i(6252),o=i(2931),r=i(3759),a=i(8443),s=i(2639),c=i(5314),u=i(9018),d=i(8217);const[f,g]=(0,r["do"])("nav-bar"),v={title:String,fixed:Boolean,zIndex:a.Or,border:a.J5,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:a.J5};var m=(0,n.aZ)({name:f,props:v,emits:["clickLeft","clickRight"],setup(e,{emit:t,slots:i}){const l=(0,o.iH)(),r=(0,u.J)(l,g),a=e=>t("clickLeft",e),f=e=>t("clickRight",e),v=()=>i.left?i.left():[e.leftArrow&&(0,n.Wm)(d.JO,{class:g("arrow"),name:"arrow-left"},null),e.leftText&&(0,n.Wm)("span",{class:g("text")},[e.leftText])],m=()=>i.right?i.right():(0,n.Wm)("span",{class:g("text")},[e.rightText]),h=()=>{const{title:t,fixed:o,border:r,zIndex:u}=e,d=(0,s.As)(u),h=e.leftArrow||e.leftText||i.left,p=e.rightText||i.right;return(0,n.Wm)("div",{ref:l,style:d,class:[g({fixed:o}),{[c.xe]:r,"van-safe-area-top":e.safeAreaInsetTop}]},[(0,n.Wm)("div",{class:g("content")},[h&&(0,n.Wm)("div",{class:[g("left"),e.clickable?c.e9:""],onClick:a},[v()]),(0,n.Wm)("div",{class:[g("title"),"van-ellipsis"]},[i.title?i.title():t]),p&&(0,n.Wm)("div",{class:[g("right"),e.clickable?c.e9:""],onClick:f},[m()])])])};return()=>e.fixed&&e.placeholder?r(h):h()}});const h=(0,l.n)(m)},6615:function(e,t,i){i(1958),i(368),i(6742)}}]);