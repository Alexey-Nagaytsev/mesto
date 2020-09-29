//Массив карточек
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Карелия',
      link:  'https://images.unsplash.com/photo-1559029884-4e34093db5b7'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// попапы
let profilePopup = document.querySelector('.popup_changeProfile');
let addCardPopup = document.querySelector('.popup_addCard');
let imagePopup = document.querySelector('.popup_imagebox');
// кнопки
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = profilePopup.querySelector('.popup__close-button');
let popupSaveButton = profilePopup.querySelector('.popup__save-button');
let addCardPopupOpenButton = document.querySelector('.profile__add-button');
let addCardPopupCloseButton = document.querySelector('.popup__close-button_addCard');
let addCardPopupSaveButton = document.querySelector('.popup__button-save_addCard');
let imagePopupCloseButton = document.querySelector('.popup__imagebox-close');
//  поля форм
let popupItemName = document.querySelector('.popup__item_name');
let popupItemJob = document.querySelector('.popup__item_job');
let popupItemParagraph = document.querySelector('.popup__item_paragraph');
let popupItemLink = document.querySelector('.popup__item_link');
//  значения полей
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle  = document.querySelector('.profile__subtitle');
// переменные имени карточки и ссылки
let zoomCardImg = document.querySelector('.popup__imagebox-image');
let zoomCardText = document.querySelector('.popup__imagebox-text');
// темплейт и место для клонирования
let elementCard = document.querySelector('#element').content; // Находим темплейт
let elementsCards = document.querySelector('.elements');      // Находим место куда будем клонировать
//Функции................................................................................................
// Функция открытие/закрытия попапа профиля
const popupProfileToggle = function() {
  profilePopup.classList.toggle('popup_opened');
  popupItemName.value = profileTitle.textContent;
  popupItemJob.value = profileSubtitle.textContent;
}
//Функция открытия/закрытия попапа добавления карты
const addPopupToggle = function() {
  addCardPopup.classList.toggle('popup_opened');
  popupItemParagraph.value = 'Название';
  popupItemLink.value = 'Ссылка на картинку';
}
// Функция открытия / закрытия фотобокса
function imagePopupToggle() {
  imagePopup.classList.toggle('popup_opened');
}
//Функция редактирование данных
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // новые значения // сохранения данных
  profileTitle.textContent = popupItemName.value;
  profileSubtitle.textContent = popupItemJob.value;
  popupProfileToggle();
}
//Функция создания карточки
 function addNewCards (card) { 
const cardBox = elementCard.cloneNode(true);

cardBox.querySelector('.element__image').src = card.link;
cardBox.querySelector('.element__text').textContent = card.name;
//Функция удаление карточки
const deleteCard = cardBox.querySelector('.element__delete-button');
deleteCard.addEventListener('click', function() {
  deleteCard.closest('.element').remove();
});
//Функция лайка карточки
const likeButton = cardBox.querySelector('.element__like-button');
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__like-button_active');
  });
 //Увеличиваем фото
 const zoomphoto = cardBox.querySelector('.element__image');
 zoomphoto.addEventListener('click', function () {
  zoomCardImg.src = card.link;
  zoomCardText.textContent = card.name;
  imagePopupToggle();
 })
//Добавление карточки на страницу
  elementsCards.prepend(cardBox);
 }
 // Методом forEach и функцией addNewCards создаем все элементы массива
initialCards.forEach(addNewCards);

// Функция добавления новой карты пользавателем
function createNewCard (evt) {
  evt.preventDefault();

  const newCard = {
    name: popupItemParagraph.value,
    link: popupItemLink.value
  };

  addNewCards(newCard);
  addPopupToggle();
}

// Слушатели Открытия/Закрытия/Сохранения
popupOpenButton.addEventListener('click', popupProfileToggle);
popupCloseButton.addEventListener('click', popupProfileToggle);
profilePopup.addEventListener('submit', formSubmitHandler);
//////////////////////////////////////////////////////////
addCardPopupOpenButton.addEventListener('click', addPopupToggle);
addCardPopupCloseButton.addEventListener('click', addPopupToggle);
addCardPopupSaveButton.addEventListener('click', createNewCard);
imagePopupCloseButton.addEventListener('click', imagePopupToggle);