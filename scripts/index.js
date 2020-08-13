let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupSaveButton = popup.querySelector('.popup__save-button');
// Находим форму
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let popupItemName = document.querySelector('.popup__item_name');
let popupItemJob = document.querySelector('.popup__item_job');
// Выбираем элементы, куда должны быть вставлены значения полей
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle  = document.querySelector('.profile__subtitle');

//открытие окна
const popupOpened = function() {
  popup.classList.add('popup_opened');
  profileTitle.value = nameInput.textContent;
  profileSubtitle.value = jobInput.textContent;
}

//закрытие окна
const popupClosed = function() {
  popup.classList.remove('popup_opened');
}

//редактирование данных
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. // Так мы можем определить свою логику отправки.
  // Получите значение полей из свойства value
  let nameInput = popupItemName.value;
  let jobInput = popupItemJob.value;
  // новые значения // сохранения данных
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
  popupClosed();
}

// Слушатели Открытия/Закрытия/Сохранения
openPopupButton.addEventListener('click', popupOpened);
popupCloseButton.addEventListener('click', popupClosed);
formElement.addEventListener('submit', formSubmitHandler);

