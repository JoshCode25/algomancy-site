function A(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function M(t){t.forEach(Z)}function G(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Ht(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Ut(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,u){if(s){const r=tt(e,n,i,u);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}const et=typeof window<"u";let mt=et?()=>window.performance.now():()=>Date.now(),J=et?t=>requestAnimationFrame(t):A;const S=new Set;function nt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&J(nt)}function pt(t){let e;return S.size===0&&J(nt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let F=!1;function yt(){F=!0}function gt(){F=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:wt(1,s,h=>e[n[h]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(r[c],f)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=st("style");return vt(it(t),e),e.sheet}function vt(t,e){return bt(t.head||t,e),e.sheet}function Et(t,e){if(F){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){F&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Xt(){return K(" ")}function Yt(){return K("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,s=!1){kt(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function St(t,e,n,i){return ot(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return St(t,e,n,st)}function At(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function ne(t){return At(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e){t.value=e??""}function se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function oe(t,e){return new t(e)}const z=new Map;let B=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:$t(e),rules:{}};return z.set(t,n),n}function W(t,e,n,i,s,u,r,o=0){const c=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*u(y);l+=y*100+`%{${r(g,1-g)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Ct(f)}_${o}`,h=it(t),{stylesheet:a,rules:d}=z.get(h)||jt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,B+=1,_}function Ot(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Pt())}function Pt(){J(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),z.clear())})}let P;function O(t){P=t}function Q(){if(!P)throw new Error("Function called outside component initialization");return P}function ce(t){Q().$$.before_update.push(t)}function le(t){Q().$$.on_mount.push(t)}function ue(t){Q().$$.after_update.push(t)}const k=[],X=[],R=[],Y=[],ct=Promise.resolve();let U=!1;function lt(){U||(U=!0,ct.then(ut))}function ae(){return lt(),ct}function L(t){R.push(t)}const H=new Set;let N=0;function ut(){if(N!==0)return;const t=P;do{try{for(;N<k.length;){const e=k[N];N++,O(e),qt(e.$$)}}catch(e){throw k.length=0,N=0,e}for(O(null),k.length=0,N=0;X.length;)X.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];H.has(n)||(H.add(n),n())}R.length=0}while(k.length);for(;Y.length;)Y.pop()();U=!1,H.clear(),O(t)}function qt(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let j;function Dt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function I(t,e,n){t.dispatchEvent(Mt(`${e?"intro":"outro"}${n}`))}const T=new Set;let b;function fe(){b={r:0,c:[],p:b}}function _e(){b.r||M(b.c),b=b.p}function at(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),b.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Tt={duration:0};function de(t,e,n,i){const s={direction:"both"};let u=e(t,n,s),r=i?0:1,o=null,c=null,l=null;function f(){l&&Ot(t,l)}function _(a,d){const p=a.b-r;return d*=Math.abs(p),{a:r,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=ft,tick:g=A,css:$}=u||Tt,E={start:mt()+d,b:a};a||(E.group=b,b.r+=1),o||c?c=E:($&&(f(),l=W(t,r,a,p,d,y,$)),a&&g(0,1),o=_(E,p),L(()=>I(t,a,"start")),pt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,I(t,o.b,"start"),$&&(f(),l=W(t,r,o.b,o.duration,0,y,u.css))),o){if(v>=o.end)g(r=o.b,1-r),I(t,o.b,"end"),c||(o.b?f():--o.group.r||M(o.group.c)),o=null;else if(v>=o.start){const C=v-o.start;r=o.a+o.d*y(C/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){G(u)?Dt().then(()=>{u=u(s),h(a)}):h(a)},end(){f(),o=c=null}}}function he(t,e){Rt(t,1,1,()=>{e.delete(t.key)})}function me(t,e,n,i,s,u,r,o,c,l,f,_){let h=t.length,a=u.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,$=new Map;for(d=a;d--;){const m=_(s,u,d),w=n(m);let x=r.get(w);x?i&&x.p(m,e):(x=l(w,m),x.c()),g.set(w,y[d]=x),w in p&&$.set(w,Math.abs(d-p[w]))}const E=new Set,v=new Set;function C(m){at(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],x=m.key,q=w.key;m===w?(f=m.first,h--,a--):g.has(q)?!r.has(x)||E.has(x)?C(m):v.has(q)?h--:$.get(x)>$.get(q)?(v.add(x),C(m)):(E.add(q),h--):(c(w,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)C(y[a-1]);return y}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||L(()=>{const r=t.$$.on_mount.map(Z).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):M(r),t.$$.on_mount=[]}),u.forEach(L)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(k.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,s,u,r,o=[-1]){const c=P;O(t);const l=t.$$={fragment:null,ctx:[],props:u,update:A,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return l.ctx&&s(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&Lt(t,_)),h}):[],l.update(),f=!0,M(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){yt();const _=Nt(e.target);l.fragment&&l.fragment.l(_),_.forEach(rt)}else l.fragment&&l.fragment.c();e.intro&&at(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),gt(),ut()}O(c)}class we{$destroy(){Bt(this,1),this.$destroy=A}$on(e,n){if(!G(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,ae as B,A as C,Et as D,Ht as E,Ut as F,Jt as G,Kt as H,Gt as I,It as J,ce as K,Zt as L,Qt as M,ft as N,L as O,de as P,Wt as Q,re as R,we as S,me as T,M as U,he as V,Xt as a,Vt as b,ne as c,_e as d,Yt as e,at as f,fe as g,rt as h,ge as i,ue as j,st as k,ee as l,Nt as m,te as n,le as o,se as p,K as q,At as r,Ft as s,Rt as t,ie as u,X as v,oe as w,pe as x,ye as y,zt as z};