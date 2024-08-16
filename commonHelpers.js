import{S as u,i as a}from"./assets/vendor-038caae7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function f(i){return fetch(`https://pixabay.com/api/?key=42410938-e2284def214256f6c05887d1a&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log(e)})}function p(i,e){const s=i.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}" class="gallery-link">
          <img src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${o.likes}</p>
          <p class="info-item"><b>Views</b> ${o.views}</p>
          <p class="info-item"><b>Comments</b> ${o.comments}</p>
          <p class="info-item"><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
      `).join("");e.innerHTML=s,d.refresh()}const d=new u(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:200}),c=document.querySelector(".search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".preloader");c.addEventListener("submit",i=>{i.preventDefault(),l.style.display="flex";const e=c.elements.searchQuery.value.trim();if(!e){a.error({message:"Please, fill the input",position:"topRight"}),l.style.display="none";return}f(e).then(s=>{p(s,m),s.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>{a.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
