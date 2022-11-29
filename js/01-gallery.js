// Файл gallery-items.js містить масив galleryItems, який містить об'єкти з інформацією про зображення: маленьке (прев`ю), оригінальне (велике) і опис. Ми вже підключили його до кожного з JS-файлів проекту.

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1) Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// 2) Реалізація делегування на div.gallery і отримання url великого зображення.

// 3) Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// 4) Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// 5) Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */

//Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(
      (galleryItem) =>
        `<div class="gallery__item">
        <a clss="gallery__link" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        data-source="${galleryItem.original}"
        alt= "${galleryItem.description}"></a></div>`
    )
    .join("")
);

galleryEl.addEventListener("click", activateImage);

function activateImage(event) {
  event.preventDefault();

  console.log(event.target);
  console.log(event.target.nodeName);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  console.log(event.target.dataset);
  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  // close modal with ESC

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") instance.close();
  });
}
