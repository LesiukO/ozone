!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.querySelectorAll(".goods .card"),t=document.getElementById("min"),n=document.getElementById("max"),o=document.getElementById("discount-checkbox"),c=document.querySelector(".catalog-list li.active");e.forEach(e=>{const r=e.querySelector(".card-price"),l=parseFloat(r.textContent),a=e.querySelector(".card-sale");e.parentNode.style.display="",t.value&&l<t.value||n.value&&l>n.value?e.parentNode.style.display="none":o.checked&&!a?e.parentNode.style.display="none":c&&e.dataset.category!==c.textContent&&(e.parentNode.style.display="none")})}n.r(t),async function(){!function(e){const t=document.querySelector(".goods");e.goods.forEach(e=>{const n=document.createElement("div");n.className="col-12 col-md-6 col-lg-4 col-xl-3",n.innerHTML=`\n                            <div class="card" data-category="${e.category}">\n                                ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n                                <div class="card-img-wrapper">\n                                    <span class="card-img-top"\n                                        style="background-image: url('${e.img}')"></span>\n                                </div>\n                                <div class="card-body justify-content-between">\n                                    <div class="card-price" style="${e.sale?"color: red":""}">${e.price} ₽</div>\n                                    <h5 class="card-title">${e.title}</h5>\n                                    <button class="btn btn-primary">В корзину</button>\n                                </div>\n                            </div>\n        `,t.appendChild(n)})}(await function(){const e=document.querySelector(".goods");return fetch("../db/db.json").then(e=>{if(e.ok)return e.json();throw new Error("Данные не были получены, ошыбка: "+e.status)}).then(e=>e).catch(t=>{console.warn(t),e.innerHTML='<div style="color: red; font-size: 30px;">Упс что-то пошло не так!</div>'})}()),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".catalog"),n=document.querySelector(".catalog-list"),c=document.querySelector(".catalog-button"),r=new Set;e.forEach(e=>{r.add(e.dataset.category)}),r.forEach(e=>{const t=document.createElement("li");t.textContent=e,n.appendChild(t)});const l=n.querySelectorAll("li");c.addEventListener("click",e=>{t.style.display?t.style.display="":t.style.display="block","LI"===e.target.tagName&&(l.forEach(t=>{e.target===t?t.classList.add("active"):t.classList.remove("active")}),o())})}(),document.querySelectorAll("#discount-checkbox").forEach(e=>{e.addEventListener("change",function(){this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")})}),function(){const e=document.getElementById("cart"),t=document.querySelector(".cart"),n=document.querySelector(".cart-close");e.addEventListener("click",()=>{t.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",()=>{t.style.display="",document.body.style.overflow=""})}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.getElementById("cart-empty"),n=document.querySelector(".cart-wrapper"),o=document.querySelector(".counter");e.forEach(e=>{function c(){const e=n.querySelectorAll(".card"),c=n.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span");o.textContent=e.length;let l=0;c.forEach(e=>{let t=parseFloat(e.textContent);l+=t}),r.textContent=l,0===e.length?n.appendChild(t):t.remove()}e.querySelector("button").addEventListener("click",()=>{const t=e.cloneNode(!0);n.appendChild(t),c();const o=t.querySelector("button");o.textContent="Удалить из корзины",o.addEventListener("click",()=>{t.remove(),c()})})})}(),function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".search-wrapper_input"),n=document.querySelector(".search-btn"),c=document.getElementById("min"),r=document.getElementById("max");document.getElementById("discount-checkbox").addEventListener("change",o),c.addEventListener("change",o),r.addEventListener("change",o),n.addEventListener("click",()=>{const n=new RegExp(t.value.trim(),"i");e.forEach(e=>{const t=e.querySelector(".card-title");n.test(t.textContent)?e.parentNode.style.display="":e.parentNode.style.display="none"}),t.value=""})}()}()}]);