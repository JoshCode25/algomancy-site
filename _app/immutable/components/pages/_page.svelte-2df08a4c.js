import{S as q,i as z,s as A,k as p,x as P,a as j,q as E,l as u,m as y,y as V,c as I,r as N,h as l,n as h,b as G,D as s,z as M,C as T,f as H,t as W,A as B}from"../../chunks/index-817daa1c.js";import{C as F}from"../../chunks/CardContainer-36ade0a3.js";function J(g){let e,o,t,f,a,r,c,x,d,C,w,i,$,v;return t=new F({props:{cardInfo:g[0]}}),{c(){e=p("div"),o=p("div"),P(t.$$.fragment),f=j(),a=p("div"),r=p("h2"),c=E("Game Summary"),x=j(),d=p("p"),C=E(`Algomancy is a complete card game, meaning you will get every card
				needed to play the game all at once. No expensive singles, no problems
				with scarcity, just excellent gameplay at an affordable price.`),w=j(),i=p("p"),$=E(`The game is both a fully balanced and ready to play 8 player game as
				well as a card pool for a variety of constructed formats. So you can use
				it as a board game to play with your friends and a source of cards to
				battle it out in customizable constructed decks.`),this.h()},l(n){e=u(n,"DIV",{class:!0});var _=y(e);o=u(_,"DIV",{class:!0});var b=y(o);V(t.$$.fragment,b),f=I(b),a=u(b,"DIV",{class:!0});var m=y(a);r=u(m,"H2",{});var S=y(r);c=N(S,"Game Summary"),S.forEach(l),x=I(m),d=u(m,"P",{class:!0});var D=y(d);C=N(D,`Algomancy is a complete card game, meaning you will get every card
				needed to play the game all at once. No expensive singles, no problems
				with scarcity, just excellent gameplay at an affordable price.`),D.forEach(l),w=I(m),i=u(m,"P",{class:!0});var k=y(i);$=N(k,`The game is both a fully balanced and ready to play 8 player game as
				well as a card pool for a variety of constructed formats. So you can use
				it as a board game to play with your friends and a source of cards to
				battle it out in customizable constructed decks.`),k.forEach(l),m.forEach(l),b.forEach(l),_.forEach(l),this.h()},h(){h(d,"class","svelte-17jy6xd"),h(i,"class","svelte-17jy6xd"),h(a,"class","summaryContainer"),h(o,"class","queryWrapper svelte-17jy6xd"),h(e,"class","displayContainer svelte-17jy6xd")},m(n,_){G(n,e,_),s(e,o),M(t,o,null),s(o,f),s(o,a),s(a,r),s(r,c),s(a,x),s(a,d),s(d,C),s(a,w),s(a,i),s(i,$),v=!0},p:T,i(n){v||(H(t.$$.fragment,n),v=!0)},o(n){W(t.$$.fragment,n),v=!1},d(n){n&&l(e),B(t)}}}function K(g,e,o){let{data:t}=e,f=t.totalCardNames.length,a=t.totalCardNames[Math.floor(Math.random()*f)],r=t.totalCardInfo[a];return console.log(t),g.$$set=c=>{"data"in c&&o(1,t=c.data)},[r,t]}class Q extends q{constructor(e){super(),z(this,e,K,J,A,{data:1})}}export{Q as default};