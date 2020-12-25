const main = document.querySelector('.main');
const wrapper = document.querySelector('.wrapper');
const headerLogo = document.querySelector('.header__logo');
const modal = document.querySelector('.modal');

const minWidthToWorkOn = window.matchMedia('(max-width: 768px)');

const onTabletSizeMatch = () => {
  if (minWidthToWorkOn.matches) {
    wrapper.addEventListener('click', switchFrames);
    headerLogo.addEventListener('click', (evt) => evt.stopPropagation());
    modal.addEventListener('click', (evt) => evt.stopPropagation());
  } else {
    wrapper.removeEventListener('click', switchFrames);
    wrapper.removeEventListener('click', switchBack);
  }
};

const switchBack = () => {
  main.classList.add('main--back');

  setTimeout(() => {
    main.classList.remove('main--customers');
    main.classList.remove('main--back');
  }, 1000);

  wrapper.removeEventListener('click', switchBack);
  wrapper.addEventListener('click', switchFrames);
};

const switchFrames = () => {
  main.classList.add('main--customers');
  wrapper.removeEventListener('click', switchFrames);
  wrapper.addEventListener('click', switchBack);
};

const switchFrameInit = () => {
  onTabletSizeMatch();

  window.addEventListener('resize', () => {
    onTabletSizeMatch();
  });
};

export {switchFrameInit};
