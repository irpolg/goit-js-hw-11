import{i as p,S as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".js-search-form"),h=document.querySelector(".js-list");document.querySelector(".search-input");const l=document.querySelector(".loader");l.style.display="none";c.addEventListener("submit",m);function m(r){r.preventDefault();const{seachImage:o}=r.currentTarget.elements;l.style.display="block",y(o.value).then(s=>{l.style.display="none",s.hits.length===0&&p.error({title:"Error",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),h.innerHTML=f(s.hits),new n(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"})}).catch(s=>{l.style.display="none",alert(s)}),c.reset()}function y(r=""){const o="43270282-4a5d06b91258db09a976f913c",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api?${s}`).then(e=>{if(!e.ok)throw new Error("Ooooops!");return e.json()})}function f(r){return r.map(({id:o,webformatURL:s,tags:i,largeImageURL:e,likes:t,views:a,comments:u,downloads:d})=>`
        <li class="gallery-item" data-id=${o} heigth="200">
            <a class="gallery-link" href=${e}>
                <img src="${s}" alt="${i}" width="360">
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
                    <p  class="count">${u}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Downloads</h2>
                    <p  class="count">${d}</p>
                </div>
            </div>
        </li>
    `).join("")}new n("js-list a",{captionPosition:"center",captionsData:"alt",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
