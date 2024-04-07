import{i as h,S as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".js-search-form"),p=document.querySelector(".js-list");document.querySelector(".search-input");l.addEventListener("submit",d);function d(r){r.preventDefault();const{seachImage:s}=r.currentTarget.elements;console.log("seachImage = те, що ввели в поле пошуку ",s.value),m(s.value).then(o=>{console.log("data - результат пошуку",o),console.log("data - кількість результат пошуку",o.hits.length),o.hits.length===0&&h.error({title:"Error",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.innerHTML=f(o.hits),new c(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"})}).catch(o=>{alert(o)}),l.reset()}function m(r=""){const s="43270282-4a5d06b91258db09a976f913c",o=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api?${o}`).then(e=>{if(!e.ok)throw new Error("Ooooops!");return e.json()})}function f(r){return r.map(({id:s,webformatURL:o,tags:i,largeImageURL:e,likes:t,views:a,comments:n,downloads:u})=>`
        <li class="gallery-item" data-id=${s} heigth="200">
            <a class="gallery-link" href=${e}>
                <img src="${o}" alt="${i}" width="360">
            </a>
            <div class="gallery-word">
                <div class="gallery-opis">
                    <h2 class="title">Likes</h2>
                    <p  class="count">${t}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Views</h2>
                    <p  class="count">${a}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Comments</h2>
                    <p  class="count">${n}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Downloads</h2>
                    <p  class="count">${u}</p>
                </div>
            </div>
        </li>
    `).join("")}new c("js-list a",{captionPosition:"center",captionsData:"alt",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
