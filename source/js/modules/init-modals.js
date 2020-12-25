import {setupModal} from '../utils/modal';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const modalLoader = document.querySelector('.modal--loader');

const activateMain = () => {
  header.classList.add('header--active');
  main.classList.add('main--active');
};

const onLoaderClose = () => {
  setTimeout(activateMain, 1000);
};

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  if (modalLoader) {
    setupModal(modalLoader, onLoaderClose, false, false, false);
  }
};

export {initModals};
