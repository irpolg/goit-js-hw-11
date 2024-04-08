import{i as d,S as h}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",n=document.querySelector(".js-search-form"),f=document.querySelector(".js-list");document.querySelector(".search-input");const l=document.querySelector(".loader");l.style.display="none";n.addEventListener("submit",m);function m(i){i.preventDefault();const{seachImage:s}=i.currentTarget.elements;l.style.display="block",y(s.value).then(r=>{l.style.display="none",r.hits.length===0&&d.error({title:"Error",titleColor:"white",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f.insertAdjacentHTML("beforeend",g(r.hits)),new h(".js-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom"}).refresh(),n.reset()}).catch(r=>{l.style.display="none",alert(r)}),n.reset()}function y(i=""){const s="43270282-4a5d06b91258db09a976f913c",r=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${r}`).then(o=>{if(!o.ok)throw new Error("Ooooops!");return o.json()})}function g(i){return i.map(({id:s,webformatURL:r,tags:o,largeImageURL:e,likes:t,views:a,comments:c,downloads:u})=>`
        <li class="gallery-item" data-id=${s} heigth="200">
            <a class="gallery-link" href=${e}>
                <img src="${r}" alt="${o}" width="360">
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
                    <p  class="count">${u}</p>
                </div>
            </div>
        </li>
    `).join("")}
//# sourceMappingURL=commonHelpers.js.map
