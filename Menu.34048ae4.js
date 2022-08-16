import{r as i}from"./chunks/index.8879b91e.js";var n={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=i.exports,p=Symbol.for("react.element"),x=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,_=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,o){var r,s={},a=null,c=null;o!==void 0&&(a=""+o),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)f.call(e,r)&&!d.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:p,type:t,key:a,ref:c,props:s,_owner:_.current}}l.Fragment=x;l.jsx=u;l.jsxs=u;n.exports=l;const v=({active:t,action:e})=>n.exports.jsx("button",{onClick:e,className:` hamburger hamburger--squeeze ${t?"is-active":""} toggle-menu`,children:n.exports.jsx("span",{className:"hamburger-box",children:n.exports.jsx("span",{className:"hamburger-inner"})})}),h=[{title:"home",link:"/"},{title:"services",link:"/services"},{title:"contact",link:"/contact"}],g=({page:t})=>{const[e,o]=i.exports.useState(!1),r=()=>{o(!e)};return i.exports.useEffect(()=>{console.log(t)},[]),n.exports.jsxs("nav",{className:"main-nav",children:[n.exports.jsx(v,{active:e,action:r}),n.exports.jsx("ul",{className:`main-menu ${e?"is-active":""}`,children:h.map(s=>n.exports.jsx("li",{className:`main-menu__item ${t===s.title?"selected":""}`,children:n.exports.jsx("a",{href:`${s.link}`,className:"main-menu__link",children:s.title})},s.title))})]})};export{g as default};
