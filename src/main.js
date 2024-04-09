import iziToast from "izitoast";   // Описаний у документації
import "izitoast/dist/css/iziToast.min.css"; // Додатковий імпорт стилів
import SimpleLightbox from "simplelightbox"; // Описаний у документації
import "simplelightbox/dist/simple-lightbox.min.css"; // Додатковий імпорт стилів
import serviceSearchPhoto from "./js/pixabay-api";
import createMarkup from "./js/render-functions";

const searchForm = document.querySelector(".js-search-form");
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader");

loader.style.display = 'none';
searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { searchImage } = event.currentTarget.elements;
    loader.style.display = 'block';

    serviceSearchPhoto(searchImage.value)
        .then(data => {
            loader.style.display = 'none';
            if (data.hits.length === 0) {
                    
                iziToast.warning({
                    title: 'Caution',
                    titleColor: 'white',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFFFFF',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                });
                }

            list.innerHTML = createMarkup(data.hits);
            const lightBox = new SimpleLightbox('.js-list a', {
                captions: true,
                captionsData: 'alt',
                captionPosition: 'bottom', 
            });
            lightBox.refresh();
        })
        .catch(error => {
            loader.style.display = 'none';
            alert(error);
        });
    searchForm.reset(); //очистити форму searchForm - це змінна на яку чіпляємо слухач
}    
