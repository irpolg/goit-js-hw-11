import iziToast from "izitoast";   // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів
import SimpleLightbox from "simplelightbox"; // Описаний у документації
import "simplelightbox/dist/simple-lightbox.min.css"; // Додатковий імпорт стилів
    const BASE_URL = "https://pixabay.com/api/";
const searchForm = document.querySelector(".js-search-form");
const list = document.querySelector(".js-list");
const inputPhoto = document.querySelector(".search-input");
const loader = document.querySelector(".loader");
loader.style.display = 'none';
searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { seachImage } = event.currentTarget.elements;
    //console.log("seachImage = те, що ввели в поле пошуку ", seachImage.value);
    loader.style.display = 'block';

    serviceSearchPhoto(seachImage.value)
        .then(data => {
            loader.style.display = 'none';
            // console.log("data - результат пошуку", data);
            // console.log("data - кількість результат пошуку", data.hits.length);
                if (data.hits.length === 0) {
                    iziToast.error({
                    title: 'Error',
                    titleColor: 'white',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFFFFF',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                });
                }

            list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
            const lightBox = new SimpleLightbox('.js-list a', {
                captions: true,
                captionsData: 'alt',
                captionPosition: 'bottom', 
            });

            lightBox.refresh();
            searchForm.reset();
            // 
        })
        .catch(error => {
            loader.style.display = 'none';
            alert(error);
        });
    searchForm.reset(); //очистити форму searchForm - це змінна на яку чіпляємо слухач
}    
    
function serviceSearchPhoto(seachImage = "") {
    const API_KEY = "43270282-4a5d06b91258db09a976f913c";
    const params = new URLSearchParams({
        key: API_KEY,
        q: seachImage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    // const BASE_URL = "https://pixabay.com/api/";

    return fetch(`${BASE_URL}?${params}`)        
            .then(response => {
                if(!response.ok) {
                    throw new Error("Ooooops!");
                }
                return response.json();
            });
}

function createMarkup(arr) {
    return arr.map(({
        id, webformatURL, tags, largeImageURL, likes, views, comments, downloads
        }) => `
        <li class="gallery-item" data-id=${id} heigth="200">
            <a class="gallery-link" href=${largeImageURL}>
                <img src="${webformatURL}" alt="${tags}" width="360">
            </a>
            <div class="gallery-word">
                <div class="gallery-opis">
                    <h2 class="title">Likes</h2>
                    <p  class="count">${likes}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Views</h2>
                    <p  class="count">${views}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Comments</h2>
                    <p  class="count">${comments}</p>
                </div>
                <div class="gallery-opis">
                    <h2 class="title">Downloads</h2>
                    <p  class="count">${downloads}</p>
                </div>
            </div>
        </li>
    `).join("");
}

// const lightbox = new SimpleLightbox('.js-list a', {
//     captionPosition: 'center', 
//     captionsData: 'alt',
//     captionsDelay: 250
// });