import{a as V}from"./chunk-NPHQPO7R.js";import{b as z}from"./chunk-SKS4KIWK.js";import{a as at,c as it}from"./chunk-FQFESERA.js";import{a as L}from"./chunk-7Q7EM4GB.js";import{a as et,b as ot}from"./chunk-3UQ6KOSY.js";import{e as q}from"./chunk-AVYFZZQO.js";import{b as $,c as H,e as J,f as K,i as W,m as X,o as Y,r as Z,s as tt}from"./chunk-3SVZZ3UA.js";import"./chunk-AESYL7IM.js";import{a as U,c as Q}from"./chunk-Q6P56HTY.js";import{H as b,a as G}from"./chunk-ZHBCQA4D.js";import"./chunk-NYRVL7EU.js";import"./chunk-HEOHOP3Y.js";import"./chunk-SFKR6NCK.js";import{$b as u,Fb as r,Gb as n,Hb as p,Hc as B,Ia as _,Mc as R,Ob as P,Qb as E,Qc as A,Rb as O,Sb as g,Ub as T,Wb as N,Xb as k,Zb as s,db as l,ea as M,eb as m,fc as f,ja as w,jc as I,lc as j,oa as c,pa as y,qa as C,ub as D,wb as d,yb as F,zb as S}from"./chunk-HITTG77O.js";import"./chunk-BY3KSYET.js";var mt=["*",[["mat-toolbar-row"]]],st=["*","mat-toolbar-row"],dt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=C({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let o=e;return o})(),rt=(()=>{let e=class e{constructor(a,t,i){this._elementRef=a,this._platform=t,this._document=i}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};e.\u0275fac=function(t){return new(t||e)(m(_),m(G),m(B))},e.\u0275cmp=c({type:e,selectors:[["mat-toolbar"]],contentQueries:function(t,i,x){if(t&1&&T(x,dt,5),t&2){let v;N(v=k())&&(i._toolbarRows=v)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(S(i.color?"mat-"+i.color:""),F("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[f],ngContentSelectors:st,decls:2,vars:0,template:function(t,i){t&1&&(O(mt),g(0),g(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let o=e;return o})();var nt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=M({imports:[b,b]});let o=e;return o})();function pt(o,e){if(o&1&&(r(0,"mat-card",11)(1,"span",12),s(2),n(),r(3,"span",13),s(4),I(5,"date"),n(),p(6,"br"),s(7),n()),o&2){let h=e.$implicit,a=E();l(2),u(" ",a.userData.displayName," "),l(2),u(" ",j(5,3,h.date,"dd/MM/yyyy")," "),l(3),u("",h.text," ")}}var kt=(()=>{let e=class e{constructor(a){this.fb=a,this.authService=w(z),this.messages=[],this.lastPath="home",this.authService.user$.pipe(L()).subscribe(t=>{t&&(this.userData={uid:t?.uid,email:t?.email,displayName:t?.displayName,photoURL:t?.phoneNumber,emailVerified:t?.emailVerified})}),this.messageForm=this.fb.group({message:["",H.required]})}ngOnInit(){}onSubmit(){if(this.messageForm.valid){let t={text:this.messageForm.value.message,date:new Date};this.messages.push(t),console.log("Message sent:",t),this.messageForm.reset()}}};e.\u0275fac=function(t){return new(t||e)(m(Z))},e.\u0275cmp=c({type:e,selectors:[["app-support"]],standalone:!0,features:[f],decls:14,vars:4,consts:[[1,"message-panel"],[1,"goBack-btn-wrap"],[3,"lastPath"],["color","secondary"],[1,"message-panel-body","mat-card"],["class","message-card",4,"ngFor","ngForOf"],[1,"message-panel-footer"],[3,"ngSubmit","formGroup"],[1,"full-width"],["matInput","","type","text","formControlName","message","placeholder","\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F..."],["mat-raised-button","","color","primary","type","submit",1,"form-btn",3,"disabled"],[1,"message-card"],[1,"message-title"],[1,"message-date"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1),p(2,"app-go-back-btn",2),n(),r(3,"mat-toolbar",3)(4,"h2"),s(5,"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430"),n()(),r(6,"div",4),D(7,pt,8,6,"mat-card",5),n(),r(8,"div",6)(9,"form",7),P("ngSubmit",function(){return i.onSubmit()}),r(10,"mat-form-field",8),p(11,"input",9),n(),r(12,"button",10),s(13," \u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 "),n()()()()),t&2&&(l(2),d("lastPath",i.lastPath),l(5),d("ngForOf",i.messages),l(2),d("formGroup",i.messageForm),l(3),d("disabled",i.messageForm.invalid))},dependencies:[tt,W,$,J,K,X,Y,ot,et,q,Q,U,nt,rt,it,at,R,A,V],styles:[".message-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:80vh}.message-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;width:100%;font-size:24px}.goBack-btn-wrap[_ngcontent-%COMP%]{padding:1rem}.message-date[_ngcontent-%COMP%]{font-size:.8em;color:gray}.message-title[_ngcontent-%COMP%]{width:100%;font-weight:600;margin-bottom:.5rem;border-bottom:1px solid #ccc}.mat-toolbar[_ngcontent-%COMP%]{z-index:1}.message-card[_ngcontent-%COMP%]{background-color:#f0f0f0;margin-bottom:10px;padding:.4rem}.message-panel-body[_ngcontent-%COMP%]{flex-grow:1;background-color:#f0f0f0;padding:10px;overflow-y:auto}.message-panel-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:10px;background-color:#f0f0f0;border-top:1px solid #ccc}.message-panel-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:500px;flex:1;display:flex}.full-width[_ngcontent-%COMP%]{width:100%;margin-right:10px}.form-btn[_ngcontent-%COMP%]{height:50px}"],changeDetection:0});let o=e;return o})();export{kt as SupportComponent};
