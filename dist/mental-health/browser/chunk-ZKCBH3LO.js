import"./chunk-RWRNJFLR.js";import"./chunk-THWSJGT3.js";import{a as O,b as A}from"./chunk-YWEX2SVU.js";import{a as M,e as S,f as v}from"./chunk-PKSHSUVV.js";import{b as x,c as a,e as y,f as w,i as D,m as P,o as B,p as _,q as N}from"./chunk-XA6XPR7X.js";import{a as h}from"./chunk-RZYUWMB6.js";import"./chunk-MPQ2VAF5.js";import"./chunk-EG6Y2IVM.js";import"./chunk-IX6G3U3V.js";import{a as F,c as C}from"./chunk-IQV7FEMG.js";import"./chunk-VKKZCV3X.js";import{m as b}from"./chunk-VKBFFX2I.js";import{a as E}from"./chunk-BKYAZJY5.js";import"./chunk-HEOHOP3Y.js";import"./chunk-Q6XNWYSG.js";import{Fb as t,Gb as e,Hb as m,Nb as c,Xb as n,db as l,dc as g,ja as s,oa as f,wb as p}from"./chunk-D746LQEN.js";import"./chunk-BY3KSYET.js";var Y=(()=>{let o=class o{constructor(){this.fb=s(_),this.authService=s(b),this.isLogin=!1,this.lastPath="home",this.profileForm=this.fb.group({name:["",a.required],email:["",[a.required,a.email]],password:["",[a.required,a.minLength(6)]]}),this.authService.user$.pipe(E()).subscribe(i=>{i&&this.profileForm.patchValue({name:i.displayName,email:i.email,password:"123456"})})}changeRole(){}onSubmit(){if(this.profileForm.valid){let{name:i,email:r,password:u}=this.profileForm.value;console.log("Form Submitted",{name:i,email:r,password:u})}}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=f({type:o,selectors:[["app-user-profile"]],standalone:!0,features:[g],decls:21,vars:3,consts:[[1,"profile-page"],[1,"btn-wrap"],[3,"lastPath"],[1,"profile-container"],[3,"ngSubmit","formGroup"],["appearance","fill",1,"form-group"],["matInput","","id","name","formControlName","name","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"],["matInput","","id","email","formControlName","email","type","email","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443"],["matInput","","id","password","formControlName","password","type","password","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(r,u){r&1&&(t(0,"div",0)(1,"div",1),m(2,"app-go-back-btn",2),e(),t(3,"div",3)(4,"h2"),n(5,"\u041F\u0440\u043E\u0444\u0456\u043B\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"),e(),t(6,"form",4),c("ngSubmit",function(){return u.onSubmit()}),t(7,"mat-form-field",5)(8,"mat-label"),n(9,"\u0418\u043C'\u044F"),e(),m(10,"input",6),e(),t(11,"mat-form-field",5)(12,"mat-label"),n(13," \u041F\u043E\u0448\u0442\u0430"),e(),m(14,"input",7),e(),t(15,"mat-form-field",5)(16,"mat-label"),n(17,"\u041F\u0430\u0440\u043E\u043B\u044C"),e(),m(18,"input",8),e(),t(19,"button",9),n(20," \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u0440\u043E\u0444\u0456\u043B\u044C "),e()()()()),r&2&&(l(2),p("lastPath",u.lastPath),l(4),p("formGroup",u.profileForm),l(13),p("disabled",u.profileForm.invalid))},dependencies:[v,S,M,A,O,C,F,N,D,x,y,w,P,B,h],styles:[".profile-page[_ngcontent-%COMP%]{padding:2rem}.profile-container[_ngcontent-%COMP%]{max-width:600px;height:60vh;margin:0 auto;padding:2rem;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 4px #0000001a;background-color:#fff}.btn-wrap[_ngcontent-%COMP%]{padding:1rem}.profile-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{margin-bottom:15px;width:100%}button[_ngcontent-%COMP%]{width:100%;padding:10px;margin-top:20px;font-size:16px}"],changeDetection:0});let d=o;return d})();export{Y as UserProfileComponent};
