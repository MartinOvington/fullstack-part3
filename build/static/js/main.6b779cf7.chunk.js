(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(15),r=t.n(a),u=t(0),c=t.n(u),o=t(2),l=function(e){var n=e.name,t=e.number,a=e.pressDelete;return c.a.createElement("div",null,n," ",t,c.a.createElement("button",{onClick:function(){return a(n)}},"delete"))},i=function(e){var n=e.name,t=e.persons,a=e.pressDelete;return t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}).map(function(e){return c.a.createElement(l,{key:e.name,name:e.name,number:e.number,pressDelete:a})})},m=function(e){var n=e.func,t=e.name,a=e.handleNameChange,r=e.number,u=e.handleNumberChange;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:t,onChange:a})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:r,onChange:u})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.myFilter,t=e.handleFilterChange;return c.a.createElement("form",null,c.a.createElement("div",null,"filter shown with: ",c.a.createElement("input",{value:n,onChange:t})))},s=function(e){var n=e.message,t=e.msgType;return null===n?null:"updateMsg"===t?c.a.createElement("div",{className:"updateMsg"},n):c.a.createElement("div",{className:"error"},n)},d=t(3),h=t.n(d),b="/api/persons",p=function(){return h.a.get(b).then(function(e){return e.data})},v=function(e){return h.a.post(b,e).then(function(e){return e.data})},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then(function(e){return!0})},w=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(u.useState)(""),l=Object(o.a)(r,2),d=l[0],h=l[1],b=Object(u.useState)(""),w=Object(o.a)(b,2),j=w[0],O=w[1],C=Object(u.useState)(""),y=Object(o.a)(C,2),M=y[0],N=y[1],S=Object(u.useState)(""),T=Object(o.a)(S,2),k=T[0],D=T[1],F=Object(u.useState)(null),I=Object(o.a)(F,2),J=I[0],L=I[1];Object(u.useEffect)(function(){p().then(function(e){a(e)})},[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(s,{message:J,msgType:k}),c.a.createElement(f,{myFilter:M,handleFilterChange:function(e){N(e.target.value)}}),c.a.createElement("h2",null,"add a new"),c.a.createElement(m,{func:function(e){e.preventDefault();var n={name:d,number:j};if(t.some(function(e){return e.name===d})){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var r=t.find(function(e){return e.name===d}).id;E(r,n).then(function(e){a(t.filter(function(e){return e.name!==d}).concat(e)),h(""),O(""),D("updateMsg"),L("Updated ".concat(d,"'s number")),setTimeout(function(){L(null)},5e3)}).catch(function(e){D("errorMsg"),L("Information of ".concat(d," has already been removed from server")),setTimeout(function(){L(null)},5e3)})}}else v(n).then(function(e){a(t.concat(e)),h(""),O(""),D("updateMsg"),L("Added ".concat(d)),setTimeout(function(){L(null)},5e3)}).catch(function(e){D("errorMsg"),L("Information of ".concat(d," has already been removed from server")),setTimeout(function(){L(null)},5e3)})},name:d,handleNameChange:function(e){h(e.target.value)},number:j,handleNumberChange:function(e){O(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(i,{persons:t,name:M,pressDelete:function(e){if(window.confirm("Delete ".concat(e," ?"))){var n=t.find(function(n){return n.name===e}).id;g(n).then(function(e){e&&a(t.filter(function(e){return e.id!==n}))}).catch(function(n){D("errorMsg"),L("Information of ".concat(e," has already been removed from server")),setTimeout(function(){L(null)},5e3)})}}}))};t(39);r.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6b779cf7.chunk.js.map