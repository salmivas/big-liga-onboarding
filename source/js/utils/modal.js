import {disableScrolling, enableScrolling} from './scroll-lock';

const openModal = (modal, callback, preventScrollLock) => {
  modal.classList.add('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    disableScrolling();
  }
};

const closeModal = (modal, callback, preventScrollLock) => {
  modal.classList.add('modal--inactive');
  setTimeout(() => {
    modal.classList.remove('modal--active');
  }, 1000);

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    setTimeout(enableScrolling, 300);
  }
};

const onEnterPress = (evt, modal, callback) => {
  const isEnterKey = evt.key === 'Enter' || evt.code === 'Enter';

  if (isEnterKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const setModalListeners = (modal, closeCallback, preventScrollLock) => {
  const closeBtn = modal.querySelector('.modal__close-btn');

  closeBtn.addEventListener('click', () => {
    closeModal(modal, closeCallback, preventScrollLock);
  });

  modal.addEventListener('click', () => {
    closeModal(modal, closeCallback, preventScrollLock);
  });

  document.addEventListener('keydown', (evt) => {
    onEnterPress(evt, modal, closeCallback, preventScrollLock);
  });
};

const setupModal = (modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) => {
  if (modalBtns) {
    modalBtns.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        if (!noPrevDefault) {
          evt.preventDefault();
        }
        openModal(modal, openCallback, preventScrollLock);
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};

export {setupModal, openModal, closeModal};
