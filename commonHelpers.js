import{S as u,i as a}from"./assets/vendor-038caae7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){return fetch(`https://pixabay.com/api/?key=42410938-e2284def214256f6c05887d1a&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{console.log(t)})}function p(o,t){const s=o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${e.likes}</p>
          <p class="info-item"><b>Views</b> ${e.views}</p>
          <p class="info-item"><b>Comments</b> ${e.comments}</p>
          <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
      `).join("");t.innerHTML=s,new u(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:200}).refresh()}const c=document.querySelector(".search-form"),d=document.querySelector(".gallery"),l=document.querySelector(".preloader");c.addEventListener("submit",o=>{o.preventDefault(),l.style.display="flex";const t=c.elements.searchQuery.value.trim();if(!t){a.error({message:"Please, fill the input",position:"topRight"}),l.style.display="none";return}f(t).then(s=>{p(s,d),s.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
