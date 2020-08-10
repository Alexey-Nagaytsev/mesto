const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupSaveButton = popup.querySelector('.popup__save-button');


//открытие окна
const popupOpened = function() {
  popup.classList.add('popup_opened');
}
openPopupButton.addEventListener('click', popupOpened);

//закрытие окна
const popupClosed = function() {
  popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', popupClosed);

//редактирование данных
let formElement = document.querySelector('.popup__form');
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.

  // Находим поля формы в DOM
  let popupItemName = document.querySelector('.popup__item_name');
  let popupItemJob = document.querySelector('.popup__item_job');

  // Получите значение полей из свойства value
  let nameInput = popupItemName.value;
  let jobInput = popupItemJob.value;

  // Выберftv элементы, куда должны быть вставлены значения полей
  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle  = document.querySelector('.profile__subtitle');

  // новые значения
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler);

// сохранения данных
function saveValues() {
  popup.classList.remove('popup_opened');
}
popupSaveButton.addEventListener('click', saveValues);