//У файлі pixabay-api.js зберігай 
//функції для HTTP - запитів.

// Пишимо в main.js
// 	В render-functions.js - повинна бути функція яка створю розмітку. Імпортується в main.js
// 	В pixabay-api.js - робимо функцію запиту на сервер. Імпортується в main.js

//export default function serviceSearchPhoto(searchImage = "") {
// 	return `Welcome, ${username}!`;
// }


// function serviceSearchPhoto(searchImage = "") {
export default function serviceSearchPhoto(searchImage = "") {
    const API_KEY = "43270282-4a5d06b91258db09a976f913c";
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchImage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    const BASE_URL = "https://pixabay.com/api/";

    return fetch(`${BASE_URL}?${params}`)        
            .then(response => {
                if(!response.ok) {
                    throw new Error("Ooooops!");
                }
                return response.json();
            });
}