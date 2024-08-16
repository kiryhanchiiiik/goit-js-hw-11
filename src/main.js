import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const preloader = document.querySelector('.preloader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  preloader.style.display = 'flex';
  const searchedValue = searchForm.elements.searchQuery.value.trim();

  if (!searchedValue) {
    iziToast.error({
      message: 'Please, fill the input',
      position: 'topRight',
    });
    preloader.style.display = 'none';
    return;
  }

  fetchImages(searchedValue)
    .then(images => {
      renderGallery(images, galleryContainer);

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      preloader.style.display = 'none';
    });
});
