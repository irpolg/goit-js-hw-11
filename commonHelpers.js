import{i as u,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".js-search-form"),p=document.querySelector(".js-list"),l=document.querySelector(".loader");l.style.display="none";n.addEventListener("submit",f);function f(r){r.preventDefault();const{searchImage:o}=r.currentTarget.elements;l.style.display="block",m(o.value).then(s=>{l.style.display="none",console.log("data - результат пошуку",s),console.log("data - кількість результат пошуку",s.hits.length),s.hits.length===0&&u.warning({title:"Caution",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).then(()=>{p.insertAdjacentHTML("beforeend",y(data.hits)),new h(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"})}).catch(s=>{l.style.display="none",alert(s)}),n.reset()}function m(r=""){const o="43270282-4a5d06b91258db09a976f913c",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error("Ooooops!");return e.json()})}function y(r){return r.map(({id:o,webformatURL:s,tags:i,largeImageURL:e,likes:t,views:a,comments:c,downloads:d})=>`
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
                    <p  class="count">${c}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Downloads</h2>
                    <p  class="count">${d}</p>
                </div>
            </div>
        </li>
    `).join("")}
//# sourceMappingURL=commonHelpers.js.map
