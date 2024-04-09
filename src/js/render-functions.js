//У файлі render-functions.js створи функції для 
//відображення елементів інтерфейсу.

//function createMarkup(arr) {
export default function createMarkup(arr) {
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